# Stackpress source: Stackpress Plugin Router; Overview; Use This Skill For; Do Not Use This Skill For

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-router/SKILL.md`: Stackpress Plugin Router; Overview; Use This Skill For; Do Not Use This Skill For.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-router/SKILL.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-plugin-router
description: Use when an agent needs to decide whether a Stackpress feature belongs in `schema.idea`, handwritten plugin runtime code, route and view code, or a generation plugin transform.
---

# Stackpress Plugin Router

Route Stackpress feature work to the correct implementation lane before writing
code.

This skill is a classifier and handoff skill. It should decide where a feature
belongs, explain why, and invoke the narrower Stackpress skill that should own
the implementation.

## Overview

Choose the correct layer before writing code.

Most bad Stackpress implementations come from solving a schema problem in
runtime code, a runtime problem in generation, or a route/view problem without
the right underlying contract.

## Use This Skill For

- deciding whether a requested feature is schema work or plugin work
- deciding whether plugin work belongs in runtime hooks or generation
- deciding whether page and route work is just route wiring or model-driven
  generation
- preventing the agent from solving the same problem in the wrong layer

## Do Not Use This Skill For

- directly writing `schema.idea`
- directly scaffolding plugins unless routing is already settled
- directly implementing `transform/index.ts`
- acting as a generic project planner beyond the feature-routing decision

## Primary Rule

Route the feature to the highest-leverage correct layer.

That usually means:

- schema first when the missing behavior is really missing domain structure
- generation when output should be derived from schema repeatedly
- runtime when the behavior is request-time or event-time logic
- route/view work when the main need is page exposure or page presentation

Do not choose a lower layer just because it feels faster to patch.

## Plugin Ownership Rule

Classify plugin ownership before choosing the implementation lane.

Common ownership types:

- infrastructure plugin
- shared app plugin
- feature plugin
- generation plugin

Do not treat a shared or infrastructure plugin as the default owner for feature
logic.

## Routing Gate

```text
DO NOT IMPLEMENT UNTIL THE FEATURE HAS A CLEAR LANE
```

If the lane is still ambiguous, keep classifying. Wrong-lane fixes create
fragile code and rework.

## Output Format

For each routing decision, produce:

1. the chosen lane
2. why that lane is correct
3. what artifact should be created or changed
4. what Stackpress skill should handle it next

If the request spans multiple lanes, split it explicitly instead of forcing one
lane to do everything.

## Routing Order

Evaluate the feature in this order:

1. schema question
2. generation question
3. runtime question
4. route/view question

This order matters because many runtime patches are really schema or generation
problems in disguise.

## Sample Data Routing Rule

When the task is about sample or starter data, classify whether it belongs in
config before routing it into custom plugin code.

- static sample rows for a template or starter app usually belong in config
- custom populate scripts should be reserved for seed behavior that needs
  runtime logic, conditional creation, external input, or more than simple data
  declaration
- do not route static template seed data into plugin runtime code just because
  a `populate.ts` file would be familiar

## Ownership Checks

Before finalizing the lane, ask:

- is this infrastructure, shared app behavior, or feature ownership?
- is one plugin absorbing this only because no better home was chosen yet?
- should this concern stay isolated so other plugins can compose around it?

## 1. Route Back to Schema When

The request changes the app's domain contract.

Common signals:

- a new entity or model is needed
- a field is missing
- a relation is missing or wrong
- validations or assertions belong to the data contract
- generated admin output is weak because labels, icons, or display metadata are
  missing
- search, sort, required, unique, default, active, or timestamp behavior should
  come from model semantics

Use next:

- `stackpress-idea-authoring`

Examples:

- "Products need sizes and stock counts."
- "Orders should belong to profiles and shipping addresses."
- "The admin list should show a better label for this model."

Do not solve these with ad hoc runtime fields or one-off page code.
Treat examples as illustrative routing patterns, not literal model requirements
or preferred domains.

## 2. Route to Generation Plugin Work When

The feature should be emitted from schema metadata or repeated per model.

Common signals:

- the same pattern should be created for many models
- generated client helpers, registries, or pages should be derived from models
- package exports need to include generated surfaces
- runtime behavior depends on generated artifacts instead of one handwritten
  file
- the feature belongs in `stackpress generate` rather than request-time logic

Use next:

- `stackpress-plugin-scaffold` if the plugin shell does not exist yet
- `stackpress-plugin-idea-generator` for the transform implementation

Examples:

- "Generate helper files for every publishable model."
- "Emit a registry of searchable catalog models from schema metadata."
- "Create generated page modules for a repeated model-driven pattern."

Do not route here for one-off routes or simple runtime listeners.
Treat examples as illustrative generation patterns, not literal generated
artifacts every app should have.


````````
<!-- stackpress-source:end -->
