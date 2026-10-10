Current coding-style redo: [the 2026-10-10 review](../reviews/coding-style-redo.md). The historical audit and its withdrawal remain below.

# app-shell: ChrisAI Coding audit

Audited 2026-10-10. **Correction:** the full style-compliance conclusion is withdrawn. Subsequent review found missed naming requirements, insufficient explanatory flow comments and JSDoc placement conflicting with the user’s declaration convention. Behavioral checks recorded below remain valid. See [the commenting diagnosis](../reviews/chrisai-coding-commenting-diagnosis.md).

## Scope and passes

Reviewed the current working tree against a task-start snapshot, preserving unrelated prior work. Applied the repository Stackpress handbook and the local [ChrisAI Coding skill](../../../../../.agents/skills/chrisai-coding/SKILL.md). The user explicitly authorized refactoring after the initial review.

- Logic review: permissions and validation order, decision branches, replay, mutation ownership, error propagation and meaningful negative paths.
- Maintainability: feature-centered ownership, duplicate logic, plugin wiring, page/event separation and readable module boundaries.
- TypeScript: named contracts, unknown boundary narrowing, type/value imports, declarations, classes and safe final formatting.
- React TSX: component/hook boundaries, props, state/effect order, forms, imports and paired JSX sections.
- TypeScript tests: existing Node test/assert suites, deterministic fixtures, malformed-input checks, integration ownership and explicit cleanup. Retained the existing runner.
- JavaScript: maintained script/template behavior, declarations, imports, observable proof output and documentation.
- HTML/CSS: authored shell styles and theme bootstrap; source-kit/reset/fonts retain their published artifact conventions.

Generated clients/builds, dependencies and copied original kit/SDK artifacts are not normalized as authored application code. The original kit/reset/fonts and portable SDK were preserved; package manifests and Yarn lockfiles are unchanged from the task-start snapshot.

## Findings and implemented changes

- **P2, guard order:** `.fixtures/actions/domain.ts` derived the welcome ID from `user.id` before rejecting a missing caller. Authorization now precedes that dereference; the direct-action contract covers an undefined caller alongside permissions, replay, stale revisions and Undo.
- **P3, responsibility:** `plugins/settings/about/components/About.tsx` embedded Markdown token rendering. Its sibling `Markdown.tsx` owns token presentation, escaping and the HTTP(S)-only link boundary; About owns release state and layout.
- **P3, typed boundaries:** model transport, persisted agent results, identity render data, generated schema adapters and receipt/HTTP helpers used broad or implicit payloads. They now name their contracts or narrow unknown input at the receiving boundary.
- **P3, unnecessary infrastructure:** the public-asset build implemented a recursive copier. Native `fs.cp` preserves recursive copying and symlink dereferencing.
- **P3, documentation and style:** normalized imports, declaration sections, named-callable JSDoc, meaningful request/transaction/security comments and paired JSX regions. Final review replaced generic build/auth/plugin descriptions with their specific responsibilities.

## Review rounds and stopping condition

1. Initial read-only audit identified the responsibility, typing, duplication and explanation findings above.
2. Applied concrete changes; typechecking exposed mismatched nullable render projections and narrow test/adapter boundaries, which were repaired at their owners.
3. Repeated the relevant language/style passes, then revisited request guards, transactions, runtime ordering, CSS cascades and cleanup. Added the missing action regression contracts where applicable.
4. Final documentation review replaced generic descriptions with actual event/plugin responsibilities. Rebuilt and reran the applicable campaigns; the original review incorrectly concluded that no actionable issue remained; the correction above supersedes its commenting conclusion.

Runtime-dependent initialization order, relative effect order, transactional connection ownership and security guards remain intentional. Local TypeScript object-member semicolons and normal formatter treatment of function/class declarations follow the existing tooling. Proof PASS/receipt/CLI output remains an observable test interface. These are explicit scope/style decisions, not unresolved findings.

## Examples and explanations

The caller guard now executes before the caller-owned ID is derived:

```ts
if (!user || !user.roles.some((role) => allowedRoles.includes(role))) {
  throw new Error('Forbidden.');
}
if (id === 'welcome') id = `welcome-${user.id}`;
```

This excerpt abbreviates the existing allowed-role expression; see the exact implementation in [the action fixture](../../../.fixtures/actions/domain.ts). The [direct contract](../../../.fixtures/actions/tests/contract.ts) asserts the owned Forbidden rejection for a missing caller. The [Markdown renderer](../../../plugins/settings/about/components/Markdown.tsx) explains why raw HTML and unsupported URL protocols remain inert.

JSDoc uses description-only `/** ... */` declaration comments; TypeScript retains parameter and return types. Import groups and declaration sections make files navigable. Inline comments explain permission checks, replay, transaction scope, stale async work or cleanup; JSX/HTML regions have matching START/END labels. The audit does not require a comment on each anonymous collection callback or trivial assignment.

The AST scan covered **123 maintained modules and 211 named callables**, with no missing named-callable JSDoc and no explicit `any` token in that scope. Named callables include functions, methods, constructors/accessors, assigned functions and exported action handlers. Generated/vendor code and anonymous collection/lazy-loader callbacks are outside this count. [The inventory](chrisai-coding/source-inventory.json) records scope and before/after source hashes; these counts are documentation checks, not test-coverage measurements.

## Fresh verification

- `yarn install --frozen-lockfile` passed for the maintained dependency set.
- `yarn generate` passed before the final typecheck/build and did not change schema contracts.
- `yarn typecheck` and `yarn build` passed after the final source edits.
- `yarn test` passed 4 Node test cases and 154 recorded checks across its constituent campaigns.
- Root lazy-route/view-boundary guard passed for all four proofs; its nine regression tests passed.
- `git diff --check -- proofs` passed.

Listener-owning commands ran through devmetrics with the assigned port, for example `PORT={port} OFFICEPRESS_LIVE_TESTS=1 OFFICEPRESS_FINAL_BUILD=1 yarn test`. Managed campaign logs and install/generate/typecheck/build logs are retained in [the log folder](chrisai-coding/logs/).

- [2026-10-10T09-09-19-880Z.json](../receipts/2026-10-10T09-09-19-880Z.json) — 72 checks; passed-with-limitations.
- [config-2026-10-10T09-09-35-870Z.json](../receipts/config-2026-10-10T09-09-35-870Z.json) — 38 checks; passed.
- [agent-context-LSL0Sk.json](../receipts/agent-context-LSL0Sk.json) — 5 checks; passed.
- [identity-3ae41eff-d5db-4192-984f-fb3c6d8fb86c.json](../receipts/identity-3ae41eff-d5db-4192-984f-fb3c6d8fb86c.json) — 39 checks; passed-with-limitations.

Every hash recorded by these selected receipts was compared with the final source: **341 matching comparisons**, no mismatch. Run-owned scratch databases/state directories were absent after cleanup. Managed proof listeners are closed; the unrelated c4ux server was preserved.

No line/branch coverage percentage is claimed; verification uses the existing behavioral campaigns plus the narrowly added regressions. The full receipts retain their existing Stackpress 0.10.8 feature limits, PGlite scope and external-service qualifications. This audit establishes the bounded proofs, not production deployment or a new accessibility acceptance.

## Other proof audit records

- [Common-components: workflow, automation, templates, forms and chat](../../../../common-components/tests/evidence/verification/chrisai-coding-audit.md).
- [Stackpress boilerplate: framework, generation and CLI lifecycle](../../../../stackpress-boilerplate/tests/evidence/verification/chrisai-coding-audit.md).
- [Agent-mode compatibility: native actions and the portable SDK bridge](../../../../agent-mode-compatibility/tests/evidence/verification/chrisai-coding-audit.md).
