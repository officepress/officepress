# Stackpress source: Workflow Catalog; 1. Linear App Build; 2. Schema-First Change; 3. Contract-First Parallel Plugin Build

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-workflow-router/references/workflow-catalog.md`: Workflow Catalog; 1. Linear App Build; 2. Schema-First Change; 3. Contract-First Parallel Plugin Build.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-workflow-router/references/workflow-catalog.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
# Workflow Catalog

Load only the workflow card needed for the task.

## 1. Linear App Build

Use for a new or straightforward Stackpress app.

Sequence:

1. discovery
2. scaffold
3. schema
4. generate
5. plugin routing
6. implementation
7. verification

Specialist skills:

- `stackpress-app-discovery`
- `stackpress-app-scaffold`
- `stackpress-idea-authoring`
- `stackpress-plugin-router`
- `stackpress-app-verification`

Best when the user wants a normal app and parallel plugin work is not yet
needed.

## 2. Schema-First Change

Use when the meaningful change starts in `schema.idea`.

Sequence:

1. inspect current schema and affected generated surfaces
2. revise `schema.idea`
3. run project generation command
4. inspect generated type or client output
5. push or migrate database when needed
6. verify dependent plugins and views

Specialist skills:

- `stackpress-idea-authoring`
- `stackpress-app-verification`

Best for fields, models, relations, validators, admin display metadata, or
generated list/view/filter behavior.

## 3. Contract-First Parallel Plugin Build

Use when multiple local plugins can be developed independently after shared
contracts are stable.

Sequence:

1. discovery
2. schema contract
3. generation gate
4. plugin ownership map
5. cross-plugin contract map
6. parallel plugin lanes
7. integration pass
8. verification pass

Contracts to stabilize before parallel work:

- models and generated types
- route names and methods
- event names and payloads
- shared response shapes
- config access rules
- seed data needed by more than one plugin

Specialist skills:

- `stackpress-app-coordinator`
- `stackpress-idea-authoring`
- `stackpress-plugin-router`
- `stackpress-plugin-scaffold`
- `stackpress-plugin-pages-events`
- `stackpress-plugin-views`
- `stackpress-app-verification`

Best for apps where separate local plugins own different domains, user
journeys, integrations, or infrastructure responsibilities while sharing schema,
generated output, routes, events, or config.

## 4. Vertical Slice Build

Use when the fastest learning comes from one complete user journey.

Sequence:

1. choose one narrow user journey
2. add only the schema needed for that journey
3. generate and push
4. implement route handler, view, and seed data for that journey
5. verify runtime behavior
6. expand to the next slice

Specialist skills:

- `stackpress-app-coordinator`
- `stackpress-idea-authoring`
- `stackpress-plugin-router`
- `stackpress-plugin-pages-events`
- `stackpress-plugin-views`
- `stackpress-app-verification`

Best for prototypes, uncertain app requirements, or demos where visible
behavior should guide later modeling.

Risk: repeated schema churn can disrupt parallel work. Switch to
Contract-First Parallel Plugin Build once contracts become clear.

## 5. Generator-First Build

Use when repeated output should be emitted from schema metadata.

Sequence:

1. prove the feature is model-derived and repeated
2. define schema metadata or built-in attributes needed by generation
3. scaffold or inspect the generation plugin
4. implement `idea` hook and `transform/`
5. emit generated files into configured client/build output
6. reconnect runtime to generated artifacts
7. verify generated output and consuming runtime behavior

Specialist skills:

- `stackpress-plugin-router`
- `stackpress-plugin-scaffold`
- `stackpress-plugin-idea-generator`
- `stackpress-app-verification`

Best for reusable model dashboards, generated registries, repeated pages,
client helpers, tool definitions, or exports derived from `schema.idea`.

Risk: over-generation. Do not choose this for one-off handwritten behavior.

## 6. Runtime Plugin Extension

Use when the work is app-specific runtime behavior.

Sequence:

1. classify plugin ownership
2. scaffold or inspect plugin shape
3. choose lifecycle hook: `config`, `listen`, `route`, or event handler
4. implement page/event/runtime behavior
5. update route registration and config access when needed
6. verify the smallest reachable behavior

Specialist skills:

- `stackpress-plugin-router`
- `stackpress-plugin-scaffold`
- `stackpress-plugin-pages-events`
- `stackpress-plugin-views`
- `stackpress-app-verification`

Best for route handlers, server events, integrations, request/session logic,
redirects, service registration, and feature-specific runtime flows.


````````
<!-- stackpress-source:end -->
