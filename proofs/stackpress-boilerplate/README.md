# Historical Stackpress framework proof

This app-neutral Stackpress 0.10.8 proof preserves composed Idea generation,
generated Note SQL operations, the Ingest/Reactus shell, safe serialized props,
dependency absence and restart persistence. It remains historical evidence.
Scaffold new OfficePress apps from [app-shell](../app-shell/README.md); use
[common-components](../common-components/README.md) for feature examples.

## Install and build

Use Node 24+ and Yarn 1.22.22. Runtime dependencies remain pinned to 0.10.8.

```sh
yarn install --frozen-lockfile
yarn generate
yarn typecheck
yarn build
devmetrics start --summary "Historical framework proof" -- 'PORT={port} yarn dev'
```

Stop the assigned devmetrics port after review. Generation writes `.build/client`;
rendering writes `.build/server` and `.build/public`. Ordinary startup never seeds
or resets data. `dev:clean` removes only the Vite cache.

Production `yarn serve` uses PostgreSQL and requires `DATABASE_URL`; it never falls
back to PGlite. Supply credentials through your environment manager. Development
and `yarn preview` use one local PGlite database at `.build/database/pglite`.
Use devmetrics for every listener, including the test suite below.

## Ownership and lifecycle

| Location | Responsibility |
| --- | --- |
| `config/develop.ts`, `build.ts`, `production.ts`, `preview.ts`, `client.ts` | Command-specific configuration and awaited CLI bootstraps. |
| `tests/bootstrap.ts` | Manifest selection, config → bootstrap → config/listen/route; CLI registration precedes listen. |
| `plugins/app` | Single Reactus renderer, public-file confinement, request and CLI build actions. |
| `plugins/store` | Connection registration/closure, guarded SQL integration and disposable command guard. |
| `plugins/home/pages`, `views` | Web response preparation and separately bound browser rendering. |
| `plugins/notes/events`, `pages` | Reusable Note search/status contracts and thin web adaptation. |
| Root `schema.idea` | Compose shared definitions and the feature-owned Note schema. |
| `tests/plugins/all.test.ts` | Import existing plugin suite and run the isolated integration campaign. |
| `tests/runners` | Run-owned schema/runtime verification and sequential managed HTTP campaign. |

`plugin.ts` contains lifecycle wiring and service checks. External page/event
handlers use visible literal lazy imports and default actions. Events own business
operations; pages call events and prepare web responses. The intentionally public
Note demo does not establish authentication, tenant or permission policy.

Each dependent plugin checks its services before registering its routes/listeners.
Disabling `notes`, `store` or `stackpress-schema` preserves the independent home
renderer and removes the dependent feature. Change `OFFICEPRESS_DISABLED_PLUGINS`
and restart to restore it; disabling runtime code preserves database records and
schema imports. There is no live unloading or automatic dependency graph checker.

Built serving bypasses Vite middleware and uses the confined static handler.
Browser entries import only browser-safe components/types; there is one renderer.

## Commands and database care

The manifest uses Stackpress CLI dispatch for build, develop, generate,
generate:client, migrate, populate, preview, purge, push, query, serve and emit.
Desktop commands are omitted because this proof has no desktop capability.
Use `yarn emit notes-status` to resolve the sample event.

Code generation, rendering build, migration SQL creation, schema application and
population are separate. Migrations normally belong in `migrations/`;
`OFFICEPRESS_MIGRATIONS_DIR` redirects a run-owned verification target.
`push`, `populate` and `purge` require `OFFICEPRESS_DISPOSABLE_PROOF=1`, PGlite and
an explicit matching `PGLITE_DIR`. Framework push can replace tables; inspect the
target first. These guards do not implement production migration policy.

The Note fixture lives in config `database.populate`. The integration campaign
installs it only in a checked-empty scratch database, verifies required-field
validation, closes each connection and removes only its own scratch directory.
It never deletes `.build` or an existing `.build/database/pglite` directory.

## Reproduce verification

```sh
yarn generate
yarn typecheck
yarn build
devmetrics start --wait 1 --summary "Historical framework contracts" -- 'PORT={port} yarn test'
```

The managed test process reserves one assigned 3000–3020 port; its HTTP children
bind it sequentially. Read devmetrics logs and the fresh receipt after completion.
The test process exits and unregisters itself; explicitly stop its assigned port
if interrupted. No optional PostgreSQL container campaign is part of this gate.

Checks retain package pins, composed generation, generated CRUD/validation,
persistence after process restart, built client/server/CSS assets, development and
built HTTP, safe serialized props, missing feature providers and restoration.
They establish PGlite/local framework scope, not interactive-browser, production,
authentication, tenant or deployment acceptance. Split Idea composition is checked;
no incremental-generation performance improvement is claimed.

Fresh timestamped and latest receipts live in `tests/evidence/receipts/` and exclude
evidence from source fingerprints. Reviewed reports live in
[verification](tests/evidence/verification/guideline-refactor.md), captures in
`tests/evidence/playwright/`, reviews in `tests/evidence/reviews/`. Existing moved
receipts retain their original commands/paths as historical provenance.

Read [the KB agent guidelines](../../.agents/context/stackpress-logic-patterns.md)
and [CLI/layout conventions](../../.agents/references/00373-stackpress-yarn-cli-and-proof-layout.md)
when adapting historical evidence. Copy maintained scaffold inputs from app-shell,
not this directory. Keep dependency directories, build output, receipts, private
environment files and local databases out of Git.
