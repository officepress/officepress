# Stackpress scaffolding

Use `proofs/stackpress-boilerplate/` as the OfficePress baseline for all apps. Keep bootstrap, shared app shell and persistence separate from product features. Copy only maintained inputs into a new empty app directory; exclude dependencies, output, receipts, databases and secrets.

Pin the Stackpress ecosystem to 0.10.8 and use Yarn with the matching `yarn.lock`. Independent libraries retain their own compatible versions. Read the baseline README for current commands and the proof receipt for what was actually checked.

Complete CLI bootstrap configs for develop/build/production/preview/client, standard CLI commands for generation/development/build/serve, a root Idea composition file and responsibility-specific plugins. Install, generate, type-check, build and exercise runtime behavior; copying files is only the first phase. Do not inherit Commerce Orders-specific routes or acceptance tasks.

Before adding a feature, define its actor, responsibility, services, schema ownership, permissions and disabled behavior. Implement against those contracts and the app's accepted product/UI context.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Yarn, CLI scripts and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) — load when changing package scripts, migrating config/bootstrap paths, aggregating plugin tests or storing proof evidence; records the accepted 2026-10-08 conventions and upstream provenance.
