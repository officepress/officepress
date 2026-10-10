# common-components: coding-style redo

Reviewed 2026-10-10 using the local [ChrisAI Coding skill](../../../../../.agents/skills/chrisai-coding/SKILL.md), relevant language/test references and the user's commenting/JSDoc/naming decisions. This record supersedes the withdrawn full-style conclusion in the [earlier audit](../verification/chrisai-coding-audit.md); its behavioral history is preserved.

Scope: **261 maintained files** in this proof. Across all four proofs: **457 files**, comprising 449 JS/TS/TSX modules and eight authored styles. Dependencies, generated clients/builds, evidence output and copied original assets are excluded. Review used a task-start snapshot to preserve unrelated dirty-worktree changes.

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

- Shared shell, identity, store and JSON-client style changes match app-shell, including [three transport behavior tests](../../../plugins/app/tests/client.test.ts).
- Forms comments explain token hashing, immutable published definitions, response history, atomic draft/active saves, stale revision rejection and current editor selection.
- Workflow/automation comments explain transaction connections, current-stage task reconciliation, committed transitions, priority integration, immutable queued runs, scheduler ownership, durable checkpoints and uncertain external handoffs.
- Template/chat comments separate local editing from save/publish/send requests, caller-private state, rendering/sanitization, dispatch history and provider acceptance. Long service and HTTP contracts now narrate these scenarios beside setup/actions/assertions.
- The full rerun caught a callback rename that shadowed the outbound chat message. [The failed receipt](../receipts/2026-10-10T12-14-51-113Z.json) and [failed log](../verification/coding-style-redo/logs/common-components-test-failed.log) are retained. The merge now compares `candidateMessage.id === message.id`; the existing handoff contract and complete final campaign pass.

## Fresh verification and limits

- `yarn typecheck` and `yarn build` passed; generation completed in the three schema proofs. The SDK comparison build is deliberately schema-free.
- `yarn test` passed 6 Node cases and 188 checks across the recorded campaigns.
- All 31 authored plugin entrypoints passed lazy-route/view-boundary checks; the nine guard regression tests passed. `git diff --check -- proofs` passed.
- Fresh receipt fingerprints match final files. Run-owned scratch data is absent and managed campaign processes exited with code 0. Unrelated servers, databases and historical scratch folders are preserved.

- [2026-10-10T12-26-36-969Z.json](../receipts/2026-10-10T12-26-36-969Z.json) — main, 102 checks, passed-with-limitations; 281 source hash comparisons matched.
- [identity-defea57b-b7ff-404a-a19c-277d71b9bbd0.json](../receipts/identity-defea57b-b7ff-404a-a19c-277d71b9bbd0.json) — identity-default, 39 checks, passed-with-limitations; 72 source hash comparisons matched.
- [identity-0b20ad73-59a6-4acf-bdc7-472296db8d89.json](../receipts/identity-0b20ad73-59a6-4acf-bdc7-472296db8d89.json) — identity-custom, 39 checks, passed-with-limitations; 72 source hash comparisons matched.
- [develop-2026-10-10T12-26-50-288Z-ef838996-62c5-4a13-9087-6c65bf95418d.json](../receipts/develop-2026-10-10T12-26-50-288Z-ef838996-62c5-4a13-9087-6c65bf95418d.json) — development, 8 checks, passed-with-limitations; 295 source hash comparisons matched.

[Verification metadata](../verification/coding-style-redo/verification.json) and [command logs](../verification/coding-style-redo/logs/) retain the exact bounded results. [Initializer ordering](../verification/coding-style-redo/order-exceptions.json), [React dependency order](../verification/coding-style-redo/react-exceptions.json) and [CSS cascade order](../verification/coding-style-redo/css-exceptions.json) name each scoped exception. No blanket formatter exemption is claimed.

Line/branch coverage percentages were not measured. Existing receipt limitations remain: these are PGlite/Chrome proofs with bounded provider checks, not production deployment, broad external delivery or new assistive-technology acceptance. Copied original assets are excluded from authored style normalization.
