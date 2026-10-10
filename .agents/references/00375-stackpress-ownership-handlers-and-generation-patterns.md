# Stackpress ownership, handler and generation patterns

> Historical review, superseded for implementation guidance on 2026-10-10. Use [current agent guidelines](../context/stackpress-logic-patterns.md) and [accepted coverage and dispositions](00390-stackpress-guideline-coverage-and-provenance.md). The original body below is retained for source recovery; excluded findings and old proof adaptations are not instructions for new apps.

Owner: [Logic patterns](../context/stackpress-logic-patterns.md). Load the relevant
section when implementing or reviewing its contracts.

These are mixed review findings, not a list of upstream prescriptions. Local
requirements are binding within OfficePress; observed runtime behavior does not
make an adaptation a prescribed design. Section source links do not attribute
every local addition to that source. See [source review and dispositions](00377-stackpress-pattern-source-review.md), especially the correction for examples 2, 4 and 7.

## Ownership and lifecycle

[Primary source](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P01 — Ownership before folders.** Choose schema, generation, config, runtime, page/view or adapter by semantic owner; split a mixed feature across lanes.
- **P02 — Feature independence.** App owns shared rendering; store owns connections; domain plugins own workflows. Do not collect feature logic in app/store for convenience.
- **P03 — Wiring entrypoint.** Keep plugin.ts focused on dependency checks, lifecycle subscriptions and registration; extract request and substantial event bodies to their owners.
- **P04 — Needed folders only.** Use pages, events, views, components and transform by responsibility; add client/index/types/tests exports only when needed.
- **P05 — Explicit plugin loading.** Register active plugin entrypoints in package.json.plugins; a folder alone does not activate behavior.
- **P06 — Sequential bootstrap.** Set typed config, await bootstrap, then resolve config, listen and route in order; bootstrap alone does not resolve those phases.
- **P07 — Providers during config.** Create/register services and environment mechanisms in config, before dependent listeners/routes need them.
- **P08 — Listeners during listen.** Source prescription: register reusable operations and generated listeners during listen. Worker startup, navigation and custom bus subscriptions are application concerns, not a prescribed replacement for Stackpress events; idempotent startup/close is an operational recommendation.
- **P09 — Routes during route.** Expose request routes only after required capabilities are ready; bind each feature in its owning plugin.
- **P10 — Per-phase dependency guards (OfficePress policy).** A dependent plugin checks its own required providers before every registration phase; returning in config cannot cancel listen/route. The local ready helper implements this policy; the supplied reading does not prescribe that helper or its arguments.
- **P11 — Fail-closed boundaries.** Missing security/tenant providers suppress protected behavior; optional capabilities may use a documented fallback without disabling independent features.
- **P12 — Restart activation.** Enable/disable by configuration and restart; no live unload or automatic central dependency validator. Disabled features retain data until an explicit migration.
- **P13 — Public service contracts.** Share registered services and narrow client/types exports; do not import another plugin's private implementation to bypass its lifecycle.
- **P14 — Import direction.** Keep build-only transforms out of runtime imports and server-only modules out of browser entrypoints; shared safe helpers may be consumed inward.
- **P15 — Local helpers.** Keep specialized helpers near their owner; a broadly reusable public helper is valid, but a new shared abstraction needs actual reuse.
- **P16 — Order is a contract.** Preserve lifecycle priority, transform order and provider readiness; changing order can change behavior even with unchanged types.

## Routes, events and data surfaces

[Primary source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/130-events.md); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P17 — Lazy page modules.** Register HTTP actions with an inline literal () => import("./pages/read.js"); eager page imports lose the intended import boundary.
- **P18 — Explicit import router.** ctx.import.get/post/on is supported too; ctx.get/on selects it for an anonymous zero-argument callback in installed 0.10.8.
- **P19 — Loader signature.** Keep the implicit-router callback anonymous and zero-argument. Named or parameterized functions can select action routing.
- **P20 — Default action export.** Source pattern: default-export the page action and register a direct literal import. The namespace-like factory adapter in the proofs is an agent-added compatibility adaptation, not a supplied-source prescription; see the lazy-registration exception section.
- **P21 — Lazy reusable event actions.** Source pattern: register named events lazily during listen and invoke them through emit/resolve. The proof's workflows.subscribe callback is a separate custom application bus, not the documented Stackpress event pattern.
- **P22 — Page/view pairing.** A rendered route binds a pages handler and a views entry separately; JSON/stream endpoints do not need a React view.
- **P23 — Canonical action contract.** Source pattern: default-export an action accepting {req,res,ctx}. The skills favor stackpress aggregate imports where supported; the proofs' direct Ingest wrappers are a local type/import adaptation, not a requirement for other apps.
- **P24 — Read the right request surface.** req.data merges inputs; use req.post/query/headers/session when origin matters. Validate actual shapes, not just TypeScript annotations.
- **P25 — Share normalized input.** Write normalized values to req.data before downstream emits when those handlers read that surface; per-request defaults do not belong in global config.
- **P26 — Emit and resolve distinctly.** emit shares the supplied request/response; resolve returns a status-response outcome. Retain verified caller context when crossing an operation boundary.
- **P27 — Check actual outcomes.** Check expected status plus results/listener availability. Installed absent events can return code 0; non-throwing resolution or !error does not prove success.
- **P28 — Response surface discipline.** Use results for the payload, rows with total for collections, res.data for rendering metadata, res.session for next-request writes, and headers for HTTP metadata.
- **P29 — Return after redirect/error.** Keep redirect destinations explicit and constrained by local policy; return on redirect, authorization failure, invalid data and upstream errors.
- **P30 — One dispatch outcome.** Prepare one coherent body/result/view/error outcome; hooks must respect existing body, sent state and MIME/transport instead of overwriting a response.

## Idea and generation

[Primary source](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/modeling-and-generation.md); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P31 — Compose the root schema.** Compose small responsibility-owned Idea files from schema.idea; use package schemas instead of duplicating built-in identity models.
- **P32 — Built-ins before invention.** Use canonical supported types, attributes/assertions and component dictionaries; parser-valid unknown metadata does not imply Stackpress behavior.
- **P33 — Semantic ownership.** Idea owns syntax/composition; schema normalizes; SQL, view/admin and AI consumers interpret their own metadata. Trace a contract through its actual owner.
- **P34 — Explicit identity and relations.** Use @id/@unique and explicit local/foreign @relation wiring; model collections and @query selectors describe generated relation readback.
- **P35 — Intentional UI metadata.** Review field/filter/list/span/view roles independently for every non-relation field; omitted roles must be intentional, not accidental.
- **P36 — System fields stay non-editable.** Identifiers and lifecycle timestamps normally receive read-only presentation rather than editable form metadata.
- **P37 — Constraints versus widgets.** Defaults, assertions and database constraints own correctness; input min/max or display formatting alone cannot validate a server operation.
- **P38 — Idea hooks versus preprocessors.** Generation contributions register through idea; early schema normalization must precede consumers and must retain its tested priority.
- **P39 — Register transform entry.** A transform folder is not enough: idea must add the transform path to schema.plugin; transform/index.ts owns genuine generated output.
- **P40 — Schema-driven emission.** Use Schema.make, props.directory and ts-morph against the configured shared generation project; do not reparse/rebuild model output on every request.
- **P41 — Stable cooperative transforms.** Transforms share emitted files, so sequence and repeatability matter; avoid duplicate declarations/exports and test repeat generation.
- **P42 — Export the generated contract.** Emit intentional root/package exports and granular entrypoints; writing a generated file alone does not make it importable.
- **P43 — Executable generated client.** Generated output includes runtime listeners/stores/pages/tools, not just types; generation, package compilation, database changes and view build are separate.
- **P44 — Nullable client loading.** Allow pre-generation setup through client(true); a nullable result is expected, but a dependent capability must still verify its required model/export.
- **P45 — Register generated listeners in listen.** Reconnect runtime through the client provider; verify generated model.listen in config when needed and actual listener readiness before routes/workers.
- **P46 — Owner-specific stale cleanup.** Do not assume all generators prune renamed/deleted artifacts. Verify promised cleanup or regenerate a safely isolated generated destination.
- **P47 — Fix authored source.** Change schema, transforms, config or source views rather than using generated output as the durable implementation owner.
- **P48 — Component and phrase compatibility.** Dictionary fixed props override Idea-provided same-name props upstream; generated phrases become translation keys. Verify version-sensitive metadata and wording changes.
