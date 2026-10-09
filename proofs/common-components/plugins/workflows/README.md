# Workflows

Copy this plugin into a Stackpress 0.10.8 app, compose its `schema.idea`, add
`./plugins/workflows/plugin` to the manifest after identity/store and before
consumers, and mount `components/index.tsx` in the shell. Load `workflows.css`
after the OfficePress kit and family styles. The root shell owns page rendering.

## Responsibility and public contract

The plugin owns mutable workflows with Draft/Published status, cards, stages,
tasks, comments, text attachments and activity. Identity supplies live callers;
ADMIN designs and changes status, ADMIN or MEMBER changes cards, and READONLY
can inspect. Records are scoped by configured app ID within one company.
Cards resolve the current workflow definition rather than a published snapshot.
Assignees are a bounded list of display names; adopters can replace names with personnel IDs.
Assignments do not grant access.

`types.ts` is the browser-safe public contract. `workflows` service provides:

- `read(caller)`, `card(caller,id)` for projections.
- `save(caller,draft,expectedRevision)` saves fields and status together.
- `createCard(caller,workflowId,title,assignees?)`.
- `move(caller,id,expectedRevision,stageId)` and `update(...)`.
- `applyAction(caller,cardId,effectId,action)` for durable local effects.
- `subscribe(listener)` for committed stage-entry transitions. The event carries
  a stable visit ID, card snapshot, event time and caller projection.

`applyAction` supports comment/task/assignee only. Legacy owner actions retain replacement semantics. The same effect ID never applies
its effect twice. No provider or network send is hidden in this interface.
Consumers import only `types.ts` and obtain `ctx.plugin<WorkflowService>("workflows")`.
The automation plugin is an example of that integration.

## Registration, persistence and errors

`plugin.ts` checks `features.workflows`, identity readiness, the database and
schema listener before registering its service, routes and navigation. The shell
registry receives `/workflow/search`, `/workflow/create`, `/workflow/detail/:id`
and `/workflow/update/:id`. Missing automation service changes nothing here.
Disable the feature/module and restart; retained data is not removed.

POST `/api/workflows` accepts `save`, `create-card`, `move`, `update-card`.
The retired `publish` action is rejected. Every mutation requires authenticated
identity and CSRF. All current columns are valid destinations; unknown stages,
unauthorized callers and stale writes still fail. No allowed-next-stage, WIP,
owner/task/document prerequisite fields are accepted into the saved definition.
A stale change is 409; forbidden is 403; invalid input is 400. Stackpress’s
Frui/Toastify notifier reports results and reloads after conflicts. Internal CAS
revisions protect saves and are not workflow versions. Elapsed SLA uses the
stored stage-entry instant plus the current time target.

New workflows default to Draft; only Published workflows accept new cards.
Changing an existing workflow to Draft preserves existing cards and permits
continued card work. Saving stage edits updates the current definition for all
cards immediately: stage tasks are reconciled by stable definition ID, retaining
completion for surviving tasks (including renames/reorders), adding new tasks
incomplete and removing deleted tasks. Comments, attachments, activity and entry
timestamps remain intact. Assignees apply on the next stage entry; same-column
moves are no-ops. A different-stage entry starts its current checklist incomplete.
Saving cannot remove a stage still occupied by cards. Definition updates and
all card writes lock the workflow row to avoid stranding cards or losing completion
during simultaneous definition edits. Reconciliation and definition save commit
together; changed checklists increment card revisions to reject stale writes.

Card attachments exercise a bounded local text adapter: up to five `.txt` files,
250 KB each, stored as safe `data:text/plain;base64` payloads and downloaded with
the original name. No cloud/file-indexing dependency is implied. Adopters should
replace this adapter for larger files or object-storage requirements. Unsupported
active MIME types and over-limit payloads fail before persistence.

## UI and source fidelity

The board, card layout, workflow details and selected-stage editor follow the
locally retained `workflow-board.html` and `workflow-designer.html`, with the
approved app shell supplying identity/theme/navigation. Stages can be reordered
by dragging or accessible up/down controls. The menu opens a workflow list;
select one to open its board, or create a workflow from the list. The board has
no workflow selector/count group. The editor uses a Draft/Published dropdown,
Assignees and Tasks labels, and has no workflow versions or entry requirements.
Cards use the same unrestricted destination contract via drag/drop or selector.

Full-height columns receive pointer-based card drops, with a visible target and
an explicit grip for touch. The details selector remains a keyboard alternative.
`usePanels()` supplies the shell-owned full-height right dock, resize handle,
expand/collapse, independent scroll, selected-card toggle, replacement, Escape
and mobile focus/inert behavior. The card body owns no duplicate panel header.
An optional checked `automations` prop enables the stage lightning controls and
selected-stage editor action; the public Automations entry stays stage-scoped.

## Verification

`tests/contracts.ts` exports `contracts(server, callers)` for the combined fresh
DB runner. It covers Draft/Published creation and changes, current definitions
on old cards, unrestricted forward/backward/skip moves, no-op same-column moves,
role and app boundaries, unknown stages, stale/concurrent writes, persistent
history, idempotent automation effects and bounded text attachments. Compatibility
fixtures contain the former version/WIP/route/entry fields and verify those no
longer affect moves or leak into new saved payloads. The top-level proof adds
real HTTP auth/CSRF, retired publish rejection, physical reopen and plugin absence.
Read the current receipts and round 3 notes for actual results and limits.

## Existing proof data

No schema reset or destructive migration is required: the existing tables hold
JSON payloads. `storage.ts` maps an old positive published counter to Published
(and zero to Draft), projects only supported stage fields, and resolves each
card against the current workflow. Reads do not rewrite stored data. On an
ordinary save, obsolete workflow fields are omitted; card writes omit embedded
workflow snapshots/version fields while retaining the card's actual data.
`ComponentWorkflowPublication` remains in Idea solely to preserve the old archive;
the runtime never reads or writes it. Remove it only through a separately reviewed
migration. No new workflow publication rows are created. The manual database was
backed up before the round 3 restart; tests used a separate disposable database.

## Multiple assignees and SLA review — 2026-10-06

Cards and stages use `assignees: string[]`; create/update requests accept arrays,
not the retired `owner` input. Names are trimmed, case-insensitive duplicates are
removed, and invalid entries or more than 50 names fail validation. Omitting
create-card assignees uses the source stage defaults; an explicit empty list
creates an unassigned card. On stage entry, a nonempty stage list replaces the
card list; an empty stage list preserves current assignments. Existing cards are
not reassigned merely by editing the stage. Clearing a card list is supported.

Storage reads legacy `owner` payloads as singleton lists without rewriting data.
Normal saves write the new list and omit the old field. No schema migration or
reset is needed. Existing workflow/card history and entry timestamps remain.
Automation `assignee` actions add a person without removing other assignees;
legacy `owner` publications retain their original replacement behavior. Both
legacy owner and current assignees conditions match any assigned name.

Board cards show only avatars with accessible names/tooltips. The kit progress
bar displays elapsed SLA percentage, clamped to 0–100, refreshed each second:
`(now - enteredAt) / (hours * 3600000) * 100`. It is absent for zero hours and
full at/after expiry. The visible Overdue/time-left label is removed. Stage
settings have a cog before Automations and open the selected stage directly.

Designer drafts and selection survive visiting Automations. Existing stages can
open Automations with unsaved edits, including zero tasks. A new unsaved stage
opens a save-and-continue screen; saving is explicit and never silently performed
by navigation. Header title and button are vertically centered.

[Round 4](../../tests/evidence/reviews/r004-workflow-assignees-sla/notes.md) records browser and
49-check local proof evidence. Personnel directory integration, component-specific
PostgreSQL validation and production acceptance remain outside this proof.

## Card details and toolbar follow-up

Card details uses Todo, with Move to stage below its checkboxes. When the current
stage has positive hours, the shared live SLA component shows its progress and
`enteredAt + hours` due date/time (browser locale and time zone) immediately before
Files. The board toolbar uses an arrow-only back control with an accessible label,
Edit and New card; search and actions wrap against available panel width. The
workflow designer omits its breadcrumb. See [round 5](../../tests/evidence/reviews/r005-card-details-toolbar/notes.md).

## Dynamic stage tasks and compact card headings

Stage definitions use `tasks: {id, title}[]`. Keep IDs through renames/reorders and
generate a fresh ID for a new task. The backend projects card checklists from the
current stage on every read/write; stage saves also reconcile persisted cards.
Legacy string definitions receive deterministic IDs and untagged task copies
match by title/occurrence during adaptation. Removed legacy copies do not appear
in responses. No schema reset is needed; read adaptation does not rewrite data.
Normal writes persist the reconciled shape. A removed task ID cannot be toggled.

Automation-added tasks remain explicit additions for the current stage visit,
identified separately from definition tasks and cleared on moving away. Existing
effect IDs identify legacy automation tasks. This preserves the automation task
action rather than treating its output as an obsolete stage-template copy.

Cards start with their title and a left-side grip; the REQUEST/ID caption is gone.
Empty checklists show no board task count or Todo count badge and no old checkbox.
The details stage selector remains usable. [Round 6](../../tests/evidence/reviews/r006-dynamic-stage-tasks/notes.md)
records the latest annotation coverage, backend/API proof and browser evidence.

## Card events and attached forms (review round 7)

Stages carry `formIds`, chosen from published Form Builder definitions when that
service has templates. Stage name/Description span the row; Time target/Outcome
share a row; Assignees is a separate fieldset above Tasks. Its empty retention hint
is removed. Empty assignee definitions still retain existing card assignments.

Every visit has a stable `visitId`. Card mutations emit committed event snapshots
through `subscribe`: enter/exit, check/uncheck, file upload/removal, comment create/
update/removal, form submission, title change, assignee addition/removal and card
creation. Exit uses the departed stage snapshot; no-op mutations do not emit an
action event. Legacy visit IDs adapt from stage ID and entry time.

`loadForm(caller,cardId,formId)` verifies current-stage attachment before invoking
Forms' trusted attached-card interface. `submitForm(caller,cardId,revision,formId,
version,answers,requestId)` rechecks identity, write permission, revision, attachment,
publication and answer validation. Form response and card submission metadata commit
in one database transaction. Request IDs are scoped to card/visit; one attached
form submission is counted per visit. A new stage visit starts fresh counts while
retaining historical responses. Read-only users cannot submit; public form-link
access alone does not grant card access or response browsing.

GET `/api/workflows/forms` supplies administrator template choices, or an authorized
card-specific form with `cardId`/`formId`. POST `/api/workflows` adds `submit-form`.
Card details reuse the Form Builder respondent component and expose comment edit/
remove and file remove controls so those actions can emit corresponding events.
Form Builder is optional; attached-form use fails explicitly when unavailable.

[Round 7](../../tests/evidence/reviews/r007-card-event-automations/notes.md) documents integration,
including automation action/event chaining. The existing dynamic-stage task
projection remains authoritative; removed task definitions cannot be checked by
a new automation action.

## Clean page routing (review round 14)

`/workflow/search` opens the list, `/workflow/detail/:id` the board, and
`/workflow/update/:id` the editor. `/workflow/create` holds an unsaved definition;
its first successful save replaces the URL with the saved record's update path.
Opening Create does not write a database record. An optional stage fragment on
update links preserves stage-settings selection. Existing automation subviews
remain within their workflow page. `/workflows` redirects to the list.
See [round 14](../../tests/evidence/reviews/r014-clean-paths/notes.md).
