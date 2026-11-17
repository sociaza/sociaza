/**
 * Sociaza — Core Interactive Script
 * Lightweight vanilla JavaScript: accessible navigation, smooth scroll, TOC tracking.
 * Zero external dependencies. Zero tracking.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  function setMobileNavOpen(isOpen) {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      mobileNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      // Focus first link in drawer
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      setMobileNavOpen(!isExpanded);
    });

    // Close on mobile link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMobileNavOpen(false);
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setMobileNavOpen(false);
      }
    });

    // Close on viewport resize above mobile breakpoint (768px)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && navToggle.getAttribute('aria-expanded') === 'true') {
        setMobileNavOpen(false);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Smooth Scroll & Accessible Focus Management
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }

        // Move focus for accessibility
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      }
    });
  });

  // --------------------------------------------------------------------------
  // Active Navigation Tracking via IntersectionObserver
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], article[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"], .privacy-toc-link[href^="#"]');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active', 'is-active');
            } else if (link.getAttribute('href').startsWith('#')) {
              link.classList.remove('active', 'is-active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
