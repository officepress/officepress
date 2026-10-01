# Stackpress source: Idea Lifecycle; Transform Folder; Browser-Safe Exports; Index File

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-scaffold/references/plugin-scaffold.md`: Idea Lifecycle; Transform Folder; Browser-Safe Exports; Index File.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-scaffold/references/plugin-scaffold.md`; part 2/3.

<!-- stackpress-source:start -->
````````markdown
## Idea Lifecycle

Use `idea` when the plugin needs to participate in generation.

In most cases, an `idea` handler looks like this:

```ts
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Transformer } from '@stackpress/idea';
import type { CLIProps } from 'stackpress/server';
import type { Server } from 'stackpress/server';

export default function plugin(ctx: Server) {
  ctx.on('idea', async ({ req }) => {
    //get the transformer from the request
    const transformer = req.data<Transformer<CLIProps>>('transformer');
    const schema = await transformer.schema();
    //if no plugin object exists, create one
    if (!schema.plugin) {
      schema.plugin = {};
    }
    const dirname = typeof __dirname === 'undefined'
      //@ts-ignore - The import.meta only allowed in ESM
      ? path.dirname(fileURLToPath(import.meta.url))
      : __dirname;
    //add this plugin generator to the schema
    //so it can be part of the transformation
    schema.plugin[`${dirname}/transform`] = {};
  });
}
```

Notes:

 - The `//@ts-ignore` comment is intentional.
 - `${dirname}/transform` means Stackpress will look for the generator entry at
   `[plugin]/transform/index.ts`.

## Transform Folder

The `transform/` folder is only needed when the plugin contributes to
generation.

Default expectation:

```text
plugins/
  my-plugin/
    transform/
      index.ts
```

Use this folder when the plugin needs to:

 - inspect schema models
 - generate code based on defined models in a project
 - add assets and files to the generated client library
 - emit generated files into the client library
 - patch generated package exports
 - participate in `stackpress generate`

Do not move generation logic into runtime listeners if it belongs in the normal
transform pipeline.

## Browser-Safe Exports

Be deliberate about what is exported from `client.ts`, `components/`, and
`views/`.

Rules:

 - browser-facing code must stay browser safe
 - do not import server-only modules into components or views
 - do not leak Node-only dependencies into `client.ts`
 - keep `client.ts` focused on reusable browser-safe exports

Good candidates for `client.ts`:

 - reusable UI helpers
 - browser-safe components
 - generated client-facing registries
 - shared browser-safe types or constants

When the task is specifically about implementing a Stackpress page under
`views/` with `Head`, layouts, `setViewProps`, or page props, hand off to
`stackpress-plugin-views`.

## Index File

Use `index.ts` to re-export reusable elements from the plugin.

Typical uses:

 - re-export browser-safe modules
 - re-export shared types
 - expose plugin helpers intended for other plugins

Keep `index.ts` intentional. Do not export everything by default if some files
should stay private to the plugin.

## Types File

Use `types.ts` to centralize TypeScript types for the plugin.

This is especially useful when:

 - config types are shared across files
 - service contracts are reused
 - event payloads are reused
 - browser-safe and server-safe modules need a shared type surface

Keeping types in one place reduces circular imports and keeps the rest of the
plugin files smaller.

## Setup Order

Use this order when scaffolding a new plugin:

 1. confirm the project root and locate `plugins/`
 2. create `plugins/<plugin-name>/plugin.ts`
 3. create only the folders and files needed for the plugin role
 4. wire the appropriate lifecycle events in `plugin.ts`
 5. add `transform/` only if generation is required
 6. update config if the plugin needs config-driven behavior
 7. register the plugin path in `package.json`
 8. update related `package.json` scripts last

Do not start by editing `package.json`.

If the plugin is not registered in the app's `plugins` array, Stackpress will
not load it no matter how complete the folder itself is.

Stackpress uses a custom top-level `plugins` array in `package.json`. This is
not a standard npm key.

Example:

```json
{
  "plugins": [
    "./plugins/app/plugin",
    "./plugins/store/plugin",
    "stackpress"
  ]
}
```

To register a local plugin:

 - add the plugin entry module to the top-level `plugins` array
 - use a relative module path
 - omit the file extension

For a plugin at `plugins/my-plugin/plugin.ts`, the `package.json` entry should
be:

```json
{
  "plugins": [
    "./plugins/my-plugin/plugin"
  ]
}
```

Installed package plugins use package names instead of relative paths.


````````
<!-- stackpress-source:end -->
