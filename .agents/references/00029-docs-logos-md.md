# logos.md — logos

Source: `kit/docs/logos.md`, original lines 1–38. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Logos

All logos are SVG, exported from the canvas (`officepress.pen`), listed in `logos/logos.json`. Snapshots: `reference/brand/`.

## OfficePress (the suite)

| File | Use |
|---|---|
| `logos/officepress/officepress-mark.svg` | The building mark: slate tile, windows in the four family colours. Suite-level surfaces (suite home, app switcher, emails). |
| `logos/officepress/officepress-lockup-on-light.svg` | Mark + wordmark on light backgrounds. |
| `logos/officepress/officepress-lockup-on-dark.svg` | Mark + wordmark on dark backgrounds. |
| `logos/officepress/favicon.svg` | Suite favicon. |

The window colours are fixed (`#2F5BEA` communicate, `#6A3BE4` create, `#E2551B` operate, `#0F8F6A` commerce) and the tile is slate `#6B7385` — chosen to sit on any light or dark background. Never recolour, outline, add effects, or rebuild the mark in CSS.

## Product marks (one per app)

`logos/products/<family>/<app>.svg` — 96 × 96 rounded tiles in the family colour, 23 apps:

| Family | Apps |
|---|---|
| communicate | inbox · chat · meet · calendar · support · agent |
| create | drive · tables · forms · whiteboards · diagrams · content |
| operate | resourcing · procurement · accounting · approvals · clients · sign |
| commerce | products · orders · inventory · payments · fulfillments |

Where they go:

- **Aside brand:** `<span class="op-brand__logo"><img src="…/products/operate/accounting.svg" alt=""></span>` (`alt=""` — the app name is next to it).
- **Auth top bar:** same markup in `.op-auth__top`.
- **Favicon:** `<link rel="icon" href="…/products/operate/accounting.svg">`.
- **Cross-app references** (notifications, switchers): prefer the product mark at 20–32 px; or `.op-icon-tile--family` + `data-family` when only an icon is available.

Rules:

- An app uses **its own** mark and its family. A mark never appears in another family's colour.
- Display size ≥ 20 px. Don't crop, rotate, recolour, or put it on an accent background.
- A new app without a mark: `new_app.py` falls back to a sibling's mark and warns. Design the mark on the canvas (Product Marks board) and export it to `logos/products/<family>/<slug>.svg`, then add it to `logos.json`.
<!-- officepress-source:end -->
