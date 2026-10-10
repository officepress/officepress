# Stackpress agent guidelines

Use this document before implementing or refactoring Stackpress plugins. Choose the reference below that addresses your implementation decision or problem. These guidelines describe reusable custom-app structure; OfficePress-specific defaults and existing proof adaptations remain separately identified. Review identifiers and acceptance history live in the coverage and provenance reference.

## Apply these boundaries first

- Choose ownership before files: Idea for domain declarations, transforms for repeated schema-derived output, config for environment/static policy, events for app business logic, pages for web request/response work, views/components for browser presentation.
- Keep `plugin.ts` focused on lifecycle registration and dependency checks. Only this entrypoint is required; create other files/folders when they have work to own. Share deliberate service/event/type/client contracts instead of another plugin’s private implementation.
- Events contain business rules and operations, including business validation, selection, authorization and outcomes. Pages process web input, call events and format web output. This applies even with one current caller; helpers inside an event are optional. Reuse the event from web, API, CLI and other mediums.
- Register page modules with a visible literal `ctx.get(path, () => import("./pages/read.js"))` or `ctx.import.get`. External event actions use the same lazy boundary. Default-export the normal `{ req, res, ctx }` action and bind HTML views separately. Keep server dependencies outside browser imports.
- Initialize sequentially: config → server creation → plugin bootstrap → `config` → `listen` → `route`. Providers belong in config, business/generated listeners in listen, web routes in route, generators in idea. Bootstrap loads plugins; it does not resolve these phases.
- Use priorities to extend another plugin without editing it. Higher runs first, default is 0, lower runs later; each listener is awaited. `false` cancels all remaining listeners. Before-hooks normalize/guard; after-hooks enrich/observe. Separate integration or compatibility plugins can be added/removed at restart.
- Use `emit` for an intentional shared req/res handoff; use `resolve` for omitted/temporary input and a native status-response outcome. `resolve` also accepts shared instances and can replace `emit`; neither form is mandatory. Plain payloads do not deep-clone nested values.
- Keep generation, runtime reconnection, rendering builds and database changes distinct. Verify the actual capability and affected medium with fresh evidence; a bundle or TypeScript pass establishes only its checked scope.
- After functional verification, automatically audit/refactor the scoped implementation with ChrisAI Coding for logic complexity, responsibility, comments/JSDoc, naming and every applicable language-style group. Reverify final source and repeat when actionable findings remain; the first passing check is not the completion gate.

## Load the detail for your task

- [Ownership and plugin contracts](../references/00378-stackpress-ownership-and-plugin-contracts.md) — load when deciding which plugin or file should own a feature. Explains implementation lanes, necessary folders, browser/server exports, manifest registration and public contracts between plugins.
- [Lifecycle and service registration](../references/00379-stackpress-lifecycle-and-service-registration.md) — load when registering services/events or troubleshooting startup dependencies. Explains bootstrap versus initialization, config/listen/route placement, priority ordering and when plugin registration order can matter.
- [Pages, events and dispatch](../references/00380-stackpress-pages-events-and-dispatch.md) — load when writing a web handler or reusable business operation. Shows literal lazy imports, default actions, web input adaptation and business-event delegation, including how to compose generated data events.
- [Dispatch and response contracts](../references/00391-stackpress-dispatch-and-response-contracts.md) — load when deciding whether an event should mutate existing req/res or return a native outcome. Explains emit/resolve, temporary payloads, nested mutation and the distinct roles of results, rows, metadata, sessions and redirects.
- [Views and browser contracts](../references/00381-stackpress-views-and-browser-contracts.md) — load when building a rendered page or diagnosing provider/prop problems. Shows separate page/view bindings, shared props, hooks below providers, layout selection, Head assets and safe browser serialization.
- [Idea modeling and metadata](../references/00382-stackpress-idea-modeling-and-metadata.md) — load when adding models, relations, validation or generated UI fields. Explains built-in schema composition, supported metadata, scalar foreign keys versus relation objects and independent field display/editing roles.
- [Generation and runtime reconnection](../references/00383-stackpress-generation-and-runtime-reconnection.md) — load when implementing a generator or diagnosing missing/stale generated capabilities. Explains when generation is justified, supplied schema/output props, cooperative transforms, package exports and runtime listener reconnection.
- [Configuration, CLI and population](../references/00384-stackpress-configuration-cli-and-population.md) — load when changing command bootstraps, config targets or seed data. Explains command-specific configuration, CLI event dispatch, config-owned population and the separation of generation, builds and database mutation.
- [Database queries and transactions](../references/00385-stackpress-database-queries-and-transactions.md) — load when writing business queries or grouping dependent writes. Shows bound values, transaction-scoped Connection callbacks, rollback propagation, builder inspection/execution, query hooks and native driver boundaries.
- [Auth and interface exposure](../references/00386-stackpress-auth-and-interface-exposure.md) — load when adding protected web actions, email delivery, API endpoints or MCP tools. Explains built-in auth reuse, identity versus permission, CSRF checks, delivery ownership and caller/protocol adaptation around business events.
- [Priority inputs, guards and replacements](../references/00387-stackpress-priority-inputs-guards-and-replacements.md) — load when adjusting another plugin’s business behavior without editing it. Shows higher-priority normalization and cancellation, lower-priority result enrichment and replacement handlers, including which remaining listeners cancellation skips.
- [Priority routes and integrations](../references/00388-stackpress-priority-routes-and-integrations.md) — load when adding web hooks, third-party integrations or compatibility plugins. Explains route parameter resets, awaited post-event delivery, input/result adaptation, HTTP versus business hook scope and deliberate event-family matching.
- [Workflow, verification and maintenance](../references/00389-stackpress-workflow-verification-and-maintenance.md) — load when selecting an implementation workflow or deciding what a completion claim requires. Explains discovery/scaffold boundaries, phase-specific checks, runtime evidence, framework versus app test scope and source-backed KB maintenance.
- [Post-verification audit and refactor cycle](../references/00392-stackpress-post-verification-audit-cycle.md) — load after custom-app behavior works and before closeout. Defines the automatic scoped audit/fix/style/reverification loop, applicable ChrisAI Coding passes, complexity/ownership review and final-source evidence.
- [Human-maintainable documentation and style](../references/00393-stackpress-human-maintainable-code-style.md) — load for the final code-style pass. Shows local/section comments, module-level-only JSDoc, meaningful names, framework-name exceptions and the complete applicable language-style checklist.
- [Accepted coverage, provenance and exclusions](../references/00390-stackpress-guideline-coverage-and-provenance.md) — load when auditing a guideline’s authority or reconciling it with older research. Contains the review-ID map, pinned source versions, accepted corrections, excluded findings and limits of the research probes.
- [Lazy registration and recurring-pattern maintenance](../references/00374-stackpress-lazy-registration-and-pattern-maintenance.md) — load for enforcement, documented proof exceptions and the procedure for recording future verified corrections.

## OfficePress policy and proof scope

Use the [handbook](stackpress.md) and [implementation contract](../references/00205-stackpress-officepress-contract.md) for the accepted 0.10.8 baseline, route naming, feature dependency checks, restart activation, PostgreSQL production/PGlite development policy and selected custom renderer. Framework examples using aggregate layouts do not add another renderer to an existing app.

[Yarn, CLI and proof layout](../references/00373-stackpress-yarn-cli-and-proof-layout.md) owns the local scripts, `config/develop.ts`, `tests/bootstrap.ts`, plugin suite aggregation and proof-relative `tests/evidence/{playwright,verification,receipts,reviews}/` paths. Yarn is a user-selected project convention; proof guards and app-specific names are not universal framework requirements.

[Concrete proof integration](../references/00357-stackpress-tested-plugin-pattern.md) documents installed-version adapters and bounded evidence. The [historical research](../references/00377-stackpress-pattern-source-review.md) preserves the earlier mixed P catalog and challenged examples for recovery only. Historical examples do not override the current guidelines. Do not promote store-specific workflows, excluded anti-patterns or optional API nuggets back into agent instructions.

For authored app-shell/common-components plugin changes, run the source guard and its regression suite, followed by affected Yarn checks:

```sh
node .agents/scripts/verify-stackpress-patterns.mjs
node --test .agents/scripts/tests/stackpress-patterns.test.mjs
```

For documentation-only changes, run the three KB validators and check routing/coverage. Application and browser reruns need an implementation reason. Continue recording verified recurring mistakes through the maintenance reference. MCP indexing requires a separate explicit user request.
