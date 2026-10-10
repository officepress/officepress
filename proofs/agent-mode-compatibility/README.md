# P-00: agent mode compatibility

This runnable comparison uses Stackpress 0.10.8 for the shared HTTP action owner.
Both candidates call the same authenticated, permission-checked read, rename and
Undo operations through the reusable `agent-action` Stackpress event. The live gate uses real OpenRouter responses from
`google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini`.

Candidate A loads the **actual, unmodified portable host bridge export** from
`@agent-native/core@0.198.7` into a host page and iframe. It tests
`createAgentNativeHostBridge`, `requestAgentNativeHostContext`,
`requestAgentNativeHostActions` and `runAgentNativeHostAction` in Chrome.
Candidate B calls the Stackpress action endpoint directly. Both use the same
server-only model runner and preserve backend ownership of identity and effects.

This does **not** claim integration of the full agent-native embedded application,
its agent engine, Nitro/H3 server, Drizzle schema, or its React panel. The portable
SDK requires a host-owned model runner; the SDK alone is not an agent runtime.
P-01 owns the actual OfficePress Reactus shell and Stackpress account session.

## Run

Use Node 24.21.0 (tested); the pinned SDK declares Node >=22.22.0. The maintained
OfficePress baseline remains on its existing Stackpress 0.10.8 ecosystem.

```bash
yarn install --frozen-lockfile
yarn prepare:sdk
yarn typecheck
yarn build
devmetrics start --summary "Agent compatibility browser matrix" -- 'PORT={port} yarn test'
# Optional bounded real model gate (requires repository-root test credential):
devmetrics start --summary "Agent compatibility live matrix" -- 'PORT={port} yarn test:live'
```

`yarn test` runs seven plugin-owned contract tests plus the offline Chrome/SDK matrix.
It makes no model-provider calls and marks live model verification as not run.
`yarn test:unit` is a non-listening controlled gate. `yarn test:live` repeats the
Chrome matrix with all four real model/candidate combinations; a missing key fails
that gate rather than silently skipping it. All listening scripts require devmetrics.

The live proof reads **only** `OPENROUTER_TEST_KEY` from repository-root `.env`, using
an explicit path. It never copies the key into the browser, model context,
committed files or receipts. `yarn test:live` incurs bounded real model calls:
two models × two candidates, with at most six completion rounds per run.
Chrome must be installed; the driver launches its own headless process and
stops it and its loopback HTTP servers in cleanup, then removes only its run-owned
fixture state. No live application data is
used. The complete output includes the provider's returned model identifier.

`yarn dev` uses the Stackpress CLI watcher. Run it through devmetrics with the assigned 3000–3020 port. The automated
proof supplies disposable HTTP-only fixture sessions; it does not expose a
public login shortcut. Use the test matrix for authenticated interactions.

## Copyable responsibilities

- `plugins/agent-runtime/openrouter.ts`: server-only model/tool loop. Copy into
  another app with no sibling-proof dependencies. Supply allowed tool schemas,
  safe context and an execution callback with the authenticated caller captured
  on the server. It returns action cards, real provider IDs/usage and failure
  state, preserving completed cards if generation fails or is cancelled.
- `plugins/agent-domain/store.ts`: **proof fixture only**, a single-process JSON
  state/receipt store. Production adopters must implement transactions and
  idempotency in their PostgreSQL-backed domain plugin. The model cannot choose
  the caller, role, company or operation key. Schema/version validation and Undo
  conflict checks belong here, not in the model prompt or browser.
- `plugins/bridge-host/`: optional portable SDK adapter. It binds an exact origin
  and iframe window before listening. It delegates to the same backend endpoint,
  denies default SDK navigation/reload commands and registers no WebMCP tools.
- `plugins/agent-domain/events/execute.ts`: business-event adapter for the shared
  operation store; accepts a trusted server caller and owns permission/error outcomes.
- `plugins/agent-runtime/events/run.ts`: server-only `agent-run` event, capturing
  that caller before resolving `agent-action` for every allowed model tool.
- `plugins/bridge-host/pages/`: literal lazy default actions for HTTP input,
  cookie/CSRF/origin checks and response formatting. Browser HTML stays in
  `views/templates.ts`; the original portable SDK fixture deliberately uses HTML
  responses instead of adding a different renderer or Reactus provider.
- `tests/bootstrap.ts`: narrow Stackpress bootstrap derived from the maintained
  baseline's module-selection/lifecycle pattern. Each plugin checks its own
  dependencies; there is no dependency graph validator or live unloading.

P-00 uses synthetic single-company editor/viewer callers and a wrong-company
negative fixture. Its cookie/CSRF boundary is a disposable test harness, **not**
a substitute for P-01's actual Stackpress account session integration.

## Evidence and boundaries

The retained [2026-10-05 verification](tests/evidence/verification/p00-2026-10-05.json) passed
40 checks, including all four real model/candidate combinations. TypeScript and
the comparison-page build passed on Node 24.21.0; Chrome 154.0.8037.93 was used.

`tests/evidence/receipts/latest.json` and timestamped receipts contain fresh pass/fail checks,
source hashes, model IDs, tool operations, token usage and failures. Failed runs
are retained. Temporary databases/state and the SDK artifact live in ignored
`.build/`; browser screenshots live in `tests/evidence/playwright/`.

The executed matrix covers UI → same action, both model/candidate combinations,
viewer and company denial, stale versions, duplicate/lost-reply replay, operation
key misuse, explicit Undo after commit, restart persistence, origin/CSRF denial,
wrong-origin and wrong-window SDK messages, listener stop/restart and absent
required-plugin registration. One real model run is cancelled immediately after its rename commits, then
verified through its retained mutation card and an explicit Undo. It is not a promise that
aborting network I/O rolls back an already committed transaction.

CLI `build`, `develop`, `serve`, `preview` and `emit` use awaited `config/`
bootstraps and the shared sequential config/listen/route initializer. `build`
writes comparison HTML artifacts; it does not claim a production renderer.
`production` is a comparison-fixture serving target, not production storage/auth.
No schema/generate/migrate/populate scripts are invented for this JSON fixture.
`tests/all.test.ts` imports each plugin suite explicitly.

No schema migration is introduced by either portable candidate. P-00's fixture
storage deliberately does not claim PostgreSQL, migration, production session,
multi-process concurrency or persistent agent transcript acceptance.

## SDK footprint and recommendation

The pinned npm archive is 9,067,956 bytes, expanding to 30,012,411 bytes / 3,978
files. The exported portable browser module is 34,090 bytes and has no runtime
imports. `sdk/package-lock-info.json` retains npm SHA-512 integrity and artifact
metadata. `prepare:sdk` verifies the complete tarball before extracting it into
ignored `.build/sdk`; it refuses a changed export or new runtime imports.

The full package's published peers include React >=19.2.7 and optional PGlite
^0.5.8, whereas the OfficePress baseline pins React 19.2.4 and PGlite 0.3.15.
The package's framework topology also owns Nitro/H3 and Drizzle services.
These are integration differences to resolve before selecting full embedding;
no peer overrides or forced baseline dependency upgrades were used here.

**Recommendation for P-01:** use the Stackpress-native shared action runner.
The portable SDK can work as an optional future frame adapter, but adds a
message boundary without replacing server identity, operations or model
orchestration. This recommendation is bounded proof evidence, not a permanent
product architecture decision or rejection of the upstream framework.

Fresh 2026-10-10 verification passed seven plugin-owned tests, 32 offline matrix
checks and 41 live matrix checks, including all four model/candidate combinations.
The summary is retained in
[KB refactor verification](tests/evidence/verification/p00-kb-refactor-2026-10-10.json).
These remain bounded portable-SDK and fixture results, not full embedded-runtime
or production database/session acceptance.

Sources: [published package](https://www.npmjs.com/package/@agent-native/core/v/0.198.7),
[embedding SDK](https://www.agent-native.com/docs/embedding-sdk/),
[upstream source](https://github.com/BuilderIO/agent-native).
