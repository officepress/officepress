# Review round 3 — Workflow simplification

Date: 2026-10-06. Status: implemented and verified within the local proof;
awaiting user review. [Open Workflows](http://127.0.0.1:3040/workflows).
Prior [round 2](../r002-workflow-feedback/notes.md) remains historical evidence.
The approved app-shell source was not changed.

## Annotation coverage

| Comment | Requested correction | Applied result |
| --- | --- | --- |
| 1 | Remove workflow selector/count group | Removed from the board; a Back to Workflows button returns to the list. |
| 2 | Move automation context/title under the action row | Separate heading block below the buttons, verified at desktop and mobile widths. |
| 3 | Remove automation statistics | Cards and their derived display counts removed. |
| 4 | Remove Search rules | Input, search state/filter and unused CSS removed; status filter retained. |
| 5 | Workflows should not have versions | Removed publish service/API action, publication reads/writes and card version binding. |
| 6 | Remove version badge | No version badge or version text in designer/card details. |
| 7 | Add Draft/Published dropdown | Status is validated and saved with the workflow; new workflows start Draft. |
| 8 | Any column; remove allowed-next stages | Removed types, form controls, validation and both client/server destination restrictions. Unknown stages still fail. |
| 9 | Remove WIP limit | Removed field, capacity badge and server capacity checks, including for legacy payloads. |
| 10 | Assignee | Stage field uses the exact requested label. |
| 11 | Remove owner/tasks/document entry requirements | Removed fields, defaults and backend checks; incomplete tasks do not block movement. |
| 12 | Tasks | Exact label replaces Default stage tasks. |
| 13 | Start with a workflow list | Workflows navigation opens a list with status, open action and New workflow. No first-board auto-selection. |

The user additionally requested backend cleanup, especially in the workflow form.
D-23 supersedes older workflow versions and movement constraints. Form/template
publications and automation run snapshots remain separate, unchanged contracts.

## Backend behavior and data preservation

- Draft blocks **new cards**; existing cards remain usable if an administrator
  changes their workflow back to Draft. This is the proof's implementation default.
- Cards resolve current stage definitions. Saving workflow fields does not rewrite
  card tasks/completion, comments, attachments, activity or stage-entry timestamps.
  Assignee and Tasks templates take effect on the next stage entry. SLA uses the
  stored entry instant and current hours. Same-column moves are no-ops.
- Internal revision/CAS checks, roles, CSRF, app scope and valid stage identity remain.
  Workflow save cannot strand a card by removing its occupied stage. Definition
  updates and stage entry lock the workflow row; PostgreSQL behavior is not proved here.
- The current schema stores JSON payloads. A compatibility reader maps legacy
  published counters to status and omits obsolete fields; normal saves write only
  current fields. No reset, destructive schema migration or bulk data rewrite runs.
- Legacy publication rows remain archived in their existing table. Runtime no
  longer reads or writes them; future table removal needs a reviewed migration.
- The port 3040 database was closed cleanly and backed up under ignored
  `.data/backups/r003-before-workflow-cleanup-20261006/`. Its three original cards
  and current workflow remained visible. Browser mutations used only the separate
  automated proof database on temporary port 3041.

## Verification

- `npm run typecheck`: passed after the final source changes.
- `npm run build`: passed after the final mobile layout correction.
- `npm run prove`: **46 checks passed**, zero failures, `passed-with-limitations`.
  Receipt: [2026-10-06T02-39-55-045Z](../../receipts/2026-10-06T02-39-55-045Z.json).
  The later CSS/heading fix received a fresh typecheck/build and browser verification;
  the domain implementation was unchanged after that receipt.
- Contracts exercise status changes, draft/new-card handling, unrestricted skip and
  backward movement, current definitions after reconstruction, retained history,
  idempotent actions, concurrent/stale saves, legacy restricted payloads, archive
  preservation, app isolation and rejection of the retired HTTP publish action.
- Existing automation/template/form/chat tests, real identity/CSRF, physical DB
  reopen and dependency-disable/restart cases passed in the same run.
- Browser: list → create → save Draft → save Published → reload preserved status;
  a test card dragged Received → Completed → Received, then moved by the details
  selector to Completed. A server restart retained the test workflow/status/card.
- Desktop: manual workflow data visible, removed controls absent, editor labels
  and status correct, stage automation heading below actions.
- Mobile 390×844: workflow list/board/editor and stage automations usable; editor
  document width equals viewport, no obsolete labels, no captured console errors.
  A flex-basis spacing issue found during this check was fixed and rechecked.
- KB workspace validator passed with the same 13 preferred-length warnings;
  both OfficePress/Stackpress ingestion verifiers and `git diff --check` passed.
- No new SMTP messages or model calls were required. PostgreSQL/component production
  acceptance, distributed automation workers and independent adopter proof remain
  outside this run. Earlier bounded limitations remain in the main README.

## Screenshots

- [Workflow list](workflow-list.jpg)
- [Workflow editor](workflow-editor.jpg)
- [Stage automations](stage-automations.jpg)
- [Isolated forward/backward drag check](isolated-drag-check.jpg)
- [Mobile stage automations](stage-automations-mobile.jpg)
- [Mobile workflow editor](workflow-editor-mobile.jpg)

The manual preview remains on port 3040. The test tab and temporary 3041 server
are closed after verification. Review the list, simplified workflow form and
stage automation layout next. Common-components approval remains separate from
the already approved app-shell. No commit, push or MCP indexing is part of this round.

## Editor follow-up — 2026-10-06

The next three browser comments remove the Selected stage overline, the stage
number badge in the editor header, and the read-only Card visibility / Company
members field. All three were removed; the workflow description now reads
“Name, purpose and status.” The unused header index and visibility CSS were also
removed. Stage order labels in the stage list remain. The removed visibility
field had no backend setting; existing role/app access checks stay in force.

Typecheck and build passed. The port 3040 preview was restarted using the existing
database, and browser inspection confirmed the three removals. No data changes
or domain test rerun was needed for these display-only edits. See the
[updated editor screenshot](workflow-editor-followup.jpg).
