# Tested Stackpress plugin and generation patterns

Current guideline boundary, accepted 2026-10-10: use [agent guidelines](../context/stackpress-logic-patterns.md) when building other apps. This reference documents concrete OfficePress proof adapters and earlier receipts, not universal custom-module design. Pages adapt web requests/responses; named events own app business logic and may call optional helpers. Inspect current implementation before copying a historical adapter.

Owner: [Plugin architecture](../context/stackpress-plugin-architecture.md). Load to implement dependency guards and align behavior with the local 0.10.8 proof.

## Feature-owned guards

This section implements accepted OfficePress dependency policy. The ready helper
and repeated guard signature are local examples, not a prescribed Stackpress API.
For source-backed lifecycle placement and reusable custom events, load
[the provenance correction and custom-module example](00377-stackpress-pattern-source-review.md#correction-examples-2-4-and-7).

The guard pattern comes from [the historical Note plugin](../../proofs/stackpress-boilerplate/plugins/notes/plugin.ts). Its `ready()` helper checks the database service, generated client service, expected model and generated search listener. It is called separately before event registration and before route registration. The original historical source registered its handler body inline in `plugin.ts`; the 2026-10-10 proof alignment now uses a lazy default page plus business event. That earlier eager/inline form is superseded by the [lazy-registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) — the user prefers lazy registration so handlers stay visible module boundaries that custom build scripts and chunking can consider. The current form combines both:

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
    ctx.on('notes-status', () => import('./events/status.js'));
  }, -100);
  server.on('route', async ({ ctx }) => {
    if (!await ready(ctx)) return;
    ctx.get('/notes', () => import('./pages/search.js'));
  });
}
```

`pages/search.js` default-exports the action that resolves `note-search` and formats the web response (the body formerly shown inline); `events/status.js` default-exports the availability responder. Current executable lazy examples are the app-shell and common-components plugins listed under [proof plugin organization](#proof-plugin-organization).

This is a public local demonstration. A real feature must additionally enforce its identity, tenant and permissions contract at the appropriate boundary. Missing required security services disable the feature; they never turn it public.

## Framework integration guard

The 0.10.8 framework SQL plugin assumes a `client` service. Its registration code is reusable, but does not implement an OfficePress dependency policy. The local store plugin now calls it from a late `config` listener only when both `database` and `client` exist. This adds the SQL `listen` and `idea` contributions before those phases run. If either is absent, store returns without registering SQL behavior. See [the current store integration](../../proofs/app-shell/plugins/store/plugin.ts); [the historical boilerplate store](../../proofs/stackpress-boilerplate/plugins/store/plugin.ts) records the original receipt. The earlier standalone `data` adapter was merged into store by the 2026-10-08 user direction.

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

## Proof plugin organization

The 2026-10-09 Stackpress AI refactor applies to [app-shell](../../proofs/app-shell/README.md#plugin-files-and-lifecycle) and [common-components](../../proofs/common-components/README.md#plugin-files-and-lifecycle). Use this structure when copying or extending their plugins:

- `plugin.ts`: configuration, dependency checks and lifecycle/route/view registration. Every dependent plugin owns its `ready()` checks; this is not a global graph validator.
- `pages/`: default Ingest `action()` HTTP handlers. They adapt the web request, apply CSRF, call named events and prepare web responses/view props. Business validation and authorization live inside the event so CLI/API callers cannot bypass them. Earlier parameterized factories were removed; trusted auth route metadata preserves installed-handler policy.
- `events/`: named business actions plus server request/build/identity/cookie handlers. Current workflow transitions resolve `officepress-workflow-transition` after commit; automations registers its integration at priority -100. Isolated service observers remain for tests. `app/events/build.ts` owns the CLI rendering build; `store/events/disposable.ts` preserves the explicit scratch-database guard; `automations/events/workflow.ts` handles committed workflow transitions. An HTTP SSE endpoint remains `chat/pages/stream.ts`.
- `views/`: thin browser entrypoints. Auth uses components for identity UI and shared profile fields. Common Workflows, Messages, Forms and Chat own `views/index.tsx`; navigation metadata contributes the view path, while Shell supplies common HTTP page preparation and route binding. Automations remains a contextual workflow component.
- `components/`, `client.ts`, `types.ts`: reusable browser-safe bodies/layouts and intentional public contracts. Shell's `client.ts` exports Frame/Head; Frame accepts the feature component instead of importing a hard-coded domain map. Keep server modules out of browser import graphs.
- `transform/`: actual generation logic only. `auth/transform/normalize.ts` runs directly at early `idea` priority 1000 to remove only unresolved external Profile relations. This is a schema preprocessor, not a code emitter; registering it as a later emission transform would run too late. Do not change its timing or vendor schema.
- `tests/`: plugin-owned contracts. Root test aggregators and shared bootstrap/runners retain their accepted orchestration role; all receipts, screenshots and reports stay under proof-relative `tests/evidence/`.

Providers register during `config`. Late config guards can inspect `client(true).model` and the expected model's `listen` function without requiring runtime listeners yet. SQL installs those listeners during `listen`; dependent navigation/subscriptions/workers run afterward at priority -400 and recheck identity and generated-listener readiness. `route` rechecks dependencies independently before binding pages/views. Mail registration runs during config. Automation service construction does not start its scheduler; guarded `listen` calls its idempotent `start()`, and run teardown calls `stop()`.

Request identity reuse does not extend across an indefinitely active stream or model operation. Chat heartbeats and agent tool-context reads explicitly invalidate the request projection before reauthorization, while ordinary pages retain one lookup per request and post-write invalidation.

Verify generation, typechecking, rendering builds and normal Yarn suites in both proofs. Common-components' [browser contract](../../proofs/common-components/plugins/settings/shell/tests/browser.ts) checks all four feature-owned built views, their authorized API loads, the shared interactive details provider, absence of page errors and a 390px workflow render. These are bounded local checks; optional real-model/SMTP campaigns and production acceptance remain separate. Inspect fresh source-fingerprinted receipts and cleanup before reporting success.

## Lazy handler registration and recurring corrections

The 2026-10-09 user decision requires literal lazy page/event imports in authored
plugin registration and continuing KB updates for verified recurring patterns.
Load [the complete lazy-registration and maintenance contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md)
before copying/refactoring handlers; it supersedes eager page-action examples,
retains lifecycle/security exceptions, and requires source/runtime regression checks.

The 2026-10-10 all-proof alignment applies this boundary to shared notifications, agent operations, settings, auth purge and action fixtures as well as component domains. The framework-auth event is an installed-version HTTP adapter: built-in handlers still consume method/URL, sessions and redirects; it is not a template for medium-dependent custom business events. Auth challenge, app purge and feature transaction queries now use the supplied Connection explicitly. Read [the all-proof refactor verification](../../proofs/app-shell/tests/evidence/verification/all-proofs-guideline-refactor.md) when checking current coverage and bounded exceptions.

Protected mutation pages preserve their existing rejection order by resolving an owner-provided authorization event against the actual request before CSRF, then emitting the business mutation only after CSRF passes. Forms previously required administrator access before CSRF; other component writers checked their business role afterward. Preserve those observable status contracts instead of blindly moving CSRF to the first line. Authorization also remains in the mutation event for non-HTTP callers. The authorize preflight pattern is a local adapter choice, not a required universal module or framework helper.
