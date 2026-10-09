# Settings alignment — round 4

Date: 2026-10-05. Phase: proof implementation / visual review.
Status: implemented; awaiting user visual review.

## Feedback applied

1. The non-interactive menu rows now begin at the same 16px left edge as MENU.
2. Removed the redundant Change password link from the security landing page.
3. Removed its redundant Two-factor authentication link. Both features remain in
   the account navigation.
4. Renamed the security landing card to Danger zone.
5. Updated its description to explain export, current-app purge and cross-app
   account deletion, with the irreversible-action notice.
6. Removed the brand caption beside App Settings in the user menu.
7. Removed the APP SETTINGS overline above the settings tabs.
8. Removed “Changes apply to this app only.” from Theme.
9. Replaced the simplified Theme form with the design's Brand and Colours cards:
   logo editor beside light/dark brand previews, separate card actions, detailed
   colour rows with swatches/hex/default/reset, quick picks and an app preview.
10. About starts directly with Version and updates, followed by Change log. It
    uses the design's logo/version/badge row, status panel and footer check
    action. Published release content uses a version metadata column. Settings
    use a centered 760px card column, 24px section gaps and 240px navigation;
    Back to App and its divider come from the design. Removed duplicate page
    introductions and corrected the sticky navigation's extra top offset.

## Sources and bounded adaptations

- Current native design reviewed through Pencil: Theme `BYgvp`, About `Kf2t5`.
- [Design map](../../../../../../.agents/references/00075-officepress-pencil-design-map.md),
  [Colours](../../../../../../.agents/references/00140-pencil-officepress-app-layout-section-colours.md),
  [About layout](../../../../../../.agents/references/00142-pencil-officepress-app-layout-content.md).
- Local kit screenshots `reference/settings/app-settings-theme.png` and
  `app-settings-updates.png`, plus `templates/settings-app-theme.html` and the
  unchanged kit CSS. The current About label and user's removals take precedence
  over historical screenshots.
- Preserved the current local asset-path logo contract; this pass does not add
  file upload/removal. Brand length remains the existing 60-character contract.
- Light colours remain editable; Dark previews the existing family palette and
  explicitly explains that contract. Preview contrast figures are calculated,
  not copied from sample values. No fake upload/auto-update controls are shown.
- Brand and Colours save only their own fields through the existing versioned
  API. Use defaults/reset stage changes; saving is explicit. Cancel restores the
  saved colours without discarding a brand draft.
- The preview is generic, with no workspace/card/Inbox domain requirements.
- About retains real version/build, GitHub lookup and exact authored Upgrade
  Instructions. Missing releases are reported honestly. This pass does not
  invent changelog entries, installation dates, automatic checking or upgrades.

## Verification

- `npm run typecheck`: passed after final edits.
- `npm run build`: passed after final edits.
- Six existing About/theme contract checks passed in a new isolated PGlite
  database. The connection was closed. [Contract receipt](contracts.json).
- Browser at 1154×910: menu heading and icon left edges both measured 16px;
  no interactive placeholder items; simplified user menu; corrected Danger zone
  heading/body; no removed password or 2FA links in that card.
- Settings at 1154×910 and 1440×1380: 760px column, cards begin 24px under the
  64px global header. Full Theme reviewed in light and dark mode.
- At 390×844, About and Theme have no document or main-region horizontal
  overflow. Brand previews stack, colour inputs/defaults wrap below their label,
  and footer actions remain reachable. Quick-pick updates the draft/preview;
  Cancel restores the saved accent. Dark preview disables custom-colour editing.
- The live About check returned “No stable published release is available.”
  The browser console reported no warnings/errors in this review.
- A supplemental disposable save-UI harness did not reach its listening state
  and was stopped. Separate Brand/Colours persistence was not browser-tested
  this round; no additional persistence pass is claimed.
- Existing browser-suite selectors were updated for the new headings, Back to
  App link and Save brand action; the larger model/email suite was not rerun.
- The user's saved Shoppable theme and manual-review database were preserved.
  Global display mode was returned to light after checking dark. No migration,
  MCP index update, email, model call, commit or push occurred.

## Evidence and next step

- [Complete Theme](theme-full.jpg), [dark Theme](theme-dark.jpg)
- [About desktop](about-desktop.jpg), [About mobile](about-mobile.jpg)
- [Mobile Brand](theme-mobile-brand.jpg), [mobile Colours](theme-mobile-colours.jpg)
- [Menu alignment and user menu](navigation-menu.jpg)
- [Danger zone](danger-zone.jpg)

Review [Theme](http://127.0.0.1:3020/settings/theme) and
[About](http://127.0.0.1:3020/settings/about) against the KB design before accepting
this visual round. The manual-review server remains running. This is a bounded
proof revision, not production acceptance.

## Follow-up: remove agent context strip

Removed the CONTEXT / app-name strip from the shared Agent component and removed
its unused display-label prop. The header, conversation, draft and model context
remain intact. Typecheck and build passed; the live browser has zero
`.op-agent__context` elements and retained the existing conversation/draft.
[Updated agent panel](agent-no-context.jpg).
