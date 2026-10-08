# Generic app-shell review — round 3

Date: 2026-10-05. Phase: proof implementation / visual review.
Status: implemented; ready for the user's review. This supersedes the sample
workspace presentation in [round 2](../r002-kit-alignment/notes.md).

## Feedback applied

1. Removed the desktop logo-row collapse button. The header contains the sole
   desktop collapse/expand control; it continues to persist the 260px/64px aside.
2. Removed the mobile Navigation / Agent / Details switcher. Navigation begins
   with the logo, brand and a close button. Agent has its own header and close
   control. Scrim, Escape, focus trapping/restoration and scroll locking remain.
3. Added expand immediately before close in the desktop agent header. Expand
   fills the content region under the header, keeping the left aside. Restore
   returns to the 400px right dock. The component stays mounted during resizing,
   preserving its draft/model/results. Mobile is already full width.
4. Removed the workspace toolbar, card, details panel, owner/revision display,
   save action and related fetching/state from the shell. Main content is empty.
   Left navigation contains three non-clickable menu examples with no links,
   button handlers or tab stops. Account settings remains in the user menu.

## Responsibility and data

The shell no longer imports the sample Item type or advertises an actions
capability. Default agent context is app identity/version, available features
and permitted settings routes through the read-only `read_app` action. The agent
no longer depends on the sample actions plugin, assumes a selected welcome card,
checks that card's revision or offers rename/Undo starters. Apps own their domain
content/actions; this neutral shell does not impose them on every app.

The existing action-example plugin, schemas, stored records and old receipts
are preserved as separate proof fixtures. No database migration, record removal,
reseed or user theme update was performed. New shell-agent conversation storage
uses an app-context namespace so the removed card example is not silently
restored into the current UI. Older runs remain in the database.

## Verification

- `npm run typecheck`: passed after the final code edits.
- `npm run build`: passed for the updated renderer/assets.
- `npm run prove:agent-context`: **5 checks passed**, including both real
  `google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini` runs. Each reported its
  requested model and made two provider calls. The isolated app had the actions
  plugin disabled and zero domain records before/after both runs. The check also
  covers unauthenticated access, CSRF, configured model validation, replay,
  conflicting run IDs and another account's inability to retrieve a run.
  [Exact successful receipt](agent-context-passed.json).
- The first two harness attempts failed before provider calls because the
  synthetic session did not follow sign-in's redirect to acquire its new CSRF
  token. The harness now follows that redirect and preserves response cookies;
  the application guard was not relaxed. Failed receipts are retained:
  [first](agent-context-failed-TDmnFM.json), [second](agent-context-failed-m0Lax5.json).
- Browser at 1440×900: no desktop aside buttons or interactive menu items;
  expanded agent measured 1180px, matching the content frame, and restored to
  400px. A draft stayed intact across expand/restore. The main region is hidden
  while expanded and restored afterwards, without unmounting settings state.
- Browser at 390×844: branded 300px navigation drawer, no switcher, independent
  agent sheet, no desktop expand control, no horizontal overflow. Close returns
  focus to Open navigation; agent Escape returns focus to Open agent and removes
  the dialog/scroll lock. Review screenshots are listed below.
- Existing browser/config assertions were updated for the new presentation and
  independence from sample actions. Those larger suites were not rerun this
  round; historical full-suite results are not current acceptance of this UI.
- The manual-review server restarted using its existing database. MCP indexing
  was not invoked. No email, commit, push or deployment was performed.

## Browser evidence

- [Desktop docked panel](desktop-docked.jpg)
- [Desktop expanded panel](desktop-expanded.jpg)
- [Mobile navigation](mobile-navigation.jpg)
- [Mobile agent](mobile-agent.jpg)

## Review focus and next step

Check that the left menu/content now feels neutral, the mobile brand header
matches the intended navigation, and full-width expansion covers the intended
content region. The chosen interpretation keeps the global header and left
aside visible while expanding the right panel.

If this round is accepted, continue P-01 manual interaction review using this
neutral shell. Further visual feedback should be resolved here before later
proofs adopt it. This remains a bounded proof, not production acceptance.
