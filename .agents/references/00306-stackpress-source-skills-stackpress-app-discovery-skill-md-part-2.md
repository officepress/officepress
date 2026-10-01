# Stackpress source: 4. Main User Flows; 5. Auth Model; 6. Admin Needs; 6.5. Shared Infrastructure Versus Feature Concerns

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-app-discovery/SKILL.md`: 4. Main User Flows; 5. Auth Model; 6. Admin Needs; 6.5. Shared Infrastructure Versus Feature Concerns.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-app-discovery/SKILL.md`; part 2/3.

<!-- stackpress-source:start -->
````````markdown
### 4. Main User Flows

Identify the most important user actions.

Examples:

- browse catalog
- search and filter
- sign up and sign in
- add to cart
- checkout
- review past orders
- manage profile

If a flow is central to the app, it should be named explicitly here.
Treat examples as illustrative flow patterns, not a prescribed product map.

### 5. Auth Model

Clarify whether the app needs:

- guest browsing
- optional accounts
- required accounts
- role separation such as admin vs customer
- special signup or approval rules

This is needed early because Stackpress baseline behavior already includes auth
and session concepts that may need shaping later.

### 6. Admin Needs

Clarify what staff or admins must manage.

Examples:

- products and inventory
- orders
- customer accounts
- reviews or moderation
- content blocks
- promotions

This strongly affects which models need richer metadata in `schema.idea`.
Treat examples as illustrative admin-surface patterns, not required admin
modules.

### 6.5. Shared Infrastructure Versus Feature Concerns

Clarify what belongs to:

- shared app infrastructure
- storage or infra plugins
- feature ownership

This gives the router and scaffold skills a cleaner starting point later.

### 7. Custom Runtime Behavior

Identify behavior that likely needs runtime plugin work.

Examples:

- payment gateway integration
- email notifications
- webhook handling
- moderation workflows
- external inventory sync
- custom approval logic

These are routing signals for `stackpress-plugin-router`, not implementation
tasks yet.
Treat examples as illustrative runtime patterns, not default assumptions for
every Stackpress app.

### 8. Custom Pages or App Surfaces

Identify any important pages beyond generated defaults.

Examples:

- branded homepage
- listing or detail pages
- dashboard pages
- checkout or booking flow pages
- account dashboard
- informational utility pages

This helps the coordinator distinguish schema-only work from route/view work.
Treat examples as illustrative page-surface patterns, not a literal route
checklist.

### 9. Scaffold Values

Before discovery ends, collect or derive:

- app name
- package name
- brand name
- port

These are the required inputs for `stackpress-app-scaffold`.

## Good Discovery Output

The final discovery brief should be short, concrete, and structured around:

1. app summary
2. audience
3. core entities
4. main flows
5. auth and roles
6. admin responsibilities
7. custom behavior signals
8. custom page signals
9. scaffold values
10. project shape classification

This brief should read like a handoff artifact, not a brainstorming transcript.

## Escalation Rules

If the request is still too vague after initial clarification:

- ask the next highest-value question
- avoid moving into scaffold or schema work

If the request is very detailed already:

- summarize it into the discovery brief
- identify any remaining critical unknowns only

If the request spans too many independent products:

- decompose it into one primary app first
- keep discovery focused on the first build target

## When to Stop and Ask

Stop discovery closure and ask another question when:

- the likely core entities are still unclear
- the main user flows are still missing
- auth expectations are still ambiguous
- admin needs are still implicit
- the app name, package name, brand name, or port are still unresolved

Do not declare discovery complete if the next skill would still need to guess.

## Anti-Rationalization Checks

Before ending discovery, ask:

- do I know what the app fundamentally is?
- do I know who the main users are?
- do I know the likely models?
- do I know the critical flows?
- do I know whether auth is guest, optional, or required?
- do I know what custom behavior may require plugins?
- do I have the four scaffold values?

If not, discovery is not done.


````````
<!-- stackpress-source:end -->
