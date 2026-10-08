# App-shell proof contract

Status: Implemented and executed with explicit gaps / Not Frozen

Prototype target: `proofs/app-shell/`. Start from the [maintained Stackpress baseline](../../../proofs/stackpress-boilerplate/README.md); adoption follows the documented copy-and-modify path accepted in D-09; detailed structure remains proof-owned. This document preserves the required observable outcomes. [Execution results](proof-results.md) and the linked coverage matrix identify proved checks and remaining gaps; the full contract has not been accepted.

## Actors and states

Each installation represents one company (D-10); no company switcher is required. Cover multiple users and roles within that company.

Guest; authenticated member; app administrator; developer/operator configuring an app. Cover valid/expired session, unauthorized member, enabled/disabled agent and notifications, missing adapters, offline/error/loading states, desktop/mobile, expanded/collapsed navigation and light/dark mode. Automated agents and provider services are dependencies, not human actors.

## S-01 Panel layout and chrome

Demonstrate the 260 px expanded aside and 64 px rail pushing content on desktop; below 768 px use the 300 px overlay/scrim pattern. Agent panel is 400 px on desktop and a sheet on mobile. Details panels in consuming features use an explicit shell slot rather than duplicating the global agent panel.

Use notifications → agent → theme → user order. Preserve application-specific navigation, title/actions and stable active state. Persist aside preference per app; temporary mobile overlays must not overwrite another app's preference. Closing overlays restores focus, Escape works, background focus/scroll is controlled, and route changes do not leave stale scrims. Under D-20, mobile navigation, agent and details are mutually exclusive overlays: opening one closes the previous overlay and transfers focus to the new panel. Verify each switch and final close without overlapping sheets or stale scrims at 390 px width and with long content. Desktop docked panels may remain open together under their existing layout. Resolve the recorded mobile header discrepancy (G-12) before claiming visual fidelity.

Settings routes remove the application aside and use the 240 px section navigation and centered 760 px content pattern. Authentication uses its own layout. Back to App returns to a valid permitted location without losing ordinary app state.

## S-02 About and upgrade guidance

Show exactly About and Theme in App Settings. About displays installed version/build, Version and updates, and change log for the current app. Demonstrate checking, current, newer release available, failed check and unavailable guide. Update controls/badges appear only for a valid newer release and an authorized admin; regular members cannot invoke admin endpoints directly.

Use a configured GitHub Releases adapter (D-12). D-11 requires a real check against the configured live source plus local fixtures for older/newer versions and failures; a fixture-only run does not satisfy live-check acceptance. Compare versions deliberately, including prerelease/channel policy; malformed versions do not become update recommendations; do not infer installation compatibility or fabricate a guide from version precedence alone. The proof must test equal, older, newer, unavailable and invalid metadata. Record cache/freshness behavior rather than presenting stale results as freshly checked.

Every release must include an “Upgrade Instructions” section. Upgrade displays that section from the selected release notes faithfully; preserve its text, lists, links and code blocks through safe rendering and accurate copying. Show installed version, release tag and source link outside the authored instructions. Do not generate, paraphrase or append backup, migration, restart, verification or rollback steps; those belong to the release publisher. Missing/empty instruction sections retain the unavailable state rather than a substitute guide. Terminal copying copies text only. No button executes shell commands, installs software or migrates a real database. Daily checking only notifies. G-03/G-18 retain repository setup and release-selection/cache/extraction details.

## S-03 Theme settings and mode

App administrators edit logo, brand name, accent, sidebar and canvas for one app. Derive dependent tokens, contrast-check, preview, save independently and reset to family defaults. Invalid values and failed saves preserve the last accepted theme. Persist accepted overrides across reload/restart and prove app isolation (G-09).

Light/dark is a distinct user preference using the accepted `op-mode` / `data-mode` behavior, including no-flash initialization. Theme icon represents current mode. Test all four families in both modes, accessible focus, reduced motion, key component states and authentication/settings pages. Never change unrelated app branding when changing mode.

## S-04 Agent mode

Use the integration selected by P-00. Display contextual starters, thread, composer and operation state; carry current page, selected entity IDs and permitted context. A safe sample operation invoked from UI or agent must produce the same persisted result and updated page. Show running, successful, failed, cancelled and reversible-action states; validate an Undo only for supported operations.

Cover stale selection, route change while running, lost connection, permission denial, duplicate requests and unavailable provider. Provider secrets and unrelated records never enter browser props or agent context. No automatic external message sending is part of this proof. D-07 requires actual OpenRouter calls with both `google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini`; demonstrate the shared read/mutation and resulting UI state for each model. A deterministic agent adapter remains useful for controlled failure tests but cannot satisfy live-model acceptance. Record requested/returned model IDs and per-model results; missing credentials or provider failure remains an unrun/failed case, not a scripted-model pass.

## S-05 Notifications and config

Agent and Notification settings live in Stackpress config. Demonstrate enabled, explicitly disabled, missing dependency and invalid configuration cases after restart. The shell stays usable when optional capabilities are absent, and unavailable contributions do not register routes/listeners/navigation.

For enabled notifications, cover feed loading/empty/error, All/Mentions/Agent categories, day grouping, unread indicators, mark-one/all-read and safe contextual navigation. Read state persists for the authenticated account; no other account's feed leaks. Use local notification adapters and identify any unproved realtime behavior. Header visibility should reflect effective availability.

## S-06 Stackpress authentication and account styling

Adopt verified built-in session/auth/account handlers and schemas, with an OfficePress view bridge and one rendering owner. Source inspection shows sign-in email/password/code/link, username, sign-out, account profile update, password, TOTP enrollment/removal, export and account removal routes; verify locked-package behavior and dependencies rather than assuming source observations are integration proof.

Style the sign-in chooser, email, username, TOTP, forgot-password/check-email states and account forms using the kit. Preserve labels, field errors, pending/disabled states, accessible names and keyboard order. Use authenticator 2FA only; exclude SMS, recovery codes and security keys. Do not expose a generic phone route just because the upstream plugin has one. D-21 excludes a custom lost-authenticator recovery flow from this proof; retain built-in 2FA setup/sign-in/removal and normal forgot-password behavior. Do not add a recovery bypass or claim a production recovery policy.

Exercise valid and invalid credentials, expired challenge/session, CSRF rejection, current-user profile updates, read-only roles, password policy, 2FA setup/validation/removal and export scope. D-22 recovers the existing production scopes: Purge removes the user’s current-app data while preserving their account and other apps; Delete account removes the OfficePress account across apps. Verify built-in coverage and map affected records in G-05 before claiming those operations. Account deletion wording is not proof that all unrelated business/audit records are erased; the source template’s shared purge dialog does not make the actions identical. Destructive tests target only disposable fixtures with the documented confirmations. Missing forgot-password behavior stays an explicit gap.

## Evidence and exit signal

Fresh commands and receipts must show typecheck, build, dev/built serving, real browser interactions, no unhandled console errors, deterministic data checks, restart persistence, disabled/missing-dependency cases and sensitive-prop inspection. Include desktop/mobile screenshots of meaningful states plus their runtime checks. A styled screenshot alone does not pass a functional criterion. Record PostgreSQL-specific checks separately from PGlite.
