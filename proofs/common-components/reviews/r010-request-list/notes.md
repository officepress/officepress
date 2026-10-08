# Review round 10 — Compact request list

Date: 2026-10-07. Implemented and verified locally.

## Feedback applied

- Removed Accept, Block and Delete from each request list card.
- Removed request subject lines from the list. Empty-message snippets no longer
  fall back to the subject. Sender details and message snippets remain visible.
- The selected request's full preview retains its subject and actions.

## Verification

- Typecheck and application build passed.
- Browser at 1092×903: all three request cards contain one preview button and no
  action controls or subject lines. Selecting Rina Delgado updates the full
  preview, which still contains its subject and Accept/Block/Delete controls.
- [Screenshot](requests.png). The existing review database was preserved and the
  rebuilt server remains available at [Chat View](http://127.0.0.1:3040/chat).

This is a frontend-only follow-up to [round 9](../r009-message-requests/notes.md).
No service or schema behavior changed; the broader backend suite was not rerun.
