# Stackpress source: 3. Route to Runtime Plugin Work When; 4. Route to Route/View Work When; Route To Config When; Mixed Cases

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-plugin-router/SKILL.md`: 3. Route to Runtime Plugin Work When; 4. Route to Route/View Work When; Route To Config When; Mixed Cases.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-plugin-router/SKILL.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## 3. Route to Runtime Plugin Work When

The feature is request-time, event-time, or service wiring logic that does not
belong in schema-driven generation.

Common signals:

- register or resolve an event at runtime
- connect a service during `config`
- add listeners during `listen`
- integrate with email, payments, webhooks, or third-party APIs
- perform business logic on demand
- handle auth/session/runtime decisions that are not just model metadata

Use next:

- `stackpress-plugin-scaffold`

Do not route here for static sample data when config can express it directly.

Examples:

- "Send an email when an order is placed."
- "Register a payment gateway client from config."
- "Add a webhook listener for inventory updates."

Do not move repeated model-driven code here just because runtime feels familiar.
Treat examples as illustrative runtime patterns, not default integrations.

## 4. Route to Route/View Work When

The main need is exposing or presenting behavior through pages.

Common signals:

- add a route
- bind a route to a page handler
- add a React view under `views/`
- create a page with custom layout or content
- pair `server.import.get(...)` with `server.view.get(...)`

Use next:

- `stackpress-plugin-scaffold` if the plugin shell or route wiring does not
  exist yet
- `stackpress-plugin-views` for the handwritten page and route/view pairing
  work

Examples:

- "Add a branded home page."
- "Create a custom checkout page."
- "Expose a profile dashboard route."

Treat examples as illustrative page-surface patterns, not literal route
defaults.

## Route To Config When

The request is really a configuration concern rather than plugin logic.

Common signals:

- static sample data for local population
- local brand, route, or environment values that the app already expresses in
  config
- defaults that belong to the app shell rather than a feature plugin

Use next:

- update the app's existing config file in the normal local pattern

Do not create plugin code when the app already has a clear config lane for the
same concern.

## Mixed Cases

Many real features span more than one lane.

Split them instead of forcing a single implementation style.

When a feature is really a multi-step user flow, decompose it across the lanes
that actually own it instead of putting the whole flow into one plugin by
convenience.

Examples:

- "Add product reviews."
  - schema lane: review model, relations, validations
  - route/view lane: product review pages
  - runtime lane: moderation or notification events

- "Build a multi-entity browsing flow."
  - schema lane: entity, grouping, and relationship metadata
  - generation lane: repeated generated helpers if the pattern is model-driven
  - route/view lane: listing and detail pages

- "Add a multi-step user flow."
  - schema lane: the records and transitions the flow depends on
  - runtime lane: orchestration, external integrations, or side effects
  - route/view lane: the route surfaces that expose the flow

Architecture-oriented samples should be decomposed the same way even when the
end-user flow is intentionally minimal.
Treat examples as illustrative decomposition patterns, not literal app types.

## Anti-Rationalization Checks

Before choosing runtime code, ask:

- is this really missing data structure?
- should this repeat per model?
- would generation remove duplication?

Before choosing generation, ask:

- is the output really derived from schema?
- does this need many emitted files or registries?
- is this more than a one-off route or listener?

Before choosing route/view work, ask:

- is this just a page surface for a deeper schema or runtime gap?

Before choosing a shared plugin as the owner, ask:

- is this really shared infrastructure?
- is this actually a feature concern that deserves its own plugin?

## When to Stop and Re-Route

Stop and re-evaluate the lane when:

- the requested behavior changes the domain contract mid-implementation
- the same pattern is starting to repeat across many models
- route/view work is exposing a missing schema decision
- runtime code is compensating for missing generated artifacts

Do not keep adding code in the wrong lane once the mismatch is visible.

## Handoff Patterns

Good handoffs:

- "This belongs in `schema.idea` because sizes, stock, and brand are model
  fields. Use `stackpress-idea-authoring` to extend the product model."
- "This belongs in runtime plugin code because order confirmation email is a
  `listen` or event-driven concern. Use `stackpress-plugin-scaffold`."
- "This belongs in a generation plugin because the same helper should be
  emitted for every searchable model. Use `stackpress-plugin-scaffold` for the
  plugin shell, then `stackpress-plugin-idea-generator`."
- "This belongs in handwritten page-view work because the route already points
  at a custom page under `views/`. Use `stackpress-plugin-views`."

Bad handoffs:

- "Probably a plugin."
- "Maybe generated."
- "Let's just add a route and see."

## Common Mistakes

- solving missing models with runtime hacks
- generating one-off behavior that should stay handwritten
- putting generation logic into `listen` or `route`
- treating page work as only frontend work when route registration is also
  required
- forcing a multi-lane feature into one plugin hook
- choosing the fastest patch instead of the correct layer
- centralizing feature ownership inside a shared or infrastructure plugin

````````
<!-- stackpress-source:end -->
