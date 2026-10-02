# OfficePress UI source resources

Owner: [OfficePress UI kit](../context/ui-kit.md). Load this map when creating wireframes, designs or frontend code and needing directly reusable source files, or when auditing the design guide and written documentation.

## Scope and authority

On 2026-10-02 the user explicitly requested local copies of `officepress-kit/css/`, `js/` and `templates/`. These 24 files supplement the complete source content already ingested into references. They are a bounded source-code archive for practical reuse; they do not replace documented knowledge or authorize mirroring other source folders.

The original `/Users/cblanquera/Documents/officepress-kit/` location is provenance only. All source files below are byte-identical local copies. Their SHA-256 hashes, byte sizes, archive date and reference-source identities are recorded in the [ingestion manifest](../scripts/officepress-ingestion-manifest.json). Source archives and reference recovery are checked against one another by the [offline verifier](../scripts/verify-officepress-ingestion.py).

Use the [accepted source decisions](00078-officepress-source-decisions.md) before adapting an example: exclude SMS 2FA and recovery codes, treat purge/delete as production material, keep its shared-dialog wiring discrepancy separate, and replace update command placeholders with instructions for the actual upgrade. Preserve archived bytes; apply adaptations in the consuming project.

## Choose guidance by task

| Task | Local source folder | How to use it |
|---|---|---|
| Style guidance for wireframes, designs and frontend code | [CSS](../resources/officepress-kit/css/) | Use core tokens, dimensions, layout, component states and motion; load core CSS then exactly one family stylesheet. |
| Functional guidance for wireframes, designs and frontend code | [JavaScript](../resources/officepress-kit/js/) | Inspect UI hooks, event handling, theme/aside persistence and icon data; load `icons.js` before `officepress.js` in vanilla examples. |
| Markup guidance for wireframes, designs and frontend code | [Templates](../resources/officepress-kit/templates/) | Start from the closest page structure, controls and state examples, applying accepted corrections when adapting it. |

For applications, use the [Stackpress scaffold](../context/stackpress-scaffolding.md) and translate the kit into [Reactus views](../context/stackpress-views.md). React owns application interactions. The scripts demonstrate UI behavior, not backend persistence, authentication, data fetching or completed business workflows. Use `app-` classes and semantic `var(--op-*)` tokens for app additions; keep shared kit behavior consistent.

The archived folder structure retains template links to sibling CSS, JS and the already-local icons/logos. Original font URLs remain historical source content; reading the KB requires no downloads. Consult the [UI workflows](00080-officepress-ui-workflows.md) for reconstruction when a complete original kit tree is needed. The three archived folders alone do not include the original scaffold, documentation or gallery as loose files.

## CSS and JavaScript files

The [style and behavior reference map](00200-officepress-source-style-and-behavior-implementation.md) routes to complete, searchable source sections. Use these resource files when whole-file access is needed.

- [Commerce family stylesheet](../resources/officepress-kit/css/families/commerce.css) — Commerce family colour tokens.
- [Communicate family stylesheet](../resources/officepress-kit/css/families/communicate.css) — Communicate family colour tokens.
- [Create family stylesheet](../resources/officepress-kit/css/families/create.css) — Create family colour tokens.
- [Operate family stylesheet](../resources/officepress-kit/css/families/operate.css) — Operate family colour tokens.
- [Core OfficePress stylesheet](../resources/officepress-kit/css/officepress.css) — Core tokens, layout, components, responsive rules and motion.
- [Icon library script](../resources/officepress-kit/js/icons.js) — Local icon data and icon initialization.
- [Shared interaction script](../resources/officepress-kit/js/officepress.js) — Shared controls, events and UI state persistence.

## Template files

Use the [template behavior map](00083-officepress-template-behavior-map.md) for purposes and implementation limits and the [screen source map](00204-officepress-source-screen-templates.md) for the complete reference content. The archive includes 11 app templates and 6 authentication templates.

- [App board markup](../resources/officepress-kit/templates/app-board.html) — [complete source and interpretation](00047-templates-app-board-html.md).
- [Check email markup](../resources/officepress-kit/templates/auth/check-email.html) — [complete source and interpretation](00048-templates-auth-check-email-html.md).
- [Email markup](../resources/officepress-kit/templates/auth/email.html) — [complete source and interpretation](00049-templates-auth-email-html.md).
- [Forgot password markup](../resources/officepress-kit/templates/auth/forgot-password.html) — [complete source and interpretation](00050-templates-auth-forgot-password-html.md).
- [Sign in markup](../resources/officepress-kit/templates/auth/sign-in.html) — [complete source and interpretation](00051-templates-auth-sign-in-html.md).
- [Two factor markup](../resources/officepress-kit/templates/auth/two-factor.html) — [complete source and interpretation](00052-templates-auth-two-factor-html.md).
- [Username markup](../resources/officepress-kit/templates/auth/username.html) — [complete source and interpretation](00053-templates-auth-username-html.md).
- [Automation builder markup](../resources/officepress-kit/templates/automation-builder.html) — [complete source and interpretation](00054-templates-automation-builder-html.md).
- [Automations markup](../resources/officepress-kit/templates/automations.html) — [complete source and interpretation](00055-templates-automations-html.md).
- [Chat markup](../resources/officepress-kit/templates/chat.html) — [complete source and interpretation](00056-templates-chat-html.md).
- [Form builder markup](../resources/officepress-kit/templates/form-builder.html) — [complete source and interpretation](00057-templates-form-builder-html.md).
- [Message template markup](../resources/officepress-kit/templates/message-template.html) — [complete source and interpretation](00058-templates-message-template-html.md).
- [Settings account markup](../resources/officepress-kit/templates/settings-account.html) — [complete source and interpretation](00059-templates-settings-account-html.md).
- [Settings app theme markup](../resources/officepress-kit/templates/settings-app-theme.html) — [complete source and interpretation](00060-templates-settings-app-theme-html.md).
- [Settings app updates markup](../resources/officepress-kit/templates/settings-app-updates.html) — [complete source and interpretation](00061-templates-settings-app-updates-html.md).
- [Workflow board markup](../resources/officepress-kit/templates/workflow-board.html) — [complete source and interpretation](00062-templates-workflow-board-html.md).
- [Workflow designer markup](../resources/officepress-kit/templates/workflow-designer.html) — [complete source and interpretation](00063-templates-workflow-designer-html.md).

## Design guide and Markdown ingestion verified on 2026-10-02

The design guide `index.html` and every Markdown file recursively under the supplied `docs/` folder are fully ingested. Exact reconstruction from the references matches all 10 originals byte for byte; there are no missing Markdown files. No new loose HTML or Markdown copy was needed for this check.

| Supplied source | Complete local knowledge |
|---|---|
| `index.html` | [Design guide and gallery, including inline markup and behavior](00038-index-html.md) |
| `docs/components.md` | [Page skeleton, layout, type, icons and frame](00022-docs-components-md-introduction.md); [buttons, forms, choices, status and board](00023-docs-components-md-buttons.md); [rows, menus, agent, tables, workflows, builders, chat, settings and auth](00024-docs-components-md-sections-rows-key-value.md); [dialogs, responsive utilities and JS hooks](00025-docs-components-md-dialog.md) |
| `docs/guidelines.md` | [Theming, colour and typography](00026-docs-guidelines-md-introduction.md); [spacing, shape, components, frame, motion, accessibility and voice](00027-docs-guidelines-md-04-spacing-sizing.md) |
| `docs/iconography.md` | [Icon rules, source, sizing and usage](00028-docs-iconography-md.md) |
| `docs/logos.md` | [Suite and product logo guidance](00029-docs-logos-md.md) |
| `docs/patterns.md` | [Page patterns, states and anti-patterns](00030-docs-patterns-md.md) |
| `docs/workflows/new-app.md` | [Full new-app procedure and checklist](00031-docs-workflows-new-app-md.md) |
| `docs/workflows/new-screen.md` | [Full new-screen procedure and checklist](00032-docs-workflows-new-screen-md.md) |
| `docs/workflows/review.md` | [Full UI review procedure and checklist](00033-docs-workflows-review-md.md) |
| `docs/workflows/theming.md` | [Full theming procedure, examples and checklist](00034-docs-workflows-theming-md.md) |

Comments, code examples, tables, original wording and reversible link rewrites remain recoverable through the manifest. The [coverage receipt](00081-officepress-ingestion-coverage.md) records the larger source set and verification commands. Resource files are exposed by the KB server as attachment metadata; agents can retrieve the existing full source content through the indexed reference passages.
