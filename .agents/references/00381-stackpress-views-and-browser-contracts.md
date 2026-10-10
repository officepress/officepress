# Stackpress views and browser contracts

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when pairing routes/views, selecting layouts, placing hooks or exposing browser props.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r20"></a>

## R20. Bind page and view separately

An HTML route pairs the lazy page handler with view.get pointing at a browser entry. The server handler prepares data; the view presents it. The demonstrated store JSON postback does not need a separate view binding. Moving the view requires updating its route target.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
server.import.get("/catalog", () => import("./pages/index.js"));
server.view.get("/catalog", "@/plugins/catalog/views/index");
```

An HTML page has a server handler and a browser view entry. A JSON-only endpoint does not need an HTML view binding.

Sources: [skills/stackpress-plugin-views/SKILL.md, line 70](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-views/SKILL.md#L70); [content/guides/500/530-plugin-layout.md, line 220](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/500/530-plugin-layout.md#L220).

<a id="r21"></a>

## R21. Prepare shared view props deliberately

For the standard Stackpress view contract, setViewProps copies shared view/brand/language data. Keep the main payload on response.results and view metadata on response.data. The browser receives a serialized snapshot, not live server services.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Page action excerpt, after a successful business event:
res.data.set("page", { title: "Catalog" });
setViewProps(req, res, ctx);
```

The page adds web metadata and standard shared view props. It does not replace the event result with view configuration.

Sources: [content/guides/100/142-server-props.md, line 21](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/142-server-props.md#L21); [.agents/context/interfaces-and-experience.md, line 49](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/interfaces-and-experience.md#L49).

<a id="r22"></a>

## R22. Mount providers before consuming hooks

Page mounts LayoutBlank or LayoutPanel and forwards the server props. Body or child components below the provider boundary consume useConfig/useResponse/useSession and similar hooks. Hooks in the component introducing the layout run too early.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```tsx
function Body() {
  const response = useResponse();
  return <pre>{JSON.stringify(response.results)}</pre>;
}
function Page(props: ServerConfigPageProps) {
  return <LayoutPanel {...props}><Body /></LayoutPanel>;
}
```

Imports are omitted in this excerpt. Body reads context after the layout mounts providers; Page introduces the provider boundary.

Sources: [skills/stackpress-plugin-views/SKILL.md, line 154](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-views/SKILL.md#L154); [content/guides/100/142-server-props.md, line 121](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/142-server-props.md#L121).

<a id="r23"></a>

## R23. Choose the layout for the page's role

LayoutBlank is the normal starting point for focused/auth-like flows; LayoutPanel for shared navigation and app chrome. Custom shells may use lower-level layout pieces when needed. No supplied source makes the OfficePress Frame renderer a universal requirement.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```tsx
// Focused page:
<LayoutBlank {...props}><Body /></LayoutBlank>
// Shared app navigation/chrome:
<LayoutPanel {...props}><Body /></LayoutPanel>
```

Alternative JSX expressions. Select the shell according to the page purpose; neither option imposes the OfficePress renderer on other apps.

Sources: [content/guides/100/143-layouts.md, line 110](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/143-layouts.md#L110); [skills/stackpress-plugin-views/SKILL.md, line 179](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-views/SKILL.md#L179).

<a id="r24"></a>

## R24. Use Head and browser-safe entries

Head supplies relevant title/meta/favicon and received stylesheet URLs. Browser modules import browser-safe view/client helpers, not server pages/transforms. Verify assets actually load; file presence alone does not prove a styled, hydrated page.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```tsx
export function Head({ styles = [] }: ServerConfigPageProps) {
  return <>
    <title>Catalog</title>
    {styles.map(href => <link key={href} rel="stylesheet" href={href} />)}
  </>;
}
```

The supported prop type/import are omitted here. Head emits metadata and received stylesheet URLs; verify that the resulting assets load.

Sources: [skills/stackpress-plugin-views/SKILL.md, line 3](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-views/SKILL.md#L3); [skills/stackpress-plugin-views/SKILL.md, line 211](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-views/SKILL.md#L211); [content/guides/400/420-local-production.md, line 85](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/400/420-local-production.md#L85).

<a id="r25"></a>

## R25. Minimize serialized browser data

Rendered props are public and JSON-serializable. Exclude secrets, native resources, functions, cycles and unnecessary private records. The upstream contract explicitly says a framework-wide prop allowlist is not an accepted guarantee.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Deliberately public event result:
res.results({ id: item.id, name: item.name });
// Do not attach database connections, credentials or private records
// to the payload that the web view serializes.
```

This is a selection example, not a framework-wide allowlist guarantee. The app owns which fields may reach each caller.

Sources: [.agents/context/interfaces-and-experience.md, line 71](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/interfaces-and-experience.md#L71).

## OfficePress Reactus development hydration verification

Local integration correction, verified 2026-10-10 with Reactus 0.10.8 and Vite 7.3.6; this is not an additional upstream research prescription. Reactus generates virtual browser hydration entries. Vite filesystem discovery can miss their `react-dom/client` import, then replace optimized dependency hashes after the first page starts hydrating. With HMR disabled, the recovery reload is unavailable; mixed React instances can produce invalid-hook-call errors even if later interactions work.

For these maintained development configs, prebundle the actual hydration imports and the lazily reached Markdown dependency before first navigation, and deduplicate React resolution:

```ts
view: {
  optimizeDeps: {
    include: ["react", "react-dom", "react-dom/client",
      "react/jsx-runtime", "react/jsx-dev-runtime", "marked"],
  },
  vite: { resolve: { dedupe: ["react", "react-dom"] } },
}
```

This excerpt preserves the other existing view/Vite settings. Adopters should inspect their installed renderer and browser graph; `marked` is included because the OfficePress agent uses it, not because every Stackpress app requires it. Avoid hiding hook errors or deleting the browser error assertion. Clean only the disposable Vite cache with `yarn dev:clean`, then run the managed browser suite from a cold cache and check console/page errors as well as visible functionality. A clean built-browser result does not prove the development module graph.

Basis: installed `reactus/esm/constants.js` (virtual hydration imports) and `reactus/esm/ServerResource.js` (`optimizeDeps` forwarding and Vite config merge), plus Vite 7.3.6's dependency-optimization invalidation/reload path. The earlier failing and corrected source-fingerprinted receipts are preserved under each proof’s `tests/evidence/`. Load [the all-proof verification](../../proofs/app-shell/tests/evidence/verification/all-proofs-guideline-refactor.md) when checking the exact tested scope and corrective evidence.
