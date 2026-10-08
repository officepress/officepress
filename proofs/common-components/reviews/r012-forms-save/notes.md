# Review round 12 — Forms name, status and Save

Date: 2026-10-07. Local implementation verified; ready for review.

## Feedback applied

1. Renamed the Form Builder navigation and shell heading to Forms, and the
   Message Templates navigation to Messages. Existing feature routes are retained.
2. Replaced the Back to forms/title row with editable Form Name and Status fields.
   Status uses the existing backend states, Draft and Active. Forms in the sidebar
   still returns to the list; direct editor URLs remain supported.
3. Removed the toolbar's Saved/Unsaved changes text and secondary Save button.
   The primary Publish action is now Save, with a save icon. Unsaved navigation
   warnings and normal success/error feedback remain.
4. Save atomically stores edits and status. Active makes the saved definition
   available to respondents, retaining immutable publications and response history;
   Draft stops responses without deleting history. Unchanged Active saves do not
   create duplicate versions. The forms list reflects Draft/Active status.

## Verification

- Typecheck, isolated build and main preview build passed.
- [66-check receipt](../../receipts/2026-10-07T07-12-30-424Z.json): zero failures,
  with the existing bounded-proof limitations. New domain/HTTP checks cover the
  combined name/status save, invalid status, stale writes, Draft response blocking,
  reactivation, immutable response meaning and no duplicate versions.
- Isolated browser: changed Event registration's name, saved as Draft and reloaded;
  name and status persisted. Saved as Active, retaining the prior publication and
  creating version 2 for the changed definition. Share instructions match Save.
- Main browser: checked Forms/Messages labels, the forms list, direct editor,
  Form Name, Draft/Active selector and exactly one Save control. No browser console
  errors observed. Desktop layout checked at the browser's 1280×720 viewport;
  this round does not establish additional physical touch/mobile verification.
- Browser mutations used only `.data/r012-forms-browser` on localhost port 3041.
  That temporary server and tab were closed. No form edits or publications were
  written to the main review database. Offline backup:
  `.data/backups/r012-before-form-save-20261007`.
- Existing user tabs were left untouched. A separate review tab shows the updated
  [Event registration editor](http://127.0.0.1:3040/forms?form=event-registration).
  The main preview on port 3040 remains running against its existing database.
- Evidence: [main editor](editor.png), [saved name/status in isolated data](saved-status.png).

## Review focus

Review the name/status row and single Save flow. Current annotations supersede
round 11's Back to forms control. This is a local reusable proof; no production
deployment, Git commit/push, knowledge indexing or external message send occurred.
