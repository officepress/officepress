# Review round 15 — Message content tabs

Date: 2026-10-08. Phase: common-components functional proof, local review.
This updates the existing proof; it does not establish production acceptance.

## Applied feedback

- Removed the entire Channel selector, including Viber, from the update form.
- Removed the Message content / channel / Rich text header above the subject.
- Inspected the supplied [Resourcing message editor](https://wireframes.blanquera.com/hris/r031-careers-employee-portal/template-form?template=interview-invitation)
  in the browser, including its HTML source and Plain text tabs and previews.
- Added HTML and Plain text tabs, independent editable bodies, active-mode
  preview, character counts and cursor-based variable insertion. HTML includes
  bold, italic and link controls. Arrow/Home/End keys switch tabs and focus.
- Added the same representation tabs to the saved message detail view.
- Preserved OfficePress colors, existing message names/channels, publication
  semantics and clean routes. Only fixture data in an isolated copy was edited.

## Persistence and rendering

- Added optional `bodyFormat: 'html'` and `textBody` fields to the JSON draft.
  New HTML email drafts keep HTML in `body` and a separate plain-text alternative.
  Both are validated and persisted through the existing guarded save API.
- Legacy email records are adapted in editor memory. Opening or switching tabs
  does not save them. Old publications keep their previous fixed-tag rendering;
  saving/publishing a revised email writes the independent representations.
- The shared browser/server HTML policy uses pinned `sanitize-html` 2.18.0.
  Variables are escaped before HTML substitution; resolved HTML is sanitized.
  Scripts, images, embeds, event/style attributes and unsafe URL schemes do not
  enter the rendered preview or email. Plain text is rendered as text.
- No database migration, provider integration or real message send was performed.

## Verification

- `npm run typecheck`: passed.
- Isolated and main `npm run build`: passed.
- Final `npm run prove`: **71 checks, zero failures**, passed-with-limitations.
  Receipt: [2026-10-08T02-15-54-623Z](../../receipts/2026-10-08T02-15-54-623Z.json).
  Fresh inspection found no source-hash drift.
- Added contract checks for non-mutating legacy adaptation, independent body
  validation, variables unique to either body, escaped substitutions, unsafe HTML
  and URLs, save/reopen, immutable publication and preservation of old versions.
- Browser checks: Plain text editing and variable insertion, matching resolved
  preview, arrow-key tab changes, retained HTML, save/reload of both alternatives,
  saved detail tabs, and bold/italic/link insertion. No browser console errors.
- Browser mutations ran against `.data/r015-message-browser`, a separate copy,
  on port 3041. Its server and tab were closed after verification.
- Main data retained with an offline backup at
  `.data/backups/r015-before-message-editor-20261008`. Main preview remains on
  port 3040. Original user tab was not reloaded or edited; the separate review
  tab shows the updated Plain text view.
- Screenshots: [HTML](html-editor.png), [Plain text](plain-text-editor.png).
- Verification is local PGlite and desktop browser coverage. PostgreSQL,
  production deployment and real delivery are outside this round.

## Review focus and next step

Review the removed controls, HTML/Plain text editing, and matching preview.
Acceptance closes this feedback round. Further annotations revise these views;
acceptance does not authorize a commit, push, deployment or production rollout.
