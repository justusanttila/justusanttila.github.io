// script.js - Centralized JavaScript for the Site
// Universal: Clicky Analytics (dynamic load), Hamburger menu, fade-in observer, lazy load fallback
// Page-Specific: Portfolio tabs, FAQ accordion, contact form validation
// Defer-loaded for performance; Conditional execution to avoid errors

// Universal: Clicky Analytics - Dynamic Load (Runs on All Pages)
(function() {
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize site ID array
    window.clicky_site_ids = window.clicky_site_ids || [];
    window.clicky_site_ids.push(101281409);

    // Create and append Clicky script dynamically (async for non-blocking)
    const script = document.createElement('script');
    script.async = true;
    script.src = '//static.getclicky.com/js';
    document.head.appendChild(script);
  });
})();

   // Universal: Inject Common Meta Tags and Links - Runs on All Pages
   (function() {
     document.addEventListener('DOMContentLoaded', () => {
       const head = document.head;

       // Common Meta Tags (if not already present)
       if (!head.querySelector('meta[charset]')) {
         const charset = document.createElement('meta');
         charset.setAttribute('charset', 'utf-8');
         head.appendChild(charset);
       }

       if (!head.querySelector('meta[name="viewport"]')) {
         const viewport = document.createElement('meta');
         viewport.setAttribute('name', 'viewport');
         viewport.setAttribute('content', 'width=device-width, initial-scale=1');
         head.appendChild(viewport);
       }

       if (!head.querySelector('meta[name="theme-color"]')) {
         const themeColor = document.createElement('meta');
         themeColor.setAttribute('name', 'theme-color');
         themeColor.setAttribute('content', '#000000');
         head.appendChild(themeColor);
       }

       // Common App Meta (Apple, MS)
       if (!head.querySelector('meta[name="apple-mobile-web-app-title"]')) {
         const appleTitle = document.createElement('meta');
         appleTitle.setAttribute('name', 'apple-mobile-web-app-title');
         appleTitle.setAttribute('content', 'justusanttila.fi');
         head.appendChild(appleTitle);
       }

       if (!head.querySelector('meta[name="application-name"]')) {
         const appName = document.createElement('meta');
         appName.setAttribute('name', 'application-name');
         appName.setAttribute('content', 'justusanttila.fi');
         head.appendChild(appName);
       }

       if (!head.querySelector('meta[name="msapplication-TileColor"]')) {
         const msTile = document.createElement('meta');
         msTile.setAttribute('name', 'msapplication-TileColor');
         msTile.setAttribute('content', '#ffc40d');
         head.appendChild(msTile);
       }

       // Common Favicon Links (if not present)
       const faviconLinks = [
         { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
         { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
         { rel: 'manifest', href: '/site.webmanifest' },
         { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
       ];

       faviconLinks.forEach(linkData => {
         if (!head.querySelector(`link[rel="${linkData.rel}"]`)) {
           const link = document.createElement('link');
           Object.keys(linkData).forEach(key => {
             if (key !== 'href') link.setAttribute(key, linkData[key]);
             else link.setAttribute(key, linkData.href);
           });
           head.appendChild(link);
         }
       });

       // Common Font Link (Poppins)
       if (!head.querySelector('link[href*="fonts.googleapis.com"]')) {
         const fontLink = document.createElement('link');
         fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap';
         fontLink.rel = 'stylesheet';
         head.appendChild(fontLink);
       }
     });
   })();

   // Universal: Inject Skip to Content Link - Accessibility
   (function() {
     document.addEventListener('DOMContentLoaded', () => {
       if (!document.querySelector('.sr-only.skip-link')) {
         const skipLink = document.createElement('a');
         skipLink.href = '#main-content';
         skipLink.className = 'sr-only skip-link';
         skipLink.textContent = 'Hyppää pääsisältöön';
         document.body.insertBefore(skipLink, document.body.firstChild);
       }
     });
   })();

// Universal: Hamburger Menu Toggle (With Animation) - Runs on All Pages
(function() {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('.nav ul');
  
  // Early exit if elements don't exist (prevents errors)
  if (!hamburger || !navUl) {
    console.warn('Hamburger or nav ul not found - menu toggle skipped.');
    return;
  }

  console.log('Hamburger menu initialized.'); // Debug: Remove later

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    
    console.log('Hamburger clicked. Expanded:', !isExpanded); // Debug: Remove later
    
    if (!isExpanded) {
      // Open: Set display first (instant), then add .show for animation
      navUl.style.display = 'flex';
      // Micro-delay to ensure reflow (allows transition to start)
      requestAnimationFrame(() => {
        navUl.classList.add('show');
        console.log('Menu opening - .show added.'); // Debug
      });
    } else {
      // Close: Remove .show (reverse animation), then hide display on end
      navUl.classList.remove('show');
      console.log('Menu closing - .show removed.'); // Debug
      
      const onTransitionEnd = () => {
        if (hamburger.getAttribute('aria-expanded') === 'false') {
          navUl.style.display = 'none';
          console.log('Menu fully closed - display: none.'); // Debug
        }
        navUl.removeEventListener('transitionend', onTransitionEnd);
      };
      
      navUl.addEventListener('transitionend', onTransitionEnd);
      
      // Fallback timeout if transitionend fails (rare)
      setTimeout(() => {
        if (hamburger.getAttribute('aria-expanded') === 'false' && navUl.style.display !== 'none') {
          navUl.style.display = 'none';
        }
      }, 450); // Slightly longer than 0.4s transition
    }
  });

  // Close menu on link click (mobile only)
  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        console.log('Link clicked - closing mobile menu.'); // Debug: Remove later
        hamburger.setAttribute('aria-expanded', 'false');
        navUl.classList.remove('show');
        
        // Handle display hide like close
        const onTransitionEnd = () => {
          if (hamburger.getAttribute('aria-expanded') === 'false') {
            navUl.style.display = 'none';
          }
          navUl.removeEventListener('transitionend', onTransitionEnd);
        };
        navUl.addEventListener('transitionend', onTransitionEnd);
        
        setTimeout(() => {
          if (hamburger.getAttribute('aria-expanded') === 'false' && navUl.style.display !== 'none') {
            navUl.style.display = 'none';
          }
        }, 450);
      }
    });
  });

  // Re-handle on resize (force close if switching to mobile while open)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth < 768 && hamburger.getAttribute('aria-expanded') === 'true') {
        console.log('Resizing to mobile - forcing menu close.'); // Debug: Remove later
        hamburger.setAttribute('aria-expanded', 'false');
        navUl.classList.remove('show');
        
        const onTransitionEnd = () => {
          navUl.style.display = 'none';
          navUl.removeEventListener('transitionend', onTransitionEnd);
        };
        navUl.addEventListener('transitionend', onTransitionEnd);
        
        setTimeout(() => {
          if (navUl.style.display !== 'none') {
            navUl.style.display = 'none';
          }
        }, 450);
      } else if (window.innerWidth >= 768 && navUl.classList.contains('show')) {
        // Clean up if resizing from mobile to desktop
        navUl.classList.remove('show');
        navUl.style.display = 'flex'; // Ensure visible on desktop
      }
    }, 250); // Debounce for smooth resize
  });
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

// Page-Specific: Portfolio Tabs - Sequential Fade (No Overlap/Flash) + Initial Landing Animation (Only on portfolio.html)
(function() {
  // Only run on portfolio page
  if (!document.querySelector('.portfolio-nav')) return;

  const tabs = document.querySelectorAll('.portfolio-nav [role="tab"]');
  const sections = document.querySelectorAll('.portfolio-section');
  const portfolioNav = document.querySelector('.portfolio-nav');
  const defaultTab = tabs[0]; // Yritysvideot as default

  // Initial setup: Show first tab/section with landing animation
  function initTabs() {
    // Step 1: Add fade-in class to nav for landing animation
    portfolioNav.classList.add('fade-in');

    // Step 2: Setup default tab/section
    defaultTab.setAttribute('aria-selected', 'true');
    defaultTab.tabIndex = 0;
    const defaultSectionId = defaultTab.getAttribute('aria-controls');
    const defaultSection = document.getElementById(defaultSectionId);
    if (defaultSection) {
      defaultSection.removeAttribute('hidden');
      defaultSection.classList.add('fade-in'); // Add for section landing animation
    }
    tabs.forEach((tab, index) => {
      if (index > 0) tab.tabIndex = -1;
    });

    // Step 3: Trigger visible classes with stagger (nav first, then section)
    setTimeout(() => {
      portfolioNav.classList.add('visible'); // Nav fades in immediately
    }, 100); // Short delay for polish

    setTimeout(() => {
      if (defaultSection) {
        defaultSection.classList.add('visible'); // Section fades in after nav
      }
    }, 300); // 0.2s stagger after nav (total ~0.4s entrance)
  }

  // Switch tab: Fade out current completely, THEN fade in new (no overlap)
  function switchTab(selectedTab) {
    const selectedId = selectedTab.getAttribute('aria-controls');
    const selectedSection = document.getElementById(selectedId);

    // Guard: Skip if same tab
    const currentActiveTab = document.querySelector('.portfolio-nav [aria-selected="true"]');
    if (currentActiveTab === selectedTab || !selectedSection) return;

    // Update tabs first (UI feedback during wait)
    tabs.forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
      tab.tabIndex = -1;
    });
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.tabIndex = 0;

    // Fade out current section
    const currentId = currentActiveTab.getAttribute('aria-controls');
    const currentSection = document.getElementById(currentId);
    if (currentSection) {
      currentSection.classList.add('fading');
      setTimeout(() => {
        // Current is now hidden—SAFE to show new
        currentSection.setAttribute('hidden', '');
        currentSection.classList.remove('fading');
        currentSection.style.opacity = ''; // Clean up
        currentSection.classList.remove('visible'); // Reset for future use

        // NOW fade in new section (no flash, as current is gone)
        selectedSection.removeAttribute('hidden');
        selectedSection.style.opacity = '0';
        selectedSection.classList.add('fading'); // Trigger transition
        requestAnimationFrame(() => {
          selectedSection.style.opacity = '1'; // Fade in smoothly
          selectedSection.classList.remove('fading');
          selectedSection.classList.add('visible'); // Add visible for consistency
          setTimeout(() => {
            selectedSection.style.opacity = ''; // Clean up after fade
          }, 200);
        });
      }, 200); // Wait for full fade-out (matches CSS transition)
    } else {
      // Fallback if no current: Just show new immediately
      selectedSection.removeAttribute('hidden');
      selectedSection.style.opacity = '1';
      selectedSection.classList.add('visible');
    }
  }

  // Event listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(tab);
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        switchTab(tab);
      }
    });
  });

  // Keyboard nav (arrows)
  portfolioNav.addEventListener('keydown', (e) => {
    const currentTab = document.querySelector('.portfolio-nav [aria-selected="true"]');
    let currentIndex = Array.from(tabs).indexOf(currentTab);
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      switchTab(tabs[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      switchTab(tabs[prevIndex]);
    }
  });

  // Init
  document.addEventListener('DOMContentLoaded', initTabs);
})();

// Page-Specific: FAQ Accordion Toggle (Only on pages with .faq-accordion)
(function() {
  // Only run if FAQ exists
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length === 0) return;

  faqQuestions.forEach(question => {
    question.setAttribute('role', 'button'); // Accessibility
    question.setAttribute('tabindex', '0'); // Keyboard focusable
    const answer = question.nextElementSibling; // Assumes .faq-answer follows directly
    const isOpen = false; // Initial state

    // Toggle function
    function toggleFAQ() {
      const isCurrentlyOpen = question.getAttribute('aria-expanded') === 'true';
      const newState = !isCurrentlyOpen;

      // Update aria and class
      question.setAttribute('aria-expanded', newState.toString());
      answer.classList.toggle('open', newState);

      // Optional: Focus management for accessibility
      if (newState) {
        answer.focus(); // Focus on content when open
      }
    }

    // Event listeners
    question.addEventListener('click', toggleFAQ);
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFAQ();
      }
    });
  });
})();

// Page-Specific: Contact Form Validation & EmailJS Submission (Finnish, Matches Your HTML) - With Service Mapping
(function() {
  // Only run if form exists
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Initialize EmailJS with your Public Key
  emailjs.init('K4EU0hUxba4JqN1uJ'); // e.g., 'user_ghi789' - from EmailJS dashboard

  const formMessage = document.getElementById('formMessage'); // Optional global message
  const submitBtn = form.querySelector('button[type="submit"]');

  // Validation config (required: name, email, message; service optional)
  const requiredFields = ['name', 'email', 'message'];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

  // Service mapping (slug → friendly Finnish text)
  const serviceMap = {
    'haavideo': 'Häävideo',
    'musiikkivideo': 'Musiikkivideo',
    'yritysvideo': 'Yritysvideo',
    'kiinteistovideo': 'Kiinteistövideo',
    'omavideo': 'Oma video',
    'muu': 'Jotain muuta'
  };

  // Clear errors function (targets <span class="error"> after each input)
  function clearErrors() {
    requiredFields.forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        const errorEl = input.nextElementSibling; // Span right after input
        if (errorEl && errorEl.classList.contains('error')) {
          errorEl.textContent = '';
        }
      }
    });
    if (formMessage) formMessage.style.display = 'none';
  }

  // Show error function (on the span after input)
  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    if (input) {
      const errorEl = input.nextElementSibling; // Span right after input
      if (errorEl && errorEl.classList.contains('error')) {
        errorEl.textContent = message;
      }
    }
  }

  // Show global message (success/error)
  function showMessage(text, isError = true) {
    if (formMessage) {
      formMessage.textContent = text;
      formMessage.style.display = 'block';
      formMessage.className = isError ? 'error' : 'success'; // Use .success CSS if added
      formMessage.style.color = isError ? 'var(--cta-color)' : '#4CAF50'; // Red error, green success
    }
  }

  // Validate form
  function validateForm() {
    clearErrors();
    let isValid = true;

    // Check required fields
    requiredFields.forEach(id => {
      const input = document.getElementById(id);
      const labelText = input ? input.previousElementSibling.textContent.replace('*', '').trim() : '';
      if (!input || !input.value.trim()) {
        showError(id, `${labelText} on pakollinen.`);
        isValid = false;
      }
    });

    // Email format
    const emailInput = document.getElementById('email');
    if (emailInput && emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
      showError('email', 'Syötä kelvollinen sähköpostiosoite.');
      isValid = false;
    }

    // Message min length
    const messageInput = document.getElementById('message');
    if (messageInput && messageInput.value.trim().length < 10) {
      showError('message', 'Viesti oltava vähintään 10 merkkiä pitkä.');
      isValid = false;
    }

    // Service is optional - no validation

    return isValid;
  }

  // Submit handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop default submit

    if (!validateForm()) return; // Client-side validation

    // Show loading (Finnish)
    submitBtn.textContent = 'Lähetetään...';
    submitBtn.disabled = true;

    try {
      // Get raw service value
      const serviceSelect = document.getElementById('service');
      const rawService = serviceSelect ? serviceSelect.value.trim() : '';

      // Map to friendly text (or 'Ei valittu' if empty/unknown)
      const formattedService = rawService && serviceMap[rawService] ? serviceMap[rawService] : 'Ei valittu';

      // Prepare params (matches your fields and template variables)
      const params = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        service: rawService, // Raw slug, e.g., "haavideo"
        formattedService: formattedService, // Friendly, e.g., "Häävideo"
        message: document.getElementById('message').value.trim()
      };

      // DEBUG: Log params to console to verify service values
      console.log('Form data being sent to EmailJS:', params);
      // Example: {..., service: "haavideo", formattedService: "Häävideo", ...}

      // Send via EmailJS (replace with your IDs)
      const response = await emailjs.send('service_q0n0tuu', 'template_2j9qclg', params); // e.g., 'service_abc123', 'template_def456'

      if (response.status === 200) {
        showMessage('Kiitos! Viestisi on lähetetty. Vastaan pian.', false); // Success
        form.reset(); // Clear form
      } else {
        throw new Error('Lähetys epäonnistui.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      showMessage('Virhe: Yritä uudelleen tai lähetä sähköpostia suoraan.', true); // Error
    } finally {
      // Reset button
      submitBtn.textContent = 'Lähetä viesti';
      submitBtn.disabled = false;
    }
  });

  // Optional: Real-time validation on blur (leave field)
  requiredFields.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('blur', () => {
        const labelText = input.previousElementSibling.textContent.replace('*', '').trim();
        if (!input.value.trim()) {
          showError(id, `${labelText} on pakollinen.`);
        } else if (id === 'email' && !emailRegex.test(input.value.trim())) {
          showError('email', 'Syötä kelvollinen sähköpostiosoite.');
        } else if (id === 'message' && input.value.trim().length < 10) {
          showError('message', 'Viesti oltava vähintään 10 merkkiä pitkä.');
        } else {
          // Clear if valid
          const errorEl = input.nextElementSibling;
          if (errorEl && errorEl.classList.contains('error')) {
            errorEl.textContent = '';
          }
        }
      });
    }
  });

  // EXTRA DEBUG: Log service select changes (to verify selection)
  const serviceSelect = document.getElementById('service');
  if (serviceSelect) {
    serviceSelect.addEventListener('change', (e) => {
      const raw = e.target.value;
      const formatted = serviceMap[raw] || 'Ei valittu';
      console.log('Service selected - Raw:', raw, 'Formatted:', formatted); // e.g., Raw: "haavideo", Formatted: "Häävideo"
    });
  }
})();