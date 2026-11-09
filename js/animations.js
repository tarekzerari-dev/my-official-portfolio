/* ============================================
   ANIMATIONS.JS — Scroll Reveal System
   ============================================ */

(function() {
  'use strict';

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Make all elements visible immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  // IntersectionObserver for scroll reveals
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  function initReveals() {
    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Case study sidebar active state tracking
  function initSidebarTracking() {
    const sidebar = document.querySelector('.cs-sidebar');
    if (!sidebar) return;

    const sections = document.querySelectorAll('.cs-section[id]');
    const links = sidebar.querySelectorAll('.cs-sidebar__link');

    if (sections.length === 0 || links.length === 0) return;

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveals();
      initSidebarTracking();
    });
  } else {
    initReveals();
    initSidebarTracking();
  }
})();
