# Stackpress source: Runtime Reconnection Reference; Core Principle; Normal Runtime Pattern; Good Runtime Consumers

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-idea-generator/references/runtime-reconnection.md`: Runtime Reconnection Reference; Core Principle; Normal Runtime Pattern; Good Runtime Consumers.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-idea-generator/references/runtime-reconnection.md`; part 1/1.

<!-- stackpress-source:start -->
````````markdown
# Runtime Reconnection Reference

This reference explains how generated artifacts should reconnect to runtime
behavior after generation has completed.

## Core Principle

If generation produced the artifact, runtime should import or load that artifact
instead of rebuilding it from source schema again.

This prevents duplication and keeps the architecture consistent.

## Normal Runtime Pattern

Runtime should use the generated client plugin path when available.

General shape:

```ts
ctx.on('listen', action(async ({ ctx }) => {
  const client = ctx.plugin('client');
  const generated = await client(true);
  if (!generated) return;

  // register generated listeners or consume generated registries
}));
```

Important points:

- `client(true)` allows the runtime to tolerate missing generated output
- generated artifacts should expose a stable surface such as a registry or a
  `listen()` function
- runtime should stay thin and focused on consuming generated output

## Good Runtime Consumers

Examples of good generated runtime surfaces:

- `generated.model?.listen(ctx)`
- `generated.tools?.listen(ctx)`
- generated registries imported through the client package

The exact names vary by feature, but the idea is consistent: generation creates
a reusable surface, and runtime loads it.

## Anti-Patterns

Avoid these:

- reparsing the project idea schema at runtime
- duplicating generation logic inside transport or route handlers
- making runtime depend on generated files that were never exported
- assuming `generate:client` updates the same client package the running server
  is importing

## Debugging Reminder

If generated behavior is missing at runtime, check:

1. which client package generation wrote to
2. which client package runtime is importing
3. whether the generated entrypoint was exported
4. whether runtime actually calls the generated registry or listener hook

Generation can succeed while runtime still sees nothing if those paths do not
line up.

## Generation Command Reminder

When reconnecting runtime to generated output, make sure generation actually ran
through the intended config:

```bash
npx stackpress generate --b [config/file] -v
```

If the config behind `--b` does not include client generation settings, the
expected client artifacts may never be written.

````````
<!-- stackpress-source:end -->
