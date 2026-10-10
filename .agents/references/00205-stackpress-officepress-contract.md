# OfficePress Stackpress implementation contract

Owner: [Stackpress handbook](../context/stackpress.md). Load before implementing or reviewing any OfficePress app. User decisions on 2026-10-01 take precedence over imported examples.

## Scope and authority

Every OfficePress app uses Stackpress. Per the 2026-10-10 user decision, the maintained scaffold baseline is `proofs/app-shell/` in this repository (Yarn, Stackpress CLI dispatch, the 00373 layout). Apps needing workflows/automations (kanban), form builder or message templates use `proofs/common-components/` as the feature reference and copy source. This supersedes `proofs/stackpress-boilerplate/` as the baseline; that earlier proof remains historical npm-era evidence with its original receipts. Use the 0.10.8 Stackpress ecosystem; React, Frui, Vite and other independent packages have their own versions. Preserve `yarn.lock` and verify actual resolved versions.

The baseline is shared by all OfficePress apps. Commerce Orders-specific P13/P14 task labels and missing-feature lists are historical provenance, not requirements for every app. The proofs demonstrate framework mechanics; they do not implement all OfficePress business features or production identity/tenant security.

Imported source instructions remain available in full. Their generic scaffold, dependency versions, sample credentials, phone authentication, deployment assumptions and broad cleanup suggestions do not override this contract. In particular, existing OfficePress exclusions of SMS two-factor authentication and recovery codes still apply. Existing purge/delete UI is production material; that product decision does not authorize destructive framework database commands on real data.

## Separation of responsibility

A plugin owns a coherent capability, including its appropriate model definitions, services, handlers and views. A plugin is not a container for the entire application. `app` owns shared HTTP/rendering mechanics; `store` owns connection selection/registration and guarded Stackpress SQL integration. Do not keep a separate `data` bridge plugin. Use `plugins/auth` for authentication, `plugins/settings/theme`, `plugins/settings/about` and `plugins/settings/shell` for the shared settings/frame group, and root `.fixtures/actions` for the proof-only action example. Feature logic belongs in responsibility-specific plugins. Do not make one plugin per technical layer without considering whether the capability can operate independently.

Decide a boundary by asking: can this capability be disabled, what service does it provide, what does it require, and what should still work without it? Separate independent integrations, communication channels, mock/proof data and optional enhancements when they have different activation or ownership boundaries. Avoid a dependency cycle disguised as several directories.

A dependency is a documented public service or event contract, not an import of another plugin's private implementation. Put shared types in a browser-safe contract module when needed. State required services, optional services, unavailable behavior and registration timing in each plugin's documentation.

## Identity integration and app-data ownership

The 2026-10-09 accepted refinements apply to both app-shell and common-components proofs. Stackpress remains the owner of credential/password/TOTP verification and signed-token creation. The local auth plugin provides OfficePress views, current-user projection and access policy, plus the documented 0.10.8 compatibility/security adapters. Do not remove those adapters merely because framework auth exists; first prove equivalent behavior against the installed framework.

`identity.caller(req)` shares a pending safe `{id,name,roles}` projection only within the same request. A new request verifies the token, eight-hour session-age ceiling, active profile, current roles and active credentials again. Writers using the same request call `identity.invalidate(req)` before preparing post-mutation props. Do not turn this into a process-wide user cache or rely on stale JWT roles. One page-preparation helper owns auth base/page/family/theme props; shared profile fields retain the existing field order.

The app plugin registers the public browser-safe `AppData` type under `app-data`. Its `ready()` checks database, generated client, configured app ID and required generated model listeners. Auth registers the purge POST only when that provider is ready; the provider rechecks availability at invocation. Auth owns caller, writable role, CSRF and exact `Purge` confirmation checks. App owns the trusted app ID, reviewed table map, transaction and owner scoping. No submitted app ID, owner ID or table name controls deletion. The current map remains limited to shell items, operations, notices and agent runs; moving ownership does not add common-component business tables or delete identity, company theme, other apps or other users. Adopters review their own scope explicitly.

Routes, challenge matching and auth-page links use the same `auth.base` (default `/auth`). The unused signup event is removed without adding public signup; proof fixtures retain direct framework AuthActions. Both proofs run the real auth contract at default and custom bases, including expiry, replay, concurrent redemption, request reuse/invalidation, current roles/activation, cookie preservation and scoped purge. The detailed [identity integration pattern](00357-stackpress-tested-plugin-pattern.md#identity-integration-and-app-data-ownership) links implementation and test owners. This remains bounded proof evidence, not production security acceptance.

## Activation and dependencies

Changes take effect after restart. There is no live unloading and no automatic dependency validation. The plugin that needs another plugin's service must check for it in its own `plugin.ts` and fall back or disable gracefully.

Register service providers during `config`. Check dependencies when they are available: normally in the dependent plugin's `listen` or `route` lifecycle callback after the full configuration phase. If a required service is missing, return before registering feature listeners, routes, workers or navigation. Do not register a route and let its handler crash on first use. Recheck each lifecycle callback; returning from `listen` does not suppress `route`.

A plugin can expose a reduced capability when an optional dependency is absent, but must not fake success or silently discard requested work. For required authentication/authorization or tenant isolation, disable the protected feature or fail closed. A missing optional feature must not prevent the independent shell or sibling features from starting.

Normal plugin selection can use the package manifest and a deployment-specific selected list. Do not build a central dependency graph validator or require a live-toggle controller. A small generic loader selection function may read enabled names, but it must not decide another plugin's dependencies.

Disabling a plugin is not deleting its schema, files or database rows. Keep schema compatibility until an explicit migration changes it. Stopping a worker at process shutdown differs from live plugin unloading. Test restart with each dependency missing and again with it restored.

## Lifecycle and dispatch

Boot: choose config → create server → bootstrap selected plugin modules → resolve `config` → resolve `listen` → resolve `route` → serve. Registration order and priority matter; resolve phases sequentially and await them.

Use `ctx.register(name, service)` and `ctx.plugin(name)` for services. Use `ctx.on(event, handler)`, `ctx.resolve(event, input)` and normal response/status handling for events. `ctx.get/post/...` owns routes; view registration is a separate mapping. Do not assume resolving a business event automatically applies HTTP authentication middleware.

The accepted 2026-10-10 [agent guidelines](../context/stackpress-logic-patterns.md) place all app business logic in events, including when there is one caller. Pages process web requests, invoke events and format web responses. Helpers called by events are optional. Priorities supply before/after extension seams for independent integration and compatibility plugins.

Use `pages/` for HTTP-oriented handlers, `events/` for reusable business actions, `views/` for Reactus pages, and generator folders only where used. Do not generate empty folders to satisfy a template. Keep business validation/authorization in the appropriate execution boundary for HTTP, internal events and background work.

Keep `plugin.ts` focused on wiring and feature-owned dependency guards. Put reusable React bodies/layouts in `components/` and browser-safe public exports in `client.ts`; reserve `index.ts` for intentional server exports and `types.ts` for shared contracts. In the app-shell/common-components proofs, providers check generated model metadata during late `config`; generated listeners become available during SQL `listen`, so recheck listener and identity readiness before subscriptions, workers, navigation and routes. Register the app request renderer during `listen`. Start the automation scheduler only after its listener-phase guards pass. [Concrete proof organization](00357-stackpress-tested-plugin-pattern.md#proof-plugin-organization) records handler/view owners and the early auth transform exception; load it before reorganizing these proofs.

## Scaffolding and configuration

Copy the maintained baseline to a new empty destination, without node_modules, receipts, generated output, databases or secret environment files. Rename package, product copy and marks; preserve structure and dependency pins unless deliberately upgraded. Use Yarn with `yarn.lock` and `yarn install --frozen-lockfile`; remove npm lockfiles when migrating an app. Scaffold creation alone is not completion: generate, check, build and exercise the runtime.

Maintain `config/develop.ts`, `config/build.ts`, `config/production.ts`, `config/preview.ts` and `config/client.ts` with common path/client/database definitions and awaited default bootstraps for CLI dispatch. For these proofs, keep the shared bootstrap helper at `tests/bootstrap.ts`; CLI configs and integration tests both import it. Type-check tests and scripts as well as config and plugins. Use Stackpress CLI commands instead of duplicate executable wrappers. Treat executable TypeScript configuration as code: later spread/duplicate keys override earlier ones.

Use one rendering owner. The supplied proof uses its own Ingest/Reactus shell; loading the aggregate Stackpress view plugin too would create competing rendering configuration. Compose the schema/SQL packages deliberately and document adapter wrappers where framework plugins assume services.

Provide `client.tsconfig`, `client.module`, `client.package`, `client.build` and any revision paths required by generation. Published examples can disagree: the researched generate event reads `cli.idea` and explicit `i`/`input`, although a public config type also describes `terminal.idea`. Prefer an explicit root input in the proof and verify emitted runtime contracts.

Keep private database URLs, seeds, cookies and authorization headers out of rendered props and receipts. Browser props must be an explicit safe projection. The browser provider is a serialized snapshot, not a live server object.

## Database policy and operations

PostgreSQL is the production default across OfficePress. Prefer PGlite for local development and proofs to reduce compute use; treat it as the development substitute for PostgreSQL and CockroachDB without requiring a separate cross-engine compatibility proof. This is a development policy, not evidence of direct execution on every engine. Select the adapter explicitly by environment; do not silently fall back from unavailable PostgreSQL to PGlite in production.

Put the one current development PGlite database in `.build/database/` instead of root `.data/`. It is temporary and disposable; do not retain multiple app-database versions. Use a unique proof-owned scratch directory only for an isolated run, then close it and remove that run's directory when no longer needed. Inspect existing review data before removing it. Never recursively delete `.build`; keep real production data and migration history outside disposable output.

Separate code generation, schema change application, data population and rendering build. Generated revisions and SQL migration files do not by themselves prove an applied migration. Commands such as push, install, purge and uninstall can destroy data depending on state; inspect the installed version's implementation and target before running. Proof schema initialization may only target an empty disposable database.

Use migration review and backups for real data. Parameterize values through the SQL API; keep database constraints and permissions authoritative. Keep repeatable development fixtures in config `database.populate` as event/data entries and run them explicitly against a fresh disposable database. A build alone does not apply schema or repopulate data.

## Idea ownership and generation

Use root `schema.idea` as a composition entry point. Split models and shared definitions into smaller `.idea` files by responsibility, with `use "./plugins/<name>/schema.idea"` or a comparable local structure. Import reusable built-ins deliberately; do not invent incompatible copies of built-in Profile/Auth/session models.

The user reports faster generation work with smaller Idea files. Adopt the smaller-file structure for targeted authoring and maintainability. Do not claim incremental compilation, a speedup percentage or independent per-file generation without measurement: the generator still resolves the composed schema.

Keep cross-file types and relations valid and use a stable root entry for normal generation. A disabled runtime plugin does not automatically remove a schema import. Treat schema removal as a separate migration decision. Prefer schema-native fields, validators and generated CRUD before handwritten duplication; use handwritten events for genuine business workflows and permissions.

The generation pipeline resolves Idea, contributes generators through the `idea` event, emits a client package, then reconnects that client to runtime services/model listeners. Verify both generated exports and a generated operation against the database. UI bundle compilation is a different step.

## UI implementation

Translate kit structure and behavior into Reactus/React components while preserving OfficePress tokens, copy, accessibility, states and branding. Frui provides behavior primitives; OfficePress defines the visual system. Use provider/hooks appropriate to the chosen rendering owner. Avoid mixing framework template/provider assumptions into the custom shell.

The vanilla kit scaffold and imperative scripts remain complete reference examples. They are not the OfficePress application runtime scaffold. Do not attach imperative DOM listeners to React-owned nodes as a shortcut. Apply the existing UI review workflow to rendered output; a backend proof is not visual product acceptance.

## Verification contract

For custom-app work, functional verification is followed by the required [post-verification audit and refactor cycle](00392-stackpress-post-verification-audit-cycle.md): inspect logic/cyclomatic complexity and responsibility boundaries, apply authorized scoped fixes and all applicable ChrisAI Coding style passes, then verify the final source again. Repeat when actionable findings remain. Load [the documentation and naming conventions](00393-stackpress-human-maintainable-code-style.md) for sectional/local comments, module-level-only JSDoc, framework-name exceptions and specific language rules. This 2026-10-10 user decision supplies automatic behavior-preserving refactor authorization within the task scope; it does not authorize unrelated behavior, data or deployment changes.

Verify locked versions, root Idea imports, generated client exports and runtime reconnection; type-check all maintained TypeScript; build client/server/CSS assets; serve both development and built production output; verify static files and HTTP behavior.

Exercise a feature enabled, explicitly disabled, and missing each required dependency. Confirm no feature routes/listeners remain while the shell and independent features work; restore the dependency after restart. Check optional fallbacks separately. Test persistence across a restart and ensure proof cleanup leaves unrelated data intact.

Record actual commands, environment, package versions, checks, failures and limitations in a local receipt. A passing scaffold proof proves only its enumerated mechanics. Direct production-engine execution and production security remain unverified until exercised; the development compatibility assumption does not require a separate proof or turn unrun checks into passed checks.

## Yarn, CLI scripts and proof layout

The user decision on 2026-10-08 supersedes older npm/dev/live/custom-wrapper examples. [CLI and test conventions](00373-stackpress-yarn-cli-and-proof-layout.md) records the upstream script inventory, scoped adaptations, plugin test aggregation and evidence paths; load it before changing app manifests or runners.

## Lazy handler registration and recurring corrections

The 2026-10-09 user decision requires literal lazy page/event imports in authored
plugin registration and continuing KB updates for verified recurring patterns.
Load [the complete lazy-registration and maintenance contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md)
before copying/refactoring handlers; it supersedes eager page-action examples,
retains lifecycle/security exceptions, and requires source/runtime regression checks.
