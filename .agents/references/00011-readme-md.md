# README.md — README

Source: `kit/README.md`, original lines 1–68. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# OfficePress UI Kit

The OfficePress design system as plain HTML, CSS and JavaScript: one core stylesheet, four family themes, light and dark, Lucide icons, the suite and product logos, complete screen templates, a linter, and documentation written for both people and AI agents.

No build step, no dependencies. Open `index.html` in a browser.

## What's inside

| | |
|---|---|
| `index.html` | Kit home: templates, live tokens with a family switcher, components, logos, icons |
| `templates/` | 10 app screens + 6 auth pages, each a complete page you can copy |
| `css/` | `officepress.css` (core) + `families/*.css` (colour per family) |
| `js/` | `icons.js` (sprite) + `officepress.js` (aside, popovers, agent, mode, tabs, dialogs…) |
| `icons/`, `logos/`, `tokens/` | Lucide subset, SVG logos, DTCG tokens |
| `docs/` | Guidelines, component catalogue, patterns, iconography, logos, workflows |
| `scripts/` | `check.py` (lint), `new_app.py` (scaffold), `build_icons.py` (icons) |
| `reference/` | Snapshots of the canvas designs |
| `AGENTS.md`, `CLAUDE.md`, `llms.txt`, `.claude/` | Instructions, skills and a reviewer subagent for AI agents |

## Use it

```bash
# start an app (copies the kit into ../accounting/officepress and sets up agent files)
python3 scripts/new_app.py --name "Accounting" --family operate --out ../accounting

# check your work against the guidelines
python3 ../accounting/officepress/scripts/check.py ../accounting

# later: refresh the app's copy of the kit
python3 scripts/new_app.py --update --out ../accounting
```

A page needs:

```html
<html lang="en" data-mode="light">
<link rel="stylesheet" href="officepress/css/officepress.css">
<link rel="stylesheet" href="officepress/css/families/operate.css" id="op-family">
<script src="officepress/js/icons.js" defer></script>
<script src="officepress/js/officepress.js" defer></script>
```

…and the markup from a template. Read [docs › guidelines.md](00026-docs-guidelines-md-introduction.md) for the rules and [docs › components.md](00022-docs-components-md-introduction.md) for the classes.

## Families

| Family | Apps | Accent |
|---|---|---|
| Communicate | Inbox · Chat · Meet · Calendar · Support · Agent | blue `#2F5BEA` |
| Create | Drive · Tables · Forms · Whiteboards · Diagrams · Content | purple `#6A3BE4` |
| Operate | Resourcing · Procurement · Accounting · Approvals · Clients · Sign | orange `#E2551B` |
| Commerce | Products · Orders · Inventory · Payments · Fulfillments | green `#0F8F6A` |

## Working with AI agents

- **Any agent** (Codex, Cursor, Copilot, Claude Code…) reads `AGENTS.md`: the map, the ten rules, and how to validate.
- **Claude Code** also gets skills: `/officepress-screen`, `/officepress-review`, `/officepress-new-app`, plus `officepress-ui`, which loads automatically, and the `officepress-ui-reviewer` subagent. Scaffolded apps get the same skills and their own `AGENTS.md`.
- **Tools that read `llms.txt`** get an index of the docs.
- The linter is the agent's guardrail. It catches hard-coded colours, off-scale sizes, invented `op-` classes, unknown icons, header order and missing labels. `--json` gives machine output.

To use the skills in every project rather than only here, copy `.claude/skills/officepress-*` to `~/.claude/skills/`. They find the kit at `./officepress/` or the project root.

## Source of truth

The designs live in the Pencil file `officepress.pen`. When the canvas changes, update the CSS and tokens here, run `python3 scripts/check.py --kit`, and refresh `reference/`.

Icons: [Lucide](https://lucide.dev), ISC licence (`icons/LICENSE`).
<!-- officepress-source:end -->
