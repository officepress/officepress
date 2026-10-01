# Stackpress source: Stackpress App Coordinator; Overview; Use This Skill For; Do Not Use This Skill For

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-app-coordinator/SKILL.md`: Stackpress App Coordinator; Overview; Use This Skill For; Do Not Use This Skill For.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-app-coordinator/SKILL.md`; part 1/3.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-app-coordinator
description: Use when an agent needs to build a Stackpress app from a product request by coordinating scaffold, schema, generation, plugin, and verification phases across specialized Stackpress skills.
---

# Stackpress App Coordinator

Coordinate Stackpress app creation as a phased workflow.

This skill is the manager. It owns sequencing, questions, handoffs, and phase
gates. It should not absorb implementation work that already belongs to a more
specific Stackpress skill.

## Overview

Sequence first, implementation second.

The coordinator keeps the build moving in the right order, stops weak handoffs,
and routes work to narrower Stackpress skills instead of improvising across
layers.

This skill must preserve the real goal of the project. Some Stackpress work is
mainly about delivering end-user behavior. Some Stackpress work is mainly about
demonstrating architecture, plugin boundaries, or generation patterns. The
coordinator should keep that distinction explicit because it changes what
"correct" sequencing and verification look like.

## Use This Skill For

- turning a plain-English app request into a staged Stackpress build workflow
- deciding when to scaffold, author schema, generate, write plugins, and verify
- keeping multi-step Stackpress work from happening out of order
- routing implementation to the correct Stackpress specialist skill

## Do Not Use This Skill For

- directly authoring `schema.idea`
- directly scaffolding plugin files when `stackpress-plugin-scaffold` applies
- directly implementing generator transforms when
  `stackpress-plugin-idea-generator` applies
- replacing lower-level skills with a giant one-skill workflow

## Primary Rule

Delegate downward whenever a narrower Stackpress skill already fits the next
step.

The coordinator decides what happens next. Specialist skills decide how that
step is performed.

## Local Context Rule

Do not infer app purpose from names alone.

- verify what an app, template, or plugin is really for by inspecting local
  config, schema, plugins, and existing routes
- treat folder names, package names, or template names as hints, not as proof
- if local context contradicts the name, follow the local context

## Architecture Goal Rule

If the project is intended to teach or demonstrate Stackpress architecture,
keep that goal explicit through the whole workflow.

Examples:

- a sample whose main point is plugin separation
- a sample whose main point is schema-driven generation
- a sample whose main point is infrastructure versus feature ownership

Do not let architecture-teaching goals collapse into a generic app build just
because the feature flow is familiar.

## Local Database Rule

Prefer the app's normal local database target when it uses a file-backed
database in `.build`.

- if the project already uses a file-based local database such as SQLite or
  PGlite through its normal Yarn workflow, use that existing target by default
- do not create an ad hoc second file-backed local database unless there is a
  concrete reason
- alternate scratch databases are more acceptable for server-based database
  setups, where isolation may be operationally cleaner
- if you intentionally diverge from the app's default database target, say why

## Sample Data Rule

Prefer config-driven sample data when the app already supports it and the seed
records are static.

- use config population for simple sample rows that do not need custom runtime
  logic
- do not invent or preserve plugin `populate.ts` scripts when config-driven
  population is the cleaner default for the app
- only route sample data into custom populate code when the data setup needs
  logic that config alone cannot express

## The Gate Rule

```text
DO NOT ADVANCE THE WORKFLOW ON GUESSWORK
```

If the current phase is incomplete, ambiguous, or unverified, stop and resolve
that phase before moving on.

## Workflow Phases

Run the app build through these phases in order:

1. discovery
2. scaffold
3. schema
4. generate
5. implementation routing
6. verification
7. optional polish

Do not skip forward unless the current phase is actually complete.

Treat polish as optional. The workflow can finish after verification when the
app is already presentable enough for the user's goal.

## Phase Responsibilities

### 1. Discovery

Collect only the information needed to make the first safe implementation
decisions.

At minimum, clarify:

- app concept and audience
- core entities
- main user flows
- auth requirements
- admin requirements
- custom pages or special runtime behavior
- whether the project is mainly a product app, a teaching sample, or an
  architecture sample

Prefer one question at a time when the request is still vague.

### 2. Scaffold

When the target is a new app in an empty folder, hand off to:

- `stackpress-app-scaffold`

Only do this once the coordinator has enough values for:

- app name
- package name
- brand name
- port

Do not let scaffold invent domain behavior.

### 3. Schema

When the baseline app exists and the domain model is clear enough, hand off to:

- `stackpress-idea-authoring`

The goal of this phase is a concrete `schema.idea` that matches the app's
product requirements closely enough for generation to be meaningful.

Do not move to generation with a hand-wavy schema.


````````
<!-- stackpress-source:end -->
