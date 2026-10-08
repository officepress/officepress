# Review round 9 — Messages, Requests and sidebar states

Date: 2026-10-07. Implemented and verified locally; ready for review.

## Feedback applied

1. The user identified missing Messages and Requests navigation from the
   [messenger reference](https://wireframes.blanquera.com/inbox/r015-board-automation-sla/pages/messenger).
   Round 8 had adapted bubbles/composer but retained support-status pills. Those
   pills are now replaced with Messages and Requests rows, icons and live counts.
   All-channels/email selection and refresh move to the list footer.
2. Active and hover backgrounds for all app navigation links now extend to both
   edges of the left aside. Text/icon alignment remains at the existing inset.
   The treatment also applies to collapsed navigation and the mobile overlay.

The [Requests reference](https://wireframes.blanquera.com/inbox/r015-board-automation-sla/pages/requests)
was inspected in the browser: request summaries, a full incoming-message preview,
and Accept/Block/Delete actions. The proof now supplies those controls backed by
persisted, revision-checked operations. Accept moves a request to Messages;
Block/Delete remove it from the queue, with immediate Undo. Delete is a stored
soft deletion, not a data purge. Requests remain separate from support statuses.

## Data and boundaries

- Existing records without an inbox field remain Messages. No schema migration
  or reset was needed: inbox state lives in the conversation's JSON aggregate.
- Three request examples with `.example` sender addresses were added to the local
  review database after backup at `.data/backups/r009-before-requests-20261007`.
  The idempotent helper skips existing IDs, including previously resolved examples.
- Requests reject replies/notes before acceptance. Blocked/deleted conversations
  reject service arrivals. Member/write permission, CSRF and stale revision checks
  apply; read-only and out-of-scope users cannot resolve requests.
- Incoming providers remain fixtures. This bounded proof has no shared contacts
  directory or provider-level sender block list. Classification/blocking is per
  conversation; no live provider integration or external send was introduced.
- Browser action tests used only the separate disposable database on port 3041.
  The main database's existing conversations, notes and drafts were preserved.

## Verification

- Typecheck, isolated build and main build passed.
- [64-check receipt](../../receipts/2026-10-07T01-37-57-590Z.json) passed with the
  existing proof limitations and zero failures. Added service/HTTP checks cover
  accept/block/delete/restore, auth/CSRF, stale actions, legacy compatibility,
  no premature mail handoff and persistence across service reconstruction.
- Desktop browser: Messages/Requests navigation, request preview, Accept →
  Messages, Block → Undo, Delete → Undo, request count updates and no console errors.
- At 390×844: Requests list/back navigation, message preview and actions fit
  without horizontal overflow; mobile app navigation remains exclusive.
- Measured desktop hover and active backgrounds at x=0..260, equal to the aside;
  mobile active background at x=0..300, equal to its aside; collapsed rail at
  x=0..64. Closing already-closed details is a no-op, preserving selection focus.
  Hover was exercised
  with a real pointer interaction, not only inferred from CSS.
- [Sidebar hover evidence](sidebar-hover.png), [mobile request](mobile-request.png),
  [main Messages](messages.png), and [main Requests](requests.png).
- Temporary preview server/tab closed, viewport reset; main review server remains
  on [Chat View](http://127.0.0.1:3040/chat).

## Review focus

Does Messages/Requests now match the reference's intended navigation? Do the
full-width sidebar highlights match the requested edge treatment? Approval accepts
this local review round only. Further feedback revises this proof; no publication,
deployment or automatic next phase is implied, and overall proof approval remains
separate.
