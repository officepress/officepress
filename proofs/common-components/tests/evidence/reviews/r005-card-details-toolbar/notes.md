# Review round 5 — Card details and responsive toolbar

Date: 2026-10-06. Status: implemented and browser-verified; awaiting user review.
[Previous round](../r004-workflow-assignees-sla/notes.md) retains backend and data
compatibility evidence. This round changes presentation only.

## Annotation coverage

| Comment | Request | Applied behavior |
| --- | --- | --- |
| 1 | SLA bar above Files with due label when SLA > 0 | Reuses the live board SLA component; optional due date/time includes the browser's time zone. Zero hours renders neither bar nor due label. |
| 2 | Move stage selector below tasks in Todo | Order is Todo heading, task checkboxes, Move to stage, SLA section, Files. |
| 3 | Tasks → Todo | Card details heading is Todo; stage designer Tasks label is unchanged. |
| 4 | Fix toolbar overlap with search | Search wrapper has an explicit flex basis and min-width zero; search box uses border-box sizing and a shrinkable input. Buttons retain their widths and wrap when the available board width is small. |
| 5 | Remove Workflows label | Back button is arrow-only, preserving Back to workflows as accessible name and tooltip. |
| 6 | Edit workflow → Edit | Board button uses Edit. |
| 7 | Remove designer breadcrumb | Removed Workflows › Edit workflow; workflow title and actions remain. |

The due instant is `enteredAt + hours * 3600000`, matching the existing elapsed
SLA contract. It updates when the card enters a different stage or its current
stage hours change. This adds no persisted due field or alternate clock.

## Verification

- `npm run typecheck` and `npm run build` passed on the final source.
- Isolated browser checks on port 3041 verified section ordering, an 8-hour due
  date matching the recorded entry time, and the same SLA percentage on card and
  details. Moving the fixture card to Completed (zero hours) removed both due
  label and bar; returning to In review showed the new entry's deadline and bar.
- At 1127×910 with details open, the search and buttons fit without overlap.
  DOM geometry checks at 1000×910, 900×910 and 390×844 also found no intersecting
  toolbar controls; document width matched each viewport. Buttons wrap as needed.
- Mobile details display Todo, stage selector, due label and bar above Files.
  The toolbar remains usable when details closes. Temporary viewport overrides
  were reset after testing.
- Edit opens the designer with no breadcrumb. The arrow-only back control returns
  to the workflow list. No browser console errors were captured.
- Knowledge workspace validator passed with the same 13 preferred-length warnings;
  both ingestion verifiers and `git diff --check` passed.
- The 49-check backend receipt from round 4 remains prior evidence; no domain
  code changed, so this round did not rerun the full backend suite.
- Manual port 3040 preview restarted with its existing database; browser mutations
  used only the isolated proof DB. Temporary verification tab/server stopped.
  No app-shell changes, MCP indexing, commit or push.

## Screenshots

- [Details and toolbar at 1127px](details-desktop.png)
- [Mobile details](details-mobile.png)
- [Mobile toolbar](toolbar-mobile.png)
- [Designer without breadcrumb](designer.png)
- [Manual preview after restart](manual-preview.png)
