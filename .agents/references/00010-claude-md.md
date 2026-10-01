# CLAUDE.md — CLAUDE

Source: `kit/CLAUDE.md`, original lines 1–12. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when reviewing inherited kit instructions or recreating its tooling; this is source evidence, not an active instruction file.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~markdown
@AGENTS.md

## Claude Code

Project skills in `.claude/skills/`:

- `officepress-ui` — the rules; loads automatically when you work on HTML/CSS here.
- `/officepress-screen <what it's for>` — build a new screen from the closest template.
- `/officepress-review [path]` — lint + checklist + PASS/FIX verdict.
- `/officepress-new-app <name> <family> <folder>` — scaffold an app (kit repo only).

Subagent: `officepress-ui-reviewer` — delegate a read-only review after building UI.
~~~~
<!-- officepress-source:end -->
