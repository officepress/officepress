# Stackpress ownership and plugin contracts

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load before choosing plugin boundaries, files, public exports or shared contracts.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r01"></a>

## R01. Choose the implementation lane first

Classify missing domain structure as schema work, repeated model-derived output as generation, environment/static policy as config, custom runtime behavior as events/services, and request presentation as pages/views. Split a mixed feature across these owners rather than choosing the nearest folder.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Domain declarations       -> schema.idea
Repeated model output     -> transform/
Environment/static policy -> config/
App business behavior     -> events/
Web request/response      -> pages/
Browser presentation      -> views/
```

This is an ownership map, not a runtime configuration file. Business behavior belongs in events under the user-confirmed boundary.

Sources: [skills/stackpress-plugin-router/SKILL.md, line 86](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-router/SKILL.md#L86); [.agents/context/extension-and-contribution.md, line 18](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md#L18).

<a id="r02"></a>

## R02. Choose the plugin role independently of its file layout

Distinguish infrastructure, shared app, feature and generation roles. A shared app or store plugin is not the default owner of unrelated business logic. Names in examples are illustrative; a new app chooses modules from its own domain.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
plugins/
  app/plugin.ts       # shared rendering/navigation
  store/plugin.ts     # connection registration
  catalog/plugin.ts   # catalog business capabilities
  reports/plugin.ts   # report business capabilities
```

These are illustrative domain names. Another app chooses its own feature owners; app and store do not absorb unrelated workflows.

Sources: [skills/stackpress-plugin-router/SKILL.md, line 51](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-router/SKILL.md#L51); [skills/stackpress-workflow-router/references/plugin-composition-example.md, line 20](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-workflow-router/references/plugin-composition-example.md#L20).

<a id="r03"></a>

## R03. Start with one entrypoint and add only justified files

The prescribed project-local entry is plugins/<name>/plugin.ts. It is the only required plugin file. Add pages, events, views, components, tests or transform when their responsibilities exist; do not generate an empty folder checklist.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
plugins/catalog/
  plugin.ts
  pages/detail.ts
  events/detail.ts
  views/detail.tsx
  tests/detail.test.ts
```

Only plugin.ts is required by the scaffold guidance. Each other file shown has an actual responsibility; unused folders need not exist.

Sources: [skills/stackpress-plugin-scaffold/SKILL.md, line 46](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/SKILL.md#L46); [skills/stackpress-plugin-scaffold/references/plugin-scaffold.md, line 28](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#L28).

<a id="r04"></a>

## R04. Give browser and server exports distinct responsibilities

client.ts carries browser-safe reusable exports; index.ts exposes deliberately public reusable code; types.ts holds shared contracts. Do not export every private implementation or import Node/server dependencies into views, components or client exports.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// client.ts — browser-safe public exports
export { default as CatalogCard } from "./components/Card.js";
// index.ts — intentional server/public exports
export { default as plugin } from "./plugin.js";
// types.ts — shared contracts
export type CatalogItem = { id: string; name: string };
```

These three exports belong to separate files. Avoid importing a server-only plugin or Node dependency through a browser entry.

Sources: [skills/stackpress-plugin-scaffold/references/plugin-scaffold.md, line 234](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#L234); [skills/stackpress-plugin-scaffold/references/plugin-scaffold.md, line 257](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#L257).

<a id="r05"></a>

## R05. Create the entry before manifest registration

Add a real entry module before adding its extensionless relative path to package.json.plugins. Installed package plugins use package names. A folder alone does not activate the feature; scripts/config should point at artifacts that exist.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```json
{
  "plugins": ["stackpress", "./plugins/catalog/plugin"]
}
```

This is a partial manifest. Create plugins/catalog/plugin.ts first, then register its extensionless path; this is not an instruction to replace a whole manifest.

Sources: [skills/stackpress-plugin-scaffold/references/plugin-scaffold.md, line 284](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#L284); [skills/stackpress-plugin-scaffold/references/plugin-scaffold.md, line 302](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#L302).

<a id="r12"></a>

## R12. Define shared contracts before coordinating plugins

Record ownership of models, methods/routes, emitted events, payloads, generated exports, config/access and seed data before concurrent work. Integrate and verify the producer/consumer boundary afterward. This is design guidance; no agents were delegated for this research.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```yaml
# Design note, not Stackpress config
capability: catalog-detail
owner: catalog
input: { id: string }
result: CatalogItem
consumers: [web-page, api, cli]
policy: defined by the application
```

Agree on the event payload, result, semantic owner and policy before producers and consumers are implemented.

Sources: [skills/stackpress-workflow-router/references/plugin-composition-example.md, line 37](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-workflow-router/references/plugin-composition-example.md#L37).
