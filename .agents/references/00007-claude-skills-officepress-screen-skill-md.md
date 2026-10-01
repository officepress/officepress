# SKILL.md — SKILL

Source: `kit/.claude/skills/officepress-screen/SKILL.md`, original lines 1–23. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when reviewing inherited kit instructions or recreating its tooling; this is source evidence, not an active instruction file.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~markdown
---
name: officepress-screen
description: Build a complete new screen in an OfficePress app from the closest kit template — pattern choice, realistic content, states, lint and visual check.
when_to_use: Use when asked to create, design or mock up a new page/screen/view for an OfficePress app (board, list, table, builder, form, chat, settings, auth, detail page). For small edits to an existing screen, officepress-ui is enough.
argument-hint: "[what the screen is for]"
---

# Build an OfficePress screen

Request: $ARGUMENTS

Follow `KIT/docs/workflows/new-screen.md` (`KIT` = `officepress/` in an app, else the project root). Load the `officepress-ui` rules first if they aren't already in context.

## Steps

1. **Job & primary action.** Write one sentence: who uses this screen and the one thing they do. If the request doesn't make the app, family or purpose clear, ask before building.
2. **Pattern.** Choose from `KIT/docs/patterns.md`. State which template you're starting from and why (one line). Look at its reference PNG if available.
3. **Frame.** Copy an existing page of this app (preferred) or the template. Keep aside, header globals, popovers, agent panel and scrim. Set `<title>`, `.op-header__title`, `aria-current` on the right nav item.
4. **Content.** Replace `<main class="op-content">`. Realistic names, numbers and dates; sentence case; 3–8 cards per column / 5–10 table rows; one primary action.
5. **States.** Empty (`.op-empty`), error (`.op-notice`, `aria-invalid` + `.op-field__error`), disabled; destructive actions through a `<dialog class="op-dialog">` with type-to-confirm when irreversible.
6. **Lint.** `python3 KIT/scripts/check.py <file>` → fix until 0 errors.
7. **Look.** If a browser/screenshot tool is available, check desktop 1440 and mobile 390, light and dark (`?mode=dark`), and compare with the reference PNG. Fix what's off.
8. **Report.** File(s) created, template used, lint result, what you verified visually, kit candidates (anything you had to build in `app.css`).
~~~~
<!-- officepress-source:end -->
