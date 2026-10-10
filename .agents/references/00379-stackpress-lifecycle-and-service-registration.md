# Stackpress lifecycle and service registration

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when wiring bootstrap, providers, named events or phase dependencies.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r06"></a>

## R06. Bootstrap and lifecycle initialization are different steps

Create the server, set config, await plugin bootstrap, then resolve config, listen and route in order. bootstrap() loads plugins; it does not itself resolve the Stackpress phases.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
await server.bootstrap();
await server.resolve("config");
await server.resolve("listen");
await server.resolve("route");
```

Initialization excerpt after server creation and config assignment. bootstrap loads plugins; resolving the phases performs their initialization.

Sources: [.agents/context/runtime-and-operations.md, line 3](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/runtime-and-operations.md#L3); [.agents/references/00004-runtime-api-contracts.md, line 152](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00004-runtime-api-contracts.md#L152).

<a id="r07"></a>

## R07. Place work in its lifecycle

Registration attaches phase listeners and dependency-light state. config registers services and environment mechanisms; listen registers reusable operations/generated listeners; route exposes requests; idea contributes transforms. This is source-backed placement, without any prescribed ready helper.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
server.on("config", ({ ctx }) => {
  // Configure/register this plugin's required services.
});
server.on("listen", ({ ctx }) => {
  ctx.import.on("catalog-detail", () => import("./events/detail.js"));
});
server.on("route", ({ ctx }) => {
  ctx.import.get("/catalog/:id", () => import("./pages/detail.js"));
});
```

Services, reusable capabilities and web routes have distinct phases. The source does not prescribe the OfficePress ready helper.

Sources: [.agents/context/extension-and-contribution.md, line 85](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md#L85); [skills/stackpress-plugin-scaffold/references/plugin-scaffold.md, line 73](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#L73).

<a id="r08"></a>

## R08. The aggregate framework and custom modules compose

The aggregate loads server, schema, language, CSRF, SQL, view, session, API and admin in an intentional order. Session includes auth/email/session behavior. AI and desktop are optional packages. Local plugins own product-specific behavior alongside this foundation.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```json
{
  "plugins": [
    "stackpress",
    "./plugins/catalog/plugin",
    "./plugins/reports/plugin"
  ]
}
```

Partial manifest: the aggregate framework supplies the foundation and local modules add app behavior. Optional AI/desktop integrations are not implied by this list.

Sources: [content/guides/100/111-composition.md, line 63](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/111-composition.md#L63); [.agents/references/00009-cli-and-plugin-contracts.md, line 85](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00009-cli-and-plugin-contracts.md#L85).

<a id="r09"></a>

## R09. Use named events as reusable runtime contracts

Reusable business behavior belongs in named events callable by pages, other plugins and CLI. The event name is the capability contract; its file path is implementation placement. A separate custom subscription bus is not the pattern these sources teach.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
ctx.import.on("catalog-detail", () => import("./events/detail.js"));
// In another plugin or a page:
const outcome = await ctx.resolve("catalog-detail", { id });
```

The named event is the reusable capability. A CLI can invoke the same event name; web-specific formatting remains in the page.

Sources: [content/guides/100/130-events.md, line 57](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/130-events.md#L57); [.agents/context/architecture-and-composition.md, line 68](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/architecture-and-composition.md#L68).

<a id="r11"></a>

## R11. Priorities create ordered, awaited before/core/after extension points

Listeners run from higher priority to lower priority; default priority is 0. Tasks are awaited sequentially. Registration order breaks same-priority ties in the documented queue and checked runtime. Use explicit distinct priorities when the dependency matters; changing registration order is not the same as setting priority.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
ctx.import.on("category-detail", () => import("./events/normalize.js"), 100);
// Plugin A owns its core handler at priority 0.
ctx.import.on("category-detail", () => import("./events/enrich.js"), -100);
```

The normalizer runs before the core, and enrichment runs afterward only if earlier listeners do not abort. Priority is a practical extension contract, not just an incidental execution detail.

Sources: [lib/src/queue/ItemQueue.ts, line 39](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/ItemQueue.ts#L39); [lib/src/queue/TaskQueue.ts, line 46](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/TaskQueue.ts#L46); [ingest/ingest/src/plugin/ActionRouter.ts, line 315](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L315); [lib/specs/api/queue/ItemQueue.md, line 3](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/specs/api/queue/ItemQueue.md#L3).

<a id="r52"></a>

## R52. Consider plugin order when troubleshooting lifecycle dependencies

Plugins bootstrap sequentially in the configured list. Equal-priority phase listeners follow their registration order; explicit priority can move a provider before a consumer. If one config listener needs another plugin's config service, inspect phase, priority and registration order. The user identifies this as a rare troubleshooting concern, not a default reason to reorder every plugin.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Provider plugin: register earlier within config.
ctx.on("config", ({ ctx }) => {
  // Create and register the provider service.
}, 100);

// Consumer plugin: depends on the provider's config initialization.
ctx.on("config", ({ ctx }) => {
  // Read the now-configured provider.
}, 0);
```

Setup bodies are intentionally omitted. This explains an actual dependency ordering mechanism without prescribing a universal plugin list.

Sources: [ingest/ingest/src/Loader.ts, line 106](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Loader.ts#L106); [ingest/ingest/src/Server.ts, line 87](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Server.ts#L87); [lib/specs/api/queue/ItemQueue.md, line 3](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/specs/api/queue/ItemQueue.md#L3).

<a id="r55"></a>

## R55. Store infrastructure delegates to a connection helper

connect.ts wraps PGlite at an environment-selected path with .build/database as fallback. plugin.ts registers the engine during config. Query logging is present as sample diagnostics; it is not a prescribed production logging policy.

Basis: Sample observation. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// plugin.ts — provider registration excerpt
server.on("config", async ({ ctx }) => {
  const database = await connect();
  ctx.register("database", database);
});
```

This adapts the sample’s provider registration without adding query logging. Import the app-owned connection helper and use its selected environment/driver policy. The original sample’s diagnostic logging is not a production requirement. [Source: templates/store/plugins/store/plugin.ts, lines 6-14](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/store/plugin.ts#L6-L14).

Sources: [templates/store/plugins/store/connect.ts, line 9](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/store/connect.ts#L9); [templates/store/plugins/store/plugin.ts, line 10](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/store/plugin.ts#L10).
