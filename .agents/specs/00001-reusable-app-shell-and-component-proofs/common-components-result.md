# Combined common-components execution — 2026-10-05

Status: Implemented / awaiting manual approval. The suite remains Planning / Not
Frozen; this bounded proof does not create frozen production implementation tasks.
Owner: [spec index](index.md). Read [the runnable README](../../../proofs/common-components/README.md)
and [visual/review notes](../../../proofs/common-components/tests/evidence/reviews/r001-common-components/README.md)
before copying or evaluating the implementation.

The user approved app-shell and explicitly requested a separate proof based on it,
with left-aside menu items per component. Source was copied into
`proofs/common-components/`; the approved shell's implementation and manual
database were preserved. Port 3040, app ID, session cookie and PGlite directory
are separate. The new proof has Workflows, Message Templates, Form Builder and
Chat View in the menu, with Automations inside workflow stages. The initial
separate Automations entry was superseded by the user's next review. This groups the P-02–P-05 contracts into one runtime;
the earlier individual target paths remain historical plans, not extra apps.

## Implemented behavior

- Shell navigation registry and shared details overlay; feature plugins perform
  dependency checks before registering service/routes/menu. Restart selection
  preserves data. Workflows work without Automations; Chat works without mail or
  templates. Missing identity fails feature activation closed.
- Workflow list, board and designer with mutable Draft/Published status, unrestricted
  movement among current columns, multiple Assignees, Tasks, elapsed SLA, comments and bounded
  text attachments. D-23 supersedes the initial version snapshots and entry guards.
- Automation conditions, immediate/delay/date/SLA timing, ordered local actions,
  immutable run definitions, checkpoints, non-mutating dry run and manual resume
  after a local action failure. No external-message retry is added.
- Templates with automatic/custom variables, email rich text, plain channels,
  safe resolved previews, immutable publications and stored example-send results.
- Forms with outline/canvas/settings, stable identities, reorder/duplicate,
  server validation, preview, immutable publications/responses, signed-in/public
  modes, token hashing and revocation checked again on submission.
- Chat list/thread/details, status, notes, attachment download, per-user saved
  drafts/unread, current published template insertion, real SMTP replies, SSE
  multichannel change hints and periodic/manual email refresh.

All application markup/styles derive from the approved shell and locally retained
kit templates/images. No external source trees are needed at runtime. Adoption
uses copied documented plugins with root-composed Idea schemas and the pinned
0.10.8 ecosystem. No package distribution or SDK adoption change is inferred.

## Evidence and limits

The historical 2026-10-05T08-40-26-977Z SMTP run passed 45 check groups: domain validation,
roles, atomic conflicts and WIP races, historical versions, physical database
reopen, real auth/CSRF endpoints, already-open public-link revocation, SSE,
attachment access, disablement after restart, and two real SMTP handoffs to the
configured designated account. One template example and one Chat reply were
accepted by the mail server. No recipient delivery, automatic retry or uncertain
delivery reconciliation is claimed. Credentials were not copied to client files
or receipts. Failed listener/test-client development receipts remain retained.

Browser review exercises menu routing, workflow task/move/automation interaction,
automation dry run, live template preview, form editing/required validation,
Chat template insertion/draft, and mobile overlay focus/Escape/inert behavior.
Screenshots and final validation details are in the review notes.

This proof uses PGlite; component-specific PostgreSQL verification remains an
adopter task. Incoming mail and social-channel arrivals are fixtures, with no live
Messenger/WhatsApp/Viber integration. Form File fields are unavailable without a
storage adapter. Rich text deliberately supports paragraphs/bold/italic, not
arbitrary HTML. Conversation/history/form responses are bounded aggregates;
production volume needs separate storage design. Automation scheduling is single
process and retains the authorized trigger projection; adopters must decide how
current service-principal policy applies to waiting runs. Shared domain records
require the adopter's own purge/retention/export map.

Inherited app-shell limitations for recovery, account deletion, releases and agent
tools remain recorded. No new component-mutation AI tools or model acceptance
claim is added. Independent consumer/P-06 and production deployment remain
unproved. New common-components approval is pending. MCP index was not updated.

## Workflow feedback round — 2026-10-05

The user requested Stackpress Toastify, working card drag/drop, the
chrisai-designing wireframe right-panel layout, and stage-owned Automations.
[Round 2 notes](../../../proofs/common-components/tests/evidence/reviews/r002-workflow-feedback/notes.md)
record the correction, screenshots and current checks. This supersedes the first
round's menu and inset-card layout; it does not discard its historical receipts.

## Workflow simplification round — 2026-10-06

[Round 3 notes](../../../proofs/common-components/tests/evidence/reviews/r003-workflow-simplification/notes.md)
map every annotation to UI/backend changes. Receipt `2026-10-06T02-39-55-045Z`
passed 46 checks, including legacy payload compatibility, unrestricted destinations,
status persistence, current definitions on old cards, stale saves and retired HTTP
publish rejection. Old publication rows are preserved but unused; no manual database
reset or MCP indexing occurred. Browser save/drag tests use the isolated proof database.
This supersedes earlier workflow version/WIP/entry-check assertions, retaining their
receipts as historical evidence. Common-components manual approval remains pending.

## Multiple assignees and SLA round — 2026-10-06

[Round 4](../../../proofs/common-components/tests/evidence/reviews/r004-workflow-assignees-sla/notes.md)
records D-24's eight corrections: multiple card/stage assignees, avatar-only cards,
live elapsed SLA bars, clickable Automations with preserved drafts, centered header
and direct stage-settings cogs. Receipt `2026-10-06T04-10-00-366Z` passed 49 checks;
typecheck/build and desktop/mobile browser verification passed. Legacy owner data
and automation publications remain compatible; no schema reset or data rewrite was
needed. Display-name assignments remain a proof limitation; personnel directory
integration and component-specific PostgreSQL verification are unproved.

## Dynamic stage task correction — 2026-10-06

[Round 6](../../../proofs/common-components/tests/evidence/reviews/r006-dynamic-stage-tasks/notes.md)
records D-25: current-stage tasks drive backend and UI checklists, including
existing cards after definition edits. Stable IDs preserve surviving completion;
removed copies disappear and stale writes fail. Card headings now start with a
left grip and title, without REQUEST/ID. Receipt `2026-10-06T04-47-33-372Z` passed
54 checks, including HTTP and physical database reopen. Browser checks covered
task removal/addition/rename, retained completion, left-grip drag and mobile fit.
Legacy data adapts without reset; manual preview database backup is retained.
This supersedes copy-on-entry-only task edits in earlier rounds. Manual approval
and the existing production/adopter limitations remain outstanding.

## Card event automation correction — 2026-10-06

[Round 7](../../../proofs/common-components/tests/evidence/reviews/r007-card-event-automations/notes.md)
records D-26's eleven annotations and supersedes the automation Publish workflow.
Definitions save Draft/Active/Paused; events and typed conditions match actual card
mutations. Seven actions include task state, assignees, comments, bounded text
attachments and published email-template messages. Both run checkboxes affect
execution; queued/accepted work retains immutable snapshots. Legacy published
behavior remains readable and archived records are preserved.

Stage forms reuse Form Builder response validation through the authorized card
boundary, with counts per stage visit and atomic response/card metadata. The
stage layout is revised and Form Builder Outline removed. Receipt
`2026-10-06T05-51-56-604Z` passed 62 check groups. Browser verification submitted
an attached form and observed its automation check a task; settings and results
survived a restart. Message transport was controlled, with no actual email sent.
Main preview data was backed up and retained. Current limitations include local
PGlite, one-process scheduling without a transactional outbox, designated-recipient
email, text-file bounds and adopter-owned form file storage. Manual approval and
production/adopter acceptance remain separate.
