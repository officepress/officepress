# Stackpress pages, events and dispatch

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when implementing handlers, business operations or lazy routes.

For req/res sharing and native outcomes, load [dispatch and response contracts](00391-stackpress-dispatch-and-response-contracts.md).

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r13"></a>

## R13. Register external page modules through direct lazy imports

Keep the route and literal import visible and default-export the handler action. The pages guide and store template show direct lazy imports. This supports deferred loading and tooling metadata; it does not establish a measured chunking or performance result.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
server.import.get("/catalog/:id", () => import("./pages/detail.js"));
server.view.get("/catalog/:id", "@/plugins/catalog/views/detail");
```

The literal lazy import loads the page module. It is not a pre-imported handler or a factory returning a namespace adapter.

Sources: [content/guides/100/120-pages.md, line 21](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/120-pages.md#L21); [templates/store/plugins/product/plugin.ts, line 11](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/product/plugin.ts#L11); [content/guides/400/410-generate-and-build.md, line 45](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/400/410-generate-and-build.md#L45).

<a id="r14"></a>

## R14. Distinguish import callbacks from direct actions

The upstream runtime reference describes import routing for anonymous zero-argument callbacks and explicit import.get/import.on facets. Named or parameterized functions are a different action shape. This is documented behavior; target dependency behavior was not re-tested here.

Basis: Documented mechanism. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
ctx.import.get("/catalog/:id", () => import("./pages/detail.js"));
ctx.import.on("catalog-detail", () => import("./events/detail.js"));
```

The explicit import facets make the loader intent visible. Do not change the loader into a parameterized callback and assume it has the same routing semantics.

Sources: [.agents/references/00004-runtime-api-contracts.md, line 110](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00004-runtime-api-contracts.md#L110).

<a id="r15"></a>

## R15. Keep the normal default action contract

Pages and events use the normal {req,res,ctx} action shape. The handler skill favors stackpress aggregate exports where supported while allowing established local import conventions. It does not prescribe namespace-like factory adapters for route loaders.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
import { action } from "stackpress/server";

export default action(async ({ req, res, ctx }) => {
  // Normal Stackpress action boundary.
});
```

Both page and event modules use the action contract. Their responsibilities differ even though their entry signatures match.

Sources: [skills/stackpress-plugin-pages-events/SKILL.md, line 58](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-pages-events/SKILL.md#L58).

<a id="r16"></a>

## R16. Events own app business logic; pages own web request/response work

The user clarified that an event contains app business logic, reusable across web app, API and CLI. A page processes the request, calls events and formats the web response. This boundary applies even when the operation currently has one caller. Page-specific work means web adaptation; helper extraction from events is optional.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// pages/detail.ts — action body excerpt
await ctx.emit("catalog-detail", req, res);
if (res.code !== 200) return;
res.data.set("page", { title: "Catalog detail" });
setViewProps(req, res, ctx);

// events/detail.ts — action body excerpt
const outcome = await ctx.resolve("product-search", {
  eq: { id: req.data("id"), active: true }
});
if (outcome.code !== 200) {
  res.fromStatusResponse(outcome);
  return;
}
const item = outcome.results?.[0];
if (!item) {
  res.setError("Product unavailable").statusCode(404);
  return;
}
res.results(item);
```

User-confirmed boundary: the event owns the app business operation; the page processes the web request, calls events and formats the web response. product-search stands in for an existing generated capability. Active-product selection and unavailable-product outcomes are business decisions made in the event.

Sources: [skills/stackpress-plugin-pages-events/SKILL.md, line 115](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-pages-events/SKILL.md#L115); [content/guides/100/130-events.md, line 21](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/130-events.md#L21).

<a id="r17"></a>

## R17. Normalize request data before calling the next capability

req.data is merged input; req.post/query/headers/session retain source-specific meaning. Prepare the contract expected by the next event on req.data. A default for this request does not belong in global config.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Page request adaptation:
req.data.set("id", req.data("productId"));
await ctx.emit("catalog-detail", req, res);
```

Normalize transport input into the event contract. Business defaults, rules and validation that all callers require belong to the event; this mapping is web input adaptation.

Sources: [content/guides/100/123-data-surfaces.md, line 23](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/123-data-surfaces.md#L23); [content/guides/100/123-data-surfaces.md, line 208](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/123-data-surfaces.md#L208).

<a id="r53"></a>

## R53. Feature owners register direct lazy pages and separate views

Product/cart/checkout/order entrypoints own their routes. Product uses direct lazy imports; cart/checkout demonstrate sharing one default action between GET and POST and branching by req.method. The sample needs no route-loader factory namespace.

Basis: Sample observation. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
export default function plugin(server: HttpServer<Config>) {
  server.on('route', async _ => {
    // keep cart ownership inside the cart plugin, including the postback route
    server.import.get('/cart', () => import('./pages/index.js'));
    server.view.get('/cart', '@/plugins/cart/views/index');
    server.import.post('/cart/items', () => import('./pages/index.js'));
  });
};
```

The cart registers direct lazy page routes; inspect the full source for its corresponding view bindings. [Source excerpt: templates/store/plugins/cart/plugin.ts, lines 8-15](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/cart/plugin.ts#L8-L15).

Sources: [templates/store/plugins/product/plugin.ts, line 9](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/product/plugin.ts#L9); [templates/store/plugins/cart/pages/index.ts, line 23](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/cart/pages/index.ts#L23).

<a id="r54"></a>

## R54. Compose generated data operations inside business events

Use generated events to obtain domain data, then keep business filtering and not-found decisions in the app event. A page delegates to that app event and formats its web response. The store sample demonstrates generated read/filter/readback calls; its page placement is superseded by the accepted event/page boundary.

Basis: Sample observation. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// events/detail.ts — action body excerpt, custom app adaptation
const outcome = await ctx.resolve("product-search", {
  eq: { slug: req.data("slug"), active: true }
});
if (outcome.code !== 200) {
  res.fromStatusResponse(outcome);
  return;
}
const item = outcome.results?.[0];
if (!item) {
  res.setError("Product unavailable").statusCode(404);
  return;
}
res.results(item);
```

This is an adapted event body, not the original sample page. `product-search` represents an available generated capability; names and active filtering are illustrative business policy. Supply the application’s caller/ownership checks where required.

Sources: [templates/store/plugins/product/pages/detail.ts, line 15](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/product/pages/detail.ts#L15); [templates/store/plugins/order/pages/confirmation.ts, line 14](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/order/pages/confirmation.ts#L14).
