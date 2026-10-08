# Review round 7 — Card event automations and stage forms

Date: 2026-10-06. Implemented and verified locally; awaiting user review.
[Round 6](../r006-dynamic-stage-tasks/notes.md) retains dynamic backend tasks and
card heading changes. Current user annotations supersede automation publishing
and the Form Builder Outline pane; form/template publication history remains.

## All eleven annotations

| Comment | User request | Applied behavior |
| --- | --- | --- |
| 1 | Remove Publish from Automations | Save is the only definition action; retired publish/enable HTTP commands reject requests. |
| 2 | Draft, Active, Paused dropdown | Saved status controls matching and queued execution. |
| 3 | Card actions as triggers, replacing disabled workflow/stage selectors | Enter/Exit Stage, Task Checked/Unchecked, File Uploaded/Removed, Comment Created/Updated/Removed, Form Submitted, Title Changed, Assignee Added/Removed, Card Created. Form Submitted appears only with attached stage forms. |
| 4 | Specific condition fields/operators/inputs | Title: eq/ne/contains/not contains, text. Tasks Checked/Unchecked, Forms Submitted/Not Submitted, Files Uploaded: eq/ne/gt/gte/lt/lte, nonnegative integer. Assigned To: any/all, text list fieldset. Form counts appear only with attached stage forms. |
| 5 | Remove retention hint | The empty stage Assignees fieldset has no “Keep the card’s current assignees.” text. Its underlying retention behavior remains. |
| 6 | Separate Assignees above Tasks; full-width name | Stage name spans the row; Assignees occupies a separate fieldset immediately above Tasks. |
| 7 | Full-width Description; Outcome beside Time target | Applied to the stage editor. |
| 8 | Seven actions with template variables | Check Task, Uncheck Task, Add Assignee, Remove Assignee, Add Comment, Attach File, Send Message. Task selects stage definitions; Send Message selects a published email template and variable values. |
| 9 | Real run-setting checkboxes | Both persisted booleans alter backend execution and remain saved after reopening/restart. |
| 10 | Attach Form Builder forms when templates exist | Conditional Forms section chooses published definitions. Card details can submit attached forms through their existing validation and response storage. |
| 11 | Remove Form outline | Builder has question canvas and settings panes; narrow views stack them. |

## Backend semantics and compatibility

- Workflow mutations commit first, then emit stage-scoped snapshots of actual
  changes. A card has a visit ID; moving starts a new visit, exits capture the
  departed stage, and no-op mutations emit no action event. Rule ancestry prevents
  direct/indirect loops through automation-generated changes.
- Task conditions/actions use the current dynamic stage checklist. Stable task IDs
  preserve completion on rename; removed tasks cannot be checked by an action.
  Historical create-task/owner actions remain executable in old retained runs;
  the new editor only offers the requested seven actions.
- Form responses and card submission metadata commit together. Each form counts
  once in the current visit; history survives a move, while a new visit resets its
  submitted/not-submitted counts. The server rejects unrelated-stage access,
  read-only submission, stale revisions and invalid answers.
- The trusted card attachment interface requires an authorized card caller and
  attachment check; it does not require a public share token. Ordinary form
  endpoints still enforce token/revocation rules. Active/publication/expiry and
  response-access boundaries remain enforced.
- Draft and Paused stop new matching and hold queued work. Active releases queued
  work on its original event/definition snapshot. Later edits affect new events.
  Once-per-visit off permits distinct event runs; duplicate event IDs stay
  idempotent. Stop-on-failure off runs later actions and records all failures.
  Local resume skips completed checkpoints and durable workflow effects.
- Legacy active rules read the previously published snapshot instead of activating
  unpublished draft edits. Archived publication rows and old run history remain;
  no schema reset or destructive migration was performed. Retired predicates are
  evaluated for historical rules; saving edits requires current supported fields.
- Message rendering snapshots the published template and variables at event time.
  Missing providers/variables fail explicitly in action order. A durable handoff
  marker prevents an uncertain send from being automatically retried. There is no
  new email retry/reconciliation or recipient-delivery claim.

## Verification and receipts

- Final `npm run typecheck` and normal/isolated `npm run build` passed.
- [Final receipt](../../receipts/2026-10-06T05-51-56-604Z.json): 62 check groups,
  zero failures, `passed-with-limitations`. It includes actual card mutation
  events, conditional typed predicates, form integration, action chaining,
  pause/reactivate, ordered failure handling, legacy definitions, template
  variables, controlled message handoff, HTTP/CSRF/permissions, database reopening
  and optional-plugin restart tests.
- Earlier failed receipts remain: `2026-10-06T05-35-14-232Z` caught a child-event
  deadline compared to a stale tick instant; later batches now include newly due
  immediate events. `2026-10-06T05-43-29-415Z` caught a test fixture with two active
  message rules when asserting one send; the unrelated rule was paused in that test.
- Browser mutations used only the disposable database on port 3041. Attached New
  hire information to Received; saved Active/Form Submitted/Forms Submitted eq 1/
  Check Task with both settings unchecked. Submitting the validated form checked
  Confirm request details and changed Todo from 0/1 to 1/1. Submission and rule
  settings remained after a real server restart.
- Verified Assigned To list controls and email-template variable fields. Message
  tests used an in-memory transport: no real email was sent in this round.
- Desktop 1127px and mobile 390px verification: no automation/form document
  overflow at 390px; no Form outline; form panes stack. Browser error/warn logs
  were empty. Viewport override was reset and temporary tab/server 3041 closed.
- Main preview 3040 rebuilt/restarted after backing up its stopped database to
  ignored `.data/backups/r007-before-card-events-20261006/`. Existing forms,
  Received's empty task list and other user data remained. The updated stage
  editor is left open. No app-shell changes, commit, push or MCP index update.

## Limits

This remains a single-process PGlite proof. Card commit/event notification is not
a transactional outbox; crash recovery across that gap is unproved. Component
PostgreSQL/production acceptance is not established. Attach File retains the
existing text-only 250 KB/five-file limit. Send Message uses published email
variants and the configured designated-recipient mail adapter; other channel
transports remain adopter work. Form file questions still require storage.

## Screenshots

- [Automation editor](automation-editor.png)
- [Actions and real run settings](automation-actions-settings.png)
- [Form submission checks the task](form-trigger-completed.png)
- [Template variable inputs](message-variables.png) — initial UI verification;
  final previews resolve task/template names instead of stored IDs.
- [Form Builder without Outline](forms-no-outline.png)
- [Mobile Form Builder](forms-mobile.png) / [mobile automation](automation-mobile.png)
- [Preserved main stage settings](manual-stage-settings.png)
- [Preserved main form](manual-forms.png)

Knowledge closeout: workspace validation passed with the same thirteen existing
preferred-length warnings; both source-ingestion verifiers passed. `git diff
--check` passed. Build directories, disposable databases and the manual backup
remain ignored. No published MCP snapshot was refreshed.
