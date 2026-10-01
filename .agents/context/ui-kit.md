# OfficePress UI kit

The supplied kit is a vanilla HTML/CSS/JavaScript reference implementation. Its documentation, scripts, manifests and examples are fully translated into local references; its SVG/PNG assets are local resources. The KB does not need the original Documents directory or a website.

## Implementation structure

All OfficePress applications use the [Stackpress baseline](stackpress-scaffolding.md). Translate the reference kit into [Reactus views](stackpress-views.md). Script loading below describes the preserved vanilla example; React owns interactions in the application implementation.

Load core `officepress.css`, then exactly one family stylesheet. Load `icons.js` before `officepress.js`. Use kit `op-` classes; compose new app-owned components with `app-` classes and `var(--op-*)` tokens in app CSS loaded last. Keep the kit itself consistent across apps.

The shared JS implements controls such as theme/aside toggles, popovers, agent-panel visibility, tabs, choice controls, dialogs and command-copy feedback. It is not a backend or a complete implementation of data fetching/saving, authentication, drag/drop or business workflows.

Theme persistence uses `localStorage["op-mode"]` and `data-mode` on `<html>`. Aside persistence uses `op-aside:<body data-app>`. Review parameters select family/mode, collapsed aside, open agent and open popovers for inspecting a page. Keep the no-flash theme initialization.

## Starting points

The kit contains 11 app templates, 6 auth templates and a gallery. Use the nearest template and adapt its main content while keeping shared chrome and global-control order consistent. Preserve the individual template's instructions and state patterns.

Read the appropriate workflow before scaffolding, adding a screen, theming or reviewing. When reconstructing a runnable kit from reference excerpts, apply accepted corrections before treating a historical template as ready for a new app. The original scaffold expects an `AGENTS.md` at its own kit path; the excluded source instruction files are available as reference content and must be reconstructed at their expected paths if that original scaffold is used.

## Local workflows and references

- [Adapted local UI workflows](../references/00080-officepress-ui-workflows.md) — load when starting an app, adding a screen, applying a theme or reviewing UI.
- [Template selection and behavior](../references/00083-officepress-template-behavior-map.md) — load when choosing an example and understanding its implementation limits.
- [Complete source map](../references/00074-officepress-kit-source-map.md) — load when retrieving documentation, full code examples, tokens or original tooling.
- [Local visual files](../references/00077-officepress-visual-asset-map.md) — load when placing an icon/logo or comparing a screen against an image.
- [Coverage and local reconstruction](../references/00081-officepress-ingestion-coverage.md) — load when verifying fidelity or rebuilding an exact source tree for inspection.

## Dependencies and evidence

Original HTML includes optional remote Google Fonts links; source license/documentation URLs remain as attribution. Reading this KB and reconstructing its sources are offline operations. Do not download fonts or add icons from the network merely to consult the knowledge base. Existing local fonts/fallback stacks can differ visually from the supplied screenshots.

The icon collection is pinned to Lucide 1.49.0 with 144 standalone SVGs, an SVG sprite and local JS icon data. Preserve the local license notices when using the icons. The logo collection contains 4 suite assets and 23 product marks. Thirty-four screenshots preserve supplied visual states.
