# Shared OfficePress app experience

These are accepted design conventions and product descriptions. A template or design state does not prove that its backend behavior is implemented.

## Frame and global controls

Desktop uses a collapsible aside, 260 px expanded and 64 px as an icon rail, which pushes main content. Below 768 px it starts collapsed and opens as a 300 px overlay with a 40% scrim. The written shared header height is 64 px; concrete mobile CSS differences are recorded in the source decisions reference.

Header page title/actions sit before a divider. The final controls always appear in this order: notifications, agent, theme, user. Each is a 36 px outlined circle with a 16 px icon. The theme icon indicates the current mode and switches on click.

Notifications open a 380 px popover under the bell: account-wide activity, All/Mentions/Agent tabs, day grouping, app identity tags, green unread indicators and Mark all read. The design permits contextual approval/agent-result actions.

The agent opens a 400 px panel under the header and pushes content on desktop; mobile uses a full-height sheet. It shows context, conversation, done/running/undo action cards and a composer. Changes must become visible in the affected page and be represented in the thread with Undo. Empty state has three relevant starters.

On mobile, show one overlay panel at a time: opening navigation, agent or details closes the currently open overlay. Move focus into the new panel and retain close/Escape/focus restoration without stale scrims or scroll locks. Desktop docked panels keep their existing behavior. This is the accepted [Q-013 panel decision](../specs/00001-reusable-app-shell-and-component-proofs/questions.md#q-013--mobile-panel-interaction).

The user popover is 280 px, right-aligned under the avatar: identity; User Preferences and Account Settings; App Settings and Admin Dashboard when permitted; Sign out.

## Account and app settings

Settings take over the page with no app aside. Header back arrow and Back to App return to the app. A 240 px section navigation sits under the header; content is a centered 760 px column. Each card saves independently.

Account settings cover personal information, image by URL, read-only role, password, authenticator-app 2FA and instant data export. **Purge and delete are production material, as explicitly confirmed by the user.** Purge removes the user’s data from the current app only, preserving their account and other apps. Delete account permanently removes the OfficePress account across every app. Preserve their distinct confirmation patterns. The [complete account template](../references/00059-templates-settings-account-html.md) supplies these scopes; its shared purge-dialog wiring is a known discrepancy, not evidence that both actions are identical. Backend record mapping must be verified before claiming enforcement, and account deletion wording alone does not establish erasure of all unrelated business/audit records. Earlier “Not in production yet” and “proposed additions” wording is superseded.

App Settings has exactly two tabs: **About** and **Theme**. The former Updates page is now About. Agent and Notification settings are supplied through Stackpress configuration, not separate App Settings tabs. Historical General, Members and Integrations tab examples do not define the current shared menu.

App theme settings edit logo, brand name, accent, sidebar and canvas for that app. Related tints, borders and readable accents are derived and contrast-checked. Reset restores family defaults.

About shows the installed version, updates and change log to app admins. The section heading is **Version and updates**. Version checks use GitHub Releases. Each release includes an **Upgrade Instructions** section; the app faithfully displays that section from the release notes, without generating, paraphrasing, supplementing or executing its steps. Distinguish Up to date, Checking and Update available. Only a newer version exposes the update card/button, terminal guide and nav badge. Auto-check is daily notification only; installing always requires an admin. Release publishers own version/installation applicability and all upgrade content, including any backup, verification or rollback steps. Preserve provided wording and code blocks through safe rendering; absent instructions remain unavailable. **Sample release numbers, changelogs, restart durations and commands are examples; actual commands must match the upgrade target and installation method.**

## Authentication

One themed page set serves the apps: sign-in method cards, email (password/code/magic link), username, two-factor, forgot password and check email. Keep brand top-left, theme toggle top-right, a centered 400 px column and one-line footer. Display 28/700 is specific to these pages.

**Use authenticator-app 2FA. Do not add SMS, recovery codes or security keys.** The historical screenshot/native recovery options and vague template recovery link do not override this rule. SMS in business-message templates is a separate valid source example.

## Common modules

- **Workflow boards:** start from a workflow list, then open a board. Configurable stages retain elapsed time targets and tasks; cards can move to any column in their workflow. Cards and stages support multiple assignees: cards show progress, comments, files, assignee avatars without visible names and — when the stage has a time target — an SLA progress bar from current-column entry to expiry, with no visible Overdue label. Each column has a settings cog before its automation control and a centered stage heading with Automations. Card checklists are labeled **Todo** and tasks follow the card's current stage in backend and UI. No WIP, entry prerequisites or allowed-next-stage lists; no workflow selector/count group on the board. D-24/D-25 supersede the earlier single-assignee, due-state/Overdue-label and copy-on-entry-only task descriptions.
- **Workflow designer:** identity, Draft/Published dropdown, stage list and selected stage; no numbered versions and no breadcrumb. Stage name and Description span full rows, Outcome sits beside Time target, and **Assignees** (plural) occupies its own row above **Tasks** without the retention hint. Stage Forms select Form Builder templates; the section is absent when none exist. Manage stage-owned automations from here. The 2026-10-06 corrections and later D-24–D-26 decisions supersede conflicting historical kit fields and the singular Assignee label; see [reusable proof guidance](reusable-proofs.md).
- **Automations:** trigger → conditions (all/any) → timing (now/delay/date/SLA) → ordered actions → run settings. Provide a plain-language summary and test against a real card without changing it. Access through a workflow stage; context/title sit below the action row. Saved state is a **Draft/Active/Paused** dropdown; D-26 removes Publish and the earlier enable switches. Omit statistics cards and rule search; retain run history and last outcome. Once-per-visit and stop-on-failure are real checkboxes.
- **Forms:** ordered questions and selected-question settings; the Outline pane is removed (round 7 correction with D-26). Stable field names preserve response meaning across edits; duplicate and move up/down complement dragging. Status/publish stays in the top strip; Responses and Share are tabs.
- **Message templates:** detect `{{mustache}}` variables; Automatic values come from the record and Custom values are requested at send time. Show resolved previews. Email has subject/rich text; messaging channels use plain text and a character count. Source examples include SMS, WhatsApp, Messenger and Viber.
- **Chat:** conversation list, thread and optional details, unified across channels. Threads retain day dividers, attachments, amber internal notes and status events. Replies can insert templates. Support uses details; the Inbox conversation view uses list and thread, shaped by the accepted messenger wireframe with **Messages and Requests** navigation (2026-10-07 correction) while keeping OfficePress colors.

The full correction history, review rounds and spec decision records live in [reusable proof guidance](reusable-proofs.md).

## Full behavior, examples and provenance

- [Current About menu and configuration decisions](../references/00360-officepress-about-menu-revision.md) — load when implementing app settings or interpreting older menu examples.

- [Template behavior and screen map](../references/00083-officepress-template-behavior-map.md) — load when choosing a common module or distinguishing working UI controls from mock behavior.
- [Complete kit documentation and templates](../references/00074-officepress-kit-source-map.md) — load when needing every documented option, example, control or selector.
- [Complete native screen content](../references/00075-officepress-pencil-design-map.md) — load when looking up exact labels, fields, sample records and visual component metadata.
- [Accepted corrections and source differences](../references/00078-officepress-source-decisions.md) — load when reviewing auth, production data-deletion actions, upgrades or mismatched dimensions.
