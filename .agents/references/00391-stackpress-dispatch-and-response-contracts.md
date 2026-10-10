# Stackpress dispatch and response contracts

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when choosing emit/resolve, passing mutable request payloads or formatting business and web responses.

The event/page ownership and lazy action examples live in [pages and events](00380-stackpress-pages-events-and-dispatch.md); load that reference when implementing modules and registrations.

<a id="r18"></a>

## R18. Choose emit for shared references; resolve for a convenient native outcome

emit(event, req, res) drives the same event queue using the supplied request/response references and returns emitter status. resolve can run with no payload, with a temporary plain payload, or with supplied instances; it returns a native status-response object. resolve is implemented on top of emit and can be used instead of it. A direct emit handoff can be easier to read when the intention is to mutate the existing web response. Do not require both forms or classify them as side-effects versus result events.

Basis: Verified mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Existing references can be mutated by the event:
await ctx.emit("category-detail", req, res);

// Temporary request/response, no input needed:
const health = await ctx.resolve("health-check");

// Temporary flat payload and native JS outcome:
const detail = await ctx.resolve("category-detail", { id: req.data("id") });

// Existing instances remain shared even through resolve:
const shared = await ctx.resolve("category-detail", req, res);
```

The native outcome includes code/status/error/errors/stack/results/total, not every header, session write or view-metadata field. To avoid mutating original wrappers, pass fresh input and omit those instances. Nested objects are not deep-cloned automatically: copy the business fields you need, or clone supported nested data deliberately. The returned object is mutable, not a frozen or detached deep copy.

Sources: [ingest/ingest/src/Router.ts, line 382](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L382); [ingest/ingest/src/Router.ts, line 128](https://github.com/stackpress/ingest/blob/477ec47f8b5dafa5713b13f9c964d06c61c22938/ingest/src/Router.ts#L128); [lib/src/router/Response.ts, line 447](https://github.com/stackpress/lib/blob/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a/src/router/Response.ts#L447).

<a id="r19"></a>

## R19. Use response surfaces for their intended roles

Use results for the primary payload, rows plus total for collections, res.data for page/view metadata, headers for HTTP metadata and res.session for session writes. Prepare one coherent answer and return after redirect/error; field errors are useful when validation can identify the input.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
res.results(item);                  // primary payload
res.data.set("page", { title });     // web/view metadata
// For a collection instead:
res.rows(items, total);
// For a redirect instead:
res.redirect("/catalog");
return;
```

These fragments demonstrate distinct response surfaces, not multiple answers in one handler. Business result construction belongs to the event; a page adds web metadata or redirects.

Sources: [content/guides/100/122-response.md, line 247](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/122-response.md#L247); [content/guides/100/123-data-surfaces.md, line 62](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/123-data-surfaces.md#L62).

