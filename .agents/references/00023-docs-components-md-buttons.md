# components.md — Buttons; Form controls; Choice controls; Badges, pills, status; Toolbar, board, cards

Source: `kit/docs/components.md`, original lines 167–326. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Page skeleton; Layout helpers; Type; Icons, images, avatars; App frame](00022-docs-components-md-introduction.md) · [Buttons; Form controls; Choice controls; Badges, pills, status; Toolbar, board, cards](00023-docs-components-md-buttons.md) · [Sections, rows, key-value; Popovers, menus, notifications; Agent panel; Tables, stats; Workflow board & designer; Builders (automation, form, template); Chat; Settings pages; Auth pages](00024-docs-components-md-sections-rows-key-value.md) · [Dialog; Responsive & motion utilities; JavaScript hooks (`js › officepress.js`)](00025-docs-components-md-dialog.md)

<!-- officepress-source:start -->
## Buttons

```html
<button class="op-btn op-btn--primary" type="button">Save</button>
<button class="op-btn op-btn--secondary" type="button"><svg class="op-icon op-icon--15">…plus…</svg>New rule</button>
<button class="op-btn op-btn--danger" type="button" data-dialog-open="dlg-delete">Delete</button>
<button class="op-btn op-btn--danger-solid" type="submit" data-confirm disabled>Delete account</button>
<button class="op-btn op-btn--ghost" type="button">Skip</button>
<button class="op-btn op-btn--link op-btn--compact" type="button">Mark all read</button>
<a class="op-btn op-btn--secondary op-btn--compact" href="#">Edit</a>

<div class="op-split">
  <button class="op-btn" type="submit"><svg class="op-icon op-icon--15">…send…</svg>Send</button>
  <button class="op-btn" type="button" aria-label="More send options"><svg class="op-icon op-icon--15">…chevron-down…</svg></button>
</div>

<button class="op-icon-btn" type="button" aria-label="Filter"><svg class="op-icon">…</svg></button>
<button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14">…</svg></button>
```

| Class | Use |
|---|---|
| `.op-btn--primary` | The one main action of a region. |
| `--secondary` | Everything else. |
| `--danger` | Starts a destructive flow (opens a confirm dialog). |
| `--danger-solid` | The final confirm inside the dialog only. |
| `--ghost`, `--link` | Low-emphasis / inline actions. |
| `--compact` 32 · `--small` 28 · `--large` 44 (auth) · `--block` full width | Size. Default 36. |
| `.op-split` | Primary + menu pair (Send ▾). Uses primary colours. |
| `.op-icon-btn` | 36 square icon button. `--circle` (header globals), `--outline`, `--muted`, `--compact` 32, `--small` 28. `__dot` = unread dot. |
| `.op-theme-btn` | The mode toggle (cross-fades sun/moon). |
| `data-static` | On any pressable: disables the 0.96 press scale (dense lists). |

## Form controls

```html
<div class="op-field">
  <label class="op-field__label" for="f-name">Name <span class="op-req">*</span></label>
  <input class="op-input" id="f-name" value="Mila Reyes">
  <span class="op-field__hint">Shown on your profile.</span>
</div>

<div class="op-field">
  <label class="op-field__label" for="f-email">Email</label>
  <div class="op-input-group">
    <svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-mail"/></svg>
    <input class="op-input" id="f-email" aria-invalid="true">
    <span class="op-input-group__end"><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Clear">…</button></span>
  </div>
  <span class="op-field__error">Enter a valid email address.</span>
</div>

<select class="op-select" id="f-status"><option>Active</option></select>
<textarea class="op-textarea" rows="4"></textarea>

<label class="op-search"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-search"/></svg><span class="op-sr-only">Search cards</span><input type="search" placeholder="Search cards"></label>
<label class="op-search op-search--compact">…</label>

<div class="op-otp"><input inputmode="numeric" maxlength="1" aria-label="Digit 1">…×6</div>

<div class="op-dropzone"><svg class="op-icon">…upload…</svg>Drop a file or browse · PDF, JPG up to 10 MB</div>
<div class="op-strength" aria-label="Password strength: good"><span data-on></span><span data-on></span><span data-on></span><span></span></div>
```

| Class | Notes |
|---|---|
| `.op-field`, `__label`, `__hint`, `__error`, `.op-req` | Label above control, hint/error below. Error state: `aria-invalid="true"` on the control + `.op-field__error`. |
| `.op-input`, `.op-select`, `.op-textarea` | 40 h, radius 4, `--op-surface`, 1 px border-strong. `readonly` → sunken. |
| `.op-input-group`, `__end` | Leading icon (first child) and trailing actions. |
| `.op-search`, `--compact` | Pill search (40 / 32 h). |
| `.op-otp` | 6 boxes; JS auto-advances and spreads a paste. |
| `.op-dropzone`, `.op-strength` | Upload target; password strength meter. |

## Choice controls

```html
<label class="op-check"><input type="checkbox" checked><span>Keep me signed in</span></label>
<label class="op-check"><input type="radio" name="r" checked><span>Weekly</span></label>

<label class="op-option">
  <span class="op-check"><input type="checkbox" checked></span>
  <span class="op-check__text"><span class="op-strong">Run once per card</span><span class="op-caption op-muted">It can run again if the card comes back.</span></span>
</label>

<button class="op-switch" type="button" role="switch" aria-checked="true">Active</button>

<div class="op-segmented"><button type="button" aria-selected="true">All match</button><button type="button" aria-selected="false">Any match</button></div>
<div class="op-segmented op-segmented--block" role="tablist" aria-label="Method">…</div>   <!-- full width (auth) -->
<div class="op-segmented op-segmented--square">…</div>                                   <!-- radius 8/4 instead of full (inside panels) -->

<div class="op-tabs" role="tablist">
  <button class="op-tab" role="tab" aria-selected="true" aria-controls="p-all">All</button>
  <button class="op-tab" role="tab" aria-selected="false" aria-controls="p-mentions">Mentions <span class="op-badge op-badge--neutral">1</span></button>
</div>

<button class="op-chip" type="button" aria-pressed="true">New 2</button>
```

JS handles: switch toggles `aria-checked`; segmented sets one `aria-selected`; tabs switch `aria-selected`, show/hide `aria-controls` panels and support arrow keys; chips toggle `aria-pressed`.

## Badges, pills, status

```html
<span class="op-badge">9</span>                         <!-- count: tint circle -->
<span class="op-badge op-badge--neutral">1</span>
<span class="op-badge op-badge--accent">1</span>                <!-- solid: stays visible on tint rows (settings nav) -->
<span class="op-pill">Referral</span>                    <!-- outline label -->
<span class="op-pill op-pill--tint">Admin</span>         <!-- --tint / --neutral / --accent / --danger / --warning · --lg (24 h) -->
<span class="op-dot" aria-label="Unread"></span>          <!-- unread: always green -->
<span class="op-dot op-dot--accent"></span>              <!-- --accent / --danger / --muted -->
<span class="op-status op-status--on">Open</span>         <!-- record state with dot -->
<span class="op-app-tag" data-family="operate">Accounting</span>   <!-- names another app -->

<div class="op-progress"><div class="op-progress__bar" style="width:60%"></div></div>   <!-- --urgent / --thin -->

<div class="op-notice"><svg class="op-icon">…triangle-alert…</svg><div><div class="op-notice__title">Important security notice</div><p>…</p></div></div>
<div class="op-notice op-notice--info">…</div>

<div class="op-empty">
  <span class="op-empty__icon"><svg class="op-icon op-icon--20">…circle-check…</svg></span>
  <span class="op-strong">You're all caught up</span>
  <span class="op-small op-muted">Nothing new right now.</span>
</div>
```

Progress `width:%` inline is the one expected inline value. SLA label goes above: `<span class="op-caption op-strong" style="text-align:right">10h left</span>`.

## Toolbar, board, cards

```html
<div class="op-toolbar">
  <label class="op-search">…</label>
  <span class="op-small op-muted">12 cards</span>
</div>
<div class="op-board">
  <section class="op-column" aria-labelledby="col-inbox">
    <header class="op-column__header"><h3 class="op-column__title" id="col-inbox">Inbox <span class="op-badge">9</span></h3><span class="op-small op-muted">Mail in Inbox</span></header>
    <div class="op-column__cards">
      <a class="op-card" href="#">
        <div class="op-card__meta"><span class="op-small op-strong">Dan Ocampo</span><span class="op-caption op-muted">11:48</span></div>
        <div class="op-card__title"><span class="op-dot" aria-label="Unread"></span>Q3 paper stock reconciliation</div>
        <p class="op-card__preview">The Q3 count is off by fourteen reams.</p>
        <div class="op-card__foot">…</div>
      </a>
      <div class="op-drop-slot">Drop to move to Offer</div>
      <div class="op-blocked-slot"><svg class="op-icon op-icon--14">…lock…</svg>Not allowed from Interview</div>
    </div>
  </section>
  <button class="op-column__add" type="button"><svg class="op-icon">…plus…</svg>Add column</button>
</div>
```

| Class | Notes |
|---|---|
| `.op-toolbar` | Strip between header and board (`--op-toolbar`). |
| `.op-board` | Horizontal scroller of columns, padding 16, gap 16. |
| `.op-column` | 304 px, radius 16, padding 8. `--fluid` fills (workflow boards). `__meta` secondary line. |
| `.op-card` | Email-style card. `__meta`, `__title`, `__preview`, `__foot`. No border. |
| `.op-drop-slot`, `.op-blocked-slot` | Drag targets: allowed / not allowed. |

<!-- officepress-source:end -->
