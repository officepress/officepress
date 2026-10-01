# Stackpress source: 7. Route/View Workflow; 8. Architecture Sample Workflow; 9. Existing App Change Workflow; 10. Verification / Repair Workflow

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-workflow-router/references/workflow-catalog.md`: 7. Route/View Workflow; 8. Architecture Sample Workflow; 9. Existing App Change Workflow; 10. Verification / Repair Workflow.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-workflow-router/references/workflow-catalog.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## 7. Route/View Workflow

Use when a route and handwritten TSX view are the main change.

Sequence:

1. confirm route/view lane
2. inspect `server.import.*` and `server.view.*` pairing
3. implement or revise `pages/*.ts`
4. implement or revise `views/*.tsx`
5. verify rendered route and browser-safe imports

Specialist skills:

- `stackpress-plugin-pages-events`
- `stackpress-plugin-views`
- `stackpress-app-verification`

Best for public pages, account pages, custom admin-adjacent pages, and pages
that need custom layout rather than generated admin UI.

## 8. Architecture Sample Workflow

Use when the app's main purpose is to demonstrate Stackpress architecture.

Sequence:

1. state the architecture lesson explicitly
2. define plugin and layer boundaries before implementation
3. add boundary tests under the owning plugin's `tests/` folder when possible
4. implement only enough app behavior to prove the lesson
5. verify that the code still teaches the intended boundary

Specialist skills:

- `stackpress-app-coordinator`
- `stackpress-plugin-router`
- `stackpress-plugin-scaffold`
- `stackpress-app-verification`

Best for examples that demonstrate plugin separation, schema-driven generation,
runtime hooks, or source/generated/runtime boundaries.

Risk: architecture samples can become generic apps. Keep the teaching
goal visible.

## 9. Existing App Change Workflow

Use when modifying an existing Stackpress app.

Sequence:

1. inspect local source-of-truth files
2. classify the task by source layer
3. preserve existing plugin and config patterns
4. make the narrowest source change
5. regenerate only when source inputs require it
6. verify affected behavior

Specialist skills:

- `stackpress-plugin-router`
- `stackpress-idea-authoring`
- `stackpress-plugin-pages-events`
- `stackpress-plugin-views`
- `stackpress-app-verification`

Best for incremental work in a real app or template.

## 10. Verification / Repair Workflow

Use when the current state is uncertain or broken.

Sequence:

1. identify the failing phase
2. inspect source-of-truth files
3. inspect generated output only as evidence
4. run the smallest useful verification command
5. fix source input or plugin code
6. rerun verification

Specialist skills:

- `stackpress-app-verification`
- `stackpress-plugin-router`
- specialist skill for the failing layer

Best for broken generation, stale client types, route failures, database state
problems, missing plugin registration, or unexpected runtime behavior.

````````
<!-- stackpress-source:end -->
