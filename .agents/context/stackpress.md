# OfficePress Stackpress handbook

Every OfficePress app uses Stackpress. The accepted ecosystem baseline is **0.10.8**. Per the 2026-10-10 user decision, scaffold new apps from the maintained local `proofs/app-shell/` (Yarn + Stackpress CLI), adapting its shared mechanics to each app's product scope. Apps needing workflows/automations (kanban), form builder or message templates use `proofs/common-components/` as the feature reference. The earlier `proofs/stackpress-boilerplate/` remains historical framework proof evidence, superseded as the scaffold source.

Plugins separate responsibilities. They may be disabled after a restart. Each dependent plugin checks its own services in `plugin.ts`, then falls back or returns before registering its feature listeners/routes. There is no automatic dependency validation or live unloading.

After a custom-app implementation first passes functional verification, automatically run the [post-verification audit and refactor cycle](../references/00392-stackpress-post-verification-audit-cycle.md). Apply ChrisAI Coding's applicable logic, responsibility and language-style passes, including the accepted comment/JSDoc/naming conventions, then verify the final source. Repeat scoped fixes when findings remain before claiming completion.

PostgreSQL is the production default; PGlite in `.build/database/` is the disposable development substitute — [Data and generation](stackpress-data-and-generation.md) owns the full database, fixture and compatibility policy. Keep Idea files small and compose them from a root schema. Smaller files are the user's authoring/performance recommendation, not a proven incremental compiler feature.

## Route creation defaults

Unless the user specifies otherwise, browser page paths follow `/[dashboard?]/[model]/[action]/[unique?]`. The optional `dashboard` segment identifies pages for a specific set of users. Use the model name in lowercase dash format for `model`. Typical actions are `search`, `create`, `detail`, `update`, `remove`, `import` and `export`; a custom action is also valid. The optional `unique` segment is usually a row ID but may be another unique value.

Examples: `/profile/search`, `/profile/create`, `/profile/detail/abc123`, `/admin/profile/update/abc123`.

Use the path to load a page, a `?` query string for variations of that page, and a `#` fragment to navigate within the existing page. For a detail page, `/admin/profile/detail/abc123` is correct; `/admin/profile?id=abc123` and `/admin/profile#page-abc123` are not detail-page routes.

API paths use these method and path pairs by default:

| Method and path | Behavior |
| --- | --- |
| `GET /api/v1/[model]` | Return a list of the model. |
| `POST /api/v1/[model]` | Create a model record. |
| `PUT /api/v1/[model]` | Import many model records. |
| `GET /api/v1/[model]/[unique]` | Return one model record. |
| `PUT /api/v1/[model]/[unique]` | Update one model record. |
| `DELETE /api/v1/[model]/[unique]` | Remove one model record. |

The browser page pattern applies only to browser page paths; API paths use the separate pattern above.

## Task routes

- [Scaffolding](stackpress-scaffolding.md) — load to create or upgrade an app baseline.
- [Plugin architecture](stackpress-plugin-architecture.md) — load to choose responsibilities, dependencies and disabled states.
- [Configuration](stackpress-configuration.md) — load for lifecycle, environment, service and rendering configuration.
- [Data and generation](stackpress-data-and-generation.md) — load for Idea composition, adapters, migrations and generated behavior.
- [Views](stackpress-views.md) — load to implement OfficePress UI using Reactus/React.
- [Verification](stackpress-verification.md) — load when planning checks and before claiming scaffold or feature completion; includes the required post-verification audit/refactor/style cycle and final-source evidence.

## Complete deferred knowledge

- [OfficePress implementation contract](../references/00205-stackpress-officepress-contract.md) — load before technical work; covers all current decisions, edge cases and supersession.
- [Framework documentation map](../references/00207-stackpress-docs-catalog.md) — choose complete API, configuration, CLI, Idea, SQL, session or rendering documentation for the active task.
- [Skill guidance map](../references/00208-stackpress-skills-catalog.md) — choose complete scaffold, authoring, handler, view, generator, composition or verification guidance.
- [Framework knowledge map](../references/00209-stackpress-knowledge-catalog.md) — choose deeper architecture, runtime, portability and contract explanations.

The references contain the complete imported text locally. Imported generic examples are subordinate to the OfficePress contract. External paths and URLs inside source blocks establish provenance; they are not required dependencies for KB retrieval.

- [Yarn, CLI scripts and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) — load when changing package scripts, config/bootstrap paths, plugin test aggregation or proof evidence; the accepted 2026-10-08 conventions.

- [Agent guidelines](stackpress-logic-patterns.md) — load before implementation/refactoring; routes the 69 accepted guidelines into detailed task references, covering ownership, events/pages, priorities, generation, data, interfaces and verification.
