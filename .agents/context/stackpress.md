# OfficePress Stackpress handbook

Every OfficePress app uses Stackpress. The accepted ecosystem baseline is **0.10.8**. Start from the maintained local `proofs/stackpress-boilerplate/`, adapting its shared mechanics to each app's product scope.

Plugins separate responsibilities. They may be disabled after a restart. Each dependent plugin checks its own services in `plugin.ts`, then falls back or returns before registering its feature listeners/routes. There is no automatic dependency validation or live unloading.

PostgreSQL is the production default; PGlite serves development and proofs. Keep Idea files small and compose them from a root schema. Smaller files are the user's authoring/performance recommendation, not a proven incremental compiler feature.

## Task routes

- [Scaffolding](stackpress-scaffolding.md) — load to create or upgrade an app baseline.
- [Plugin architecture](stackpress-plugin-architecture.md) — load to choose responsibilities, dependencies and disabled states.
- [Configuration](stackpress-configuration.md) — load for lifecycle, environment, service and rendering configuration.
- [Data and generation](stackpress-data-and-generation.md) — load for Idea composition, adapters, migrations and generated behavior.
- [Views](stackpress-views.md) — load to implement OfficePress UI using Reactus/React.
- [Verification](stackpress-verification.md) — load before claiming scaffold or feature completion.

## Complete deferred knowledge

- [OfficePress implementation contract](../references/00205-stackpress-officepress-contract.md) — load before technical work; covers all current decisions, edge cases and supersession.
- [Framework documentation map](../references/00207-stackpress-docs-catalog.md) — choose complete API, configuration, CLI, Idea, SQL, session or rendering documentation for the active task.
- [Skill guidance map](../references/00208-stackpress-skills-catalog.md) — choose complete scaffold, authoring, handler, view, generator, composition or verification guidance.
- [Framework knowledge map](../references/00209-stackpress-knowledge-catalog.md) — choose deeper architecture, runtime, portability and contract explanations.

The references contain the complete imported text locally. Imported generic examples are subordinate to the OfficePress contract. External paths and URLs inside source blocks establish provenance; they are not required dependencies for KB retrieval.
