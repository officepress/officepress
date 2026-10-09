# Review round 13 — Form toolbar simplification

Date: 2026-10-07. Local implementation verified; ready for review.

## Applied feedback

- Removed the Forms list's Status column, keeping Form, Access and Responses.
- Removed the editor's Status selector and moved its single Save button beside
  Form Name. The tabs no longer contain a Save button.
- Changed the editor's shell heading to Update Form. The list heading and sidebar
  entry remain Forms. The title is rendered from the editor URL on the server.
- User confirmed: “Save makes the form available (Recommended).” Save therefore
  uses the existing atomic active-save operation. It is enabled for new/inactive
  forms even without edits. Share retains Stop accepting responses and its help
  text now explains reopening through Save. Permissions/expiry remain enforced.

## Verification

- Typecheck and build passed. An initial typecheck caught the server URL shape;
  the heading now reads its serializable search string with URLSearchParams.
- [66-check receipt](../../receipts/2026-10-07T07-26-14-959Z.json): zero failures;
  every recorded source hash matches the implementation. Existing proof limits
  remain; this does not establish production PostgreSQL/provider acceptance.
- Browser: Forms list has three columns, editor has Update Form and one Save next
  to Form Name, and no Status selector. Default 1280×720 desktop view inspected.
- Created a form in isolated data, saved its name, reloaded and confirmed Active
  version 1. Stopped responses through Share, then saved without edits to reopen;
  the form became available again without creating a duplicate version. No browser
  console errors observed. No external responses or messages sent.
- Test writes used only `.data/r013-forms-browser` on localhost port 3041. Its
  temporary server and tab were closed. Main review data was backed up offline to
  `.data/backups/r013-before-forms-toolbar-20261007`; no main form edits were saved.
- Port 3040 remains running with the updated build. The existing user tab was
  untouched; a separate review tab shows the updated editor.
- Evidence: [Forms list](forms-list.png), [main editor](editor.png),
  [isolated saved form](saved-form.png).

## Review focus and next step

Review the three-column list, Update Form heading and Save placement. These
annotations supersede round 12's visible status controls. Acceptance closes this
local feedback round; further annotations revise it. No commit, push, deployment
or knowledge indexing was performed.
