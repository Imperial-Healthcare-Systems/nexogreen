/* ============================================================================
   NexoGreen EXIM — products.js
   HS-coded catalog, rebuilt from "Nexogreen EXIM project.md" (2026-06-17).
   + renderers for the home 4-column matrix (§6.1/§14.2) and sector grids.
   Exposes window.NGX.renderAll(), called by main.js after chrome injection.

   CATEGORY MODEL: the site keeps 3 pillars (agriculture / timber / leather).
   Every food/agri section from the source doc (spices, cereals, agro feed,
   farm produce, nuts, oils, starch, veg, powders, plant-protein, misc) folds
   under "agriculture"; timber + charcoal + manganese under "timber"; the four
   wet-blue hides under "leather".

   IMAGERY: every `img` points at a real file under assets/products/<folder>/.
   Source filenames are inconsistent (en-dashes, double spaces, typos like
   "Conut Doc", "Pearl miletes", "Tarmarind seeds", mixed .jpg/.png) — each
   path below is the verified on-disk name, NOT a normalised guess.
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

  // Single asset root; every img is `P + "<folder>/<exact on-disk filename>"`.
  var P = "assets/products/";

  // Each: cat, name, hs (HS code as written in the source doc — NOT unique;
  // several products legitimately share one), img (verified on disk), desc
  // (one short factual line), and `detail` only where a real PDP exists.
  // Order groups by pillar with staples first, so the home matrix's interleaved
  // "All Products" spread reads like a storefront.
  var PRODUCTS = [
    /* ---- AGRICULTURE: cereals & grains ---- */
    { cat: "agriculture", name: "Rice", hs: "1006 30", img: P + "cereals/Rice – 1006 30.jpg", detail: "rice.html", desc: "Raw, parboiled, IR64, Sona Masoori and Basmati grades, sortex-cleaned to specified broken percentages." },
    { cat: "agriculture", name: "Wheat", hs: "1001 19", img: P + "starch powder/Wheat – 1001 19.jpg", desc: "Bread, premium, standard and durum/hard wheat varieties for flour, pasta and baked goods." },
    { cat: "agriculture", name: "Corn / Maize", hs: "1005 90", img: P + "cereals/Corn – 1005 90.jpg", desc: "Yellow maize, white maize and organic corn for food, feed and industrial starch." },
    { cat: "agriculture", name: "Sorghum", hs: "1007 00", img: P + "cereals/Sorghum – 1007 00.jpg", desc: "Red, white and organic sorghum, a starch-rich millet grain for food and industry." },
    { cat: "agriculture", name: "Finger Millet (Ragi)", hs: "1008 30", img: P + "cereals/Finger millets - 1008 30.jpg", desc: "Red, white and organic finger millet, a drought-resistant, gluten-free cereal." },
    { cat: "agriculture", name: "Pearl Millet (Bajra)", hs: "1008 20", img: P + "cereals/Pearl miletes – 1008 20.jpg", desc: "Organic and feed-grade pearl millet, a climate-smart, nutrient-dense grain." },
    { cat: "agriculture", name: "Black Gram (Urad)", hs: "0713 31", img: P + "cereals/black gram-0713 31.jpg", desc: "Whole, dhuli (split), organic and feed-grade urad, a high-protein legume." },
    { cat: "agriculture", name: "Green Gram (Moong)", hs: "0713 33", img: P + "cereals/Green Gram – 0713 33.jpg", desc: "Split (dhuli), organic and feed-grade mung bean, a digestible plant protein." },
    { cat: "agriculture", name: "Tyson Chickpeas", hs: "0713 20", img: P + "cereals/Tyson Chickpeas – 0713 20.jpg", desc: "Desi (black/brown) and Kabuli (cream) chickpeas with a firm, nutty texture." },
    { cat: "agriculture", name: "Soya Beans", hs: "1201 00", img: P + "cereals/Soya Beans – 1201 00.jpg", desc: "Yellow, black and edible soya beans, a high-quality plant protein." },
    { cat: "agriculture", name: "Papad", hs: "1905 90", img: P + "cereals/Papad – 1905 90.jpg", desc: "Urad, rice, moong, garlic, pepper, cumin and plain papad wafers." },

    /* ---- AGRICULTURE: plant-based protein / pulses ---- */
    { cat: "agriculture", name: "Masoor Dal", hs: "0713 40", img: P + "Plant Based Protein/Masoor Dal – 0713 40.jpg", desc: "Whole, split and organic red lentils, quick-cooking and protein-rich." },
    { cat: "agriculture", name: "Toor Dal", hs: "0713 20", img: P + "Plant Based Protein/Toor Dal – 0713 20.jpg", desc: "Whole, split and organic pigeon peas with a mild, nutty flavour." },
    { cat: "agriculture", name: "Tamarind Seeds", hs: "", img: P + "Plant Based Protein/Tarmarind seeds.jpg", desc: "Red tamarind and sour cultivar seeds, comprising seed coat and kernel." },

    /* ---- AGRICULTURE: nuts & oilseeds ---- */
    { cat: "agriculture", name: "Cashew Nuts", hs: "0801 32", img: P + "nuts/Cashew Nuts – 0801 32.jpg", desc: "Grades W-180, W-210, W-240 and W-320 plus raw in-shell kernels." },
    { cat: "agriculture", name: "Ground Nuts", hs: "1202 42", img: P + "nuts/Ground Nuts – 1202 42.jpg", desc: "JL24, K6, TMV2 and Girnar varieties, protein-rich peanuts for snacks and oil." },
    { cat: "agriculture", name: "Sesame Seed", hs: "1207 40", img: P + "nuts/Sesame Seed – 1207 40.jpg", desc: "White and black sesame seeds, oil-rich with a nutty flavour." },
    { cat: "agriculture", name: "Cocoa Bean", hs: "1801 00", img: P + "nuts/Cocoa Bean – 1801 00.jpg", desc: "Forastero, Trinitario and Criollo fermented, dried cocoa beans." },

    /* ---- AGRICULTURE: oils ---- */
    { cat: "agriculture", name: "Coconut Oil", hs: "1513 11", img: P + "Oils/Coconut Oil – 1513 11.jpg", desc: "Virgin/cold-pressed, refined, industrial and organic coconut oil." },
    { cat: "agriculture", name: "Neem Oil", hs: "1515 90", img: P + "Oils/Neem Oil – 1515 90.jpg", desc: "Cold-pressed, organic and solvent-extracted neem oil for agriculture and care." },
    { cat: "agriculture", name: "Castor Oil", hs: "1515 00", img: P + "Oils/Castor Oil – 1515 00.jpg", desc: "Commercial, refined and pharmaceutical/VSP-grade castor oil." },

    /* ---- AGRICULTURE: starch ---- */
    { cat: "agriculture", name: "Cassava (Tapioca) Starch", hs: "1108 19", img: P + "starch powder/Cassava Starch Powder – 1108 19.jpg", desc: "Food- and industrial-grade tapioca starch, neutral and gluten-free." },
    { cat: "agriculture", name: "Potato Starch Powder", hs: "1108 14", img: P + "starch powder/Potato Starch Powder – 1108 14.jpg", desc: "Food- and industrial-grade potato starch, a clear, neutral thickener." },
    { cat: "agriculture", name: "Sweet Potato Starch", hs: "1108 14", img: P + "starch powder/Sweet Potato Starch Powder – 1108 14.jpg", desc: "Food, industrial and organic sweet-potato starch for elastic, crisp textures." },

    /* ---- AGRICULTURE: vegetables ---- */
    { cat: "agriculture", name: "Fresh Ginger", hs: "0910 10", img: P + "vegetables/Fresh ginger – 0910 10.jpg", desc: "Fresh ginger rhizome, aromatic and pungent with gingerol content." },
    { cat: "agriculture", name: "Dried Ginger", hs: "0910 30", img: P + "vegetables/Dried ginger – 0910 30.png", desc: "Dried whole ginger, a concentrated aromatic spice." },
    { cat: "agriculture", name: "Ginger Powder", hs: "0910 40", img: P + "vegetables/Ginger powder – 0910 40.png", desc: "Ground dried ginger for cooking, teas and remedies." },
    { cat: "agriculture", name: "Garlic", hs: "0703 20", img: P + "vegetables/Garlic – 0703 20.jpg", desc: "Agrifound white, Yamuna, desi single-clove and Ooty garlic, rich in allicin." },
    { cat: "agriculture", name: "Fresh Onion", hs: "0703 10", img: P + "vegetables/Fresh onions – 0703 10.jpg", desc: "Fresh red, yellow and white onions for global cooking." },
    { cat: "agriculture", name: "Onion Powder", hs: "2005 90", img: P + "vegetables/Onion powder – 2005 90.png", desc: "Dehydrated, ground onion for seasoning and processing." },
    { cat: "agriculture", name: "Palm Jaggery", hs: "1701 99", img: P + "vegetables/Palm Jaggery -1701 99.jpg", desc: "Unrefined palm-sap sweetener in powder, cube and ball forms." },

    /* ---- AGRICULTURE: spices ---- */
    { cat: "agriculture", name: "Turmeric", hs: "0910 30", img: P + "spices/Turmeric – 0910 30.jpg", desc: "Erode finger (single/double polished), round gattha and golden powder grades." },
    { cat: "agriculture", name: "Cumin Seed", hs: "0909 10", img: P + "spices/Cumin Seed – 0909 10.jpg", desc: "Black (shahi), organic and regular cumin seeds, aromatic and iron-rich." },
    { cat: "agriculture", name: "Coriander", hs: "0907 00", img: P + "spices/Coriander – 0907 00.jpg", desc: "Regular, organic and premium coriander, with customised grades on request." },
    { cat: "agriculture", name: "Dry Red Chillies", hs: "0904 21", img: P + "spices/Dry Red Chillies – 0904 21.jpg", desc: "Whole and powdered dry red chillies, prized for pungency and natural colour." },
    { cat: "agriculture", name: "Dry Red Chillies (Sannam)", hs: "0904 21", img: P + "spices/Dry red chillies sannam.jpg", desc: "Sannam (S4) dry red chilli, a high-colour, moderately pungent variety." },
    { cat: "agriculture", name: "Dry Red Chillies (Teja)", hs: "0904 21", img: P + "spices/Dry Red Chillies Teja.jpg", desc: "Teja chilli with stem/stemless, a very pungent, high-pungency variety." },
    { cat: "agriculture", name: "Dry Red Chillies (Wonder Hot)", hs: "0904 21", img: P + "spices/Dry red chillies wonder hot.jpg", desc: "Wonder Hot dry red chilli, a hot, vivid-red variety." },

    /* ---- AGRICULTURE: powders & herbal ---- */
    { cat: "agriculture", name: "Tamarind Kernel Powder", hs: "1302 19", img: P + "powders/White Natural Tamarind Seeds Kernel Powder – 1302 19.jpg", desc: "Premium, industrial and organic tamarind kernel powder, a natural gum thickener." },
    { cat: "agriculture", name: "Spirulina Powder", hs: "1212 99", img: P + "powders/Spirulina Powder – 1212 99.jpg", desc: "Natural, organic and concentrate spirulina, a protein- and iron-rich algae." },
    { cat: "agriculture", name: "Azolla Powder", hs: "1212 99", img: P + "powders/Azolla Powder – 1212 99.png", desc: "Dried azolla powder and biofertiliser mix, a protein-rich feed and soil input." },
    { cat: "agriculture", name: "Moringa Leaf Powder", hs: "1212 99", img: P + "powders/Moringa Leaf Powder – 1212 99.jpg", desc: "Food, bulk and organic-certified moringa leaf powder, vitamin- and antioxidant-dense." },
    { cat: "agriculture", name: "Guar Gum Powder", hs: "1302 32", img: P + "powders/Guar Gum Powder – 1302 32.jpg", desc: "Premium, super, food and industrial grades, a high-binding natural thickener." },
    { cat: "agriculture", name: "Hibiscus Tea Powder", hs: "0906 30", img: P + "powders/Hibiscus Tea Powder – 0906 30.jpg", desc: "Premium, standard and organic hibiscus, a tangy, antioxidant-rich flower powder." },

    /* ---- AGRICULTURE: agro feed ---- */
    { cat: "agriculture", name: "Rice Bran DOC", hs: "2302 90", img: P + "Agro feed/Rice Bran Doc – 2302 90.jpg", desc: "De-oiled rice bran cake in multiple grades, a high-nutrition animal feed." },
    { cat: "agriculture", name: "Soya Beans Meal", hs: "2304 00", img: P + "Agro feed/Soya Beans Meal – 2304 00.jpg", desc: "Full-fat, de-oiled, defatted, concentrate and organic soya meal, a protein feed." },
    { cat: "agriculture", name: "Rapeseed Meal", hs: "2306 20", img: P + "Agro feed/Rapeseed Meal – 2306 20.jpg", desc: "Standard, de-oiled, low-glucosinolate, pelletised and organic rapeseed meal." },
    { cat: "agriculture", name: "Groundnut Cake", hs: "2306 20", img: P + "Agro feed/Groundnut Cake – 2306 20.jpg", desc: "Standard, premium, organic, low-fat and high-fibre groundnut feed cake." },
    { cat: "agriculture", name: "Coconut Doc (Coconut Cake)", hs: "2306 50", img: P + "Agro feed/Conut Doc  – 2306 50.jpg", desc: "Coconut de-oiled cake/meal, a nutritious byproduct used as animal feed." },
    { cat: "agriculture", name: "Cow Dung", hs: "3101 00", img: P + "Agro feed/Cow Dung 3101 00.jpg", desc: "Cow dung powder, dry cake, organic manure and pellets, a natural fertiliser." },

    /* ---- AGRICULTURE: farm produce ---- */
    { cat: "agriculture", name: "Ghee", hs: "0405 10", img: P + "farm produce/Ghee – 0405 10.jpg", desc: "Pure cow ghee, clarified butter with a rich, nutty flavour and high smoke point." },
    { cat: "agriculture", name: "Cotton Raw", hs: "5201 00", img: P + "farm produce/Cotton Raw - 5201 00.jpg", desc: "MCU-5, Shankar-6, MECH-1, J-34, V-797 and premium Suvin raw cotton." },
    { cat: "agriculture", name: "Honey", hs: "0409 00", img: P + "farm produce/Honey – 0409 00.jpg", desc: "Multifloral, forest, acacia, eucalyptus and moringa honey, raw and pasteurised." },

    /* ---- AGRICULTURE: misc (citrus & salt) ---- */
    { cat: "agriculture", name: "Lemon", hs: "0805 50", img: P + "Misc/Lemon – 0805 50.jpg", desc: "Eureka, Lisbon, Kagzi and Kadayam lemons, bright, high-acid citrus." },
    { cat: "agriculture", name: "Salt", hs: "2501 00", img: P + "Misc/Salt – 2501 00.jpg", desc: "Industrial, table, curing and Himalayan rock salt grades." },
    { cat: "agriculture", name: "Himalayan Salt Chunk", hs: "2501 00", img: P + "Misc/Himalayan Salt Chunk – 2501 00.jpg", desc: "Natural, unrefined pink Himalayan rock-salt chunks for seasoning and decor." },

    /* ---- TIMBER & FORESTRY ---- */
    { cat: "timber", name: "Mahogany Timber & Wood", hs: "4407 10", img: P + "Forest Product/Mahogany Timber and Wood - 4407 10.jpg", desc: "Sawn mahogany, general timber log and saw timber, strong seasoned hardwood." },
    { cat: "timber", name: "Teak Timber", hs: "4407 21", img: P + "Forest Product/Teak Timber – 4407 21.jpg", desc: "Teak timber logs and sawn timber, a durable, oil-rich golden hardwood." },
    { cat: "timber", name: "Wood Charcoal", hs: "4402 90", img: P + "Forest Product/Wood charcoal – 4402 90.jpg", desc: "Clean, hot-burning, low-smoke wood charcoal for grilling and fuel." },
    { cat: "timber", name: "Coconut Shell Charcoal", hs: "4402 90", img: P + "Forest Product/Coconut shell charcoal – 4402 90.png", desc: "Dense coconut-shell charcoal for cooking and activated-carbon feedstock." },
    { cat: "timber", name: "Premium Cooking Charcoal", hs: "4402 90", img: P + "Forest Product/Premium cooking charcoal – 4402 90.jpg", desc: "Premium cooking charcoal, hot and low-smoke for grilling." },
    { cat: "timber", name: "Activated Charcoal", hs: "3802 10", img: P + "Forest Product/Activated charcoal – 3802 10.jpg", desc: "High-porosity activated charcoal for filtration, purification and medicinal use." },
    { cat: "timber", name: "Manganese Ore", hs: "2602 00", img: P + "Forest Product/Manganese - 2602 00.jpg", desc: "High- and medium-grade manganese ore, lumps and fines for steelmaking." },

    /* ---- LEATHER: each wet-blue grade now has its own hide photo ---- */
    { cat: "leather", name: "Cow Wet Blue Leather", hs: "4107 91", img: "assets/hero/cow wet blue leather.jpg", desc: "Chrome-tanned cow wet blue, strong and thick, ready for dyeing and finishing." },
    { cat: "leather", name: "Buffalo Wet Blue Leather", hs: "4107 91", img: "assets/hero/Buffalo wet blue leather.webp", desc: "Robust buffalo wet blue with heavy substance for footwear and upholstery." },
    { cat: "leather", name: "Goat Wet Blue Leather", hs: "4107 91", img: "assets/hero/Goat wet blue leather.jpeg", desc: "Fine-grain, soft goat wet blue, a base for garment and lining leather." },
    { cat: "leather", name: "Sheep Wet Blue Leather", hs: "4107 91", img: "assets/hero/Sheep wet blue leather.jpg", desc: "Supple, lightweight sheep wet blue for apparel and accessories." }
  ];

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

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

  // Option A "Full-Bleed Image Tile": the product image fills the card; a navy
  // gradient overlay keeps the frosted sector pill (top) and the editorial name
  // + freight CTA (bottom) legible over any photo. Single source for both the
  // home matrix and every sector grid — keeps class "reveal" + data-delay.
  function cardHTML(p, idx) {
    var rfq = "request-a-quote.html?product=" + encodeURIComponent(p.name);
    var delay = (idx % 4) + 1;
    return '' +
    '<article class="p-card reveal" data-cat="' + p.cat + '" data-delay="' + delay + '">' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy" />' +
      '<div class="p-top"><a class="p-cat" href="' + (PAGE[p.cat] || "products.html") + '">' + esc(LABEL[p.cat]) + '</a></div>' +
      '<div class="p-body">' +
        '<h3>' + (p.detail ? '<a href="' + esc(p.detail) + '">' + esc(p.name) + '</a>' : esc(p.name)) + '</h3>' +
        '<a class="freight-link" href="' + rfq + '">Request Freight Quote ' + ARROW + '</a>' +
      '</div>' +
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
