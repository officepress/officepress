# Review round 8 — Messenger-shaped Chat View

Date: 2026-10-06. Implemented and verified locally; ready for user review.

## Direction and source

User request: “for chat view, can you use https://wireframes.blanquera.com/inbox/r015-board-automation-sla/pages/messenger as a basis for the front end shape? color used in the current front end is fine.”

The [reference](https://wireframes.blanquera.com/inbox/r015-board-automation-sla/pages/messenger)
was inspected in the browser. [Reference screenshot](reference.png) and
[previous Chat View](before.png) retain the comparison. This round adapts the
reference's structure to the existing OfficePress shell and color tokens; it
does not copy the Inbox app navigation or infer new provider capabilities.

## Applied layout

- Compact conversation previews with avatar, contact, last-update time, channel,
  latest message snippet and unread marker. Search, status filters, mode selection
  and refresh live in the conversation pane; connection state sits at its foot.
- Thread header shows contact, channel/message count, working status and details.
  Subject/day context is centered. Sender names and timestamps sit outside the
  rounded message bubbles, with incoming avatars outside and replies on the right.
- Private notes keep their distinct color and team-only label. Attachment chips,
  actual send-call state and saved template version remain available.
- A pinned, slimmer composer retains Reply/Internal note, explicit draft saving,
  template insertion and an accessible send/add-note control. Multiline content
  grows within a bounded field. Disconnected channels retain their existing hint.
- Details opens on demand in the shell dock/overlay and shows actual people,
  subject, attachments and conversation metadata. Removed hardcoded example tags.
- Mobile uses list/thread navigation and the existing exclusive details overlay.
  Passive refresh preserves scroll position unless already near the latest message.

## Verification

- Typecheck and both isolated/main builds passed.
- Final [62-check receipt](../../receipts/2026-10-06T09-56-10-252Z.json)
  passed with existing proof limitations and no failures. The initial sandbox run
  passed 47 service checks but could not bind localhost; its failed receipt remains
  at `tests/evidence/receipts/2026-10-06T09-51-55-816Z.json`. The authorized local rerun completed
  HTTP checks and closed its temporary listener/database connections.
- Isolated browser verification at 1280×720 and 390×844: conversation selection,
  compact attachment bubble, details dock/overlay, Escape/focus return, mobile
  back navigation and search. No horizontal page overflow or console warnings/errors.
- Saved a draft, switched conversations and recovered it; added an internal note;
  inserted the published Support reply template with resolved variables. These
  mutations used only the disposable proof database on port 3041. No external
  message was sent. The main review database was backed up and preserved.
- Final main preview remains at [Chat View](http://127.0.0.1:3040/chat).
  Temporary 3041 server/tab and reference tab were closed; viewport was reset.
- [Mobile thread](mobile-thread.png) demonstrates the isolated note check;
  [desktop preview](desktop.png) shows the preserved main review conversation.

## Scope and review

No schema, service, authorization, provider or delivery behavior was expanded.
Incoming/social providers remain fixtures; only configured outgoing email has
an SMTP adapter. There are no speculative attachment-upload, emoji or quoted-reply
controls. This is local reusable-proof evidence, not production acceptance.

Review whether the conversation density, bubble spacing and compact composer
match the intended messenger shape. Approval accepts this frontend review round;
there is no automatic publication, deployment or next-phase action. Revisions
remain in this local proof, and overall common-components approval is separate.
