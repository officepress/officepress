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

The 0.10.8 framework SQL plugin assumes a `client` service. Its registration code is reusable, but does not implement an OfficePress dependency policy. The local store plugin now calls it from a late `config` listener only when both `database` and `client` exist. This adds the SQL `listen` and `idea` contributions before those phases run. If either is absent, store returns without registering SQL behavior. See [the store integration](../../proofs/stackpress-boilerplate/plugins/store/plugin.ts). The earlier standalone `data` adapter was merged into store by the 2026-10-08 user direction.

Keep this decision within the owning store plugin. Bootstrap only selects modules and sequences lifecycle events; it does not validate a global dependency graph. For providers with different priorities, choose dependency-check timing explicitly and test it.

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

The historical baseline receipt used `.data/pglite` and retained unique `.build/proof-*` directories. The current development default is `.build/database/pglite`, with repeatable fixtures in config `database.populate`; fresh isolated proof directories are removed after their connections close and receipts are saved. Never remove the whole `.build`. The earlier optional PostgreSQL container proof remains historical evidence, not a required cross-engine compatibility gate.

## Identity integration and app-data ownership

The user accepted the auth simplifications on 2026-10-09 for both
[app-shell](../../proofs/app-shell/plugins/auth/README.md) and
[common-components](../../proofs/common-components/plugins/auth/README.md).
Framework password/TOTP verification, profile/password operations and JWT signing
remain delegated to the installed 0.10.8 handlers. Public handler exports are not
available, so the pinned `framework.ts` integration seam remains.

The auth-owned `identity.ts` shares a pending caller lookup through weak request
keys. It verifies JWT/session age and reads current active profile, roles and
credentials once per request. `invalidate(req)` forces a fresh projection after
account writes. Each subsequent request reloads identity; no process-wide user
cache or JWT-role-only authorization is introduced. The shared page helper owns
base/page/family/theme props, and shared profile fields preserve visible order.

The app-owned `purge.ts` implements `AppData` from `plugins/app/types.ts`,
registered as `app-data` during config. Availability is checked after generated
listeners exist. Auth checks `ready()` before registering the destructive POST;
GET keeps the unavailable explanation. The service rechecks availability and
fixes the app ID from config. Auth supplies only the verified caller ID after
CSRF, writable-role and exact typed-confirmation checks. It never imports a
private domain implementation or accepts a deletion scope from HTTP input.

The four-table shell-data ownership map and transaction remain unchanged.
Common-component business tables are outside that map. Identity, challenge
history, company theme, other apps and other users remain preserved. An adopter
must supply its own reviewed map rather than treating this proof scope as a
universal purge contract.

Challenge matching and auth-page links use configured `auth.base`, including
nested custom prefixes. No unused `auth-signup` event or public signup/phone
route is registered; disposable fixtures continue using framework AuthActions.

[App-shell contracts](../../proofs/app-shell/plugins/auth/tests/contract.ts) and
[common-components contracts](../../proofs/common-components/plugins/auth/tests/contract.ts)
run under both default and custom bases through their normal test aggregators.
They retain credential, CSRF, READONLY, ownership, secret-redaction, age,
expiry/replay/concurrency and purge-isolation checks, with added request reuse,
post-write invalidation and next-request role/activation cases. Missing store or
generated schema keeps purge unavailable. Fresh receipts are written to each
proof’s `tests/evidence/receipts/`; inspect them before reporting a pass.

Cookie preservation, schema normalization, omitted-phone handling, CSRF/GET/
ownership guards, event-override filtering, local redirects, secret redaction and
the persistent challenge ledger remain required for this installed version.
Remove an adapter only after equivalent unwrapped-framework checks pass.
