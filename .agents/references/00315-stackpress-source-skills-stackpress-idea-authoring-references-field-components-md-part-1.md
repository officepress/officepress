# Stackpress source: Field Components; Type Affinities; Common Input Components; Confirmed HTML Mappings

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-idea-authoring/references/field-components.md`: Field Components; Type Affinities; Common Input Components; Confirmed HTML Mappings.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-idea-authoring/references/field-components.md`; part 1/3.

<!-- stackpress-source:start -->
````````markdown
# Field Components

Use this reference for `@field.*` components that shape generated form inputs.

## Type Affinities

Common type-to-field patterns:

- `String` -> `@field.input(...)`, `@field.string`, `@field.email`,
  `@field.url`, `@field.phone`, `@field.password`, `@field.mask(...)`
- `Text` -> `@field.textarea`, `@field.editor(...)`, `@field.markdown`
- `Integer` or `Float` -> `@field.integer`, `@field.number`, `@field.price`
- `Date` or `Datetime` -> `@field.date`, `@field.datetime`, `@field.time`
- `Hash` or `Json` -> `@field.metadata(...)`, `@field.json`
- foreign key scalars -> `@field.relation(...)`

These are canonical pairings, not rigid rules.

## Common Input Components

- `@field.input(...)`
- `@field.textarea`
- `@field.editor(...)`
- `@field.password`
- `@field.checkbox`
- `@field.radio`
- `@field.switch`
- `@field.select`
- `@field.slider`
- `@field.suggest`
- `@field.mask(...)`
- `@field.slug`
- `@field.small`
- `@field.rating(...)`

## Confirmed HTML Mappings

- `@field.input` -> `<input>`
- `@field.textarea` -> `<textarea>`
- `@field.password` -> `<input type="password">`
- `@field.checkbox` -> `<input type="checkbox">`
- `@field.radio` -> `<input type="radio">`
- `@field.switch` -> `<input type="checkbox">`
- `@field.suggest` -> `<input type="text">`
- `@field.mask` -> `<input type="text">`
- `@field.date` -> `<input type="date">`
- `@field.datetime` -> `<input type="datetime-local">`
- `@field.time` -> `<input type="time">`
- `@field.number` -> `<input type="number">`
- `@field.integer` -> `<input type="number" step="0">`
- `@field.phone` -> `<input type="tel">`
- `@field.price` -> `<input type="number" step="0.01">`
- `@field.email` -> `<input type="email">`
- `@field.url` -> `<input type="url">`

These mappings mean familiar HTML-style props such as `placeholder`,
`required`, `disabled`, `name`, `min`, `max`, and `step` may be meaningful for
these built-ins in addition to their documented component props.

## Type-Oriented Components

- `@field.date`
- `@field.datetime`
- `@field.time`
- `@field.number`
- `@field.integer`
- `@field.json`
- `@field.markdown`
- `@field.color(...)`
- `@field.currency(...)`
- `@field.country(...)`
- `@field.phone`
- `@field.price`
- `@field.email`
- `@field.url`
- `@field.code(...)`
- `@field.file(...)`
- `@field.image(...)`

## Collection Components

- `@field.datelist(...)`
- `@field.datetimelist(...)`
- `@field.numberlist(...)`
- `@field.stringlist(...)`
- `@field.textlist(...)`
- `@field.timelist(...)`
- `@field.filelist(...)`
- `@field.imagelist(...)`
- `@field.tags`

## Relation And Structure Components

- `@field.fieldset`
- `@field.relation(...)`
- `@field.metadata(...)`

## Important Aliases

- `@field.string`
- `@field.text`
- `@field.float`
- `@field.boolean`
- `@field.object`
- `@field.hash`
- `@field.taglist`
- `@field.strings`
- `@field.texts`
- `@field.dates`
- `@field.datetimes`
- `@field.times`
- `@field.integers`
- `@field.integerlist`
- `@field.floats`
- `@field.floatlist`
- `@field.numbers`
- `@field.numberlist`

## Prop-Heavy Definitions

### `@field.input(...)`

Common props:

- `className`
- `placeholder`
- `style`

### `@field.integer`

Common props:

- `absolute`
- `className`
- `min`
- `max`
- `separator`
- `style`

### `@field.number`

Common props:

- `absolute`
- `className`
- `decimal`
- `min`
- `max`
- `separator`
- `step`
- `style`


````````
<!-- stackpress-source:end -->
