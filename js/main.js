/* ============================================================================
   NexoGreen EXIM — main.js
   Shared chrome injection + global interactions. Implements REQUIREMENTS §5,
   §13 (motion, all gated behind prefers-reduced-motion), §14.6, §14.7.
   ========================================================================== */
(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var PHONE = "917867984716";
  var EMAIL = "info@nexogreenexim.com";

  /* ---------------------------------------------------------- ICONS (inline) */
  var I = {
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.215zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>'
  };

  /* ---------------------------------------------------- HEADER (§5.1) */
  function headerHTML(page) {
    function nav(href, key, label) {
      var cur = page === key ? ' aria-current="page"' : "";
      return '<li><a href="' + href + '"' + cur + ">" + label + "</a></li>";
    }
    var productsActive = (page === "products") ? ' aria-current="page"' : "";
    return '' +
    '<div class="container header-inner">' +
      '<a class="brand" href="index.html" aria-label="NexoGreen EXIM — Home"><img src="assets/logo-mark.png" alt="NexoGreen EXIM" width="72" height="54" /></a>' +
      '<nav class="main-nav" id="main-nav" aria-label="Primary"><ul class="nav-list">' +
        '<li class="has-dropdown">' +
          '<button class="nav-toggle-link"' + productsActive + ' aria-expanded="false" aria-haspopup="true">Products ' + I.chevron + '</button>' +
          '<ul class="dropdown">' +
            '<li><a href="products.html">Products Overview<span>All four pillars at a glance</span></a></li>' +
            '<li class="divider" role="separator"></li>' +
            '<li><a href="agriculture.html">Agriculture Commodities<span>Grains, pulses, oils, nuts &amp; more</span></a></li>' +
            '<li><a href="timber.html">Timber &amp; Forestry Produce<span>Timber, charcoal &amp; minerals</span></a></li>' +
            '<li><a href="leather.html">Premium Treated Leather<span>Wet blue leather ranges</span></a></li>' +
            '<li><a href="precious-stones.html">Precious Stones<span>Garnet, tourmaline, amethyst &amp; ruby</span></a></li>' +
          '</ul>' +
        '</li>' +
        nav("global-markets.html", "logistics", "Logistics Network") +
        nav("sustainability.html", "sustainability", "Sustainability") +
        nav("about.html", "about", "About Us") +
      '</ul></nav>' +
      '<div class="header-cta">' +
        '<a class="btn btn--primary" href="request-a-quote.html">Inquire Now</a>' +
        '<button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div>' +
    '<div class="nav-backdrop" aria-hidden="true"></div>';
  }

  /* ---------------------------------------------------- FOOTER (§5.2) */
  function footerHTML() {
    return '' +
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<img src="assets/logo-white.png" alt="NexoGreen EXIM" width="254" height="88" />' +
          '<p class="footer-tag">Global Trade, Growth, Trust.</p>' +
          /* §5.2 / §14.8 legal IDs directly beneath the logo */
          '<div class="footer-legal" aria-label="Corporate licensing">' +
            '<span>CIN: U46309TN2026PTC192345</span>' +
            '<span>PAN: AALCN5551D</span>' +
            '<span>TAN: MRIN02806G</span>' +
          '</div>' +
        '</div>' +
        '<div class="foot-col"><h4>Company</h4><ul>' +
          '<li><a href="about.html">About Us</a></li>' +
          '<li><a href="sustainability.html">Sustainability</a></li>' +
          '<li><a href="global-markets.html">Logistics Network</a></li>' +
          '<li><a href="certifications.html">Certifications</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
        '</ul></div>' +
        '<div class="foot-col"><h4>Products</h4><ul>' +
          '<li><a href="products.html">All Products</a></li>' +
          '<li><a href="agriculture.html">Agriculture</a></li>' +
          '<li><a href="timber.html">Timber &amp; Forest Produce</a></li>' +
          '<li><a href="leather.html">Leather</a></li>' +
          '<li><a href="precious-stones.html">Precious Stones</a></li>' +
          '<li><a href="request-a-quote.html">Request a Quote</a></li>' +
        '</ul></div>' +
        '<div class="foot-col"><h4>Get in touch</h4><ul class="foot-contact">' +
          '<li>' + I.pin + '<span>5/150 North Street, Chellapillaiyarkulam, Anaintha Perumal Nadanur, Alangulam Taluk, Tenkasi District – 627423, Tamil Nadu, India</span></li>' +
          '<li>' + I.phone + '<span class="foot-phones">' +
            '<span><a href="tel:+' + PHONE + '">+91 78679 84716</a> · <a href="tel:+918925460471">+91 89254 60471</a> <span class="foot-region">India</span></span>' +
            '<span><a href="tel:+260777107185">+260 777 107 185</a> <span class="foot-region">Zambia</span></span>' +
          '</span></li>' +
          '<li>' + I.mail + '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p>© <span id="year"></span> Nexogreenexim International Private Limited. All rights reserved. · <a href="legal.html" style="color:#fff">Legal</a></p>' +
        '<p>Global Trade, Growth, Trust.</p>' +
      '</div>' +
    '</div>';
  }

  /* ---------------------------------------------------- INJECT CHROME */
  function injectChrome() {
    var page = document.body.getAttribute("data-page") || "";

    var sp = document.createElement("div");
    sp.className = "scroll-progress"; sp.setAttribute("aria-hidden", "true");
    document.body.insertBefore(sp, document.body.firstChild);

    var skip = document.createElement("a");
    skip.className = "skip-link"; skip.href = "#main"; skip.textContent = "Skip to content";
    document.body.insertBefore(skip, document.body.firstChild);

    var header = document.createElement("header");
    header.className = "site-header"; header.innerHTML = headerHTML(page);
    document.body.insertBefore(header, sp.nextSibling);

    var footer = document.createElement("footer");
    footer.className = "site-footer"; footer.innerHTML = footerHTML();
    document.body.appendChild(footer);

    var wa = document.createElement("a");
    wa.className = "wa-float"; wa.href = "https://wa.me/" + PHONE;
    wa.target = "_blank"; wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat with us on WhatsApp");
    wa.innerHTML = I.wa;
    document.body.appendChild(wa);

    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ---------------------------------------------------- NAV BEHAVIOR */
  function initNav() {
    var header = document.querySelector(".site-header");
    var menuBtn = document.querySelector(".menu-btn");
    var backdrop = document.querySelector(".nav-backdrop");
    var dd = document.querySelector(".has-dropdown");
    var ddBtn = dd ? dd.querySelector(".nav-toggle-link") : null;

    function closeMenu() {
      document.body.classList.remove("nav-open");
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    }
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        var open = document.body.classList.toggle("nav-open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    if (backdrop) backdrop.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

    if (ddBtn) {
      ddBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var open = dd.classList.toggle("open");
        ddBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // sticky condense + scroll progress
    // On the homepage the header stays transparent over the hero and turns solid
    // only after the hero is scrolled past; other pages solidify at 20px as before.
    var heroSlideshow = document.querySelector(".hero[data-slideshow]");
    function onScroll() {
      var solidAt = heroSlideshow ? heroSlideshow.offsetHeight - 70 : 20;
      if (window.scrollY > solidAt) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
      var sp = document.querySelector(".scroll-progress");
      if (sp) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        sp.style.width = h > 0 ? (window.scrollY / h) * 100 + "%" : "0";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------- REVEAL (§13.5) */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (REDUCED || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------- COUNTERS (§13.5) */
  function initCounters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    if (REDUCED || !("IntersectionObserver" in window)) {
      nums.forEach(function (n) { n.textContent = n.getAttribute("data-count"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = parseFloat(el.getAttribute("data-count")), t0 = null, dur = 1400;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toString();
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ----------------------------------------- HERO SLIDESHOW (§13.1) */
  function initHero() {
    var hero = document.querySelector(".hero[data-slideshow]");
    if (!hero) return;
    var slides = hero.querySelectorAll(".hero-slide");
    var dots = hero.querySelectorAll(".hero-dots button");
    if (slides.length < 2) return;
    var i = 0, timer = null, DELAY = 6000;
    // Pointer-capable (desktop) only: proximity arrows + pause-on-hover. On touch
    // the banner stays a calm auto-rotating cross-fade — no hover-driven switching.
    var HOVER = window.matchMedia("(hover: hover)").matches;

    // State-driven: the timer runs only when ALL pause conditions are clear, so a
    // missed mouseleave (e.g. scrolling away while hovering) can never strand it.
    var hovering = false, focused = false, inView = true;
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function sync() { stop(); if (!REDUCED && !hovering && !focused && inView && !document.hidden) timer = setInterval(function () { go(i + 1); }, DELAY); }

    function go(n) {
      slides[i].classList.remove("active");
      if (dots[i]) dots[i].setAttribute("aria-selected", "false");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active");
      if (dots[i]) dots[i].setAttribute("aria-selected", "true");
    }

    dots.forEach(function (d, idx) {
      d.addEventListener("click", function () { go(idx); sync(); });
    });

    // §13.1 manual arrows — revealed only when the mouse nears either edge
    var arrowPrev = hero.querySelector(".hero-arrow--prev");
    var arrowNext = hero.querySelector(".hero-arrow--next");
    if (HOVER && arrowPrev && arrowNext) {
      arrowPrev.addEventListener("click", function () { go(i - 1); sync(); });
      arrowNext.addEventListener("click", function () { go(i + 1); sync(); });
      hero.addEventListener("pointermove", function (e) {
        if (e.pointerType && e.pointerType !== "mouse") return; // mouse-only proximity
        var r = hero.getBoundingClientRect();
        var x = e.clientX - r.left;
        var zone = Math.max(160, r.width * 0.22);
        arrowPrev.classList.toggle("is-visible", x <= zone);
        arrowNext.classList.toggle("is-visible", x >= r.width - zone);
      });
      hero.addEventListener("pointerleave", function () {
        arrowPrev.classList.remove("is-visible");
        arrowNext.classList.remove("is-visible");
      });
    }

    if (HOVER) {
      hero.addEventListener("mouseenter", function () { hovering = true; sync(); });
      hero.addEventListener("mouseleave", function () { hovering = false; sync(); });
    }
    hero.addEventListener("focusin", function () { focused = true; sync(); });
    hero.addEventListener("focusout", function () { focused = false; sync(); });
    document.addEventListener("visibilitychange", sync);

    // Pause when the hero scrolls out of view; resume (self-heal) when it returns.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        sync();
      }, { threshold: 0.15 }).observe(hero);
    }

    sync();
  }

  /* ----------------------------------------- SEARCH DOCK (§14.6) */
  function initSearchDock() {
    var dock = document.querySelector("[data-search-dock]");
    if (!dock) return;
    dock.addEventListener("submit", function (e) {
      e.preventDefault();
      var cat = dock.querySelector("[name=category]").value;
      var port = dock.querySelector("[name=port]").value.trim();
      var parts = [];
      if (cat) parts.push("product=" + encodeURIComponent(cat));
      if (port) parts.push("destination=" + encodeURIComponent(port));
      window.location.href = "request-a-quote.html" + (parts.length ? "?" + parts.join("&") : "");
    });
  }

  /* ----------------------------------------- ROUTE MAP (§14.6) */
  function initRouteMap() {
    var map = document.querySelector("[data-routemap]");
    if (!map) return;
    var btns = map.querySelectorAll(".region-btn");
    function light(region) {
      map.querySelectorAll(".route, .node, .map-label").forEach(function (el) {
        var r = el.getAttribute("data-region");
        if (region === "all") el.classList.add("lit");
        else el.classList.toggle("lit", r === region);
      });
      btns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-region") === region ? "true" : "false"); });
    }
    btns.forEach(function (b) {
      var region = b.getAttribute("data-region");
      var on = function () { light(region); };       // highlight just this region
      var off = function () { light("all"); };        // revert to all lanes lit
      b.addEventListener("mouseenter", on);
      b.addEventListener("mouseleave", off);
      b.addEventListener("focus", on);                // keyboard parity
      b.addEventListener("blur", off);
      b.addEventListener("click", on);                // tap support on touch devices
    });
    light("all"); // default: all lanes illuminated
  }

  /* ---------------------------------------------------------------- INIT */
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(function () {
    injectChrome();
    initNav();
    if (window.NGX && typeof window.NGX.renderAll === "function") window.NGX.renderAll();
    initReveal();
    initCounters();
    initHero();
    initSearchDock();
    initRouteMap();
  });
})();
