# Review round 4 — Assignees, SLA and stage navigation

Date: 2026-10-06. Status: implemented and verified locally; awaiting user review.
Prior [round 3](../r003-workflow-simplification/notes.md) remains historical evidence.
The approved app-shell proof is unchanged. Preview: http://127.0.0.1:3040/workflows

## Annotation coverage

| Comment | Request | Applied behavior |
| --- | --- | --- |
| 1 | Center Received against Automations | Stage header aligns both vertically; browser DOM centers both at 535.5px in the desktop check. |
| 2 | Removing tasks must not disable Automations | Button stays clickable; workflow draft and selected stage survive the visit and return. |
| 3 | SLA progress from entering a column to expiry | Kit progress bar uses stored entry time plus current stage hours; live one-second refresh, clamped 0–100; absent at zero hours. |
| 4 | Avatar only; multiple card assignees | Avatar group has names in accessible labels/tooltips only. Card data supports multiple people. |
| 5 | Remove Overdue | Visible Overdue/time-left text removed in favor of the SLA bar. |
| 6 | Multiple people in card details | Assignees supports adding/removing multiple entries, persists via the card API, and survives reload. |
| 7 | Multiple people per stage; Assignees label | Same list control in stage settings; defaults apply on entry. |
| 8 | Cog to left of lightning opens stage settings | Each admin stage header has the cog and opens that exact stage in the designer. |

## Backend and data behavior

- `assignees: string[]` replaces current owner fields in card/stage types, service,
  API, validation and new payloads. Existing stored owners become singleton lists
  on read. Reads do not rewrite data; ordinary saves omit retired fields.
- Names are the proof's existing display-name model, not a personnel directory or
  an access grant. Names are trimmed/deduplicated, 100 characters each, up to 50.
- Source stage defaults apply to new cards unless an explicit array is supplied;
  an explicit empty array means unassigned. On subsequent entry, nonempty stage
  defaults replace assignments; empty stage defaults retain existing assignments.
  Editing stage defaults does not rewrite existing cards. Card lists can be cleared.
- Automation Add assignee actions preserve other people and are idempotent. Legacy
  owner actions retain their original replacement behavior; owner/assignees
  conditions match any assigned person. Existing automation snapshots are retained.
- Role/CSRF/app boundaries and CAS checks remain; stage moves reset `enteredAt`,
  same-stage moves do not, and other edits do not reset SLA time.
- New unsaved stages still open Automations, with an explicit Save workflow and
  continue action before rules can reference that stage. Existing stages require
  no implicit save and edits remain in the designer draft.
- The stopped manual database was backed up to ignored
  `.data/backups/r004-before-assignees-20261006/` before restarting 3040. No schema
  reset, destructive migration or bulk rewrite was performed.

## Verification

- Typecheck and build passed on the final implementation.
- [Receipt 2026-10-06T04-10-00-366Z](../../receipts/2026-10-06T04-10-00-366Z.json):
  **49 checks passed**, zero failures, `passed-with-limitations`.
- New contracts cover multiple/default/cleared/deduplicated/invalid assignees,
  persistence, legacy data conversion, ordered automation additions and retained
  owner compatibility. Fake-clock SLA tests cover 0%, 50%, 100%, overdue clamping,
  no target, move reset and same-stage retention. Existing role, stale/concurrent,
  app isolation, auth/CSRF, physical reopen and dependency checks passed.
- Browser tests used only the isolated receipt database on temporary port 3041.
  Removed the last stage task, added two people, visited Automations and returned:
  both names and the task removal survived without saving. Explicit save succeeded.
- Card details saved two names and retained them after a full reload. Moving to
  Completed removed the SLA bar; returning to Received applied its two assignees.
  Dragging the card into In review succeeded and reset its SLA progress to 0%.
  Another card's live progress advanced from 3% to 5% without a page reload.
- Cog opened In review directly. Added an unsaved stage, opened Automations, used
  explicit Save workflow and continue, then returned to that same selected stage.
- Mobile 390×844: editor, multiple assignees and Automations return work; document
  width equals viewport. No browser console errors captured. Viewport reset.
- Manual preview retains its existing workflow/cards and legacy assignees. Temporary
  verification server/tab closed; manual preview left running on 3040.
- Knowledge workspace validator passed with the same 13 preferred-length warnings;
  both ingestion verifiers and `git diff --check` passed. No MCP index update ran.
- PostgreSQL, personnel directory integration and production acceptance are not
  established. No model calls, SMTP sends, MCP indexing, commit or push occurred.

## Screenshots

- [Stage editor](stage-editor.png)
- [Card assignees and partial SLA](card-assignees.png)
- [Board after dragging](board-after-drag.png)
- [Mobile stage editor](stage-editor-mobile.png)
- [Manual preview after restart](manual-preview.png)
