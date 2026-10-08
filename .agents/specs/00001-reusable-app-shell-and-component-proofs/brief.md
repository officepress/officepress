# Brief — reusable OfficePress proofs

Status: Planning / Not Frozen

## User goals, as supplied

> Updated officepress.pen. I mainly cleaned up the menu. Updates are now About. Please update KB.

> I also want to create a spec for developing an app shell proof covering the functionality for panel layout (asides), app upgrade functionality, theme settings, agent mode based on agent native framework, light/dark mode, styling of authentication pages and account settings (stackpress has out of box functionality).

> Note: Agent and Notification settings should be setup in stackpress config.

> I also want to create proofs for each component: Workflows/Automations, Message Templates, Form Builder, Chat View.

> The end goal of this is to provide a set of proofs that serves as guidelines for other apps to adopt.

The source design is the [repository Pencil document](../../resources/officepress-design/officepress.pen); the user supplied [BuilderIO agent-native](https://github.com/BuilderIO/agent-native) as the agent-mode reference.

## Clarifications received

- Agent-native package integration versus a Stackpress-native adaptation: “im actually not sure...”. The choice remains open and requires comparative evidence (G-01).
- About upgrade behavior: “Version checks and upgrade instructions for the installed version”. No app-executed installer is requested (D-03).

- Agent-provider depth: real OpenRouter calls against Gemini 3.5 Flash-Lite (`google/gemini-3.5-flash-lite`) and GPT-4o mini (`openai/gpt-4o-mini`); user can provide the API key. See [the exact Q-001 answer](questions.md) and D-07. This resolves proof model scope, not agent-native package adoption or a production LLM commitment.

- Message delivery: real email to test accounts through SMTP; user can provide the SMTP information. See [the exact Q-002 answer](questions.md) and D-08. D-18 limits example-send acceptance to the send-call result; retries, uncertainty investigation and actual recipient-delivery verification are excluded.

- Adoption format: apps copy documented plugins, then modify them for their own use cases. See [the exact Q-003 answer](questions.md), D-09 and [accepted adoption guidance](../../context/reusable-proofs.md).

- Company scope: one company per proof app installation (D-10). Multiple user roles and account-level access checks remain in scope.
- Grill preference: include a suggested default with each future question; preserve recommendations separately from accepted answers. See [Q-004](questions.md).

- About release checks: the user accepted the suggested default on 2026-10-05: a live configured source plus local fixtures for older/newer versions and failures (D-11). D-12 subsequently selects GitHub Releases; app repository identity remains a setup input.

- Release instruction content: each GitHub release includes “Upgrade Instructions”; the app faithfully displays that section without generating its own steps (D-12). The release publisher owns installation-method and source-version applicability, so Q-006 is superseded.

- Form access: the proof supports signed-in and public-link responses, selected per form. Public respondents can submit without signing in, while editing remains restricted to authorized users (D-13). Authorized owners may revoke a public link to stop new submissions without deleting the form or its responses (D-14). Other link lifecycle details and response visibility still need decisions.

- Published versions: publishing edits to forms, workflows or templates creates a new version for new work; existing responses, sent messages and in-progress/completed runs retain their original versions (D-15). See [the exact Q-008 answer](questions.md).

- Conversation refresh: Support-style email/Messenger/WhatsApp/Viber chat uses automatic live updates; email-only use permits periodic/manual refresh (D-19). This does not add live messaging-provider integrations.

- Auth scope: exclude custom lost-authenticator recovery from the initial shell proof; retain Stackpress 2FA setup/sign-in/removal and their styling/integration (D-21). The existing kit defines current-app user-data purge versus across-app account deletion (D-22); actual handler coverage is proof work.

- Local test setup: the user supplied the root `.env` variable names documented in [the server-side setup contract](architecture.md#user-provided-local-test-environment--2026-10-05). Presence and Git exclusion are verified; credential validity and live proof outcomes remain untested.

## Deliverable and audience

An architecture-composition and adoption sample for OfficePress developers, designers and agents. The eventual deliverable is an executable shell proof plus four component proofs, with safe fixtures, maintained source, configuration examples, reproducible verification and adoption instructions. It is not a completed Inbox, Support, Chat or Forms product.

One planning package keeps shared contracts together. Each eventual proof lives under its own root `proofs/<slug>/` location, represents one company per installation and has its own receipt. Component capabilities remain independently selectable even where they integrate in a combined demonstration.

## In scope

- Responsive left navigation, right agent/details panels and shared page chrome; accessible controls and focus.
- About/Theme settings; installed version checks and upgrade instructions; app-specific brand/theme settings; light/dark persistence.
- Agent and notifications configured through Stackpress, graceful absence and safe public projections; real agent tests through OpenRouter with both D-07 models.
- Auth/account UI using verified Stackpress handlers, session and model behavior where available; OfficePress styling and excluded auth options.
- Workflow board/designer and automation definition/run behavior; message templates and previews; dynamic form authoring/submission; multichannel-style conversation UI with real SMTP email to test accounts and local fixtures for other channels/failure cases.
- Proof-specific fixture persistence and lifecycle tests, plus an independent consumer rehearsal that copies documented plugins and demonstrates app-specific modification.

## Non-goals and boundaries

No production deployment, actual app upgrade execution, customer messaging or unselected live channels beyond D-08 test email, complete multi-tenant product, production LLM commitment or replacement Stackpress scaffold. No new source-tree archive is authorized for framework research. Do not treat a mocked backend or screenshot as functional proof. Added behavior beyond existing context remains proposed until resolved in the decision ledger.

## Source routes

- [Maintained baseline](../../../proofs/stackpress-boilerplate/README.md): approved 0.10.8 application starting point.
- [UI source resources](../../references/00359-officepress-ui-source-resources.md): whole CSS/JS/template files and ingested design guide/docs.
- [Shared app behavior](../../context/shared-app-experience.md): approved shell, authentication and common-module semantics.
- [UI foundations](../../context/ui-foundations.md): tokens, families, modes, dimensions and accessibility.
- [Current design changes](../../references/00360-officepress-about-menu-revision.md): About and Theme, exact node provenance and lossless history.

## Candidate scaffold values — proposed, not generated

App name: OfficePress Proofs. Package: `officepress-proof-suite`. Brand: OfficePress. Candidate development ports: 3030–3034, subject to checking local availability. Each directory derives from the maintained baseline; do not use the generic scaffold in preference to it. Runtime pins remain 0.10.8 unless an explicit compatibility result requires an accepted change.

## Research direction — 2026-10-02

> Moving forward dont update MCP index unless i say so.

> Next go ahead and do online research. Itemize topics and search against those topics. During research find additional related topics to explore and at the end of each research round repeat until no more topics. Do this as a goal.

This authorizes the iterative research goal for this proof suite. It does not select an agent-native integration, authorize proof implementation or request an MCP refresh. See [research](research.md) for the completed round ledger and evidence.
