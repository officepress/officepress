# OfficePress UI foundations

Every app shares the Inbox board's structure, spacing, type and components. Family and mode change colour through `op-*` tokens. Use the existing components and patterns before adding a new one.

## Themes and tokens

The axes are `family = communicate | create | operate | commerce` and `mode = light | dark`. Set both on the design root; in HTML load core CSS followed by exactly one family stylesheet and set `data-mode` on `<html>`. App CSS uses semantic `var(--op-*)` tokens. Do not invent per-app dark-mode rules or hard-code family colours.

Use `--op-accent-strong` for primary fills, `--op-accent-text` for text/links, and `--op-dot` for unread status. Unread stays green across families; in Commerce its ring and position also distinguish it. Another app may display its own family identity in a `data-family` tag.

Guidelines specify body text contrast ≥ 4.6:1 and accent text ≥ 4.5:1 across eight family/mode combinations. User theme customization must derive related tokens and contrast-check before saving. The source assertions are retained; this ingestion is not a new accessibility certification.

## Typography and spacing

- Inter: 11, 12, 13, 16 and 20 px; 28/700 only on auth pages. Use weights 400 and 700. Prefer weight and colour for hierarchy instead of new font sizes.
- JetBrains Mono: codes, keys and mustache variables. Use the UI font elsewhere; the logo wordmark is a separate brand use.
- Use the 4-point spacing scale and the documented component sizes. Preserve explicit small geometry exceptions such as the SLA indicator; do not generalize them into another spacing scale.
- Radius system: 4, 8, 12, 16 and full. Concentric radii use outer = inner + padding: card 8 inside column 16 with 8 padding; menu item 4 inside popover 12 with 8 padding.
- Raised surfaces use layered shadows; borders express structure or state. Photos/avatars use a 1 px inside outline in `op-image-outline`, black 10% in light and white 10% in dark.

## Interaction, motion and content

Text buttons pad 16/16. Leading-icon buttons use 12 on the icon side and 16 on the text side; trailing icons mirror this. Icon-only controls are square and centered. Keep one primary action per region.

Press feedback scales to 0.96, never below 0.95; dense controls can opt out. Name transition properties explicitly: colour/opacity 150 ms, transform 200 ms, ease-out. Icon swaps cross-fade both icons with scale 0.25→1, opacity 0→1 and blur 4→0, using a 0.3 s zero-bounce spring or the documented cubic-bezier fallback.

Popover/panel entry combines opacity with 4 px translateY; exits are shorter and softer. Stagger only rare staged entrances, around 100 ms. Skip entry animation on first load. Avoid custom animation for typing, row hovering and filter toggling. Respect reduced motion. Every animated change also has a label, icon or colour signal.

Use sentence case, specific actions and realistic content. Keep body text left-aligned except auth and empty states. Use proper field labels, icon-button accessible names, state in ARIA, keyboard-operable controls and visible focus. Cover empty, loading, error and disabled states; destructive actions need confirmation and irreversible actions need typed confirmation.

## Complete system detail

- [Standalone guidelines, all sections](../references/00071-ui-guidelines-md-introduction.md) — load when reading the original system rationale, tables, examples and motion rules; follow its local continuation links through the source map.
- [Kit guidelines, all sections](../references/00026-docs-guidelines-md-introduction.md) — load when checking the implementation-oriented form of the rules.
- [Exact family × mode token tables](../references/00082-officepress-active-token-tables.md) — load when choosing a semantic colour or comparing all eight combinations.
- [Complete component, CSS and JS references](../references/00074-officepress-kit-source-map.md) — load when needing an exact class, dimension, selector, example or behavior.
- [All Pencil variable definitions](../references/00076-officepress-pencil-variable-map.md) — load when resolving a source design variable, including preserved legacy values.
