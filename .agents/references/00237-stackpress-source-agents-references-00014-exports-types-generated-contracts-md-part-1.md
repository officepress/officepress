# Stackpress source: Exports, Types, And Generated Contracts; Aggregate Role; Published Subpaths And Assets; Root Value Export Families

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `.agents/references/00014-exports-types-generated-contracts.md`: Exports, Types, And Generated Contracts; Aggregate Role; Published Subpaths And Assets; Root Value Export Families.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `.agents/references/00014-exports-types-generated-contracts.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
# Exports, Types, And Generated Contracts

Use this reference for aggregate Stackpress imports, public type families,
package assets/subpaths, generated-client shape, and the UnoCSS preset.

## Aggregate Role

The `stackpress` package is a convenience facade over focused packages. It does
not relocate ownership: lib, Idea/schema, Ingest/server, Inquire/SQL, Reactus/
view, session, language, admin, API, CSRF, and email retain their contracts.

```ts
import { server, Schema, Engine, Session, Language } from 'stackpress';
import type { Config, RouteProps, StoreSelectQuery } from 'stackpress/types';
```

Prefer focused subpaths when code needs a narrow environment or ownership
boundary. The root includes server and browser-facing exports together and is
not automatically browser-safe.

## Published Subpaths And Assets

The current package publishes CJS and ESM conditions for:

```text
stackpress
stackpress/plugin
stackpress/types
stackpress/lib, stackpress/lib/types
stackpress/schema, stackpress/schema/types
stackpress/server, stackpress/server/types
stackpress/http, stackpress/whatwg
stackpress/session, stackpress/session/types
stackpress/language, stackpress/language/types
stackpress/sql, stackpress/sql/types
stackpress/mysql, stackpress/pgsql, stackpress/pglite, stackpress/sqlite
stackpress/view, stackpress/view/client, stackpress/view/types
stackpress/unocss
```

Non-code exports include CJS/ESM tsconfig bases, `assets.d.ts`, `reset.css`, and
`stackpress.css`. Packed files also include `stackpress.idea`, the runtime CLI,
license/README, and compiled trees. `package.json` is the runtime export
authority; `typesVersions` entries alone do not guarantee a subpath is allowed
by Node's `exports` map.

The current package description still names “Incept.” Treat that as stale
metadata, not accepted Stackpress identity or marketing language.

## Root Value Export Families

| Family | Representative exports |
| --- | --- |
| primitives | `Nest`, maps/sets, queues, event/route emitters, filesystem/loaders, `Status`, `Exception`, parsing helpers |
| schema | dictionaries, naming/crypto helpers, `Attribute`, `Column`, `Fieldset`, `Model`, `Schema`, interfaces |
| runtime | `server`, `router`, `action`, `gateway`, `handler`, `Request`, `Response`, `Router`, `Server`, terminal/loaders/plugin routers |
| session/language | permission matchers, `actions`, `Session`, `Language` |
| SQL | builders, dialects, `Engine`, `Migrations`, SQL/alias helpers, store/action interfaces |
| view | Reactus templates/helpers/classes under collision-safe aliases, providers/hooks/layouts, r22n, notifications, `setViewProps` |
| tasks | `events` and `scripts` namespaces |

At the root, Reactus collisions are renamed `ReactusBuilder`,
`ReactusDocument`, and `ReactusServer`; the Stackpress/Ingest `Server` remains
the unprefixed runtime server.

`Migrations` is public from the focused `stackpress-sql` package and the
`stackpress/sql` domain facade. Its result types are public from the matching
`types` entrypoints. It is intentionally not promoted to the broad `stackpress`
root.

`events` groups event handlers for develop/emit/serve, generate, and SQL
operations. `scripts` groups lower-level callable implementations. Most
application code should invoke server events so listeners, status, and policy
remain in the execution path.

## Type Families

`stackpress/types` is type-only and composes these families:

- **configuration/plugins:** `Config`, package config types, generated-client
  plugin, database/language/session/terminal/view plugin contracts;
- **primitives/runtime:** nested/callable collections, status/error shapes,
  events/tasks/routes, request/response/session/cookie/file types;
- **server/adapters:** loader/router/action/gateway/handler options and HTTP/
  WHATWG aliases;
- **Idea/schema:** compiled config, metadata tokens/definitions, schema assertion/
  serialize/unserialize maps;
- **SQL/store:** fields/dialects/query/connection/transaction types, selectors,
  relationships, filters, generated client model/scripts;
- **session/auth/API:** permission/token, signup/signin, profile/auth/application
  shapes and API endpoint/webhook contracts;
- **view/client:** serialized server props, providers, theme/layout props,
  config-aware page props, notifier options.

Use `import type`. Focused `<subpath>/types` files reduce naming collisions and
make ownership visible. `Config` intersects `UnknownNest`, so optional package
sections may be valid even when absent from the declared common keys.

## Generated Client Package

Generation creates an application-specific ESM package named by
`client.package`. Baseline root shape:

```ts
export { config, scripts };
export const model = { profile: ProfileModel, ... };
export const fieldset = { address: AddressFieldset, ... };
```

The schema transform initially produces:

```text
config.ts, enums.ts, types.ts, index.ts, package.json
<Fieldset>/<Fieldset>Schema.ts, columns/, types.ts, tests/, index.ts
<Model>/<Model>Schema.ts, columns/, types.ts, tests/, index.ts
```

Each generated schema exposes name, columns, Zod shape, defaults, `assert`,
`filter`, `populate`, `serialize`, and `unserialize`. Column modules own type,
default/generator, assertion, serialization, encryption/hash, and tests.

The SQL transform replaces the root index while preserving config/model/
fieldset registries and adds `scripts`. Each model gains Store, Actions, events,
listener, SQL tests, and a default factory:

```ts
{ Schema, Store, Actions, columns, events, listen }
```

The view transform adds generated field/filter/list/span/view components and
their package subpaths. Admin adds model admin pages, views, routes, `admin.ts`,
and augments model factories with admin routing. Optional AI adds per-model tool
modules and root `tools` with `listen`.

## Generated Export Map

The generated manifest exposes root, wildcard root modules, and per-fieldset/
model paths. Schema adds columns/tests/model paths; SQL adds model event paths;
view adds role component globs; admin and AI add their owned generated paths.
Equivalent `typesVersions` entries point to declarations.

Transforms intentionally cooperate on shared `index.ts` and `package.json`.
Current aggregate plugin/Idea order is compatibility-sensitive: a transform may
clear/rebuild a file before later transforms augment it. Verify clean generation,
repeat generation, removed/renamed declarations, compiled exports, and imports.
Generated files are disposable output, not durable source authority.

## Generated Client Loader

During `config`, schema registers plugin `client` as an async importer of
`client.module` (default `stackpress-client`). Calling `client()` throws when
unavailable; `client(true)` returns `null`. This nullable mode lets first
generation/bootstrap proceed before the generated package exists.

Consumers expect generated runtime and source schema to align. There is no
automatic version handshake or stale-output registry in the current contract.


````````
<!-- stackpress-source:end -->
