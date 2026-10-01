# Stackpress source: Common `ts-morph` Methods; Main Mindset; Source File Methods; `replaceWithText()`

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-idea-generator/references/ts-morph-common-methods.md`: Common `ts-morph` Methods; Main Mindset; Source File Methods; `replaceWithText()`.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-idea-generator/references/ts-morph-common-methods.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
# Common `ts-morph` Methods

This reference is intentionally practical.

It lists the `ts-morph` methods that are commonly useful when building
Stackpress generators. It is not a full `ts-morph` manual.

## Main Mindset

When writing Stackpress generators, the most common pattern is:

1. get or create a source file
2. inspect whether imports or exports already exist
3. add declarations if missing
4. patch text only when structure helpers are not enough

In this repo, generators often start from helpers such as:

```ts
import { loadProjectFile } from 'stackpress-schema/transform/helpers';
```

That helper gives back a `SourceFile`, which is where most `ts-morph` work
starts.

## Source File Methods

These are the most commonly useful methods on a `SourceFile`.

### `replaceWithText()`

Use when you want to clear and fully regenerate a file.

```ts
source.replaceWithText('');
```

Common use:

 - generated leaf files that are owned entirely by the generator

### `addImportDeclaration()`

Use to add imports.

```ts
source.addImportDeclaration({
  defaultImport: 'tools',
  moduleSpecifier: './tools.js'
});
```

Common use:

 - root index patching
 - per-file dependency setup

### `getImportDeclaration()`

Use to detect whether an import already exists before adding it.

```ts
const hasImport = source.getImportDeclaration(
  declaration => declaration.getModuleSpecifierValue() === './tools.js'
);
```

Common use:

 - idempotent patching of generated root files

### `addExportDeclaration()`

Use to add export declarations.

```ts
source.addExportDeclaration({
  namedExports: [ 'tools' ]
});
```

### `getExportDeclaration()`

Use to inspect whether an export already exists.

```ts
const hasExport = source.getExportDeclaration(
  declaration => declaration.getNamedExports().some(
    specifier => specifier.getName() === 'tools'
  )
);
```

### `addFunction()`

Use to create generated functions such as registries or handlers.

```ts
source.addFunction({
  isExported: true,
  name: 'listen',
  parameters: [{
    name: 'emitter',
    type: 'Record<string, any>'
  }],
  statements: 'return;'
});
```

Common use:

 - generated listener registries
 - generated helper functions

### `addVariableStatement()`

Use to create generated constants.

```ts
source.addVariableStatement({
  declarationKind: VariableDeclarationKind.Const,
  declarations: [{
    name: 'config',
    type: 'ToolConfig',
    initializer: JSON.stringify(tool, null, 2)
  }],
  isExported: true
});
```

Common use:

 - generated config objects
 - generated registries

### `addStatements()`

Use when a small raw code block is simpler than building more structure APIs.

```ts
source.addStatements(`
  const factory = { listen };
  export default factory;
`);
```

Use this sparingly. Prefer structured helpers when the output can be expressed
cleanly that way.

## Directory Use

`props.directory` already gives a `Directory`.

In most Stackpress generators, you pass that directory into helpers rather than
manipulating it directly everywhere.

Typical pattern:

```ts
generateModelFiles(directory, schema);
generatePackage(directory, schema);
```


````````
<!-- stackpress-source:end -->
