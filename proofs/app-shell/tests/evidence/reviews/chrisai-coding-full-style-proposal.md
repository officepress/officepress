# ChrisAI Coding: full style audit completion proposal

Prepared 2026-10-10. This proposes changes to the skill; it does not claim that
the installed skill or the proof source has already been repaired.

## Why the previous audit failed

The user requested all applicable passes and explicit explanatory comments.
The audit applied substantial formatting, typing and structural changes, but
did not verify the entire applicable guide against each in-scope file.
Selected transformation scripts and a named-callable JSDoc presence scan were
used as substitutes for a complete semantic style review. Naming and flow
comments in `plugins/app/plugin.ts` were missed. The completion claim was too
broad and has been corrected in the proof reports.

The current JavaScript, TypeScript and React workflows all have Naming
sections, but their Review Checklists do not explicitly check identifier naming.
The workflow priority rules also preserve existing local style without clearly
distinguishing valid conventions from violations a requested style audit should
correct. These are guidance weaknesses, not excuses for ignoring the user's
explicit request.

## Accepted naming clarification

`ctx`, `req` and `res` are accepted library vocabulary. Preserve them. They are
not equivalent to an arbitrary single-letter alias such as `c`.

Do not expand this exception to all abbreviated names. Inspect each other name
for its actual meaning, scope and the workflow's variable/function/class rules.
Preserve externally required identifiers and contract keys. Record specific
exceptions instead of silently treating every existing name as acceptable.

## Proposed entry-point contract

Add the following shared contract near the top of `SKILL.md`, with one linked
reference for detailed audit mechanics:

> A code-style audit checks the entire applicable style guide against every
> in-scope maintained file. Its scope includes existing code in those files,
> not only lines edited during a refactor.
>
> Determine the applicable workflow for each file and derive the checklist
> from its complete requirements, including linked details needed to evaluate
> those requirements. Do not substitute the shortened Review Checklist, a
> formatter, a declaration count or passing behavioral tests for this review.
>
> For each file, record checked rule groups as pass, fail, not applicable,
> documented exception, or unverified. Explain exceptions and unverified items.
> Do not report a complete style pass while failures or unverified required
> checks remain. In review-only mode, report findings without applying edits;
> in an authorized fix pass, resolve the findings and repeat the review.
>
> Current user instructions take precedence. Preserve required library/API
> vocabulary, including `ctx`, `req` and `res`. Sparse comments, generic names
> or other existing violations do not override a requested style audit.

## Full-guide coverage

Each applicable workflow needs review coverage for every requirement it owns.
The checklist below identifies common groups, not a replacement for the guide:

| Rule group | Required evaluation |
| --- | --- |
| Naming | Meaningful variables; function verbs and boolean predicates; class nouns; casing; hook/handler names; permitted framework vocabulary |
| Comments | Explanations for nontrivial logical blocks, guards, assumptions, state changes, effects and cleanup; truthful, local descriptions |
| JSDoc/declarations | Accepted root-level declaration scope; nested helpers use flow comments; exported declarations and properties receive their required context |
| Sections | Responsibility boundaries and import/declaration grouping; paired START/END labels where substantial JSX/HTML regions warrant them |
| Imports/exports | Required categories, type/value separation, ESM suffixes, export/member ordering and concrete runtime-order constraints |
| Types/classes | Appropriate types and narrowing, access modifiers, member organization and applicable class-specific naming rules |
| Formatting | Indentation, casing, quotes, punctuation, spacing, wrapping, declaration layout and language-specific syntax |
| React | Props/contracts, hook and handler structure, effect ownership/cleanup, component order, forms and render conventions |
| Tests | Scenario explanation, meaningful assertions, deterministic fixtures, boundaries, framework conventions and relevant style requirements |
| HTML/CSS | Semantic markup, attributes, naming, ownership sections, property/value conventions and cascade-preserving exceptions |
| Hygiene | Unused code, debug output, commented-out code, dependencies and relevant runtime constraints |

Use only applicable rows, and include additional rules from the selected guide.
Marking a group pass requires evaluating its constituent rules; the group name
alone is not evidence of completion.

## Resolve guidance conflicts

1. Replace the broad "every function gets JSDoc" wording throughout workflows,
   references and examples with the user's accepted declaration-scope rule.
   Explain nested helpers and callbacks separately rather than relying on the
   word "function" to cover all placements.
2. Limit local-style precedence to deliberate compatible conventions and
   required integration contracts. It must not silently waive naming clarity,
   explanatory comments or the user's explicit normalization instructions.
3. Add explicit naming checks to every applicable Review Checklist, and audit
   those checklists against all other requirement sections for omissions.
4. Require a shared full-guide completion check from each language workflow.
   Keep detailed requirements in their existing owners instead of duplicating
   the entire guide in `SKILL.md`.
5. Fix examples that contradict accepted naming, commenting or declaration
   rules, or label a narrowly focused snippet as a partial illustration.

## Example acceptance record for the challenged file

| Check | Current result | Evidence |
| --- | --- | --- |
| Naming | Fail | `c` is a single-letter configuration alias; `ready`/`active` need a clearer description of notification readiness and optional runtime checks |
| Library vocabulary | Pass | `ctx` follows the underlying library and is explicitly accepted by the user |
| Flow comments | Fail | Predicate groups and build/config/listen/route wiring have no executable-flow explanations |
| JSDoc scope | Fail | The nested `ready()` helper uses JSDoc contrary to the user's root-level convention |
| Sections | Partial | Import labels and a Functions divider exist; responsibility boundaries inside plugin registration are not explained |
| Class declarations | Not applicable | No class is declared in the file; imported type/class names belong to their defining owners |

This record is deliberately incomplete for imports, types and formatting. A
real full audit must inspect those requirements too before claiming completion.

## Validation that tests actual agent behavior

Use an isolated fixture containing known naming, commenting, declaration,
import and formatting problems. Ask for an ordinary code-style audit using the
revised skill, without giving the evaluating agent the expected findings.

Verify that the result catches arbitrary aliases such as `c`, preserves
`ctx`/`req`/`res`, respects declaration scope, explains all nontrivial blocks,
checks remaining style categories, and preserves lazy import behavior.
Accept multiple accurate names/comments rather than requiring exact wording.

Structural tooling can flag omissions and suspicious identifiers. A final
source review must establish that comments and names explain the actual code.
Package/frontmatter validation and application tests establish different facts;
neither proves that the skill produces a compliant full style audit.
