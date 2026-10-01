# Stackpress configuration and lifecycle

Resolve startup sequentially: load config, create server, bootstrap plugins, resolve `config`, `listen`, `route`, then serve. Respect service registration order and listener priorities. The loader runs once per instance; restart applies activation changes.

Keep common definitions with separate dev/build/live overrides. Validate environment values in the consuming application boundary. TypeScript config is executable; object spreads and repeated keys can replace intended settings.

The baseline's custom Ingest/Reactus shell owns rendering. Do not also load the aggregate view plugin into it. Compose needed framework packages explicitly and guard their integration when required services are absent.

Supply client output/module/package/tsconfig and root Idea input. The researched generator reads `cli.idea` and explicit input arguments; don't assume the differently named public type is the implementation. Keep paths anchored to the app root and storage separate from disposable output.

Project only safe values into browser props. Do not serialize request cookies, authorization headers, database config or full private sessions. Authorization must protect each exposed HTTP/event/job boundary; `ctx.resolve()` is not proof of access control.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested runtime contracts](../references/00357-stackpress-tested-plugin-pattern.md) — load for SQL integration timing, internal event statuses and per-entry build result handling.
