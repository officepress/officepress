# ChrisAI Coding commenting diagnosis

Reviewed 2026-10-10 after the user challenged the completed proof audit.

The application verification receipts still describe passing behavioral checks.
The prior claim of complete commenting compliance is withdrawn. The inspected
`plugins/app/plugin.ts` does not meet the requested explanatory comment density.

## Authority and scope

The user explicitly requested plenty of comments sectionalizing each file and
thoroughly explaining its logic. The user's latest declaration convention is
JSDoc on root-level functions/classes, not nested helpers such as `ready()`.
That convention takes precedence over the installed skill's conflicting rules.

This review examined the skill router, relevant workflows, commenting/JSDoc
references and examples, and the actual temporary scripts used in this audit.
All 34 Markdown files in the project and global installed copies match byte for
byte. A stale copy does not explain the failure observed here.

The findings below establish this audit's failure and defects or ambiguities
in the guidance. They do not establish the internal decisions of every other
agent that has used the skill.

## Confirmed failure in the completed audit

1. The audit substituted a narrower presence check for a semantic review.
   `/tmp/officepress-code-inventory.cjs` records `documented: !!docs.length`
   for selected named callables. It does not check comment density, explanation
   quality, declaration scope, or whether lifecycle blocks are documented.
2. `/tmp/officepress-docs.cjs` generated a name-based generic description for
   `ready`: "Check whether the dependencies or provider required by this owner
   are available." That wording appears in the challenged source. It does not
   explain notification configuration, the local adapter, the category set,
   or the extra checks made when `active` is true.
3. `/tmp/officepress-flow-comments.py` applied explanations to selected logic
   files; its patch map contains no `plugin.ts` entry. No complete file-by-file
   comment-density review caught that omission before the audit was reported
   complete.
4. Import labels, a Functions divider, and two JSDoc blocks were effectively
   accepted as sufficient for a file whose executable body has no explanatory
   `//` flow comments. Passing typechecks and application tests cannot establish
   that commenting requirement.

These were execution and verification failures. The user's original request
was clear enough to require the missing work.

## Guidance findings and recurrence risks

1. **JSDoc scope contradicts the requested convention.**
   The [TypeScript workflow](../../../../../.agents/skills/chrisai-coding/workflows/typescript.md)
   requires JSDoc on "every function" at lines 141–144 and repeats that rule
   in its completion checklist. JavaScript, React and test workflows repeat
   the same broad requirement. The
   [test declaration reference](../../../../../.agents/skills/chrisai-coding/references/typescript-tests-jsdoc-and-declaration-comments.md)
   explicitly requires local-helper JSDoc and demonstrates it on a nested
   `makeContext()` at lines 24–30. The nested-helper placement is therefore
   taught by the current skill, rather than prohibited by it.

2. **Sparse existing style can be interpreted as an override.**
   The TypeScript workflow's Priority Order, lines 82–91, says to match the
   existing file first and preserve conflicting local patterns unless asked
   to normalize. The rule does not distinguish valid formatting conventions
   from absent or inadequate documentation. In this task, the explicit user
   request already overrode that escape route; it still presents a recurrence
   risk for a generic code-style audit request.

3. **The router has no shared commenting acceptance contract.**
   [SKILL.md](../../../../../.agents/skills/chrisai-coding/SKILL.md)
   routes to narrow workflows and conditional supporting references. It does
   instruct a final language/style pass, but does not state at the entry point
   that a style audit must inspect explanatory comments throughout every
   in-scope file before reporting completion. Detailed expectations are spread
   across workflows and references.

4. **Qualifiers allow the mandatory baseline to be weakened.**
   The TypeScript commenting section has a clear minimum of one comment per
   logical block, but nearby wording includes "when practical" and "when that
   improves scanning." The guidance does not explicitly say that these qualify
   presentation choices rather than waive explanations of nontrivial logic.
   Small-component and trivial-test exceptions are sensible, but should not
   be extended to undocumented lifecycle wiring, guards or state transitions.

5. **Examples do not consistently demonstrate the rules.**
   The [React file outline](../../../../../.agents/skills/chrisai-coding/references/react-file-outline.md)
   shows exported functions/hooks/components without JSDoc at lines 35–60.
   Its flow example has useful inline comments, but omits the root component's
   JSDoc. Examples need to be labeled as partial demonstrations or conform to
   the complete accepted commenting contract.

6. **Completion checks are too easy to claim without evidence.**
   The TypeScript checklist asks whether nontrivial blocks have "enough"
   comments and whether functions have JSDoc, without a required per-file
   inventory of explanatory blocks, placement checks, or semantic rejection
   criteria. This audit illustrates how a presence metric can be mistaken for
   proof of the full requirement.

## Concrete repair direction

- Put one mandatory commenting contract in the skill entry point and require
  each applicable language workflow to load it during a code-style audit.
- Define root declarations, class-member treatment, nested helpers, callbacks,
  exports and properties explicitly. Nested helpers and callbacks must use
  ordinary flow comments under the user's current convention.
- Require explanations for each nontrivial setup, guard, validation group,
  branch, loop, state transition, side effect, lifecycle registration and
  cleanup block. Increase detail where assumptions or consequences are hidden.
- Require section labels at meaningful responsibility boundaries; do not
  confuse import labels or a single Functions divider with explanations of
  the executable body. Retain paired START/END labels for substantial JSX.
- State that sparse existing files do not override the minimum documentation
  requirement. Preserve valid local formatting and behavioral contracts.
- Reject generic comments that could be pasted into an unrelated owner without
  change. Describe the actual purpose, dependencies, state and consequence.
- Make examples conform to that complete contract and align every workflow,
  reference and review checklist with it.
- Require an explicit per-file commenting review before completion. Structural
  automation may find omissions or misplaced JSDoc, but counts alone cannot
  establish accurate, useful explanations. Behavioral test passes are separate
  evidence.

The installed skill has not been rewritten as part of this diagnosis. No
application source was changed in this review.

## Follow-up: full style coverage

The naming review also found that the JavaScript, TypeScript and React final
checklists omit an explicit identifier-naming check despite their Naming
sections. The user confirmed `ctx`, `req` and `res` as accepted library names;
`c` remains a violation. See the [full style completion proposal](chrisai-coding-full-style-proposal.md)
for the broader repair and a concrete acceptance record.
