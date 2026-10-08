# Automations

Copy this plugin and schema into an OfficePress Stackpress 0.10.8 app after
Workflows. Workflows mounts `components/index.tsx` for one selected stage;
the shell loads `automations.css`. There is no separate navigation item.
The entry accepts `{csrf, user, path, workflowId, stageId, onBack}`.

## Responsibility and dependencies

Automations owns saved rule status, matching, timing, ordered execution and run
checkpoints. It consumes public WorkflowService, TemplateService and MailService
contracts; feature plugins retain ownership of cards, forms, templates and mail.
`plugin.ts` checks configuration, identity, database, generated schema and
Workflows before registering. Missing Workflows disables Automations; missing
Automations leaves Workflows available. Message providers are optional and resolved
when used. Activation changes require restart and preserve stored data.

GET `/api/automations` returns definitions, runs and published template choices.
POST requires identity and CSRF: `save`, `dry-run`, `resume`. Saving/resuming is
ADMIN-only; authenticated company readers can inspect and run non-mutating tests.
Retired `publish` and `enable` commands return 400. Stale revisions return 409.

## Definition contract

Save **Draft**, **Active** or **Paused** directly; there is no Publish button or
user-facing automation version. Only Active definitions accept events and execute
queued runs. Paused/Draft definitions retain queued runs; reactivation releases
them. A saved edit affects future events; accepted runs keep immutable copies of
their definition, event card, action order and rendered message variables.

Fourteen committed card events are supported: stage enter/exit, task checked/
unchecked, file uploaded/removed, comment created/updated/removed, form submitted,
title changed, assignee added/removed and card created. Exit events carry the prior
stage/visit snapshot. Actual changes emit events; no-op actions do not. Action
chains record their originating rule IDs so a rule cannot recursively trigger
itself through another rule.

Conditions use all/any matching, with field-specific values/operators:

| Field | Operators | Input |
| --- | --- | --- |
| Title | eq, ne, contains, not contains | Text |
| Tasks Checked, Tasks Unchecked | eq, ne, gt, gte, lt, lte | Nonnegative integer |
| Forms Submitted, Forms Not Submitted | eq, ne, gt, gte, lt, lte | Nonnegative integer |
| Files Uploaded | eq, ne, gt, gte, lt, lte | Nonnegative integer |
| Assigned To | any, all | List of names |

Form events/conditions require attached stage forms. Counts reflect current-stage
checklists, current attachments, and distinct submitted attached forms in the
current visit. Title contains comparisons and exact assignee matching ignore case;
title eq/ne retain case. Timing supports immediate, delay, date/time and minutes
before the elapsed stage SLA expires.

## Actions and run settings

The editor offers Check Task, Uncheck Task, Add Assignee, Remove Assignee,
Add Comment, Attach File and Send Message. Task actions select stable stage task
IDs and reject tasks absent from the card's current stage. Files retain the proof's
text-only, 250 KB limit and five-file card limit.

Send Message selects a published **email** template and recipient. Template
variables accept literals or card/stage/workflow substitutions; automatic inputs
include user.name, company.name, recipient.email, card.title, card.assignees,
stage.name and workflow.name. Missing/invalid variables or unavailable providers
fail explicitly. Templates are rendered and snapshotted at event time. The mail
adapter retains its designated-test-recipient restriction. Other message channels
need an adopter transport and are not offered as working sends.

The two checkboxes are persisted booleans. Once-per-visit deduplicates a rule/card/
visit; when unchecked, each distinct matching event can run. Duplicate event IDs
remain idempotent. Stop-on-failure stops at the failed action; when unchecked,
later actions execute and the run retains its failures. Resume retries only failed
local actions and skips completed checkpoints. Workflow effect IDs protect local
mutations across a crash between application and checkpointing.

A message handoff is durably claimed before calling mail. An uncertain handoff is
never automatically repeated; its run is not offered a resume control. There is
no delivery reconciliation, recipient-delivery claim or automatic email retry.
Preparation errors obey action order and stop/continue settings too.

Legacy active definitions load their prior published snapshot, preserving behavior
rather than activating unpublished edits. Historical publication rows and old run
snapshots remain. Legacy create-task/owner actions and predicates remain executable
in retained records, but saving edits requires selecting supported controls.

## Verification and limits

`npm run prove` uses isolated PGlite, fake clocks, controlled failure adapters and
an in-memory mail transport for these new automation message checks. No real SMTP
is sent by that command. The suite covers event chains, statuses/queued work,
typed conditions, form submissions, immutable snapshots, stale saves, checkpoints,
missing providers and uncertain handoffs. HTTP tests reject retired commands.
See [round 7](../../reviews/r007-card-event-automations/notes.md) for browser evidence.

This is a single-process local proof, not distributed scheduling or production
acceptance. The event notification follows the committed card mutation; it is not
a transactional outbox, so crash recovery between commit and dispatch is not
established. The worker checks up to 25 batches per tick and continues via its
scheduler. Runs retain the authorized event caller; adopting apps with changing
employment policy need current-principal resolution before execution.
