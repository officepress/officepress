# components.md — Introduction; Page skeleton; Layout helpers; Type; Icons, images, avatars; App frame

Source: `kit/docs/components.md`, original lines 1–166. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Page skeleton; Layout helpers; Type; Icons, images, avatars; App frame](00022-docs-components-md-introduction.md) · [Buttons; Form controls; Choice controls; Badges, pills, status; Toolbar, board, cards](00023-docs-components-md-buttons.md) · [Sections, rows, key-value; Popovers, menus, notifications; Agent panel; Tables, stats; Workflow board & designer; Builders (automation, form, template); Chat; Settings pages; Auth pages](00024-docs-components-md-sections-rows-key-value.md) · [Dialog; Responsive & motion utilities; JavaScript hooks (`js › officepress.js`)](00025-docs-components-md-dialog.md)

<!-- officepress-source:start -->
# Components

Every class in `css/officepress.css`, grouped as in the stylesheet, with the markup that the CSS and `js/officepress.js` expect. Snippets come from `templates/` — when in doubt, open the template named after each heading and copy from there.

Conventions:

- **Icons** are always `<svg class="op-icon" aria-hidden="true"><use href="#i-NAME"/></svg>` — see [iconography.md](00028-docs-iconography-md.md). Snippets below shorten this to `<svg class="op-icon">…</svg>`. Write the full form in real markup.
- **State lives in attributes**, not modifier classes: `aria-current`, `aria-selected`, `aria-pressed`, `aria-checked`, `aria-expanded`, `aria-invalid`, `data-unread`, `[open]`.
- **`op-` is the kit's namespace.** Don't invent `op-` classes; `scripts/check.py` fails on unknown ones. Your own classes are `app-…`.
- Inline `style` is fine for **layout glue with tokens** (`style="gap:var(--op-space-1)"`, `style="width:160px"`). Never for colour, font or off-scale values.

Contents: [Page skeleton](00022-docs-components-md-introduction.md#page-skeleton) · [Layout helpers](00022-docs-components-md-introduction.md#layout-helpers) · [Type](00022-docs-components-md-introduction.md#type) · [Icons & images](00022-docs-components-md-introduction.md#icons-images-avatars) · [App frame](00022-docs-components-md-introduction.md#app-frame) · [Buttons](00023-docs-components-md-buttons.md#buttons) · [Form controls](00023-docs-components-md-buttons.md#form-controls) · [Choice controls](00023-docs-components-md-buttons.md#choice-controls) · [Badges & status](00023-docs-components-md-buttons.md#badges-pills-status) · [Board](00023-docs-components-md-buttons.md#toolbar-board-cards) · [Sections & rows](00024-docs-components-md-sections-rows-key-value.md#sections-rows-key-value) · [Popovers & menus](00024-docs-components-md-sections-rows-key-value.md#popovers-menus-notifications) · [Agent](00024-docs-components-md-sections-rows-key-value.md#agent-panel) · [Tables & stats](00024-docs-components-md-sections-rows-key-value.md#tables-stats) · [Workflow](00024-docs-components-md-sections-rows-key-value.md#workflow-board--designer) · [Builders](00024-docs-components-md-sections-rows-key-value.md#builders-automation-form-template) · [Chat](00024-docs-components-md-sections-rows-key-value.md#chat) · [Settings](00024-docs-components-md-sections-rows-key-value.md#settings-pages) · [Auth](00024-docs-components-md-sections-rows-key-value.md#auth-pages) · [Dialog](00025-docs-components-md-dialog.md#dialog) · [Utilities](00025-docs-components-md-dialog.md#responsive--motion-utilities)

---

## Page skeleton

The minimum page. Copy a template rather than typing it: `templates/app-board.html` (board), or any other in [patterns.md](00030-docs-patterns-md.md).

```html
<!doctype html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page · App</title>
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="css/officepress.css">
  <link rel="stylesheet" href="css/families/operate.css" id="op-family">
  <script src="js/icons.js" defer></script>
  <script src="js/officepress.js" defer></script>
</head>
<body data-app="accounting">
<div class="op-app" data-aside="expanded" data-agent="closed">
  <aside class="op-aside" aria-label="Accounting navigation">…</aside>
  <div class="op-main">
    <header class="op-header">…</header>
    <div class="op-body">
      <main class="op-content" id="content">…your screen…</main>
      <aside class="op-agent" aria-label="Agent">…</aside>
    </div>
  </div>
  <div class="op-scrim" data-action="close-overlays" aria-hidden="true"></div>
</div>
</body>
</html>
```

| Class | What it is |
|---|---|
| `.op-app` | Grid: aside + main. `data-aside="expanded\|collapsed"`, `data-agent="open\|closed"` (JS manages both). `.op-app--no-aside` for settings pages. |
| `.op-main` | Header + body column. |
| `.op-body` | Content + docked agent. |
| `.op-content` | Scrolling content area (canvas background). |
| `.op-page` | Padded content column for non-board screens (24 / 32 padding, 20 gap). |
| `.op-page-head` / `__text` | Page heading row: crumbs + `.op-heading` left, actions right. |
| `.op-crumbs` | Breadcrumb line (`<nav>` with links separated by ›). |
| `.op-scrim` | Overlay behind the mobile aside / agent sheet. |

```html
<div class="op-page">
  <div class="op-page-head">
    <div class="op-page-head__text"><nav class="op-crumbs"><a href="#">Board</a> › Automations</nav><h2 class="op-heading">New automation</h2></div>
    <button class="op-btn op-btn--secondary" type="button">Cancel</button>
    <button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15">…</svg>Save automation</button>
  </div>
  …
</div>
```

## Layout helpers

| Class | Effect |
|---|---|
| `.op-stack` | Vertical flex, gap 8. Override gap with `style="gap:var(--op-space-N)"`. |
| `.op-row` | Horizontal flex, centred, gap 8. |
| `.op-spacer` | `flex: 1` — pushes following items to the end. |
| `.op-grow` | `flex: 1; min-width: 0` — the element that takes the remaining width (and can truncate). |
| `.op-fields` | Vertical stack of `.op-field`s (gap 16). `--2` / `--3` → 2- or 3-column grid (stacks on mobile). |
| `.op-sr-only` | Visually hidden, still read by screen readers. |
| `[hidden]` | Always `display: none`, even on components that set `display`. Use it to toggle states (e.g. up to date vs update available). |
| `.op-desktop-only` / `.op-mobile-only` | Show only ≥ 768 / < 768 px. |

## Type

`.op-display` (28, auth only) · `.op-heading` (20) · `.op-title` (16) · `.op-body` (13, default) · `.op-small` (12) · `.op-caption` (11) · `.op-overline` (11 caps, tracked) · `.op-strong` (700) · `.op-muted` (`--op-text-2`) · `.op-mono` (codes only) · `.op-link` (accent text) · `.op-danger-text`.

```html
<h2 class="op-heading">What should we get done?</h2>
<p class="op-small op-muted">Sort new items into the right column</p>
<span class="op-overline">On this device</span>
```

## Icons, images, avatars

```html
<svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg>          <!-- 16 px, stroke 1.5 -->
<svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-search"/></svg>  <!-- 12 / 14 / 15 / 18 / 20 -->
<svg class="op-icon op-icon--bold" aria-hidden="true"><use href="#i-check"/></svg> <!-- stroke 2, beside bold text -->

<span class="op-icon-tile"><svg class="op-icon">…</svg></span>                        <!-- 28 px tinted tile -->
<span class="op-icon-tile op-icon-tile--40 op-icon-tile--danger">…</span>          <!-- --32 / --40 · --accent / --danger / --neutral -->
<span class="op-icon-tile op-icon-tile--32 op-icon-tile--family" data-family="operate">…</span> <!-- another app's identity -->

<span class="op-avatar">MR</span>                                                   <!-- 36 px initials -->
<span class="op-avatar op-avatar--32 op-avatar--soft">AC</span>                    <!-- --20 / --24 / --32 / --40 / --96 · --soft / --neutral / --square -->
<span class="op-avatar"><img src="…" alt="Mila Reyes"></span>                      <!-- photo, gets the image outline -->
<img class="op-img" src="…" alt="…">                                                <!-- any photo: 1 px inside outline -->
```

| Class | Notes |
|---|---|
| `.op-icon` | `currentColor`, 16 px. Sizes `--12 --14 --15 --18 --20`. `--bold` = stroke 2. `--sun` / `--moon` only inside `.op-theme-btn`. |
| `.op-icon-slot` | Fixed 36 px icon column (settings nav alignment). |
| `.op-icon-tile` | Rounded tile behind an icon. |
| `.op-swatch` / `--sm` | Colour swatch (theme settings only; colour comes from a token or user data). |
| `.op-qr` | QR code frame (2FA). |

## App frame

### Aside

```html
<aside class="op-aside" aria-label="Inbox navigation">
  <div class="op-brand">
    <span class="op-brand__logo"><img src="logos/products/communicate/inbox.svg" alt=""></span>
    <span class="op-brand__name">Inbox</span>
    <button class="op-icon-btn op-icon-btn--compact op-desktop-only" type="button" data-action="toggle-aside" data-aside-hide aria-label="Collapse sidebar"><svg class="op-icon">…panel-left-close…</svg></button>
    <button class="op-icon-btn op-icon-btn--compact op-mobile-only" type="button" data-action="close-aside" aria-label="Close menu"><svg class="op-icon">…x…</svg></button>
  </div>
  <label class="op-aside__search"><svg class="op-icon op-icon--15">…search…</svg><span class="op-sr-only">Search</span><input type="search" placeholder="Search mail"></label>
  <nav class="op-nav" aria-labelledby="nav-0">
    <h2 class="op-nav__heading" id="nav-0">On this device</h2>
    <a class="op-nav__item" href="#" aria-current="page" title="Inbox"><svg class="op-icon">…</svg><span class="op-nav__label">Inbox</span><span class="op-nav__dot" aria-label="Unread"></span></a>
    <a class="op-nav__item" href="#" title="Drafts"><svg class="op-icon">…</svg><span class="op-nav__label">Drafts</span><span class="op-nav__count">2</span></a>
  </nav>
  <div class="op-aside__footer"><a class="op-nav__item" href="#" title="Help &amp; feedback">…</a></div>
</aside>
```

- `title` on each `.op-nav__item` is the tooltip in the collapsed rail — keep it.
- Active item: `aria-current="page"`. Unread: `.op-nav__dot`. Count: `.op-nav__count`. Never both on one row.
- `.op-brand__logo` holds the **product mark** (see [logos.md](00029-docs-logos-md.md)), `alt=""` because the name is next to it.

### Header

```html
<header class="op-header">
  <button class="op-icon-btn op-desktop-only" type="button" data-action="toggle-aside" aria-label="Toggle sidebar"><svg class="op-icon">…panel-left…</svg></button>
  <button class="op-icon-btn op-mobile-only" type="button" data-action="open-aside" aria-label="Open menu"><svg class="op-icon">…menu…</svg></button>
  <h1 class="op-header__title">Inbox</h1>
  <div class="op-header__actions"><button class="op-btn op-btn--secondary" type="button">…</button></div>
  <span class="op-header__divider" aria-hidden="true"></span>
  <div class="op-globals">
    <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Notifications, 3 unread" aria-haspopup="dialog" aria-expanded="false" data-popover="pop-notifs"><svg class="op-icon">…bell…</svg><span class="op-icon-btn__dot" aria-hidden="true"></span></button>
    <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Agent" aria-pressed="false" data-action="toggle-agent"><svg class="op-icon">…bot…</svg></button>
    <button class="op-icon-btn op-icon-btn--circle op-theme-btn" type="button" aria-label="Switch to dark mode" data-action="toggle-mode"><svg class="op-icon op-icon--sun" aria-hidden="true"><use href="#i-sun"/></svg><svg class="op-icon op-icon--moon" aria-hidden="true"><use href="#i-moon"/></svg></button>
    <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Account menu" aria-haspopup="menu" aria-expanded="false" data-popover="pop-user"><svg class="op-icon">…user…</svg></button>
    <!-- #pop-notifs and #pop-user popovers live here (see Popovers) -->
  </div>
</header>
```

**`.op-globals` is identical in every app — copy it from a template, change nothing but the app name in labels.** The order is checked by `check.py` **[globals]**. Settings pages replace the two sidebar toggles with a back link: `<a class="op-icon-btn" href="index.html" aria-label="Back to app">…arrow-left…</a>`.

<!-- officepress-source:end -->
