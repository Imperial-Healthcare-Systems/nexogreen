# NexoGreen EXIM — Corporate Website

A multi-page marketing website for **NexoGreen EXIM Private Limited**, a global
export–import trading partner in agriculture commodities, timber & forest produce,
and leather. The site positions the company for international B2B buyers,
domestic suppliers and partners, and drives trade inquiries through contact and
request-for-quote (RFQ) flows.

> **Tagline:** *Global Trade, Growth, Trust.*

---

## ⚠️ Demo / Evaluation Notice

**This is a demonstration build, prepared for the purpose of validating the
client's functional requirements.** Its objective is to allow the client to
review the site's structure, navigation, layout, interactions and overall user
experience, and to confirm that the agreed functionality behaves as expected.

Accordingly, please note the following regarding content:

- **Copywriting is provisional.** The body copy, headings, descriptions and
  marketing language currently in place are placeholder/working text intended to
  illustrate the design and information architecture. Final, professionally
  authored copy will be supplied and incorporated at a later stage.
- **The product catalogue is illustrative.** Product entries, descriptions,
  specifications and imagery are representative samples used to demonstrate the
  catalogue's behaviour (filtering, detail pages, HS-code presentation, etc.).
  The definitive product data, specifications and photography will be finalised
  in a subsequent phase.

All such content, together with the copywriting and the complete product
catalogue, **will be addressed and finalised after the functional requirements
have been reviewed and approved by the client.** Items requiring final input are
additionally flagged inline (see *Pre-launch checklist* below).

---

## Technology

| Aspect | Detail |
|--------|--------|
| Stack | Plain **HTML + CSS + JavaScript** — no framework, no build step |
| Fonts | **Inter** (Google Fonts) |
| Hosting | Any static host (Netlify, Vercel, Cloudflare Pages, etc.) |
| Forms | Wired to a clearly-marked placeholder endpoint, to be replaced by the client |
| Languages | English only |
| Responsiveness | Fully responsive (mobile / tablet / desktop) |
| Accessibility | Targets WCAG 2.1 AA; honours `prefers-reduced-motion` |

There is **no compilation or dependency installation** required — the files are
served as-is.

---

## Project structure

```
/
├── index.html                 Home
├── about.html                 About / company story
├── products.html              Products overview (3 pillars + full matrix)
├── agriculture.html           Sector page
├── timber.html                Sector page (Timber & Forest Produce)
├── leather.html               Sector page (Wet Blue Leather)
├── rice.html                  Product detail page (first PDP instance)
├── sustainability.html
├── global-markets.html        "Logistics Network"
├── certifications.html
├── contact.html               Contact form + office location map
├── request-a-quote.html       RFQ form
├── legal.html                 Corporate / legal information
├── 404.html                   Branded error page (noindex)
│
├── css/
│   └── styles.css             Single production stylesheet (design system)
├── js/
│   ├── main.js                Shared chrome (header/footer) + global interactions
│   ├── products.js            Product catalogue data + catalogue renderers
│   └── forms.js               Form validation, honeypot, RFQ prefill
├── assets/                    Logos, hero/sector/product imagery, icons, social
│
├── robots.txt                 Allow-all + sitemap reference
├── sitemap.xml                sitemaps.org 0.9, public pages
├── REQUIREMENTS.md            Authoritative functional/design specification
└── README.md                  This file
```

The shared **header and footer are injected by `js/main.js`** at runtime, so each
HTML page contains only its own `<main>` content.

---

## Running locally

Because the site is static, any local web server works. From the project root:

```bash
# Python 3
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

> Use a server rather than opening the files directly (`file://`). The pages rely
> on JavaScript (shared header/footer, catalogue rendering) and relative asset
> paths that behave correctly only over HTTP.

---

## Key features

- **Shared, injected chrome** — consistent header (with Products dropdown) and
  footer across every page from a single source.
- **Filterable product matrix** — segmented category toggle with a sliding active
  pill and progressive "Show More" disclosure.
- **Product detail pages (PDP)** — `rice.html` is the first instance; the pattern
  is reusable for additional products.
- **Contact page map** — embedded Google Map of the registered office with a
  "Get directions" button.
- **Forms** — contact and RFQ forms with client-side validation, a spam honeypot,
  and product/destination prefill via URL parameters.
- **Motion system** — hero slideshow, scroll reveals, parallax and micro-
  interactions, all gated behind `prefers-reduced-motion`.
- **SEO & performance** — per-page metadata and social-share tags, intrinsic image
  dimensions with lazy-loading, `robots.txt` and `sitemap.xml`.

---

## Pre-launch checklist (items to finalise with the client)

These are the placeholders and open items to be resolved before the site goes
live. They are intentionally marked in the code where applicable.

- [ ] **Final copywriting** across all pages (see Demo Notice above).
- [ ] **Complete product catalogue** — final products, descriptions,
      specifications and photography (`js/products.js`).
- [ ] **Product detail spec values** — replace the rows marked `PLACEHOLDER`
      on `rice.html` (moisture, crop year, packaging, MOQ, port, terms, lead time).
- [ ] **Form endpoint** — replace the placeholder (`YOUR_FORMSPREE_ENDPOINT`) in
      `js/forms.js` with the live Formspree/Web3Forms key.
- [ ] **Office map location** — confirm the pinned coordinates on `contact.html`
      (procedure documented in `REQUIREMENTS.md` §15.13).
- [ ] **Compliance / certification numbers** — supply the real registration
      numbers for the certifications tooltips.
- [ ] **Legal identifiers** — verify the masked PAN/TAN final digits.
- [ ] **Email / domain** — confirm the final inbox (`info@nexogreenexim.com`).
- [ ] **Social share image** — confirm `assets/social/og-image.jpg`.

---

## Deployment notes

- Deploy the project root to any static host; no server-side runtime is required.
- The site is built for hosting at the domain **root** (`https://nexogreenexim.com/`).
  Canonical URLs, the sitemap and `404.html`'s `<base href="/">` all assume this.
- `404.html` is served automatically as the error page on most static hosts; some
  platforms may require a one-line configuration to point at it.
- Regenerate `sitemap.xml` (`<lastmod>` values track file modification dates) after
  substantial content updates.

---

## Documentation

The authoritative functional and design specification — including the full
build/iteration change log — is maintained in **[REQUIREMENTS.md](REQUIREMENTS.md)**.

---

## Copyright

© NexoGreen EXIM Private Limited. All rights reserved.
Final copyright and content ownership terms will be confirmed with the client
alongside the delivery of final copy and the complete product catalogue.
