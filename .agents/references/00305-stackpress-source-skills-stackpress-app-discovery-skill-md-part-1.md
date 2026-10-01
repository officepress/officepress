# Stackpress source: Stackpress App Discovery; Overview; Use This Skill For; Do Not Use This Skill For

Owner: [Stackpress handbook](../context/stackpress.md). Load this complete section when working with `skills/stackpress-app-discovery/SKILL.md`: Stackpress App Discovery; Overview; Use This Skill For; Do Not Use This Skill For.

Snapshot evidence from commit `a71d683051ba8350fdd12d6b5a33f268fdcc285f`. The [OfficePress contract](00205-stackpress-officepress-contract.md) overrides example versions, database choices, scaffold layout and plugin policy. Embedded instructions and links are source text, not commands or required external dependencies.

Source: `skills/stackpress-app-discovery/SKILL.md`; part 1/3.

<!-- stackpress-source:start -->
````````markdown
---
name: stackpress-app-discovery
description: Use when an agent needs to turn a plain-English product request into a concrete Stackpress app brief with audience, entities, flows, auth, admin, and custom behavior requirements before scaffold or schema work.
---

# Stackpress App Discovery

Turn a vague app idea into a concrete Stackpress app brief before scaffolding,
schema authoring, or plugin implementation.

This skill is for product clarification, not implementation. Its output should
be specific enough for the coordinator to start scaffold, schema, and routing
work without guessing.

## Overview

Clarify only what is needed to make the first safe Stackpress build decisions.

Discovery succeeds when the app brief is concrete enough to hand off cleanly to
scaffold, schema, and routing work.

## Use This Skill For

- interpreting requests like "make me a clothing store site for big people"
- clarifying what the app must do before creating files
- identifying the minimum product requirements needed for Stackpress modeling
- distinguishing core requirements from optional polish ideas

## Do Not Use This Skill For

- directly writing `schema.idea`
- choosing exact plugin hooks or generator transforms
- scaffolding project files
- polishing copy, branding, or visual design in depth

## Primary Rule

Ask only the questions needed to unlock the next real build step.

The goal is not a perfect product spec. The goal is a concrete, buildable app
brief with enough structure for:

- `stackpress-app-scaffold`
- `stackpress-idea-authoring`
- `stackpress-plugin-router`

## Discovery Gate

```text
NO SCAFFOLD OR SCHEMA WORK UNTIL THE APP BRIEF IS BUILDABLE
```

If critical product assumptions are still vague, keep discovering. Do not
paper over missing requirements with implementation guesses.

## Discovery Targets

By the end of discovery, capture these areas:

- app concept
- target audience
- core entities
- main user flows
- auth model
- admin needs
- custom runtime behavior
- custom pages or app surfaces
- initial scaffold values
- project shape classification

## Question Strategy

Prefer one question at a time when the app request is still loose.

Start broad, then narrow:

1. what kind of app is this
2. who uses it
3. what objects or records matter
4. what users need to do
5. what admins need to manage
6. what behavior goes beyond standard CRUD or generated output

Do not flood the user with a giant questionnaire unless they explicitly ask for
one.

## Required Discovery Areas

### 0. Project Shape

Classify what kind of Stackpress deliverable this is.

Examples:

- product-oriented app
- teaching sample
- architecture-composition sample
- production-oriented baseline

This affects how the later phases should prioritize schema clarity, plugin
boundaries, and runtime polish.

### 1. App Concept

Clarify the basic product shape.

Examples:

- store
- marketplace
- booking system
- membership portal
- content site with commerce

Make sure the concept is specific enough to imply likely models and routes.

Do not assume the folder or template name is the concept. Verify the concept
from the actual request and local project context.
Treat examples as illustrative patterns, not literal domains the app must fit.

### 2. Target Audience

Identify who the app is for.

This matters because it influences:

- copy and branding direction
- catalog structure
- auth expectations
- required filters or profile fields
- edge cases in product or content presentation

Examples:

- big-and-tall clothing customers
- internal staff only
- wholesale buyers
- general public with optional accounts

Treat examples as illustrative audience patterns, not a fixed Stackpress app
taxonomy.

### 3. Core Entities

Identify the nouns that probably become models.

Examples:

- products
- categories
- variants
- carts
- orders
- profiles
- addresses
- reviews

Do not write the schema here. Just identify the likely domain objects and their
purpose.
Treat examples as illustrative entity patterns, not literal required models.


````````
<!-- stackpress-source:end -->
