# Stackpress lazy registration and recurring-pattern maintenance

Owner: [Logic patterns](../context/stackpress-logic-patterns.md). Load before
editing plugin entrypoints, route registration, event bindings or reusable skills.

## Accepted decision and placement

User direction, 2026-10-09: reinforce the prescribed plugin organization and lazy
route imports in the KB; update that knowledge whenever a recurring Stackpress
pattern is identified. This supersedes eager page-import examples in the proofs
and any illustrative imported examples. Historical source blocks and receipts
retain their original meaning and are not rewritten to imply compliance.

`plugin.ts` owns dependency checks and lifecycle wiring. HTTP actions belong in
`pages/`, app business actions in `events/`, browser entrypoints in
`views/`, reusable React bodies in `components/`, and real generators in
`transform/`. Pure domain services stay in their owner; do not create empty folders.

The 2026-10-10 accepted [agent guidelines](../context/stackpress-logic-patterns.md) refine this boundary: pages process web requests, call events and format web responses; events own all app business logic, whether implemented directly or with optional helpers. Load [dispatch contracts](00391-stackpress-dispatch-and-response-contracts.md) for emit/resolve reference semantics and [priority extensions](00387-stackpress-priority-inputs-guards-and-replacements.md) before adjusting another plugin’s capability.

## Required lazy boundary

```ts
// plugin.ts: required for authored OfficePress HTTP handlers
ctx.get("/api/about", () => import("./pages/read.js"));
ctx.post("/api/about/check", () => import("./pages/check.js"));
// Explicit ImportRouter registration is also supported.
ctx.import.get("/api/about", () => import("./pages/read.js"));
// Ingest event actions in external modules use the same boundary.
ctx.on("changed", () => import("./events/changed.js"));
// A rendered HTML route additionally binds a browser view.
ctx.view.get("/about", "@/plugins/about/views/read");
```

Do not statically import a page action and pass that binding to a route. Do not
replace it with an inline request action in `plugin.ts`. A literal dynamic import
keeps the module boundary visible for deferred loading and build chunk strategies.
This is a required source contract; successful bundling alone does not prove an
optimal chunk graph or measured performance benefit.

The installed `@stackpress/ingest` 0.10.8 Router recognizes an **anonymous,
zero-argument** function as an import callback. A named loader, an arrow that
accepts props, or a helper returning a named function can take the eager action
path instead. Prefer the inline `() => import("./pages/read.js")` form. Keep the
import path literal and visible at registration; avoid computed paths or wrappers
that hide it from tooling. The imported module must expose a default action.

## Historical proof adaptations, not starter instructions

The following choices were introduced while adapting existing proof code. Neither
is prescribed by the supplied skills, upstream knowledge or store example. The 2026-10-10 all-proof alignment removes these runtime adaptations from the maintained proofs. Other
apps should start with direct default page actions and named Stackpress events.
Passing tests establish bounded compatibility, not an upstream recommendation.

The earlier proof adaptation preserved some parameterized page factories lazily. This documents the compatibility choice; inspect current proof source before relying on it:

```ts
ctx.post("/api/templates/save", () => import("./pages/update.js")
  .then(module => ({ default: module.default("save") })));
```

ImportRouter awaits the callback, then calls its `default` action with props.
Return the namespace-like object above, not the factory or action alone. This
adapter was verified in historical receipts, not a promise that every future bundler
supports arbitrary promise rewrites. It was an agent-added compatibility choice,
not a recommended starter pattern. New handlers should default-export the action
and use the direct import registration above. Existing behavior is documented so
adopters can recognize the exception.

Type-only imports, configuration/service constructors, and browser-safe component
imports inside views remain valid. The earlier proof's custom
`workflows.subscribe(handler(service))` used an application-specific event bus,
not Stackpress named events. Its contract explains existing code; it is not
guidance to introduce another bus in new apps. Current runtime wiring resolves the named committed `officepress-workflow-transition` event; automations observes it at priority -100. A small `subscribe()` observer remains only for isolated service contracts. The source-prescribed reuse
boundary is a named event in `events/`, registered during listen and invoked with
`ctx.emit` or `ctx.resolve`. Small lifecycle guards and provider registration
may remain in `plugin.ts`.
Generation preprocessors must keep their required priority and timing; the auth
normalizer runs before the normal schema transform pipeline and is not replaced
by a late `transform/index.ts` emitter.

## Enforcement and regression

Run from the repository root after authored plugin changes:

```bash
node .agents/scripts/verify-stackpress-patterns.mjs
node --test .agents/scripts/tests/stackpress-patterns.test.mjs
```

The AST checker scans authored `plugin.ts` files in all four proofs, including their local action fixtures.
It rejects runtime page/view imports and re-exports, HTTP callbacks without an
inline zero-argument arrow returning the literal page import directly (no factory `.then()` adapters or wrapper bodies), and eager bindings of external Ingest
event actions. It allows type imports, eager providers and domain subscriptions.
It is a scoped source check, not a whole-program alias/data-flow or security audit;
renaming the server variable must not be used to bypass it. Dependencies and generated code are outside this guard's scope.

Regression fixtures exercise eager/default/namespace imports, re-exports, named
loaders, parameterized callbacks, hidden paths, inline handlers and rejected historical factory adapters. Runtime regression checks separately prove ImportRouter registration,
deferred callback execution and default action invocation. Then run the affected
proof's Yarn typecheck, build and HTTP/browser tests through devmetrics. Preserve
failed receipts and retain fresh successful evidence under that proof's
`tests/evidence/`; do not use old receipts to claim the new source passed.

## Maintain patterns when they recur

When implementation, review or failure reveals a reusable Stackpress pattern:

1. Inspect the installed contract and relevant specialist skill/source.
2. Classify it as a source prescription, observed framework behavior, OfficePress
   policy, agent-derived recommendation, proof adaptation, sample-only example,
   observed defect, version-dependent contract or unresolved proposal. Cite the
   exact passage for prescriptions. Proof code and passing tests cannot supply
   that authority. Teach source patterns first, then explain adaptations.
3. Record the correct form, mistake, consequence, owner, lifecycle, exceptions,
   provenance/version and verification in this catalog or its existing owner.
4. Link it from the handbook and affected topic; for a recurring mistake add a
   short entry in root AGENTS and the applicable local skill entrypoint.
5. Add a meaningful deterministic guard or regression when feasible, with valid
   exceptions tested. Update scaffolds/examples only when their contract changes.
6. Run all three KB validators. For authored plugin changes, also run the pattern guard, its regression and affected app checks; documentation-only maintenance does not require an application rerun.

This is standing authorization to maintain local KB guidance during related work.
It does not authorize changing unrelated product decisions, publishing upstream,
updating Codex memory, or rebuilding the MCP index. Unknown behavior stays clearly
unverified; investigate rather than promote a guess.

## Provenance

- Current user decision and installed Router/ImportRouter 0.10.8 were inspected on
  2026-10-09. Local runtime modules are under each proof's dependency installation.
- [Upstream lazy-page explanation](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/120-pages.md) — source retained in
  place; read when checking the lazy page/tooling boundary.
- [Store product registration](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/product/plugin.ts) —
  source retained in place; read for separate lazy page and view bindings.
- [Upstream ownership/lifecycle rules](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md)
  — source retained in place; read for contribution lanes and build/runtime boundaries.
- [Accepted coverage and source dispositions](00390-stackpress-guideline-coverage-and-provenance.md) — load for current IDs, pinned snapshots, exclusions and bounded research evidence.
- [Historical source review](00377-stackpress-pattern-source-review.md) — load only to recover earlier interpretations, version conflicts and proof adaptations.
