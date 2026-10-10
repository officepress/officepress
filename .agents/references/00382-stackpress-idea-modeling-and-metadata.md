# Stackpress idea modeling and metadata

Owner: [Agent guidelines](../context/stackpress-logic-patterns.md). Load when composing schemas, wiring relations or selecting assertions and generated UI metadata.

These are accepted agent guidelines, with source mechanisms and illustrative application policies distinguished in each section. Examples are excerpts unless stated otherwise; import `action` from the supported server package for default action modules. Preserve the installed application’s import types and rendering owner.

<a id="r26"></a>

## R26. Compose existing schema definitions instead of restating them

Use package Idea imports for built-in models and split larger schemas by domain responsibility using use. Composition of schema sources is separate from runtime plugin activation.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```idea
use "stackpress/stackpress.idea"
use "./plugins/catalog/schema.idea"
```

Root schema composition reuses package definitions and app-owned domain files. Runtime plugin activation is a separate manifest concern.

Sources: [skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md, line 16](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md#L16); [skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md, line 204](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md#L204).

<a id="r27"></a>

## R27. Parser validity does not establish Stackpress semantics

Use confirmed types, attributes, assertions and component families. Idea accepts open metadata; the appropriate schema/SQL/view/admin/AI consumer supplies its meaning. Do not recommend an invented namespace merely because it parses.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```idea
@labels("Catalog item", "Catalog items")
@display("{{name}}")
@icon("box")
```

Metadata excerpt before a model declaration. These are documented attribute families; a newly invented namespace would still need a real consumer even if the parser accepts it.

Sources: [skills/stackpress-idea-authoring/references/stackpress-builtins.md, line 6](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-idea-authoring/references/stackpress-builtins.md#L6); [.agents/context/modeling-and-generation.md, line 16](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/modeling-and-generation.md#L16).

<a id="r28"></a>

## R28. Model relation keys and relation objects explicitly

Pair scalar foreign keys with relation object fields specifying local/foreign mapping. Put relation picker/filter metadata on the scalar input; the relation object carries structural wiring. Multiple id fields support composite/join identity.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```idea
authorId String
author Profile
  @relation({ local "authorId" foreign "id" })
```

Relation illustration from the supported family; scalar input and relation object have different roles. Confirm exact model names and relation metadata against the target schema before use.

Sources: [skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md, line 127](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md#L127); [skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md, line 192](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-idea-authoring/references/stackpress-idea-patterns.md#L192).

<a id="r29"></a>

## R29. Choose UI roles and assertions intentionally

Review editable, filterable, compact, tabular and detail roles independently. Supported widget props are not substitutes for input assertions or database constraints. System-managed identifiers/timestamps normally remain non-editable; optional metadata roles should reflect requirements.

Basis: Explicit guidance. Accepted for agent guidance on 2026-10-10; apply the scope below.

```text
Field review:
- Is it editable?
- Is it searchable/filterable?
- Does it belong in tabular or detail output?
- What input assertion and database constraint apply?
```

A field's display widget does not replace business validation or a database constraint. This is a review checklist, not Idea syntax.

Sources: [skills/stackpress-idea-authoring/SKILL.md, line 114](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/skills/stackpress-idea-authoring/SKILL.md#L114); [.agents/context/modeling-and-generation.md, line 70](https://github.com/stackpress/stackpress/blob/a71d683051ba8350fdd12d6b5a33f268fdcc285f/.agents/context/modeling-and-generation.md#L70).
