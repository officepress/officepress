# llms.txt — llms

Source: `kit/llms.txt`, original lines 1–34. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when reviewing inherited kit instructions or recreating its tooling; this is source evidence, not an active instruction file.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~text
# OfficePress UI Kit

> Vanilla HTML/CSS/JS design system for the OfficePress back-office suite: one app frame, op-* classes, op-* colour tokens themed by family (communicate, create, operate, commerce) × mode (light, dark), Lucide icons, product logos, screen templates and a Python linter. Compose from the kit; never hard-code colours or off-scale sizes.

Start with AGENTS.md. Validate with `python3 scripts/check.py <path>` (0 errors required).

## Rules and reference

- [AGENTS.md](AGENTS.md): map of the kit, the ten rules, validation
- [Guidelines](docs/guidelines.md): theming, colour tokens, type, spacing, shape, components, app frame, motion, accessibility, voice
- [Components](docs/components.md): every op-* class with markup and the JS data-attribute hooks
- [Patterns](docs/patterns.md): which template to start from for each kind of screen; recipes; anti-patterns
- [Iconography](docs/iconography.md): Lucide sprite usage, sizes, house icon vocabulary, adding icons
- [Logos](docs/logos.md): suite mark, lockups, product marks and where each goes

## Workflows

- [New app](docs/workflows/new-app.md): scaffold with scripts/new_app.py
- [New screen](docs/workflows/new-screen.md): build a screen from a template
- [Review](docs/workflows/review.md): lint, render states, checklist, verdict format
- [Theming](docs/workflows/theming.md): families, dark mode, app CSS, token changes

## Machine-readable

- [tokens/tokens.json](tokens/tokens.json): DTCG tokens with CSS variable names and family × mode values
- [icons/icons.json](icons/icons.json): available icon names
- [logos/logos.json](logos/logos.json): logo files by family and app
- [reference/reference.json](reference/reference.json): canvas snapshots

## Optional

- [templates/](templates/): complete screens (app-board, workflow-board, workflow-designer, automations, automation-builder, form-builder, message-template, chat, settings-account, settings-app-theme, settings-app-updates, auth/*)
- [css/officepress.css](css/officepress.css): core stylesheet, 23 sections
- [js/officepress.js](js/officepress.js): behaviour
~~~~
<!-- officepress-source:end -->
