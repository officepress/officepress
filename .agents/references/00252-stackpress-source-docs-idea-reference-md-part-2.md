# Stackpress source: `@generated`; `@hashed`; `@id`; `@searchable`

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `docs/idea-reference.md`: `@generated`; `@hashed`; `@id`; `@searchable`.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `docs/idea-reference.md`; part 2/4.

<!-- stackpress-source:start -->
````````markdown
### `@generated`

- Scope: column/field
- Kind: flag
- Purpose: marks the field as generated so validation can be bypassed for user input.
- Affects:
  - validation flow
  - generated form/action behavior

### `@hashed`

- Scope: column/field
- Kind: flag
- Purpose: marks the field as one-way hashed.
- Affects:
  - storage behavior
  - generated create/update handling

### `@id`

- Scope: column/field
- Kind: flag
- Purpose: marks the identifier field for the model. More than one `@id` creates a composite identifier.
- Affects:
  - uniqueness and model identity
  - generated store/detail/update/remove behavior

### `@searchable`

- Scope: column/field
- Kind: flag
- Purpose: marks the field as participating in search behavior and optimization decisions.
- Affects:
  - generated search flows
  - SQL optimization/indexing intent

### `@sortable`

- Scope: column/field
- Kind: flag
- Purpose: marks the field as participating in sorting behavior and optimization decisions.
- Affects:
  - generated sort flows
  - SQL optimization/indexing intent

### `@label(...)`

- Scope: column/field
- Kind: method
- Purpose: gives the field a display label different from its raw field name.
- Arguments:
  - required display label string
- Affects:
  - forms
  - generated UI
  - admin/search/filter labels

### `@min(...)`

- Scope: column/field
- Kind: method
- Purpose: defines the minimum accepted numeric value.
- Arguments:
  - required number
- Affects:
  - validation
  - database type decisions

### `@max(...)`

- Scope: column/field
- Kind: method
- Purpose: defines the maximum accepted numeric value.
- Arguments:
  - required number
- Affects:
  - validation
  - database type decisions

### `@step(...)`

- Scope: column/field
- Kind: method
- Purpose: defines the numeric increment amount used for the field.
- Arguments:
  - required number
- Affects:
  - UI control behavior
  - database type decisions

### `@relation(...)`

- Scope: column/field
- Kind: method
- Purpose: maps a local column to a related model column.
- Arguments:
  - required relation object with:
    - `local`
    - `foreign`
    - optional `name`
- Example:

```idea
profileId String @relation({ local: "profileId", foreign: "id", name: "profile" })
```

- Affects:
  - generated relation metadata
  - SQL joins
  - generated form/filter/view relation behavior

### `@timestamp`

- Scope: column/field
- Kind: flag
- Purpose: updates the field automatically whenever a row changes.
- Affects:
  - generated update behavior
  - timestamp maintenance

### `@unique`

- Scope: column/field
- Kind: flag
- Purpose: prevents duplicate values for the field.
- Affects:
  - validation
  - SQL uniqueness behavior

## Assertions

Assertions live under the `@is.*` family. They validate values before Stackpress writes or processes them.

### Presence And Equality

- `@is.required`
- `@is.ne`
- `@is.unique`
- `@is.eq(...)`
- `@is.neq(...)`
- `@is.option(...)`
- `@is.regex(...)`

Use these to require a value, disallow empty values, enforce uniqueness, compare against a fixed value, restrict values to a set of options, or require a specific format.

```idea
title String @is.required("Title is required") @is.regex("^[a-zA-Z0-9\\s]+$")
```

### Date And Time

- `@is.date`
- `@is.future`
- `@is.past`
- `@is.present`

Use these for date correctness and date-relative rules.

```idea
published Date @is.future("Published date must be in the future")
```

### Numeric Comparison

- `@is.gt(...)`
- `@is.ge(...)`
- `@is.lt(...)`
- `@is.le(...)`

Use these when the field value itself must compare against a numeric boundary.

```idea
price Float @is.gt(0, "Price must be greater than zero")
```


````````
<!-- stackpress-source:end -->
