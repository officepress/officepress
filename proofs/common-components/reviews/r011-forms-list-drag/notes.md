# Review round 11 — Forms list and question dragging

Date: 2026-10-07. Local implementation verified; ready for review.

## Feedback applied

1. Replaced native HTML question dragging with pointer capture. The grip supports
   mouse, pen and touch input; arrow keys on the grip and existing move buttons
   also reorder. A before/after insertion marker shows the drop position. Drops
   outside the canvas leave the draft unchanged. Reordering retains field IDs
   and machine names, selects the moved question and uses the normal draft save.
2. Removed the Reload button from the editor toolbar.
3. `/forms` now opens a forms table. Clicking a row or its title opens the form's
   direct `/forms?form=<id>` editor URL. Back to forms returns to the list; New form
   creates a draft and opens its editor. Normal navigation warns about unsaved edits.

## Verification

- Typecheck, isolated build and main build passed.
- [64-check receipt](../../receipts/2026-10-07T06-58-03-472Z.json) passed with zero
  failures and the existing bounded-proof limitations.
- Browser: row-body and title-link navigation, Back to forms, browser Back,
  direct editor reload, new-form creation/save/list visibility and no Reload button.
- Real pointer drags moved Pronouns upward and downward; keyboard ArrowUp also
  reordered it. Saving and reloading retained the order and stable question IDs.
  An outside-canvas drop left Save disabled. No browser console errors observed.
- Browser mutations used only `.data/r011-forms-browser` on temporary port 3041.
  That server and tab were closed. No form edits or publications were written to
  the main review database. A backup is retained in
  `.data/backups/r011-before-forms-list-20261007`.
- The user's existing tab was left untouched at their request. A separate review
  tab shows the updated [forms list](http://127.0.0.1:3040/forms). Main server 3040
  remains running. Restarting required sign-in in the new review tab.
- Evidence: [main forms list](forms-list.png), [saved reordered editor from the
  isolated test database](reordered.png). Mouse and keyboard were exercised;
  physical touch/pen interaction was not separately tested.

## Review focus and next step

Review the forms list → editor → list flow and question dropping. Acceptance
closes this local feedback round; further annotations revise it. No next phase,
publication or deployment is implied. Form service permissions, immutable
publications and stored response behavior are unchanged.
