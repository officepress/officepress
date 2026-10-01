# components.md — Dialog; Responsive & motion utilities; JavaScript hooks (`js/officepress.js`)

Source: `kit/docs/components.md`, original lines 489–528. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Page skeleton; Layout helpers; Type; Icons, images, avatars; App frame](00022-docs-components-md-introduction.md) · [Buttons; Form controls; Choice controls; Badges, pills, status; Toolbar, board, cards](00023-docs-components-md-buttons.md) · [Sections, rows, key-value; Popovers, menus, notifications; Agent panel; Tables, stats; Workflow board & designer; Builders (automation, form, template); Chat; Settings pages; Auth pages](00024-docs-components-md-sections-rows-key-value.md) · [Dialog; Responsive & motion utilities; JavaScript hooks (`js › officepress.js`)](00025-docs-components-md-dialog.md)

<!-- officepress-source:start -->
## Dialog

```html
<button class="op-btn op-btn--danger" type="button" data-dialog-open="dlg-purge">Purge data</button>

<dialog class="op-dialog" id="dlg-purge" aria-labelledby="dlg-purge-t">
  <form method="dialog">
    <div class="op-dialog__head"><h2 class="op-heading" id="dlg-purge-t">Purge your Inbox data?</h2><p class="op-muted">This removes your cards and drafts from Inbox. It can't be undone.</p></div>
    <div class="op-dialog__body"><div class="op-field"><label class="op-field__label" for="f-confirm">Type PURGE to confirm</label><input class="op-input" id="f-confirm" placeholder="PURGE" data-confirm-text="PURGE"></div></div>
    <div class="op-dialog__foot"><button class="op-btn op-btn--secondary" type="button" data-dialog-close>Cancel</button><button class="op-btn op-btn--danger-solid" type="submit" data-confirm disabled>Purge data</button></div>
  </form>
</dialog>
```

## Responsive & motion utilities

- Breakpoint: **768 px** (mobile below). Chat details hide below 1280 px.
- `.op-desktop-only`, `.op-mobile-only`.
- `.op-no-motion` on `<html>` suppresses transitions until first paint (added by the head script, removed by JS). Don't add it yourself.
- `prefers-reduced-motion` turns off press scale and transitions.

## JavaScript hooks (`js/officepress.js`)

| Attribute | Effect |
|---|---|
| `data-action="toggle-aside"` | Desktop: expanded ↔ rail (saved per `body[data-app]`). |
| `data-action="open-aside"` / `"close-aside"` | Mobile overlay. |
| `data-action="toggle-agent"` | Agent panel; syncs `aria-pressed`. |
| `data-action="toggle-mode"` | Light ↔ dark; saves `localStorage["op-mode"]`; updates `aria-label`. |
| `data-action="close-overlays"` | Scrim click. |
| `data-action="toggle-details"` | Chat details panel. |
| `data-popover="id"` | Toggles `.op-popover#id`. |
| `role="tablist"`, `.op-segmented`, `role="switch"`, `.op-chip[aria-pressed]`, `.op-otp` | See [Choice controls](00023-docs-components-md-buttons.md#choice-controls). |
| `data-dialog-open="id"`, `data-dialog-close` | `<dialog>` open / close. |
| `data-confirm-text="WORD"` + `data-confirm` | Type-to-confirm. |
| `data-copy="text"` | Copies to the clipboard; sets `data-copied` for 1.5 s (pair with `.op-swap`). |

**Review URL params** (for screenshots and QA, any page): `?family=operate&mode=dark&aside=collapsed&agent=open&open=pop-user`.

Behaviour you add (fetching, drag and drop, saving) goes in your own script; keep the same pattern — read state from ARIA/data attributes, write state back to them, let the CSS render it.
<!-- officepress-source:end -->
