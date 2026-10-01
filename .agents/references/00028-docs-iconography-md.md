# iconography.md — iconography

Source: `kit/docs/iconography.md`, original lines 1–61. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Iconography

**One library: [Lucide](https://lucide.dev) (ISC), pinned in `icons/VERSION`.** The kit ships the subset the templates use; add more with one command.

## Using an icon

```html
<svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg>
```

- `js/icons.js` inlines the sprite (`#op-icon-sprite`) at page load, so `<use href="#i-…">` works from `file://` and any server. Load it on every page, before `officepress.js`.
- Ids are `i-` + the Lucide name (kebab-case, as on lucide.dev).
- The full list is in `icons/icons.json` (and `window.OP_ICON_NAMES` at runtime). `scripts/check.py` fails on an icon that isn't in the sprite **[icon]**.
- Icons inherit `currentColor`. Colour them by colouring their parent with a token — never `fill`/`stroke` attributes.

## Sizes and stroke

| Class | Size | Use |
|---|---|---|
| `.op-icon` | 16 | Default: nav, buttons, globals |
| `.op-icon--15` | 15 | Inside inputs, search, buttons with text |
| `.op-icon--14` / `--12` | 14 / 12 | Small icon buttons, meta rows, pills |
| `.op-icon--18` / `--20` | 18 / 20 | Icon tiles 40, empty states |
| `.op-icon--bold` | stroke 2 | Beside bold text (automatic inside `.op-btn`) |

Default stroke is 1.5 beside regular text. Outline style always; "filled" only to mark an active state, and only if Lucide has it.

## Accessibility

- Decorative (next to a text label): `aria-hidden="true"` on the `svg`.
- Icon-only control: `aria-label` on the `button`/`a`, `aria-hidden` on the `svg` **[a11y-label]**.
- Never an icon alone to show status — pair it with text or a dot + label.

## Choosing icons — the house vocabulary

Use these for these meanings so every app agrees:

| Meaning | Icon |
|---|---|
| Notifications · Agent · Light · Dark · Account | `bell` · `bot` · `sun` · `moon` · `user` |
| Collapse / expand aside · mobile menu · close | `panel-left-close` / `panel-left` · `menu` · `x` |
| Back (settings, auth) | `arrow-left` |
| Search · filter · sort | `search` · `list-filter` · `arrow-up-down` |
| Add · edit · delete · more | `plus` · `pencil` · `trash-2` · `ellipsis` |
| Settings · preferences · admin | `settings` · `sliders-horizontal` · `shield-check` |
| Due / SLA · comments · attachment | `timer` · `message-square` · `paperclip` |
| Drag handle · move up/down | `grip-vertical` · `chevron-up` / `chevron-down` |
| Success · warning · error | `circle-check` · `triangle-alert` · `octagon-alert` |
| Automation · run · history | `zap` · `activity` · `history` |
| Sign out · password · 2FA | `log-out` · `key-round` / `lock` · `shield-check` |

Check `icons/icons.json` before reaching for a new one — the meaning may already have an icon.

## Adding icons

```bash
python3 scripts/build_icons.py --add truck receipt   # downloads Lucide SVGs at the pinned version, rebuilds sprite + js/icons.js + icons.json
python3 scripts/build_icons.py                       # rebuild only (after editing icons/svg/)
```

Rules: Lucide names only (browse lucide.dev); don't hand-edit `js/icons.js` or `sprite.svg` (generated); don't mix in another icon set or emoji. In a scaffolded app, add icons in the kit and re-run `new_app.py` (or copy `js/icons.js`).
<!-- officepress-source:end -->
