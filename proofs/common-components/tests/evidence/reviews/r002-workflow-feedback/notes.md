# Common components — functional review, round 2

Date: 2026-10-05. Revision: `r002-workflow-feedback`.
Status: revised and awaiting user review. This is a navigation/panel revision;
[R001](../r001-common-components/README.md) remains the historical first build.
The runnable artifact is the app at `http://127.0.0.1:3040/workflows`.

## Feedback applied

1. Replace the inline workflow error/reload banner with Stackpress Toastify.
   The shell mounts `frui/Notifier.Provider`, the same Toastify-backed component
   used by Stackpress 0.10.8's `LayoutProvider`; workflow and automation actions
   call `useNotifier()`. Inline field/form validation in other components is
   outside this correction.
2. Repair card drag/drop. Columns receive drops across their full height. Pointer
   capture handles mouse/pen and the explicit touch grip, highlights the target,
   scrolls near board edges and suppresses accidental selection after a drag.
   Client validation explains blocked transitions; the server still checks
   permissions, revision, allowed stages, tasks and WIP atomically. The details
   selector is the keyboard alternative. This does not add within-stage ordering.
3. Replace the inset card-details section with the shell-owned right dock.
   The selected card toggles it closed; another card replaces it. The dock spans
   the viewport height, keeps its header fixed and body independently scrollable,
   resizes with a pointer or arrow keys, expands/collapses and closes with Escape.
   Mobile uses one full-width modal with inert background, focus trapping and
   focus restoration. Input identity survives task updates. A visible desktop
   detail panel carries across the mobile breakpoint.
4. “Automations are for stages in workflows not a top level menu item.”
   Remove the top-level Automations entry/page. A stage's lightning control and
   the selected stage's editor action open its rule list. Rules/run history are
   stage-filtered; new/edit forms retain the selected workflow/stage. The plugin
   remains independent and the controls disappear when its service is absent.

## Sources and boundaries

Panel behavior was adapted from chrisai-designing's `assets/wireframes/lib/layouts/`
`panel-layout.css`, `panel-detail-stack.html` and `panel-detail-stack.js` into
React-owned state; no imperative library listener was attached to React nodes.
The approved OfficePress shell supplies tokens, styling and mobile overlay rules.
The separate `proofs/app-shell/` implementation and database were not changed.

The proof's bounded providers, local fixture conversations, PGlite evidence,
Form File limitation and independent-consumer gap remain as [documented](../../../../README.md).
No SMTP/model call was repeated, and no new live provider was added. No commit,
push, production acceptance or MCP index update is part of this round.

## Verification

- TypeScript and rendering build pass after the panel/navigation changes.
- [43-check regression receipt](../../receipts/2026-10-05T11-15-12-728Z.json):
  domain contracts, immutable versions, stale/WIP races, authorization/CSRF,
  physical database reopen, HTTP and absent-plugin combinations pass. This run
  preceded the final panel-only presentation refinements, checked in the browser.
- Browser: a blocked drag produced Toastify feedback without moving the card.
  Completing its task then dropping it into In review persisted the move and
  triggered the existing comment/task automation. The move survived a restart.
- Browser: a stage with two rules shows only its rules; Received shows zero.
  Editing a rule retains disabled workflow/stage selectors.
- Browser: right-panel resize from 360px to 420px, expand/collapse, different-card
  replacement, selected-card toggle and close work.
- Mobile at 390px: one modal, inert background, focus on close; Escape closes,
  removes inert and restores the selected card. Document width equals viewport.
- KB validation and both offline ingestion verifiers pass (only existing
  preferred-length warnings); local review links and Git whitespace checks pass.
- Final browser reports no captured console errors. The desktop dock begins at
  y=0 and spans the 720px viewport; resizing to mobile preserves its open state.

## Saved views

- [Full-height desktop details](details-desktop.jpg)
- [Mobile details](details-mobile.jpg)
- [Stage automation list](stage-automations.jpg)
- [Blocked move Toastify](blocked-move-toast.jpg)

## Review focus and approval path

Please check whether the dock matches the intended panel behavior and whether
stage-level automation access is placed correctly. Suggested default: retain
this placement and interaction. Approval accepts this workflow review round;
the remaining common-component review and broader proof acceptance stay separate.
If further changes are needed, revise these named interactions in the next round.
