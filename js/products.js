/* ============================================================================
   NexoGreen EXIM — products.js
   HS-coded catalog (built from "Nexogreen EXIM project.md", spices excluded)
   + renderers for the home 4-column matrix (§6.1/§14.2) and sector grids.
   Exposes window.NGX.renderAll(), called by main.js after chrome injection.

   NOTE ON IMAGERY: the source asset filenames are scrambled and DO NOT match
   their visible content. Every image below was visually audited (2026-06-13)
   and mapped to the commodity it ACTUALLY depicts, not what its filename says.
   ========================================================================== */
(function () {
  "use strict";

  // category keys → display label (the three pillars, §6.1 segmented toggle)
  var LABEL = {
    agriculture: "Agriculture Commodities",
    timber: "Timber & Forestry Produce",
    leather: "Premium Treated Leather"
  };

  // category keys → sector listing page (the card category label links here, §14.2)
  var PAGE = {
    agriculture: "agriculture.html",
    timber: "timber.html",
    leather: "leather.html"
  };

  var A = "assets/products/", T = "assets/timber/", F = "assets/forest-produce/", L = "assets/leather/";

  // Each: cat, name, hs (official trade HS code), img (verified by content), desc
  // Merchandised order: a curated "frequently bought first" sequence with the
  // three pillars interleaved, so the products-page "All Products" view reads
  // like a storefront rather than a category dump. Each product keeps its `cat`,
  // and every filter / sector page renders by `cat` — so categories never bleed
  // across sections; only the *within-category* order is this popularity rank.
  var PRODUCTS = [
    { cat: "agriculture", name: "Rice", hs: "1006 30", img: A + "flour-starch/grain-flour.jpg", detail: "rice.html", desc: "Raw, parboiled, Sona Masoori and Basmati — sortex-cleaned to buyer-specified broken percentages." },
    { cat: "leather", name: "Cow Wet Blue Leather", hs: "4107 91", img: L + "leather-hide.jpg", desc: "Chrome-tanned cow hide — strong, thick and water-resistant, ready for dyeing and finishing." },
    { cat: "timber", name: "Teak Timber", hs: "4407 21", img: L + "leather-pieces.jpg", desc: "Teak logs and sawn timber — durable, oil-rich golden hardwood for luxury and marine use." },
    { cat: "agriculture", name: "Wheat", hs: "1001 19", img: A + "spices/ginger.jpg", desc: "Bread, premium and durum/hard wheat grades milled for flour, pasta and baked goods." },
    { cat: "agriculture", name: "Corn / Maize", hs: "1005 90", img: A + "cereals-grains/mixed-grains.jpg", desc: "Yellow maize, white maize and organic corn for food, feed and industrial starch use." },
    { cat: "timber", name: "Wood Charcoal", hs: "4402 90", img: T + "stacked-timber.jpg", desc: "Clean, hot-burning, low-smoke wood charcoal for grilling, heating and industrial fuel." },
    { cat: "agriculture", name: "Cashew Nuts", hs: "0801 32", img: A + "oils-oilseeds/coconut.jpg", desc: "Grades W-180 to W-320 plus raw in-shell — creamy, kidney-shaped premium kernels." },
    { cat: "leather", name: "Buffalo Wet Blue Leather", hs: "4107 91", img: L + "leather-hide.jpg", desc: "Robust buffalo wet blue — heavy substance for footwear, upholstery and bags." },
    { cat: "agriculture", name: "Groundnuts", hs: "1202 42", img: A + "oils-oilseeds/cooking-oil.jpg", desc: "JL24, K6, TMV2 and Girnar varieties — protein-rich peanuts for snacks and oil." },
    { cat: "agriculture", name: "Sesame Seeds", hs: "1207 40", img: A + "oils-oilseeds/coconut-halves.jpg", desc: "White and black hulled sesame — nutty, oil-rich seeds for tahini, bakery and oil." },
    { cat: "timber", name: "Mahogany Timber & Wood", hs: "4407 10", img: T + "cut-logs.jpg", desc: "Sawn mahogany, general timber log and saw timber — strong, versatile, seasoned hardwood." },
    { cat: "agriculture", name: "Soya Beans", hs: "1201 00", img: A + "cereals-grains/mixed-seeds.jpg", desc: "Yellow, black and edible soya beans — high-quality protein for food and processing." },
    { cat: "agriculture", name: "Chickpeas", hs: "0713 20", img: A + "cereals-grains/beans.jpg", desc: "Desi and Kabuli chickpeas, firm and consistent — ideal for hummus, curries and snacks." },
    { cat: "leather", name: "Goat Wet Blue Leather", hs: "4107 91", img: L + "leather-hide.jpg", desc: "Fine-grain, soft goat wet blue — a stable base for premium garment and lining leather." },
    { cat: "agriculture", name: "Green Gram (Moong)", hs: "0713 33", img: A + "cereals-grains/green-gram.jpg", desc: "Whole, split, organic and feed-grade mung bean — a digestible plant-protein staple." },
    { cat: "timber", name: "Coconut Shell Charcoal", hs: "4402 90", img: T + "stacked-timber.jpg", desc: "Dense coconut-shell charcoal — premium cooking fuel and a feedstock for activated carbon." },
    { cat: "agriculture", name: "Black Gram (Urad)", hs: "0713 31", img: A + "cereals-grains/lentils.jpg", desc: "Whole, dhuli (split), organic and feed-grade urad — high-protein South-Asian legume." },
    { cat: "agriculture", name: "Masoor & Toor Dal", hs: "0713 40", img: A + "spices/dried-chillies.jpg", desc: "Whole, split and organic red lentils and pigeon peas — quick-cooking, protein-rich dals." },
    { cat: "leather", name: "Sheep Wet Blue Leather", hs: "4107 91", img: L + "leather-hide.jpg", desc: "Supple sheep wet blue — lightweight hides finished for apparel and accessories." },
    { cat: "agriculture", name: "Coconut Oil", hs: "1513 11", img: A + "oils-oilseeds/edible-oil.jpg", desc: "Virgin/cold-pressed, refined, industrial and organic coconut oil for food and cosmetics." },
    { cat: "timber", name: "Manganese Ore", hs: "2602 00", img: F + "charcoal-chunks.jpg", desc: "High- and medium-grade manganese ore, lumps and fines — essential to steelmaking." },
    { cat: "agriculture", name: "Onion", hs: "0703 10", img: A + "vegetables/green-leaf.jpg", desc: "Fresh red, yellow and white onions plus onion powder — versatile, nutrient-rich bulbs." },
    { cat: "agriculture", name: "Garlic", hs: "0703 20", img: A + "vegetables/fresh-herbs.jpg", desc: "Agrifound white, Yamuna, desi single-clove and Ooty garlic — pungent, allicin-rich bulbs." },
    { cat: "agriculture", name: "Fresh Ginger", hs: "0910 10", img: A + "vegetables/leafy-greens.jpg", desc: "Fresh, dried and powdered ginger — aromatic rhizome with gingerol antioxidant content." },
    { cat: "agriculture", name: "Lemon", hs: "0805 50", img: A + "fruits/lemons.jpg", desc: "Eureka, Lisbon, Kagzi and Kadayam lemons — bright, high-acid citrus rich in vitamin C." },
    { cat: "timber", name: "Activated Charcoal", hs: "3802 10", img: T + "stacked-timber.jpg", desc: "High-porosity activated charcoal for filtration, purification and medicinal applications." },
    { cat: "agriculture", name: "Natural Honey", hs: "0409 00", img: A + "nuts/cashew-platter.jpg", desc: "Multifloral, forest, acacia, eucalyptus and moringa honey — raw and pasteurised lots." },
    { cat: "agriculture", name: "Cow Ghee", hs: "0405 10", img: A + "cereals-grains/black-sesame.jpg", desc: "Pure cow ghee — rich, nutty clarified butter with a high smoke point and long shelf life." },
    { cat: "agriculture", name: "Himalayan Rock Salt", hs: "2501 00", img: A + "honey/honeycomb.jpg", desc: "Industrial, table, curing and pink Himalayan rock salt — mineral-rich, unrefined ranges." },
    { cat: "agriculture", name: "Finger Millet (Ragi)", hs: "1008 30", img: A + "cereals-grains/pulses.jpg", desc: "Red, white and organic finger millet — a drought-smart, gluten-free, fibre-rich cereal." },
    { cat: "agriculture", name: "Pearl Millet (Bajra)", hs: "1008 20", img: A + "cereals-grains/sesame-seeds.jpg", desc: "Organic and feed-grade pearl millet — a climate-resilient, nutrient-dense grain." },
    { cat: "agriculture", name: "Cocoa Beans", hs: "1801 00", img: A + "oils-oilseeds/oil.jpg", desc: "Forastero, Trinitario and Criollo — fermented, dried cocoa beans for chocolate and butter." },
    { cat: "agriculture", name: "Raw Cotton", hs: "5201 00", img: A + "spices/tamarind.jpg", desc: "MCU-5, Shankar-6, MECH-1, J-34 and premium Suvin — graded by fibre length and strength." },
    { cat: "agriculture", name: "Guar Gum Powder", hs: "1302 32", img: A + "marine/prawns.jpg", desc: "Premium, super, food and industrial grades — a high-binding natural thickener/stabiliser." },
    { cat: "agriculture", name: "Moringa Leaf Powder", hs: "1212 99", img: A + "powders-herbal/yellow-powder.jpg", desc: "Food, bulk and organic-certified moringa — vitamin- and antioxidant-dense green powder." },
    { cat: "agriculture", name: "Spirulina Powder", hs: "1212 99", img: A + "powders-herbal/herbal-powder.jpg", desc: "Natural, organic and concentrate spirulina — a protein- and iron-rich blue-green algae." },
    { cat: "agriculture", name: "Castor Oil", hs: "1515 00", img: A + "oils-oilseeds/oil-bottle.jpg", desc: "Commercial, refined and pharmaceutical/VSP-grade castor oil rich in ricinoleic acid." },
    { cat: "agriculture", name: "Neem Oil", hs: "1515 90", img: A + "oils-oilseeds/herbal-oil-bottles.jpg", desc: "Cold-pressed, organic and solvent-extracted neem oil for agriculture and personal care." },
    { cat: "agriculture", name: "Soya Bean Meal", hs: "2304 00", img: A + "cereals-grains/oats.jpg", desc: "Full-fat, de-oiled, defatted and organic soya meal — a leading protein feed supplement." },
    { cat: "agriculture", name: "Rapeseed Meal", hs: "2306 20", img: A + "powders-herbal/turmeric-field.jpg", desc: "Standard, de-oiled, low-glucosinolate and organic rapeseed meal — a sustainable feed protein." },
    { cat: "agriculture", name: "Rice Bran DOC", hs: "2302 90", img: A + "cereals-grains/cereal-grain.jpg", desc: "De-oiled rice bran cake in multiple grades — a high-nutrition animal-feed ingredient." },
    { cat: "agriculture", name: "Cassava (Tapioca) Starch", hs: "1108 19", img: A + "flour-starch/starch-powder.jpg", desc: "Food- and industrial-grade tapioca starch — neutral, high-viscosity gluten-free starch." },
    { cat: "agriculture", name: "Potato Starch Powder", hs: "1108 14", img: A + "flour-starch/white-powder.jpg", desc: "Food and industrial potato starch — a clear, neutral, high-absorption thickener." },
    { cat: "agriculture", name: "Sweet Potato Starch", hs: "1108 14", img: A + "vegetables/onions.jpg", desc: "Food, industrial and organic sweet-potato starch — elastic, crisp-finish gluten-free starch." },
    { cat: "agriculture", name: "Hibiscus Tea Powder", hs: "0906 30", img: A + "fruits/dried-berries.jpg", desc: "Premium, standard and organic hibiscus — tangy, antioxidant-rich crimson flower powder." },
    { cat: "agriculture", name: "Tamarind Kernel Powder", hs: "1302 19", img: A + "spices/turmeric-paste.jpg", desc: "Food, industrial and organic tamarind ranges — a natural gum, thickener and sizing agent." }
  ];

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  // per-pillar line icons (image-free, editorial product cards — keeps the
  // §14.2 anatomy: category, HS-code badge, freight link — without an image wall)
  var ICON = {
    agriculture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21v-7M12 14c-3 0-5-2-5-5 3 0 5 2 5 5zM12 12c0-3 2-5 5-5 0 3-2 5-5 5zM5 21h14"/></svg>',
    timber: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22V8M12 8 7 5M12 8l5-3M12 14l-5-3M12 14l5-3M9 22h6"/></svg>',
    leather: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8l9-5 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/></svg>'
  };

  // Progressive disclosure: show 12 cards, then +8 per "Show More" click.
  var PAGE_INITIAL = 12, PAGE_STEP = 8;

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* ---- Shared paginator: fills `grid` from `items`, with a "Show More"
     button (appended to `host`) that reveals PAGE_STEP more each click. ---- */
  function paginate(grid, items, host) {
    var old = host.querySelector(".load-more-wrap");
    if (old) old.parentNode.removeChild(old);
    grid.innerHTML = "";

    if (!items.length) {
      grid.innerHTML = '<p class="matrix-empty">No products in this category yet.</p>';
      return;
    }

    var shown = 0;
    var wrap = document.createElement("div");
    wrap.className = "load-more-wrap";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn--ghost load-more-btn";
    btn.textContent = "Show More";
    wrap.appendChild(btn);

    function renderMore(n) {
      var next = items.slice(shown, shown + n);
      grid.insertAdjacentHTML("beforeend", next.map(function (p, i) {
        return cardHTML(p, shown + i);
      }).join(""));
      // reveal the just-appended cards (the IO observer won't see them)
      var cards = grid.querySelectorAll(".p-card");
      for (var j = shown; j < cards.length; j++) cards[j].classList.add("in");
      shown += next.length;
      if (shown >= items.length) wrap.parentNode && wrap.parentNode.removeChild(wrap);
    }

    renderMore(Math.min(PAGE_INITIAL, items.length));
    if (shown < items.length) {
      btn.addEventListener("click", function () { renderMore(PAGE_STEP); });
      host.appendChild(wrap);
    }
  }

  function cardHTML(p, idx) {
    var rfq = "request-a-quote.html?product=" + encodeURIComponent(p.name);
    var delay = (idx % 4) + 1;
    return '' +
    '<article class="p-card reveal" data-cat="' + p.cat + '" data-delay="' + delay + '">' +
      '<div class="p-top">' +
        '<span class="p-ico">' + (ICON[p.cat] || "") + '</span>' +
        '<span class="hs-badge">HS Code: ' + p.hs + '</span>' +
      '</div>' +
      '<a class="p-cat" href="' + (PAGE[p.cat] || "products.html") + '">' + esc(LABEL[p.cat]) + '</a>' +
      '<h3>' + (p.detail ? '<a href="' + esc(p.detail) + '">' + esc(p.name) + '</a>' : esc(p.name)) + '</h3>' +
      '<p class="p-desc">' + esc(p.desc) + '</p>' +
      '<div class="p-foot"><a class="freight-link" href="' + rfq + '">Request Freight Quote ' + ARROW + '</a></div>' +
    '</article>';
  }

  /* ---- Home / overview interactive matrix (§6.1, §14.2) ---- */
  function renderMatrix(host) {
    var limit = parseInt(host.getAttribute("data-limit") || "0", 10);
    var grid = document.createElement("div");
    grid.className = "product-grid";
    grid.id = "matrix-grid";
    grid.setAttribute("aria-live", "polite");

    var toggleWrap = document.createElement("div");
    toggleWrap.className = "toggle-wrap";
    var seg = document.createElement("div");
    seg.className = "matrix-toggle";
    seg.setAttribute("role", "group");
    seg.setAttribute("aria-label", "Filter products by category");

    var filters = [
      { key: "all", label: "All Products" },
      { key: "agriculture", label: "Agriculture Commodities" },
      { key: "timber", label: "Timber & Forestry Produce" },
      { key: "leather", label: "Premium Treated Leather" }
    ];

    function paint(key) {
      var items = PRODUCTS.filter(function (p) { return key === "all" || p.cat === key; });
      if (limit > 0) {
        // home preview: representative spread, hard cap, no "Show More"
        if (key === "all") {
          var byCat = { agriculture: [], timber: [], leather: [] };
          PRODUCTS.forEach(function (p) { byCat[p.cat].push(p); });
          var order = ["agriculture", "timber", "leather"], spread = [], row = 0;
          while (spread.length < limit) {
            var added = false;
            for (var c = 0; c < order.length && spread.length < limit; c++) {
              var arr = byCat[order[c]];
              if (arr[row]) { spread.push(arr[row]); added = true; }
            }
            if (!added) break;
            row++;
          }
          items = spread;
        } else {
          items = items.slice(0, limit);
        }
        grid.innerHTML = items.length
          ? items.map(cardHTML).join("")
          : '<p class="matrix-empty">No products in this category yet.</p>';
        grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
        return;
      }
      // full listing (products.html): progressive "Show More"
      paginate(grid, items, host);
    }

    // §6.1 sliding pill: a single thumb that glides to the active tab rather
    // than each button toggling its own background instantly
    var thumb = document.createElement("span");
    thumb.className = "seg-thumb";
    thumb.setAttribute("aria-hidden", "true");
    seg.appendChild(thumb);

    // instant=true snaps without animating (initial placement / resize reflow);
    // a click leaves it false so the pill glides to the new tab
    function moveThumb(btn, instant) {
      if (!btn) return;
      if (instant) thumb.style.transition = "none";
      thumb.style.setProperty("--thumb-w", btn.offsetWidth + "px");
      thumb.style.setProperty("--thumb-h", btn.offsetHeight + "px");
      thumb.style.setProperty("--thumb-x", btn.offsetLeft + "px");
      thumb.style.setProperty("--thumb-y", btn.offsetTop + "px");
      thumb.classList.add("ready");
      if (instant) {
        void thumb.offsetWidth; // flush the snap before restoring transition
        thumb.style.transition = "";
      }
    }

    filters.forEach(function (f, i) {
      var b = document.createElement("button");
      b.className = "seg"; b.type = "button"; b.textContent = f.label;
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        seg.querySelectorAll(".seg").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        moveThumb(b);
        paint(f.key);
      });
      seg.appendChild(b);
    });

    // keep the thumb aligned when the toggle reflows (wrap on narrow viewports)
    window.addEventListener("resize", function () {
      moveThumb(seg.querySelector('.seg[aria-pressed="true"]'), true);
    });

    toggleWrap.appendChild(seg);
    host.appendChild(toggleWrap);
    host.appendChild(grid);
    paint("all");
    // snap the thumb under the default ("All Products") tab once laid out
    moveThumb(seg.querySelector('.seg[aria-pressed="true"]'), true);
  }

  /* ---- Sector page grid: all products of one category ---- */
  function renderSector(host) {
    var cat = host.getAttribute("data-products");
    var items = PRODUCTS.filter(function (p) { return p.cat === cat; });
    var grid = document.createElement("div");
    grid.className = "product-grid";
    host.appendChild(grid);
    paginate(grid, items, host);
  }

  function renderAll() {
    document.querySelectorAll("[data-matrix]").forEach(renderMatrix);
    document.querySelectorAll("[data-products]").forEach(renderSector);
  }

  window.NGX = window.NGX || {};
  window.NGX.products = PRODUCTS;
  window.NGX.renderAll = renderAll;
})();
