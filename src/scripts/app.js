/**
 * app.js -- SPA router and scroll-reveal.
 * Nav, FAQ, portfolio tabs, and contact form logic live in their own Astro components.
 */

const SECTIONS = ['home', 'portfolio', 'hinnasto', 'yhteydenotto'];

function getSection() {
  const hash = location.hash.slice(1);
  return SECTIONS.includes(hash) ? hash : 'home';
}

function navigate(sectionId) {
  const target = SECTIONS.includes(sectionId) ? sectionId : 'home';
  history.pushState(null, '', target === 'home' ? '/' : '#' + target);
  activateSection(target);
  document.dispatchEvent(new CustomEvent('app:navigate', { detail: target }));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function restartHomeHeroLogo() {
  const heroLogo = document.querySelector('.hero-logo');
  if (!(heroLogo instanceof HTMLVideoElement)) return;

  const replay = () => {
    heroLogo.pause();
    heroLogo.currentTime = 0;
    const playPromise = heroLogo.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  };

  if (heroLogo.readyState >= 2) {
    replay();
  } else {
    heroLogo.addEventListener('loadeddata', replay, { once: true });
    heroLogo.load();
  }

  // Keep the fade animation in sync with replay.
  heroLogo.style.animation = 'none';
  void heroLogo.offsetWidth;
  heroLogo.style.animation = '';
}

function activateSection(id) {
  document.querySelectorAll('.page-section').forEach((el) => {
    el.classList.toggle('active', el.dataset.section === id);
  });
  scheduleReveal();

  if (id === 'home') {
    restartHomeHeroLogo();
  }
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-nav]');
  if (!el) return;
  e.preventDefault();
  navigate(el.dataset.nav);
});

window.addEventListener('popstate', () => {
  const section = getSection();
  activateSection(section);
  document.dispatchEvent(new CustomEvent('app:navigate', { detail: section }));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

function scheduleReveal() {
  requestAnimationFrame(() => {
    document.querySelectorAll('.page-section.active .reveal:not(.visible)').forEach((el) => {
      revealObserver.observe(el);
    });
  });
}

const initialSection = getSection();
activateSection(initialSection);
document.querySelectorAll('[data-nav]').forEach((el) => {
  el.dataset.nav === initialSection
    ? el.setAttribute('data-active', '')
    : el.removeAttribute('data-active');
});