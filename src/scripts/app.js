/**
 * app.js — SPA router, nav, animations, contact form.
 * Named sections: home | portfolio | hinnasto | yhteydenotto
 */

/* ─── Router ──────────────────────────────────────────────────────────── */
const SECTIONS = ['home', 'portfolio', 'hinnasto', 'yhteydenotto'];
const DEFAULT_SECTION = 'home';

function getSection() {
  const hash = location.hash.slice(1);
  return SECTIONS.includes(hash) ? hash : DEFAULT_SECTION;
}

function navigate(sectionId) {
  const target = SECTIONS.includes(sectionId) ? sectionId : DEFAULT_SECTION;

  // Update hash without scroll jump
  history.pushState(null, '', target === DEFAULT_SECTION ? '/' : `#${target}`);

  activateSection(target);
  updateNavLinks(target);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function activateSection(id) {
  document.querySelectorAll('.page-section').forEach(el => {
    el.classList.toggle('active', el.dataset.section === id);
  });
  // Trigger reveal for the newly shown section
  scheduleReveal();
}

function updateNavLinks(active) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    if (el.dataset.nav === active) {
      el.setAttribute('data-active', '');
    } else {
      el.removeAttribute('data-active');
    }
  });
}

/* ─── Nav intercept ───────────────────────────────────────────────────── */
document.addEventListener('click', e => {
  const link = e.target.closest('[data-nav]');
  if (!link) return;
  e.preventDefault();
  navigate(link.dataset.nav);
  closeMenu();
});

window.addEventListener('popstate', () => {
  const section = getSection();
  activateSection(section);
  updateNavLinks(section);
});

/* ─── Hamburger ───────────────────────────────────────────────────────── */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('open', !expanded);
});

function closeMenu() {
  hamburger?.setAttribute('aria-expanded', 'false');
  navLinks?.classList.remove('open');
}

/* Close menu when clicking outside */
document.addEventListener('click', e => {
  if (navLinks?.classList.contains('open') &&
      !e.target.closest('.site-nav')) {
    closeMenu();
  }
});

/* ─── Scroll-reveal observer ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

function scheduleReveal() {
  // Small delay so the section is visible before observing
  requestAnimationFrame(() => {
    document.querySelectorAll('.page-section.active .reveal:not(.visible)')
      .forEach(el => revealObserver.observe(el));
  });
}

/* ─── Portfolio tabs ──────────────────────────────────────────────────── */
function initPortfolioTabs() {
  const tabBar = document.querySelector('.tab-bar');
  if (!tabBar) return;

  tabBar.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const target = btn.dataset.tab;

    tabBar.querySelectorAll('.tab-btn').forEach(b => {
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });

    document.querySelectorAll('.tab-panel').forEach(p => {
      p.classList.toggle('active', p.dataset.panel === target);
    });
  });
}

/* ─── FAQ accordion ───────────────────────────────────────────────────── */
// Handled natively by <details>/<summary> HTML elements.

/* ─── Contact form ────────────────────────────────────────────────────── */
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  // EmailJS public key – set in HTML via data attribute
  const pubKey  = form.dataset.emailjsPublicKey;
  const service = form.dataset.emailjsService;
  const template = form.dataset.emailjsTemplate;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Lähetetään…';

    try {
      if (typeof emailjs !== 'undefined' && pubKey && service && template) {
        emailjs.init(pubKey);
        await emailjs.sendForm(service, template, form);
      }
      showStatus(status, 'success', form.dataset.successMsg || 'Viesti lähetetty!');
      form.reset();
    } catch {
      showStatus(status, 'error', form.dataset.errorMsg || 'Virhe lähetyksessä. Yritä uudelleen tai lähetä sähköpostilla.');
    } finally {
      btn.disabled = false;
      btn.textContent = form.dataset.submitLabel || 'Lähetä';
    }
  });

  // Inline validation on blur
  form.querySelectorAll('input[required], textarea[required]').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('input[required], textarea[required]').forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function validateField(field) {
  const errorEl = field.parentElement.querySelector('.field-error');
  let message = '';

  if (field.validity.valueMissing) {
    message = 'Tämä kenttä on pakollinen.';
  } else if (field.validity.typeMismatch && field.type === 'email') {
    message = 'Anna kelvollinen sähköpostiosoite.';
  }

  field.classList.toggle('invalid', !!message);
  if (errorEl) errorEl.textContent = message;

  return !message;
}

function showStatus(el, type, msg) {
  if (!el) return;
  el.className = `form-status ${type}`;
  el.textContent = msg;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ─── Lazy YouTube iframes ────────────────────────────────────────────── */
// Replace data-src with src when the embed scrolls into view
const iframeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const iframe = entry.target;
      if (iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
        delete iframe.dataset.src;
      }
      iframeObserver.unobserve(iframe);
    });
  },
  { rootMargin: '200px' }
);

document.querySelectorAll('iframe[data-src]').forEach(iframe => {
  iframeObserver.observe(iframe);
});

/* ─── Boot ────────────────────────────────────────────────────────────── */
function boot() {
  const section = getSection();
  activateSection(section);
  updateNavLinks(section);
  initPortfolioTabs();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
