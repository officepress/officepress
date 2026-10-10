# Stackpress workflow, verification and maintenance

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load before scaffolding, selecting a skill, verifying a phase or recording a reusable correction.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

## Accepted project completion workflow

For custom-app implementation using this KB, the 2026-10-10 user decision adds an automatic second pass after functional verification: audit logic and responsibility, refactor actionable findings, apply the complete applicable ChrisAI Coding language/documentation style guide, then reverify final source. Repeat scoped fixes until no actionable findings remain and the relevant checks pass. This is project policy beyond the researched upstream phase guidance below.

- [Required audit and refactor cycle](00392-stackpress-post-verification-audit-cycle.md) — load after the initial functional pass or when deciding whether implementation is complete; defines automatic fix authorization, pass routing, complexity/ownership checks, iteration and evidence.
- [Human-maintainable documentation and style](00393-stackpress-human-maintainable-code-style.md) — load during the final style pass; gives comment sections/walkthroughs, root-only JSDoc, meaningful naming and language-specific examples/checks.

<a id="r40"></a>

## R40. Production-style verification includes runtime behavior

Build output alone does not verify served pages, assets, hydration or database connectivity. Check the selected production-style bootstrap and emitted paths. Adapter examples establish demonstrated integration paths, not universal host/database support.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Production-style review:
1. Build the selected assets/client.
2. Serve through the intended bootstrap.
3. Check pages, assets, hydration and database behavior.
4. Record actual outcomes.
```

This is a verification sequence, not a server-start command. Any local listener in this workspace must use devmetrics; none was started for this research.

Sources: [content/guides/400/420-local-production.md, line 110](https://github.com/stackpress/stackpress.github.io/blob/1f55c3dc97e555922b7e978fd43e485476926e84/content/guides/400/420-local-production.md#L110); [.agents/context/ecosystem-and-portability.md, line 64](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/ecosystem-and-portability.md#L64).

<a id="r47"></a>

## R47. Discover the deliverable and route to narrow skills

Clarify app concept, audience, entities, flows, auth/admin and custom behavior. Distinguish product, teaching/composition sample and production baseline. Use discovery/scaffold/schema/plugin/handler/view/generator/verification skills according to the next artifact; illustrative domains are not imposed requirements.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```yaml
# Discovery note, not application config
users: [target audience]
entities: [domain models]
flows: [business actions]
auth_admin: [required access surfaces]
custom_modules: [capabilities not supplied by the framework]
deliverable: product-or-teaching-sample-or-production-baseline
```

Answer these before picking schema/plugin/view/generator work. The illustrative domain in a skill is not a requirement for another app.

Sources: [skills/stackpress-app-discovery/SKILL.md, line 89](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-discovery/SKILL.md#L89); [skills/stackpress-router/SKILL.md, line 42](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-router/SKILL.md#L42).

<a id="r48"></a>

## R48. New-app scaffolding is a bounded operation

The scaffold skill targets an empty folder, copies its bundled assets, substitutes four supported values, renames packaged gitignore and stops after file creation. Dependency installation, modeling, generation and verification belong to later phases; existing apps need scoped edits.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Empty destination
  -> copy scaffold assets
  -> apply supported substitutions
  -> finish scaffold phase
Then separately install/model/generate/verify.
```

The scaffold skill stops at file creation. Existing apps need scoped edits instead of an empty-folder scaffold workflow.

Sources: [skills/stackpress-app-scaffold/SKILL.md, line 29](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-scaffold/SKILL.md#L29); [skills/stackpress-app-scaffold/SKILL.md, line 88](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-scaffold/SKILL.md#L88).

<a id="r49"></a>

## R49. Verify the phase with current evidence

Check actual scaffold substitutions, intended schema, generated destinations/exports, plugin registration and reachable behavior. Run a direct TypeScript pass for handwritten TS/TSX changes. Plugin behavior tests belong to the owning plugin. Report partial evidence as partial.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```sh
yarn tsc --noEmit
# Then verify the changed page/event through its owning app/plugin suite.
```

Direct TypeScript check illustration; use the app's actual tsconfig/tooling. Compilation, event behavior and rendered behavior are separate evidence; this command was not run for these snippets.

Sources: [skills/stackpress-app-verification/SKILL.md, line 77](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-verification/SKILL.md#L77); [skills/stackpress-app-verification/SKILL.md, line 224](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-verification/SKILL.md#L224); [skills/stackpress-app-verification/SKILL.md, line 171](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-app-verification/SKILL.md#L171).

<a id="r50"></a>

## R50. Scale verification to the owning change

The upstream contribution contract calls for above-90-percent coverage in changed framework packages plus contract-specific checks; app-only work uses the app suite, applying the package target when framework packages change. Root tests cover selected packages rather than guaranteeing complete coverage.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
App-owned change:       application suite and affected boundaries
Framework-package edit: package tests and >90% coverage target
Shared-contract change: producer and consumer checks
```

The package coverage target is scoped to changed framework packages. It is not a blanket requirement imposed on every app by the store sample.

Sources: [.agents/context/extension-and-contribution.md, line 13](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md#L13); [.agents/references/00018-contributor-source-patterns.md, line 147](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/references/00018-contributor-source-patterns.md#L147).

<a id="r51"></a>

## R51. Maintain knowledge with authority labels

Upstream separates accepted shape, new-work requirements and known exceptions. Its maintenance workflow classifies unchanged/update/boundary/conflict/demotion/proposal before promotion. Examples, generated output and deployment evidence have distinct authority.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Classify source:
accepted guidance / example / known exception / proposal / conflict
Then decide:
unchanged / update / boundary note / demotion / owner decision
```

This illustrates the upstream KB maintenance process. Sample presence and generated output are not sufficient authority to promote a rule.

Sources: [.agents/context/extension-and-contribution.md, line 3](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/extension-and-contribution.md#L3); [.agents/workflows/stackpress-kb-maintenance.md, line 84](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/workflows/stackpress-kb-maintenance.md#L84).

<a id="r60"></a>

## R60. Tests describe their actual assertions

The provided tests check plugin lists/route ownership and generated type exports. They do not execute the complete checkout, authorization, concurrency, rollback or browser workflow. No sample tests were run in this research.

Basis: Sample observation. Accepted for agent guidance on 2026-10-10; apply the scope below.

```ts
test('package.json registers the store sample as separate plugins', () => {
  assert.deepEqual(packageJson.plugins, [
    './plugins/app/plugin',
    './plugins/store/plugin',
    './plugins/product/plugin',
    './plugins/cart/plugin',
    './plugins/checkout/plugin',
    './plugins/order/plugin',
    'stackpress'
  ]);
});
```

These are structural assertions. They do not execute checkout, business authorization or browser behavior. [Source excerpt: templates/store/tests/plugin-structure.test.ts, lines 12-22](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/tests/plugin-structure.test.ts#L12-L22).

Sources: [templates/store/tests/plugin-structure.test.ts, line 12](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/tests/plugin-structure.test.ts#L12); [templates/store/tests/schema-generate.test.ts, line 10](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/templates/store/tests/schema-generate.test.ts#L10).
