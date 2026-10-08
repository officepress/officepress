# Stackpress data and generation

Production uses PostgreSQL by default. Prefer PGlite during development to keep compute use low; use it as the development substitute for PostgreSQL and CockroachDB. This is an adoption assumption, not a claim that every engine behavior has been tested. Do not require a separate PGlite/PostgreSQL/CockroachDB compatibility proof. An unavailable production database must not silently switch to PGlite.

Keep the one current development PGlite database under `.build/database/`, not a root `.data/` folder. Treat it as temporary and disposable. Do not retain multiple versions of an app database; close connections and clean up run-owned scratch databases when their purpose ends. Inspect existing review data before removal, and never delete an entire build tree to clean a database. Keep real production data and migration history outside disposable build output.

Declare repeatable development fixtures as event/data entries in `config` under `database.populate`, following the Stackpress populate contract. Run population explicitly against a fresh disposable database so fixtures can be reconstructed after a reset or rebuild without retaining old database copies. Do not put production secrets in fixtures or assume a rendering build applies schema or population automatically.

The [Stackpress configuration reference](../references/00246-stackpress-source-docs-config-reference-md-part-1.md) records the `database.populate` event/data shape; load it when authoring fixture entries.

Root `schema.idea` composes smaller responsibility-owned `.idea` files through `use`. The user reports that this structure makes generation work faster; no engine-level incremental speedup is asserted. Keep imported types and relations valid, and verify the same composed model set reaches generated code. Runtime plugin disablement does not mean dropping its tables.

Use schema-native modeling, validation and generated operations where supported; handwritten workflows add behavior beyond CRUD. Understand built-in Profile/Auth/session definitions before reusing them. Preserve required fields, uniqueness, relationships, deletion semantics and UI attributes deliberately.

Code generation collects `idea` contributions and emits a client. Reconnect the generated client and model listeners, then test an actual operation. Rendering bundles and database application are separate stages.

Inspect destructive commands before use. Generated revisions/SQL are not an applied-migration ledger. Only initialize a known disposable development/proof database automatically; real schema changes require an explicit migration plan. Record which adapter was actually exercised without adding a cross-engine compatibility gate.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested generation examples](../references/00357-stackpress-tested-plugin-pattern.md) — load for exact Idea enum/model syntax, root composition and safe proof initialization.
