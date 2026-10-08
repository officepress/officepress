# Review round 6 — Dynamic stage tasks

Date: 2026-10-06. Status: implemented and verified locally; awaiting user review.
[Previous round](../r005-card-details-toolbar/notes.md) retains the Todo/SLA/toolbar
changes. This round corrects both backend checklist behavior and card headings.

## Annotation coverage

| Comment | Request | Applied behavior |
| --- | --- | --- |
| 1 | Remove REQUEST/ID; title replaces it, drag handle on the left | One heading row contains the grip then title. Long titles wrap within the card. |
| 2 | Do not show a task count for a stage with no tasks | The API returns the active stage checklist; the board omits its task icon/count when empty. |
| 3 | Do not show a stale Confirm request details checkbox | Removed definition tasks are excluded from card details. Todo has no count badge when empty; Move to stage stays available. |
| Explicit request | Tasks must dynamically follow the stage in the backend too | All service reads/writes project the current stage's definitions. Saving task edits reconciles existing stored cards in the same transaction. |

## Backend behavior

Stage tasks now have stable `{id, title}` identities. Adding a definition creates
an incomplete task on existing cards in that stage; renaming/reordering preserves
completion by ID; deleting a definition removes its copied task. Clearing a stage
clears its template checklist. Other stages' cards are unaffected. Moving to a
different stage starts that destination's current checklist incomplete, including
when returning to a prior stage; same-column moves remain no-ops.

Definition saves and card mutations share the workflow row lock. Reconciliation
increments only cards whose task data changed, invalidating stale checkbox writes.
Removed IDs are rejected. Comments, attachments, activity, assignees and stage-entry
timestamps are preserved by task-definition edits. Stable IDs and preservation
are implementation choices supporting the user's dynamic-task requirement.

Legacy string definitions receive deterministic IDs. Untagged copied tasks match
surviving definitions by title and occurrence; stale copies disappear from read
projections without a database reset. Normal writes persist the reconciled shape.
Automation tasks are separate additions for the current stage visit, retained
during definition edits and cleared on departure; legacy effect IDs identify
their previous format. This retains the existing automation task action.

This supersedes the earlier proof behavior that applied task edits only on the
next stage entry. Earlier receipts/notes remain historical evidence.

## Verification

- `npm run typecheck` and `npm run build` passed on final source.
- [Receipt 2026-10-06T04-47-33-372Z](../../receipts/2026-10-06T04-47-33-372Z.json)
  passed 54 check groups, with zero failures. It covers dynamic add/rename/reorder/
  delete, empty stages, duplicate titles/IDs, completion retention, stale writes,
  concurrent saves, legacy payloads, persisted rows, HTTP requests and database
  close/reopen. Existing component auth/CSRF/permissions and automation tests pass.
- Initial failed receipt `2026-10-06T04-46-58-474Z` remains retained. It caught
  JSON key-order equality causing unrelated saves to increment card revisions;
  structural equality corrected this, with a no-op-save regression assertion.
- Browser mutations used only port 3041 and the isolated proof database. Deleting
  the occupied Received stage's task immediately removed both its board count
  and details checkbox; adding a new task reached existing cards. Completing then
  renaming it retained `1/1` and the checked state.
- Dragging the left-side grip moved the card to In review and replaced the old
  checklist with two destination tasks plus its stage automation's follow-up.
- At 1127px desktop and 390px mobile, titles and grips fit their cards. Mobile
  document width equalled 390px; grips stayed left of titles. No browser console
  errors were recorded; temporary viewport overrides were reset.
- The manual database was backed up to the ignored
  `.data/backups/r006-before-dynamic-tasks-20261006/` before restarting port 3040.
  No database reset, schema migration, app-shell edits, MCP indexing, commit or push.
- Component-specific PostgreSQL and production acceptance remain unproved.
- Agent workspace validation passed with the same 13 existing preferred-length
  warnings; both ingestion verifiers and `git diff --check` passed.
- After restart, the existing manual card Update the team handbook in Received
  displayed no task count or stale checkbox, without any card/stage mutation.
  Its comments, entry-based due label and activity remained visible. Temporary
  port 3041/tab were stopped; port 3040 remains available for user review.

## Screenshots

- [Empty stage, board and details](empty-stage.png)
- [Renamed task retains completion](renamed-completed-task.png)
- [Mobile card headings](board-mobile.png)
- [Existing manual card after restart](manual-preview.png)
