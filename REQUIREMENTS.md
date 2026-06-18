# NexoGreen EXIM — Frontend Requirements Document

**Version:** 1.5
**Date:** 2026-06-18
**Status:** Approved scope — built; in iteration
**1.5 changes (Precious Stones 4th sector + hero, footer & copy refresh):** Added **Precious Stones** as a fourth product sector — a new `precious-stones.html` sector page plus four catalog lines (Garnet, Tourmaline, Amethyst, Ruby; HS 7103) wired into `js/products.js` (`LABEL`/`PAGE`/`PRODUCTS`/matrix filters/home spread), the Products dropdown and footer (`js/main.js`), the home + Products pillar grids (`.cat-grid` now 4-up), and the metrics counters (**3→4 sectors, 4→6 continents**) — documented in **§15.22**. Expanded the **home hero slideshow 3→5 slides** with a new `assets/Hero Banner Slide Show/` WebP set — **§15.23**. Reworked the **footer**: larger ratio-preserving logo (40px→88px height), dropped the brand-blurb paragraph, and added **multi-country phone numbers** (two India + one Zambia), mirrored on the Contact page — **§15.24**. Introduced a **`--muted-invert` dark-background text token** that replaces the scattered hardcoded dark-bg greys (`#d3e0eb`/`#aab6c6`/`#9fb0c4`/`#cdd6e2`), gave the pre-footer `.cta-band` the homepage RFQ gradient, and fixed immersive-header dropdown link contrast — **§15.25**. Ran a **copy pass de-emphasizing HS-code framing** across product/sector pages (and dropped the explicit "spices excluded" line, the pillar-card descriptions, reworded the region-toggle meta, and gave Certifications/Logistics image hero banners) — **§15.26**.
**1.4 changes (SEO, social-share & performance hardening):** A site-wide technical SEO / performance pass. Normalized the **social-share meta tags** on every page — absolute `og:image`, per-page `og:url`, and a full mirrored `twitter:image`/`twitter:title`/`twitter:description` set (plus a complete block added to the previously-bare `404.html`) — documented in **§15.16**. Added **intrinsic `width`/`height`** to every `<img>` (read from the real files), `loading="lazy"` on below-the-fold images, and `fetchpriority="high"` on each page's eager hero image (correcting index's placeholder slideshow dimensions) — documented in **§15.17**. Added a minimal, standards-compliant **`robots.txt`** (allow-all + sitemap reference) and a generated **`sitemap.xml`** (sitemaps.org 0.9, 13 public pages, real `lastmod`, homepage priority 1.0) — documented in **§15.18**. Added a root **`README.md`** with a formal demo/evaluation notice (provisional copy, illustrative catalogue) — documented in **§15.19**. Refined the product card so the **product name links to its detail page** (replacing the separate "View details" link) — documented in **§15.20**.
**1.35 changes (Contact map + first product detail page + 404):** Added the **office location Google Map** on the Contact page (embedded keyless iframe + "Get directions" button, between the contact section and the footer) — documented in **§15.13** with the procedure to update the pinned location. Introduced the **product detail page (PDP)** type with **`rice.html`** as the first instance (overview / range / specifications / CTA, real rice photo, clearly-marked placeholder spec rows) and wired an optional **`detail`** field + **"View details"** card link in `js/products.js` — documented in **§15.14** including how to add more PDPs. Added a branded **`404.html`** error page (animated shipping-lane motif, gradient code, quick destination links) — documented in **§15.15**.
**1.3 changes (Implementation reconciliation):** Documented the as-built frontend after a full codebase-vs-spec audit. Adds the new **§15 — v1.3 Iteration Change Log** capturing every divergence and refinement made during the build: the rebuilt **home hero slideshow** (now 3 curated slides, §13.1), **inner-page hero banners** + the `page-hero` stacking-context fix (§6.3/§6.4), the **"Show More" pagination** on product listings (§14.2), the **merchandised product order** (§14.2), the **icon-led product card** (image-free) divergence from §14.2, the **`section--pillars` gradient** and sector-card restyle on the home pillars block (§6.1), the **search-dock** layout hardening (§14.6), and — reversing the v1.2 decision — the re-application of **fixed-background parallax to the "Why partner with us" values block** (§13.2 / §13.8.2 / §14.4). Where §15 conflicts with an earlier section, the in-place `**v1.3:**` note and §15 win.
**1.2 changes (Layout Audit — production hardening):** Folded a full UI/UX layout audit (9 annotated screenshots, 2026-06-13) into the spec to convert the brochure layout into a **streamlined, high-conversion system for international enterprise buyers and procurement officers**. Retuned the palette (§2.5.1) to a deep-navy / emerald production system, standardized typography (§2.5.2) on **Inter** with an engineering-grade px hierarchy, pinned the header to four core links + a single "Inquire Now" CTA (§5.1), rebuilt the home product zone as a filterable 4-column matrix (§6.1, superseding the marquee in §13.8.1), and added a consolidated **Production Design System & Conversion Engineering** spec (§14) covering the 8px spacing system, component anatomy, interaction patterns, WCAG 2.1 AA fixes, and the multi-step RFQ panel. All new requirements cross-reference the business values, regulatory licenses, and HS-coded product data in `Nexogreen EXIM project.md`.
**1.1 changes:** Simplified the color system (§2.5) to a 5-role palette (text / background / primary / secondary / accent), set typography to **Martel Sans** headings + **IBM Plex Sans** body on an augmented-fourth type scale, and added a dedicated **Motion, Interactivity & Immersion System** (§13) — hero slideshow, layered parallax, gradient text highlights, creative section rhythm, scroll choreography, and micro-interactions.
**Prepared for:** NexoGreen EXIM website (Phase 1 — frontend / brand presence)

---

## 1. Project Overview

### 1.1 Purpose
Establish **NexoGreen EXIM** online with a credible, premium, multi-page marketing
website that positions the company as a **trusted global export–import trading partner**.
The site must build trust with international buyers, domestic suppliers/partners, and
investors, and drive trade inquiries via contact and request-for-quote (RFQ) forms.

### 1.2 Tagline
> **Global Trade, Growth, Trust.** (from the logo)

Supporting line (from strategy doc): *"Delivering Nature's Products to the World."*

### 1.3 Use case / primary goal
Brand establishment + lead generation. Success = a polished, fast, mobile-friendly site
that communicates legitimacy and converts visitors into **inquiries / quote requests**.

---

## 2. Brand Identity

### 2.1 Name
- **Brand name (use everywhere):** **NexoGreen EXIM** (logo: "NGX" + globe).
- Reuse the strategy document's copy, company story, and mission/vision **under the
  NexoGreen EXIM name**.

### 2.2 Legal details (footer / legal area)
Source of record: the **LEGAL DOCUMENTS** block in `Nexogreen EXIM project.md`. Render these
in the **first information column of the footer, directly beneath the corporate logo** (see
§5.2 and §14.8), formatted on three discrete lines for fast verification by auditing customs
agents and procurement compliance teams:
- CIN: `U46530TN2025PTC184973`
- PAN: `AAJCE1907E` *(verify final digit before publishing)*
- TAN: `MRIEO1276` *(verify final digit before publishing)*

### 2.3 Contact details
- **Address:** ½ A Kuthuriyar Street, Singamparai, Mukkudal, Ambasamudram,
  Tirunelveli District – 627601, Tamil Nadu, India.
- **Phone:** +91 78455 82769
- **WhatsApp:** +91 78455 82769
- **Email:** info@nexogreenexim.com *(placeholder — confirm final domain/inbox)*

### 2.4 Logo assets (in `/assets`)
- `logo.png` — primary (NGX + globe + wordmark, transparent, 1429×495)
- `logo-white.png` — knockout variant for dark backgrounds
- `logo-mark.png` — mark only (no wordmark)
- Favicons + apple-touch-icon + OG image already generated.

### 2.5 Visual direction — **Deep Navy + Emerald (logo-matched), enterprise B2B**
Premium, logistics-forward B2B feel tuned for international procurement officers. The v1.2
layout audit retuned the system from the earlier blue/gold scheme to a **deep-navy structure
with a single emerald action color**, maximizing contrast and conversion clarity. Implement the
palette as CSS custom properties on `:root`; derive any tints/shades from these tokens.

#### 2.5.1 Palette — production system (v1.2)
| Role | Token | Hex | Mandated usage |
|------|-------|-----|----------------|
| **Primary — Deep Navy** | `--primary` | `#0B192C` | Absolute base color: hero text headers, primary container states, structural footer panels, and deep section backgrounds. |
| **Accent — Emerald Green** | `--accent` | `#1A9248` | Interactive functional accents **only**: primary CTA button fills, active navigation indicator tabs, verified success icons. **Never** used for body copy or descriptive text blocks. |
| **Mint Tint** | `--mint` | `#EAF8EE` | Background fill for **circular vector icon containers**, applied at a **15% opacity limit**. |
| **Neutral Off-White** | `--bg-alt` | `#F8F9FA` | Alternative structural background-block system — replaces high-saturation section transitions with clean, light-gray bands (e.g. the restructured value-proposition block, §6.1 / §14.4). |
| **Neutral Text Charcoal** | `--text` | `#333333` | **Mandatory baseline typographic color** across all light-background regions to guarantee contrast (≥ 4.5:1, §14.7). |

Deep navy carries structure and authority (headers, footer, deep bands); emerald is the single,
disciplined action color (CTAs, active tabs, success states only); mint tint is reserved for
icon-container fills at ≤15% opacity; off-white establishes the light structural bands; charcoal
is the default body text on light surfaces. **Do not introduce green as a text color** and **do
not place emerald fills outside interactive controls.**

#### 2.5.2 Typography — production hierarchy (v1.2)
- **Global font family:** standardize **every** interface component on the geometric sans-serif
  family **Inter** for high structural legibility (supersedes the earlier Martel Sans / IBM Plex
  Sans pairing).
- **Engineering-grade hierarchy matrix:**

  | Role | Size | Weight | Line-Height |
  |------|------|--------|-------------|
  | Display Hero Headings | `48px` | Bold (700) | `1.2` |
  | Section Headers (H2) | `32px` | Semi-Bold (600) | `1.3` |
  | Component Grid Cards (H3) | `20px` | Medium (500) | `1.4` |
  | Standard Body Paragraphs | `16px` | Regular (400) | `1.6` |
  | Utility Labels & Tags | `12px` | Medium (500) | `1.0` |

- **Scannability constraints (hard rules):** **forbid** line-height below `1.5` on body elements;
  **forbid** character tracking expansion above `0.02em` on header elements. This keeps copy
  crisp and fast-scannable for time-pressed enterprise buyers.
- **Feel:** clean editorial B2B, **generous and intentional whitespace**, trust-forward,
  premium — depth created with soft layered shadows, the 4px component radii of §14.2, and
  tasteful motion rather than clutter.

---

## 3. Audience & Tone
- **Primary audiences (all):** international B2B buyers/importers, domestic
  suppliers/partners, and investors/strategic partners.
- **Tone:** professional, credible, sustainability-minded, globally-oriented; emphasizes
  **quality assurance, responsible sourcing, transparency, and reliable delivery**.

---

## 4. Technology & Delivery

| Aspect | Decision |
|--------|----------|
| **Stack** | Plain **HTML + CSS + JavaScript** (no framework, no build step required) |
| **Hosting** | Static host (Netlify / Vercel / Cloudflare Pages) — flexible paths |
| **Forms** | Form service (**Formspree or Web3Forms**), wired to a **clearly-marked placeholder** endpoint/key to be swapped by client |
| **Languages** | **English only** |
| **Responsiveness** | Fully responsive — mobile, tablet, desktop |
| **Motion** | **Rich, dynamic & immersive** — hero slideshow, layered parallax, gradient text highlights, scroll choreography, animated counters, magnetic/hover micro-interactions. Full spec in **§13**. All gated behind `prefers-reduced-motion`. |
| **Catalog data** | Driven by a structured data file (e.g. `products.js`/`products.json`) so products render from data and are easy to edit |

### 4.1 Suggested file structure
```
/
├── index.html                 (Home)
├── about.html
├── products.html              (overview of 3 categories)
├── agriculture.html           (sector page)
├── timber.html                (sector page — Timber & Forest Produce)
├── leather.html               (sector page)
├── sustainability.html
├── global-markets.html
├── certifications.html
├── contact.html
├── request-a-quote.html       (RFQ)
├── legal.html                 (optional — legal IDs, privacy)
├── rice.html                  (product detail page — first PDP, §15.14)
├── 404.html                   (branded error page, noindex — §15.15)
├── /assets                    (logos, images — already present)
├── /css/                      (styles)
├── /js/                       (main.js, products.js, forms.js, animations)
├── robots.txt                 (allow-all + sitemap reference — §15.18)
├── sitemap.xml                (sitemaps.org 0.9, public pages — §15.18)
├── README.md                  (project overview + demo notice — §15.19)
└── REQUIREMENTS.md
```

---

## 5. Site Map & Navigation

### 5.1 Header (fixed/pinned, on every page) — **rebuilt per layout audit**
> **Audit finding (`Screenshot from 2026-06-13 10-47-47.jpg`):** the live header carried a
> redundant **duplicate text-based "Contact" link** and an overloaded 7-item nav row. The
> production header eliminates the duplicate and locks to a lean, conversion-first layout.

- **Logo** (left, links to Home).
- **Fixed, pinned desktop header** carrying **exactly four core links**:
  **[Products] · [Logistics Network] · [Sustainability] · [About Us]**.
  - **[Products]** retains the **▾ dropdown / submenu** to the three sector pages — Agriculture,
    Timber & Forest Produce, Leather — plus the full **Products overview**.
  - **[Logistics Network]** is the relabeled route to the global-markets / route-map page
    (§6.6, §14.6), foregrounding supply-chain capability over a generic "markets" label.
- **Right-aligned container = a single primary conversion button only:** an emerald
  `#1A9248` (`--accent`) CTA labeled **"Inquire Now"** (routes to the RFQ/Contact flow, §6.9).
  No secondary text links share this container.
- **Removed from the header** (audit): the duplicate **Contact** link; standalone
  **Certifications** and **Contact** nav items are demoted — certifications surface in the
  compliance strip (§14.1) and footer, contact surfaces via "Inquire Now" and the footer.
- Active state: the current section's link shows the **emerald active-tab indicator** (§2.5.1).
  Sticky header condenses + gains shadow on scroll (§13.6).

### 5.2 Footer (every page)
- **First information column (legal/identity):** corporate logo, then — **directly beneath the
  logo** — the official licensing data on three lines (§2.2, §14.8) to establish absolute legal
  transparency for auditing customs agents:
  `CIN: U46530TN2025PTC184973` / `PAN: AAJCE1907E` / `TAN: MRIEO1276`. Short blurb + tagline.
- Quick links (all main pages + sector pages)
- Contact block (address, phone, WhatsApp, email)
- Company line: **NexoGreen EXIM** + CIN
- Footer panels use the **Deep Navy `#0B192C`** structural background (§2.5.1).
- Copyright + (optional) social links

---

## 6. Pages — Content & Sections

### 6.1 Home (`index.html`)
- **Hero — logistics-first framing (rebuilt per audit):**
  - **Background asset:** replace the standalone rural agricultural field graphic seen in
    `Screenshot from 2026-06-13 10-47-47.jpg` with the integrated **farm-to-port split-screen
    image** showcased in `Screenshot from 2026-06-13 11-18-42.jpg`, aligning the hero with the
    company's core value of **operational supply-chain efficiency** (cf. "end-to-end supply
    control" and "strict control over sourcing, processing, documentation, and logistics" in
    `Nexogreen EXIM project.md`). May still run as the §13.1 slideshow, but the **primary slide
    is the farm-to-port composite**.
  - **Contrast protection:** apply a **45% black linear-gradient overlay layer** beneath the main
    title text (supersedes the generic `--gradient-overlay`) so the Display heading clears AA
    contrast (§14.7) on the bright port imagery.
  - Headline (`48px / 700 / 1.2`, §2.5.2) with a gradient-highlighted accent word + tagline +
    dual CTA. Ken-Burns drift, layered parallax, slide dots + scroll cue (§13.1).
  - **Unified Search Dock** embedded inside the hero box — see §14.6 (Material Category dropdown +
    Target Destination Port field + emerald "Check Route Availability" trigger).
- **Corporate Trust & Compliance Strip:** replace the unanchored pill-shaped license tags seen in
  `Screenshot from 2026-06-13 11-09-19.jpg` with the **solid light-gray compliance bar** specified
  in §14.1 (monochrome ISO 9001 / ISO 22000 / IEC / FSSAI / Agmark logos, each with a hover
  tooltip revealing its registration/license number). Panel **overlaps the hero edge** (negative
  top margin, §13.4) for depth.
- **Operational Metrics Strip:** four high-contrast columns on a solid background (§14.5) —
  **[4 Continents Served] · [3 Primary Core Sectors] · [50+ Standard Product Lines] ·
  [100% Inspected Quality Control]** — with animated counters (§13.5). Figures trace to the
  project doc (four regions: Asia, Africa, Middle East, Europe; three pillars; 50+ HS-coded lines).
- **Product Portfolio — interactive categorical matrix (rebuilt per audit):** deprecate the flat,
  unstructured **infinite horizontal product-scroll row** running across
  `Screenshot from 2026-06-13 11-09-19.jpg` and `Screenshot from 2026-06-13 11-09-32.jpg`
  (supersedes the §13.8.1 marquee). Rebuild as an **interactive 4-column categorical matrix grid**
  driven by a **top-level segmented toggle** that filters by the three core pillars:
  **[Agriculture Commodities] · [Timber & Forestry Produce] · [Premium Treated Leather]**. Card
  anatomy (image frame, category heading, **HS-Code badge**, "Request Freight Quote →" link) is
  specified in §14.2; grid gap/padding in §14.3.
  - **v1.3 (as-built):** the active emerald pill is a single **sliding thumb** that animates
    horizontally between tabs on selection rather than each button snapping its own background.
    Same toggle markup drives both the home preview and the products-page matrix. See §15.11.
- **What we do:** the three pillar cards (`Screenshot from 2026-06-13 11-09-53.jpg`) → Agriculture,
  Timber & Forest Produce, Leather (`.cat-card`), with image-zoom + reveal-on-hover detail and
  staggered scroll reveal.
  - **v1.3 (as-built):** this block (`.section--alt.section--pillars`) gains a top-to-bottom
    **mint→emerald gradient wash** (`linear-gradient(180deg, rgba(234,248,238,0) 0%,
    rgba(26,146,72,.15) 95%)`). The Leather card image is `assets/leather/premium-hides.jpg`
    (was a missing `leather-hide.jpg`). The "## / Sector" index label (`.cat-index`) is restyled
    **white + bold (700) with a green text-shadow** (`0 1px 4px rgba(26,146,72,.9)`) for
    legibility over the photos. See §15.6. *(Note: the green-tinted gradient sits within the
    "no green as a text color" rule of §2.5.1 — it is a background wash, not type.)*
- **Why choose us — Value Proposition block (restructured per audit):** the **six** corporate
  values (consistent quality, transparent documentation, reliable delivery, end-to-end supply
  control, ethical sourcing, responsive partnership — per `Nexogreen EXIM project.md`) currently
  float as **semi-transparent cards over a background image** in
  `Screenshot from 2026-06-13 11-10-06.jpg`. **Remove that translucent-over-photo treatment**
  (supersedes the §13.8.2 fixed-background frosted cards for this section): move the six values
  onto a **clean, solid, off-white `#F8F9FA` background block** to eliminate background noise and
  maximize scannability. Card styling per §14.3 (solid white cards, 4px radius, light shadow,
  mint-tinted icon circle).
- **Global reach / Logistics Network teaser:** Asia, Africa, Middle East, Europe → link to the
  Logistics Network page; upgrade the static wireframe route graphic
  (`Screenshot from 2026-06-13 11-10-25.jpg`) to the **interactive route map** of §14.6.
- **Sustainability teaser** (`Screenshot from 2026-06-13 11-10-36.jpg`) → split layout with a
  floating badge + parallax media → link to Sustainability page.
- **Enterprise RFQ conversion panel:** replace the static lower-funnel text links of
  `Screenshot from 2026-06-13 11-10-55.jpg` with the **deep-navy multi-step RFQ card** specified
  in §14.8 ("Ready to Source with a Partner You Can Trust?" + three capture fields + "Generate
  RFQ Now").

### 6.2 About (`about.html`)
- Company overview, motivation & origins (founder/farming roots story from doc).
- Vision, Mission, Our Promise.
- Leadership: **Dr. Kalirajan Arunachalam, CEO** (portrait `team/leadership-portrait.jpg`).
- What we do / who we work with (farmers, cooperatives, plantation owners, forest operators,
  regulated mining partners).

### 6.3 Products overview (`products.html`)
- Intro to the portfolio, then the **three category blocks**, each linking to its sector page.
- **v1.3 (as-built):** hero is a `.page-hero` with `assets/hero/About-Handshake.png`. Below the
  three pillar cards (Leather card → `assets/leather/premium-hides.jpg`) sits the **full
  filterable matrix** (`data-matrix`, no `data-limit`) rendering all 46 lines with the segmented
  pillar toggle and the **"Show More" 12+8 pagination** (§14.2). See §15.2/§15.4.

### 6.4 Sector pages (accessible via Products ▾ submenu)
Each: sector hero/banner, intro copy, product grid (cards rendered from data, with HS codes,
short description, ranges/grades), CTA to RFQ.

> **v1.3 (as-built) — sector hero images & stacking fix:** each sector page uses a single
> **static** `.page-hero` background image (not a slideshow) — Agriculture →
> `hero/hands-soil-seedling.jpg`, Timber → `sustainability/sustainable-forestry.jpg`, Leather →
> `hero/leather-banner.png`. `.page-hero` was given **`isolation: isolate`** so its negatively
> z-indexed background `<img>` (`z-index:-2`) and navy gradient overlay (`::after`, `z-index:-1`)
> render correctly instead of being hidden behind the section's own navy background. The product
> grids use the **"Show More" 12+8 pagination** (§14.2) — Agriculture (36 lines) shows the
> button; Timber (6) and Leather (4) do not. See §15.2/§15.4.

- **Agriculture (`agriculture.html`)** — folds in **all** agri/food/feed items from the doc
  **except spices** *(spices excluded per client)*. Includes: cereals & grains (rice, corn,
  sorghum, millets, wheat), pulses/plant-based protein (black gram, green gram, chickpeas,
  soya, masoor, toor), oils & oilseeds (neem, castor, coconut), nuts (cashew, groundnut,
  cocoa, sesame), starch powders (cassava, potato, sweet potato), herbal/functional powders
  (tamarind kernel, spirulina, azolla, moringa, guar gum, hibiscus), vegetables (ginger,
  garlic, onion), farm produce (ghee, honey, cotton, palm jaggery), agro-feed (rice bran DOC,
  soya/rapeseed/groundnut/coconut meal, cow dung/organic fertilizer), and salt range (incl.
  Himalayan rock salt). *Note: leather (wet blue) lives under Leather, not Agriculture.*
- **Timber & Forest Produce (`timber.html`)** — mahogany & teak timber/wood, charcoal range
  (wood, coconut-shell, premium cooking, activated), and **manganese ore** (folded here as a
  natural-resource/forest-product item).
- **Leather (`leather.html`)** — **Wet Blue Leather** (cow, buffalo, goat, sheep) and ranges.

> **Spices are excluded** from the catalog per client decision (red chilli, turmeric,
> coriander, cumin, etc. are **not** featured).

### 6.5 Sustainability (`sustainability.html`)
- Ethical & environmentally responsible export practices; empowering farmers/producers;
  protecting ecosystems; compliance with international trade & environmental standards;
  traditional farming wisdom + modern export systems. Uses `sustainability/` imagery.

### 6.6 Global Markets / Logistics Network (`global-markets.html`)
- Header label is **"Logistics Network"** (§5.1). Regions served: **Asia, Africa, Middle East,
  Europe**; **interactive route map** (§14.6) replacing the static wireframe of
  `Screenshot from 2026-06-13 11-10-25.jpg`; logistics & export capabilities; what clients value
  (quality, documentation, delivery schedules).

### 6.7 Certifications (`certifications.html`)
- Standards: **ISO 9001, ISO 22000, IEC, FSSAI, Agmark / Organic Certification.**
- Present as "licensed with / working to" credibility section (supportive imagery, not faked
  held badges). Compliance & documentation messaging.
- Reuses the **monochrome compliance strip** component (§14.1) — official vector logos with
  hover tooltips exposing each authority's registration/license number.

### 6.8 Contact (`contact.html`)
- **Contact / inquiry form** (Formspree/Web3Forms placeholder).
- Full contact details, address, phone, email, **embedded Google Map** (office location, between
  the contact section and the footer) with a **"Get directions"** button, business context.
  Implemented as-built — see §15.13 (including the procedure to update the pinned location).

### 6.9 Request a Quote (`request-a-quote.html`)
- **Single standalone RFQ form** (see §7.2). The header **"Inquire Now"** CTA (§5.1), the product
  cards' **"Request Freight Quote →"** links (§14.2), and the home **"Generate RFQ Now"** panel
  (§14.8) all route here and **prefill the product/category** where applicable (via query param).

### 6.10 Legal (optional `legal.html`)
- Legal entity, CIN/PAN/TAN, basic privacy note. Otherwise fold into footer.

---

## 7. Forms (no backend — form service)

### 7.1 Contact / Inquiry form
Fields: Name*, Company, Email*, Phone, Country, Message*. Spam honeypot. Client + service
validation. Success/error states.

### 7.2 Request-a-Quote (RFQ) — **single form**
Fields: Name*, Company*, Email*, Phone, Country/Destination*, **Product / Category**
(dropdown or text, **prefillable via URL param** from "Request quote" buttons), Quantity +
Unit, Target price (optional), Packaging requirements (optional), Message/notes. Spam
honeypot. Validation + success/error states.

> Both forms wired to a **clearly-marked placeholder endpoint/key** (e.g.
> `YOUR_FORMSPREE_ENDPOINT`) for the client to replace.

---

## 8. Content Strategy
- **Copy:** I draft professional placeholder copy from the strategy document; client reviews
  and refines/replaces final wording.
- **Products:** rendered from a structured data file built from the strategy doc (names, HS
  codes, descriptions, ranges/grades), **spices omitted**.
- **Imagery:** use the existing `/assets` library (logos, hero, sector, product placards).
  The **IMAGE-WISHLIST.md** narrative/trust layer (logistics, sustainability, people,
  process, compliance, context, textures) is a roadmap — placeholders/best-available used
  where wishlist assets don't yet exist; flagged for later sourcing.

---

## 9. Non-Functional Requirements
- **Responsive** across mobile/tablet/desktop; tested at common breakpoints.
- **Performance:** optimized images (target <250 KB cards / <500 KB heroes; WebP where
  possible), lazy-loading, minimal blocking JS.
- **SEO:** semantic HTML, per-page `<title>`/meta description, Open Graph tags (OG image
  present), descriptive alt text, sitemap-friendly structure.
- **Accessibility (WCAG 2.1 AA):** all text ≥ **4.5:1** contrast against its background;
  keyboard-navigable nav/dropdown/forms; visible **emerald focus rings** on every interactive
  control; descriptive `aria-label`s on icons, map nodes, and graphic components;
  `prefers-reduced-motion` honored for the rich animations. Full enforcement spec in **§14.7**.
- **Browser support:** current evergreen browsers (Chrome, Edge, Firefox, Safari).
- **Cross-page consistency:** shared header/footer, CSS variables for the palette, reusable
  card/section components.

---

## 10. Scope Boundaries (Phase 1)
**In scope:** the pages, navigation, forms (UI + service-wired with placeholder), catalog
rendered from data, responsive premium design, rich animations, SEO/accessibility basics,
use of existing assets.

**Out of scope (later phases):** buyer/partner login portal, e-commerce/checkout,
multilingual content, CMS, real backend, live form-service account setup, sourcing of new
photography, blog/news.

---

## 11. Open Items to Confirm Before/During Build
1. Confirm the final email address/domain (placeholder: `info@nexogreenexim.com`).
2. Verify masked legal IDs (PAN/TAN final digits) before publishing.
3. ~~Exact hex values / font pairing~~ — **resolved in §2.5 (v1.2 production system:** deep-navy
   `#0B192C` + emerald `#1A9248` palette, **Inter** type hierarchy). Client to sign off on hues.
4. Confirm Formspree vs Web3Forms as the chosen service.
5. Confirm manganese ore placement (currently under Timber & Forest Produce) and salt
   placement (currently under Agriculture).
6. Provide/confirm any real product photos to replace stock placards before go-live.
7. Supply the **real registration/license numbers** for the compliance-strip tooltips
   (ISO 9001, ISO 22000, IEC, FSSAI, Agmark — §14.1); placeholders ship until provided.
8. Source/confirm the **farm-to-port split-screen hero asset** (per §6.1 / `…11-18-42.jpg`) to
   replace the rural-field placeholder.

## 12. Summary of Key Decisions (from requirements interview)
| Topic | Decision |
|-------|----------|
| Business | General import–export trading house |
| Audience | All (international buyers, domestic partners, investors) |
| Scope | Multi-page marketing site + RFQ |
| Stack | Plain HTML/CSS/JS |
| Brand | **NexoGreen EXIM** |
| Categories | **3:** Agriculture, Timber & Forest Produce, Leather (spices excluded) |
| Extra pages | Sustainability, Global Markets, per-sector pages (in Products ▾ submenu) |
| Features | Contact form, single RFQ form, product catalog browse |
| Forms | Formspree/Web3Forms, placeholder endpoint |
| Palette | **v1.2:** Deep Navy `#0B192C` + Emerald `#1A9248` (+ mint/off-white/charcoal), enterprise B2B |
| Typography | **v1.2:** Inter, engineering-grade px hierarchy (§2.5.2) |
| Motion | Rich & dynamic |
| Hosting | Static host (Netlify/Vercel/Cloudflare) |
| Language | English only |
| CTA | Persistent **"Inquire Now"** in header (§5.1) → RFQ flow; product cards use "Request Freight Quote →" |
| Motion | **Rich, immersive** — slideshow hero, layered parallax, gradient text, scroll choreography (§13) |

---

## 13. Motion, Interactivity & Immersion System

The site should feel **alive, layered, and premium** — not a flat brochure. Motion is
**purposeful** (guides the eye, signals interactivity, adds depth) and **performant**
(GPU-friendly `transform`/`opacity` only, no layout thrash). **Everything in this section
degrades gracefully under `prefers-reduced-motion: reduce`** — animations resolve to their
final state, slideshows stop auto-advancing (manual controls remain), parallax layers lock to
a static composition.

### 13.0 Motion principles
- **Layered depth:** foreground content, mid-ground cards, and background media move at
  *different speeds* to create parallax depth. Background always slowest.
- **Choreography, not chaos:** entrances are **staggered** (50–120ms apart), easing
  `cubic-bezier(.2,.7,.2,1)` for reveals, `easeOutCubic` for counters. Durations 0.4–0.8s.
- **Respond to input:** hover, focus, scroll position, and (optionally) pointer position all
  drive subtle feedback. Interactive elements visibly react.
- **Restraint at rest:** ambient motion (Ken-Burns, aurora glow) is *slow and low-amplitude*
  so text stays readable and the page never feels busy.

### 13.1 Hero slideshow (home + sector banners)
- **Auto-advancing crossfade slideshow**, 3–4 slides, ~6s per slide, 1.2s crossfade.
- **Ken-Burns** drift on the **active** slide only: slow `scale(1.06 → 1.12)` + a few px pan,
  so the still image feels filmic.
- **Layered hero parallax:** on scroll, the slideshow layer moves ~0.18× scroll, a mid
  decorative layer (soft gradient blobs) ~0.4×, and the headline/CTA ~1× — producing depth as
  the user scrolls away.
- **Controls:** clickable **slide dots** + left/right arrows (keyboard accessible,
  `aria-label`ed); auto-advance **pauses on hover/focus** and when the tab is hidden.
- **Overlay:** `--gradient-overlay` keeps headline contrast AA on any slide.
- **Placeholder slides (home):** reuse existing assets now, flag wishlist replacements later:
  1. `hero/home-trade-hero.jpg` (global trade / port) — primary
  2. `hero/agriculture-landscape.jpg` (farms / produce)
  3. `timber/timber-logs.jpg` (timber & forest produce)
  4. `leather/leather-hide.jpg` (leather)
  *(Wishlist: container port, cargo vessel, loading/logistics, world-routes — see
  IMAGE-WISHLIST.md; swap in when sourced.)*
- **v1.3 (as-built):** the home slideshow ships **three** curated slides (client-fixed set),
  in order — `hero/hands-soil-seedling.jpg`, `hero/container-handling.jpg`,
  `hero/leather-banner.png` — with three matching `.hero-dots`. The first slide is eager
  (`fetchpriority="high"`), the rest lazy. Auto-advance is **6s** with a 1.2s crossfade and
  16s Ken-Burns on the active slide; it pauses on hover/focus and when the tab is hidden, and
  the dots drive/sync `aria-selected`. **Sector/inner pages do NOT run a slideshow** — they use
  a single static `.page-hero` background image (§6.3/§6.4). The farm-to-port composite
  (`home-trade-hero.jpeg`) is now the **parallax background** of the values block (§13.2),
  not a hero slide. See §15.1.

### 13.2 Section parallax backgrounds
- The **"Why NexoGreen EXIM"** section uses the CSS-only fixed-background treatment specified
  in **§13.8.2** (`background-attachment: fixed` + frosted-glass cards) — superseding any
  scroll-listener approach for that section.
- Reuse the same depth pattern (opt-in) for the **CTA band** and **sustainability** sections
  with the `--gradient-aurora` glow drifting slowly.
- **v1.3 (as-built) — RE-INSTATED for the values block:** the home **"Why partner with us"**
  values section (`.section--parallax`) now DOES use the fixed-background parallax
  (`background-attachment: fixed`, `home-trade-hero.jpeg` under a `rgba(11,25,44,.72)` navy
  overlay), with the **opaque white value cards acting as moving windows** over the pinned
  image. This intentionally reverses the v1.2 decision in §13.8.2 / §14.4 that moved the block
  to a flat off-white band. Cards stay **solid white** (not frosted/translucent), so §14.7
  contrast still holds; the section heading switches to light type over the photo. Fixed
  attachment falls back to `scroll` at `max-width: 768px` and under `prefers-reduced-motion`.
  See §15.7.

### 13.3 Gradient text highlights
- **Highlighted words inside headings** are filled with a brand gradient via
  `background: var(--gradient-fresh); -webkit-background-clip: text; color: transparent;`
  (e.g. hero "**to the World.**", section eyebrows, key stats).
- Variants: `--gradient-fresh` (green) for action/nature words, `--gradient-trust` (blue→green)
  for "global/trust/unity" words. **Always** ship a solid-color fallback (`@supports not`).
- **Animated underline/sweep:** primary links and the active nav item get a gradient underline
  that **wipes in** (scaleX from 0) on hover/focus. Eyebrow labels use a short
  `--gradient-trust` rule that draws in on reveal.

### 13.4 Creative section rhythm & margins
Break the predictable full-width stack so the page reads as **designed**, not templated:
- **Overlapping panels:** the trust/stats panel **overlaps** the hero with a negative top
  margin and shadow (already in use) — apply the same edge-overlap idea to 1–2 other section
  seams.
- **Asymmetric / offset layouts:** alternate split sections left/right; let imagery **bleed**
  to one viewport edge while text stays within the container grid (full-bleed media + contained
  copy).
- **Angled / curved section dividers:** separate select bands with a subtle SVG **diagonal or
  wave divider** (or a soft gradient fade) instead of a hard horizontal line — used sparingly
  (1–2 seams) to avoid gimmick.
- **Floating accents:** soft, blurred **gradient blobs** (low opacity, `--gradient-aurora`)
  drift behind dark sections; **floating badges/cards** overlap media edges (e.g.
  sustainability "from farm to world" badge).
- **Generous, varied vertical rhythm:** section padding `clamp(56px → 104px)`; let hero and CTA
  breathe more than dense content sections. Intentional whitespace > filling space.

### 13.5 Scroll choreography (reveals)
- **IntersectionObserver-driven reveals:** sections/cards fade + rise (`translateY(28px) → 0`)
  as they enter; grids **stagger** children via `data-delay` steps.
- **Counters** animate (easeOutCubic) when the trust strip enters the viewport; run once.
- Optional **scroll-progress bar** (thin gradient line) at the very top of the viewport.
- Reveal **once** (unobserve after firing) — no replay flicker on scroll-up.

### 13.6 Micro-interactions
- **Buttons:** lift (`translateY(-2px)`) + deepen shadow on hover; gradient shift on press;
  arrow icons **slide** on hover. Clear `:focus-visible` ring (green) for keyboard users.
- **Cards:** lift + image **zoom** (`scale(1.07)`); sector cards reveal their description on
  hover/focus; subtle border/shadow transitions.
- **Nav:** sticky header **condenses** + gains shadow on scroll (in place); dropdown fades/rises
  in; mobile drawer slides with a dimmed backdrop; animated hamburger ↔ close morph.
- **Optional pointer-reactive depth:** on capable pointers, hero decorative layer / reach
  visual can tilt a few degrees toward the cursor (very subtle, disabled on touch/reduced-motion).
- **Floating WhatsApp:** gentle hover scale; optional one-time attention pulse.

### 13.7 Performance & accessibility guardrails
- Animate **only** `transform` and `opacity`; use `will-change` sparingly on active elements.
- Throttle scroll work via `requestAnimationFrame`; pause off-screen/hidden-tab animations.
- Respect `prefers-reduced-motion` **everywhere** (single guard checked in JS + CSS media query).
- Keep all functionality (slideshow nav, dropdowns, forms) **keyboard-operable** and
  screen-reader labelled; motion is enhancement, never a dependency.
- Lazy-load below-the-fold media; the **first hero slide** is eager/`fetchpriority="high"`,
  the rest preload just-in-time.

### 13.8 Home page motion system
Two signature, GPU-friendly effects anchor the home page. Both animate **only** `transform`,
use `will-change: transform` on the moving element, and degrade fully under
`prefers-reduced-motion: reduce`.

#### 13.8.1 Infinite product marquee (below hero) — **SUPERSEDED by §6.1 / §14.2**
> **v1.2 layout audit:** the infinite horizontal product-scroll row (visible in
> `Screenshot from 2026-06-13 11-09-19.jpg` / `…11-09-32.jpg`) is **deprecated** in favor of the
> filterable **4-column categorical matrix grid** (§6.1 product portfolio, §14.2 card anatomy).
> The marquee spec below is retained for historical reference only and is **not** to be built.

- Below the hero, render **two horizontal rows** of rounded product-image cards that scroll
  continuously and infinitely — **pure CSS, no JS**.
- **Card:** rounded product photo with a **category pill** (Agriculture / Leather / Timber)
  top-left and the **product name** bottom-left over a **dark bottom gradient** for legibility.
- **Each card links to its sector page** — the whole card is a clickable anchor that routes to
  the corresponding sector (Agriculture → `agriculture.html`, Leather → `leather.html`,
  Timber → `timber.html`), driven by the card's category. Give the anchor a descriptive
  `aria-label` (e.g. "View Agriculture products"), a clear `:focus-visible` ring, and
  `cursor: pointer`; the hover lift/zoom doubles as affordance. (Confirm final sector-page
  filenames against the Products ▾ submenu routes.)
- **Seamless loop:** place **two identical card groups** inside each track and animate
  `transform: translateX(0 → -50%)` `linear infinite` — the second group wraps in gaplessly as
  the first scrolls out.
- **Direction & timing:** **top row scrolls left**, **bottom row scrolls right** (reversed),
  at slightly different durations (**~46s** top vs **~54s** bottom) so they never visually sync.
- **Edge fade:** both row edges fade via a horizontal `mask-image` gradient.
- **Pause on hover.** **Disable the animation entirely** under `prefers-reduced-motion` (static
  row, no transform loop).
- **Perf/a11y:** `loading="lazy"` on all images; the **cloned group**'s images are
  `aria-hidden` (decorative duplicate, not announced).

#### 13.8.2 Fixed background parallax ("Why NexoGreen EXIM") — **SUPERSEDED by §6.1 / §14.4 (v1.2), then PARTLY RE-INSTATED in v1.3**
> **v1.2 layout audit:** the **six-value "Why" block** (`Screenshot from 2026-06-13 11-10-06.jpg`)
> moves OFF the translucent-cards-over-photo treatment and onto a **solid off-white `#F8F9FA`
> background block** with solid white cards (§6.1, §14.4) for maximum scannability. The
> fixed-background/frosted-glass treatment below may still be used for other ambient bands (CTA,
> sustainability) but is **not** applied to the value-proposition block.
>
> **v1.3 (as-built):** the fixed-background parallax IS now applied to the "Why partner with us"
> values block (§13.2), **but in a modified form** — the cards remain **solid opaque white**
> (NOT the `backdrop-filter` frosted-glass cards specced below), so the v1.2 scannability and
> §14.7 contrast intent is preserved while regaining the depth effect. The image is
> `home-trade-hero.jpeg` under a navy overlay; mobile/reduced-motion fall back to `scroll`. The
> frosted-glass card variant below remains **not built**.

- Give the section a **full-bleed background photo** under a **dark navy gradient overlay**,
  with **`background-attachment: fixed`** so the image stays **pinned to the viewport** while
  the section scrolls over it — **CSS-only depth, no scroll-listener JS**.
- **Float four frosted-glass cards** above it: `backdrop-filter: blur(...)` over translucent
  white.
- **Fallback:** switch to `background-attachment: scroll` at **`max-width: 760px`** and under
  `prefers-reduced-motion` (fixed backgrounds break on touch devices); show the static cover.

---

## 14. Production Design System & Conversion Engineering (v1.2 Layout Audit)

This section consolidates the **layout-audit findings** (9 annotated screenshots dated
2026-06-13) into build-ready component, spacing, interaction, accessibility, and conversion
specifications. It is the authoritative production reference for an export platform aimed at
**international enterprise buyers and procurement officers**, and every requirement
cross-references the business values, regulatory licenses, and HS-coded product data in
`Nexogreen EXIM project.md`. Where it conflicts with earlier brochure-era specs, **§14 wins**.

### 14.0 Audit screenshot index
| Screenshot | Captured issue | Resolved in |
|------------|----------------|-------------|
| `…10-47-47.jpg` | Duplicate "Contact" link; rural-field hero; overloaded nav | §5.1, §6.1 |
| `…11-18-42.jpg` | Reference for the farm-to-port split-screen hero asset | §6.1 |
| `…11-09-19.jpg` | Unanchored license pills; start of flat product-scroll row | §14.1, §14.2 |
| `…11-09-32.jpg` | Continuation of flat infinite product-scroll row | §14.2 |
| `…11-09-53.jpg` | Three-pillar sector cards (kept, restyled) | §6.1 |
| `…11-10-06.jpg` | Six values as semi-transparent cards over a photo | §14.4 |
| `…11-10-25.jpg` | Static wireframe global-route graphic | §14.6 |
| `…11-10-36.jpg` | Sustainability split section | §6.1 |
| `…11-10-55.jpg` | Static lower-funnel text links above footer | §14.8 |

### 14.1 Corporate Trust & Compliance Strip
Transform the **unanchored pill-shaped license tags** from `Screenshot from 2026-06-13 11-09-19.jpg`
into a dedicated, **solid light-gray compliance bar**:
- Feature **official monochrome vector logos** for each licensing authority named in
  `Nexogreen EXIM project.md` → **ISO 9001, ISO 22000, IEC, FSSAI, Agmark** (Organic Certification).
- Each logo carries a **CSS hover-state tooltip** revealing its active corporate
  registration/license number. *(Open item: collect the real registration numbers from the
  client; ship clearly-marked placeholders until supplied — see §11.)*
- Logos render monochrome at rest; the strip sits on the off-white/light-gray surface, anchored
  edge-to-edge rather than floating as loose pills.

### 14.2 Product Card Anatomy (4-column matrix)
Each card in the filterable 4-column matrix grid (§6.1) contains, top to bottom:
- A **high-resolution asset frame** with a **4px border-radius**.
- A **bold product category heading** (`H3 — 20px / 500 / 1.4`, §2.5.2).
- An explicit **dark-text HS-Code badge** displaying the item's official trade HS code, sourced
  from `Nexogreen EXIM project.md` — e.g. **`HS Code: 4407 21`** for Teak Timber,
  `4407 10` Mahogany, `4107 91` Wet Blue Leather, `1006 30` Rice, `0801 32` Cashew, `2602 00`
  Manganese Ore.
- A **right-aligned functional link** styled as **"Request Freight Quote →"** (routes to the RFQ
  flow, §6.9, prefilling the product/category).
- **Segmented toggle** above the grid filters by the three pillars: **[Agriculture Commodities] ·
  [Timber & Forestry Produce] · [Premium Treated Leather]** (the leather pillar maps to the doc's
  Wet Blue / treated-leather range).
- **Hover state:** subtle **−4px vertical translate** + **emerald `#1A9248` border** transition
  (§14.6).
- **v1.3 (as-built) — icon-led card (divergence from the "asset frame" above):** the shipped
  `.p-card` is **image-free / editorial** — instead of a high-resolution photo frame it leads
  with a **per-pillar line-icon** (`.p-ico`) in a mint circle, keeping the rest of the anatomy
  (`.p-cat` category label, `.hs-badge` "HS Code: ####", product `<h3>`, `.p-desc`, and the
  right-aligned `.freight-link` "Request Freight Quote →" → `request-a-quote.html?product=`).
  This was a deliberate call to avoid an unreliable "image wall" while the real product
  photography is still being sourced (§8, §11.6). Swapping to the photo-framed variant is a
  later, data-only change. See §15.3.
- **v1.3 (as-built) — clickable category label:** the green uppercase `.p-cat` label is an
  **anchor** linking to its sector listing page (`agriculture.html` / `timber.html` /
  `leather.html`, mapped by category key in `products.js`). The whole label is the click target
  (not just part of the text), keeps its existing emerald uppercase styling, and gains a
  **hover** (darkens to `--primary` + underline) and a **keyboard `:focus-visible`** outline.
  See §15.12.
- **v1.3 (as-built) — "Show More" progressive disclosure:** the full product listings render
  **12 cards initially, then +8 per "Show More" click** (`PAGE_INITIAL = 12`, `PAGE_STEP = 8`
  in `products.js`), the button removing itself when the list is exhausted. The button reuses
  the site's `.btn.btn--ghost` style (`.load-more-btn`, centered in `.load-more-wrap`).
  Newly-appended cards get the `.in` reveal class added directly (the IntersectionObserver only
  watches cards present at load). Applies to **products.html** ("All Products" = 46, Agriculture
  filter = 36) and **agriculture.html** (36); Timber (6) and Leather (4) fall under 12 so no
  button shows. The home matrix's `data-limit="8"` preview **bypasses** pagination. See §15.4.
- **v1.3 (as-built) — merchandised order:** the `PRODUCTS` array is ordered as a curated
  "frequently bought first" sequence with the three pillars **interleaved**, so the products-page
  "All Products" view reads like a storefront rather than a category dump. Every product keeps
  its `cat`, and all filters / sector pages render strictly **by `cat`**, so categories never
  bleed across sections — only the within-category order is this popularity rank. See §15.5.

### 14.3 Spacing System (8px base)
- **Base unit:** an **8px** spacing system underpins all layout math (margins, padding, gaps).
- **Macro section rhythm:** separate major section blocks with **96px** vertical padding for
  clean breathing room.
- **Component grid tracking:** **24px** gap on all card matrices — equal on row and column tracks.
- **Internal card padding:** an exact **24px** internal padding boundary inside all component
  cards, inquiry fields, and form trays.
- **Interactive target sizing:** all tap targets, pagination dots, and slider triggers maintain a
  **minimum 48px** touch-target size.

### 14.4 Value Proposition Block & Cards
Rebuild the six value cells from `Screenshot from 2026-06-13 11-10-06.jpg` (consistent quality,
transparent documentation, reliable delivery, end-to-end supply control, ethical sourcing,
responsive partnership — per the "Why Choose Us" / "Our Clients value us" content in the project
doc):
- Lift the six values **off the background photo** onto a **clean, solid, off-white `#F8F9FA`
  background block** — eliminates background noise, maximizes scannability.
- Each value is a **solid white container block** with a **4px border-radius** and a light
  drop-shadow: `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05)`.
- Position a **solid-fill vector icon** inside a **15%-tinted mint `#EAF8EE` circle** in the
  **top-left** corner of each card.

**v1.3 (as-built) — background changed back to fixed-image parallax:** the values block no
longer sits on a flat off-white band — it now renders over the **fixed-background parallax**
photo of §13.2 (`.section--parallax`, `home-trade-hero.jpeg` under a navy overlay). The **cards
themselves are unchanged** (solid white, 4px radius, `0 4px 6px -1px rgba(0,0,0,.05)` shadow,
mint icon circle) and act as opaque windows scrolling over the pinned image; only the section
**heading** switches to light type for contrast on the photo. The grid ships **6 cards in a
3-column layout** (the six corporate values). This reverses the v1.2 off-white decision; see
§13.2, §13.8.2 and §15.7.

### 14.5 Operational Metrics Strip
Four high-contrast columns on a **solid** background (not over imagery):
**[4 Continents Served] · [3 Primary Core Sectors] · [50+ Standard Product Lines] ·
[100% Inspected Quality Control]** — values traceable to the project doc (Asia/Africa/Middle
East/Europe; the three pillars; 50+ HS-coded product lines; strict quality control at every
stage). Animated counters per §13.5.

### 14.6 Interaction Patterns
- **Unified Search Dock (in hero):** an inline form row inside the hero box presenting →
  a **"Select Material Category"** dropdown, a **"Target Destination Port"** text field, and a
  primary **emerald** trigger labeled **"Check Route Availability"**.
  - **v1.3 (as-built):** the dock is a 3-track grid **`1fr 1.5fr auto`** (`max-width: 860px`,
    `align-items: end`) so the dropdown, the wider port field, and the button bottom-align on
    one row even when a label wraps. Fields/inputs carry **`min-width: 0` + `width: 100%`** to
    stop grid items overflowing the white panel (was pushing the button past the edge); it
    collapses to a single column at `max-width: 860px`. On submit, the dock redirects to
    `request-a-quote.html?product=<category>&destination=<port>`, prefilling the RFQ (§7.2).
    See §15.8.
- **Active status-state mapping:** all text links, product cards, and buttons carry explicit
  active/hover states. **Product-card hover** = subtle **−4px vertical translate** + **emerald
  `#1A9248` border** transition (GPU-friendly `transform`/`border-color` only, §13.7).
- **Segmented category toggle — sliding active pill (v1.3):** the matrix filter (§6.1) renders the
  active emerald state as a single **`.seg-thumb`** that **glides** between tabs via
  `transform`/`width`/`height` transitions (`.3s var(--ease)`, GPU-friendly, §13.7) instead of
  toggling each button's own `background`. JS measures the pressed button (`offsetLeft/Top`,
  `offsetWidth/Height`) and sets CSS custom props; it **snaps without animating** on first paint
  and on resize/reflow (the toggle may wrap on narrow viewports), animating only on click. Honors
  `prefers-reduced-motion: reduce` (transition disabled). See §15.11.
- **Dynamic Global Route Map:** upgrade the static wireframe of
  `Screenshot from 2026-06-13 11-10-25.jpg` into an **interactive map**. Regional center-point
  toggles — **Asia · Africa · Middle East · Europe** — dynamically **illuminate active shipping
  lanes** originating from Indian cargo terminals to the selected destination region. Each map
  node carries a descriptive `aria-label` (§14.7).

### 14.7 Accessibility — WCAG 2.1 AA Compliance
- **Contrast ratio enforcement:** every text component meets or exceeds **4.5:1** against its
  background. **Eliminate** white type on transparent elements, light-gray text on light-gray
  containers, and light-green type over complex imagery. (This is *why* the hero gains the 45%
  black overlay (§6.1) and the value block moves to solid off-white (§14.4).)
- **Interactive focus rings:** apply a highly visible keyboard focus indicator to all interactive
  controls — `outline: 2px solid #1A9248; outline-offset: 2px;`.
- **ARIA label specifications:** every graphic component, multi-continent map route node, and
  vector icon container includes an explicit, descriptive `aria-label` for full screen-reader
  compatibility.

### 14.8 Corporate Documentation & Conversion Engineering
- **Multi-Step Enterprise RFQ Panel:** replace the static lower-funnel text links of
  `Screenshot from 2026-06-13 11-10-55.jpg` with an active **deep-navy `#0B192C` conversion
  card**. Centered title: **"Ready to Source with a Partner You Can Trust?"** Three clean inline
  capture fields — **`[Corporate Email Input]` · `[Material Category Selector]` ·
  `[Target Volume Metric (MT)]`** — anchored by a high-visibility **emerald** button styled as
  **"Generate RFQ Now"** (routes to / prefills the RFQ flow, §6.9 / §7.2).
- **Legal Data Footer Alignment:** position the official corporate licensing data in the
  **first information column of the footer, directly beneath the corporate logo** (§5.2),
  formatted exactly to establish absolute legal transparency for auditing customs agents:
  - `CIN: U46530TN2025PTC184973`
  - `PAN: AAJCE1907E`
  - `TAN: MRIEO1276`

---

## 15. v1.3 Iteration Change Log (as-built reconciliation)

Records the frontend **as actually implemented**, from a full codebase-vs-spec audit
(2026-06-13). Each entry lists the change, the files touched, and how it relates to the earlier
spec. Where an entry conflicts with §1–§14, **this section + the in-place `**v1.3:**` notes win.**

### 15.0 Audit verdict — spec adherence
The build closely follows the v1.2 production system. Verified in-code and **matching** spec:
- **Palette** (`:root`): `--primary #0B192C`, `--accent #1A9248`, `--mint #EAF8EE`,
  `--bg-alt #F8F9FA`, `--text #333333` — all exact (§2.5.1).
- **Typography**: Inter; h1 `clamp(2rem,4.5vw,48px)`/700/1.2, h2 `clamp(1.6rem,3.4vw,32px)`/600/1.3,
  h3 20/500/1.4, body 16/400/1.6 (§2.5.2).
- **Spacing**: 8px scale, `--section-pad 96px`, `--grid-gap 24px`, `--card-pad 24px`, `--tap 48px`
  (§14.3). **Radius** 4px component, **card shadow** `0 4px 6px -1px rgba(0,0,0,.05)` (§14.4).
- **Header** (JS-injected `injectChrome`): four links **Products ▾ · Logistics Network ·
  Sustainability · About Us** + single emerald **Inquire Now** CTA; sticky condense + scroll
  progress bar (§5.1). **Footer** first column carries the **CIN/PAN/TAN** lines (§5.2/§14.8).
- **Compliance strip** (ISO 9001 / ISO 22000 / IEC / FSSAI / Agmark, tooltips) on home +
  certifications (§14.1). **Metrics strip** counters `data-count` 4 / 3 / 50 / 100 (§14.5).
- **Interactive route map** on global-markets (`data-routemap`, region toggles) (§14.6/§6.6).
- **Forms**: contact (`name*, company, email*, phone, country, message*`, honeypot) and RFQ
  (`name*, company*, email*, phone, destination*, product, volume, unit, price, packaging,
  message`, honeypot) with required/email validation; **RFQ prefill via `?product` / `?destination`
  / `?volume`**; placeholder endpoint `YOUR_FORMSPREE_ENDPOINT` (§7).
- **Reduced-motion** honored in both the CSS media query and the JS `REDUCED` guard (§13.7).
- All 12 pages from §4.1 exist, including `legal.html`.

### 15.1 Home hero slideshow — built & retuned (§13.1)
- `index.html` hero is `<section class="hero" data-slideshow>` with **3** `.hero-slide` divs +
  **3** `.hero-dots`. Client-fixed slide set, in order: `hero/hands-soil-seedling.jpg`,
  `hero/container-handling.jpg`, `hero/leather-banner.png`.
- `initHero()` (`js/main.js`): 6000ms auto-advance, 1.2s crossfade, 16s Ken-Burns on the active
  slide; pauses on hover/focus and tab-hidden; dots drive + sync `aria-selected`.
- **Divergence from §13.1's placeholder list:** 3 slides (not 4) and a different image set; the
  farm-to-port composite moved to the parallax background (§15.7).

### 15.2 Inner-page hero banners + `page-hero` stacking fix (§6.3/§6.4)
- Static `.page-hero` background images set: **Products** → `hero/About-Handshake.png`,
  **About** → `hero/About-Handshake.png`, **Agriculture** → `hero/hands-soil-seedling.jpg`,
  **Timber** → `sustainability/sustainable-forestry.jpg`, **Leather** → `hero/leather-banner.png`,
  **Sustainability** → `hero/agriculture-landscape.jpg`. (Global-markets, certifications, contact,
  request-a-quote, legal intentionally use the imageless `.page-hero--plain` gradient.)
- **Bug fixed (`css/styles.css`):** added **`isolation: isolate`** to `.page-hero`. The hero
  `<img>` (`z-index:-2`) and the navy gradient `::after` (`z-index:-1`) were being painted
  *behind* the section's own opaque navy background because `.page-hero` formed no stacking
  context — so no banner image showed on any inner page. `isolation: isolate` creates the
  context and the images now render under the overlay.

### 15.3 Product card — icon-led / image-free (divergence from §14.2)
- The shipped `.p-card` (`js/products.js → cardHTML`) is **editorial/icon-led**: a per-pillar
  line-icon `.p-ico` in a mint circle replaces the §14.2 "high-resolution asset frame". The rest
  of the anatomy is intact: `.p-cat`, `.hs-badge` ("HS Code: ####"), `<h3>`, `.p-desc`,
  right-aligned `.freight-link` → `request-a-quote.html?product=`.
- **Rationale:** avoids an unreliable "image wall" while real product photography is still being
  sourced (§8/§11.6). Reverting to the photo-framed card is a later data/markup change.

### 15.4 "Show More" progressive disclosure (§14.2)
- `js/products.js`: shared `paginate(grid, items, host)`; `PAGE_INITIAL = 12`, `PAGE_STEP = 8`.
  Button = `.btn.btn--ghost.load-more-btn` ("Show More") inside centered `.load-more-wrap`;
  removes itself when exhausted; appended cards get `.in` added directly (the IO reveal observer
  only watches load-time cards).
- Wired into `renderSector` (inner pages) and `renderMatrix`'s `paint()` (products page); the
  home matrix's `data-limit="8"` preview **bypasses** it. `css/styles.css` adds `.load-more-wrap`
  / `.load-more-btn`.
- **Where it shows:** products "All Products" (46) and Agriculture filter/page (36); not Timber
  (6) or Leather (4).

### 15.5 Merchandised product order (§14.2)
- `PRODUCTS` reordered into a curated **"frequently bought first"** sequence with pillars
  **interleaved** (opens Rice → Cow Wet Blue → Teak → Wheat → Corn → Wood Charcoal → …). Within
  each pillar the order is popularity-ranked. **No cross-section bleed:** every card keeps its
  `cat` and all filters/sector pages render strictly by `cat`. Order is a best-guess merchandising
  rank (no real sales data) — open to client-supplied top-sellers.

### 15.6 Home "Three pillars" block restyle (§6.1)
- `.section--alt.section--pillars` gains a **mint→emerald gradient wash**
  (`linear-gradient(180deg, rgba(234,248,238,0) 0%, rgba(26,146,72,.15) 95%)`). *(Initial draft
  used a stronger `1 → .3` alpha; softened to `0 → .15` in-file.)*
- Leather pillar card image → `assets/leather/premium-hides.jpg` (replacing a missing file).
- `.cat-index` ("## / Sector") restyled **white, bold 700, green text-shadow**
  `0 1px 4px rgba(26,146,72,.9)` for contrast over the card photos.

### 15.7 Values block → fixed-background parallax (reverses §13.8.2 / §14.4)
- Home **"Why partner with us"** section tagged `.section--parallax`; `css/styles.css` pins
  `hero/home-trade-hero.jpeg` via `background-attachment: fixed` under a `rgba(11,25,44,.72)`
  navy overlay. The **opaque white value cards scroll over the pinned image as windows**; the
  section heading switches to light type. Falls back to `background-attachment: scroll` at
  `max-width: 768px` and under `prefers-reduced-motion`.
- **Reconciliation:** intentionally re-instates the depth effect that v1.2 had removed (§13.8.2),
  but keeps cards **solid white** (not frosted), so §14.7 contrast and §14.4 scannability hold.
  The 6 value cards / 3-column grid are unchanged.

### 15.8 Search-dock layout hardening (§14.6)
- `.search-dock`: grid `1fr 1.5fr auto`, `max-width: 860px`, `align-items: end` (one-row
  bottom-aligned controls even with a wrapping label). Fields/inputs use `min-width: 0` +
  `width: 100%` to stop grid overflow that pushed the button past the white panel. Collapses to
  one column at `max-width: 860px`.

### 15.9 Verified catalog facts
- **46 products total** — **36 agriculture, 6 timber, 4 leather** (`js/products.js`). Every
  product has an `hs` field. Leather is wet blue (cow/buffalo/goat/sheep); manganese ore sits
  under Timber; salt under Agriculture; **spices excluded** (§6.4/§10/§11.5).

### 15.10 Carried-forward open items (unchanged from §11)
Real compliance license numbers (§14.1), final email/domain, masked PAN/TAN digits, Formspree vs
Web3Forms choice, real product photography (which would also enable the §14.2 photo-framed card),
and the sourced farm-to-port hero asset all **remain open**.

### 15.11 Segmented toggle — sliding active pill (§6.1 / §14.6)
- The product-matrix category toggle now animates the active emerald state. A single
  `.seg-thumb` span (absolutely positioned inside the now `position: relative` `.matrix-toggle`)
  carries the emerald fill and **slides** to the selected tab; the `.seg` buttons keep a
  transparent background and only switch text color (`#fff` when `aria-pressed="true"`). The thumb
  geometry is driven by CSS custom props (`--thumb-x/-y/-w/-h`) set from the pressed button's
  `offsetLeft/Top/Width/Height`, transitioning `transform`/`width`/`height` at `.3s var(--ease)`.
- `moveThumb(btn, instant)` in `js/products.js`: **`instant`** snaps the pill without animating —
  used for the initial "All Products" placement and on `window.resize` (the toggle can wrap to
  multiple rows on narrow viewports, so geometry is re-measured); a **click** leaves `instant`
  false so the pill glides. Same `renderMatrix` powers both the home preview (`data-limit="8"`)
  and the full products-page matrix, so both pages get the behavior. `prefers-reduced-motion:
  reduce` disables the thumb transition. Files touched: `js/products.js`, `css/styles.css`.

### 15.12 Clickable product-card category label (§14.2)
- The product-card category label (`.p-cat`) is now an **anchor** to its sector listing page
  instead of a plain `<span>`. A `PAGE` map in `js/products.js` resolves the category key →
  `agriculture.html` / `timber.html` / `leather.html` (falls back to `products.html`), matching
  the existing `LABEL` map and the sector pages' `data-products` keys.
- **Whole label is the target:** `.p-cat` is `display: inline-block; align-self: flex-start` so
  the anchor is sized to the text (the card is a flex column) and the entire label — not a
  sub-portion — is clickable. Existing **emerald uppercase** styling is unchanged; added
  `text-decoration: none`, a **hover** state (color → `--primary` + underline, `3px` offset) and
  a keyboard **`:focus-visible`** outline (`2px` accent, `3px` offset). Applies everywhere the
  matrix/sector grids render the card (home preview, `products.html`, and the sector pages).
  Files touched: `js/products.js`, `css/styles.css`.

### 15.13 Office location map on Contact (§6.8)
- **What:** `contact.html` gains an **"Find us → Visit our office"** section (`.section--alt`)
  placed at the **end of `<main>`**, so it renders **below the "Get in touch" section and above
  the JS-injected footer** (the footer is appended to `<body>` by `injectChrome` in `js/main.js`,
  not present in the HTML, so the map lives inside `<main>`).
- **How it's built:** a **keyless Google Maps embed iframe** (no API key, no Google Cloud
  billing) inside `.map-frame`, plus an emerald **`.btn.btn--primary.map-directions`
  "Get directions"** button. The iframe is `loading="lazy"` with a descriptive `title`. Styling
  added in `css/styles.css` (`.map-head`, `.map-frame` — `--radius-lg`, `--shadow-pop`, 420px
  tall / 320px under 700px, `.map-directions`).
- **Current pin (placeholder):** lat **8.7494008**, lng **77.5333019** (Kuthuriyar Street,
  Singamparai), resolved from the client share link `https://maps.app.goo.gl/K8CTfvKnL9BCANo87`.
  Iframe `src` = `https://maps.google.com/maps?q=8.7494008,77.5333019&z=16&output=embed`;
  button `href` = `https://www.google.com/maps/dir/?api=1&destination=8.7494008,77.5333019`.

#### Updating the office map
Two ways, depending on how precise you need to be:

1. **Quick (coordinates) — recommended.** Open Google Maps, right-click the exact office spot →
   click the "lat, lng" numbers at the top to copy them. In `contact.html`, replace **both**
   occurrences of `8.7494008,77.5333019` — one in the iframe `src` (`?q=…`) and one in the
   "Get directions" `href` (`destination=…`). Adjust the `&z=16` zoom level if desired (higher =
   closer). Done — no API key needed.
2. **Exact (official embed code).** In Google Maps, find the place → **Share → Embed a map →
   Copy HTML**. Paste **only that iframe's `src`** value into the `contact.html` iframe `src`
   (keep our existing `width`/`height`/`style`/`loading`/`title` attributes). Update the
   "Get directions" `href` destination to match (coordinates or `destination=<place+name>`).

   *Note:* the client-supplied short link (`maps.app.goo.gl/…`) is a **share** link, not an
   embed link — it can't be used directly as an iframe `src`; resolve it to coordinates (method 1)
   or generate a proper embed via Share → Embed a map (method 2).

### 15.14 Product detail pages (PDP) — new page type, Rice as the first (§6.3/§6.4/§14.2)
- **What:** introduces a **product detail page** type — a deeper, single-product page beyond the
  listing grids. First instance: **`rice.html`** (Rice, HS 1006 30). The site previously had **no**
  PDP pattern; products lived only in the icon-led listing cards (§15.3) that linked straight to
  the RFQ.
- **Page anatomy (reusable):** built from existing design-system components — `.page-hero--plain`
  banner with breadcrumb (Home / Products / Agriculture / Rice) → **(1) Overview** (`.two-col`:
  description + `.pdp-facts` chips + `.pdp-actions` CTAs on the left, the real product photo in a
  `.media-frame.pdp-media` on the right) → **(2) Product range / varieties** (`.section--alt`,
  `.info-grid` of `.range-card`s) → **(3) Specifications** (`.spec-table`) → **(4) `.cta-band`**.
  Section division was loosely modelled on a generic grain-product page layout; **all copy is
  original / client-supplied** (no third-party content reused).
- **Image:** uses the real photo `assets/products/cereals/Rice – 1006 30.jpg` (URL-encoded in
  `src`). This is the **only** place the real rice photo is used — the listing cards stay
  icon-led/image-free per §15.3.
- **Placeholder spec rows:** the spec table mixes confirmed facts (HS code, forms, broken grades,
  varieties, Sortex cleaning) with **clearly-marked `PLACEHOLDER`** rows (moisture, crop year,
  packaging, MOQ, loading port, payment terms, lead time) styled via `.ph` / `.ph-note`. **These
  must be filled in / confirmed before go-live** (joins the §15.10 open items).
- **Card wiring (title links to the PDP, RFQ kept):** product objects in `js/products.js` gain an
  optional **`detail`** field; Rice has `detail: "rice.html"`. When `detail` is set, `cardHTML`
  renders the **product name (`<h3>`) itself as the link** to the detail page; the unchanged
  **"Request Freight Quote →"** link remains in the footer. So the Rice card on **Home, Products
  and Agriculture** links to the PDP via its title while every other card is visually unchanged.
  *(v1.4 refinement: replaced the earlier separate "View details" footer link — which read as
  cluttered/redundant — with the clickable title; the `.detail-link` style was removed.)*
- **CSS added (`css/styles.css`):** `.pdp-lead`, `.pdp-media`, `.pdp-facts`/`.pdp-fact`,
  `.pdp-actions`, `.range-card .range-tag`, `.spec-table`, `.ph`/`.ph-note`, `.detail-link`.

#### Adding another product detail page
1. **Copy `rice.html`** → e.g. `wheat.html`; update `<title>`/meta/canonical, the breadcrumb,
   and the overview / range / spec content and product image (`src` URL-encoded if the filename
   has spaces or special characters).
2. In `js/products.js`, add **`detail: "wheat.html"`** to that product's object. The "View
   details" link appears automatically wherever that card renders — no other change needed.
3. Replace any `PLACEHOLDER` spec rows with confirmed values (or delete the rows).

### 15.15 Branded 404 error page (§4 hosting / §9 / §13)
- **What:** `404.html` — an on-brand, deliberately lively "page not found" screen. Static hosts
  (Netlify / Vercel / Cloudflare Pages, §4) serve it automatically for unknown URLs; no config
  needed beyond the file existing at site root.
- **Design (uses the existing system):** a full-viewport navy section (`.err`, same
  radial-emerald + navy gradient as `.page-hero--plain`) with the shared JS-injected header/footer
  and WhatsApp float. Content: an eyebrow, a large **gradient-clipped "404"** (`.err-code`, with a
  solid `--accent-soft` `@supports` fallback), a trade-themed headline/blurb ("This shipment took
  a wrong turn"), primary **Back to Home** + on-dark **Browse Products** CTAs, and a row of
  **quick destination chips** (`.err-links`) to the sector pages, Logistics, RFQ and Contact.
- **Motion (all auto-disabled by the §13.7 reduced-motion kill-switch):** two drifting aurora
  blobs (`.err-blob`, `@keyframes errDrift`), a gently floating code (`@keyframes errFloat`), and
  an **animated dashed shipping lane** (`.err-route`, reusing `@keyframes dash`) with a **paper
  plane gliding along the curve** via CSS `offset-path` (`@keyframes errSail`, `offset-rotate:
  auto`). The lane `<path d>` and the plane's `offset-path` use identical coordinates so they stay
  in sync; on browsers without `offset-path` the plane simply rests at the start (harmless).
- **Robust at any URL depth:** the page sets **`<base href="/">`** so the relative asset links and
  the JS-injected chrome (logo, nav, footer) resolve from the site root even when the 404 is served
  for a deep unknown path. Also carries `<meta name="robots" content="noindex">`.
- **CSS added (`css/styles.css` §24):** `.errpage` (section), `.err-inner`, `.err-code`,
  `.err-actions`, `.err-links`, `.err-blob`, `.err-route` (+ `.lane`/`.port`/`.ship`), and the
  `errFloat` / `errDrift` / `errSail` keyframes. *(The section class is **`.errpage`**, not `.err`
  — see §15.21: `.err` is the form-validation message class and the original `.err` name collided.)*

### 15.16 Social-share meta normalization (§9 SEO, all pages — head only)
- **What:** standardized the Open Graph / Twitter Card tags across **all 14 `.html` pages** so
  link previews render correctly on social platforms and messaging apps. Body markup untouched.
- **Per page now carries the full set:** `og:type`, `og:url`, `og:title`, `og:description`,
  `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- **Changes applied:**
  1. `og:image` switched from the relative `assets/social/og-image.jpg` to the **absolute**
     `https://nexogreenexim.com/assets/social/og-image.jpg` (relative OG images don't resolve on
     most scrapers).
  2. Added **`og:url`** = each page's absolute canonical (the bare domain for the home page;
     `/404.html` for the error page, which has no `<link rel="canonical">`).
  3. Added **`twitter:title` / `twitter:description` / `twitter:image`**, mirroring the `og:`
     values (all pages previously had only `twitter:card`).
- **404.html:** previously had **no** social tags at all — received the complete `og:*` + `twitter:*`
  block (keeps its `noindex`).
- Existing `og:title` / `og:description` were already page-specific and were **preserved**; only
  the 404 page got newly-authored title/description. *(Note: a few `og:description` values carry a
  raw `&` predating this pass — mirrored verbatim into the twitter tags so the pair stays identical;
  can be escaped to `&amp;` later if strict validation is wanted.)*

### 15.17 Image performance attributes (§9 perf / Core Web Vitals — all `<img>`)
- **What:** added explicit dimensions and loading hints to **every literal `<img>`** (20 tags
  across 8 pages; the other 6 pages have no `<img>` — their logos are JS-injected and were left
  alone). No CSS/layout change — every image container already fixes size via CSS
  (`width/height:100%` + `object-fit:cover`, or explicit `aspect-ratio`), so the attributes only
  reserve correct aspect-ratio space and reduce CLS.
- **Intrinsic `width`/`height`:** set from the **actual asset files** (read via PIL), never
  guessed — e.g. `hands-soil-seedling.jpg` 5565×3710, `container-handling.jpg` 6000×4000,
  `About-Handshake.png` 1584×672, `premium-hides.jpg` 1920×2880, `leadership-portrait.jpg` 585×587.
  This also **corrected `index.html`'s slideshow images**, which carried placeholder `1024×430`
  attributes, to their true sizes.
- **`loading="lazy"`** on all below-the-fold images.
- **Eager hero per page:** each page's first/hero image is left eager and given
  **`fetchpriority="high"`** (verified exactly one per page). On `rice.html` — whose `.page-hero`
  is imageless — the rice photo is the first `<img>` and is treated as the hero.
- **No missing sizes:** all 11 distinct referenced assets resolved to real dimensions.

### 15.18 robots.txt + sitemap.xml (§9 SEO / crawlability — new root files)
- **`robots.txt`** (project root): minimal and standards-compliant —
  `User-agent: *` / `Allow: /` and a `Sitemap: https://nexogreenexim.com/sitemap.xml` reference.
  **Disallows nothing**: `404.html` is kept out of the index via its `noindex` meta (the correct
  mechanism — a robots `Disallow` would stop crawlers from ever reading that `noindex`).
- **`sitemap.xml`** (project root): sitemaps.org **0.9** schema, generated by **scanning the
  directory** (not a hardcoded list). Contains **13 `<url>` entries** — every public `.html` page,
  with `404.html` excluded. Each entry uses an **absolute** `https://nexogreenexim.com/` URL (bare
  domain for the home page, matching its canonical), a `<lastmod>` from the file's real
  modification date (W3C `YYYY-MM-DD`), and a `<priority>` of **1.0 for the home page** vs **0.8**
  for interior pages.
- **Regeneration:** `<lastmod>` reflects filesystem mtime, so re-run the same directory scan to
  refresh dates after content edits.

### 15.19 README.md (project overview + demo notice)
- **What:** added a root **`README.md`** as the project's entry-point documentation — purpose,
  technology, file structure, local-run instructions, key features, a **pre-launch checklist**,
  deployment notes, and a pointer to this spec.
- **Demo / evaluation notice (formal):** the README states up front that this is a **demonstration
  build for validating the client's functional requirements**, that **copywriting is provisional**
  and the **product catalogue is illustrative**, and that final copy and the complete catalogue
  **will be finalised after the client reviews and approves the functional requirements**. The same
  framing is echoed in the pre-launch checklist and the closing copyright note.
- Documentation only — no change to site markup, styles or behaviour.

### 15.20 Product card — title links to the PDP (refines §15.14)
- The product card's **`<h3>` name is now the link** to a product's detail page (when the product
  has a `detail` field); the separate **"View details"** footer link added in §15.14 was **removed**
  as visually cluttered/redundant. The **"Request Freight Quote →"** link stays in the footer.
- `cardHTML` (`js/products.js`) wraps the name in an anchor only when `detail` is set; cards without
  a PDP render a plain title as before. The linked title **inherits the heading's navy colour** at
  rest (looks identical), with an emerald hover + underline and a keyboard `:focus-visible` ring
  (`.p-card h3 a` in `css/styles.css`); the dead `.detail-link` style was deleted.

### 15.21 Fix: 404 `.err` class collided with form-validation `.err` (home RFQ panel, §14.8)
- **Symptom:** on the home **"Ready to Source…"** RFQ panel (§14.8), the three capture fields
  showed enormous empty gaps and their validation messages rendered permanently, far below the
  inputs (the "Generate RFQ Now" button pushed off-screen).
- **Cause:** the 404 page (§15.15) introduced a section class named **`.err`**
  (`min-height: 100vh; display: grid; place-items: center; …`). That name **collides with the
  long-standing form-validation message class `.err`** (§7). The home RFQ uses `.rfq-form .field`
  (not `.form-field`), which had no rule hiding its `.err` spans, so each error span inherited the
  404 styling — becoming a full-viewport-height box, always visible. The contact and
  request-a-quote forms (which use `.form-field`) were also affected, but only after a failed submit.
- **Fix:**
  1. Renamed the 404 section class **`.err` → `.errpage`** (and the dependent `.errpage .eyebrow`,
     `.errpage h1`, `.errpage p` selectors); updated `404.html`. The hyphenated `.err-*` children
     (`.err-inner`, `.err-code`, etc.) never collided and were left unchanged.
  2. Extended the validation-message rules to cover the RFQ's `.field` variant — added
     `.rfq-form .field .err` / `.rfq-form .field.invalid .err` alongside the existing
     `.form-field` rules — so RFQ errors are **hidden until `forms.js` flags the field `.invalid`**,
     then shown as small red text, matching the other forms.
- Files touched: `css/styles.css`, `404.html`.

### 15.22 Precious Stones — new fourth product sector (extends §6.1 / §14.2)
- Adds a **fourth pillar, "Precious Stones,"** alongside Agriculture, Timber and Leather.
- **Data (`js/products.js`):** new category key `stones` in `LABEL` ("Precious Stones") and `PAGE`
  (`precious-stones.html`); four `PRODUCTS` lines — **Garnet** (HS 7103 99), **Tourmaline**
  (7103 99), **Amethyst** (7103 99), **Ruby** (7103 91) — each flagged *placeholder imagery
  pending final photography*; `stones` added to the matrix filter list, the `byCat` buckets and
  the home-preview `order` spread so the category appears in the "All Products" rotation.
- **Chrome (`js/main.js`):** Products **dropdown** gains a Precious Stones link ("Garnet,
  tourmaline, amethyst & ruby"); **footer** Explore column gains the link; "All three pillars" →
  "All four pillars".
- **Pillar grids:** new 4th `.cat-card` ("04 / Sector") on both `index.html` and `products.html`,
  linking to `precious-stones.html` (image `assets/hero/Prescious stones card image.jpg`).
- **New page `precious-stones.html`:** `data-page="products"`, image `.page-hero`, a
  `data-products="stones"` listing and the shared `.cta-band` (RFQ prefilled `?product=Precious Stones`).
- **Metrics (`index.html`):** "Primary Core Sectors" **3 → 4**; "Continents Served" **4 → 6**;
  home/products headings "Three pillars" → **"Four pillars"**.
- **CSS:** `.cat-grid` changed from `repeat(3, 1fr)` to **`repeat(4, 1fr)`** (§15.6 sector grid).
- New assets: `assets/hero/garnet.jpg`, `Tourmaline.jpg`, `amethyst product image.jpg`, `Ruby.png`,
  `Prescious stones card image.jpg`.

### 15.23 Home hero slideshow expanded 3 → 5 slides (revises §15.1 / §13.1)
- `index.html` hero now carries **5** `.hero-slide` divs + **5** `.hero-dots` (was 3), using a new
  **WebP** set under `assets/Hero Banner Slide Show/`: `farmer-grains` (eager, `fetchpriority="high"`),
  `agricultural-land`, `warehouse`, `container-handling`, `ship-at-sea` (all lazy). Replaces the
  prior `hero/pexels-…avif` + `container-handling.jpg` + `leather-banner.png` set.
- `initHero()` timing/Ken-Burns/pause behaviour (§15.1) is unchanged — it counts slides at runtime.

### 15.24 Footer + contact phone rework (§5.2 / §6.8)
- **Logo:** `.footer-brand img` is now **height-driven at 88px** (`width:auto; max-width:100%`) so it
  keeps native ratio; markup intrinsic size updated 152×40 → 254×88. The **brand-blurb paragraph
  was removed** — the footer brand column now shows logo + tagline + legal IDs only.
- **Multi-country phones:** footer and Contact page now list **two India numbers**
  (+91 78679 84716 · +91 89254 60471) and a **Zambia number** (+260 777 107 185), each tagged with a
  small `.foot-region` / `.ci-region` country label. New `.foot-phones` grid wraps the stacked rows.

### 15.25 `--muted-invert` dark-bg text token + CTA/dropdown polish (§2.5.1 / §14.4)
- Added **`--muted-invert: #d3e0eb`** — the dark-background counterpart of `--muted`. Replaces the
  ad-hoc hardcoded dark-bg greys (`#d3e0eb`, `#aab6c6`, `#9fb0c4`, `#cdd6e2`) across `.section--ink`,
  metrics labels, region-toggle meta, the RFQ band, footer, page-hero crumbs and the 404 page — one
  token now governs secondary text on navy.
- **`.cta-band`** gets the homepage RFQ band's gradient (`var(--primary) → #081320`) so the pre-footer
  CTA reads as its own section instead of merging into the footer.
- **Immersive-header fix:** on the home hero, dropdown links were inheriting the white nav text over
  the white dropdown card; added rules restoring `--primary` (hover `--accent`) for `.dropdown li a`.

### 15.26 Copy pass — HS-code de-emphasis + sector reframing (§9 content)
- Removed **HS-code-forward framing** from sector/product page leads and meta descriptions
  (agriculture, products, leather, rice) in favour of buyer-benefit language; HS codes remain on the
  individual product cards and PDP spec tables.
- Dropped the explicit **"spices are excluded from our catalog per company policy"** line from the
  agriculture page (spices remain out of the catalog; the sentence was just removed from public copy).
- Removed the descriptive `<p>` from each home/products **pillar `.cat-card`** (now heading + link only).
- Reworded the **region-toggle `.r-meta`** strings on index + global-markets to sector-neutral copy.
- **Certifications** and **Logistics** page heroes switched from `.page-hero--plain` to **image heroes**
  (`logistics/export-documents.jpg`, `hero/Logistics Page Hero Banner.png`) with refreshed headings.
- **About:** "Our Vision / Our Mission / Our Promise" → "Vision / Mission / Promise".
