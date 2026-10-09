# Stackpress configuration and lifecycle

Resolve startup sequentially: load config, create server, bootstrap plugins, resolve `config`, `listen`, `route`, then serve. Respect service registration order and listener priorities. The loader runs once per instance; restart applies activation changes.

Keep common definitions with `develop`/`build`/`production`/`preview`/`client` overrides. Validate environment values in the consuming application boundary. TypeScript config is executable; object spreads and repeated keys can replace intended settings.

The baseline's custom Ingest/Reactus shell owns rendering. Do not also load the aggregate view plugin into it. Compose needed framework packages explicitly and guard their integration when required services are absent.

Supply client output/module/package/tsconfig and root Idea input. The researched generator reads `cli.idea` and explicit input arguments; don't assume the differently named public type is the implementation. Keep paths anchored to the app root. Put disposable development PGlite data in `.build/database/`; keep durable production storage and migration history outside disposable build output.

Project only safe values into browser props. Do not serialize request cookies, authorization headers, database config or full private sessions. Authorization must protect each exposed HTTP/event/job boundary; `ctx.resolve()` is not proof of access control.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested runtime contracts](../references/00357-stackpress-tested-plugin-pattern.md) — load for SQL integration timing, internal event statuses and per-entry build result handling.

- [Yarn, CLI scripts and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) — load when changing package scripts, migrating config/bootstrap paths, aggregating plugin tests or storing proof evidence; records the accepted 2026-10-08 conventions and upstream provenance.
