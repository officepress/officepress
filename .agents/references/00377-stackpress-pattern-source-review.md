# Stackpress logic-pattern source review and dispositions

> Historical review, superseded for implementation guidance on 2026-10-10. Use [current agent guidelines](../context/stackpress-logic-patterns.md) and [accepted coverage and dispositions](00390-stackpress-guideline-coverage-and-provenance.md). The original body below is retained for source recovery; excluded findings and old proof adaptations are not instructions for new apps.

Owner: [Logic patterns](../context/stackpress-logic-patterns.md). Load when checking
provenance, version differences, sample counterexamples or the review's scope.

## Review identity and scope

Requested by the user on 2026-10-09: reinforce plugin refactoring and lazy route
imports, review the Stackpress skills/upstream knowledge/docs/store example, keep
recurring patterns in the KB, and list the logic patterns found. The result is a
scoped pattern catalog, not a replacement ingestion of every upstream document.

The **110 review findings** (source rules, local policies, observations and
adaptations, not 110 upstream prescriptions) are P01-P48 in
[ownership, handlers and generation](00375-stackpress-ownership-handlers-and-generation-patterns.md)
and P49-P110 in
[data, views, security, workflow and sample lessons](00376-stackpress-data-views-security-and-sample-patterns.md).
The [lazy-registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md)
contains executable examples, exceptions, enforcement and ongoing maintenance.

Source retained in place, retrieved at these exact commits:

- [`stackpress/stackpress` knowledge tree](https://github.com/stackpress/stackpress/tree/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents), commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`.
- [`stackpress/stackpress` store template](https://github.com/stackpress/stackpress/tree/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store), same commit.
- [`stackpress/stackpress.github.io` content](https://github.com/stackpress/stackpress.github.io/tree/1f55c3dc97e555922b7e978fd43e485476926e84/content), commit `1f55c3dc97e555922b7e978fd43e485476926e84`.
- Installed local Stackpress skill entrypoints under `.agents/skills/`, and the
  proofs' pinned package manifests/runtime/router implementations at 0.10.8.

GitHub directory rendering was restricted, so the review used public GitHub API
commit/tree metadata and pinned raw text. Both recursive source trees were
untruncated. The deterministic
[source inventory](../scripts/stackpress-pattern-source-inventory.json) records
all 345 requested-tree blobs, Git blob IDs, readable-content SHA-256 and scope
labels plus all 13 installed Stackpress skill entrypoint hashes. That inventory
is provenance/check data, not another source-of-truth or a source-code archive.
No upstream source trees were mirrored into `.agents/resources/`.

## Source families and review depth

| Family | Inventory and disposition |
| --- | --- |
| Upstream `.agents/context` | Nine files: identity/principles, architecture/composition, runtime/operations, modeling/generation, interfaces/experience, ecosystem/portability, extension/contribution, compatibility/maintenance and index. Active contracts guided ownership, timing and evidence labels. |
| Upstream `.agents/references` | Eighteen detailed contract catalogs; relevant runtime, config, CLI/plugin, SQL/schema, view/session, exports and contributor material support the topical review. Their complete archived predecessors remain reachable from the existing local knowledge catalog. |
| Upstream `.agents/specs` | 96 blobs inventoried as planning/evidence. Studio and other historical specs are not runtime commands or accepted OfficePress product contracts. No claim that all historical spec text was re-audited. |
| Upstream workspace/tooling | AGENTS, TERMS, eleven workflows, a resource and a validator were inventoried as upstream operating/process context, not commands with local authority. |
| Store template | 37 blobs: 36 readable source/config/schema/test/style files and one binary image. Reviewed plugin registration, infrastructure ownership, page/event delegation, view boundaries, schema metadata, configs/scripts and limited tests. Assets do not establish logic. |
| Docs content | 170 readable files inventoried. Topical review covered develop/plugins/pages/events/hooks, data/query/transactions/JSON, Idea authoring/generation, build/deploy/config/structure, auth/session/CSRF/API, generated admin, AI/tools/skills and runtime reference contracts. Studio lessons retain their explicit future-facing status. This is a pattern review, not a claim of complete fresh ingestion or validation of every API example. |
| Local skills | All thirteen Stackpress SKILL.md entrypoints re-reviewed; scaffold, generator, workflow and view references loaded by relevance. Existing portable assets already illustrate lazy imports. Six entrypoints now have an explicitly marked OfficePress local overlay. |
| Installed proof runtime | Router/ImportRouter dispatch inspected; the native deferred-loading/default-action contract exercised without a listener; proof HTTP/browser suites check the changed bindings. No chunk-size/performance benchmark was run. |

## Version and authority intersections

### Correction: examples 2, 4 and 7

User clarification, 2026-10-09: both KB and proofs are reference points for other
apps with different custom modules. Understand the supplied source independently
before evaluating the proofs. This supersedes the earlier presentation that
made local adaptations appear to be supplied-source Stackpress prescriptions.

These numbers refer to the preceding chat examples. The temporary export used
numbers 2, 5 and 13 for the same examples.

| Chat example | Actual authority and disposition |
| --- | --- |
| 2: config service setup and repeated ready guards | Upstream **Lifecycle Placement** assigns services to config and requests to route; the store connection plugin demonstrates config registration. The scaffold skill's **Config Lifecycle** agrees. Per-phase dependency guards are OfficePress policy; ready(ctx, true) is a local helper. Neither source prescribes that helper signature. |
| 4: import(...).then(module => ({default: module.default(operation)})) | Agent-added compatibility adaptation for existing parameterized proof handlers. No prescription for it was found in the reviewed supplied material. Passing loading tests establish compatibility, not preferred architecture or a build-chunk guarantee. New handlers use direct imports of default actions. |
| 7: workflows.subscribe(workflowTransition(service)) | Application-specific proof event bus and callback factory. No prescription for it was found in the reviewed supplied material. The source recommends named reusable Stackpress events registered during listen, with emit/resolve calls; do not teach this custom bus as that pattern. |

Exact sources: [ownership and lifecycle](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md#lifecycle-placement),
[store connection plugin](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/store/plugin.ts),
[installed scaffold reference](../skills/stackpress-plugin-scaffold/references/plugin-scaffold.md#config-lifecycle),
[store direct page registration](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/product/plugin.ts),
and [Events sections 130.2, 130.4 and 130.5](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/100/130-events.md).
This provenance correction changes guidance, not existing runtime behavior.

### Source-prescribed custom-module boundary

Illustration adapted from the lifecycle and event sources above; catalog names
are placeholders for a new app's own capability, not imports from either proof.
The modules default-export normal actions. Add the application's own provider,
validation, authorization and response contract according to its requirements.

```ts
// plugins/catalog/plugin.ts: lifecycle registration excerpt
server.on("listen", ({ ctx }) => {
  ctx.import.on("catalog-search", () => import("./events/search.js"));
});
server.on("route", ({ ctx }) => {
  ctx.import.post("/catalog/search", () => import("./pages/search.js"));
});
```

```ts
// plugins/catalog/pages/search.ts: request preparation and handoff excerpt
import { action } from "stackpress/server";

export default action(async ({ req, res, ctx }) => {
  req.data.set("query", req.post("query"));
  await ctx.emit("catalog-search", req, res);
  if (res.code !== 200) return;
  // Apply this page's own rendering/redirect contract when needed.
});
```

The events/search.ts action owns reusable business behavior and status/results.
Pure mechanisms may live in scripts/search.ts; the source's reusable-operation
lane distinguishes that mechanism from the event request/response adapter.
Other routes, plugins or CLI callers can invoke the same named event. HTML routes
also bind their selected views independently. No factory namespace or additional
application event bus is needed to demonstrate this prescribed structure.

### Existing version and project dispositions

1. Current user decisions and accepted OfficePress 0.10.8 rules govern this repo.
   Upstream main can move; pinned commits establish what this review saw.
2. Some upstream knowledge references still describe consumed foundation 0.10.7,
   while the store manifest and local proofs use 0.10.8. Do not collapse those
   into one version claim. Check installed contracts for version-sensitive use.
3. Upstream runtime documentation describes missing-event NOT_FOUND behavior;
   the installed proof contract can return code 0 for an absent event. Local
   callers must check expected status/results and actual listener readiness.
4. Generic handler/view skills favor aggregate `stackpress` exports and layouts;
   local proof types and the sole custom Ingest/Reactus renderer remain canonical.
5. Some docs permit short inline route/event examples. The current user requires
   authored OfficePress HTTP actions in lazy page modules; external Ingest event
   actions are lazy too. Inline startup wiring and domain callbacks remain valid.
6. Store dev uses serve directly, and preview points at an absent config/preview.
   The accepted blog-script adaptations, config/develop, explicit emit bootstrap,
   Yarn lockfile, tests/bootstrap.ts and evidence layout remain the local policy.
7. Upstream package contribution guidance calls for above-90-percent coverage for
   changed framework packages. It does not prove such coverage here; this work
   changes app proofs/local tooling and reports the checks actually run.
8. Source revision history and generated output do not establish deployment,
   database migration state, cross-adapter support or product completion.

## Store sample patterns and limits

The example's useful composition is app/store infrastructure separated from
product/cart/checkout/order, with literal lazy handlers plus separate view
bindings, typed generated events/results, relation metadata and config-driven
static sample data. It demonstrates active product filtering, guarded missing
records, item price snapshots, aggregate totals and post-submit readback.

Do not promote these observed shortcuts into reusable OfficePress logic:

- Cart and checkout fall back to one shared `guest-session` identifier.
- Order history looks up a caller-supplied email; confirmation reads an ID without
  a local caller-ownership check, while sample access lists include guest routes.
- Checkout signup supplies a fixed sample password, and its result is not checked
  before the order flow continues. It does not prove the purchaser is signed in.
- Checkout creates an order header and items sequentially without a transaction,
  checked intermediate status, a reviewed inventory/payment contract or explicit
  retry/idempotency behavior. The sample does not clear its cart on success.
- Form input `min=1` is browser-only; page quantity parsing does not establish
  server-side positive-integer bounds. Missing product lookup can become price 0.
- Local cart/checkout handlers and rendered forms do not show CSRF validation;
  enabling the framework plugin does not automatically protect those actions.
- Float prices and multiplication do not establish accepted currency precision,
  revalidation or rounding policy.
- Default example seeds, SMTP settings, broad API/guest access and raw query logs
  are illustrative configuration; private environment and access policy prevail.
- Tests assert selected plugin strings and generated type exports. They do not
  establish checkout authorization, isolation, concurrency or rollback behavior.

These are observations/inferred requirements from the inspected sample, not
claims that a separate production commerce system was tested or fixed.

## Local reinforcement and evidence

The handbook, topic index, plugin architecture, verification and knowledge
maintenance route to the complete catalog. Root AGENTS requires lazy boundaries,
pattern maintenance and the source guard. Local router/scaffold/pages-events/views/
app-scaffold/verification skill entrypoints carry the same prominent rule; their
original imported reference blocks remain intact as historical source material.

Both proofs' authored page registrations and external Ingest event bindings now
use native lazy callbacks. Existing factories retain their arguments through
namespace adapters, and a custom workflow subscription remains. These are
explicit proof-specific adaptations, not recommendations for other apps.
Config providers, security guards, generation priority and view bindings retain
their responsibilities; the repeated guard helper is OfficePress policy/code.

Fresh bounded evidence lives in each proof's
`tests/evidence/verification/lazy-registration-and-kb-patterns.md`. Load those
reports when assessing the runtime checks; historical refactor receipts alone
cannot prove the corrected lazy-import source.
