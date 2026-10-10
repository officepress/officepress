Current coding-style redo: [the 2026-10-10 review](../reviews/coding-style-redo.md). The historical audit and its withdrawal remain below.

# stackpress-boilerplate: ChrisAI Coding audit

Audited 2026-10-10. **Correction:** the full style-compliance conclusion is withdrawn. Subsequent review found missed naming requirements, insufficient explanatory flow comments and JSDoc placement conflicting with the user’s declaration convention. Behavioral checks recorded below remain valid. See [the commenting diagnosis](../../../../app-shell/tests/evidence/reviews/chrisai-coding-commenting-diagnosis.md).

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

- **P3, build infrastructure:** replaced the recursive public-asset copier with native `fs.cp`; rendering clients, assets and pages remain separate build phases with explicit failed-response checks.
- **P3, TypeScript contracts:** removed broad context/serialization/schema-transform payloads in favor of named contracts and narrowed unknown values. Kept dependency and disposable-database checks in their existing owners.
- **P3, explanation and navigation:** applied declaration sections, named-callable JSDoc, type/value import separation and safe formatting to configuration, rendering facades, plugins and the CLI/HTTP harness. Documented build outputs, serialization safety and run-owned cleanup.
- **P3, final documentation accuracy:** replaced generic event/plugin descriptions with exact descriptions of view configuration, note search, store lifecycle and destructive-command guards.

## Review rounds and stopping condition

1. Initial read-only audit identified the responsibility, typing, duplication and explanation findings above.
2. Applied concrete changes; typechecking exposed mismatched nullable render projections and narrow test/adapter boundaries, which were repaired at their owners.
3. Repeated the relevant language/style passes, then revisited request guards, transactions, runtime ordering, CSS cascades and cleanup. Added the missing action regression contracts where applicable.
4. Final documentation review replaced generic descriptions with actual event/plugin responsibilities. Rebuilt and reran the applicable campaigns; the original review incorrectly concluded that no actionable issue remained; the correction above supersedes its commenting conclusion.

Runtime-dependent initialization order, relative effect order, transactional connection ownership and security guards remain intentional. Local TypeScript object-member semicolons and normal formatter treatment of function/class declarations follow the existing tooling. Proof PASS/receipt/CLI output remains an observable test interface. These are explicit scope/style decisions, not unresolved findings.

## Examples and explanations

Native copying retains the old symlink-following behavior:

```ts
await fs.cp(path.join(cwd, 'public'), path.join(build, 'public'), {
  recursive: true,
  dereference: true
});
```

See the full [build event](../../../plugins/app/events/build.ts). Its comments separate registered views, configured output phases and failure propagation. The [proof harness](../../../tests/runners/prove.mjs) explains isolation, CLI subprocesses, HTTP checks and cleanup ownership.

JSDoc uses description-only `/** ... */` declaration comments; TypeScript retains parameter and return types. Import groups and declaration sections make files navigable. Inline comments explain permission checks, replay, transaction scope, stale async work or cleanup; JSX/HTML regions have matching START/END labels. The audit does not require a comment on each anonymous collection callback or trivial assignment.

The AST scan covered **39 maintained modules and 61 named callables**, with no missing named-callable JSDoc and no explicit `any` token in that scope. Named callables include functions, methods, constructors/accessors, assigned functions and exported action handlers. Generated/vendor code and anonymous collection/lazy-loader callbacks are outside this count. [The inventory](chrisai-coding/source-inventory.json) records scope and before/after source hashes; these counts are documentation checks, not test-coverage measurements.

## Fresh verification

- `yarn install --frozen-lockfile` passed for the maintained dependency set.
- `yarn generate` passed before the final typecheck/build and did not change schema contracts.
- `yarn typecheck` and `yarn build` passed after the final source edits.
- `yarn test` passed 2 Node test cases and 24 recorded checks across its constituent campaigns.
- Root lazy-route/view-boundary guard passed for all four proofs; its nine regression tests passed.
- `git diff --check -- proofs` passed.

Listener-owning commands ran through devmetrics with the assigned port, for example `PORT={port} yarn test`. Managed campaign logs and install/generate/typecheck/build logs are retained in [the log folder](chrisai-coding/logs/).

- [2026-10-10T09-09-33-327Z.json](../receipts/2026-10-10T09-09-33-327Z.json) — 24 checks; passed.

Every hash recorded by these selected receipts was compared with the final source: **52 matching comparisons**, no mismatch. Run-owned scratch databases/state directories were absent after cleanup. Managed proof listeners are closed; the unrelated c4ux server was preserved.

No line/branch coverage percentage is claimed; verification uses the existing behavioral campaigns plus the narrowly added regressions. The full receipts retain their existing Stackpress 0.10.8 feature limits, PGlite scope and external-service qualifications. This audit establishes the bounded proofs, not production deployment or a new accessibility acceptance.
