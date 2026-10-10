# Stackpress plugin architecture

Choose plugins by independently owned capabilities and disablement behavior. The app shell owns shared transport/rendering; store owns connection registration and guarded Stackpress SQL integration. Do not keep a separate `data` plugin solely for that SQL bridge. Put authentication in `plugins/auth`, and group Theme, About and Shell under `plugins/settings/`. Keep proof-only action examples under root `.fixtures/actions`. Feature plugins own domain workflows and their corresponding handlers/views. Shared services are explicit public contracts, not imports into another plugin's private implementation.

The app-shell and common-components auth plugins delegate credential/TOTP verification and token creation to installed Stackpress handlers. Keep local identity policy and version-specific guards explicit. Cache a verified caller only within one request, invalidate after account/credential mutations, and reload on each new request. Auth consumes the public `app-data` contract for purge; the app owns its reviewed table map and availability checks. Use configured `auth.base` consistently for routes, challenge matching and auth-page links. [Identity integration patterns](../references/00357-stackpress-tested-plugin-pattern.md#identity-integration-and-app-data-ownership) records the service boundaries, retained adapters and regression scope; load it before modifying these proof plugins.

These dependency and activation rules are accepted OfficePress policy. The supplied Stackpress sources prescribe config/listen/route placement; they do not prescribe a ready helper signature or an additional application event bus. Teach those source patterns first when using this KB and the proofs for other apps with custom modules.

Configure selected modules at startup and restart to change them. A provider registers services during `config`. A dependent plugin checks required services inside its own `plugin.ts` lifecycle callbacks before it registers listeners, routes, workers or navigation. A missing service leads to a documented fallback or no feature registration. Repeat the guard for every registration phase; returning from one lifecycle callback cannot disable another.

Register HTTP page actions using inline literal `() => import("./pages/read.js")` callbacks (or explicit `ctx.import`); bind views separately. External Ingest event actions use lazy callbacks too. Do not statically import page actions, hide their import paths or inline request bodies in `plugin.ts`. Type-only imports and config providers remain valid.

Use the Stackpress AI plugin shape in both proofs: `plugin.ts` owns lifecycle wiring and dependency checks; `pages/` owns HTTP handlers; `events/` owns all app business logic as reusable named server actions; `views/` owns browser entrypoints; `components/` owns React bodies and shared layouts. Add `transform/` only for real generation logic, and `client.ts`, `index.ts`, `types.ts` and plugin-local `tests/` only as needed. Pages process web requests, call events and format web responses; keep business rules in events even with one current caller. Events may implement logic directly or use responsibility-owned helpers. The shell supplies shared page preparation and a browser-safe frame contract; common-component features contribute their own view entrypoints through navigation metadata. [Proof plugin organization](../references/00357-stackpress-tested-plugin-pattern.md#proof-plugin-organization) records concrete paths, generated-model timing and verification; load it when refactoring or copying these plugins.

Do not add a central dependency graph validator or live-unload system. Preserve independent features when optional capabilities are absent. Authentication and tenant boundaries fail closed. Runtime disablement preserves stored data and schema; schema removal requires an explicit migration.

Keep optional enhancements separate where they can disappear without breaking the primary capability. Test absent providers, explicit disablement and restored services after restart, including negative route/listener assertions.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested guards and composed Idea examples](../references/00357-stackpress-tested-plugin-pattern.md) — load for executable 0.10.8 patterns, framework SQL integration timing and internal event absence.

- [Lazy registration and recurring-pattern rules](../references/00374-stackpress-lazy-registration-and-pattern-maintenance.md) — load before route/event wiring; eager page imports are superseded, with historical factory adaptations removed from current proofs and mandatory source checks.

- [Ownership and plugin contracts](../references/00378-stackpress-ownership-and-plugin-contracts.md) — load when choosing roles, files, exports and cross-plugin contracts.
- [Pages, events and dispatch](../references/00380-stackpress-pages-events-and-dispatch.md) — load when implementing web adapters and reusable app business events, or choosing emit/resolve.
- [Priority inputs, guards and replacements](../references/00387-stackpress-priority-inputs-guards-and-replacements.md) — load when adjusting another plugin’s behavior without editing its implementation.
- [Priority routes and integrations](../references/00388-stackpress-priority-routes-and-integrations.md) — load for web hooks, independent third-party integrations and upgrade/downgrade compatibility plugins.
