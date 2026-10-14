# Stackpress configuration and lifecycle

Resolve startup sequentially: load config, create server, bootstrap plugins, resolve `config`, `listen`, `route`, then serve. Respect service registration order and listener priorities. The loader runs once per instance; restart applies activation changes.

Keep common definitions with `develop`/`build`/`production`/`preview`/`client` overrides. Validate environment values in the consuming application boundary. TypeScript config is executable; object spreads and repeated keys can replace intended settings.

The baseline's custom Ingest/Reactus shell owns rendering. Do not also load the aggregate view plugin into it. Compose needed framework packages explicitly and guard their integration when required services are absent.

Supply client output/module/package/tsconfig and root Idea input. The researched generator reads `cli.idea` and explicit input arguments; don't assume the differently named public type is the implementation. Keep paths anchored to the app root. Put disposable development PGlite data in `.build/database/`; keep durable production storage and migration history outside disposable build output.

Project only safe values into browser props. Do not serialize request cookies, authorization headers, database config or full private sessions. Authorization must protect each exposed HTTP/event/job boundary; `ctx.resolve()` is not proof of access control.

## Explicit defaults in reusable baselines

User decision, 2026-10-14: both maintained proofs spell out configuration
defaults even when the framework can imply them, using the supplied local
Stackpress `templates/blog/config` as the coverage reference. Paths, client,
server and flat Reactus defaults belong in each proof's `config/common.ts`;
identity/application and optional integration settings belong in
`config/officepress.ts`. Command configs compose these owners and override
development, build or production behavior explicitly.

Correct: preserve the installed 0.10.8 defaults and existing OfficePress policy,
with comments explaining unset SMTP/sender, MCP, desktop, captcha, domain/API
scopes, endpoints, webhooks and permissions. Incorrect: copy blog data,
credentials, public auth APIs, broad role grants, `view.engine` or toastify
settings into this custom Ingest/Reactus shell. Empty/unset optional settings do
not install plugins or establish working integrations. Development fixtures
remain an explicit proof-only exception; adopters replace them with their own
population plan. Generation, typecheck, build and the existing managed proof
suites are the regression checks; this policy does not authorize MCP indexing.

Observed 0.10.8 exception: `database.schema` documents the blog's CASCADE/RESTRICT
options, but the installed `stackpress-sql/esm/transform/store/create.js` and
`Migrations.js` use fixed defaults from `transform/helpers.js`. Changing that
config block alone does not change generated foreign keys. `client.prettier`
is consumed by `stackpress-schema/esm/scripts/generate.js` for the TypeScript
branch; the JavaScript target uses compiler output. Keep these limitations
visible in config comments rather than implying unsupported override behavior.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested runtime contracts](../references/00357-stackpress-tested-plugin-pattern.md) — load for SQL integration timing, internal event statuses and per-entry build result handling.

- [Yarn, CLI scripts and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) — load when changing CLI configs, bootstrap paths or the `emit` dispatch convention.

- [Configuration, CLI and population](../references/00384-stackpress-configuration-cli-and-population.md) — load for command-specific config, CLI dispatch and fixture ownership.
- [Lifecycle and service registration](../references/00379-stackpress-lifecycle-and-service-registration.md) — load for phase sequencing, readiness and rare registration-order dependencies.
