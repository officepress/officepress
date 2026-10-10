# Stackpress priority inputs, guards and replacements

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when extending another plugin’s event before/after it, cancelling work or replacing a capability.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r69"></a>

## R69. Normalize inputs before another plugin's event runs

Plugin B can rewrite the shared request before plugin A's default-priority business handler sees it. Put the normalization in a higher-priority event listener so all callers of that capability receive it.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// plugins/category-compat/events/normalize.ts
export default action(({ req }) => {
  if (req.data("id") === "guest") req.data.set("id", 0);
});
// listen registration:
ctx.import.on("category-detail", () => import("./events/normalize.js"), 100);
```

The registration and handler belong to separate files; import action from stackpress/server in the handler. The mutation is visible to the next listener, as checked in the isolated probe. The guest-to-zero mapping is the user's illustrative rule, not a framework requirement.

Sources: [lib/src/queue/ItemQueue.ts, line 39](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/ItemQueue.ts#L39); [lib/src/queue/TaskQueue.ts, line 46](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/TaskQueue.ts#L46); [ingest/ingest/src/plugin/ActionRouter.ts, line 315](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L315); [ingest/ingest/src/Router.ts, line 128](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L128).

<a id="r70"></a>

## R70. A higher-priority guard can cancel the remaining event chain

Returning exactly false aborts the queue; returning undefined merely finishes that listener. A guard may set a useful response first, then return false. Core and lower-priority post-hooks will not run after cancellation.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
export default action(({ req, res }) => {
  if (Number.isNaN(Number(req.data("id")))) {
    res.setError("Invalid category id").statusCode(400);
    return false;
  }
});
// Register before the core:
ctx.import.on("category-detail", () => import("./events/guard.js"), 100);
```

The numeric guard follows the user's example; Number coercion is not a complete business validation policy. Setting an error is separate from cancellation: false controls listener execution, not an automatic HTTP error code.

Sources: [lib/src/queue/ItemQueue.ts, line 39](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/ItemQueue.ts#L39); [lib/src/queue/TaskQueue.ts, line 46](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/TaskQueue.ts#L46); [ingest/ingest/src/plugin/ActionRouter.ts, line 315](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L315); [lib/src/Status.ts, line 84](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/Status.ts#L84).

<a id="r71"></a>

## R71. Post-hooks can enrich successful results or supply a missing result

A lower-priority event listener sees the response after the core operation. It may enrich a result or supply a fallback when the event contract permits that fallback.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
export default action(({ res }) => {
  const successfulOrUnset = !res.code || res.code === 200;
  if (res.body === null && !res.error && successfulOrUnset) {
    res.results({ foo: "bar" });
  }
});
ctx.import.on("category-detail", () => import("./events/fallback.js"), -100);
```

This uses the current results method and avoids replacing a valid falsy body or overwriting an explicit error/redirect. A post-hook is not a finally block: it is skipped if an earlier listener cancels or throws.

Sources: [lib/src/queue/ItemQueue.ts, line 39](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/ItemQueue.ts#L39); [lib/src/queue/TaskQueue.ts, line 46](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/TaskQueue.ts#L46); [ingest/ingest/src/plugin/ActionRouter.ts, line 315](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L315); [lib/src/router/Response.ts, line 381](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/router/Response.ts#L381).

<a id="r72"></a>

## R72. Replace or suppress a capability from a separate plugin

Plugin B can register a higher-priority replacement that sets the result and returns false. Plugin A remains unchanged. Removing B from a later initialized composition restores the original handler when the underlying contract remains compatible.

Basis: Application pattern supported by verified mechanisms. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Plugin B registration:
ctx.import.on("category-detail", () => import("./events/replacement.js"), 100);

// replacement.ts action body:
res.results({ id: req.data("id"), source: "replacement" });
return false;
```

Cancellation suppresses all remaining listeners for this invocation, including lower-priority integrations. Use this deliberately when replacing/removing behavior, rather than assuming it only disables one chosen callback.

Sources: [lib/src/queue/ItemQueue.ts, line 39](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/ItemQueue.ts#L39); [lib/src/queue/TaskQueue.ts, line 46](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/queue/TaskQueue.ts#L46); [ingest/ingest/src/plugin/ActionRouter.ts, line 315](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/plugin/ActionRouter.ts#L315); [ingest/ingest/src/Router.ts, line 164](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L164).
