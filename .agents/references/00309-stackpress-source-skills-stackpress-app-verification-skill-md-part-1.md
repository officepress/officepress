# Stackpress source: Stackpress App Verification; Overview; Use This Skill For; Do Not Use This Skill For

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-app-verification/SKILL.md`: Stackpress App Verification; Overview; Use This Skill For; Do Not Use This Skill For.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-app-verification/SKILL.md`; part 1/3.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-app-verification
description: Use when an agent needs to verify that a Stackpress app phase is actually complete by checking scaffold files, schema readiness, generated output, plugin wiring, and reachable runtime behavior before advancing the workflow.
---

# Stackpress App Verification

Verify Stackpress app progress with explicit phase evidence.

This skill is a gatekeeper. It decides whether the current phase is real enough
to advance. It does not replace the scaffold, schema, routing, or plugin
implementation skills.

## Overview

Evidence before advancement.

This skill exists to stop Stackpress workflows from moving forward on plausible
structure, stale assumptions, or unverified output.

## Use This Skill For

- checking whether a Stackpress workflow phase is complete
- verifying scaffold output before moving to schema work
- verifying schema readiness before or after generation
- verifying generated output, plugin wiring, and reachable runtime behavior
- preventing the coordinator from moving forward on weak assumptions

## Do Not Use This Skill For

- authoring `schema.idea`
- deciding the product requirements
- inventing plugin architecture from scratch
- replacing broad test suites with superficial file checks

## Primary Rule

Require the smallest convincing evidence that the phase is real.

Do not demand full end-to-end QA at every step. Do not accept hand-wavy
"probably works" either.

## The Iron Law

```text
NO PHASE ADVANCEMENT WITHOUT FRESH PHASE EVIDENCE
```

If the relevant evidence was not checked in the current workflow state, the
phase is not verified.

## Verification Order

Check the current phase in this order:

1. scaffold evidence
2. schema evidence
3. generation evidence
4. plugin wiring evidence
5. runtime reachability evidence
6. direct TypeScript evidence when handwritten TypeScript changed

Only verify the phases that are supposed to exist already.

## Output Format

For each verification pass, report:

1. phase being verified
2. evidence checked
3. pass or fail
4. blocking gaps
5. exact next action if it failed

If verification is partial, say that explicitly instead of implying completion.

## Verification Gate

Before passing any phase:

1. identify what evidence proves the phase
2. check that evidence directly
3. confirm the evidence matches the intended artifact or behavior
4. fail the phase if the evidence is missing, stale, or ambiguous
5. only then allow the workflow to advance

Skip any step and the phase is still unverified.

## 1. Scaffold Verification

When verifying scaffold output, confirm that the expected baseline files exist
and the required substitutions were applied.

Minimum evidence:

- project root contains `package.json`
- project root contains `schema.idea`
- project root contains `tsconfig.json`
- project root contains `uno.config.ts`
- `config/` exists with expected baseline files
- `plugins/` exists with the expected baseline plugin folders
- scaffold placeholders are no longer present where replacements were expected

Fail scaffold verification when:

- expected baseline files are missing
- placeholder tokens remain unreplaced
- the app was scaffolded into a non-empty directory in a way that created
  ambiguity

Do not move to schema work until the baseline project shape is real.

## 2. Schema Verification

When verifying schema readiness, confirm that `schema.idea` is coherent enough
for meaningful generation.

Minimum evidence:

- the intended top-level models are present
- the critical fields and relations implied by the requirements are present
- the schema is intentional rather than still a generic placeholder
- important display or validation metadata is present where it materially
  affects generated output

Good schema verification questions:

- does this schema cover the main product nouns?
- does it support the critical user flows?
- are the important relations explicit?
- is generated admin or view behavior likely to be useful from this schema?

Fail schema verification when:

- important domain models are still missing
- the schema is still mostly the scaffold default
- major relations or validations are absent
- the intended generated behavior clearly cannot emerge from the current schema

## 3. Generation Verification

When verifying generation, confirm that Stackpress actually produced output in
the expected destination.

Minimum evidence:

- the generation command completed successfully
- generated files appeared in the configured client or build output
- generated package surfaces such as `index.ts`, package exports, or registries
  reflect the intended change when applicable
- output location matches the app's config rather than an ad hoc path

Fail generation verification when:

- generation did not run successfully
- output is missing or written to the wrong place
- expected generated artifacts were not emitted
- generated output still reflects stale schema assumptions

Do not route downstream plugin work off a failed or stale generation pass.

If the app also depends on local population for the sample flow, verify that
the active populate source matches the current app pattern.

Examples:

- config-driven seed rows exist where the app expects them
- there is not a stale plugin populate path being assumed after the app moved
  to config-driven population


````````
<!-- stackpress-source:end -->
