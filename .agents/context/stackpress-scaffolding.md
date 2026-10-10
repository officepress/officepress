# Stackpress scaffolding

Use `proofs/app-shell/` as the OfficePress scaffold baseline for all apps (2026-10-10 user decision). For workflows/automations (kanban), form builder or message templates, copy and adapt from `proofs/common-components/`. Keep bootstrap, shared app shell and persistence separate from product features. Copy only maintained inputs into a new empty app directory; exclude dependencies, output, receipts, databases and secrets. `proofs/stackpress-boilerplate/` is superseded historical framework evidence; do not scaffold from it.

Pin the Stackpress ecosystem to 0.10.8 and use Yarn with the matching `yarn.lock`. Independent libraries retain their own compatible versions. Read the [baseline README](../../proofs/app-shell/README.md) for current commands and the proof receipts for what was actually checked.

Complete CLI bootstrap configs for develop/build/production/preview/client, standard CLI commands for generation/development/build/serve, a root Idea composition file and responsibility-specific plugins. Install, generate, type-check, build and exercise runtime behavior; copying files is only the first phase. Do not inherit Commerce Orders-specific routes or acceptance tasks.

Before adding a feature, define its actor, responsibility, services, schema ownership, permissions and disabled behavior. Implement against those contracts and the app's accepted product/UI context.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Yarn, CLI scripts and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) — load when setting up package scripts, CLI configs or the root test aggregator in a new app.

- [Reviewed logic patterns](../references/00374-stackpress-lazy-registration-and-pattern-maintenance.md) — load before copying plugin scaffolds; requires lazy page/event boundaries and recurring-pattern updates.

- [Accepted agent guidance](../references/00378-stackpress-ownership-and-plugin-contracts.md) — load for roles, necessary files, exports and real manifest entrypoints.
