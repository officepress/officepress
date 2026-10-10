# Stackpress generation and runtime reconnection

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when deciding whether to generate, implementing transforms, exporting clients or handling stale output.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r30"></a>

## R30. Generate only genuinely repeated schema-derived output

Use idea to register a transform path and transform/index.ts to emit repeated model/metadata-derived contracts. One custom route or integration remains handwritten runtime work. Do not reparse schema to rebuild generated structures while serving requests.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
plugins/catalog-generator/
  plugin.ts             # idea hook registers transform
  transform/index.ts    # emits repeated schema-derived output
```

This folder shape is for a generator role. A handwritten integration or one custom page does not become a transform merely because it needs a plugin.

Sources: [content/guides/300/342-custom-generators.md, line 7](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/342-custom-generators.md#L7); [skills/stackpress-plugin-idea-generator/SKILL.md, line 61](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-idea-generator/SKILL.md#L61).

<a id="r31"></a>

## R31. Use the provided schema and output directory

The transform reconstructs Schema.make(props.schema) and writes through props.directory. ts-morph is Stackpress's recommended TypeScript editing tool, not a requirement imposed by the Idea language.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
const schema = Schema.make(props.schema);
const directory = props.directory;
// Emit this generator's model-derived files inside directory.
```

Transform-body excerpt. Read supplied schema/output props instead of inventing a parallel output location; imports and transform signature are shown in the original source.

Sources: [skills/stackpress-plugin-idea-generator/references/transform-entry.md, line 33](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-idea-generator/references/transform-entry.md#L33); [content/guides/300/341-ts-morph-plugins.md, line 24](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/341-ts-morph-plugins.md#L24).

<a id="r32"></a>

## R32. Cooperate when modifying generated shared files

Rewrite files wholly owned by the generator when appropriate; patch only owned imports/exports/declarations in shared root files. Make generation repeatable and avoid duplicate imports or erasing another generator's contributions.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Inside a transform; source is a ts-morph SourceFile:
const alreadyExported = source.getExportDeclarations().some(
  declaration => declaration.getModuleSpecifierValue() === "./catalog.js"
);
if (!alreadyExported) {
  source.addExportDeclaration({ moduleSpecifier: "./catalog.js" });
}
```

Illustrative shared-file patch, not a complete generator. Update only the generator-owned contribution; replacement of an entire shared root would erase other owners.

Sources: [content/guides/300/341-ts-morph-plugins.md, line 28](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/341-ts-morph-plugins.md#L28); [content/guides/300/341-ts-morph-plugins.md, line 300](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/341-ts-morph-plugins.md#L300).

<a id="r33"></a>

## R33. Export output and reconnect it to runtime

Writing a file is insufficient: expose package/type exports, then load the configured generated client and call its listener/registry during the appropriate runtime phase. Nullable client(true) supports pre-generation bootstrap; verify actual generated availability when the feature needs it.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
// Listen-phase excerpt:
const client = ctx.plugin("client");
const generated = await client(true);
if (!generated) return;
generated.tools?.listen(ctx);
```

This follows the documented optional generated-tools surface. Generated exports must exist first; tolerate absence only where early bootstrap allows it, not as proof that a required capability works.

Sources: [content/guides/300/342-custom-generators.md, line 58](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/342-custom-generators.md#L58); [skills/stackpress-plugin-idea-generator/references/runtime-reconnection.md, line 13](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-plugin-idea-generator/references/runtime-reconnection.md#L13).

<a id="r34"></a>

## R34. Fix authored source and qualify stale cleanup

Change Idea/config/transforms rather than generated output. Test clean and repeated generation, compilation, import and runtime registration. Upstream promises stale pruning specifically for schema/model/column generation; equivalent cleanup is not a universal generator guarantee.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Edit:      schema.idea / config / transform
Regenerate: generated client
Check:     clean generation -> repeat generation -> import/runtime
Do not make a manual generated-file edit the durable fix.
```

The authored source owns the change. Stale cleanup guarantees depend on the particular generator; this flow does not promise universal pruning.

Sources: [content/guides/500/511-source-of-truth.md, line 31](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/500/511-source-of-truth.md#L31); [.agents/context/modeling-and-generation.md, line 62](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/modeling-and-generation.md#L62).
