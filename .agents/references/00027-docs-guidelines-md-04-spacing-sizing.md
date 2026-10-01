# guidelines.md — 04 Spacing & sizing; 05 Shape & elevation; 06 Components; 07 Rules: do / don't; 08 App frame; 09 Polish & motion; 10 Accessibility; 11 Content & voice

Source: `kit/docs/guidelines.md`, original lines 156–307. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Contents; 01 How theming works; 02 Colour tokens; 03 Typography](00026-docs-guidelines-md-introduction.md) · [04 Spacing & sizing; 05 Shape & elevation; 06 Components; 07 Rules: do  ›  don't; 08 App frame; 09 Polish & motion; 10 Accessibility; 11 Content & voice](00027-docs-guidelines-md-04-spacing-sizing.md)

<!-- officepress-source:start -->
## 04 Spacing & sizing

A 4-point scale. **Every padding, gap, margin and fixed size is a multiple of 4.** **[spacing]** Hairlines (0.5 / 1 / 1.5 / 2 / 3 px) and icon sizes (12 / 14 / 15 / 16 / 18 / 20) are the only exceptions.

| Token | Value | Typical use |
|---|---|---|
| `--op-space-1` | 4 | Icon–text, badge inset |
| `--op-space-2` | 8 | Card gap, column padding, row gap |
| `--op-space-3` | 12 | Card padding, nav inset, header gap |
| `--op-space-4` | 16 | Board padding, column gap, sidebar inset |
| `--op-space-5` | 20 | Drawer padding |
| `--op-space-6` | 24 | Section spacing |
| `--op-space-8` | 32 | Empty-state spacing |
| `--op-space-10` | 40 | Large page gutters |

| Component | Metrics | Token |
|---|---|---|
| Header | 64 h · padding 0 16 · gap 12 | `--op-header-h` |
| Aside | 260 w (rail 64, mobile 300) · padding 16 · nav gap 4 | `--op-aside-w`, `--op-aside-rail-w`, `--op-aside-mobile-w` |
| Nav row | 36 h · padding 0 12 · gap 12 · icon 16 | |
| Toolbar | padding 8 16 · search 320 × 40 | `--op-input-h` |
| Board | padding 16 · gap 16 · column 304 w | |
| Column | radius 16 · padding 8 · gap 8 | |
| Card | radius 8 · padding 12 · gap 8 · shadow, no border | `--op-elev-card` |
| Button / icon button | 36 h | `--op-control-h` |
| Compact controls | 32 / 28 h inside panels, popovers, toolbars, tables | `--op-control-compact-h`, `--op-control-small-h` |
| Input | 40 h | `--op-input-h` |
| Badge | 20 h · circle 20 w or pill padding 0 8 | |
| Avatar | 36 (20 / 24 / 32 / 40 / 96 variants) | `.op-avatar--*` |
| Agent panel | 400 w | `--op-agent-w` |

---

## 05 Shape & elevation

**Concentric radii (outer = inner + padding)** and elevation from layered shadows. Borders only for structure and state. **[radius]**

| Radius | Token | Use |
|---|---|---|
| 4 | `--op-radius-4` | Buttons, nav rows, inputs, menu items |
| 8 | `--op-radius-8` | Cards, menus, small panels |
| 12 | `--op-radius-12` | Popovers (4 item + 8 padding), sections, sheets |
| 16 | `--op-radius-16` | Card holders: board columns (8 card + 8 padding) |
| full | `--op-radius-full` | Badges, pills, search, avatars, toggles |

| Surface | Shadow token |
|---|---|
| Card | `--op-elev-card` (edge 0 0 1 + soft 0 1 3); hover `--op-elev-card-hover` |
| Popover / sheet / dialog | `--op-elev-pop` (edge 0 0 1 + pop 0 12 32) |

In dark mode the same tokens turn the edge into a light hairline — don't add borders to compensate.

---

## 06 Components

The full catalogue with markup is in [components.md](00022-docs-components-md-introduction.md). Key specs:

- **Nav item** (`.op-nav__item`): default `--op-nav-text-2` 400; active `aria-current="page"` → `--op-nav-active` fill, `--op-nav-text`, 700; unread `.op-nav__dot` (8 px, `--op-nav-dot`); count `.op-nav__count`.
- **Header globals** (`.op-globals`): four identical 36 px outlined circles, **in this order: notifications · agent · theme · user**. **[globals]** The theme button shows the *current* mode icon and cross-fades on click. Notifications show `.op-icon-btn__dot` when there is unread activity.
- **Buttons** (`.op-btn`): `--primary` (accent-strong fill), `--secondary` (surface + 1 px border-strong), `--danger` (outline), `--danger-solid` (final confirmation only), `--ghost`, `--link`. Sizes: default 36, `--compact` 32, `--small` 28, `--large` 44 (auth primary only). One primary button per view region.
- **Badges & status**: count `.op-badge` (20 circle, tint); pill `.op-pill` (20 h, outline); `.op-dot` unread (8 px, surface ring); `.op-status` for record states.
- **SLA progress** (`.op-progress`): 6 px `--op-tint-2` track; bar `--op-accent`, `.op-progress--urgent` → `--op-accent-strong`. Label above, right-aligned ("10h left", "4h left · urgent").
- **Search** (`.op-search`): 40 h, full radius, sunken, 1 px border-strong, 15 px icon.
- **Card** (`.op-card`): surface, radius 8, padding 12, gap 8, card elevation, **no border**. Meta row (sender 12/700, time 11), title row (optional `.op-dot` + 13/700 title), preview 12 muted.

---

## 07 Rules: do / don't

### Do
- **Set the family once, per app** (one family stylesheet) and the mode on `<html>`. Nested elements never override family.
- **Use `--op-*` tokens for every colour.** Hard-coded colours break dark mode and the other families. **[hex]**
- **Keep the layer order header → toolbar → canvas.** Light: toolbar a step darker than canvas. Dark: toolbar between header and canvas.
- **Use `--op-accent-text` for links and `--op-accent-strong` for button fills.** Raw accents like Operate orange (3.7:1) and Commerce green (4.1:1) fail as text on white.
- **Compose from kit classes.** If you need new CSS, write it in your app stylesheet with tokens, prefix your classes `app-`. The `op-` prefix is reserved. **[class]**

### Don't
- **Don't use another family's colour inside an app.** Accounting is orange everywhere. *Exception: identity tags that name another app (`data-family`).*
- **Don't recolour status.** Unread is always green (`--op-dot`) — a status, not a brand colour.
- **Don't put accent on large backgrounds.** The aside is `--op-nav` (darkest tinted neutral), never the raw accent.
- **Don't add sizes outside the scales.** Five type sizes (+ Display 28 on auth), the 4-point spacing scale, five radii. **[font-size] [spacing] [radius]**
- **Don't wrap everything in cards.** Use `.op-section` for settings groups and plain rows/dividers elsewhere.

---

## 08 App frame

Behaviour every app shares — built into `.op-app` + `js/officepress.js`. Full screens: [`templates › `](00083-officepress-template-behavior-map.md), snapshots in `reference/shell/`.

### Left aside
Collapsible everywhere. **Desktop:** 260 ↔ 64 px icon rail (`data-aside="expanded|collapsed"` on `.op-app`, saved per app in `localStorage["op-aside:<body data-app>"]`), pushing the main section. **Mobile (< 768 px):** collapsed by default, opens as a 300 px overlay with `--op-scrim`.

### Header
Page title (`.op-header__title`, 16/700) and page actions (`.op-header__actions`) left of a divider; then always the four globals. Notifications opens a 380 px account-wide activity popover (All / Mentions / Agent tabs, grouped by day, actionable items, "Mark all read").

### Agent
`[data-action="toggle-agent"]` opens a 400 px panel docked right under the header, pushing content; full-height sheet on mobile. Shows context, a thread with visible action cards (done / running / undo) and a composer. The page reflects agent changes live.

### User menu
280 px popover (`.op-menu`): identity · User Preferences, Account Settings · App Settings, Admin Dashboard (**only if permitted** — omit, don't disable) · Sign out.

### Settings
Full page, **no aside** (`.op-app--no-aside`): the header's back arrow and a "Back to App" nav item return to the app. The section nav aligns icons with the back arrow and labels with the page title (`.op-settings`).

- **Account:** personal information (name\*, image URL, username, email, phone; role read-only; current password only when adding a sign-in identifier), change password, authenticator-app 2FA (QR or secret key, 6-digit verify), instant data export. Purge / delete account confirm by typing.
- **App:** Theme (logo, brand name, accent / sidebar / canvas with reset to defaults), Updates, plus app-specific sections.
- **Updates** (app admins): current version · status card — *update available* (release summary, downtime note, **Update to x.y.z** primary, and an “Update from the terminal” link to a step-by-step guide for admins with shell access) or *up to date* (no button, no link) · “Automatically check for updates” checkbox (daily; notifies, never installs) · “Check for updates” in the section footer with the last-checked time · change log per version, newest first, each change tagged New / Improved / Fixed. The nav item shows a count badge while an update is waiting. The terminal guide starts with a backup, ends with a version check, and always gives a rollback command.
- **Not offered** (don't add): SMS 2FA, security keys, recovery codes.

### Authentication
One page set for all apps, themed by family (`templates/auth/`): sign in (method cards) → email (password / one-time code / magic link), username, two-factor, forgot password, check your email. Display 28/700 only here.

---

## 09 Polish & motion

Built into the kit classes; follow them when writing app CSS.

- **Concentric radius:** outer = inner + padding. Cards 8 in columns with 8 padding → 16. Menu items 4 in popovers with 8 padding → 12.
- **Elevation over borders:** raised surfaces (cards, popovers, sheets) use shadows. Borders are for structure and state: inputs, dividers, docked panels, selection, focus, danger.
- **Optical alignment:** text buttons pad 16/16. A leading icon gets 12 on the icon side, 16 on the text side (automatic in `.op-btn` when the first child is an `svg`). Icon-only controls are square and centred.
- **Press:** pressable controls scale to `--op-press-scale` (0.96, never below 0.95 **[press]**). Opt out in dense lists with `data-static`.
- **Transitions:** name exact properties, never `all` **[transition]**; `--op-ease-out`; `--op-dur-fast` (150 ms) for colour/opacity, `--op-dur` (200 ms) for transform.
- **Icon swaps** (theme, copy → check): cross-fade both icons — scale .25 → 1, opacity 0 → 1, blur 4 px → 0, `--op-ease`. See `.op-theme-btn`.
- **Enter / exit:** popovers and panels enter with opacity + 4 px translateY, ease-out; exits are softer and shorter. No enter animation on first page load (`.op-no-motion` is removed after load).
- **Icons:** one library (Lucide). Stroke 1.5 beside regular text, 2 beside bold (`.op-icon--bold`). Outline by default.
- **Images:** photos and avatars get a 1 px inside outline in `--op-image-outline` (`.op-img`; built into `.op-avatar img`).
- **Restraint:** no custom animation on high-frequency actions (typing, row hover, filter toggles). Motion is never the only signal. `prefers-reduced-motion` disables it all.

---

## 10 Accessibility

- Icon-only buttons and links need `aria-label`. **[a11y-label]** Decorative icons get `aria-hidden="true"`.
- Images need `alt` (`alt=""` when decorative, e.g. the brand mark next to the app name). **[img-alt]**
- Use real elements: `<button>` for actions, `<a href>` for navigation, `<label for>` on every field, `<dialog>` for dialogs.
- State lives in ARIA, and the CSS reads it: `aria-current="page"` (nav), `aria-selected` (tabs, segmented), `aria-pressed` (chips, toggles), `aria-checked` (switch), `aria-expanded` (popover triggers), `aria-invalid="true"` (fields).
- Colour is never the only signal: unread has a dot *and* bold title; errors have text; status pills have labels.
- Focus is always visible (`:focus-visible` ring in `--op-accent`). Don't remove outlines.
- Touch targets ≥ 28 px; default controls are 36.

---

## 11 Content & voice

- Sentence case everywhere ("Account settings", not "Account Settings") — except the product names and the user-menu items fixed above.
- Buttons say what happens: "Purge data", "Update password", not "OK" / "Submit".
- Destructive confirmations name the object and the consequence, and require typing a word for irreversible actions (`data-confirm-text`).
- Empty states: one line of what's here, one line of what to do (`.op-empty`).
- Times: `09:58` today, `Wed` this week, `Aug 18` this year.
- The agent is "<App> Agent" (e.g. "Inbox Agent") and always says what it changed.
<!-- officepress-source:end -->
