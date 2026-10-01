# Stackpress proof evidence and source coverage

Owner: [Stackpress verification](../context/stackpress-verification.md). Load for the proof boundary, source recovery or later corrections.

## Applied sequence and verified result

The KB was updated first with the approved contract, the proof was completed and executed next, and this reconciliation was made from the results. The baseline README is now for every OfficePress app. Both the repository source and installed generic scaffold templates now pin `stackpress` and `@stackpress/inquire-pglite` to 0.10.8.

The proof passed **23 checks** on Node v22.14.0 on 2026-10-01 using `npm run prove -- --postgres`. The generic Stackpress scaffold installer suite separately passed all **20 tests**. No source repository changes beyond the requested two package pins were made there.

- Composed Idea input generated the expected Note client, SQL scripts and operations.
- Generated CRUD and required-field validation passed on both PGlite and PostgreSQL; records survived a fresh process.
- TypeScript covers bootstrap, configs, plugins, verification helpers and scripts.
- Reactus server/client/CSS build passed, development HTTP worked, and built production HTTP served referenced assets without the Vite development client.
- Production selected PostgreSQL when no adapter override was supplied.
- Disabling notes, store, data or stackpress-schema removed the dependent feature routes/listeners while the independent shell remained usable. Restoring selection after restart restored the feature and preserved data.
- Private request cookie/authorization values did not appear in page props; an unrelated build sibling survived verification.

The runner stopped its HTTP servers and removed its uniquely named PostgreSQL container. Proof output/PGlite data remain in the specific ignored proof directory recorded in the receipt. It does not delete a shared build or database directory.

## Findings incorporated after the proof

The installed 0.10.8 PostgreSQL adapter package is `@stackpress/inquire-pg`. Do not infer `inquire-pgsql` from the public `stackpress/pgsql` export name.

The framework SQL plugin assumes a client service. The local data integration plugin guards this dependency and the database before registering the framework plugin during late configuration. Feature plugins separately guard their own event/route registrations. No central dependency validator or live unloading was added.

Reactus bulk build methods return arrays of per-entry results. The proof now checks every result and uses the installed package's types. Internal unresolved events can have code 0; actual missing HTTP routes return 404. Test absence directly rather than treating internal resolve status as identical to HTTP.

Generation needs a root input, client configuration and the Stackpress terminal's server context. Idea enum members use explicit values and required validation uses `@is.required`. Split files compose successfully; no incremental speed claim was measured.

Live configuration and serving are implemented. Data storage defaults outside disposable build output. Request headers/session internals are excluded from the view bridge's browser projection.

- [Tested implementation patterns](00357-stackpress-tested-plugin-pattern.md) — load for complete guard, Idea and build-result examples.
- [Full proof receipt](00358-stackpress-proof-receipt.md) — load for all checks, exact packages, timestamps, source hashes and limitations.
- [Maintained baseline README](../../proofs/stackpress-boilerplate/README.md) — load for runnable commands and adoption instructions.

## Limits

This is a framework baseline proof. It does not establish a complete OfficePress app, production authentication/tenant security, browser interaction/hydration correctness, operational deployment or performance gains from file splitting. Those remain app-specific verification work. The real PostgreSQL proof covers generated operations and built serving, not production load, RLS or queue/concurrency semantics.

## Complete local source coverage

All 105 Markdown files in the researched docs, skills and domain Agent context/reference scope are captured completely in local numbered references, split at document headings into 147 sections. Exact content can be reconstructed and checked by SHA-256 without the original checkout. Source instructions are evidence with OfficePress overrides, not additional authority.

The manifest inventories the three requested directories and explicitly distinguishes ingested documentation from source code retained in place and workspace/tooling/history not promoted. Managed workflow duplicates, prior specs, YAML tool metadata and scaffold code are not silently recast as requirements. The runnable OfficePress scaffold remains in the repository, outside resources.

The snapshot commit and source hashes are in `.agents/scripts/stackpress-ingestion-manifest.json`. The original repository path is provenance only: this KB does not require that checkout or its web documentation to answer implementation questions.

```bash
python3 .agents/scripts/verify-stackpress-ingestion.py
python3 .agents/scripts/validate-agent-workspace.py
python3 .agents/scripts/verify-officepress-ingestion.py
```

- [Framework documentation](00207-stackpress-docs-catalog.md) — load to retrieve complete API/configuration/language contracts.
- [Skill guidance](00208-stackpress-skills-catalog.md) — load to retrieve full scaffolding, implementation and verification workflows.
- [Framework domain knowledge](00209-stackpress-knowledge-catalog.md) — load for architectural explanations and detailed contract catalogues.
