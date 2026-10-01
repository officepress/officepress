# Stackpress source: Rich Content Components; Structural Components; Relation And Link Components; Derived Families And Aliases

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `docs/idea-reference.md`: Rich Content Components; Structural Components; Relation And Link Components; Derived Families And Aliases.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `docs/idea-reference.md`; part 4/4.

<!-- stackpress-source:start -->
````````markdown
### Rich Content Components

- `html`
- `markdown`
- `json`
- `metadata`
- `code`
- `image`
- `carousel`

Use these when a value should render as richer content than plain text.

```idea
body Text @view.markdown
```

### Structural Components

- `list`
- `ol`
- `ul`
- `tabular`
- `spread`
- `overflow`
- `template`

Use these when the output should render as a collection, table, overflow view, or reusable template pattern.

```idea
tags String[] @view.list
```

### Relation And Link Components

- `rel`
- `link`
- `email`
- `phone`

Use these when the value should render as a navigable or related output.

```idea
website String @view.link
```

## Derived Families And Aliases

Stackpress derives some component families automatically:

- `filter` and `span` families derive from field components
- `list` families derive from view components

Stackpress also exposes aliases so common conceptual names map to built-in components. Examples include:

- field aliases such as `string`, `text`, `boolean`, `taglist`
- view aliases such as `table`, `clip`, `string`, `taglist`

These aliases let idea files express intent using names closer to the final UI or display behavior.

## Related

 - [Schema](./schema.md)
 - [Types](./types.md)
 - [Idea Files](../guides/300/310-idea-files.md)

````````
<!-- stackpress-source:end -->
