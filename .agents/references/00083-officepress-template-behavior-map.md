# OfficePress screen templates and behavior

Owner: [Shared app experience](../context/shared-app-experience.md). Load when selecting a template, locating full source markup or distinguishing prototype UI from actual product behavior.

The kit has 11 app templates and 6 authentication templates. Most app templates carry repeated shell/nav/popover/agent markup; this repetition is preserved for exact recovery. Use current context to reconcile historical sample names and auth options.

- [App Board](00047-templates-app-board-html.md) — load when implementing or inspecting this screen.
- [Check Email](00048-templates-auth-check-email-html.md) — load when implementing or inspecting this screen.
- [Email](00049-templates-auth-email-html.md) — load when implementing or inspecting this screen.
- [Forgot Password](00050-templates-auth-forgot-password-html.md) — load when implementing or inspecting this screen.
- [Sign In](00051-templates-auth-sign-in-html.md) — load when implementing or inspecting this screen.
- [Two Factor](00052-templates-auth-two-factor-html.md) — load when implementing or inspecting this screen.
- [Username](00053-templates-auth-username-html.md) — load when implementing or inspecting this screen.
- [Automation Builder](00054-templates-automation-builder-html.md) — load when implementing or inspecting this screen.
- [Automations](00055-templates-automations-html.md) — load when implementing or inspecting this screen.
- [Chat](00056-templates-chat-html.md) — load when implementing or inspecting this screen.
- [Form Builder](00057-templates-form-builder-html.md) — load when implementing or inspecting this screen.
- [Message Template](00058-templates-message-template-html.md) — load when implementing or inspecting this screen.
- [Settings Account](00059-templates-settings-account-html.md) — load when implementing or inspecting this screen.
- [Settings App Theme](00060-templates-settings-app-theme-html.md) — load when implementing or inspecting this screen.
- [Settings App Updates](00061-templates-settings-app-updates-html.md) — load when implementing or inspecting this screen.
- [Workflow Board](00062-templates-workflow-board-html.md) — load when implementing or inspecting this screen.
- [Workflow Designer](00063-templates-workflow-designer-html.md) — load when implementing or inspecting this screen.

## Implementation limits

Shared JS handles UI states and generic controls; per-template inline behavior demonstrates local interactions. Sample records, dates, command strings and version numbers are not live data. Complete HTML comments and scripts are retained in each linked template.

Settings account contains production purge/delete material, as confirmed by the user. The source label “Not in production yet” is superseded. Both buttons point to one purge dialog in the source; retain this wiring discrepancy separately and do not infer identical operations. The two-factor template has a vague recovery-method link; the accepted design excludes recovery codes and SMS 2FA. The updates template says commands are placeholders until installation method is finalized; actual guides must match the target upgrade.

[Pattern recipes and anti-pattern table](00030-docs-patterns-md.md) — load when choosing a layout, empty/loading/error treatment, destructive confirmation or agent-action pattern.

[Complete shared interaction script](00040-js-officepress-js.md) — load when checking data attributes, event handling and persistence.
