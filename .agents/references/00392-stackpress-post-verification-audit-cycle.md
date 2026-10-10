# Stackpress post-verification audit and refactor cycle

Owner: [Stackpress verification](../context/stackpress-verification.md). Load for any custom-app implementation or refactor before declaring the work complete. This is accepted project guidance, not a claim that upstream Stackpress requires ChrisAI Coding.

## Required completion sequence

Implement the requested app behavior using the accepted Stackpress guidelines first. Once it works and its functional checks pass, automatically audit and refactor the resulting code for human maintenance, then verify the final source again. The first successful verification is the entry into this second pass, not the end of implementation.

This applies to new custom apps, features, plugin changes and repairs. Audit maintained authored files created or changed for the task and the directly affected contracts, callers and tests. A whole-app/proof audit covers all maintained authored files in that declared scope. Exclude dependencies, generated clients/build output, historical evidence and copied original assets unless their modification is explicitly part of the task. Do not use this rule to expand a small feature into an unrelated repository rewrite.

1. **Discover and implement.** Read the handbook, applicable pattern references, local scripts and tests. Preserve current user decisions, plugin contracts and unrelated work. Keep a scoped source inventory.
2. **Verify behavior.** Run the appropriate Yarn checks and exercise the affected runtime medium. Diagnose functional failures before calling the implementation working. Retain failed evidence when it explains a correction.
3. **Review logic.** Apply ChrisAI Coding Logic Review to the existing implementation. Map decision paths, branching/cyclomatic complexity, nesting, duplicated rules, mutation and error handling against meaningful tests. Record concrete findings before editing.
4. **Review responsibility.** Apply Maintainability Audit to the same scope. Check whether a human can find the business operation, web adapter, rendering, persistence, configuration and integration owners without scanning unrelated code.
5. **Apply scoped fixes.** Refactor actionable findings using the relevant language/test workflows. Preserve observable behavior and public contracts. Add or repair meaningful regression checks when a real decision path lacks protection.
6. **Apply the entire applicable style guide.** Revisit the now-working source using the language workflows and [documentation and style checklist](00393-stackpress-human-maintainable-code-style.md). Cover naming, comments, JSDoc, sections, imports/exports, types, classes, React flow, tests and authored HTML/CSS where present. A formatter pass alone does not satisfy this step.
7. **Verify final source.** Rerun checks appropriate to the refactor, including affected producer/consumer and runtime checks. Review the final diff for semantic changes that compilation cannot catch. Record final input fingerprints or an equivalent source revision.
8. **Repeat when findings remain.** Re-audit changed logic and documentation after fixes. Continue the scoped audit → fix → style → verify cycle until no actionable findings remain within the authorized scope and applicable checks pass. New edits invalidate relevant earlier verification. Do not keep rerunning unchanged checks without a new change, failure or unresolved concern.
9. **Close out accurately.** Inspect fresh receipts and report the actual scope, fixes, checks, exceptions and limitations. Stop run-owned verification services and close/clean run-owned scratch data. Preserve real data and unrelated processes/files.

## Authorization and skill routing

The user explicitly requested this automatic second pass on 2026-10-10, including responsibility separation and applying audit recommendations. That decision authorizes reversible, scoped, behavior-preserving refactoring as part of custom-app implementation using this KB. Read findings before applying them; a separate approval round is not required for those already-authorized fixes.

The installed [ChrisAI Coding entrypoint](../skills/chrisai-coding/SKILL.md) normally routes narrowly and makes Logic Review/Maintainability Audit review-first. This accepted workflow supplies the explicit request and fix authorization for those passes. It does not change the skill's defaults for unrelated review-only tasks. A current user request for review only, or a narrower frozen contract, still controls that task. Breaking contracts, changing product behavior, destructive data operations and publishing require their own applicable authorization.

Use the skill after implementation has produced existing code. Load each applicable workflow below, plus its supporting references where needed. Use the language owner for actual edits; do not mechanically run every workflow on every file.

| Existing code or concern | Required applicable pass |
| --- | --- |
| JS/TS branching, state, rules, mutation and test gaps | [Logic Review](../skills/chrisai-coding/workflows/logic-review.md), followed by the relevant fix workflow. |
| File organization, centered domain/feature, ownership and discoverability | [Maintainability Audit](../skills/chrisai-coding/workflows/maintainability-audit.md), followed by scoped language fixes. |
| `.js`, `.mjs`, `.cjs` | [JavaScript](../skills/chrisai-coding/workflows/javascript.md); preserve the established ESM/CommonJS mode. |
| Non-React `.ts`, including configs, scripts and bootstrap code | [TypeScript](../skills/chrisai-coding/workflows/typescript.md). |
| TSX components, hooks, forms and typed browser behavior | [React TSX](../skills/chrisai-coding/workflows/react-tsx.md). |
| Existing tests, fixtures and test helpers | [TypeScript Tests](../skills/chrisai-coding/workflows/typescript-tests.md), adapted to the existing runner; language style still applies. |
| Authored HTML/templates or CSS | [HTML/CSS](../skills/chrisai-coding/workflows/html-css.md). |

Check all applicable rule groups, not just the primary workflow's formatting rules. In mixed work, server TS, React, test and stylesheet files each receive their own appropriate pass. Preserve justified stronger local conventions; record specific exceptions rather than treating existing inconsistency as a blanket exemption. The accepted user conventions in the style reference override broader skill examples.

## Simplifying logic and cyclomatic complexity

Cyclomatic complexity measures independent decision paths; cognitive complexity, nesting and boolean combinations expose additional reading difficulty. Use existing tooling when available and manual decision-path review otherwise. No new complexity-tool installation or arbitrary numerical cutoff is required by this guideline.

- Identify the branches that affect permissions, validation, state changes, retries, external delivery and error outcomes. Include cancellation, stale state and partial failure where applicable.
- Prefer guard clauses when they make the normal flow clearer. Name meaningful predicates, simplify duplicated conditions and keep a decision table visible when it better expresses the domain.
- Remove genuinely redundant decisions and duplicated business rules at their responsibility owner. Preserve distinctions between different rejection reasons, absent values, empty values and failed operations.
- Keep mutations and side effects explicit. Preserve ordering, transaction boundaries, request-scoped caching, invalidation, cleanup and cancellation behavior.
- Extract a helper only when it improves comprehension, reuse or independent testing. Do not hide a branch chain behind generic abstractions, split functions solely to lower a score or weaken guards to obtain fewer branches.
- Clear, isolated, well-tested domain logic may legitimately contain several branches. Record that judgment when the complexity is material; do not report every branch as a defect.
- Protect real uncovered behavior with the smallest meaningful regression checks. Avoid tests that mirror the refactor or mock the code under test into a tautology. Preserve existing coverage obligations; do not infer coverage percentages or deployment readiness from test counts.

## Separation of responsibility and Stackpress patterns

Apply the [implementation contract's responsibility boundaries](00205-stackpress-officepress-contract.md#separation-of-responsibility) and the ownership rules below against the app's own domain, not the store sample's feature inventory. The handbook routes additional detailed pattern guidance as it is published.

- `plugin.ts` owns lifecycle wiring and dependency checks. Domain events own reusable business validation, authorization, operations and outcomes. Pages process the web request, call events and format the web response. Views/components own browser presentation. Config owns environment/static policy; store owns connection registration.
- Preserve literal lazy route/event imports at registration, separate page/view bindings and browser-safe exports. A style extraction must not turn a visible lazy loader into an eager import or hide it behind named indirection.
- Reuse framework auth/data behavior where appropriate and keep necessary app policy or installed-version adapters explicit. Do not remove a guard or adapter without proving equivalent behavior at its boundary.
- Keep independent integrations in their own plugins when their activation and ownership differ. Preserve event/route priorities, awaited ordering, pre/post hooks and `false` cancellation semantics when moving handlers.
- Preserve intentional `emit` shared-reference behavior and `resolve` temporary/native-outcome behavior. Do not rewrite dispatch merely to prefer one API.
- Keep cohesive code together. Helpers inside events are optional; a separate helper module is not mandatory. Split only to improve findability, independent change, reuse or testing, and avoid empty folders or generic utility dumping grounds.

## Evidence required before completion

Keep a bounded review record in the application's `tests/evidence/reviews/` and fresh verification/receipts in its relative `tests/evidence/` folders, following [Yarn, CLI and evidence conventions](00373-stackpress-yarn-cli-and-proof-layout.md). Use an existing equivalent evidence owner when a project already has one; do not duplicate evidence merely for this checklist.

The record must identify:

- the source scope and exclusions, relevant language workflows and rule groups checked;
- logic and ownership findings, the fixes applied and reasons for any retained complexity;
- a per-file disposition for maintained files in scope: reviewed unchanged, fixed, or a specific exception; counts alone do not demonstrate full coverage;
- manual comment/JSDoc/naming review, including branch and side-effect explanations, alongside any mechanical checks;
- actual commands, runtime medium, outcomes and final source fingerprints/revision;
- exceptions with the file, rule, reason and behavior protected, plus unresolved findings or unverified boundaries.

Type-check all maintained TS/TSX affected by the task, including tests/configs/scripts. Build affected assets and run relevant app/plugin contracts. Event, persistence, dependency, priority or loader changes need affected runtime behavior checks; UI changes need the relevant rendered/browser checks. Shared contracts need both producers and consumers. Follow the existing verification contract rather than treating a bundle as full proof.

For authored app-shell/common-components plugin changes, include the existing lazy-registration guard and regression suite. They are repository checks, not scripts assumed to exist in every custom app. Documentation-only KB changes use the KB validators and routing checks, without an unrelated application proof run.

Do not claim zero actionable findings because an automated scan is clean. Comment counts, JSDoc presence, formatter output and passing type checks cannot establish explanatory quality or semantic equivalence. Inspect the actual code and diff. If a necessary check cannot run or a finding needs a product decision, report that boundary and incomplete status instead of inventing a pass.

## Authority and provenance

Accepted user instruction, 2026-10-10:

> Basically I want agents looking in this KB for custom apps to implement the solution like it always has but after verification it should automatically go back and refactor the code considering the audit passes in chrisai-coding and what we discussed about patterns, simplifying logic (cyclomatic complexity), separation of responsibility, commenting, javadocing, and specific code styling.

The ordered cycle, routing matrix and evidence checklist above operationalize that decision with the installed skill and accepted Stackpress boundaries. They add no upstream framework requirement. Local application evidence is recorded in `proofs/app-shell/tests/evidence/reviews/coding-style-redo.md`, retained with the proof work separately from this guideline publication. Its proof-specific fixtures, counts and limitations are evidence, not requirements for another app.

Load [human-maintainable documentation and style](00393-stackpress-human-maintainable-code-style.md) while applying the final language passes; it contains the precise comment, JSDoc, naming and source-style decisions and examples.
