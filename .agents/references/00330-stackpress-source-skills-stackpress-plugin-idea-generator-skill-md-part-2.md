# Stackpress source: Running Generation; Generated Output Rules; Runtime Reconnection Rule; Verification

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-idea-generator/SKILL.md`: Running Generation; Generated Output Rules; Runtime Reconnection Rule; Verification.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-idea-generator/SKILL.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## Running Generation

The usual command shape is:

```bash
npx stackpress generate --b [config/file] -v
```

Meaning:

- `generate` runs the Stackpress idea pipeline
- `--b [config/file]` points Stackpress at the bootstrap or config module for
  the project
- `-v` keeps verbose output on, which is useful while building or debugging a
  generator

This skill does not try to define the full client config shape. It assumes the
project already has a generation config, or that the user can point you to the
correct config file.

At minimum, confirm that the config used by `--b` includes client generation
settings and a valid client output location. If that config is missing or
unclear, stop and ask instead of guessing.

## Generated Output Rules

Generated artifacts should behave like a real client package surface.

That means:

- write to the configured client or build destination
- emit stable file structures
- export generated modules intentionally
- favor per-model output when the feature is model-oriented
- add root registries when runtime needs one entrypoint

If a generated file is supposed to be used later by runtime code, it must be
reachable through the generated client package.

## Runtime Reconnection Rule

When runtime needs generated artifacts, consume them through the normal client
plugin path rather than regenerating them in memory.

The usual pattern is:

- runtime loads the generated client plugin
- runtime tolerates the generated client not existing yet
- runtime calls generated listener or registry hooks during `listen`

Read the broader details in:

- `references/runtime-reconnection.md`

## Verification

Prefer the smallest checks that prove the generator is real:

- run the appropriate `stackpress generate` command
- inspect emitted files
- inspect generated `index.ts` and package exports
- confirm runtime can import or load the generated surface when applicable

## Common Mistakes

- put generation logic into runtime hooks instead of `idea`
- use generation for one-off handwritten behavior that should stay in runtime or
  route/view code
- overexplain the `idea` hook while underbuilding `transform/index.ts`
- create `transform/index.ts` but forget to register `${dirname}/transform` in
  `plugin.ts` or `plugin.js`
- generate files that runtime cannot import later
- forget to patch generated exports when new entrypoints are added
- assume generated output is automatically used by runtime
- mix schema inspection, runtime registration, and transport logic into one
  layer
- skip inspecting existing generator packages before inventing a new shape

````````
<!-- stackpress-source:end -->
