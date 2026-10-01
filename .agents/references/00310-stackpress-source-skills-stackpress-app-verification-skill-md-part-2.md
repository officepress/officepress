# Stackpress source: 4. Plugin Wiring Verification; 5. Runtime Reachability Verification; 6. Direct TypeScript Verification; Environment Verification

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-app-verification/SKILL.md`: 4. Plugin Wiring Verification; 5. Runtime Reachability Verification; 6. Direct TypeScript Verification; Environment Verification.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-app-verification/SKILL.md`; part 2/3.

<!-- stackpress-source:start -->
````````markdown
## 4. Plugin Wiring Verification

When verifying plugin work, confirm that the plugin exists and is actually
wired into the Stackpress app.

Minimum evidence:

- the plugin files exist in the expected `plugins/` location
- plugin tests, when added, live under the owning plugin's
  `plugins/<plugin-name>/tests/` folder
- `package.json.plugins` includes the plugin entry when required
- the plugin uses the correct lifecycle hook for its role
- generation plugins register `idea` properly
- runtime plugins place behavior in `config`, `listen`, or `route` correctly
- browser-facing files avoid obvious server-only coupling

Fail plugin verification when:

- the plugin exists on disk but is not registered
- plugin-specific tests were placed in a separate root-level `tests/` folder
- the plugin uses the wrong hook for the behavior
- generation logic was incorrectly placed in runtime hooks
- runtime logic was incorrectly pushed into transform code

## 5. Runtime Reachability Verification

When verifying runtime behavior, confirm that the app can actually reach the
behavior that was implemented.

Examples of acceptable minimum evidence:

- a route is registered and reachable
- a view is bound to the intended route
- an event listener is registered and can be resolved
- a generated runtime artifact is importable through the expected client path

Prefer the smallest proof that demonstrates the feature is live.

Fail runtime verification when:

- files exist but nothing exposes them
- a route handler exists without route registration
- a view exists without route-to-view binding
- generated artifacts exist but runtime cannot consume them

When the phase includes handwritten pages or views, also verify:

- the page shell renders
- shared styles are present when required
- the route does not degrade into a blank or half-hydrated page because the
  page contract is incomplete
- the intended scroll owner actually scrolls when the page uses `LayoutPanel`

## 6. Direct TypeScript Verification

When handwritten TypeScript or TSX changed, run a direct TypeScript pass before
declaring the phase complete.

Minimum evidence:

- the relevant `tsc --noEmit` or equivalent compile pass completes cleanly
- the compile pass covers the touched app or package, not just isolated test
  files

This is especially important for:

- `pages/*.ts`
- `views/*.tsx`
- config files that define typed Stackpress behavior

## Environment Verification

Confirm that verification is using the expected local database target.

Minimum evidence:

- the app is using its normal local database path when it relies on a file-
  backed `.build` database
- an alternate local database target is only used intentionally
- if an alternate target is used, the reason is explicit

Do not introduce a second disposable file-backed local database by default when
the app already has a normal `.build` workflow.

Alternate scratch databases are more acceptable for server-based database
setups.

## Verification by Feature Type

### Schema-heavy feature

Focus on:

- model coverage
- relation correctness
- generation readiness

### Runtime integration feature

Focus on:

- plugin registration
- correct hook placement
- minimal reachable behavior

### Route/view feature

Focus on:

- route registration
- page handler presence
- view binding
- minimal page reachability
- stylesheet and page-shell correctness when shared assets are expected

### Generation plugin feature

Focus on:

- `idea` hook registration
- transform presence
- generated file output
- runtime reconnection when applicable

## Failure Handling

If verification fails:

1. name the failed phase
2. name the missing evidence
3. route back to the skill that should fix it
4. re-verify only the affected downstream phases

Examples:

- missing models or relations -> `stackpress-idea-authoring`
- wrong implementation lane -> `stackpress-plugin-router`
- missing plugin shell or wrong hook -> `stackpress-plugin-scaffold`
- missing transform output -> `stackpress-plugin-idea-generator`

Do not continue layering work on top of a failed gate.

## When to Stop

Stop verification and return the workflow to the responsible skill when:

- command-backed evidence was never actually produced
- the output exists but does not match the intended phase result
- the current implementation lane appears to be wrong
- downstream work depends on a phase that is still ambiguous

Do not soften a failed gate into a partial success just to keep momentum.

## Cleanup Expectation

If verification required starting a local dev server, stop it before claiming
completion unless the user asked to keep it running.

Do not leave a local Stackpress server bound to a port by accident.

## Anti-Rationalization Checks

Before passing a phase, ask:

- do I have evidence, or just plausible code?
- was the relevant command actually run when command evidence matters?
- is the behavior reachable, not merely present on disk?
- is this enough proof for this phase, without pretending the whole app is done?
- did handwritten TS or TSX changes actually pass compile?

If the answer is unclear, the phase is not verified yet.


````````
<!-- stackpress-source:end -->
