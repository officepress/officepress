# OfficePress UI workflows

Owner: [UI kit](../context/ui-kit.md). Use this local workflow for future app/screen work. The original detailed instructions and scripts remain available through [the complete source map](00074-officepress-kit-source-map.md).

## Source reconstruction when needed

The KB is not a generated application. To inspect the supplied kit as files, use the local verifier's `--reconstruct <new-folder>` option. It recreates text from reference blocks and copies local visual assets into the source layout. The chosen output directory must not exist. This operation is offline and does not execute the reconstructed code.

The reconstructed kit is the original source snapshot, including historical instructions and prototype limitations. Apply current context decisions before adapting it for a new app. In particular, remove recovery-code/SMS-2FA affordances and treat purge/delete as production material, replacing the superseded non-production labels in any adapted UI.

## New app

For runnable OfficePress applications, use the [Stackpress scaffold](../context/stackpress-scaffolding.md) and [Reactus implementation guidance](../context/stackpress-views.md). The vanilla scaffold procedure below is retained for kit-source reconstruction and standalone UI examples; translate its design behavior into the maintained Stackpress app baseline.

Confirm app name, known family, output folder and closest first screen. For an unknown app family, ask rather than infer a family from colour. Use the scaffold's `--name`, `--family`, `--template` and `--out` parameters as documented in the complete source.

The original scaffold vendors CSS, JS, icons, logos, docs, checker and agent-tool instructions into an app. It relies on its original source tree, including the source `AGENTS.md`; reconstruct the complete tree before using that original script. Do not point it at this KB's references folder.

Replace navigation with real app sections, preserving branding, applicable search and footer. Replace main content with the chosen pattern. Set three agent starters to actions the app can actually perform. Add account/app settings and authentication when needed. Keep brand mark, app name, title, `data-app` and agent identity consistent.

Validate with the reconstructed kit's checker, then visually review light/dark, expanded/collapsed aside and 390 px width. There must be exactly one correct family stylesheet and no unexplained changes to vendored kit code.

## New screen

Define the actor and main job in one sentence; make that job the primary action. Choose the closest pattern and its local screenshot. Copy an existing app page and replace only its main content, retaining the frame, navigation and globals.

Use realistic names and volume: source guidance suggests 3–8 board cards per column, 5–10 table rows and a plausible empty state. Compose with kit classes first. App CSS uses `app-` names and semantic tokens; record a missing component as a kit candidate. Inline styles are limited to token-based layout glue, scale-aligned fixed widths and percentage progress.

Include empty/error/disabled states, confirmations for destructive actions, labels, accessible names and stateful ARIA attributes. Validate HTML and app CSS, then review all relevant states.

## Theming

Changing family changes the single family stylesheet and product mark. All UI colours must follow tokens. Preserve `data-mode`, no-flash initialization and `op-mode` persistence. A missing dark-mode token is a kit issue rather than a reason to add ad hoc app dark rules.

Theme customization edits accent, sidebar and canvas. Derive related tokens and verify readable contrast before saving; reset removes overrides. Token maintenance updates the local native design's `op-*` variables, matching CSS and token export together, then checks all eight family/mode combinations. Note that the supplied token JSON's dimension groups are empty; dimensions are in CSS and written guidance.

## Review

Run the supplied checker on relevant HTML and CSS. Every error is a must-fix. Source exception syntax is `/* op-allow: reason */` in CSS or `data-op-allow="reason"` in markup; every exception needs a reason.

Visually compare the closest supplied screenshot at desktop 1440 × 900 and mobile 390 × 844. Cover light/dark, alternate family, collapsed rail, agent open, user/notification popovers and mobile overflow. Inspect primary-action hierarchy, concentric radii, shadow/border roles, unread status, state feedback, motion restraint, copy and accessibility.

Report `PASS` or `FIX`, error/warning counts, findings in severity order with file/line and concrete fix, and any kit candidates. A checker pass alone is not visual or backend acceptance.

## Complete original workflows

- [New app, full steps and completion checklist](00031-docs-workflows-new-app-md.md) — load when using the scaffold.
- [New screen, full steps and completion checklist](00032-docs-workflows-new-screen-md.md) — load when adapting a screen.
- [Theming, code and token-export details](00034-docs-workflows-theming-md.md) — load when changing theme behavior or source tokens.
- [Review, full mechanical and visual checklist](00033-docs-workflows-review-md.md) — load when performing UI review.
