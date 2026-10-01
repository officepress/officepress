# Stackpress source: View Components; Type Affinities; Formatting Components; Rich Content Components

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-idea-authoring/references/view-components.md`: View Components; Type Affinities; Formatting Components; Rich Content Components.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-idea-authoring/references/view-components.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
# View Components

Use this reference for `@view.*` components that shape detail output.

## Type Affinities

Common type-to-view patterns:

- `String` -> `@view.string`, `@view.link(...)`, `@view.email(...)`,
  `@view.phone(...)`
- `Text` -> `@view.text`, `@view.markdown`, `@view.html`
- `Integer` or `Float` -> `@view.number`, `@view.price`, `@view.currency`
- `Date` or `Datetime` -> `@view.date(...)`, `@view.relative`, `@view.time(...)`
- `Hash` or `Json` -> `@view.metadata(...)`, `@view.json`
- image URLs -> `@view.image(...)`, `@view.carousel(...)`
- related scalar or relation-backed display -> `@view.template(...)`

## Formatting Components

- `@view.capitalize`
- `@view.lowercase`
- `@view.uppercase`
- `@view.comma`
- `@view.transform(...)`
- `@view.number`
- `@view.price`
- `@view.currency`
- `@view.country`
- `@view.relative`
- `@view.rel`
- `@view.date(...)`
- `@view.time(...)`
- `@view.line(...)`
- `@view.chars(...)`
- `@view.words(...)`

## Rich Content Components

- `@view.html`
- `@view.markdown`
- `@view.json`
- `@view.metadata(...)`
- `@view.code(...)`
- `@view.image(...)`
- `@view.carousel(...)`
- `@view.film(...)`
- `@view.formula(...)`
- `@view.rating(...)`

## Structural Components

- `@view.fieldset`
- `@view.list`
- `@view.ol`
- `@view.ul`
- `@view.tabular`
- `@view.spread`
- `@view.overflow`
- `@view.template(...)`

## Relation And Link Components

- `@view.rel(...)`
- `@view.link(...)`
- `@view.email(...)`
- `@view.phone(...)`

## Important Aliases

- `@view.table`
- `@view.taglist`
- `@view.clip`
- `@view.string`
- `@view.float`
- `@view.integer`
- `@view.boolean`
- `@view.datetime`
- `@view.object`
- `@view.hash`
- `@view.strings`
- `@view.texts`
- `@view.dates`
- `@view.datetimes`
- `@view.times`
- `@view.integers`
- `@view.floats`
- `@view.numbers`
- `@view.stringlist`
- `@view.textlist`
- `@view.datelist`
- `@view.datetimelist`
- `@view.timelist`
- `@view.integerlist`
- `@view.floatlist`
- `@view.numberlist`

## Prop-Heavy Definitions

### `@view.template(...)`

Required props:

- `template`

Canonical example:

```idea
@view.template({ template "{{profile.name}}" })
```

### `@view.image(...)`

Common props:

- `alt`
- `className`
- `style`

### `@view.metadata(...)`

Common props:

- `className`
- `style`

### `@view.code(...)`

Required props:

- `language`

Common optional props:

- `addDefaultStyles`
- `className`
- `langClassName`
- `langStyle`
- `numbers`
- `showLanguage`
- `showLineNumbers`
- `startingLineNumber`
- `style`

### `@view.carousel(...)`

Common props:

- `auto`
- `defaultIndex`
- `film`
- `frame`
- `hidden`
- `image`
- `repeat`
- `scroll`
- `style`
- `className`

### `@view.number`

Common props:

- `absolute`
- `decimal`
- `decimals`
- `separator`

### `@view.price`

Common props:

- `absolute`

Default formatting carries `2` decimals with standard separators.


````````
<!-- stackpress-source:end -->
