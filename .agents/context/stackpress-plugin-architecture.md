# Stackpress plugin architecture

Choose plugins by independently owned capabilities and disablement behavior. The app shell owns shared transport/rendering; store owns connection registration and guarded Stackpress SQL integration. Do not keep a separate `data` plugin solely for that SQL bridge. Put authentication in `plugins/auth`, and group Theme, About and Shell under `plugins/settings/`. Keep proof-only action examples under root `.fixtures/actions`. Feature plugins own domain workflows and their corresponding handlers/views. Shared services are explicit public contracts, not imports into another plugin's private implementation.

Configure selected modules at startup and restart to change them. A provider registers services during `config`. A dependent plugin checks required services inside its own `plugin.ts` lifecycle callbacks before it registers listeners, routes, workers or navigation. A missing service leads to a documented fallback or no feature registration. Repeat the guard for every registration phase; returning from one lifecycle callback cannot disable another.

Do not add a central dependency graph validator or live-unload system. Preserve independent features when optional capabilities are absent. Authentication and tenant boundaries fail closed. Runtime disablement preserves stored data and schema; schema removal requires an explicit migration.

Keep optional enhancements separate where they can disappear without breaking the primary capability. Test absent providers, explicit disablement and restored services after restart, including negative route/listener assertions.

- [Complete implementation contract](../references/00205-stackpress-officepress-contract.md) — load for full rules, lifecycle details, exceptions and accepted decisions.
- [Stackpress handbook](stackpress.md) — load to find complete local API and specialist workflow references.

- [Tested guards and composed Idea examples](../references/00357-stackpress-tested-plugin-pattern.md) — load for executable 0.10.8 patterns, framework SQL integration timing and internal event absence.
