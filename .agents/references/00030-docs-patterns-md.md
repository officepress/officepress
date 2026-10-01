# patterns.md — patterns

Source: `kit/docs/patterns.md`, original lines 1–57. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Patterns: which template for which screen

Don't start from a blank file. Find the screen closest to what you need, copy its template, and replace the content inside `<main class="op-content">`. Templates are complete, linted and checked against the canvas (`reference/`).

| You're building… | Start from | Family in template | Reference image |
|---|---|---|---|
| A board of items in columns (mail, tickets, requests) | `templates/app-board.html` | communicate | `reference/board/inbox-board-light.png` |
| A pipeline with stages, owners, due dates, drag rules | `templates/workflow-board.html` | operate | `reference/modules/board-hris-hiring.png` |
| Editing a workflow's stages and transitions | `templates/workflow-designer.html` | commerce | `reference/modules/workflow-designer-order-processing.png` |
| A list / table of records with stats on top | `templates/automations.html` | operate | `reference/modules/automations-list-hris-hiring.png` |
| A step-by-step rule editor (trigger → conditions → actions) | `templates/automation-builder.html` | communicate | `reference/modules/automation-builder-inbox-follow-up.png` |
| A form / survey editor | `templates/form-builder.html` | operate | `reference/modules/form-builder-hris-new-hire-information.png` |
| A message / email / WhatsApp template editor | `templates/message-template.html` | commerce | `reference/modules/template-editor-order-processing-dispatch-update.png` |
| Conversations, tickets with a thread and details | `templates/chat.html` | communicate | `reference/modules/chat-ticket-tracker-2042.png` |
| Account settings (identical in every app) | `templates/settings-account.html` | communicate | `reference/settings/account-settings.png` |
| App settings (theme + app sections) | `templates/settings-app-theme.html` | communicate | `reference/settings/app-settings-theme.png` |
| App settings › Updates (version, auto-check, change log, terminal guide) | `templates/settings-app-updates.html` | communicate | `reference/settings/app-settings-updates*.png` |
| Sign in and the rest of auth | `templates/auth/*.html` | operate | `reference/auth/*.png` |

Shell states (aside collapsed, mobile, popovers, agent) are in `reference/shell/`. Open any template with `?mode=dark`, `?aside=collapsed`, `?agent=open`, `?open=pop-notifs` to see the same states live.

## Recipes

### A record detail page (not in templates)
`.op-page` › `.op-page-head` (crumbs, `.op-heading`, actions) › `.op-builder` with `grid-template-columns:minmax(0,1fr) 320px` › main: `.op-section`s · side: `.op-section` with `.op-kv`. Use `.op-status` for the record state.

### A simple list page
`.op-page` › `.op-page-head` › `.op-table-wrap` (filters + `.op-table`). Add `.op-stats` above only if the numbers drive a decision. Empty table → `.op-empty` inside the wrap.

### A settings section for your app
Add a nav item to `.op-settings__nav` (with `.op-icon-slot`) and a `.op-section` to `.op-settings__column`. Footer: helper text left, Cancel + primary right. Destructive things go in a `.op-section--danger` at the end, each as `.op-item-row` + `--danger` button + type-to-confirm `<dialog>`.

### Empty, loading and error states
- **Empty:** `.op-empty` (icon tile, one strong line, one muted line, optional primary button).
- **Loading:** keep the layout, show the frame and headers, fill content areas with `.op-empty` reading "Loading…" or leave columns empty. Don't invent skeleton CSS without adding it to the kit.
- **Error:** `.op-notice` with a title and the fix; field errors use `aria-invalid` + `.op-field__error`.

### Destructive actions
`.op-btn--danger` opens a `<dialog class="op-dialog">`; the final button is `.op-btn--danger-solid`. Irreversible: require typing a word (`data-confirm-text`).

### Agent actions on a page
Whatever the agent changes must be visible on the page immediately and listed in the agent thread as an `.op-action` with an Undo.

## Anti-patterns (seen in generated UIs — avoid)

| Don't | Do |
|---|---|
| Wrap every group in a bordered card | `.op-section` for groups, `<hr>` between rows, plain stacks elsewhere |
| A second primary button in the same region | One primary; the rest secondary / ghost |
| Accent-coloured page or aside backgrounds | `--op-canvas`, `--op-nav` |
| Grey text below `--op-text-2`, or opacity on text | `--op-text-2` is the lightest text |
| Icon + text where the icon adds nothing | Icons on nav, globals, tiles and icon-only buttons; text buttons rarely need one |
| Centred body text in app screens | Left-aligned; centre only empty states and auth |
| New font sizes for emphasis | Weight (700) and colour first |
| Emoji as icons | Lucide icons (`docs/iconography.md`) |
| A custom toggle / tab / dropdown | `.op-switch`, `.op-tabs`, `.op-segmented`, `.op-popover.op-menu` |
| Changing header globals per app | Copy `.op-globals` verbatim |
<!-- officepress-source:end -->
