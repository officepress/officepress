# new-app.md — new-app

Source: `kit/docs/workflows/new-app.md`, original lines 1–36. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Workflow: start a new OfficePress app

**Goal:** a new app folder with the kit vendored, branded for the app, passing `check.py`.

## Inputs to confirm (ask if not given)

1. **App name** — e.g. "Accounting".
2. **Family** — `communicate` · `create` · `operate` · `commerce`. Known apps are listed in [guidelines §01](00026-docs-guidelines-md-introduction.md#01-how-theming-works). Never guess a new app's family from its colour — ask.
3. **Output folder** — e.g. `../accounting`.
4. **First screen** — which template is closest (see [patterns.md](00030-docs-patterns-md.md)). Default `app-board`.

## Steps

1. **Scaffold**
   ```bash
   python3 scripts/new_app.py --name "Accounting" --family operate --template app-board --out ../accounting
   ```
   This writes `../accounting/index.html`, vendors the kit into `../accounting/officepress/` (css, js, logos, docs, linter, icons manifest), copies the agent skills to `../accounting/.claude/`, and writes `../accounting/AGENTS.md`. If it warns that there's no product mark, tell the user (see [logos.md](00029-docs-logos-md.md)).

2. **Navigation** — replace the `.op-nav` groups in `.op-aside` with the app's real sections. Keep `.op-brand`, the search (or remove it if the app has nothing to search) and the footer. Pick icons from `officepress/icons/icons.json`; add missing ones with `build_icons.py --add` in the kit.

3. **First screen** — replace everything inside `<main class="op-content">` following [new-screen.md](00032-docs-workflows-new-screen-md.md). Keep the header globals, popovers, agent panel and scrim exactly as they are.

4. **Agent copy** — set the agent starters (`.op-agent__starter`) to three things this app's agent can actually do.

5. **Settings & auth** — copy `templates/settings-account.html`, `settings-app-theme.html`, `settings-app-updates.html` and `templates/auth/` into the app when needed, and run them through the same name/family replacement (or re-run `new_app.py --template settings-account --out …/settings-tmp` and move the file).

6. **Validate** — `python3 officepress/scripts/check.py .` from the app folder. Fix every error. Then run the [review workflow](00033-docs-workflows-review-md.md).

## Done when

- [ ] `check.py` reports 0 errors.
- [ ] Exactly one family stylesheet, matching the app's family.
- [ ] Brand mark, app name, `<title>`, `data-app`, agent name all say the app's name.
- [ ] The page works in light and dark (`?mode=dark`), aside collapsed (`?aside=collapsed`) and at 390 px wide.
- [ ] Nothing in `officepress/` was edited.
<!-- officepress-source:end -->
