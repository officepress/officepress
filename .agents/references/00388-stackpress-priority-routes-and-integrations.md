# Stackpress priority routes and integrations

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when adding route hooks, third-party integration plugins, compatibility adapters or event-family observers.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r73"></a>

## R73. Use route priorities for web-specific before/after behavior

The same priority queue applies to route handlers. A separate plugin can add web concerns before or after an existing route while keeping the original page module untouched.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
ctx.import.get("/category/:id", () => import("./pages/before.js"), 100);
// Original plugin owns its route at priority 0.
ctx.import.get("/category/:id", () => import("./pages/after.js"), -100);
```

For example, add headers around the page. Named path captures are re-applied before each matching route listener in this implementation; normalize business IDs on the named business event, rather than assuming a rewrite of the route capture will survive into its next listener. That behavior was separately probed.

Sources: [ingest/ingest/src/Router.ts, line 310](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L310); [ingest/ingest/src/plugin/ImportRouter.ts, line 190](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ImportRouter.ts#L190); [ingest/ingest/src/plugin/ActionRouter.ts, line 301](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L301); [stackpress/packages/stackpress-api/src/plugin.ts, line 100](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/packages/stackpress-api/src/plugin.ts#L100).

<a id="r74"></a>

## R74. Keep third-party integrations in post-event plugins

An integration plugin can observe a successful business result after the owning plugin handles it. Stackpress's API plugin already demonstrates this with configured webhooks at priority -200.

Basis: Framework example and reusable application pattern. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
ctx.import.on("category-update", () => import("./events/sync-external.js"), -200);

// sync-external.ts — action body excerpt:
if (res.code !== 200) return;
const record = res.body;
// Send or queue the integration operation owned by this plugin.
```

The integration can be included or omitted independently of the domain plugin. The source mechanism awaits listeners; decide the app's failure/retry/queue behavior explicitly rather than treating a post-hook as automatic background delivery.

Sources: [stackpress/packages/stackpress-api/src/plugin.ts, line 23](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/packages/stackpress-api/src/plugin.ts#L23); [stackpress/packages/stackpress-api/src/plugin.ts, line 41](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/packages/stackpress-api/src/plugin.ts#L41).

<a id="r75"></a>

## R75. Use a compatibility plugin to adapt an evolving capability contract

Pre/post hooks let a separate plugin translate an old caller input or adapt a new result without modifying the original feature plugin. This supplies a practical seam for graceful app version changes.

Basis: Application pattern derived from verified priorities and user intent. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Earlier compatibility action:
if (!req.data.has("id") && req.data.has("legacyId")) {
  req.data.set("id", req.data("legacyId"));
}

// Later compatibility action:
if (res.code === 200 && res.body && typeof res.body === "object") {
  res.results({ ...res.body, displayName: res.body.name });
}
```

Register input adaptation above the core and result adaptation below it. Field names are illustrative. This is code-contract composition; it does not automatically roll back schema/data changes, or promise live plugin unloading.

Sources: [lib/src/queue/ItemQueue.ts, line 39](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/ItemQueue.ts#L39); [lib/src/queue/TaskQueue.ts, line 46](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/TaskQueue.ts#L46); [ingest/ingest/src/plugin/ActionRouter.ts, line 315](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L315); [ingest/specs/concepts/composition.md, line 5](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/specs/concepts/composition.md#L5).

<a id="r76"></a>

## R76. Choose HTTP lifecycle hooks or business event hooks by scope

HTTP request/response hooks wrap a transport request. Named event hooks wrap that business capability wherever it is called. Direct resolve does not automatically execute the HTTP request/response lifecycle.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Web lifecycle observer:
ctx.on("request", ({ req }) => {
  // Web request concern.
});
ctx.on("response", ({ res }) => {
  // Web response concern.
});
// Capability-specific hook for web, API, CLI or internal callers:
ctx.import.on("category-detail", () => import("./events/guard.js"), 100);
```

Put shared business validation/policy on the event. Web-specific handling stays in pages/routes/lifecycle hooks, consistent with the user-confirmed boundary.

Sources: [ingest/ingest/src/Route.ts, line 91](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Route.ts#L91); [ingest/ingest/src/Route.ts, line 164](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Route.ts#L164); [ingest/ingest/src/Router.ts, line 382](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L382); [ingest/specs/concepts/request-lifecycle.md, line 37](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/specs/concepts/request-lifecycle.md#L37).

<a id="r77"></a>

## R77. Target a deliberate event family with one integration hook

Ingest accepts RegExp event names and materializes matching listeners into the same priority queue. A plugin can cover a defined family of capabilities without copying the same observer for each name.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// listen registration in the integration plugin:
ctx.import.on(/^category-(create|update)$/,
  () => import("./events/sync-category.js"), -200);

// events/sync-category.ts — default action excerpt:
export default action(async ({ req, res }) => {
  if (res.code !== 200) return;
  // Observe/synchronize this defined business event family.
});
```

The regex is an explicit scope choice, not a recommendation to attach policy to every event. Its priority behavior was checked with a category-create probe.

Sources: [ingest/ingest/src/Router.ts, line 165](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L165); [lib/src/emitter/ExpressEmitter.ts, line 36](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/emitter/ExpressEmitter.ts#L36); [lib/src/emitter/EventEmitter.ts, line 128](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/emitter/EventEmitter.ts#L128).
