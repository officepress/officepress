# app-shell: coding-style redo

Reviewed 2026-10-10 using the local [ChrisAI Coding skill](../../../../../.agents/skills/chrisai-coding/SKILL.md), relevant language/test references and the user's commenting/JSDoc/naming decisions. This record supersedes the withdrawn full-style conclusion in the [earlier audit](../verification/chrisai-coding-audit.md); its behavioral history is preserved.

Scope: **126 maintained files** in this proof. Across all four proofs: **457 files**, comprising 449 JS/TS/TSX modules and eight authored styles. Dependencies, generated clients/builds, evidence output and copied original assets are excluded. Review used a task-start snapshot to preserve unrelated dirty-worktree changes.

## Applied review rules

- Names describe values and actions; single-letter locals are removed. Boolean state uses `is`, `has`, `can` or `should` where it describes local state. `ctx`, `req` and `res` retain the underlying framework convention. Public property keys, events, routes and wire/schema contracts retain their accepted names.
- JSDoc is reserved for module-level functions, callable exports and classes, including description-only comments on `action(...)` exports. Nested helpers, callbacks, methods, constructors, type fields and ordinary declarations use `//` comments. The user's instruction overrides the skill's broader method/nested-JSDoc requirement.
- Declaration comments explain contracts and consumers; flow comments explain permissions, branches, state ownership, side effects, revision checks, priorities, cancellation and cleanup. Generic owner/contract prose was replaced with concrete responsibilities. Large tests explain setup, action and observed outcome next to their scenario blocks.
- Import groups are `//node`, `//modules`, `//client`; type/runtime forms and local ESM suffixes follow the language guide. Two-space indentation, quotes, compact blocks, semicolons, object-type commas and readable declaration sections are normalized.
- React sources group helpers/hooks/components and local props, state, derived values, handlers, effects and rendering where dependencies allow. JSX regions remain paired. Handler comments distinguish local presentation changes from business commands sent to events.
- Class members retain explicit access and internal method prefixes. Unknown JSON/provider boundaries are narrowed before reading fields; no explicit `any`, typing suppression or leftover debug scaffolding remains in the maintained scan. CLI/proof PASS and receipt output remains an intentional observable interface.
- Authored HTML/templates and CSS retain semantic ownership, safe content boundaries and readable sections. Independent CSS properties are alphabetized while required relative cascade order is retained. Copied kit/reset/font styles and the original portable SDK remain source artifacts.

Comments were reviewed for factual meaning and placement, not merely counted. The per-file [source audit](../verification/coding-style-redo/source-audit.json) records mechanical checks and fingerprints; it does not claim that automated comment presence proves documentation quality.

## Concrete changes and reviewed flow

- [App registration](../../../plugins/app/plugin.ts) explains configuration versus runtime readiness, app-owned notification capability, lazy imports and the `-400` dependency lifecycle. Its nested readiness helper uses plain comments; the root entry point has JSDoc.
- [Database serialization](../../../plugins/store/serialize.ts) explains queue failure recovery, AsyncLocalStorage ownership, callback-connection reuse and deadlock avoidance.
- [JSON client](../../../plugins/app/client.ts) is named `requestJson`, reads the response as `unknown`, distinguishes HTTP/application errors and retains CSRF plus cancellation metadata. [Three behavior tests](../../../plugins/app/tests/client.test.ts) cover results/raw/null payloads, mutation metadata and error envelopes.
- Identity adapters, request guards, shared rendering, theme/release helpers and large shell/browser/configuration tests have specific declaration and flow comments. Framework event/route boundaries and callable contracts are preserved.

## Fresh verification and limits

- `yarn typecheck` and `yarn build` passed; generation completed in the three schema proofs. The SDK comparison build is deliberately schema-free.
- `yarn test` passed 7 Node cases and 154 checks across the recorded campaigns.
- All 31 authored plugin entrypoints passed lazy-route/view-boundary checks; the nine guard regression tests passed. `git diff --check -- proofs` passed.
- Fresh receipt fingerprints match final files. Run-owned scratch data is absent and managed campaign processes exited with code 0. Unrelated servers, databases and historical scratch folders are preserved.

- [2026-10-10T12-17-37-525Z.json](../receipts/2026-10-10T12-17-37-525Z.json) — main, 72 checks, passed-with-limitations; 141 source hash comparisons matched.
- [config-2026-10-10T12-17-54-507Z.json](../receipts/config-2026-10-10T12-17-54-507Z.json) — configuration, 38 checks, passed; 132 source hash comparisons matched.
- [agent-context-fqDxOu.json](../receipts/agent-context-fqDxOu.json) — agent-context, 5 checks, passed; no native hashes in this receipt; maintained inputs checked against the shared source freeze.
- [identity-27aeb66c-8d73-4a19-9053-27e1fcff2a57.json](../receipts/identity-27aeb66c-8d73-4a19-9053-27e1fcff2a57.json) — identity-custom, 39 checks, passed-with-limitations; 71 source hash comparisons matched.

[Verification metadata](../verification/coding-style-redo/verification.json) and [command logs](../verification/coding-style-redo/logs/) retain the exact bounded results. [Initializer ordering](../verification/coding-style-redo/order-exceptions.json), [React dependency order](../verification/coding-style-redo/react-exceptions.json) and [CSS cascade order](../verification/coding-style-redo/css-exceptions.json) name each scoped exception. No blanket formatter exemption is claimed.

Line/branch coverage percentages were not measured. Existing receipt limitations remain: these are PGlite/Chrome proofs with bounded provider checks, not production deployment, broad external delivery or new assistive-technology acceptance. Copied original assets are excluded from authored style normalization.

## All-proof review records

- [common-components](../../../../common-components/tests/evidence/reviews/coding-style-redo.md) — 261 maintained files; fresh runtime results and owned exceptions.
- [stackpress-boilerplate](../../../../stackpress-boilerplate/tests/evidence/reviews/coding-style-redo.md) — 39 maintained files; fresh runtime results and owned exceptions.
- [agent-mode-compatibility](../../../../agent-mode-compatibility/tests/evidence/reviews/coding-style-redo.md) — 31 maintained files; fresh runtime results and owned exceptions.

[Combined source/verification summary](../verification/coding-style-redo/all-proofs-summary.json). Package manifests, Yarn locks, root Idea schemas, copied canonical styles and recorded SDK inputs match the task-start snapshot (46 protected inputs). Final maintained-source hashes show no drift after their verification freeze.
