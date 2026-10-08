# Review round 16 — Visual HTML editor

Date: 2026-10-08. Phase: common-components functional proof, local review.
This updates the existing proof; it does not establish production acceptance.

## Applied feedback

- HTML opens in a WYSIWYG editor. Source code toggles between the visual editor
  and the same editable HTML. Plain text remains a separate alternative.
- Removed View message from the update-page header. The detail route and list
  links remain available.
- Kept OfficePress colors and existing draft/publication behavior.

## Implementation

- `MessageBodyEditor.tsx` uses the installed Frui `useTextEditor` hook with the
  OfficePress toolbar and editor styles; no dependency was added.
- Bold, italic, links and variable insertion retain the editor selection across
  toolbar controls and input fields. The link range is frozen while entering a
  URL. Visual edits retain native undo without replacing the DOM on each key.
- Source edits synchronize into the visual editor through the shared HTML
  sanitizer. Paste is sanitized before insertion. Native paragraph containers
  are allowed so line breaks survive save and delivery.
- Preview, persistence and delivery retain their existing restricted HTML policy.
  This is a bounded rich-text message editor, not an arbitrary HTML designer.

## Verification

- `npm run typecheck`: passed.
- Isolated and main `npm run build`: passed.
- `npm run prove`: **71 checks, zero failures**, passed-with-limitations.
  Receipt: [2026-10-08T02-40-20-382Z](../../receipts/2026-10-08T02-40-20-382Z.json).
  Fresh inspection found no source-hash drift.
- Browser checks covered visual formatting, native paragraph insertion, variable
  insertion at the caret, undo, source editing and switching, selected-text links,
  independent Plain text content and save/reload. No browser console errors.
- An initial selected-text link test exposed lost selection after URL focus.
  The range handling was corrected and rechecked: the selected words retained
  the link, instead of inserting the URL at the beginning.
- Browser mutations used `.data/r016-message-browser`, an isolated data copy on
  port 3041. That server and test tab were closed after verification.
- Main data was backed up offline to
  `.data/backups/r016-before-message-wysiwyg-20261008`. The updated main preview
  remains running on port 3040. Original user tabs were not reloaded or edited;
  a new review tab shows the visual HTML editor.
- Screenshots: [WYSIWYG](wysiwyg-editor.png), [Source code](source-code.png).
- No database migration, real email send, commit, push or production deployment
  was performed. PostgreSQL and production delivery remain outside this proof.

## Review focus

Review visual HTML editing, the Source code toggle and the simplified header.
Further annotations revise these views; acceptance does not authorize release.
