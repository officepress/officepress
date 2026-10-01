# OfficePress Stackpress implementation contract

Owner: [Stackpress handbook](../context/stackpress.md). Load before implementing or reviewing any OfficePress app. User decisions on 2026-10-01 take precedence over imported examples.

## Scope and authority

Every OfficePress app uses Stackpress. The maintained runnable baseline is `proofs/stackpress-boilerplate/` in this repository. Use the 0.10.8 Stackpress ecosystem; React, Frui, Vite and other independent packages have their own versions. Preserve the lockfile and verify actual resolved versions.

The baseline is shared by all OfficePress apps. Commerce Orders-specific P13/P14 task labels and missing-feature lists are historical provenance, not requirements for every app. The proof demonstrates framework mechanics; it does not implement all OfficePress business features or production identity/tenant security.

Imported source instructions remain available in full. Their generic scaffold, dependency versions, sample credentials, phone authentication, deployment assumptions and broad cleanup suggestions do not override this contract. In particular, existing OfficePress exclusions of SMS two-factor authentication and recovery codes still apply. Existing purge/delete UI is production material; that product decision does not authorize destructive framework database commands on real data.

## Separation of responsibility

A plugin owns a coherent capability, including its appropriate model definitions, services, handlers and views. A plugin is not a container for the entire application. `app` owns shared HTTP/rendering mechanics; `store` owns connection selection/registration. Feature logic belongs in responsibility-specific plugins. Do not make one plugin per technical layer without considering whether the capability can operate independently.

Decide a boundary by asking: can this capability be disabled, what service does it provide, what does it require, and what should still work without it? Separate independent integrations, communication channels, mock/proof data and optional enhancements when they have different activation or ownership boundaries. Avoid a dependency cycle disguised as several directories.

A dependency is a documented public service or event contract, not an import of another plugin's private implementation. Put shared types in a browser-safe contract module when needed. State required services, optional services, unavailable behavior and registration timing in each plugin's documentation.

## Activation and dependencies

Changes take effect after restart. There is no live unloading and no automatic dependency validation. The plugin that needs another plugin's service must check for it in its own `plugin.ts` and fall back or disable gracefully.

Register service providers during `config`. Check dependencies when they are available: normally in the dependent plugin's `listen` or `route` lifecycle callback after the full configuration phase. If a required service is missing, return before registering feature listeners, routes, workers or navigation. Do not register a route and let its handler crash on first use. Recheck each lifecycle callback; returning from `listen` does not suppress `route`.

A plugin can expose a reduced capability when an optional dependency is absent, but must not fake success or silently discard requested work. For required authentication/authorization or tenant isolation, disable the protected feature or fail closed. A missing optional feature must not prevent the independent shell or sibling features from starting.

Normal plugin selection can use the package manifest and a deployment-specific selected list. Do not build a central dependency graph validator or require a live-toggle controller. A small generic loader selection function may read enabled names, but it must not decide another plugin's dependencies.

Disabling a plugin is not deleting its schema, files or database rows. Keep schema compatibility until an explicit migration changes it. Stopping a worker at process shutdown differs from live plugin unloading. Test restart with each dependency missing and again with it restored.

## Lifecycle and dispatch

Boot: choose config → create server → bootstrap selected plugin modules → resolve `config` → resolve `listen` → resolve `route` → serve. Registration order and priority matter; resolve phases sequentially and await them.

Use `ctx.register(name, service)` and `ctx.plugin(name)` for services. Use `ctx.on(event, handler)`, `ctx.resolve(event, input)` and normal response/status handling for events. `ctx.get/post/...` owns routes; view registration is a separate mapping. Do not assume resolving a business event automatically applies HTTP authentication middleware.

Use `pages/` for HTTP-oriented handlers, `events/` for reusable business actions, `views/` for Reactus pages, and generator folders only where used. Do not generate empty folders to satisfy a template. Keep business validation/authorization in the appropriate execution boundary for HTTP, internal events and background work.

## Scaffolding and configuration

Copy the maintained baseline to a new empty destination, without node_modules, receipts, generated output, databases or secret environment files. Rename package, product copy and marks; preserve structure and dependency pins unless deliberately upgraded. Install using the included lockfile. Scaffold creation alone is not completion: generate, check, build and exercise the runtime.

Maintain separate development, build and live config with common path/client/database definitions. Type-check scripts as well as config and plugins. Do not leave `config/live.ts` or `scripts/serve.ts` empty. Treat executable TypeScript configuration as code: later spread/duplicate keys override earlier ones.

Use one rendering owner. The supplied proof uses its own Ingest/Reactus shell; loading the aggregate Stackpress view plugin too would create competing rendering configuration. Compose the schema/SQL packages deliberately and document adapter wrappers where framework plugins assume services.

Provide `client.tsconfig`, `client.module`, `client.package`, `client.build` and any revision paths required by generation. Published examples can disagree: the researched generate event reads `cli.idea` and explicit `i`/`input`, although a public config type also describes `terminal.idea`. Prefer an explicit root input in the proof and verify emitted runtime contracts.

Keep private database URLs, seeds, cookies and authorization headers out of rendered props and receipts. Browser props must be an explicit safe projection. The browser provider is a serialized snapshot, not a live server object.

## Database policy and operations

PostgreSQL is the production default across OfficePress. PGlite is the default for local development and disposable proofs. Select the adapter explicitly by environment; do not silently fall back from unavailable PostgreSQL to PGlite in production.

Keep database files outside disposable build output. Put proof databases in unique proof-owned directories. Never recursively delete `.build` when it could contain a user's database or migration history. Only remove artifacts owned by the current disposable run.

Separate code generation, schema change application, data population and rendering build. Generated revisions and SQL migration files do not by themselves prove an applied migration. Commands such as push, install, purge and uninstall can destroy data depending on state; inspect the installed version's implementation and target before running. Proof schema initialization may only target an empty disposable database.

Use migration review and backups for real data. Parameterize values through the SQL API; keep database constraints and permissions authoritative. Validate PostgreSQL independently: a PGlite pass does not establish PostgreSQL connectivity, pooling or deployment behavior.

## Idea ownership and generation

Use root `schema.idea` as a composition entry point. Split models and shared definitions into smaller `.idea` files by responsibility, with `use "./plugins/<name>/schema.idea"` or a comparable local structure. Import reusable built-ins deliberately; do not invent incompatible copies of built-in Profile/Auth/session models.

The user reports faster generation work with smaller Idea files. Adopt the smaller-file structure for targeted authoring and maintainability. Do not claim incremental compilation, a speedup percentage or independent per-file generation without measurement: the generator still resolves the composed schema.

Keep cross-file types and relations valid and use a stable root entry for normal generation. A disabled runtime plugin does not automatically remove a schema import. Treat schema removal as a separate migration decision. Prefer schema-native fields, validators and generated CRUD before handwritten duplication; use handwritten events for genuine business workflows and permissions.

The generation pipeline resolves Idea, contributes generators through the `idea` event, emits a client package, then reconnects that client to runtime services/model listeners. Verify both generated exports and a generated operation against the database. UI bundle compilation is a different step.

## UI implementation

Translate kit structure and behavior into Reactus/React components while preserving OfficePress tokens, copy, accessibility, states and branding. Frui provides behavior primitives; OfficePress defines the visual system. Use provider/hooks appropriate to the chosen rendering owner. Avoid mixing framework template/provider assumptions into the custom shell.

The vanilla kit scaffold and imperative scripts remain complete reference examples. They are not the OfficePress application runtime scaffold. Do not attach imperative DOM listeners to React-owned nodes as a shortcut. Apply the existing UI review workflow to rendered output; a backend proof is not visual product acceptance.

## Verification contract

Verify locked versions, root Idea imports, generated client exports and runtime reconnection; type-check all maintained TypeScript; build client/server/CSS assets; serve both development and built production output; verify static files and HTTP behavior.

Exercise a feature enabled, explicitly disabled, and missing each required dependency. Confirm no feature routes/listeners remain while the shell and independent features work; restore the dependency after restart. Check optional fallbacks separately. Test persistence across a restart and ensure proof cleanup leaves unrelated data intact.

Record actual commands, environment, package versions, checks, failures and limitations in a local receipt. A passing scaffold proof proves only its enumerated mechanics. PostgreSQL integration and production security remain unverified until exercised directly. Do not turn a future check into a passed claim.
