# App-shell styling review — round 2

Date: 2026-10-05. Phase: proof implementation / visual review.
Status: implemented and checked; awaiting the user's visual feedback.
This is a styling revision of P-01, not production or full-suite acceptance.

## Feedback and source of truth

The user found both auth and the main shell insufficiently aligned with the KB.
This round applies existing local guidance, not a new visual direction:

- [UI foundations](../../../../../../.agents/context/ui-foundations.md),
  [shared experience](../../../../../../.agents/context/shared-app-experience.md), and
  [kit routing](../../../../../../.agents/context/ui-kit.md).
- [Auth chooser template](../../../../../../.agents/resources/officepress-kit/templates/auth/sign-in.html),
  [email form](../../../../../../.agents/resources/officepress-kit/templates/auth/email.html),
  [shared app shell](../../../../../../.agents/resources/officepress-kit/templates/app-board.html),
  and [theme settings](../../../../../../.agents/resources/officepress-kit/templates/settings-app-theme.html).
- [Auth reference](../../../../../../.agents/resources/officepress-kit/reference/auth/1-sign-in.png),
  [email reference](../../../../../../.agents/resources/officepress-kit/reference/auth/2-email.png),
  [agent dock](../../../../../../.agents/resources/officepress-kit/reference/shell/desktop-agent-open.png),
  and [account settings](../../../../../../.agents/resources/officepress-kit/reference/settings/account-settings.png).
- [Current About decision](../../../../../../.agents/references/00360-officepress-about-menu-revision.md).
  About and Theme remain the app settings pages. Agent/Notification setup stays
  in server configuration. Historical sample menus do not add new pages.

## Applied rules and changes

- Removed broad global control and typography overrides. Use the kit's actual
  `op-*` components, semantic colour tokens, radii, shadows and spacing.
  Copied core/family CSS remains byte-identical to the corresponding local kit.
- Bundled [Inter with its license](../../../../public/fonts/inter/README.md). The prior
  stylesheet named Inter but did not supply it. No remote font dependency.
- Auth: canvas background, 400px column, 28px heading, 40px method icon tiles,
  password/code/link segmented control, icon fields, password visibility,
  top brand/mode control and footer. No enclosing white card.
- Shell: 260px/64px aside, 32px logo, compact navigation, 64px header, outlined
  circular controls, 400px agent dock, 380px notification popover, 280px user menu.
- Settings: 240px navigation and 760px content column with kit sections/fields.
  Account profile and password views share that treatment. About and Theme use
  section headers and footers rather than generic stacked buttons.
- Agent: context strip, three functional prompt starters, action summaries,
  model selector and bottom composer. Removed raw result JSON from display;
  restored prompts read the existing serialized signature, and failed action
  cards display the recorded error text.
- Removed proof implementation commentary from the main workspace screen.
  The persisted sample card remains the real UI/agent interaction target.
- Fixed mobile kit drawer positioning inside the existing React overlay owner;
  fixed its navigation hover contrast. Added selected-panel button state.
- Kept the user's saved Shoppable brand/theme, profile and sample card unchanged.
  Review screenshots deliberately show that saved theme, not reset defaults.

## Verification in this round

- `npm run typecheck`: passed after the final code edits (Node 24.21.0).
- `npm run build`: passed after the final code edits.
- `npm run prove:identity`: **32/32 passed**, using a new isolated PGlite database.
  [Exact receipt](identity-2026-10-05.json). No email sent. An occupied development
  HMR port warning did not affect the isolated HTTP checks; the runner exited 0.
- Browser: email/password signin succeeds; chooser, email form, account profile,
  password view, About, Theme, notifications and user menu visually inspected.
- Desktop 1440×900: measured 260px expanded / 64px compact aside, 64px header,
  400px agent dock; no horizontal page overflow. Auth/shell light and dark
  palettes inspected. Browser title is a single rendered string.
- Mobile 390×844: auth column is 350px; auth, shell, settings and agent content
  fit without horizontal overflow. Navigation content is visible in its 300px
  drawer. Escape closes the agent overlay and restores focus to Open agent.
- Updated the existing compiled-config check's brand selector to the new kit
  markup. The full compiled-config/live-model/PostgreSQL suites were not rerun
  for this styling round; their earlier receipts remain historical evidence.
- The manual-review server was restarted with the existing database; startup
  performs no schema installation/reset. The bundled font returns HTTP 200 with
  `font/woff2`; the final reviewed browser reported no warnings/errors. MCP
  indexing was not invoked. Review links and `git diff --check` passed.

## Saved browser evidence

- Auth: [chooser desktop](auth-methods-desktop.jpg), [email desktop](auth-email-desktop.jpg),
  [email dark](auth-email-dark.jpg), [chooser mobile](auth-methods-mobile.jpg),
  [email mobile](auth-email-mobile.jpg).
- Shell: [agent desktop](shell-agent-desktop.jpg), [agent dark](shell-agent-dark.jpg),
  [workspace mobile](shell-mobile.jpg), [agent mobile](agent-mobile.jpg),
  [navigation mobile](navigation-mobile.jpg).
- Settings: [account](account-desktop.jpg), [theme](theme-desktop.jpg).
- [Notification popover](notifications-desktop.jpg).

## Review focus and next step

Review auth spacing and method/field treatment, then the shell's sidebar/header,
agent panel and settings density against the local kit. This round does not
implement unavailable email-code/link delivery, recovery or cross-app deletion.
It is not a pixel-exact audit of every native-design screen or an accessibility
certification. No provider calls or saved-theme changes were needed for this round.

If this direction is accepted, continue P-01 manual interaction review of panels,
settings and agent actions. Resolve further visual feedback here before treating
this proof as the styling reference for later component proofs.
