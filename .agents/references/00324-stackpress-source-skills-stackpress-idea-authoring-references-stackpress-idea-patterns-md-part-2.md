# Stackpress source: Pattern 7: Field, Filter, List, Span, And View Metadata; Pattern 8: Document The Schema Inline; Pattern 9: Composite And Join Models; Pattern 10: Split Large Schemas With `use`

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md`: Pattern 7: Field, Filter, List, Span, And View Metadata; Pattern 8: Document The Schema Inline; Pattern 9: Composite And Join Models; Pattern 10: Split Large Schemas With `use`.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## Pattern 7: Field, Filter, List, Span, And View Metadata

Stackpress commonly maps one field into several generated surfaces:

- `@field.*` for editor/input behavior
- `@filter.*` for filter UI behavior
- `@span.*` for inline or compact display behavior
- `@list.*` for tabular/list output
- `@view.*` for detail output

Canonical rule:

- add only the surfaces that the model obviously needs
- avoid decorating every field with every family by default

## Pattern 8: Document The Schema Inline

Stackpress examples regularly include:

- `@description("...")`
- `@examples(...)`

Use these when the schema is a durable contract and the metadata will help
generated docs, admin understanding, or future maintenance.

## Pattern 9: Composite And Join Models

Join-like models often use composite identity through multiple `@id` fields.

Typical shape:

- `categoryId String @id`
- `articleId String @id`
- relation object fields for both ends

This is a strong canonical pattern for many-to-many link tables in Stackpress.

## Pattern 10: Split Large Schemas With `use`

The live inventory example shows a larger schema decomposed into multiple
`use` imports for enums, types, and models.

Use this pattern when the schema grows large enough that:

- models become hard to scan
- enums and reusable types deserve their own files
- domain areas are easier to maintain as separate idea modules

Keep the split organized around domain boundaries, not arbitrary file count.

## Anti-Patterns

- inventing attributes because the parser would preserve them
- using parser-valid syntax that has no Stackpress built-in meaning
- placing relation semantics only in naming instead of `@relation(...)`
- decorating every field with every display family before the model is stable
- assuming generated output should infer intent that the schema never declared

## Recommended Modeling Order

When drafting a model:

1. define the model purpose
2. choose the scalar fields
3. define relation keys and relation object fields
4. add validation
5. add search, sort, and uniqueness hints
6. add field and view metadata that supports generated output
7. add descriptions and examples where the contract benefits

## Formatting Rule

When a field has a long attribute list, format it vertically for readability.

Use tab-friendly column alignment:

- align field types to a shared visual column across the model block
- use at least two spaces between the field name and the type
- if needed, add one more space so the type lands on a more tab-friendly even
  column
- size the spacing against the longest field name in the block so the type
  column stays consistent
- once the type column is aligned, indent attributes underneath so tab and
  shift-tab adjustments stay predictable

Canonical style:

```idea
title   String
        @label("Title")
        @searchable
        @field.string
        @is.required("Title is required")
        @list.string
        @view.string
```

Prefer this over dense one-line attribute chains when the field carries
multiple behaviors.

````````
<!-- stackpress-source:end -->
