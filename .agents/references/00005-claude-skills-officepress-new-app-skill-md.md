# SKILL.md — SKILL

Source: `kit/.claude/skills/officepress-new-app/SKILL.md`, original lines 1–23. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when reviewing inherited kit instructions or recreating its tooling; this is source evidence, not an active instruction file.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~markdown
---
name: officepress-new-app
description: Scaffold a new OfficePress app from the UI Kit — vendored kit, branded first screen, agent instructions and skills — and validate it.
when_to_use: Use when asked to create, start or scaffold a new OfficePress app or project, or to update the vendored kit inside an existing app. Only available in the kit repository (needs scripts/new_app.py).
argument-hint: "[app name] [family] [output folder]"
allowed-tools: Read, Bash(python3:*)
---

# Scaffold an OfficePress app

Request: $ARGUMENTS

Follow `docs/workflows/new-app.md` in this kit.

1. **Confirm inputs** — app name, family (`communicate` · `create` · `operate` · `commerce`), output folder, starting template (default `app-board`; options in `docs/patterns.md`). Known apps and their families are in `docs/guidelines.md` §01; for a new app, ask the user for the family — never guess it.
2. **Check the target.** If the output folder already has an `officepress/` folder, this is an update: run `python3 scripts/new_app.py --update --out <folder>` and stop.
3. **Scaffold:**
   ```bash
   python3 scripts/new_app.py --name "<Name>" --family <family> --template <template> --out <folder>
   ```
   If it warns about a missing product mark, tell the user (a mark has to be designed on the canvas — see `docs/logos.md`).
4. **Validate:** `python3 <folder>/officepress/scripts/check.py <folder>` → 0 errors.
5. **Hand over:** list the created files and the next steps (replace nav items, build screens with `/officepress-screen`, review with `/officepress-review`). The app's own `AGENTS.md`, `CLAUDE.md` and `.claude/skills` are already in place.
~~~~
<!-- officepress-source:end -->
