# Stackpress source: Core References; Common Mistakes; Response Pattern

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-idea-authoring/SKILL.md`: Core References; Common Mistakes; Response Pattern.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-idea-authoring/SKILL.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## Core References

- `references/stackpress-builtins.md`
- `references/stackpress-idea-patterns.md`

Use these as the primary reference set:

- Stackpress built-ins define the default semantic contract.
- Pattern references show how Stackpress authors real schema files.

Use the broader Idea specs only for:

- declaration syntax
- literal and object syntax
- `use` composition and merge behavior

## Common Mistakes

- treating Idea as only a database schema language
- treating Idea as only a storage contract instead of a generated admin/view
  contract
- inventing attributes because the parser would accept them
- using generic Idea flexibility where Stackpress expects specific built-ins
- over-specifying field or view metadata before the model shape is stable
- under-specifying field or view metadata when generated admin output is part of
  the requirement
- debugging runtime output before checking `schema.idea`
- assuming a generator bug when the schema is using unsupported conventions

## Response Pattern

When helping with idea files, structure the answer around:

1. the target schema shape
2. the built-in Stackpress conventions being used
3. the drafted or corrected model blocks
4. any unsupported or non-canonical patterns that were avoided

````````
<!-- stackpress-source:end -->
