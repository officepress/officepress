# Stackpress source: Stackpress Plugin Idea Generator; Core Workflow; Use This Skill For; Do Not Use This Skill For

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-idea-generator/SKILL.md`: Stackpress Plugin Idea Generator; Core Workflow; Use This Skill For; Do Not Use This Skill For.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-idea-generator/SKILL.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-plugin-idea-generator
description: Build or extend a Stackpress plugin that participates in `stackpress generate` through the `idea` lifecycle and a `transform/` entrypoint. Use when an agent needs to register a plugin transform, inspect schema models, emit generated client files, patch generated package exports, or reconnect generated artifacts back into runtime through the normal client plugin path.
---

# Stackpress Plugin Idea Generator

Build Stackpress generation plugins through the normal idea-transform pipeline
instead of recreating generation logic at runtime.

## Core Workflow

1. Confirm the feature really belongs in generation instead of pure runtime.
2. Add or inspect the plugin's `idea` hook in `plugin.ts`.
3. Focus the implementation around `transform/index.ts`.
4. Rebuild the schema helper with `Schema.make(props.schema)`.
5. Use `props.directory` as the generated client directory.
6. Use `ts-morph` as the default tool for generating and patching TypeScript
   files.
7. Generate files into the configured client or build output, not into ad hoc
   runtime-only state.
8. Export generated artifacts intentionally from the generated client package.
9. Let runtime plugins consume those generated artifacts through the normal
   client plugin path.
10. Verify with generation commands and by inspecting emitted output.

## Use This Skill For

- plugins that participate in `stackpress generate`
- model-driven code emission based on `schema.idea`
- generated client registries, helpers, pages, or tool definitions
- generated package export patching
- runtime features that depend on generated client artifacts

## Do Not Use This Skill For

- pure runtime plugins that only need `config`, `listen`, or `route`
- browser-only component work
- route scaffolding without generation
- store registration without generation
- one-off handwritten feature behavior that is not truly model-driven

Use `stackpress-plugin-scaffold` first when the main question is overall plugin
shape or folder setup.

## Generator Boundary

Treat generation and runtime as separate concerns.

- Generation belongs in the `idea` hook and the `transform/` folder.
- Runtime belongs in `config`, `listen`, or `route`.
- If a feature can be emitted during `stackpress generate`, prefer generation
  over rebuilding the same structure live at runtime.

Do not re-parse the project schema at runtime if the same job belongs in the
transform pipeline.

If the feature is not clearly repeated per model or clearly derived from schema
metadata, route back out before implementing generation logic.

## Required Plugin Registration

Before a custom generator can run, the plugin entry file must register the
plugin's `transform/` folder during the `idea` lifecycle. Add this to the
plugin's `plugin.ts` or `plugin.js` entrypoint.

Typical registration shape:

```ts
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CLIProps } from 'stackpress/lib';
import type { Transformer } from 'stackpress/lib';
import type { Server } from 'stackpress/server';

export default function plugin(ctx: Server) {
  ctx.on('idea', async ({ req }) => {
    const transformer = req.data<Transformer<CLIProps>>('transformer');
    const schema = await transformer.schema();

    if (!schema.plugin) {
      schema.plugin = {};
    }

    const dirname = typeof __dirname === 'undefined'
      //@ts-ignore - The import.meta only allowed in ESM
      ? path.dirname(fileURLToPath(import.meta.url))
      : __dirname;

    schema.plugin[`${dirname}/transform`] = {};
  });
}
```

The important line is:

```ts
schema.plugin[`${dirname}/transform`] = {};
```

Without that schema plugin entry, Stackpress will not include the custom
generator in the transformation pipeline, even if `transform/index.ts` exists.

The scaffold skill also covers the plugin-level hook shape:

- `../stackpress-plugin-scaffold/references/plugin-scaffold.md`

This skill focuses on the generator side after the hook has already pointed
Stackpress to `transform/index.ts`.

## Transform Entry File

The only required file inside the transform folder is:

```text
transform/
  index.ts
```

Read the fuller transform entry guidance in:

- `references/transform-entry.md`

That reference covers:

- the role of `transform/index.ts`
- how to use `Schema.make(props.schema)`
- how to use `props.directory`
- how to split generation into helper files
- how to patch generated root files and package exports

## Transform Responsibilities

Use the `transform/` folder for responsibilities like:

- reading model and field metadata
- generating files into the client library
- patching generated package exports
- building per-model directories or registries
- shaping generated code so runtime can import it normally

Keep the transform focused on code emission and package shaping. Do not mix
runtime listener registration into transform code.

## `ts-morph` Usage

Use `ts-morph` as the main file-editing tool inside transforms when generating
or patching TypeScript.

Read the practical method reference in:

- `references/ts-morph-common-methods.md`

That reference focuses on the methods that are actually common in this repo,
such as:

- `replaceWithText()`
- `addImportDeclaration()`
- `getImportDeclaration()`
- `addExportDeclaration()`
- `getExportDeclaration()`
- `addFunction()`
- `addVariableStatement()`
- `addStatements()`


````````
<!-- stackpress-source:end -->
