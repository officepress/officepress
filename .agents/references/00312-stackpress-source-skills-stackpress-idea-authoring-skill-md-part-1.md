# Stackpress source: Stackpress Idea Authoring; Overview; Use This Skill For; Do Not Use This Skill For

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-idea-authoring/SKILL.md`: Stackpress Idea Authoring; Overview; Use This Skill For; Do Not Use This Skill For.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-idea-authoring/SKILL.md`; part 1/2.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-idea-authoring
description: Use when writing, extending, reviewing, or debugging Stackpress `schema.idea` files from product requirements or existing schema code, especially when choosing built-in models, relations, assertions, and generated UI metadata.
---

# Stackpress Idea Authoring

Write Stackpress idea files as Stackpress schema contracts, not as generic
parser-valid documents.

## Overview

Idea is the schema language and transport format. Stackpress is the
opinionated consumer that gives built-in meaning to a specific set of types,
attributes, assertions, and component families.

This skill optimizes for what Stackpress processes by default. Do not treat
every parser-valid Idea pattern as a good Stackpress authoring pattern.

## Use This Skill For

- drafting new `schema.idea` models from product or domain requirements
- extending existing models with Stackpress-supported fields and relations
- normalizing partial or inconsistent idea files toward canonical patterns
- debugging generated schema, SQL, admin, or view output that likely starts in
  `schema.idea`
- checking whether an attribute or component is actually built into Stackpress

## Do Not Use This Skill For

- inventing new attribute or component families by default
- teaching generic Idea plugin authoring
- extending Stackpress semantics unless the user explicitly asks for it
- solving runtime-only bugs unrelated to schema meaning

## Primary Rule

Prefer canonical Stackpress patterns over looser generic Idea forms.

- Default to Stackpress-supported built-ins.
- Use parser-level Idea docs only to understand syntax and `use` composition.
- If a construct parses but Stackpress does not process it by default, do not
  recommend it as the normal solution.
- When unsure, check Stackpress schema config before suggesting syntax.

## Mode Selection

- `Draft mode`: the input is prose requirements, domain notes, or a feature
  description.
- `Refine mode`: the input is an existing `.idea` file or a partial model.
- `Debug mode`: the input is bad generated output or behavior that may be caused
  by schema declarations.

If the input is mixed, define the target schema shape first, then patch the
existing idea file toward that shape.

## Draft Workflow

1. Identify the top-level models.
2. Separate scalar fields from relation fields.
3. Choose canonical Stackpress types first.
4. Add identity and lifecycle fields only when justified by the model.
5. Add built-in assertions that directly match the requirement.
6. Add `@field.*`, `@filter.*`, `@list.*`, `@span.*`, and `@view.*` only when
   they support likely generated behavior.
7. Prefer a practical first draft over an over-decorated schema.
8. Re-check every suggested attribute against Stackpress-supported built-ins.

## Admin Intentionality Rule

Every non-relation field should be reviewed intentionally for generated admin
surfaces.

For each field, consider:

- `@field.*`
- `@filter.*`
- `@span.*`
- `@list.*`
- `@view.*`

It is acceptable to omit any of these, but omission should be deliberate and
defensible.

Examples:

- generated or system-managed fields usually should not become editable fields
- range-style controls usually make more sense for dates and numbers
- background control fields may be searchable or filterable without needing
  prominent list or view treatment

## Refine Workflow

1. Read the existing model shape before editing.
2. Normalize it toward canonical Stackpress patterns.
3. Replace non-canonical but equivalent forms when a built-in pattern already
   exists.
4. Flag parser-valid constructs that Stackpress may not process meaningfully.
5. Tighten labels, relations, assertions, and generated UI metadata only where
   they add real downstream value.

## Debug Workflow

1. Decide whether the issue is syntax, schema meaning, or generator
   expectation.
2. Confirm that the used attributes or components are built into Stackpress.
3. Compare the model against built-in and example Stackpress schemas.
4. Distinguish:
   - valid Idea syntax
   - Stackpress-supported semantics
   - project-specific or unsupported conventions
5. Fix the schema first before assuming the generator is wrong.

## Authoring Heuristics

- Treat `schema.idea` as the source contract for schema, SQL, admin, and view
  generation.
- Prefer model-level UI metadata like `@labels(...)`, `@icon(...)`, and
  `@display(...)` because they materially improve generated admin output.
- Use `@id` for identity. Multiple `@id` fields imply composite identity.
- Use `@relation(...)` to describe relation wiring explicitly.
- Use `@is.required(...)` and related assertions when the requirement is input
  validation.
- Use `@label`, `@labels`, `@display`, and `@icon` when generated output
  benefits from display metadata.
- Use `@searchable`, `@sortable`, `@active`, `@timestamp`, `@unique`, and
  `@default(...)` only when the model behavior needs them.
- Treat generated or system-managed fields such as identifiers and lifecycle
  timestamps as non-editable by default unless the user explicitly wants them
  exposed differently.
- Prefer the canonical patterns summarized in
  `references/stackpress-idea-patterns.md`.
- Keep generic Idea flexibility in the background unless it explains a parsing
  or composition boundary.
- When a field has several attributes, prefer multi-line vertical formatting so
  the column declaration remains readable and skimmable.

## Required Checks

Before finalizing a schema recommendation:

1. Check whether the proposed attributes are built into Stackpress.
2. Check whether the relation shape matches canonical Stackpress examples.
3. Check whether the generated UI metadata is justified or just decorative.
4. Check whether the result uses Stackpress conventions instead of arbitrary
   parser-valid syntax.
5. Check whether every important field was intentionally exposed or hidden in
   generated admin behavior.

## Pre-Generate Review Gate

Before handing a schema off to generation, summarize:

- the main models
- the critical relations
- which fields are intended to be editable
- which fields are intended to be filterable or searchable
- which fields are intentionally hidden from list or view surfaces

Do not move to generation with accidental admin metadata.


````````
<!-- stackpress-source:end -->
