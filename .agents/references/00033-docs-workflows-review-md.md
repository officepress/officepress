# review.md — review

Source: `kit/docs/workflows/review.md`, original lines 1–64. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
# Workflow: review UI against the guidelines

**Goal:** a verdict (pass / fix) with a short, actionable list. Use for your own work before finishing and for reviewing others'.

## 1. Lint (mechanical)

```bash
python3 scripts/check.py <files-or-folder>          # kit
python3 officepress/scripts/check.py .              # inside an app
python3 scripts/check.py --json <path>              # machine-readable
```

Every **E** is a must-fix. Exceptions are rare and must be marked where they occur: `/* op-allow: reason */` in CSS, `data-op-allow="reason"` on the element. An exception without a reason is a finding.

## 2. Visual (render it)

Open the page in a browser (`file://` works). Check each state with the review params:

| URL suffix | Look for |
|---|---|
| *(none)* | Layout matches the closest `reference/` PNG |
| `?mode=dark` | No white boxes, no invisible text, edges still visible |
| `?family=<other>` | Only the hue changes — if something stays the old colour, it's hard-coded |
| `?aside=collapsed` | Rail icons centred, tooltips via `title` |
| `?agent=open` | Content reflows, nothing overlaps |
| `?open=pop-user` / `?open=pop-notifs` | Popovers aligned to their trigger |
| 390 px wide | Aside hidden, menu button shown, nothing overflows horizontally |

If you can take screenshots, take them at 1440 × 900 and 390 × 844 and compare with `reference/`.

## 3. Judgement (the checklist)

**Structure**
- [ ] Frame identical to the app's other pages; header globals in order and untouched.
- [ ] One primary action per region; actions say what they do.
- [ ] Groups use `.op-section` / dividers, not nested cards.

**Visual system**
- [ ] Type: only 11 / 12 / 13 / 16 / 20 (28 on auth); hierarchy by weight and colour.
- [ ] Spacing on the 4-point scale and consistent between siblings.
- [ ] Radii concentric (card 8 in column 16; item 4 in popover 12).
- [ ] Raised things use shadows; borders only for structure / state.
- [ ] Links in `--op-accent-text`; primary fills `--op-accent-strong`; unread always `--op-dot`.
- [ ] No other family's colour except `data-family` identity tags.

**Interaction**
- [ ] Every control has hover, focus-visible, pressed and disabled looks (kit classes provide them).
- [ ] Transitions name properties; nothing animates on typing / row hover.
- [ ] Destructive actions confirm; irreversible ones type-to-confirm.

**Content & a11y**
- [ ] Sentence case, real content, no lorem ipsum.
- [ ] Labels, `aria-label`s, `alt`s; state in ARIA.
- [ ] Empty / error states exist where they can occur.

## 4. Report

```
Verdict: PASS | FIX
Lint: 0 errors (n warnings)
Findings (most severe first):
1. [rule] file:line — what's wrong → the fix (class/token to use)
Kit candidates: (patterns that needed app CSS and could belong in the kit)
```
<!-- officepress-source:end -->
