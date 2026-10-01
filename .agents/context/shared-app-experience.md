# Shared OfficePress app experience

These are accepted design conventions and product descriptions. A template or design state does not prove that its backend behavior is implemented.

## Frame and global controls

Desktop uses a collapsible aside, 260 px expanded and 64 px as an icon rail, which pushes main content. Below 768 px it starts collapsed and opens as a 300 px overlay with a 40% scrim. The written shared header height is 64 px; concrete mobile CSS differences are recorded in the source decisions reference.

Header page title/actions sit before a divider. The final controls always appear in this order: notifications, agent, theme, user. Each is a 36 px outlined circle with a 16 px icon. The theme icon indicates the current mode and switches on click.

Notifications open a 380 px popover under the bell: account-wide activity, All/Mentions/Agent tabs, day grouping, app identity tags, green unread indicators and Mark all read. The design permits contextual approval/agent-result actions.

The agent opens a 400 px panel under the header and pushes content on desktop; mobile uses a full-height sheet. It shows context, conversation, done/running/undo action cards and a composer. Changes must become visible in the affected page and be represented in the thread with Undo. Empty state has three relevant starters.

The user popover is 280 px, right-aligned under the avatar: identity; User Preferences and Account Settings; App Settings and Admin Dashboard when permitted; Sign out.

## Account and app settings

Settings take over the page with no app aside. Header back arrow and Back to App return to the app. A 240 px section navigation sits under the header; content is a centered 760 px column. Each card saves independently.

Account settings cover personal information, image by URL, read-only role, password, authenticator-app 2FA and instant data export. **Purge and delete are production material, as explicitly confirmed by the user.** Preserve their documented action scope and confirmation patterns. Earlier “Not in production yet” and “proposed additions” wording is superseded.

App theme settings edit logo, brand name, accent, sidebar and canvas for that app. Related tints, borders and readable accents are derived and contrast-checked. Reset restores family defaults.

Updates are shown to app admins. Distinguish Up to date, Checking and Update available. Only a newer version exposes the update card/button, terminal guide and nav badge. Auto-check is daily notification only; installing always requires an admin. Versioned instructions begin with backup and end with version verification and rollback. **Sample release numbers, changelogs, restart durations and commands are examples; actual commands must match the upgrade target and installation method.**

## Authentication

One themed page set serves the apps: sign-in method cards, email (password/code/magic link), username, two-factor, forgot password and check email. Keep brand top-left, theme toggle top-right, a centered 400 px column and one-line footer. Display 28/700 is specific to these pages.

**Use authenticator-app 2FA. Do not add SMS, recovery codes or security keys.** The historical screenshot/native recovery options and vague template recovery link do not override this rule. SMS in business-message templates is a separate valid source example.

## Common modules

- **Workflow boards:** fixed source column; configurable stages with targets, WIP limits, entry requirements and default tasks. Cards show task progress, owner, due state, comments and files. Drag shows a drop slot; disallowed destinations dim.
- **Workflow designer:** identity, stage list and selected stage; edit owner, outcome, time target, WIP limit, entry requirements, default tasks and allowed next stages. Manage related automations from here.
- **Automations:** trigger → conditions (all/any) → timing (now/delay/date/SLA) → ordered actions → run settings. Provide a plain-language summary and test against a real card without changing it. Lists show health, runs/failures, last outcome and enable switches.
- **Forms:** outline, ordered questions and selected-question settings. Stable field names preserve response meaning across edits; duplicate and move up/down complement dragging. Status/publish stays in the top strip; Responses and Share are tabs.
- **Message templates:** detect `{{mustache}}` variables; Automatic values come from the record and Custom values are requested at send time. Show resolved previews. Email has subject/rich text; messaging channels use plain text and a character count. Source examples include SMS, WhatsApp, Messenger and Viber.
- **Chat:** conversation list, thread and optional details, unified across channels. Threads retain day dividers, attachments, amber internal notes and status events. Replies can insert templates. Support uses details; the Inbox conversation view uses list and thread.

## Full behavior, examples and provenance

- [Template behavior and screen map](../references/00083-officepress-template-behavior-map.md) — load when choosing a common module or distinguishing working UI controls from mock behavior.
- [Complete kit documentation and templates](../references/00074-officepress-kit-source-map.md) — load when needing every documented option, example, control or selector.
- [Complete native screen content](../references/00075-officepress-pencil-design-map.md) — load when looking up exact labels, fields, sample records and visual component metadata.
- [Accepted corrections and source differences](../references/00078-officepress-source-decisions.md) — load when reviewing auth, production data-deletion actions, upgrades or mismatched dimensions.
