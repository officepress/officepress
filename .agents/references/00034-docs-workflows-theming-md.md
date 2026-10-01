# theming.md — theming

Source: `kit/docs/workflows/theming.md`, original lines 1–47. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Workflow: theming — modes, families, tokens

## Switch an app to another family

Change the one family stylesheet link (and the product mark):

```html
<link rel="stylesheet" href="officepress/css/families/commerce.css" id="op-family">
```

Nothing else should change colour. If something does, it's a hard-coded value — fix it, don't override it.

## Dark mode

Already handled: `data-mode` on `<html>`, the no-flash head script, `[data-action="toggle-mode"]` and `localStorage["op-mode"]`. Your CSS only needs tokens. Never write `[data-mode="dark"]` rules in an app — if a token is missing in dark, it's a kit bug.

## Write app CSS

```css
/* app.css — loaded after the kit CSS */
.app-ledger-total {
  display: flex; gap: var(--op-space-2);
  padding: var(--op-space-3) var(--op-space-4);
  border-radius: var(--op-radius-8);
  background: var(--op-sunken);
  color: var(--op-text);
  font: var(--op-text-small);
}
```

Rules: `app-` prefix, tokens only, sizes on the scales, `transition` with named properties. Run `check.py` on the CSS file too.

## App Settings → Theme (user-customised accent)

The App Settings › Theme screen lets an admin override accent, sidebar and canvas. Implement it by setting the corresponding family tokens on `.op-app` at runtime (e.g. `--op-accent`, `--op-accent-strong`, `--op-accent-text`, `--op-nav`, `--op-canvas`) — derive the related tokens and contrast-check them (text ≥ 4.5:1) before saving, as the template's contrast readout shows. "Reset to defaults" removes the overrides.

## Change a token (kit maintainers)

1. Change it on the canvas first (`officepress.pen` variables) — the canvas is the source of truth.
2. Update `css/families/<family>.css` (family tokens) or the shared block in `css/officepress.css`.
3. Update `tokens/tokens.json` (`$value` and `com.officepress.modes`).
4. Re-check contrast for all 8 family × mode combinations.
5. Run `python3 scripts/check.py --kit` and look at `index.html` in both modes.

## Tokens for other tools

`tokens/tokens.json` is in the W3C Design Tokens (DTCG 2025.10) format. Family × mode values are in `$extensions["com.officepress.modes"]`; every token names its CSS variable in `$extensions["com.officepress.cssVar"]`. Use it to generate Tailwind themes, native app colours, or email styles — don't re-type the hex values.
<!-- officepress-source:end -->
