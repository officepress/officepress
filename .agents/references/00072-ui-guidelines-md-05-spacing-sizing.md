# officepress-app-ui-guidelines.md — 05 Spacing & sizing; 06 Shape & elevation; 07 Components; 08 Rules; 09 App frame

Source: `ui-guidelines.md`, original lines 146–313. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Contents; 01 How theming works; 02 Families in the shell; 03 Colour tokens; 04 Typography](00071-ui-guidelines-md-introduction.md) · [05 Spacing & sizing; 06 Shape & elevation; 07 Components; 08 Rules; 09 App frame](00072-ui-guidelines-md-05-spacing-sizing.md) · [10 Polish & motion](00073-ui-guidelines-md-10-polish-motion.md)

**Status correction:** the user confirms purge/delete are production material. Any “proposed” or “Not in production yet” wording below is superseded source history, retained for fidelity. See [the accepted production-status correction](00078-officepress-source-decisions.md) when interpreting these records.

<!-- officepress-source:start -->
## 05 Spacing & sizing

A 4-point scale. **Every padding, gap and fixed height is a multiple of 4.**

### Scale

| Value | Typical use |
|---|---|
| 4 | Icon–text, badge inset |
| 8 | Card gap, column padding, row gap |
| 12 | Card padding, nav inset, header gap |
| 16 | Board padding, column gap, sidebar inset |
| 20 | Drawer padding |
| 24 | Section spacing in drawers |
| 32 | Empty-state spacing |

### Component metrics

| Component | Metrics |
|---|---|
| Header | 64 h · padding 0 16 · gap 12 |
| Sidebar | 260 w · padding 16 · nav gap 4 |
| Nav row | 36 h · padding 0 12 · gap 12 · icon 16 |
| Toolbar | padding 8 16 · search 320 × 40 |
| Board | padding 16 · gap 16 · column 304 w |
| Column | radius 16 · padding 8 · gap 8 · header padding 12 |
| Card | radius 8 · padding 12 · gap 8 · shadow, no border |
| Button / icon button | 36 h · text padding 0 16 (leading icon 0 16 0 12) · icon 15–16 |
| Badge | 20 h · circle 20 w or pill padding 0 8 |
| Avatar | 36 × 36 · initials 12/700 |
| Compact controls | 28 / 32 h inside panels, popovers and toolbars |
| Overlays | scrim `op-scrim` · popover radius 12 · sheet radius 12 |

---

## 06 Shape & elevation

Concentric radii (outer = inner + padding) and elevation from layered shadows. Borders only for structure and state.

### Radius

| Radius | Use |
|---|---|
| 4 | Buttons, nav rows, inputs, menu items |
| 8 | Cards, menus, small panels |
| 12 | Popovers (4 item + 8 padding), settings cards, sheets |
| 16 | Card holders: board columns (8 card + 8 padding) |
| full | Badges, pills, search, avatars, toggles |

### Elevation

| Surface | Shadow |
|---|---|
| Card (light) | edge `0 0 1 op-shadow-edge` + soft `0 1 3 op-shadow-soft` |
| Card (dark) | Same tokens; the edge becomes a light hairline in dark mode |
| Popover / sheet | edge `0 0 1 op-shadow-edge` + pop `0 12 32 op-shadow-pop` |

---

## 07 Components

Drawn from the Inbox board. Every colour is a token, so each component re-themes per family and mode.

### Nav item states

| State | Treatment |
|---|---|
| Active | `op-nav-active` fill, `op-nav-text`, label 700 |
| Unread | `op-nav-dot` (8 px) after the label |
| Count | Count in 12/700 `op-nav-text-2` after the label |
| Default | `op-nav-text-2` icon and label, 400 |

### Header actions

36 px circles, 1 px `op-border-strong`, 16 px icon. **Order: notifications · agent · theme · user.** The theme button shows the current mode (sun / moon via `op-mode-icon`) and switches on click. Notifications show an `op-dot` with a surface ring when there is unread activity.

### Buttons

| Type | Spec |
|---|---|
| Primary | `op-accent-strong` fill, `op-on-accent` label 13/700, radius 4, 36 h |
| Secondary | `op-surface` fill, 1 px `op-border-strong` (the outline is the shape), `op-text` label |
| Icon button | 36 × 36, radius 4 (header globals: circle), icon 16 |
| Danger | `op-surface` fill, 1 px `op-danger`, `op-danger` label |

### Badges & status

| Item | Spec |
|---|---|
| Count | 20 × 20 circle, `op-tint` fill, `op-on-tint` 11/700 |
| Pill | 20 h, padding 0 8, 1 px `op-border-strong`, 11/700 |
| Unread dot | 7–8 px `op-dot`, 1.5 px `op-surface` ring |

### SLA progress

6 px track in `op-tint-2`; fill in `op-accent`, or `op-accent-strong` when urgent. Label above, right-aligned (for example "10h left", "4h left · urgent").

### Search field

40 h, full radius, `op-sunken` fill, 1 px `op-border-strong`, search icon 15, placeholder 13 `op-text-2`.

### Card

`op-surface`, radius 8, padding 12, gap 8, card elevation (no border). Meta row (sender 12/700, time 11), title row (optional unread dot + title 13/700), preview 12 `op-text-2`.

### Reusable components in the file

| Component | Purpose |
|---|---|
| App Shell Preview | Compact app shell for showing any family / mode |
| C · App Header | Page title, page actions, divider, four global actions |
| C · Sidebar / C · Sidebar Rail | Expanded (260) and collapsed (64) aside |
| C · Board Content | Toolbar + kanban board |
| C · User Popover | Identity, preferences, account, app settings, admin, sign out |
| C · Notifications Popover (+ Empty) | Account-wide activity |
| C · Agent Panel (+ Empty) | Agent thread, action cards, composer |
| C · Workflow Card | Kanban card for workflows |

---

## 08 Rules

What changes per family, what never does.

### Do

- **Set mode and family on the app's root frame.** Every screen of an app inherits both; nested frames never override family.
- **Use `op-*` tokens for every colour.** Hard-coded hex values break dark mode and the other families.
- **Keep the layer order: header → toolbar → canvas.** Light: toolbar is a step darker than canvas. Dark: toolbar sits between header and canvas.
- **Use `accent-text` for links and `accent-strong` for button fills.** Raw accents like Operate orange (3.7:1) and Commerce green (4.1:1) fail as text on white.

### Don't

- **Don't use another family's colour inside an app.** Accounting is orange everywhere. Blue in Accounting means nothing. *(Exception: app identity tags on account-wide notifications.)*
- **Don't recolour status.** Unread is always green (`op-dot`); it's a status, not a brand colour. In Commerce, pair it with the dot's ring and position.
- **Don't put accent on large backgrounds.** The sidebar is the darkest tinted neutral (`op-nav`), never the raw accent or the logo's secondary tint.
- **Don't add sizes or spacing outside the scales.** Five type sizes (plus Display 28 on auth), a 4-point spacing scale, five radii (4 / 8 / 12 / 16 / full).

---

## 09 App frame

Behaviour every app shares. Full screens: see "OfficePress App Layout".

### Left aside
Collapsible everywhere. **Desktop:** 260 px expanded ↔ 64 px icon rail, pushing the main section. **Mobile (< 768 px):** collapsed by default, opens as a 300 px overlay with a 40% scrim (`op-scrim`).

### Header
Page title and page actions on the left of a divider; then always, in order: **notifications, agent, theme, user**. All four are identical 36 px outlined circles. Notifications opens a 380 px account-wide activity popover (All / Mentions / Agent, grouped by day, actionable items, "Mark all read").

### Agent
Opens a 400 px panel docked right under the header, pushing content; full-height sheet on mobile. Shows context, a thread with visible action cards (done / running / undo) and a composer. The board reflects agent changes live.

### User menu
280 px popover under the avatar, grouped with dividers:
identity · User Preferences, Account Settings · App Settings, Admin Dashboard (only if permitted) · Sign out.

### Settings
Full-page, no aside: the header's back arrow and "Back to App" return to the app. The section nav aligns icons with the back arrow and labels with the page title.

- **Account:** personal information (name\*, image URL, username, email, phone; role read-only; current password only when adding a sign-in identifier), change password (current + new), authenticator-app 2FA (QR or secret key, regenerate, 6-digit verify), instant data export. Purge / delete account are proposed additions.
- **App:** Theme (logo, brand name, accent / sidebar / canvas with reset to defaults) plus app sections.

### Authentication
One page set for all apps, themed by family: sign in (method cards), email (password / one-time code / magic link), username, two-factor, forgot password, check your email. Display type 28/700 only here.

---

<!-- officepress-source:end -->
