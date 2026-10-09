# Chat View adoption contract

Shared conversation UI, distinct from the shell's AI agent. Copy this folder,
`public/chat.css`, shell `panels.tsx`/navigation contracts and the common shell
assets. Compose `schema.idea` and register after identity, data and optional
mail/templates. No sibling proof import or external source tree is required.

The public `ChatService` in `types.ts` exposes caller-scoped reads, draft/read
state, replies/notes, status, fixture arrivals and change subscriptions. The
plugin owns `/api/chat*`, with identity and CSRF on mutations. `create` and
`arrive` are fixture/provider interfaces restricted to administrators and have
no public fixture HTTP route. Real adapters should call equivalent authorized
ingestion services after validating their provider's authentication.

Conversations are bounded JSON aggregates with atomic revision checks. Stable
message IDs and full authorized refetches replace snapshots without appending
duplicates. Per-user draft and unread records are separate from shared history.
Draft saving is explicit; unsaved text is local to the current view. Template
insertion reads only current published versions for the conversation's channel.
Sending an inserted template rechecks its publication ID and stores the exact
version/body; newer publication requires reinsertion. Editing its text makes
it a manual draft. The draft store retains text/kind, not template linkage.

Multichannel mode uses credentialed SSE change hints plus reconnect/visibility
reconciliation. Hints carry no record identifiers or content. Content endpoints
reload identity/scope every request; heartbeat checks session liveness. Email
mode uses manual refresh and a 30-second visible-tab timer. Local fixtures
represent Email, Messenger, WhatsApp and Viber arrivals. This does not implement
incoming mail or live social-provider integrations. The real SMTP adapter is
available only for email; disconnected channels retain reading, drafts and notes.

Reply flow checks the expected conversation revision before reserving a message,
calls mail once, then records accepted/failed without overwriting concurrent
edits. No external call is held inside the SQL transaction. There is no retry or
delivery investigation; a crash can retain `sending` as evidence that the call
started. Notes do not call mail. Attachments are persisted fixture bytes served
as downloads behind the same conversation boundary, not a general upload system.

The UI uses the [Inbox r015 messenger reference](https://wireframes.blanquera.com/inbox/r015-board-automation-sla/pages/messenger)
for its shape, retaining the OfficePress colors and shell. Conversation rows show
the latest message and time; sender names and timestamps sit outside rounded
bubbles. The compact composer retains explicit draft saving, private notes and
template insertion. Details opens on demand with real people, subject, files and
conversation metadata. No illustrative upload, emoji or quote controls are added.
Desktop details dock; mobile list/thread navigation remains in the main content while
details use the shell's exclusive focus-trapped overlay. The shell can replace
details with its agent panel without creating competing overlays.

`tests/contracts.ts` checks normal/denied/invalid/stale paths, caller draft/read
isolation, adapter absence, single accepted/failed handoff and reconstruction.
Root HTTP tests add real auth/CSRF, SSE, attachment authorization and opt-in SMTP.
Production adopters should move unbounded history/files out of these aggregates,
add real identity-to-assignment relations, implement channel ingestion and define
their retention/export/purge policy. Plugin disabling preserves all records.

## Messages and Requests

[Round 9](../../tests/evidence/reviews/r009-message-requests/notes.md) replaces status filter pills
with Messages and Requests navigation. Messages counts unread conversations;
Requests counts pending requests. Channel selection remains in the list footer.
The message's support status is independent of its inbox classification.

New provider/fixture conversations may set `inbox: "requests"` and a display-only
`senderAddress`. Existing records without `inbox` remain in Messages. Authorized
members can accept requests into Messages, block them or soft-delete them through
`resolveRequest` / `POST /api/chat/request`, using the expected shared revision.
Block/Delete remove the record from normal lists; immediate Undo restores it.
The aggregate and audit events remain stored. Requests cannot send before being
accepted; blocked/deleted conversations reject arrivals through this service.

This proof classifies each conversation explicitly. It does not implement a
shared contacts directory, cross-conversation sender blocking or provider-level
spam filtering. Adopters supply authenticated ingestion and sender recognition.
Three request examples use reserved `.example` addresses; their idempotent fixture
helper only adds missing records and never resets prior dispositions.
