# Stackpress data and generation

Production uses PostgreSQL by default. Local development/proofs use PGlite. An unavailable production database must not silently switch to a local database. Keep real data and migration history outside disposable build directories.

Root `schema.idea` composes smaller responsibility-owned `.idea` files through `use`. The user reports that this structure makes generation work faster; no engine-level incremental speedup is asserted. Keep imported types and relations valid, and verify the same composed model set reaches generated code. Runtime plugin disablement does not mean dropping its tables.

Use schema-native modeling, validation and generated operations where supported; handwritten workflows add behavior beyond CRUD. Understand built-in Profile/Auth/session definitions before reusing them. Preserve required fields, uniqueness, relationships, deletion semantics and UI attributes deliberately.

Code generation collects `idea` contributions and emits a client. Reconnect the generated client and model listeners, then test an actual operation. Rendering bundles and database application are separate stages.

Inspect destructive commands before use. Generated revisions/SQL are not an applied-migration ledger. Only initialize a known disposable proof database automatically; real schema changes require an explicit migration plan. Measure PostgreSQL integration separately from a PGlite proof.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested generation examples](../references/00357-stackpress-tested-plugin-pattern.md) — load for exact Idea enum/model syntax, root composition and safe proof initialization.
