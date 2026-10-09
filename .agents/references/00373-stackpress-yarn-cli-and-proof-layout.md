# Stackpress Yarn, CLI and proof layout

Owner: [Stackpress handbook](../context/stackpress.md). Load when maintaining app
package scripts, bootstrap configs, plugin test aggregation or proof evidence.

## Authority and provenance

The user accepted these conventions on 2026-10-08 for `proofs/app-shell/` and
`proofs/common-components/` and requested reusable Stackpress guidance. They
supersede older npm, root bootstrap, `config/dev.ts`, `config/live.ts` and
standalone proof-wrapper examples for maintained apps. Historical receipts and
imported source examples remain evidence of their original runs.

Source retained in place: Stackpress repository
[`templates/blog/package.json`](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/blog/package.json),
main revision `a71d683051ba8350fdd12d6b5a33f268fdcc285f`, retrieved 2026-10-08.
The script inventory below preserves every upstream script in the requested
scope. Other package metadata/dependencies are outside this script import;
OfficePress retains its accepted 0.10.8 package composition and single renderer.

## Complete upstream script inventory

| Script | Upstream command |
| --- | --- |
| build | `stackpress build --b config/build -v` |
| dev | `yarn dev:clean && yarn dev:start` |
| dev:clean | `rm -rf node_modules/.vite` |
| dev:start | `dotenv -e .env -- stackpress develop --b config/develop -v` |
| desktop:build | `stackpress desktop:build --b config/desktop -v` |
| desktop:dev | `stackpress desktop:dev --b config/desktop -v` |
| desktop:package | `stackpress desktop:package --b config/desktop -v` |
| emit | `dotenv -e .env -- stackpress emit` |
| generate | `stackpress generate --b config/develop -v` |
| generate:client | `stackpress generate --b config/client -v` |
| migrate | `dotenv -e .env -- stackpress migrate --b config/develop -v` |
| populate | `dotenv -e .env -- stackpress populate --b config/develop -v` |
| preview | `dotenv -e .env -- stackpress serve --b config/preview -v` |
| purge | `dotenv -e .env -- stackpress purge --b config/develop -v` |
| push | `dotenv -e .env -- stackpress push --b config/develop -v` |
| query | `dotenv -e .env -- stackpress query --b config/develop -v` |
| serve | `stackpress serve --b config/production -v` |
| test | `node --import tsx --test tests/**/*.test.ts` |

## Accepted OfficePress adaptations

Use Yarn and `yarn.lock`; remove `package-lock.json`. These two proofs declare
`packageManager: yarn@1.22.22`; verify installs with `yarn install --frozen-lockfile`
and inspect resolved versions. Preserve existing dependency pins during migration.
Keep `typecheck: tsc --noEmit` as a useful additional local gate.

Both web proofs use every non-desktop script above. Desktop scripts apply only
when an adopter actually includes the desktop plugin and `config/desktop`;
do not add commands that resolve to absent capabilities.

`emit` uses `BOOTSTRAP=config/develop dotenv -e .env -- stackpress emit` locally.
The published CLI reads the emitted event positionally; putting bootstrap flags
before the event breaks dispatch. The environment selects the intended app's
bootstrap without changing event argument positions. Use `yarn emit <event>`.

Each CLI config exports an awaited default function that returns the configured,
bootstrapped server, in addition to its named config. Shared sequential lifecycle
and manifest-selection helpers live in `tests/bootstrap.ts`, as requested in the
2026-10-08 follow-up, with no separate bootstrap/scripts folder. CLI configs and
integration tests both import this helper; it remains a runtime input when copying
a proof, even though its path is under tests. Register `stackpress-server/plugin` before resolving `listen`: the
published CLI otherwise registers its lifecycle hook after a custom bootstrap has
already completed that phase, leaving serve/develop/emit unavailable. Dependent plugins still own their dependency checks.

- `config/develop.ts`: source rendering and local development data.
- `config/build.ts`: rendering/asset build, without production database access.
- `config/production.ts`: built rendering and explicit production PostgreSQL.
- `config/preview.ts`: built rendering with explicitly local development PGlite.
- `config/client.ts`: the same composed Idea generator as development.

Keep shared paths in `config/common.ts`, explicit root `cli.idea`, generated
client outputs, `client.revisions` and durable `database.migrations`. Generation,
migration SQL creation, schema application, data population and rendering builds
remain separate operations. Proof migration verification may redirect its own
SQL into a scratch directory; ordinary migrations belong outside `.build`.

The app plugin owns the CLI `build` event and rendering implementation. The auth
plugin owns its `idea` normalization listener, so both generate commands use it.
Use CLI dispatch instead of duplicate build/generate/dev/serve executables.
Remove redundant init/prove aliases only after retaining their required behavior
in database commands or test runners. These proofs removed the separate optional
PostgreSQL runner, consistent with the PGlite development compatibility policy.

Framework `push` is a database command, unrelated to Git push. Its first-install
path can drop tables; inspect targets before running it. In these proofs, push,
populate and purge require `OFFICEPRESS_DISPOSABLE_PROOF=1`, adapter PGlite and an
explicit matching `PGLITE_DIR`. Ordinary startup never seeds or migrates data.
These proof guards are not a production migration workflow. Keep real databases
and migration history intact; never delete a whole `.build` tree.

Use devmetrics for any listener or watcher, including HTTP-owning test runners:
`devmetrics start --summary "Purpose" -- 'PORT={port} yarn <script>'`.
Respect the assigned 3000-3020 port and stop the owned run afterward. Both proofs
disable the separate HMR listener and ignore evidence in development watchers.
Do not disturb unrelated registered or unmanaged servers.

## Plugin tests and evidence

Keep tests beside their owning plugin when they exist. Add a root test entry,
`tests/plugins/all.test.ts`, that imports the plugin suites and runs integration
runners sequentially. Do not create empty tests for plugins without suites.
Workflow/automation entry contracts import and execute their nested suites.
Include maintained tests in TypeScript checks; exclude only `tests/evidence/`.

App-shell's normal test run includes identity, settings, fixture action contracts,
built-browser hydration, notification boundaries, dependencies and restart
persistence. `OFFICEPRESS_LIVE_TESTS=1` adds existing live browser/model checks.
Common-components imports all six domain suites and exercises HTTP, dependency
absence and restart contracts. `OFFICEPRESS_SMTP_TESTS=1` is an explicit live-send
option; normal tests use controlled transports and do not send mail. Never claim
an unrun optional model/SMTP campaign passed.

Keep shared proof runners under `tests/runners/`, HTTP helpers under
`tests/helpers/` and repeatable population fixtures under `.fixtures/`/config.
Close listeners, workers, browser engines and database connections, then remove
only run-owned scratch databases. Retain failed and successful receipts.

Each proof owns `tests/evidence/playwright/`, `tests/evidence/verification/`,
`tests/evidence/receipts/` and `tests/evidence/reviews/`. Writers and live links
must use these paths. Preserve historical JSON commands and paths as originally
recorded; moving a receipt is not permission to rewrite its provenance. Exclude
evidence from source fingerprints/watchers. Fingerprint `yarn.lock`, manifest,
config, plugins, bootstrap helpers and maintained test inputs in fresh receipts.

Raw browser captures remain ignored. App-shell receipts remain ignored;
common-components retains its existing tracked-receipt policy. Reviewed evidence
is retained deliberately. Existing boilerplate/history can contain older command
examples; when adapting it, apply this current convention and verify the result.
