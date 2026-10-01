# new-screen.md — new-screen

Source: `kit/docs/workflows/new-screen.md`, original lines 1–31. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Workflow: build a screen

**Goal:** a new screen in an existing OfficePress app that looks like it was drawn on the canvas.

## Steps

1. **Understand the job.** One sentence: who uses the screen and the one thing they do there. That thing gets the single primary button.

2. **Pick the closest pattern.** Use the table in [patterns.md](00030-docs-patterns-md.md). Open its reference PNG in `reference/` and its template side by side. If two patterns fit, use the simpler one.

3. **Copy, don't compose from scratch.** Copy the app's existing page (so the frame, nav and globals stay identical) and replace only `<main class="op-content">` with the template's `<main>` content.

4. **Fill with real content.** Realistic names, numbers and copy (sentence case, short). No lorem ipsum. Show realistic volume: a board with 3–8 cards per column, a table with 5–10 rows, one empty state where it would really occur.

5. **Adapt with kit classes only.** Look up anything new in [components.md](00022-docs-components-md-introduction.md). Allowed inline style: layout glue with tokens (`gap:var(--op-space-1)`, fixed column widths on the 4-point scale, progress `width:%`). If a component is genuinely missing:
   - compose it from existing classes first;
   - otherwise write it in the app stylesheet (`app.css`, after the kit CSS) with `app-` class names and only `var(--op-*)` tokens, on-scale sizes, concentric radii;
   - note it in your summary as a kit candidate.

6. **States.** Cover empty, error and disabled states for anything interactive. Destructive actions confirm in a dialog.

7. **Accessibility.** Labels on fields, `aria-label` on icon-only controls, state in ARIA attributes, real `<button>` / `<a>`.

8. **Validate.** `python3 officepress/scripts/check.py <file>` → 0 errors. Then [review.md](00033-docs-workflows-review-md.md).

## Done when

- [ ] 0 errors from `check.py`.
- [ ] One primary action per region; header globals untouched.
- [ ] Light + dark, desktop + 390 px mobile, aside expanded + collapsed all look right.
- [ ] No hard-coded colour, no new font sizes, no `op-` classes that aren't in the kit.
<!-- officepress-source:end -->
