# Stackpress guideline coverage and provenance

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when tracing review IDs, source versions, explicit exclusions or the scope of evidence.

## Accepted scope and authority

On 2026-10-10 the user accepted the cleaned review except R78 and requested detailed agent guidance with reference chunking. There are **69 accepted entries**: 56 retained/refined and 13 additional entries. IDs remain stable; gaps are deliberate. This is a set of task-specific guidelines, not 69 universally mandatory API usages.

Current user decisions control the event/page boundary, optional helper choice, emit/resolve explanation, rare plugin-order troubleshooting and exclusions. Primary-source mechanisms support the examples. Derived application patterns (replacement, integration and compatibility plugins) are identified as such; sample observations support a reusable guideline without prescribing the sample’s domain names or workflows. The proofs are examples and bounded evidence, not the authority for generalized architecture.

## Coverage map

Each reference contains the complete explanations, examples, limitations and pinned source passages for its assigned entries. Source links establish provenance; ordinary use of the KB does not require an external checkout.

| Task reference | Stable review IDs |
| --- | --- |
| [Ownership and plugin contracts](00378-stackpress-ownership-and-plugin-contracts.md) | R01, R02, R03, R04, R05, R12 |
| [Lifecycle and service registration](00379-stackpress-lifecycle-and-service-registration.md) | R06, R07, R08, R09, R11, R52, R55 |
| [Pages, events and dispatch](00380-stackpress-pages-events-and-dispatch.md) | R13, R14, R15, R16, R17, R53, R54 |
| [Dispatch and response contracts](00391-stackpress-dispatch-and-response-contracts.md) | R18, R19 |
| [Views and browser contracts](00381-stackpress-views-and-browser-contracts.md) | R20, R21, R22, R23, R24, R25 |
| [Idea modeling and metadata](00382-stackpress-idea-modeling-and-metadata.md) | R26, R27, R28, R29 |
| [Generation and runtime reconnection](00383-stackpress-generation-and-runtime-reconnection.md) | R30, R31, R32, R33, R34 |
| [Configuration, CLI and population](00384-stackpress-configuration-cli-and-population.md) | R35, R36, R37, R38, R56 |
| [Database queries and transactions](00385-stackpress-database-queries-and-transactions.md) | R39, R79, R80, R81, R82 |
| [Auth and interface exposure](00386-stackpress-auth-and-interface-exposure.md) | R41, R42, R43, R44, R45, R46 |
| [Priority inputs, guards and replacements](00387-stackpress-priority-inputs-guards-and-replacements.md) | R69, R70, R71, R72 |
| [Priority routes and integrations](00388-stackpress-priority-routes-and-integrations.md) | R73, R74, R75, R76, R77 |
| [Workflow, verification and maintenance](00389-stackpress-workflow-verification-and-maintenance.md) | R40, R47, R48, R49, R50, R51, R60 |

## Explicit exclusions and corrections

| Finding | Disposition |
| --- | --- |
| R10 | Excluded by user: do not require helper/scripts extraction. Events may contain business logic directly or use helpers. |
| R57–R59 | Excluded from general guidelines: store-specific business workflows. |
| R61–R68 | Ignored by user: do not create an active anti-pattern catalog from these findings. |
| R78 | Removed by user: optional router grouping is outside the requested focus on agent guidelines. |
| R09, R16, R17, R19, R54 | Events own app business logic for all mediums; pages only adapt web requests/responses. The store’s page-level business filtering is evidence, superseded for future implementations by this boundary. |
| R18 | resolve wraps emit and can replace it. Shared instances remain mutable; omitted/plain inputs create temporary wrappers, not automatic deep copies. Native status response omits headers, session and view metadata. |
| R11, R52 | Higher priorities run first. Bootstrap order and equal-priority registration order may matter for rare lifecycle dependencies; troubleshoot the actual dependency rather than imposing one universal plugin list. |
| R39 | Transaction callback receives a Connection, not an Engine. Execute transaction-scoped queries and propagate failure for rollback. |

The earlier P01–P110 review mixed source rules, local policy, sample-specific observations and proof adaptations. It is superseded as active implementation guidance. Its complete original bodies remain in [historical ownership and handler review](00375-stackpress-ownership-handlers-and-generation-patterns.md), [historical data, views and sample review](00376-stackpress-data-views-security-and-sample-patterns.md) and [historical source dispositions](00377-stackpress-pattern-source-review.md). Retention does not reactivate excluded ideas. These are distinct review ID systems; do not claim a one-to-one P/R mapping.

## Source snapshots retained in authoritative repositories

The focused research fetched these pinned snapshots on 2026-10-10. Source code remains in its authoritative repositories; no upstream source tree was mirrored into KB resources. Retrieval counts describe inventory coverage, not exhaustive audit or ingestion.

| Repository | Commit | Retrieved files |
| --- | --- | ---: |
| [lib](https://github.com/stackpress/lib/tree/e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a) | `e2cc6b8cad77b5ad18be8a94e0d40e72e2f6183a` | 191 |
| [ingest](https://github.com/stackpress/ingest/tree/477ec47f8b5dafa5713b13f9c964d06c61c22938) | `477ec47f8b5dafa5713b13f9c964d06c61c22938` | 263 |
| [inquire](https://github.com/stackpress/inquire/tree/039a1b5f41500aa63286a9f9b34f4c7f71b990a0) | `039a1b5f41500aa63286a9f9b34f4c7f71b990a0` | 170 |
| [stackpress](https://github.com/stackpress/stackpress/tree/a71d683051ba8350fdd12d6b5a33f268fdcc285f) | `a71d683051ba8350fdd12d6b5a33f268fdcc285f` | 932 |
| [stackpress.github.io](https://github.com/stackpress/stackpress.github.io/tree/1f55c3dc97e555922b7e978fd43e485476926e84) | `1f55c3dc97e555922b7e978fd43e485476926e84` | 485 |

Focused reading covered the original thirteen Stackpress skill entrypoints and relevant references, upstream `.agents` runtime/architecture/config/extension contracts, documentation pages, blog scripts and the store template. The added foundation review covered lib queues/emitter/request/response, Ingest routing/import dispatch/plugin loading/HTTP lifecycle, Stackpress webhook/CORS/auth priority uses, and Inquire builders/Engine/driver/transaction contracts. The 2,041-file retrieval inventory does not imply every file was reviewed or every API validated.

The existing [full local documentation map](00207-stackpress-docs-catalog.md), [skill source map](00208-stackpress-skills-catalog.md) and [knowledge map](00209-stackpress-knowledge-catalog.md) retain the complete earlier source ingestion. New accepted references translate the relevant source contracts into self-contained agent guidance with precise pinned passages. Recheck the installed version before relying on an upstream-main contract.

## Evidence scope

The final research receipt at `2026-10-10T06:11:59.704Z`, using Node `v26.2.0`, recorded **27 passing isolated probes, zero failures**. Fresh source modules were transpiled with existing TypeScript tooling. No HTTP listener, real database or application proof was used. PG resources were mocked: sequencing and wrapper behavior were checked, not native database atomicity.

| Checked mechanism | What the probes established |
| --- | --- |
| Priorities | Descending before/core/after execution, awaiting async hooks, equal-priority registration order, cancellation versus undefined continuation, response fallback, replacement composition and integration observation. |
| Routes/lifecycle | Overlapping route priorities, re-applied named path captures and configuration priority overriding registration order. |
| Dispatch | emit shares req/res; resolve supplies temporary wrappers or shares passed instances; nested payloads are not deep-cloned; native outcome omits web metadata; results is native whereas json serializes. |
| Queries | Builder inspection does not execute; awaiting executes again each time; tagged SQL binds values; Engine.before can supply rows including []; PG placeholder formatting and row normalization. |
| Transactions | Connection callback, commit result, propagated rollback command sequencing with mocked PG resource. |
| Event families | Regex listeners join the ordered event chain. |

One of the 27 probes covered the now-excluded R78 API. Its prior success does not justify a guideline; the other accepted findings retain their independent evidence. Initial probe setup incorrectly used anonymous zero-argument actions (selected as import loaders), causing three failures; the corrected props-action setup yielded the final receipt. This was a research-harness correction, not a framework repair.

No claim is made here of production auth acceptance, delivery reliability, real transaction rollback, complete app functionality, every database dialect, build chunk performance, or MCP transport acceptance. For application claims, inspect fresh proof-owned receipts and run the appropriate affected checks.

## Reorganization and recovery

The accepted entries were inventoried into one complete draft before partitioning by agent task. All 69 entries have exactly one detailed owner in the coverage table; R78 has no active guideline or code example. Earlier KB bodies, imported source blocks and evidence were preserved, with current routing and explicit historical labels. Existing OfficePress route, data, Yarn, test-layout, identity and renderer policy remains owned by its prior contract references.

Future changes follow [recurring-pattern maintenance](00374-stackpress-lazy-registration-and-pattern-maintenance.md). Record a verified instruction, consequence, scope and authority; optional discoveries remain research unless accepted as useful agent guidance. KB editing does not authorize MCP index updates or persistent memory changes.
