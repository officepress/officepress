# Stackpress data, view, security and sample patterns

> Historical review, superseded for implementation guidance on 2026-10-10. Use [current agent guidelines](../context/stackpress-logic-patterns.md) and [accepted coverage and dispositions](00390-stackpress-guideline-coverage-and-provenance.md). The original body below is retained for source recovery; excluded findings and old proof adaptations are not instructions for new apps.

Owner: [Logic patterns](../context/stackpress-logic-patterns.md). Load the relevant
section when implementing or reviewing its contracts.

These are mixed review findings, not a list of upstream prescriptions. Local
requirements are binding within OfficePress; observed runtime behavior does not
make an adaptation a prescribed design. Section source links do not attribute
every local addition to that source. See [source review and dispositions](00377-stackpress-pattern-source-review.md), especially the correction for examples 2, 4 and 7.

## Database and operational data

[Primary source](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/runtime-and-operations.md); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P49 — Connection wrapper ownership.** Wrap the native driver with the chosen Inquire adapter; store registers the engine and owns close/cleanup without domain logic.
- **P50 — One development target.** Use .build/database for normal PGlite development; create isolated scratch databases only for a concrete verification need and close before cleanup.
- **P51 — Explicit production database.** Use PostgreSQL in production; never silently select PGlite when production config or PostgreSQL is unavailable.
- **P52 — Inspect targets before commands.** Confirm bootstrap, adapter, database URL, revision/migration destinations and destructive authority before applying data commands.
- **P53 — Generated events before raw SQL.** Prefer generated model operations, then builders, then focused raw SQL where higher-level APIs cannot express the required behavior clearly.
- **P54 — Bind SQL inputs.** Use values/placeholders or tagged engine.sql; never concatenate untrusted input. Account for active dialect formatting and allowlist dynamic identifiers.
- **P55 — Constrain writes.** Use explicit row/tenant predicates, validate server input, check affected outcomes and prevent accidental whole-table updates/deletes.
- **P56 — JSON supports optional metadata.** Keep core status/security/filtering fields in columns; JSON selectors and containment need verification on the configured dialect.
- **P57 — Transaction ownership.** Group dependent writes on the same transaction/engine context. An event chain does not create an automatic transaction around its operations.
- **P58 — Side effects after commit.** Email, webhooks and payment effects do not roll back with SQL; design explicit after-commit/idempotency behavior when the workflow requires it.
- **P59 — Prove rollback.** Collected row errors must still cause rollback for an atomic batch; test failure state in the database instead of relying on row-level success labels.
- **P60 — Separate history from live state.** Idea intention, generated schema, revisions, migration SQL, applied database and population plan are distinct; revisions are not an applied-migration ledger.
- **P61 — Command data-loss semantics.** generate emits client/history; migrate emits SQL only; push can install/drop without sufficient history; install/purge/uninstall are destructive. Review diffs/rename warnings before application.
- **P62 — Repeatable population and cleanup.** Static rows belong in config database.populate; order prerequisites and choose rerun behavior. Population is sequential, not one promised transaction; preserve real data/history.

## Rendering and browser boundaries

[Primary source](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/interfaces-and-experience.md); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P63 — Predictable view exports.** A views entry exports default Page and Head when metadata/styles need it; Page mounts the shared layout and a smaller Body.
- **P64 — Hooks below providers.** Call server/language/theme/notifier/panel hooks in Body/children below the provider boundary, not in the component introducing it.
- **P65 — Prepared serializable props.** Use the existing shared view preparation contract, main results and render metadata intentionally; request/session/config browser snapshots are public serialized data.
- **P66 — No server secrets in snapshots.** Pass an explicit browser-safe contract, never full secret-bearing config, database/native objects, functions, cycles or unrelated private records.
- **P67 — Audience-specific data contracts.** Separate data/routes by caller audience when privacy differs; hiding a field in JSX cannot secure a shared serialized payload.
- **P68 — SSR and hydration agreement.** Keep server/client snapshots and markup consistent; test built rendering plus hydration and actual interactions, not only a bundle or screenshot.
- **P69 — Head and asset delivery.** Load configured styles/favicon/meta and verify reachable JS/CSS/static assets; visible file existence alone does not prove a rendered page received them.
- **P70 — Preserve the selected renderer.** OfficePress proofs use the custom Ingest/Reactus shell contract. Generic LayoutPanel/setViewProps examples explain boundaries but do not authorize a second renderer.
- **P71 — Host-owned browser routes.** Use existing host/Stackpress page routing and accepted path/query/fragment conventions; do not add a client router solely because views are React.
- **P72 — Accessibility needs behavior evidence.** Generated components do not guarantee labels, keyboard behavior, validation, relation selection or responsive usability; verify affected interactions.
- **P73 — Phrase-keyed language.** Use the existing r22n/language contract and deliberate source phrases; changed wording can change translation identity.
- **P74 — Safe browser exports and build paths.** Use type imports and narrow client entrypoints; source-mode development paths and built production client/page/asset paths must align with their own bootstrap.

## Identity and access surfaces

[Primary source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/600/640-csrf.md); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P75 — Delegate framework auth mechanisms.** Reuse installed credential/TOTP/session handlers; local adapters own product policy, version gaps and explicit authorization rather than duplicating cryptography.
- **P76 — Configured auth base and private seeds.** Use auth.base in registration/links/challenges; private seeds and scoped cookies are environment policy. Never copy example seeds into real deployments.
- **P77 — Verified current caller.** A session field or Authorization header existing is not proof of identity; resolve and verify the caller/roles/tenant before protected results or mutations.
- **P78 — Challenge expiry and replay.** Retain tested one-use/expiry challenge policy and authenticator-app TOTP boundaries; example auth menus cannot enable unavailable product capabilities.
- **P79 — CSRF before mutation.** Generate/submit the configured token name and validate before writes; exercise missing/tampered token failure. Registration of the CSRF plugin alone does not protect every POST.
- **P80 — Read-only GET and validated redirects.** Do not perform destructive mutations through GET; normalize/restrict redirect targets under the accepted product policy.
- **P81 — Fresh long-lived authorization.** Cache callers only per request, invalidate after credential/account changes, and revalidate at long-lived stream/agent-operation boundaries.
- **P82 — Explicit API exposure.** Map route/method to event and public/app/session classification plus scopes/data; route exposure and navigation are independent of capability availability.
- **P83 — MCP tools need backing contracts.** Tools require real registered events, validated input, caller/type/scope policy and correct outcome mapping; a transport connection alone proves none of those.
- **P84 — Separate surface policy.** HTTP, CLI, API, MCP and in-process events can share a capability but each needs explicit caller propagation, authorization, validation and error adaptation.
- **P85 — Transport lifecycle is owned.** Distinguish stdio/HTTP/SSE and configured activation; register generated tools before plugin-mode resolution and close streams/workers started for verification.
- **P86 — Redacted operational diagnostics.** Log only reviewed diagnostic data; sample query logging can expose credentials/personal data and does not establish a general audit/security policy.

## Workflow, sources and sample-store lessons

[Primary source](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/plugins/checkout/pages/index.ts); the [lazy registration contract](00374-stackpress-lazy-registration-and-pattern-maintenance.md) and existing OfficePress implementation contract govern local exceptions.

- **P87 — Purpose-driven sequencing.** Discover actual requirements and whether the deliverable is product, teaching proof or production baseline; do not infer its goal from a template name.
- **P88 — Use the narrow specialist.** Route to schema/scaffold/pages-events/views/generator/verification as needed; preserve local rules when skill examples conflict.
- **P89 — Fresh phase evidence.** Verify scaffold, schema, generation, registration, types and reachable behavior before claiming that phase completed; test missing/disabled/restored dependencies too.
- **P90 — Yarn and canonical configs.** Use Yarn/yarn.lock, config/develop and working applicable CLI scripts. Keep the accepted tests/bootstrap.ts helper and plugin-suite aggregator; remove redundant wrappers.
- **P91 — Managed listeners and evidence.** Use devmetrics for all listener-owning checks; retain receipts/reviews/verification/Playwright under each proof's tests/evidence and stop run-owned processes.
- **P92 — Version and authority separation.** Installed manifests/runtime define current proof behavior. Pinned upstream code/docs, historical planning and examples are distinct; no support promise follows from an adapter demo.
- **P93 — Recurring-pattern KB maintenance.** Record verified reusable corrections with owner, mistaken form, exceptions, provenance and enforcement; run KB validators. Local updates do not authorize MCP indexing.
- **P94 — Store sample architecture.** Product/cart/checkout/order own their own pages/views; app owns shared hooks and store connections. Reuse that composition pattern without importing store-domain behavior into OfficePress.
- **P95 — Active reads and guarded missing data.** Store listing/detail limit active products and return 404 when absent. Preserve domain filters and missing-result guards instead of falling back to a fabricated successful record.
- **P96 — Price snapshots and readback.** Store cart/order items snapshot unitPrice and aggregate totals; confirmation reads the created order. This demonstrates a workflow, not approved money precision, pricing or inventory policy.
- **P97 — Store identity/auth counterexamples.** The shared guest-session cart, email-only order history and guest-readable confirmation-by-id do not provide caller isolation. Require verified ownership; do not adopt them as authorization patterns.
- **P98 — Store checkout counterexamples.** Fixed signup password, unchecked event failures, non-atomic header/item writes, HTML-only quantity min and missing local CSRF validation are sample limitations. Real checkout needs explicit validation, transaction and security contracts.
- **P99 — Template completeness counterexamples.** Store package scripts reference absent config/preview and emit lacks the proofs' explicit bootstrap environment. Verify each script target instead of copying the template blindly; dev differs from the accepted blog workflow.
- **P100 — Tests match claims.** Sample structure/generated-type tests prove their limited assertions, not commerce/security completion. Owning framework-package coverage targets do not imply an app proof measured coverage or production deployment.


## Additional schema, tool and scaffold patterns

- **P101 — Typed values versus independent models.** Choose scalars, nullable fields, a named reusable type, Hash/Json or a model by the value's actual shape and independent lifecycle; do not turn every noun into a model. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/324-types.md).
- **P102 — Enum state compatibility.** Use enums for fixed state sets; keep defaults, UI options, filters and event comparisons aligned. Changing a stored enum value requires a data/compatibility decision. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/323-enums.md).
- **P103 — Reusable Idea props.** Use named prop objects for repeated component options; keep field-specific labels/assertions and exposure roles visible. Do not add unused/undefined props or one-off indirection. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/325-props.md).
- **P104 — Scalar relation UI and join identity.** Attach relation pickers/filters to the stored scalar foreign key, map the object through @relation, retain forward mappings for reverse arrays and use explicit composite IDs for join models. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/300/327-relations.md).
- **P105 — Admin browser helpers.** When using generated admin, consume browser-safe filter/order/paginate and CSV/batch helpers instead of importing pages or rebuilding their behavior. Match admin.base and inspect permission-aware rendering. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/700/743-admin-client.md).
- **P106 — Clean stdio protocol.** MCP stdio requires active config, registered transport events and a non-empty tool registry. Keep diagnostics out of protocol stdout; registry availability and transport connectivity are distinct checks. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/800/811-stdio-transport.md).
- **P107 — Planned Studio is not shipped behavior.** Studio/explorer/schema-editing lessons describe plans and wireframes in this snapshot; do not infer an installed package, command or finished capability from those pages. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/700/700-studio.md).
- **P108 — Source-preserving schema tools.** Schema editing/import tooling should preserve canonical Idea source and imported-file ownership, validate structured patches and avoid overwriting unrelated source; future Studio plans remain proposals. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/700/750-import-export.md).
- **P109 — Package exports and assets.** For framework/package contributions, verify intended code/types/schema/styles in packed contents and declared subpaths plus relevant standalone/aggregate and module-format imports; app examples do not prove package support. [Source](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/ecosystem-and-portability.md).
- **P110 — Scaffold boundary.** Scaffold a new app in an empty intended target, replace its placeholders and verify baseline files. Existing app upgrades require scoped edits that preserve local changes and product decisions. [Source](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/800/844-scaffold-skill.md).
