# Stackpress source: Stackpress AI

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-ai/SKILL.md`: Stackpress AI.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-ai/SKILL.md`; part 1/1.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-ai
description: Alias for stackpress-router. Use when a task is about Stackpress and an agent should route the request to the appropriate Stackpress skill.
---

# Stackpress AI

This skill is an alias for `stackpress-router`.

When this skill triggers, immediately follow the `stackpress-router` workflow:

1. Determine whether the task is Stackpress-related.
2. Inspect minimal local context when routing depends on project files.
3. Select the narrowest matching Stackpress specialist skill.
4. Hand off to that skill instead of duplicating its instructions.

If `stackpress-router` is unavailable in the current environment, use the local
Stackpress skill list and choose the closest specialist skill directly.

````````
<!-- stackpress-source:end -->
