# Historical proof guideline refactor — 2026-10-10

This directory remains historical framework evidence. App-shell is the maintained
scaffold. The refactor keeps Stackpress runtime packages at 0.10.8, the existing
composed Note model, public demonstration routes, response behavior and independent
home renderer.

## Applied ownership

- App lifecycle wiring lazily registers default configure/request/build actions;
  the request renderer and build capability register during listen.
- Home registers a literal lazy page, binds its browser view separately and
  imports its body from `components/Body.tsx`.
- Note search/status are named business events; its page delegates with shared
  request/response references. Existing generated Note event contracts remain.
- Store keeps connection and guarded SQL registration; data commands fail closed
  unless given an explicit disposable PGlite target and proof marker.
- CLI configs export awaited bootstraps; `config/develop.ts`, `config/production.ts`,
  preview/client configs and shared `tests/bootstrap.ts` replace earlier paths.
- Yarn scripts dispatch Stackpress commands, with one app-owned rendering build.
  Redundant build/generate/develop/serve executables and optional PostgreSQL wrapper
  are removed. Node integration helpers remain under `tests/runners/`.
- Root test aggregation imports the existing Note plugin suite. Evidence writers
  use relative `tests/evidence/{receipts,verification,playwright,reviews}/` folders.
  Moved historical receipts retain their original commands and paths.
- `yarn.lock` replaces the npm lockfile. Runtime pins remain unchanged; dotenv-cli
  11.0.0 implements the accepted CLI scripts and fast-glob 3.3.3 supplies the
  published schema Revisions module's undeclared dependency.

## Fresh verification

`yarn install --frozen-lockfile --ignore-scripts`, `yarn generate`,
`yarn typecheck` and `yarn build` passed. The managed test campaign ran:

```sh
devmetrics start --wait 1 --project officepress-historical-proof \
  --summary "Historical proof full CLI regression" -- 'PORT={port} yarn test'
```

It passed **24 integration checks and 2 Node tests** on Node v26.3.0.
The fresh [latest receipt](../receipts/latest.json) records exact pins, source
fingerprints and scope. Its timestamped sibling is
`../receipts/2026-10-10T07-54-35-175Z.json`.
Source hashes were rechecked against current maintained inputs; the run-owned
scratch directory was absent after completion.

The campaign tested CLI generate/generate:client, push/populate/query/purge on a
separate empty scratch database, migration SQL creation, named emit dispatch,
dev cache cleanup, generated CRUD/validation, restart persistence, rendering
builds, development and built HTTP, safe props, missing notes/store/schema
providers and restoration. Each HTTP child used the devmetrics-assigned port
3001 sequentially; the process exited successfully and unregistered itself.

The actual `yarn dev` watcher was also started through devmetrics on port 3003:
home HTML and public CSS both returned 200, then `devmetrics stop 3003` stopped
its watcher/server process group. No local database was opened in that smoke check.

The earlier 16-check runtime campaign also passed. An expanded intermediate run
failed at push because the published Revisions module imported absent fast-glob;
its failed timestamped receipt is retained. Adding the explicit pinned package
resolved that failure in the final full command campaign.

## Scope limits

The fresh campaign used PGlite and local HTTP; no real PostgreSQL container,
interactive browser campaign, production authentication/tenant contract or
deployment acceptance is claimed. Development is the database substitute policy;
no cross-engine compatibility campaign is required. Existing review databases,
shared build siblings and real migration history were preserved.
