/* ============================================================
   Ishwari Salunkhe - Portfolio interactions
   Vanilla JavaScript only. No libraries or build tools needed.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const desktopQuery = window.matchMedia('(min-width: 901px)');

  function setNav(open) {
    if (!navToggle || !nav) return;

    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    document.body.classList.toggle('nav-open', open);
  }

  function closeNav() {
    setNav(false);
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      setNav(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close the menu after choosing a section.
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    // Escape closes the menu and returns focus to the toggle button.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    // Clicking outside the header closes the menu.
    document.addEventListener('click', function (event) {
      if (nav.classList.contains('is-open') && !header.contains(event.target)) {
        closeNav();
      }
    });

    // If the viewport becomes desktop-sized, reset the mobile menu.
    desktopQuery.addEventListener('change', function (event) {
      if (event.matches) {
        closeNav();
      }
    });
  }

  /* ---------- Sticky header shadow ---------- */
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 6);
  }

  /* ---------- Active navigation link ---------- */
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  function updateActiveLink() {
    if (!sections.length) return;

    const headerHeight = header ? header.offsetHeight : 0;
    const marker = window.scrollY + headerHeight + 100;
    let activeId = '';

    sections.forEach(function (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) {
        activeId = section.id;
      }
    });

    // If the user has scrolled to the bottom, highlight the final section.
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
      activeId = sections[sections.length - 1].id;
    }

    navLinks.forEach(function (link) {
      const isActive = link.getAttribute('href') === '#' + activeId;
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  // Use requestAnimationFrame so scroll handling stays lightweight.
  let scrollTicking = false;

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;

    window.requestAnimationFrame(function () {
      updateHeader();
      updateActiveLink();
      scrollTicking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateHeader();
  updateActiveLink();

  /* ---------- Scroll reveal (progressive enhancement) ---------- */
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  /* ---------- Copy email button ---------- */
  const copyButtons = Array.from(document.querySelectorAll('[data-copy]'));

  function fallbackCopy(text) {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '-1000px';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, text.length);

    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(field);
    return copied;
  }

  copyButtons.forEach(function (button) {
    const label = button.querySelector('.copy-label');
    const status = document.getElementById(button.getAttribute('aria-describedby'));
    let resetTimer;

    button.addEventListener('click', async function () {
      const value = button.getAttribute('data-copy') || '';
      let copied = false;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(value);
          copied = true;
        } else {
          copied = fallbackCopy(value);
        }
      } catch (error) {
        copied = fallbackCopy(value);
      }

      if (copied) {
        button.classList.add('is-copied');
        if (label) label.textContent = 'Copied!';
        if (status) status.textContent = 'Email address copied to clipboard.';

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          button.classList.remove('is-copied');
          if (label) label.textContent = 'Copy email';
          if (status) status.textContent = '';
        }, 2500);
      } else if (status) {
        status.textContent = 'Copying is not available in this browser. Please select the email address instead.';
      }
    });
  });

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
