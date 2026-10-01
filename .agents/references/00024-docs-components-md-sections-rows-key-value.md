# components.md — Sections, rows, key-value; Popovers, menus, notifications; Agent panel; Tables, stats; Workflow board & designer; Builders (automation, form, template); Chat; Settings pages; Auth pages

Source: `kit/docs/components.md`, original lines 327–488. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Page skeleton; Layout helpers; Type; Icons, images, avatars; App frame](00022-docs-components-md-introduction.md) · [Buttons; Form controls; Choice controls; Badges, pills, status; Toolbar, board, cards](00023-docs-components-md-buttons.md) · [Sections, rows, key-value; Popovers, menus, notifications; Agent panel; Tables, stats; Workflow board & designer; Builders (automation, form, template); Chat; Settings pages; Auth pages](00024-docs-components-md-sections-rows-key-value.md) · [Dialog; Responsive & motion utilities; JavaScript hooks (`js › officepress.js`)](00025-docs-components-md-dialog.md)

<!-- officepress-source:start -->
## Sections, rows, key-value

```html
<section class="op-section">
  <div class="op-section__head"><div><h2 class="op-section__title">Change password</h2><p class="op-section__desc">Choose a strong password.</p></div></div>
  <div class="op-section__body">…fields…</div>
  <div class="op-section__foot"><span class="op-small">Helper text left</span><button class="op-btn op-btn--secondary" type="button">Cancel</button><button class="op-btn op-btn--primary" type="button">Update password</button></div>
</section>
<section class="op-section op-section--danger">…</section>

<div class="op-item-row">
  <span class="op-icon-tile op-icon-tile--40 op-icon-tile--danger"><svg class="op-icon op-icon--18">…</svg></span>
  <div class="op-item-row__text"><span class="op-strong">Delete account</span><span class="op-small op-muted">Permanently deletes your account.</span></div>
  <div class="op-item-row__actions"><button class="op-btn op-btn--danger" type="button">Delete</button></div>
</div>

<dl class="op-kv"><dt>Status</dt><dd><span class="op-status op-status--on">Open</span></dd><dt>Assignee</dt><dd>Mara Santos</dd></dl>
```

`.op-card` is for board items only; groups of settings are `.op-section` (radius 12, card elevation). Separate rows inside a section with `<hr>`.

## Popovers, menus, notifications

```html
<!-- trigger: data-popover="pop-user" + aria-expanded; the popover sits inside .op-globals (or any position:relative parent) -->
<div class="op-popover op-menu" id="pop-user" role="menu" aria-label="Account">
  <div class="op-menu__identity"><span class="op-avatar op-avatar--40">MR</span><div class="op-grow"><div class="op-strong">Mila Reyes</div><div class="op-small op-muted">mila.reyes@officepress.ph</div></div></div>
  <hr>
  <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon">…sliders-horizontal…</svg><span>User Preferences</span></a>
  <a class="op-menu__item" role="menuitem" href="settings-account.html"><svg class="op-icon">…circle-user…</svg><span>Account Settings</span></a>
  <hr>
  <a class="op-menu__item" role="menuitem" href="settings-app-theme.html"><svg class="op-icon">…settings…</svg><span>App Settings</span><span class="op-caption op-muted">Inbox</span></a>
  <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon">…shield-check…</svg><span>Admin Dashboard</span><span class="op-pill op-pill--tint">Admin</span></a>
  <hr>
  <button class="op-menu__item" role="menuitem" type="button"><svg class="op-icon">…log-out…</svg><span>Sign out</span></button>
</div>
```

Notifications (`.op-popover.op-notifs`, 380 px): `__head` (title, badge, "Mark all read", settings) · `.op-tabs` · `__list` with `__group` day labels (`.op-overline`) and `.op-notif` items (`data-unread`, avatar or icon tile, `__body`, `__quote`, `__meta` with `.op-app-tag` + time, optional action buttons, trailing `.op-dot`) · `__foot` "View all activity". Copy the whole block from `templates/app-board.html` — it's account-wide and identical in every app.

JS: one popover open at a time; outside click and Escape close; `aria-expanded` is kept in sync.

## Agent panel

`.op-agent` (400 px docked / sheet on mobile): `__head` (`__mark`, name "<App> Agent", new chat / history / close) · `__context` (pills of what it can see) · `__thread` (empty state with `__starter` buttons, or messages: `.op-msg-user` bubbles, `.op-msg-agent` rows, `.op-action` cards with `__name` for each change it made) · `__composer` (`textarea` + `__controls`, ending in the round `.op-send` button) · `__disclaimer`. Copy from `templates/app-board.html` and change only the app name and starters.

```html
<div class="op-msg-user">Move everything from Northwind to Follow up</div>
<div class="op-msg-agent">
  <span class="op-agent__mark"><svg class="op-icon">…bot…</svg></span>
  <div class="op-stack">
    <p>Moved 3 cards to Follow up.</p>
    <div class="op-action"><svg class="op-icon op-icon--14">…circle-check…</svg><span class="op-action__name">MOVE CARD</span><span class="op-small op-grow">Invoice NW-4471 → Follow up</span><button class="op-btn op-btn--link op-btn--compact" type="button">Undo</button></div>
  </div>
</div>
```

## Tables, stats

```html
<div class="op-stats">
  <div class="op-stat"><span class="op-icon-tile op-icon-tile--40"><svg class="op-icon op-icon--18">…zap…</svg></span><div><div class="op-small op-muted op-strong">Active rules</div><div class="op-stat__value">2</div><div class="op-caption op-muted">of 4 rules</div></div></div>
  <div class="op-stat op-stat--danger">…</div>
</div>
<div class="op-table-wrap">
  <div class="op-table-wrap__filters"><label class="op-search op-search--compact">…</label><select class="op-select" aria-label="Status">…</select></div>
  <table class="op-table">
    <thead><tr><th>Rule</th><th style="width:128px">Status</th><th style="width:80px"><span class="op-sr-only">Edit</span></th></tr></thead>
    <tbody><tr><td><a href="#">Prepare interview stage</a><div class="op-small op-muted">When a card enters Interview…</div></td><td><button class="op-switch" type="button" role="switch" aria-checked="true">Active</button></td><td style="text-align:right"><a class="op-btn op-btn--secondary op-btn--compact" href="#">Edit</a></td></tr></tbody>
  </table>
</div>
```

## Workflow board & designer

`templates/workflow-board.html`, `templates/workflow-designer.html`.

```html
<article class="op-wf-card">
  <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">DR</span><div class="op-grow"><div class="op-strong">Diana Reyes</div><div class="op-caption op-muted">Procurement Specialist</div></div></div>
  <div class="op-wf-card__tags"><span class="op-pill">Referral</span></div>
  <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">1 of 2 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:50%"></div></div></div>
  <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral">JC</span><span class="op-spacer"></span><span class="op-due"><svg class="op-icon op-icon--12">…timer…</svg>Aug 18</span></div>
</article>
```

`.op-due` (`--today`, `--overdue`) · `.op-stage-item` (designer stage list row: grip, name, move up/down) · `.op-column--fluid`.

## Builders (automation, form, template)

| Class | Template | What |
|---|---|---|
| `.op-builder` | automation-builder, message-template, workflow-designer | Main + side grid (override columns inline with `grid-template-columns`). |
| `.op-step`, `__head`, `__no`, `__body` | automation-builder | Numbered step (Trigger → Conditions → Actions). |
| `.op-condition` | automation-builder | Field / operator / value row. |
| `.op-ordered`, `__no` | automation-builder | Re-orderable action row (grip, number, tile, text, up/down). |
| `.op-add-row` | automation-builder | Dashed "Add action" row. |
| `.op-preview-panel`, `.op-summary` | automation-builder, message-template | Live preview side panel; plain-language rule summary. |
| `.op-three-pane`, `.op-pane--start / --canvas / --end` | form-builder | Outline · canvas · settings. |
| `.op-outline-item`, `.op-num` | form-builder | Outline row (`aria-current="true"`), numbered circle. |
| `.op-form-head`, `.op-question`, `__body`, `.op-answer`, `.op-add-question` | form-builder | Form canvas; selected question `aria-selected="true"`. |
| `.op-editor`, `.op-var`, `.op-var-row` | message-template | Content-editable body; `{{variable}}` chips (mono). |
| `.op-chat-preview`, `__bubble`, `__time` | message-template | WhatsApp-style preview — its green palette is intentional, not a token. |

## Chat

`templates/chat.html`. `.op-chat` (`data-details="open|closed"`, details auto-hide < 1280 px) = `__list` (`__filters` with `.op-chip`s, `.op-conv` rows with `aria-current`, `data-unread`, `__subject`) · `__thread` (`__head`, `__messages` with `.op-day`, `.op-bubble` / `--out` / `--note` + `__head`, `.op-file`, `.op-event`; `__composer` + `__controls` + `.op-split` Send) · `__details` (`.op-kv`).

## Settings pages

`templates/settings-account.html`, `templates/settings-app-theme.html`, `templates/settings-app-updates.html`. `.op-app.op-app--no-aside` + `.op-settings` = `__nav` (`__heading` overline, `__item` with `.op-icon-slot`, `aria-current`, optional trailing `.op-badge.op-badge--accent` count; divider; "Back to App") · `__main` › `__column` of `.op-section`s.

### App updates

`templates/settings-app-updates.html` — App settings › Updates. Admin-only.

```html
<!-- Status: render ONE of these -->
<div class="op-update" role="status">                                    <!-- update available -->
  <div class="op-update__main">
    <span class="op-update__icon"><svg class="op-icon op-icon--18">…circle-arrow-up…</svg></span>
    <div class="op-update__text"><span class="op-strong">Inbox 2.4.0 is available</span><span class="op-small op-muted">Released Sep 29, 2026 · 3 new features, 2 improvements, 4 fixes.</span></div>
    <button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15">…download…</svg>Update to 2.4.0</button>
  </div>
  <div class="op-update__alt">
    <button class="op-update__guide" type="button" data-dialog-open="dlg-terminal"><svg class="op-icon op-icon--15">…square-terminal…</svg>Update from the terminal<svg class="op-icon op-icon--14">…arrow-right…</svg></button>
    <span>Step-by-step guide for admins with shell access to the server.</span>
  </div>
</div>
<div class="op-update op-update--current" role="status">…circle-check · “You’re up to date”, no button, no guide link…</div>

<label class="op-check"><input type="checkbox" checked><span class="op-check__text"><span class="op-strong">Automatically check for updates</span><span class="op-small op-muted">Checks once a day…</span></span></label>
<!-- section foot: “Last checked …” + <button class="op-btn op-btn--secondary">…refresh-cw…Check for updates</button> -->

<!-- Change log: one .op-release per version, newest first -->
<div class="op-section__body op-changelog">
  <article class="op-release" aria-labelledby="v-2-4-0">
    <div class="op-release__meta"><h3 class="op-release__version" id="v-2-4-0">2.4.0</h3><time class="op-small op-muted" datetime="2026-09-29">Sep 29, 2026</time><span class="op-pill op-pill--accent">…Available</span></div>
    <ul class="op-release__changes">
      <li class="op-change"><span class="op-change__kind op-change__kind--new">New</span><span>Snooze a card until a date and time.</span></li>
      <li class="op-change"><span class="op-change__kind">Improved</span><span>…</span></li>
      <li class="op-change"><span class="op-change__kind op-change__kind--fixed">Fixed</span><span>…</span></li>
    </ul>
  </article>
</div>
```

| Class | Notes |
|---|---|
| `.op-update`, `__main`, `__icon`, `__text`, `__alt`, `__guide` | Status card. Tint = update available; `--current` (sunken, green check) = up to date. The Update button and the terminal-guide link exist **only** when an update is available. |
| `.op-changelog`, `.op-release`, `__meta`, `__version`, `__changes` | Change log inside a section body. Tag the available version `.op-pill--accent` and the installed one `.op-pill--neutral` with a check. |
| `.op-change`, `__kind`, `--new`, `--fixed` | One change. Kinds: New (tint), Improved (default, sunken), Fixed (outline). |
| `.op-guide` (`<ol>`), `__body` | Numbered walkthrough steps (numbers come from CSS counters). |
| `.op-command` | Dark terminal line: `<div class="op-command"><code>cmd</code><button class="op-icon-btn op-icon-btn--compact" data-copy="cmd" aria-label="Copy command"><span class="op-swap">…copy… …check…</span></button></div>`. The `$` prompt is CSS, so it isn't copied. |
| `.op-code` | Inline code (`officepress rollback inbox`). |
| `.op-swap` + `data-copy` | Copy → check cross-fade for 1.5 s after copying. Works on any button. |
| `.op-dialog--wide`, `.op-dialog__close`, `.op-dialog__foot--bar` | 600 px dialog, top-right close button, toolbar-style footer. |

## Auth pages

`templates/auth/*.html`. `.op-auth` = `__top` (brand mark, app name, theme button) · `__main` › `__column` (`__head` with optional `__back`, `.op-display`, muted lead) · `__foot`. Method cards: `.op-method` (`<a>` with tile, text, arrow). `.op-links` / `--center` for the row of secondary links.

<!-- officepress-source:end -->
