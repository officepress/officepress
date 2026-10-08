# OfficePress Stackpress baseline

A shared starting point and executable framework proof for every OfficePress app. It demonstrates Stackpress 0.10.8, an Ingest/Reactus shell, composed Idea generation, generated SQL operations, environment-specific databases, built serving and responsibility-based plugins.

This baseline is app-neutral. Replace the Home Page and small Note example with the target app's accepted product behavior. The earlier Commerce Orders-specific P13/P14 wording described where this proof originated; it is not a requirement for other apps.

## Start

Use Node.js 22.14+ within the Node 22 line (the verified runtime is recorded in the receipt), and npm with the supplied lockfile.

```bash
npm ci
npm run generate
npm run typecheck
npm run build
npm run dev
```

The shell listens on `http://127.0.0.1:3020` by default. Set `HOST` and `PORT` as needed. Scripts resolve paths from the app root. Generation emits `.build/client`; rendering build emits `.build/server` and `.build/public`.

The Note route demonstrates generated reads and expects its table to exist. Generation does not apply database changes. Use the disposable proof below to exercise the sample end to end. There is intentionally no automatic schema reset or production seed user on normal startup.

## Production serving

Production defaults to PostgreSQL. Provide an existing database with the reviewed schema applied, build the app, then serve:

```bash
DATABASE_URL=postgresql://user:password@host:5432/officepress npm run serve
```

The example URL is a placeholder, not a credential. Supply the real value through your environment manager; scripts do not automatically load `.env`. PostgreSQL failure never falls back to PGlite.

Local development uses one disposable PGlite database at `.build/database/pglite`. `PGLITE_DIR` overrides that path. `DATABASE_ADAPTER=postgres` can select PostgreSQL for development. An explicit `DATABASE_ADAPTER=pglite` may be used to test production rendering locally; that is a proof override, not the production default. The sample Note fixture is declared in config `database.populate` and applied explicitly after fresh schema installation.

## Responsibility map

| Area | Responsibility |
| --- | --- |
| `config/common.ts`, `dev.ts`, `build.ts`, `live.ts` | Paths, generated client and environment-specific settings |
| `bootstrap/server.ts` | Select modules, run lifecycle phases, start/stop HTTP |
| `plugins/app` | Shared Reactus rendering and confined public-file serving |
| `plugins/store` | Select/register PostgreSQL or PGlite, connect guarded Stackpress SQL behavior, and close the connection |
| `stackpress-schema` | Framework Idea generation and generated-client loader |
| `plugins/home` | Independent home view requiring the rendering service |
| `plugins/notes` | Small example feature requiring database and generated Note events |
| `schema.idea` | Compose shared definitions and feature-owned Idea files |

Each dependent plugin checks its own required services in `plugin.ts`. If they are absent, it does not register its feature routes/listeners. The bootstrap selector does not validate a dependency graph. Selection changes require restart; there is no live unloading.

For example, start the shell with `OFFICEPRESS_DISABLED_PLUGINS=store npm run dev`: the shell remains available and the Note feature does not register. Disabling `notes` or `stackpress-schema` similarly removes the dependent feature. Restore the selection and restart to restore it. Runtime disablement does not drop tables or remove schema imports.

The custom app plugin is the only rendering owner. Do not also enable the aggregate Stackpress view plugin without deliberately replacing this bridge. The SQL integration adapter delays registration until the configuration phase has supplied its required services.

## Smaller Idea files

`schema.idea` uses `schema/shared.idea` for shared definitions and `plugins/notes/schema.idea` for the model. Keep models near their responsibility and compose through one root entry. This supports targeted authoring and the user's reported faster generation workflow. The proof verifies composition and generated behavior; it does not claim incremental compilation or a measured speedup.

## Run the proof

```bash
npm run prove
npm run prove -- --postgres
```

The second command also uses Docker and the `postgres:17-alpine` image. It creates a uniquely named disposable container with a random loopback port, no host data mount and fixed test-only credentials, then removes that container at completion. It never targets an existing database URL.

Both commands create an isolated `.build/proof-*` directory for generated output and a PGlite database. Each run removes only its closed scratch directory after recording the receipt; it never deletes the shared `.build` tree or the current `.build/database/pglite` database. The runner creates and removes its own preservation marker and stops its temporary servers.

Checks cover:

- Exact runtime package pins and TypeScript across config, bootstrap, scripts and plugins.
- Composed generation, generated model exports, CRUD, required-field validation and persistence after process restart.
- Client/server/CSS build, development HTTP, built production HTTP and static resources.
- Private request headers excluded from serialized page props.
- Absent feature routes/listeners with `notes`, `store` and `stackpress-schema` disabled; independent shell survival and restoration after restart.
- PostgreSQL CRUD/persistence and production adapter selection when `--postgres` is used.

`receipts/latest.json` records results, runtime, exact dependency versions and source fingerprints. A failed run records the failure. Read the receipt rather than assuming a command succeeded.

## Adopt for an app

Copy maintained inputs to a new empty project. Exclude `node_modules`, `.build`, `receipts` and real environment files. Keep `.env.example`, the lockfile and root Idea composition. Rename the package and product copy, choose feature boundaries and replace the sample schema and config populate fixtures deliberately. Align generated-client identity in `config/common.ts` when naming the app.

Follow the local KB for OfficePress brand, UI, authentication and product requirements. This proof does not implement production authentication, tenant isolation, permissions, background jobs or an app's business features. It does not establish interactive browser or deployment acceptance. Add those checks for the target app. The Note route is an intentionally public local example, not an authorization pattern.

Treat database application separately from code generation and bundle build. Review migrations and back up real data. The proof initializes only a checked-empty disposable database through generated install scripts; it does not expose a general-purpose reset command.
