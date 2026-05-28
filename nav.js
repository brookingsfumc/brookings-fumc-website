(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    var navInner = document.querySelector('.nav-inner');
    var nav      = navInner ? navInner.querySelector('nav') : null;
    var links    = nav ? nav.querySelector('.nav-links') : null;
    if (!nav || !links) return;

    // ── 1. Create & inject hamburger button ────────────────────────────────
    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"' +
      ' fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">' +
        '<line class="bar-top"    x1="3" y1="6"  x2="21" y2="6"/>'  +
        '<line class="bar-mid"    x1="3" y1="12" x2="21" y2="12"/>' +
        '<line class="bar-bottom" x1="3" y1="18" x2="21" y2="18"/>' +
      '</svg>';
    navInner.appendChild(toggle);

    // ── 2. Add Connect button at bottom of mobile nav ──────────────────────
    var connectBtn = navInner.querySelector('a.btn-primary');
    if (connectBtn) {
      var mobileLi  = document.createElement('li');
      mobileLi.className = 'mobile-connect-item';
      var mobileBtn = document.createElement('a');
      mobileBtn.href      = connectBtn.href;
      mobileBtn.className = 'btn btn-primary mobile-connect-btn';
      mobileBtn.textContent = 'Connect With Us';
      mobileLi.appendChild(mobileBtn);
      links.appendChild(mobileLi);
    }

    // ── 3. Open / close the mobile nav ─────────────────────────────────────
    function openNav() {
      nav.classList.add('mobile-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.classList.add('is-open');
    }

    function closeNav() {
      nav.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
      // also collapse any open sub-dropdown
      nav.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
        d.classList.remove('is-open');
      });
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.contains('mobile-open') ? closeNav() : openNav();
    });

    // Close when clicking outside the nav on mobile
    document.addEventListener('click', function (e) {
      if (window.innerWidth > 900) return;
      if (nav.classList.contains('mobile-open') &&
          !nav.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeNav();
      }
    });

    // Close when Escape is pressed
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('mobile-open')) {
        closeNav();
        toggle.focus();
      }
    });

    // ── 4. Mobile Ministries dropdown ──────────────────────────────────────
    nav.querySelectorAll('.nav-dropdown-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (window.innerWidth > 900) return; // desktop handled by CSS :hover
        e.preventDefault();
        e.stopPropagation();
        var dropdown = btn.closest('.nav-dropdown');
        var wasOpen  = dropdown.classList.contains('is-open');
        // collapse all dropdowns first
        nav.querySelectorAll('.nav-dropdown').forEach(function (d) {
          d.classList.remove('is-open');
        });
        if (!wasOpen) dropdown.classList.add('is-open');
      });
    });

    // ── 5. Close mobile nav when a link is tapped ──────────────────────────
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 900) closeNav();
      });
    });

    // ── 6. Close mobile nav on desktop resize ──────────────────────────────
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && nav.classList.contains('mobile-open')) {
        closeNav();
      }
    });
  });
}());
