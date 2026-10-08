# Proposed architecture and config contracts

Status: Proposal / Not Frozen

P-00/P-01 now exercise a concrete decomposition and config in their local source. Read [execution results](proof-results.md) before copying it; uncovered paths and the permanent architecture decision remain explicit. The broader suite decomposition below remains a proposal to test. Follow the [accepted Stackpress contract](../../references/00205-stackpress-officepress-contract.md); do not treat proposed names below as upstream APIs.

## Capability ownership

| Capability | Owns | Required or optional contracts |
|---|---|---|
| App shell | Ingest/Reactus rendering, header, left/right slots, safe props, responsive focus/layout | Rendering required. Navigation and feature contributions are optional. |
| Store | PGlite/PostgreSQL connection registration and close | Explicit adapter/config; no production fallback. |
| Identity bridge | Stackpress built-in auth/session/CSRF and OfficePress views; caller identity and guards | Generated built-ins, store and CSRF as required by handlers. Protected routes fail closed. |
| Theme settings | Family tokens, app overrides, reset and preview | App identity; persistence and admin identity required for writes. Mode toggle may work independently. |
| About | Installed-version metadata, live release checks and instruction presentation | D-11 requires a live configured source plus local edge-case fixtures; configured GitHub source and release-note section required for instructions; unavailable state when missing. |
| Notifications | Notification feed, read state and header contribution | Identity and notification store for protected feeds; adapters optional. |
| Agent adapter | Provider configuration, execution/streaming bridge, action registry and context | Identity and action contracts; missing provider/capability disables only agent functionality. |
| Workflow definitions | Stage/board rules and card transitions | Store and authorization; emits domain events. |
| Automations | Trigger/condition/timing evaluation, ordered actions and run history | Workflow/event and action contracts; disabled engine must not break the board. |
| Message templates | Channel-aware content, variable resolution and preview | Record context and escaping rules; delivery adapter optional. |
| Form builder | Stable field definitions, published revisions, per-form respondent mode, validation and responses | D-13 supports signed-in or public-link submission; store and server-enforced access rules required; editing restricted to authorized users; D-14 public-link revocation preserves form/responses and is enforced on submission; file adapter optional. |
| Chat view | Conversations, messages, notes, events and details layout | Identity/store; message-template and channel adapters optional. |
| Proof fixtures | Seed scenarios, fake clock, deterministic failure/release/delivery adapters | Supplement real OpenRouter model tests (D-07) and SMTP test delivery (D-08); never silently substitute fixtures for either live proof or production. |

A capability may include its models, events, pages and views. A single shell plugin must not accumulate every domain workflow. A shared visual component does not own a feature's persistence or permission rules.

Each dependent plugin checks services in `plugin.ts` at the appropriate lifecycle phase. Return before feature route/listener/worker/navigation registration if required services are missing; check both listen and route phases. Re-enable by restart. Never delete persisted rows or remove Idea imports simply because a plugin is disabled.

## Proposed Stackpress configuration

Define typed application-owned config, for example `officepress.agent` and `officepress.notifications`, using normal Stackpress configuration access. These exact names are proposals; Stackpress's existing `auth`, `session`, `brand`, `cookie` and CSRF/provider config must be inspected separately.

| Area | Proposed fields / behavior |
|---|---|
| Agent | enabled, provider adapter, model identifier, allowed action names, context projection, request timeout and proof-fixture selection. Server-only credentials come from environment/config references. |
| Notifications | enabled, feed/delivery adapters, allowed categories, retention/read-state behavior and refresh/subscription policy. Account scoping comes from the authenticated caller. |
| About | installed version/build, app identity, configured GitHub owner/repository, release selection/cache settings and “Upgrade Instructions” section reader. |
| Theme | family defaults and app identifier; persisted app overrides are separate from per-user mode preference. |

For these proofs, D-07 selects OpenRouter and requires separate runs with `google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini`. Resolve the user-provided key only on the server at proof setup. Exact config field names remain proposed. Missing credentials produce an explicit unavailable result; do not silently switch to a scripted adapter or different model and count it as a passing live-model test.

Browser props expose only necessary capability flags and presentation data. Do not serialize full config, secrets, private endpoints, session seeds or provider credentials. Malformed required security config fails closed; unavailable optional adapters produce an explicit disabled/unavailable capability.

No Agent or Notification settings tabs are introduced. User-facing feed controls or agent controls are interactions, not configuration editors. Configuration changes follow the accepted restart activation rule; theme/mode preference updates are ordinary application data changes.

## About proof source

D-11/D-12 require a real check against configured GitHub Releases, plus local fixtures for older/newer versions, invalid metadata and failures. Configure the app owner/repository at setup. Read the selected release notes body and display its “Upgrade Instructions” section faithfully, preserving wording, lists, links and code blocks through safe Markdown rendering. Do not generate, summarize or append upgrade steps. Release publishers own applicability and content; the app does not need a separate installation-recipe engine or manifest.

Use the same version and section-reader contract for live data and fixtures. Record repository/release identity, check time, source section and actual rendered/copied content. Missing or empty sections show the existing unavailable state and never trigger invented instructions. Test heading boundaries, subsections, fenced code, unsafe markup and absent content. Exact parsing/selection/cache rules are proof-owned details to document before execution. Upgrade commands remain informational under D-03.

## Proof email delivery

D-08 requires real SMTP email to designated test accounts for the Message Templates and Chat View send paths, and any automation email action exercised by the proof. Keep SMTP transport in a responsibility-owned adapter, with server-only configuration and credentials. Configure the sender and test recipients at proof setup. Preview and dry run never dispatch. Authoring and chat drafts remain usable when delivery is unavailable.

D-18 limits these example sends to reporting the SMTP send-call result: accepted for sending or the returned error. A local preview/enqueue does not substitute for the real call. No retry, resend/reconciliation or downstream mailbox-delivery verification is required. Controlled failure adapters may demonstrate a returned send error. Missing SMTP setup leaves the live example send unrun. This decision selects outgoing email only; live social channels and incoming-mail synchronization are not inferred.

## Shared action contract to compare in P-00

A UI interaction and an agent action should reach the same server-owned operation: typed input, authenticated caller, authorization and resource scope, validation, mutation, result and audit event. UI context supplies stable IDs/current view/selection, not trusted permission assertions. Do not let an agent bypass server authorization by writing files or databases directly.

Proposed result states: queued/running/succeeded/failed/cancelled with a stable operation ID. Persist or reconcile long operations after reconnect; duplicate submissions must not repeat side effects. Return a reversible-action descriptor only when a valid compensating operation exists. Confirmation and authorization are distinct controls.

The agent-native route may use a narrow supported adapter or sidecar/host bridge. The alternative is a Stackpress-native action registry inspired by the same architecture. Both must pass identical identity, action parity, context freshness, cancellation, failed-provider and no-agent tests. Run each viable candidate's live read and mutation scenario against both D-07 models; retain per-model results and any compatibility blocker. Scripted responses may inject otherwise hard-to-repeat failures but cannot replace those runs. The compatibility result determines the dependency choice.

## Company scope

D-10 selects one company per proof app installation. Model app identity, users and roles within that installation; do not add company switching or a multi-tenant workspace layer for these proofs. Keep server-side record/account authorization and app-scoped theme isolation. A single-company installation is not a single-user app. Exact persistence and mode-preference key scope remain in G-09.

## Data and adoption

Compose responsibility-owned Idea files from a root schema. Reuse verified built-in Profile/Auth/session definitions rather than inventing replacements. Keep SQL generation, migration application, data population and rendering builds distinct. D-15 requires immutable published form/workflow/template versions: new publications serve new work, while existing responses, sent messages and in-progress or completed runs retain their original versions. Preserve the referenced definitions across publication and restart. Publication does not migrate existing work; any explicit migration would require a separate contract. Exact schema and revision-link implementation remain proof-owned.

Every proof publishes its public services/events, configuration, schema imports, dependency checks, fixture setup, verification command and adoption guide. D-09 selects source-copy adoption. P-06 copies documented maintained plugin inputs into a clean consumer, changes app identity, makes and verifies one app-specific behavior modification in the copied plugin, selectively disables features and demonstrates no imports or file paths back into the original proof checkout. Document the source revision, copy list, required dependencies, config, composed Idea imports, migrations and checks the adopter should rerun after modification. Keep browser/server boundaries and plugin dependency guards valid in the adapted copy. Initial adoption does not require publishing or installing a shared proof package.

## Existing implementation inputs — source reviewed 2026-10-05

Use the [live-project correlation](../../references/00368-officepress-live-project-correlation.md) before inventing shared mechanisms. Reuse bounded domain behavior and adapt it to D-01 dependency guards and the maintained renderer. Source-derived D-16 uses elapsed SLA; D-17 rejects stale writes with atomic expected-version checks. Source delivery-retry differences are background under D-18; D-19 now selects conversation freshness by channel context while leaving adapter mechanics to implementation; Resourcing editable workflow definitions and Inbox mutable templates do not replace D-15. Existing implementations are inputs to P-00–P-06, not evidence that this proof suite has passed.

## Conversation refresh by use case

D-19 requires automatic live updates in Support-style chat spanning email/Messenger/WhatsApp/Viber. Email-only use can refresh periodically or manually. Keep the shared Chat View refresh behavior selectable by its consuming app/use case, rather than hard-wiring one transport. Support SSE/reconciliation and Inbox polling are concrete implementation inputs. Demonstrate a persisted fixture arrival updating a live chat view, and an email-only view updating through its selected periodic/manual refresh path. These are application UI updates; D-08/D-18 retain real SMTP example sends, while other channel arrivals remain fixtures. Unrelated shell-notification cadence and agent progress are not assigned by this answer.

## Mobile panel state

D-20 gives the shell one active mobile overlay slot: navigation, agent, details or none. Opening another panel replaces the active overlay and transfers focus; the existing close/Escape/focus-restoration and scroll behavior still apply. Component details panels use the shell-owned slot. Desktop docked panels retain their existing independent behavior and dimensions. Verify mobile switching without stale scrims; this does not settle the separately recorded mobile header geometry difference.

## User-provided local test environment — 2026-10-05

The user added these names to the repository-root `.env`. A value-suppressing presence check found all six non-empty; Git ignores `.env` and it is not tracked. No value was copied into the KB, logs or proof receipts. Presence does not verify authentication, connectivity or a successful model/send operation.

| Variable | Proof setup use |
|---|---|
| `OPENROUTER_TEST_KEY` | Server-side OpenRouter credential for the D-07 model runs. |
| `MAIL_TEST_HOST` | SMTP test server host. |
| `MAIL_TEST_PORT` | SMTP test server port; parse and validate in the sending adapter. |
| `MAIL_TEST_EMAIL` | User-supplied test email address; record its sender/recipient role in the concrete send setup rather than infer additional recipients. |
| `MAIL_TEST_USER` | SMTP authentication username. |
| `MAIL_TEST_PASS` | SMTP authentication password. |

Proof launch/configuration should load the root file explicitly rather than rely on a nested proof directory's working directory. Expose these values only to the server-side adapters that need them. Do not copy the root `.env` into proof folders or source archives; consumer adoption documents retain names and setup instructions, never the values. These are local proof inputs, not new production configuration keys or App Settings fields. D-18 still bounds email acceptance to the actual send-call result. This setup note does not start proof execution or MCP indexing.
