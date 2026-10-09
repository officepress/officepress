# Yarn and CLI verification — 2026-10-08

Scope: this web proof's 16 declared scripts and the Yarn/config/bootstrap/test
migration. Node 24.21.0, Yarn 1.22.22, Stackpress ecosystem 0.10.8.

- `yarn install --frozen-lockfile`, `generate`, `generate:client`, `typecheck`
  and `build` passed after installing the required dotenv-cli/fast-glob packages.
- [CLI operations](yarn-cli-commands.json) used a fresh isolated PGlite target:
  push created tables, populate inserted fixture profiles, query read their counts,
  migrate emitted SQL, emit returned a 200 profile-search result, and purge emptied
  the fixture rows. SQL scratch directories were removed after commands finished.
- [HTTP runtime checks](yarn-runtime.json) started dev, dev:start, preview and
  serve through devmetrics and checked auth HTML and a static stylesheet. Serve
  was deliberately exercised with the PGlite override; production PostgreSQL
  operation remains outside this check. All run-owned listeners were stopped.
- dev:clean removed only the Vite cache. An unguarded purge exited nonzero before
  mutating a database. Existing review databases were preserved.
- [Final Node test output](yarn-test.log) and timestamped receipts under
  `../receipts/` record the fresh plugin contracts and their limitations.

Live OpenRouter/browser campaigns and SMTP sends were not repeated. Desktop
commands are excluded because this proof does not include a desktop plugin.
These results establish the bounded local scripts, not production readiness.

## Bootstrap relocation follow-up

The shared helper now lives at `tests/bootstrap.ts`. CLI configs, integration
runners and plugin configuration tests use that path; the empty `scripts/`
folders and their source-fingerprint/typecheck entries were removed. Generation,
typechecking, rendering builds and the normal managed test suites were rerun.
The updated [Node test output](yarn-test.log) and timestamped receipts retain
the results. Historical receipts keep their original source paths.
