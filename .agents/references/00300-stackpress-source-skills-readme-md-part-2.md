# Stackpress source: Scaffold Skill Note; Updating Skills; Goal

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/README.md`: Scaffold Skill Note; Updating Skills; Goal.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/README.md`; part 2/2.

<!-- stackpress-source:start -->
````````markdown
## Scaffold Skill Note

`stackpress-app-scaffold` includes an embedded scaffold snapshot in its
`assets/template/` folder.

That snapshot is self-contained on purpose so the skill does not depend on
repo-specific folders like `templates/` existing in the target environment.

The repository CLI can copy that same scaffold into an empty project folder:

```bash
npx github:stackpress/stackpress create
```

## Updating Skills

If you change a skill:

- update `SKILL.md` first
- update any related `references/` or `assets/`
- keep the folder self-contained
- treat `agents/openai.yaml` as secondary metadata, not the primary
  documentation

## Goal

These skills exist to support this high-level flow:

1. describe an app in plain English
2. clarify the requirements
3. scaffold the app
4. model the domain in `schema.idea`
5. generate Stackpress output
6. add runtime or generation plugins where needed
7. verify the app phase-by-phase

That is the intended system-level use of this skill set.

````````
<!-- stackpress-source:end -->
