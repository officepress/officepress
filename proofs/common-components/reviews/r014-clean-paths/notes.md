# Review round 14 — Clean paths and Messages list

Date: 2026-10-08. Local implementation verified; ready for review.

## Changes

- Implemented all nine requested screen paths: `/form/search`, `/form/update/:id`,
  `/message/search`, `/message/detail/:id`, `/message/update/:id`,
  `/workflow/search`, `/workflow/create`, `/workflow/detail/:id`,
  `/workflow/update/:id`. IDs select the record instead of transient component state.
- Messages opens on a table. Row bodies and name links open Update Message;
  View opens read-only saved content, with an Edit message link. New message
  creates a draft then navigates to its real update URL. Existing variable,
  publication, preview and bounded-send behavior remains in the editor.
- Workflow search opens a board, Edit opens the workflow editor, and New workflow
  opens the create path without persisting anything on GET. Successful creation
  replaces that URL with the saved workflow's update path. Stage settings use an
  optional fragment to keep the selected stage through reload.
- Forms rows and New form use clean editor paths. The previously confirmed Save
  behavior still makes forms available for responses.
- Feature-owned page contributions register only after dependency checks. The
  shell renders the active feature and heading and keeps its sidebar highlighted.
  Legacy page URLs redirect; APIs and public respondent URLs retain compatibility.
- Forms, Messages and workflow editors protect unsaved navigation. Unknown record
  IDs do not silently select another saved record.

## Verification

- Typecheck, isolated build and final main build passed.
- [Final 67-check receipt](../../receipts/2026-10-08T01-49-21-298Z.json): zero
  failures and no source-hash drift. All nine paths render their expected headings
  through authenticated HTTP, deny anonymous access, preserve GET safety and
  redirect older links. Disabled plugins remove their pages and legacy redirects.
- Browser: Messages row-body click → update → saved rename → reload → detail;
  New message → update. A missing message ID shows Message not found.
- Browser: workflow list → board → selected-stage editor → reload → board → list;
  create → save → canonical update → reload → board. New workflow name persisted.
- Browser: Forms list → editor → reload retains selection and active navigation;
  browser Back returns to `/form/search`. Main preview shows the Messages list at
  `/message/search`. No browser console errors observed.
- Browser mutations used only `.data/r014-routing-browser` on temporary port 3041;
  its tab and server were closed. Main review records were not changed. An offline
  backup is retained at `.data/backups/r014-before-clean-paths-20261008`.
- Main server 3040 remains running. The original user tab was left untouched;
  a separate review tab shows [Messages](http://127.0.0.1:3040/message/search).
- Screenshot: [Messages list](messages-list.png). This round exercised desktop
  browser routing; PostgreSQL deployment and real mail delivery remain outside
  this local proof. No real messages sent, commit/push or indexing performed.

## Review focus and next step

Review list-to-editor navigation, copyable record URLs and reload/back behavior.
Acceptance closes this local feedback round; further annotations revise it.
