# SKILL.md — SKILL

Source: `kit/.claude/skills/officepress-review/SKILL.md`, original lines 1–35. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when reviewing inherited kit instructions or recreating its tooling; this is source evidence, not an active instruction file.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~markdown
---
name: officepress-review
description: Review OfficePress UI against the guidelines — run the kit linter, check rendered states, apply the design checklist, and return a PASS/FIX verdict with fixes.
when_to_use: Use when asked to review, audit, check or QA OfficePress HTML/CSS, before finishing any OfficePress UI task, or when the user asks "does this follow the guidelines?".
argument-hint: "[file or folder]"
allowed-tools: Read, Grep, Glob, Bash(python3:*)
---

# Review OfficePress UI

Target: $ARGUMENTS (default: files changed in this session, or the current folder).

`KIT` = `officepress/` in an app, else the project root. The full procedure is `KIT/docs/workflows/review.md`; this is the short form.

1. **Lint.** `python3 KIT/scripts/check.py --json <target>`. Every `E` is a finding. Any `op-allow` / `data-op-allow` without a reason is a finding.
2. **Render** (if a browser tool is available): default, `?mode=dark`, `?family=<another family>` (anything that keeps its old colour is hard-coded), `?aside=collapsed`, `?agent=open`, `?open=pop-user`, and 390 px wide. Compare with `KIT/reference/` when present. If no browser is available, say so.
3. **Checklist** — read the markup for what the linter can't see:
   - frame and header globals identical to the templates;
   - one primary action per region, buttons named by outcome;
   - `.op-section` / dividers instead of nested cards;
   - hierarchy by weight and colour, not new sizes;
   - concentric radii; shadows for raised surfaces, borders only for structure/state;
   - links `--op-accent-text`, primary fills `--op-accent-strong`, unread `--op-dot`;
   - empty / error / disabled states; destructive actions confirmed;
   - labels, `aria-label`s, `alt`s, state in ARIA; sentence case, real content.
4. **Verdict** in this format, most severe first, each finding with the exact class/token fix:

```
Verdict: PASS | FIX
Lint: <n> errors, <n> warnings
1. [rule] path:line — problem → fix
Kit candidates: …
```

Don't rewrite the files during a review unless asked; if asked to fix, fix and re-run step 1.
~~~~
<!-- officepress-source:end -->
