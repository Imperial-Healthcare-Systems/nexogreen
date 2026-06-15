# Asset Manifest

Images extracted from `Research context/Nexogreen EXIM project.pdf` (20-page strategy
document) plus the existing brand logos. Organized by intended website use.

All product photos are JPEG stock-style photography embedded in the research report.
Resolutions are modest (suitable for cards/thumbnails, ~150–600px wide); use the larger
ones for hero/section banners. Page-header text banners and transparency masks from the
PDF were intentionally skipped (they are report chrome, not reusable web assets).

## logo
| File | Notes |
|------|-------|
| `logo.png` | Primary NexoGreen EXIM logo (NGX + globe, transparent, 1429×495) |
| `logo-white.png` | White/knockout variant for dark backgrounds (1429×495) |
| `logo-mark.png` | Logo mark only, no wordmark (657×495) |

## Brand & social (generated — wishlist §9)
Run `python3 scripts/brand_assets.py` to regenerate. Derived from the logos above; no external services.
| File | Use |
|------|-----|
| `favicon.ico` | Multi-size favicon (16/32/48) for `<link rel="icon">` |
| `favicon-32.png` | Standalone 32px PNG favicon |
| `apple-touch-icon.png` | 180×180 iOS home-screen icon (mark on white) |
| `social/og-image.jpg` | 1200×630 OpenGraph/Twitter share card (logo + tagline over darkened hero) |

## Structural
| File | Use |
|------|-----|
| `hero/agriculture-landscape.jpg` | Homepage hero — green farmland (612×408) |
| `team/leadership-portrait.jpg` | About/Leadership portrait (585×587) |

## Sector pages
| Folder | Files | Page |
|--------|-------|------|
| `leather/` | leather-hide, leather-pieces | leather.html |
| `timber/` | timber-logs, cut-logs, stacked-timber | timber.html |
| `forest-produce/` | charcoal, charcoal-chunks | timber / sustainability |

## Agricultural products (`products/`)
- **spices/** — assorted-spices, red-chillies, dried-red-chillies, fresh-chillies, dried-chillies, chilli-powder, turmeric-paste, tamarind, ginger
- **fruits/** — limes, lemons, goji-berries, dried-berries
- **cereals-grains/** — maize, wheat-grain, cereal-grain, oats, grains, mixed-grains, mixed-seeds, assorted-seeds, sesame-seeds, black-sesame, pulses, lentils, beans, green-gram
- **flour-starch/** — flour, grain-flour, starch-powder, white-powder
- **oils-oilseeds/** — coconut, coconut-halves, cotton, oil, cooking-oil, edible-oil, oil-bottle, herbal-oil-bottles
- **nuts/** — cashews, cashew-platter
- **vegetables/** — onions, leafy-greens, fresh-herbs, green-leaf, green-leaves
- **powders-herbal/** — turmeric-field, moringa-powder, herbal-powder, green-powder, yellow-powder
- **honey/** — honeycomb
- **mushrooms/** — mushrooms
- **marine/** — prawns

## Notes
- File names describe the visible subject. Some product photos are stock illustrations of
  a category, not NexoGreen's actual product — confirm suitability before publishing.
- Total: 65 organized images (64 from PDF + the EG mark) alongside the 3 existing logos.
