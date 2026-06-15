# Image Wishlist — the "narrative / trust" asset layer

**Context.** `ASSETS.md` already covers the *product* layer well — ~50 small product photos (spices, grains, oils, nuts, etc.) suitable for small placards/cards, plus a few sector textures (leather, timber, charcoal), one farmland hero, and one leadership portrait.

What the site still needs is a different *class* of imagery. Nexogreen's strategy is **"Sustainable Global Trade Partner"** — the brand sells **trust, transparency, sustainability, partnership and global reach**, not just goods. Those themes currently have **no imagery**. This file specifies that missing layer, mapped to where each image is used on the site.

## Global style (append to every stock search / AI-generation prompt)
> Clean, modern, editorial B2B photography. Natural daylight, soft contrast, authentic Indian export/agriculture context (not generic Western stock). Color harmony with the brand: royal blue, fresh green, warm earth tones, plenty of neutral/white space. Realistic, high-resolution, web-optimized. Composed with negative space for headline text where noted. No baked-in text, no logos, no heavy filters.

## Aspect ratios needed
- **Page-hero backgrounds:** ~1920×820 (21:9, wide) — dark-toned or will be darkened by overlay; leave left/center negative space for white headline text.
- **Section split visuals:** ~900×680 (4:3) or square (1:1).
- **Category / feature cards:** ~800×1000 (4:5 portrait) — for the home `.cat-card` tiles.
- **Portraits:** ~720×900 (4:5).
- **Logistics/global banner:** ~1920×900.
- **OG / social share:** exactly 1200×630.

---

# 1. Cinematic hero & page-header backgrounds  (folder: `hero/`)
*Each inner page has a dark `.page-hero`; a subtle darkened background photo adds depth behind the white headline. Wide, atmospheric, low visual noise.*

- `hero/home-trade-hero.jpg` — Aerial/wide establishing shot blending a green Indian farm landscape foreground with a distant container port on the horizon, golden-hour light, conveying "from origin to global market." Negative space upper-left for headline.
- `hero/about-handshake.jpg` — Two business partners shaking hands across a sunlit table with crops/samples visible, warm and human, slightly desaturated.
- `hero/agriculture-banner.jpg` — Expansive terraced farmland or paddy fields under a wide sky, rows leading to the horizon, fresh greens.
- `hero/leather-banner.jpg` — Moody close-up of rolled premium leather hides stacked in a clean tannery, controlled lighting, rich browns.
- `hero/timber-banner.jpg` — Neatly stacked teak/hardwood logs in a sunlit timber yard, depth of field, warm wood tones.
- `hero/sustainability-banner.jpg` — Hands cradling a young seedling in dark soil, or sunlight through a forest canopy, hopeful green light.
- `hero/global-markets-banner.jpg` — Container ship at a busy port at dawn, cranes loading, cool blue tones — global logistics feel.
- `hero/certifications-banner.jpg` — A quality inspector with a clipboard/tablet examining goods in a clean warehouse, professional and credible.
- `hero/contact-banner.jpg` — Bright modern office or export desk with a world map and people in conversation, welcoming.

# 2. Global trade & logistics  (folder: `logistics/`)
*The Global Markets page and every "export capabilities" section are text-only right now. Highest-impact gap.*

- `logistics/container-port.jpg` — Stacked multicolored shipping containers with gantry cranes, clear sky.
- `logistics/cargo-ship-sea.jpg` — Loaded container vessel on open ocean, wake trailing.
- `logistics/loading-warehouse.jpg` — Forklift loading pallets into a shipping container at a warehouse dock.
- `logistics/air-freight.jpg` — Cargo being loaded onto a freight aircraft, motion and scale.
- `logistics/export-documents.jpg` — Close-up of export paperwork, stamps, certificate of origin and a pen on a desk.
- `logistics/world-map-routes.png` — Stylized world map (transparent PNG) with Asia, Middle East, Europe and Africa highlighted and trade-route arcs from India, in brand blue/green. (For the "Markets We Serve" section.)
- `logistics/warehouse-storage.jpg` — Spacious, organized warehouse with neatly stacked sacks/pallets of commodities.

# 3. Sustainability & environment narrative  (folder: `sustainability/`)
*The whole Sustainability page is text-only; needs authentic "responsible" imagery.*

- `sustainability/hands-soil-seedling.jpg` — Close-up of weathered hands planting/holding a seedling in rich soil.
- `sustainability/farmer-field.jpg` — Indian farmer inspecting healthy crops in a field at golden hour, genuine and dignified.
- `sustainability/reforestation.jpg` — Young sapling rows / tree-planting in a managed plantation, sense of renewal.
- `sustainability/sustainable-forestry.jpg` — Managed forest with selectively harvested marked trees, dappled light.
- `sustainability/water-management.jpg` — Clean water treatment / responsible processing facility, tidy and modern (supports the "responsible leather processing" claim).
- `sustainability/traceability-qr.jpg` — Hand scanning a QR/label on a sack or crate, linking origin to shipment — transparency cue.

# 4. People & partnership  (folder: `team/`, `people/`)
*Only one portrait exists. B2B trust is built on faces. Keep authentic, not posed-stocky.*

- `people/farmer-portrait.jpg` — Candid portrait of a smiling farmer holding harvested produce, natural light.
- `people/leather-artisan.jpg` — Skilled worker grading/handling a leather hide in a workshop.
- `people/quality-inspector.jpg` — Inspector in a clean coat checking grain quality with a sample tray.
- `people/team-meeting.jpg` — Small diverse team reviewing export plans around a laptop and product samples.
- `people/buyer-supplier-call.jpg` — Professional on a video/phone call at a desk with samples — "responsive communication."
- `team/leadership-portrait-2.jpg` … `-4.jpg` — Additional clean, consistent leadership/team headshots (neutral background) to pair with the existing one on About.

# 5. Process & quality assurance  (folder: `process/`)
*Reinforces the "Quality Assurance" and "Transparent Supply Chain" pillars.*

- `process/grain-inspection.jpg` — Hands sifting grain / moisture-checking with an instrument.
- `process/lab-testing.jpg` — Sample testing in a clean lab setting, beakers/scales, food-grade.
- `process/sorting-grading.jpg` — Workers sorting and grading produce on a clean line.
- `process/packaging-line.jpg` — Commodities being bagged/sealed into export packaging with labels.
- `process/pre-shipment-check.jpg` — Goods on pallets being checked against a manifest before loading.

# 6. Compliance, certification & documentation  (folder: `compliance/`)
*The Certifications page lists ISO 9001 / FSSAI / Organic / Agmark as a roadmap — supportive, credible imagery (not fake-held badges).*

- `compliance/certificate-stack.jpg` — Tidy stack of official documents with embossed seals on a desk.
- `compliance/checklist-clipboard.jpg` — Clipboard with a compliance checklist being ticked, warehouse background.
- `compliance/badge-set.png` — Clean monochrome/outline badge icons for ISO 9001, FSSAI, Organic, Agmark, IEC (transparent PNG/SVG) — styled as "standards we work to / are pursuing."
- `compliance/inspection-stamp.jpg` — Close-up of an approval stamp being applied to export paperwork.

# 7. Establishing "context" shots per sector  (folder: `context/`)
*Editorial wide shots that set scene — different from the existing tight product placards.*

- `context/spice-market.jpg` — Vibrant heaps of colorful Indian spices in a market/warehouse, top-down or wide.
- `context/grain-silos.jpg` — Grain storage silos or a bulk warehouse of stacked sacks.
- `context/tannery-wide.jpg` — Clean, modern tannery floor with hides on racks.
- `context/sawmill-yard.jpg` — Timber yard / sawmill with logs and sawn planks, workers in PPE.
- `context/orchard-harvest.jpg` — Harvest scene in an orchard or plantation, baskets of produce.
- `context/charcoal-production.jpg` — Coconut-shell / wood charcoal being produced or bagged.

# 8. Subtle background textures & overlays  (folder: `textures/`)
*For adding depth behind text sections without competing with copy. Muted, low-contrast.*

- `textures/jute-burlap.jpg` — Natural jute/burlap sack weave, neutral beige — evokes commodities & eco.
- `textures/kraft-paper.jpg` — Soft recycled kraft-paper texture.
- `textures/leaf-macro.jpg` — Extreme close-up of a green leaf with veins/water droplets, brand green.
- `textures/wood-grain.jpg` — Fine teak/hardwood grain, warm.
- `textures/leather-grain-macro.jpg` — Macro of leather grain texture.
- `textures/topographic-lines.svg` — Faint topographic/contour line pattern in brand blue (for dark sections / footer).

# 9. Brand & social  (folder root / `social/`)
- `social/og-image.jpg` — 1200×630 share card: logo + tagline "Quality Assured. Responsibly Sourced. Globally Delivered." over a subtle trade/agri background. (Needs the brand wordmark composited.)
- `favicon.ico` + `apple-touch-icon.png` — proper multi-size favicon set derived from `logo-mark.png`.

---

## Sourcing notes
- **AI-generation** (e.g. for heroes/atmospheric shots) works well for categories 1–3, 5, 7, 8 — append the **Global style** block above to each description.
- **Real/authentic photography** is strongly preferred for **People & partnership (4)** and anything claiming to show Nexogreen's *actual* operations (compliance, real facilities) — generic faces can read as inauthentic, and showing real operations builds genuine trust.
- Keep every asset web-optimized (target <250 KB for cards, <500 KB for heroes; consider WebP).
- The existing product placards stay as-is; this layer wraps around them.
