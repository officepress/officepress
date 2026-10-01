# Tested Stackpress plugin and generation patterns

Owner: [Plugin architecture](../context/stackpress-plugin-architecture.md). Load to implement dependency guards and align behavior with the local 0.10.8 proof.

## Feature-owned guards

The executable example is [the Note plugin](../../proofs/stackpress-boilerplate/plugins/notes/plugin.ts). Its `ready()` helper checks the database service, generated client service, expected model and generated search listener. It is called separately before event registration and before route registration.

```ts
export default function plugin(server) {
  async function ready(ctx) {
    const client = ctx.plugin('client');
    if (!ctx.plugin('database') || !client) return false;
    const generated = await client(true);
    return Boolean(generated?.model?.note && ctx.listeners['note-search']?.size);
  }
  server.on('listen', async ({ ctx }) => {
    if (!await ready(ctx)) return;
    ctx.on('notes-status', ({ res }) => { res.results({ available: true }); });
  }, -100);
  server.on('route', async ({ ctx }) => {
    if (!await ready(ctx)) return;
    ctx.get('/notes', async ({ ctx, res }) => {
      const result = await ctx.resolve('note-search', {});
      if (result.code !== 200) {
        res.setError(result.error || 'Search failed');
        return;
      }
      res.fromStatusResponse(result);
    });
  });
}
```

This is a public local demonstration. A real feature must additionally enforce its identity, tenant and permissions contract at the appropriate boundary. Missing required security services disable the feature; they never turn it public.

## Framework integration guard

The 0.10.8 framework SQL plugin assumes a `client` service. Its registration code is reusable, but does not implement an OfficePress dependency policy. The local data adapter calls it from a late `config` listener only when both `database` and `client` exist. This adds the SQL `listen` and `idea` contributions before those phases run. If either is absent, the adapter returns without registering SQL behavior. See [the integration adapter](../../proofs/stackpress-boilerplate/plugins/data/plugin.ts).

Keep this decision within the integration plugin. Bootstrap only selects modules and sequences lifecycle events; it does not validate a global dependency graph. For providers with different priorities, choose dependency-check timing explicitly and test it.

## Internal event absence

In the installed version, `ctx.resolve()` of an unregistered event or internal route can produce response code `0`, while an actual HTTP request to an absent route returns `404`. Verify listener/route absence directly and require explicit success for operations. Do not assume every absent internal operation has HTTP status semantics.

## Smaller Idea composition

The proof uses this complete composition:

```idea
use "./schema/shared.idea"
use "./plugins/notes/schema.idea"
```

Shared definitions:

```idea
enum NoteState {
  DRAFT "DRAFT"
  PUBLISHED "PUBLISHED"
}
```

Feature definition:

```idea
model Note {
  id       String    @id @default("cuid()")
  title    String    @is.required("Title is required")
  state    NoteState @default("DRAFT")
  created  Datetime  @default("now()")
}
```

Enum entries have explicit values. Required-field validation uses the supported `@is.required` attribute. Generation resolves the root input and supplies a real Stackpress Terminal linked to the bootstrapped server; generator transforms use that terminal's server. The runtime loads the emitted module and SQL registers model listeners during `listen`.

Generation output is not an applied migration. The proof invokes generated `scripts.install` only after checking that its owned disposable database has no public tables. The framework `install` event wrapper itself first uninstalls tables; it is not a harmless default setup command for existing data.

## Build results and paths

Reactus `buildAllClients`, `buildAllAssets` and `buildAllPages` each return arrays of per-entry status results. Flatten and validate every result; a completed promise alone does not prove every bundle passed. Use types from the installed Reactus package instead of a handwritten duplicate of its API.

Keep generated client, built server and browser assets distinct. Live config points to built paths and serves copied public assets. The proof checks that production HTML references a built client script, omits the Vite development client and serves its referenced JS/CSS.

Database storage is outside normal build output (`.data/pglite`). Verification uses unique `.build/proof-*` directories and never removes the whole `.build`. Temporary proof servers and the owned PostgreSQL container are stopped; run artifacts remain inspectable.
