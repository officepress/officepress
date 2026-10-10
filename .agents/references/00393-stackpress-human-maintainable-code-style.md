# Stackpress human-maintainable documentation and code style

Owner: [Stackpress verification](../context/stackpress-verification.md), through [the required audit cycle](00392-stackpress-post-verification-audit-cycle.md). Load during the post-verification style/refactor pass and before claiming that the entire applicable code style guide was applied.

These accepted user conventions apply to maintained custom-app code. Their purpose is code a human can browse, understand and maintain manually. Read the relevant ChrisAI Coding language workflow as well; this checklist makes previously missed rules explicit rather than replacing the complete guide.

## Comments are required per logical block

Comments are part of the maintained implementation, not an optional finishing touch. Add clear section boundaries per file where actual groups exist, and local walkthrough comments for each non-trivial logical block. Increase detail for branching, carried state, hidden assumptions and side effects. A file-level paragraph does not replace local explanations.

- Explain the block's purpose, why a guard exists, what state it prepares and what the next step changes or returns.
- Explain lifecycle phase/dependency/priority timing, permissions, mutation ownership, request reuse/invalidation, revision checks, cancellation, persistence and cleanup when they occur.
- For multiline branches, explain the condition and consequence separately when it helps scanning. For a compact one-line operation, one combined comment can explain both.
- Put comments immediately beside the code they describe. Do not pack the whole narrative above the function or put unrelated section comments inside call arguments.
- Name actual data, owners and effects. Replace generic phrases such as “prepare the contract used by this owner” with the concrete provider, readiness requirement or operation.
- Keep explanations factual and synchronized with code. Avoid copying the same generic prose into every file, narrating punctuation or retaining commented-out code.
- Use the skill's inline form: `//comment` on the first line, lowercase and no period for a single sentence; wrapped continuation lines use `// ` with a space. Multiple sentences may use normal casing/punctuation.
- Explain exported types/constants and class properties with ordinary comments: what they represent, their consumers and expected mutation/lifetime. Do not duplicate a declaration note immediately above the same function's JSDoc.
- Tests need local scenario/setup/action/assertion explanations. Name the observable outcome and why the fixture or branch matters; “setup” alone is insufficient for a complex scenario.

Use the skill divider only for meaningful sections that exist:

```ts
//--------------------------------------------------------------------//
// Functions
```

Do not add empty headings or surround every trivial statement with a divider. A large file should expose its distinct responsibilities; a tiny file still needs its applicable declaration and local flow comments.

## JSDoc placement: module-level functions and classes only

The user's accepted rule narrows the installed skill's broader JSDoc coverage. Apply `/** ... */` to module/root-level functions and classes, including module-level hooks/components and callable exports such as a default `action(...)` export. Use ordinary `//` comments for nested functions, callbacks, class methods/constructors, properties, type fields and non-callable declarations. This is the project's placement convention, not a claim about what a JSDoc parser accepts.

Keep JSDoc immediately above the declaration, with a short description of its actual purpose. Explain a class's role and use where needed. Do not add `@param`, `@returns` or similar tags unless explicitly requested. Use standard opening, ` * ` description lines and closing formatting.

This excerpt shows a root function's JSDoc and a nested callback's ordinary comments:

```ts
/**
 * Return the names of active plugins for the current runtime selection.
 */
export function getActivePluginNames(plugins: PluginSelection[]) {
  //keep only enabled plugins so disabled capabilities are not bootstrapped
  const activePlugins = plugins.filter(plugin => {
    //read the selected activation flag without changing stored plugin data
    return plugin.isEnabled;
  });

  //return names for bootstrap selection while retaining the configured order
  return activePlugins.map(plugin => plugin.name);
};
```

`PluginSelection` is the application's own typed selection contract in this excerpt; it does not prescribe a central dependency validator or live activation controller.

In a plugin entrypoint, the root export gets JSDoc; a nested lifecycle callback uses ordinary comments. Registration remains literal and lazy:

```ts
/**
 * Register the about page during the web-route lifecycle phase.
 */
export default function plugin(ctx: Server) {
  //wait for route initialization before registering the web adapter
  ctx.on('route', () => {
    //keep the page module lazy so the build can discover its import boundary
    ctx.get('/api/about', () => import('./pages/read.js'));
  });
};
```

This is a registration excerpt; use the installed server type and actual app paths. Do not put JSDoc immediately above the nested `ctx.on` callback or nested helper. The business operation belongs in an event, not in this entrypoint or its web page.

## Naming must describe the actual value or action

- Use camelCase for local variables/functions/hooks, PascalCase for classes/components/prop types, and the repository's kebab-case folder/file convention. Default class/component filenames may use PascalCase.
- Function names describe actions, usually verb-noun phrasing: `getActivePluginNames`, `requestJson`, `invalidateCaller`. Class names describe their role. React event handlers describe intent (`handleSubmit`); custom hooks start with `use`; prop types have a meaningful `Props` suffix.
- Use `is`, `has`, `can` or `should` for booleans where appropriate: `isReady`, `hasCredential`, `canPublish`, `shouldRetry`. A prefix does not substitute for an accurate meaning.
- `ctx`, `req` and `res` are accepted because they follow the underlying library. Preserve deliberate framework/API identifiers and external wire/schema keys.
- Single-letter locals such as `c` are unacceptable. Rename to the actual entity/value, such as `component`, `category` or `connection`, after reading its type and use. Avoid vague substitutions such as `item`, `value` or `context` when they obscure the role.
- Check scope and shadowing after a rename. Distinguish a collection candidate from the outer object, for example `messages.find(candidateMessage => candidateMessage.id === message.id)`. An accidental `message.id === message.id` can still type-check and always match the first item.
- Do not blindly rename public events, route paths, fields, protocol keys or schema names for cosmetic consistency. Preserve contracts; adapt local aliases when helpful.

## Entire applicable language style pass

Inspect the installed workflow and its review checklist, not only these reminders. For every applicable group below, record checked/fixed or a specific reason it does not apply. Formatting tools help verify mechanical rules; they do not evaluate ownership, meaning or documentation quality.

| Rule group | Check on final maintained source |
| --- | --- |
| Basic JS/TS/test formatting | Two spaces, single-quoted strings where syntax allows, statement semicolons, same-line braces, one blank line between logical blocks, compact readable wrapping, no import/parameter trailing commas. Aim for 80 columns where practical; justify established longer lines rather than breaking syntax/meaning. |
| Imports and modules | `//node`, `//modules`, `//client` for applicable ESM groups; Node `node:` prefixes; separate type/runtime forms, required import subtype ordering and local `.js` suffixes for emitted TS ESM. Preserve `.mjs`/`.cjs` suffixes and CommonJS mode where those are the actual modules. |
| Export sections | TS: types → constants → functions → classes → default; JS omits types. Alphabetize independent exports within categories, use meaningful sections and end exports with semicolons. Preserve initializer dependencies and intentional observable ordering with specific exceptions. |
| TypeScript boundaries | Appropriate `type` versus class-contract `interface`, comma-separated object-type members, readable annotations/unions, inference where clear and explicit contracts where useful. Narrow unknown input; avoid `any` and typing suppression. Explain an unavoidable boundary exception beside it; tests retain their stricter guide. |
| Functions and classes | Focused names/actions, real Error objects and meaningful errors, no swallowed failures. Explicit TS access modifiers including `public` constructors; member category/access/name order; internal method prefixes and justified readonly boundaries. Preserve initialization/override semantics. |
| React file/component flow | File groups for imports/types/constants/helpers/hooks/components where present; component props → hooks → derived values → handlers → effects → render where dependencies allow. Typed props/events, declarative render, parenthesized JSX returns and stable hook order. Avoid duplicated derived state and unrelated responsibilities. |
| React reuse and forms | Separate genuinely reusable components/hooks; keep local-only logic near its consumer. Consider aggregate hooks when helpful rather than automatically extracting. Review controlled/uncontrolled behavior, synchronization and event propagation for fields that own it. |
| Existing tests | Existing runner, meaningful titles and scenario sections, typed fixtures, public behavior assertions, awaited async work, controlled clocks/randomness and proper cleanup. No `.only`, hidden order dependence, tautological mocks or unnecessary runner migration. |
| Authored HTML/templates | Semantic structure, valid heading/nesting flow, clear class ownership, accessible attributes, safe content boundaries, readable ordered attributes and hosting-correct links/assets. Preserve the intended rendering/escaping model. |
| Authored CSS | Meaningful ownership sections, shallow component/partial/page selectors, readable selector/property lines, alphabetical independent properties, prefixed-property ordering and normalized values. Preserve intentional shorthand/longhand/cascade relationships and responsive ownership. Document order-sensitive exceptions. |
| Hygiene | No stale comments, debug scaffolding, unused imports/declarations, dead branches or secrets. Intentional CLI/proof result output and runtime logging are observable behavior, not automatically debug statements to remove. |

JSX and HTML major region comments use paired sections when the render/template is large enough to benefit:

```tsx
{/* START: Notification List */}
<NotificationList notices={notices} />
{/* END: Notification List */}
```

For HTML use `<!-- START: Notification List -->` and matching `<!-- END: Notification List -->`. Plain JS/TS dividers, JSX comments and HTML comments each belong to their actual syntax. Avoid adding sections that distract from a tiny component.

## Manual review and exceptions

Read every maintained file in the task scope after the style edits. Check whether a maintainer can follow its declarations and flow without reconstructing hidden dependencies. Verify that comments explain actual branches and effects and that JSDoc is attached to the correct scope. Mechanical presence/density checks provide supporting evidence only.

Review the diff after renames, reordering or extraction for shadowing, changed evaluation order, public key changes, altered imports, priority/cancellation changes and state lifetime changes. Rerun the appropriate verification through the [audit cycle](00392-stackpress-post-verification-audit-cycle.md).

Record any necessary exception with the file, rule, precise reason and protected behavior. Examples include an initializer that depends on a prior export or a hook-derived value needed before another computation. Do not exempt a whole file from naming, commenting or type rules because one ordering rule has an exception.

## Authority and provenance

Accepted user decisions in the 2026-10-10 proof style discussion establish root-level-only JSDoc, framework `ctx`/`req`/`res` names, rejection of `c`, substantial sectional/local comments and the requirement to apply the entire applicable style guide for human maintenance. These explicit project conventions override conflicting nested/method JSDoc examples in the installed skill.

The [ChrisAI Coding entrypoint](../skills/chrisai-coding/SKILL.md) routes to the complete language/test guides. Its [TypeScript comment reference](../skills/chrisai-coding/references/typescript-commenting-style.md) and [React section reference](../skills/chrisai-coding/references/react-section-comments.md) give additional walkthrough/section examples. Local application evidence and known boundaries are recorded in `proofs/app-shell/tests/evidence/reviews/coding-style-redo.md`, retained separately with the proof work; that review is not an independent source of universal app requirements.
