Current coding-style redo: [the 2026-10-10 review](../reviews/coding-style-redo.md). The historical audit and its withdrawal remain below.

# common-components: ChrisAI Coding audit

Audited 2026-10-10. **Correction:** the full style-compliance conclusion is withdrawn. Subsequent review found missed naming requirements, insufficient explanatory flow comments and JSDoc placement conflicting with the user’s declaration convention. Behavioral checks recorded below remain valid. See [the commenting diagnosis](../../../../app-shell/tests/evidence/reviews/chrisai-coding-commenting-diagnosis.md).

## Scope and passes

Reviewed the current working tree against a task-start snapshot, preserving unrelated prior work. Applied the repository Stackpress handbook and the local [ChrisAI Coding skill](../../../../../.agents/skills/chrisai-coding/SKILL.md). The user explicitly authorized refactoring after the initial review.

- Logic review: permissions and validation order, decision branches, replay, mutation ownership, error propagation and meaningful negative paths.
- Maintainability: feature-centered ownership, duplicate logic, plugin wiring, page/event separation and readable module boundaries.
- TypeScript: named contracts, unknown boundary narrowing, type/value imports, declarations, classes and safe final formatting.
- React TSX: component/hook boundaries, props, state/effect order, forms, imports and paired JSX sections.
- TypeScript tests: existing Node test/assert suites, deterministic fixtures, malformed-input checks, integration ownership and explicit cleanup. Retained the existing runner.
- JavaScript: maintained script/template behavior, declarations, imports, observable proof output and documentation.
- HTML/CSS: shell and feature styles, responsive groups and safe property ordering; source-kit/reset/fonts retain their published conventions.

Generated clients/builds, dependencies and copied original kit/SDK artifacts are not normalized as authored application code. The original kit/reset/fonts and portable SDK were preserved; package manifests and Yarn lockfiles are unchanged from the task-start snapshot.

## Findings and implemented changes

- **P2, guard order and test gap:** the copied action fixture had the same pre-authorization `user.id` dereference and lacked the direct-action suite in its root aggregator. The guard is fixed, the aggregator now imports `.fixtures/actions/tests/contract.ts`, and its four contract groups run against the suite’s own database.
- **P3, responsibility:** automation predicate execution lived in `types.ts`. `conditions.ts` now owns matching, field projections, deadlines and editor summaries; types and labels remain in `types.ts`. Historical stored predicates retain their existing compatibility branch.
- **P3, presentation/state separation:** Chat, Form Builder and Message Templates now use local responsibility-owned hooks; their components render the returned presentation state and handlers. Server-side events/services retain authorization and business mutations.
- **P3, duplication and branching:** Chat and request previews share avatar initials. Request transition destinations/messages use one command table. Field projection uses a switch, and numeric comparisons use explicit guards instead of nested ternaries.
- **P3, copied shell and boundaries:** applied the About Markdown extraction, native asset copier, typed model/auth/HTTP/receipt boundaries, import/declaration styling and explanations from app-shell to this proof’s own maintained copy.
- **P3, React/CSS documentation:** grouped state, handlers and effects without changing relative effect order; added paired JSX sections and explanations of async selection, draft adoption, live updates and cleanup. CSS ordering skips rules where shorthands, duplicate fallbacks or logical/physical properties make reordering unsafe.

## Review rounds and stopping condition

1. Initial read-only audit identified the responsibility, typing, duplication and explanation findings above.
2. Applied concrete changes; typechecking exposed mismatched nullable render projections and narrow test/adapter boundaries, which were repaired at their owners.
3. Repeated the relevant language/style passes, then revisited request guards, transactions, runtime ordering, CSS cascades and cleanup. Added the missing action regression contracts where applicable.
4. Final documentation review replaced generic descriptions with actual event/plugin responsibilities. Rebuilt and reran the applicable campaigns; the original review incorrectly concluded that no actionable issue remained; the correction above supersedes its commenting conclusion.

Runtime-dependent initialization order, relative effect order, transactional connection ownership and security guards remain intentional. Local TypeScript object-member semicolons and normal formatter treatment of function/class declarations follow the existing tooling. Proof PASS/receipt/CLI output remains an observable test interface. These are explicit scope/style decisions, not unresolved findings.

## Examples and explanations

The render function calls its local state owner, while authorized mutations remain on the server:

```tsx
function useChat({ csrf, user }: { csrf: string; user: Caller }) {
  // State, async selection, live subscriptions and request handlers.
}
```

This is a responsibility sketch, not a replacement implementation. See the complete [Chat hook/component](../../../plugins/chat/components/index.tsx), [Form Builder hook/component](../../../plugins/forms/components/index.tsx) and [Message Templates hook/component](../../../plugins/templates/components/index.tsx). [Condition projection and matching](../../../plugins/automations/conditions.ts) now have a runnable owner separate from their [contracts](../../../plugins/automations/types.ts).

JSDoc uses description-only `/** ... */` declaration comments; TypeScript retains parameter and return types. Import groups and declaration sections make files navigable. Inline comments explain permission checks, replay, transaction scope, stale async work or cleanup; JSX/HTML regions have matching START/END labels. The audit does not require a comment on each anonymous collection callback or trivial assignment.

The AST scan covered **252 maintained modules and 538 named callables**, with no missing named-callable JSDoc and no explicit `any` token in that scope. Named callables include functions, methods, constructors/accessors, assigned functions and exported action handlers. Generated/vendor code and anonymous collection/lazy-loader callbacks are outside this count. [The inventory](chrisai-coding/source-inventory.json) records scope and before/after source hashes; these counts are documentation checks, not test-coverage measurements.

## Fresh verification

- `yarn install --frozen-lockfile` passed for the maintained dependency set.
- `yarn generate` passed before the final typecheck/build and did not change schema contracts.
- `yarn typecheck` and `yarn build` passed after the final source edits.
- `yarn test` passed 3 Node test cases and 188 recorded checks across its constituent campaigns.
- Root lazy-route/view-boundary guard passed for all four proofs; its nine regression tests passed.
- `git diff --check -- proofs` passed.

Listener-owning commands ran through devmetrics with the assigned port, for example `PORT={port} yarn test`. Managed campaign logs and install/generate/typecheck/build logs are retained in [the log folder](chrisai-coding/logs/).

- [2026-10-10T09-13-32-836Z.json](../receipts/2026-10-10T09-13-32-836Z.json) — 102 checks; passed-with-limitations.
- [identity-303cf155-55a7-4447-91ca-b13c768dbaeb.json](../receipts/identity-303cf155-55a7-4447-91ca-b13c768dbaeb.json) — 39 checks; passed-with-limitations.
- [identity-6f18eeb3-1266-41e8-ba3b-f8fc99921f37.json](../receipts/identity-6f18eeb3-1266-41e8-ba3b-f8fc99921f37.json) — 39 checks; passed-with-limitations.
- [develop-2026-10-10T09-13-46-104Z-57e9221e-e92a-4f42-a336-79607ca8c8b6.json](../receipts/develop-2026-10-10T09-13-46-104Z-57e9221e-e92a-4f42-a336-79607ca8c8b6.json) — 8 checks; passed-with-limitations.

Every hash recorded by these selected receipts was compared with the final source: **716 matching comparisons**, no mismatch. Run-owned scratch databases/state directories were absent after cleanup. Managed proof listeners are closed; the unrelated c4ux server was preserved.

The first final common-components campaign stalled in the development-browser phase after its domain/HTTP and identity campaigns passed. Its [partial log](chrisai-coding/logs/test-interrupted.log) and [interrupted-run record](chrisai-coding/interrupted-development-run.json) are retained. The managed process tree was stopped, only its recorded scratch database was removed after process exit, and `yarn dev:clean` cleared the generated Vite cache. The isolated full retry passed. The stall’s cause is unconfirmed; it is not presented as a successful run.

No line/branch coverage percentage is claimed; verification uses the existing behavioral campaigns plus the narrowly added regressions. The full receipts retain their existing Stackpress 0.10.8 feature limits, PGlite scope and external-service qualifications. This audit establishes the bounded proofs, not production deployment or a new accessibility acceptance.
