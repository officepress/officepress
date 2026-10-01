# Stackpress source: Stackpress Idea Patterns; Primary Examples; Pattern 1: Package Composition With `use`; Pattern 2: Model-Level Display Metadata

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md`: Stackpress Idea Patterns; Primary Examples; Pattern 1: Package Composition With `use`; Pattern 2: Model-Level Display Metadata.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
# Stackpress Idea Patterns

Use this reference to model new `schema.idea` files after canonical
Stackpress patterns that already exist in the repo.

## Primary Examples

- built-in auth and profile-oriented schemas
- built-in API and application-oriented schemas
- a blog-style content schema
- a larger inventory-style schema split across multiple `use` files

Use these as the first examples to imitate before reaching for generic Idea
patterns.

## Pattern 1: Package Composition With `use`

Stackpress schemas commonly compose built-in package schemas through `use`.

Examples:

- `use "stackpress-session/schema.idea"`
- `use "stackpress/stackpress.idea"`

Use this pattern when the schema should extend an existing Stackpress package
surface instead of restating shared models locally.

## Pattern 2: Model-Level Display Metadata

Canonical Stackpress models often include:

- `@labels("Singular" "Plural")`
- `@display("{{name}}")`
- `@icon("user")`
- `@query("*" "relation.*")` when generated consumers need richer defaults

Use these when admin, search, or generated view output benefits from explicit
display metadata.

These are highly recommended for admin generation:

```idea
@labels("Comment", "Comments")
@icon("comment")
@display("{{comment}}")
```

## Pattern 3: Explicit Identity And Lifecycle Fields

Common recurring fields include:

- `id String @id @default("cuid()")`
- `active Boolean @default(true) @active`
- `created Datetime @default("now()")`
- `updated Datetime @default("now()") @timestamp`

Do not add these mechanically to every model, but treat them as canonical
Stackpress defaults when the model needs identity, soft-delete behavior, or
timestamps.

Recommended default model baseline:

```idea
id        String
          @label("ID")
          @id @default("cuid()")
          @list.clip({ length 10 hellip true })
          @description("Unique generated identifier.")
          @examples("dz7tg8bcf7e2lig3iuej3pjf")

active    Boolean
          @label("Active")
          @default(true) @active
          @filter.switch
          @view.yesno
          @description("Special flag to indicate active rows. Inactive rows are not shown in the list view, but can be viewed in the detail view.")
          @examples(true)

created   Datetime
          @label("Created")
          @default("now()") @sortable
          @list.date("m d, Y h:iA")
          @view.date("m d, Y h:iA")
          @description("Generated timestamp when row was created.")
          @examples("2025-10-01T12:00:00Z")

updated   Datetime
          @label("Updated")
          @default("now()") @timestamp @sortable
          @list.date("m d, Y h:iA")
          @view.date("m d, Y h:iA")
          @description("Generated timestamp that is updated whenever the row has changed.")
          @examples("2025-10-01T12:00:00Z")
```

Treat `id`, `active`, `created`, and `updated` as the default recommended
starter set for most models.

## Pattern 3A: Optional Utility Fields

These are common optional utility fields that are often worth suggesting:

```idea
tags        String[]
            @label("Tags")
            @default([])
            @field.taglist
            @list.taglist({ warning true pill true className "frui-mr-md" })
            @view.taglist({ warning true pill true className "frui-mr-md" })
            @description("Arbitrary tags for general use.")
            @examples(["top buyer" "verified" "moderator"])

references  Hash?
            @label("References")
            @default({})
            @field.metadata({ add "Add Reference" })
            @view.metadata({ className "frui-pt-md frui-pr-md frui-pb-md frui-pl-md"})
            @description("Arbitrary key/value references for general use.")
            @examples({ fbid "abc123" })
```

Suggest these when:

- the model would benefit from generic tagging
- the model needs flexible key/value metadata without a fully fixed shape

## Pattern 4: Relation Pairing

Canonical relation modeling usually pairs:

- a scalar relation key such as `profileId String`
- a relation field such as `profile Profile @relation({ local "profileId" foreign "id" })`

Generated UI metadata often stays on the scalar key field:

- `@field.relation(...)`
- `@filter.relation(...)`
- `@list.template(...)`
- `@view.template(...)`

The relation object field then carries the structural `@relation(...)`.

## Pattern 5: Validation On Input Fields

Use input-oriented assertions on the scalar field that the user edits.

Common patterns:

- `@is.required("...")`
- `@is.cge(...)`
- `@is.slug(...)`
- `@is.email(...)`

Prefer direct, requirement-matching assertions over piling on redundant checks.

## Pattern 6: Search, Sort, And Uniqueness Hints

Canonical Stackpress uses field hints intentionally:

- `@searchable` for search-oriented text fields
- `@sortable` for fields commonly sorted in generated views
- `@unique` for uniqueness constraints with downstream meaning

Use these because the model behavior needs them, not because they look
complete.


````````
<!-- stackpress-source:end -->
