# SKILL.md — SKILL

Source: `kit/.claude/skills/officepress-ui/SKILL.md`, original lines 1–48. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when reviewing inherited kit instructions or recreating its tooling; this is source evidence, not an active instruction file.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~markdown
---
name: officepress-ui
description: Build or edit OfficePress app UI (vanilla HTML/CSS/JS) with the OfficePress UI Kit — app frame, op-* classes, op-* tokens, family themes, Lucide icons, product logos.
when_to_use: Use whenever writing or changing HTML, CSS or JS for an OfficePress app (Inbox, Chat, Drive, Resourcing, Accounting, Orders and the other suite apps), or any file that loads officepress.css. Also for questions about OfficePress colours, spacing, type, components, icons or logos.
paths:
  - "**/*.html"
  - "**/*.css"
---

# OfficePress UI

You are building UI for the OfficePress suite. The kit is the truth: compose from its classes and tokens, copy from its templates, and validate with its linter. Do not improvise a visual style.

## Locate the kit

`KIT` = `officepress/` if that folder exists at the project root (an app with the kit vendored), otherwise the project root (the kit itself — it contains `css/officepress.css`). All paths below are relative to `KIT`.

## Read before writing (progressive — only what the task needs)

| Need | Read |
|---|---|
| Which screen layout to use | `KIT/docs/patterns.md` |
| Markup for any component / JS hook | `KIT/docs/components.md` (search it for the class) |
| A rule, token or measurement | `KIT/docs/guidelines.md` |
| Icons | `KIT/docs/iconography.md`, names in `KIT/icons/icons.json` |
| Logos | `KIT/docs/logos.md`, files in `KIT/logos/logos.json` |
| What it should look like | `KIT/reference/**.png` (kit only) and `KIT/templates/*.html` |

## Non-negotiables

1. **Frame:** every app page = `.op-app` › `.op-aside` + `.op-main` › `.op-header` + `.op-body` › `main.op-content` + `.op-agent`. Copy it from an existing page or template; only nav items, title, header actions and `<main>` change.
2. **Header globals** are identical everywhere and in this order: notifications · agent · theme · user. Copy `.op-globals` verbatim.
3. **Theming:** load `css/officepress.css` then exactly one `css/families/<family>.css`; mode is `data-mode` on `<html>` with the no-flash head script. Never write `[data-mode="dark"]` rules in an app.
4. **Colour:** only `var(--op-*)`. No hex / rgb / hsl / named colours. Links `--op-accent-text`; primary fills `--op-accent-strong`; unread is always `--op-dot` green. Never another family's colour (except `data-family` identity tags).
5. **Scales:** font sizes 11 / 12 / 13 / 16 / 20 (28 auth only), weights 400 / 700, spacing multiples of 4 (`--op-space-*`), radii 4 / 8 / 12 / 16 / full and concentric (outer = inner + padding).
6. **Classes:** `op-` is the kit's namespace — use only classes that exist in `css/officepress.css`. Your own classes are `app-…` in `app.css`, using tokens only.
7. **Icons:** Lucide via `<svg class="op-icon" aria-hidden="true"><use href="#i-NAME"/></svg>`; name must be in `icons/icons.json`. Icon-only controls need `aria-label`. No emoji.
8. **State in attributes:** `aria-current`, `aria-selected`, `aria-pressed`, `aria-checked`, `aria-expanded`, `aria-invalid`, `data-unread`. The CSS and `js/officepress.js` read them — don't add `is-active` classes or new JS for behaviours the kit already has.
9. **Restraint:** one primary button per region; `.op-section` for groups, not nested cards; elevation from the kit's shadows, borders only for structure/state; no gradients, no new animations.
10. **Don't edit** `css/officepress.css`, `css/families/*`, `js/*` from an app. If the kit is missing something, build it in `app.css` and say so in your summary as a kit candidate.

## Procedure

1. Pick the pattern (`docs/patterns.md`) and copy the template / existing page.
2. Replace content with realistic data; look up each component in `docs/components.md`.
3. Run `python3 KIT/scripts/check.py <changed files>` and fix every `E` line. Exceptions only with a reason: `/* op-allow: why */` or `data-op-allow="why"`.
4. If you can open a browser, check `?mode=dark`, `?aside=collapsed`, `?agent=open` and 390 px width. Otherwise say you couldn't verify visually.
5. Summarise: what changed, lint result, anything you couldn't verify, kit candidates.
~~~~
<!-- officepress-source:end -->
