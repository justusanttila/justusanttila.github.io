// script.js - Centralized JavaScript for the Site
// Universal: Hamburger menu, fade-in observer, lazy load fallback
// Page-Specific: Portfolio tabs, FAQ accordion, contact form validation
// Defer-loaded for performance; Conditional execution to avoid errors

// Universal: Hamburger Menu Toggle (With Animation) - Runs on All Pages
(function() {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('.nav ul');
  if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        // Open: Show and animate
        navUl.style.display = 'flex';
        setTimeout(() => navUl.classList.add('show'), 10); // Small delay for display to take effect
      } else {
        // Close: Reverse animate, then hide
        navUl.classList.remove('show');
        setTimeout(() => {
          if (hamburger.getAttribute('aria-expanded') === 'false') {
            navUl.style.display = 'none';
          }
        }, 400); // Match CSS transition duration
      }
    });

    // Close menu on link click (mobile only)
    navUl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          hamburger.setAttribute('aria-expanded', 'false');
          navUl.classList.remove('show');
          setTimeout(() => navUl.style.display = 'none', 400);
        }
      });
    });

    // Initial hide on load for mobile
    if (window.innerWidth < 768) {
      navUl.style.display = 'none';
    }

    // Re-hide on resize (if menu was open on desktop resize to mobile)
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768 && hamburger.getAttribute('aria-expanded') === 'true') {
        hamburger.setAttribute('aria-expanded', 'false');
        navUl.classList.remove('show');
        navUl.style.display = 'none';
      }
    });
  }
})();

// Universal: Fade-In on Scroll (Intersection Observer) - Runs on All Pages
(function() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Unobserve after animation for perf
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  });
})();

// Universal: Lazy Load Fallback for Older Browsers - Runs if Needed
(function() {
  if (!('loading' in HTMLImageElement.prototype)) {
    document.addEventListener('DOMContentLoaded', () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
        img.removeAttribute('loading');
      });
    });
  }
})();

// Page-Specific: Portfolio Tabs - Only if .portfolio-nav Exists
(function() {
  const tabButtons = document.querySelector('.portfolio-nav');
  if (tabButtons) {
    const buttons = tabButtons.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('.portfolio-section');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Update ARIA
        buttons.forEach(btn => {
          btn.setAttribute('aria-selected', 'false');
          btn.setAttribute('tabindex', '-1');
        });
        button.setAttribute('aria-selected', 'true');
        button.setAttribute('tabindex', '0');

        // Show/Hide Panels
        panels.forEach(panel => {
          if (panel.id === button.getAttribute('aria-controls')) {
            panel.hidden = false;
            panel.classList.add('visible');
          } else {
            panel.hidden = true;
          }
        });
      });

      // Keyboard Support
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });

    // Initial Tab (Yritysvideot)
    if (buttons[0]) buttons[0].click();
  }
})();

// Page-Specific: FAQ Accordion - Only if .faq-question Exists
(function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        const answer = document.getElementById(question.getAttribute('aria-controls'));

        // Collapse all others
        faqQuestions.forEach(q => {
          if (q !== question) {
            q.setAttribute('aria-expanded', 'false');
            const a = document.getElementById(q.getAttribute('aria-controls'));
            if (a) a.hidden = true;
          }
        });

        // Toggle current
        question.setAttribute('aria-expanded', !isExpanded);
        if (answer) answer.hidden = isExpanded;
      });

      // Keyboard Support
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    });
  }
})();

// Page-Specific: Contact Form Validation & Submission - Only if #contactForm Exists
(function() {
  const form = document.getElementById('contactForm');
  if (form) {
    const errors = form.querySelectorAll('.error');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      errors.forEach(error => error.textContent = '');

      // Name validation
      const name = document.getElementById('name');
      if (!name.value.trim()) {
        name.nextElementSibling.textContent = 'Nimi on pakollinen.';
        isValid = false;
      }

      // Email validation
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value || !emailRegex.test(email.value)) {
        email.nextElementSibling.textContent = 'Voimakas sähköposti on pakollinen.';
        isValid = false;
      }

      // Message validation
      const message = document.getElementById('message');
      if (!message.value.trim()) {
        message.nextElementSibling.textContent = 'Viesti on pakollinen.';
        isValid = false;
      }

      if (isValid) {
        // Collect form data
        const formData = new FormData(form);
        const subject = formData.get('service') ? `Videotuotanto: ${formData.get('service')}` : 'Videotuotanto yhteydenotto';
        const body = `Hei Justus,\n\nNimi: ${formData.get('name')}\nSähköposti: ${formData.get('email')}\nPalvelutyyppi: ${formData.get('service') || 'Ei määritelty'}\n\nViesti:\n${formData.get('message')}\n\nParhain terkuin,\n${formData.get('name')}`;

        // Open mailto
        const mailtoLink = `mailto:info@justusanttila.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        form.reset();
        alert('Viesti lähetetty! Avaa sähköpostiohjelmasi lähettääksesi sen.');
      }
    });

    // Real-time validation on blur
    ['name', 'email', 'message'].forEach(id => {
      const field = document.getElementById(id);
      if (field) {
        field.addEventListener('blur', () => {
          const error = field.nextElementSibling;
          error.textContent = '';

          if (field.hasAttribute('required') && !field.value.trim()) {
            error.textContent = `${field.previousElementSibling.textContent} on pakollinen.`;
          } else if (id === 'email' && field.value && !emailRegex.test(field.value)) {
            error.textContent = 'Voimakas sähköposti vaaditaan.';
          }
        });
      }
    });
  }
})();