# officepress-app-ui-guidelines.md — Introduction; Contents; 01 How theming works; 02 Families in the shell; 03 Colour tokens; 04 Typography

Source: `ui-guidelines.md`, original lines 1–145. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Contents; 01 How theming works; 02 Families in the shell; 03 Colour tokens; 04 Typography](00071-ui-guidelines-md-introduction.md) · [05 Spacing & sizing; 06 Shape & elevation; 07 Components; 08 Rules; 09 App frame](00072-ui-guidelines-md-05-spacing-sizing.md) · [10 Polish & motion](00073-ui-guidelines-md-10-polish-motion.md)

<!-- officepress-source:start -->
# OfficePress App UI Guidelines

**v1.0 — derived from the Inbox board**

> One interface. Four families. Two modes.

Every OfficePress app shares the Inbox board's structure, spacing, type and components. Only colour changes: each app inherits its suite family's hue, and every colour is a token (`op-*`) that resolves from two theme axes, **mode** and **family**. Set both on the app's root frame and the whole UI follows.

**Source of truth:** variables `op-*` (mode × family) in `officepress.pen`
**Components:** App Shell Preview, C · App Header, C · Sidebar, C · Sidebar Rail, C · Board Content, C · User Popover, C · Notifications Popover, C · Agent Panel, C · Workflow Card
**Screens:** "OfficePress App Layout", "OfficePress Common Modules"
**Reference build:** Inbox Board — Light / Dark

---

## Contents

1. [How theming works](00071-ui-guidelines-md-introduction.md#01-how-theming-works)
2. [Families in the shell](00071-ui-guidelines-md-introduction.md#02-families-in-the-shell)
3. [Colour tokens](00071-ui-guidelines-md-introduction.md#03-colour-tokens)
4. [Typography](00071-ui-guidelines-md-introduction.md#04-typography)
5. [Spacing & sizing](00072-ui-guidelines-md-05-spacing-sizing.md#05-spacing--sizing)
6. [Shape & elevation](00072-ui-guidelines-md-05-spacing-sizing.md#06-shape--elevation)
7. [Components](00072-ui-guidelines-md-05-spacing-sizing.md#07-components)
8. [Rules](00072-ui-guidelines-md-05-spacing-sizing.md#08-rules)
9. [App frame](00072-ui-guidelines-md-05-spacing-sizing.md#09-app-frame)
10. [Polish & motion](00073-ui-guidelines-md-10-polish-motion.md#10-polish--motion)

---

## 01 How theming works

Two axes, one token set. **Never hard-code a hex value in an app.**

### Axis 1 — `family`

| Key | Family | Apps |
|---|---|---|
| `communicate` | Communicate | Inbox · Chat · Meet · Calendar · Support · Agent |
| `create` | Create | Drive · Tables · Forms · Whiteboards · Diagrams · Content |
| `operate` | Operate | Resourcing · Procurement · Accounting · Approvals · Clients · Sign |
| `commerce` | Commerce | Products · Orders · Inventory · Payments · Fulfillments |

### Axis 2 — `mode`

`light` · `dark`

### Usage

```js
root.theme = {
  mode: "light",
  family: "operate"
}
```

---

## 02 Families in the shell

The Inbox structure, recoloured by nothing but the theme. Flagship app per family, shown in light and dark:

| Family | Flagship app | Columns shown |
|---|---|---|
| Communicate | Inbox | Inbox · Follow up |
| Create | Drive | My files · Shared |
| Operate | Accounting | To approve · Overdue |
| Commerce | Orders | New orders · Ready to ship |

---

## 03 Colour tokens

Generated from each family's brand colour. Contrast-checked: text ≥ 4.6:1 on its surface, accent text ≥ 4.5:1, in all eight combinations.

### Family tokens

Values are `light / dark`.

| Token | Role | Communicate | Create | Operate | Commerce |
|---|---|---|---|---|---|
| `op-canvas` | Board background | `#F3F5FB` / `#0B1022` | `#F5F3FB` / `#120C21` | `#F9F6F5` / `#1C1411` | `#F5F9F8` / `#101D19` |
| `op-toolbar` | Toolbar strip, between header and canvas | `#EAEDFA` / `#0F162C` | `#EEEAF9` / `#18102B` | `#F6F0EE` / `#251A16` | `#EDF6F4` / `#152621` |
| `op-column` | Column / grouping panels | `#E6EBF9` / `#0F162D` | `#ECE7F8` / `#18112B` | `#F4EEEB` / `#251B17` | `#EAF5F2` / `#162622` |
| `op-surface` | Cards, header, dialogs | `#FFFFFF` / `#141C36` | `#FFFFFF` / `#1E1634` | `#FFFFFF` / `#2D211C` | `#FFFFFF` / `#1C2E29` |
| `op-sunken` | Inputs, toggles | `#EEF1FB` / `#0E1429` | `#F2EFFA` / `#160F28` | `#F8F3F1` / `#221915` | `#F1F8F6` / `#14231F` |
| `op-border` | Hairlines, dividers | `#D6DDF3` / `#26325A` | `#DFD7F2` / `#352857` | `#ECE1DD` / `#4D3A33` | `#DCEDE8` / `#314E46` |
| `op-border-strong` | Input outlines, dashed slots | `#BCC7EB` / `#33416E` | `#CABEE9` / `#45366B` | `#E0CFC8` / `#5F4A42` | `#C7E1D9` / `#406157` |
| `op-text` | Primary text, icons | `#18213E` / `#E7ECFB` | `#241A3D` / `#EDE8FA` | `#352722` / `#F6EFEC` | `#213630` / `#ECF7F4` |
| `op-text-2` | Secondary text, meta, icons | `#5B6586` / `#97A2C3` | `#685D83` / `#A59AC1` | `#756761` / `#B8A9A2` | `#5B716A` / `#A1BAB3` |
| `op-accent` | Brand fill: app tile, bars, key icons | `#2F5BEA` / `#5D80EF` | `#6A3BE4` / `#8F6CEB` | `#E2551B` / `#E6622C` | `#0F8F6A` / `#11A67B` |
| `op-accent-text` | Accent used as text or links | `#2F5BEA` / `#708FF1` | `#6A3BE4` / `#A082EE` | `#C74B18` / `#EA7D50` | `#0E8160` / `#13B989` |
| `op-accent-strong` | Primary button fill, urgent bars | `#2150E9` / `#9EB3F5` | `#6A3BE4` / `#BBA6F3` | `#AB4014` / `#F1A98C` | `#0C6F52` / `#17DEA4` |
| `op-tint` | Selected / count badge background | `#EDF1FE` / `#1C2B5F` | `#F2EEFD` / `#301F5B` | `#FBF3F0` / `#533428` | `#F0FBF8` / `#285346` |
| `op-tint-2` | Progress tracks, hover | `#D6DFFC` / `#233670` | `#E2D8FA` / `#3B276D` | `#F6E4DC` / `#643F30` | `#DCF6EF` / `#306455` |
| `op-on-tint` | Text on tint | `#2F5BEA` / `#95ACF5` | `#6A3BE4` / `#B49DF2` | `#B94616` / `#F2B094` | `#0E7C5D` / `#62EFC6` |
| `op-nav` | Sidebar — darkest surface | `#18254E` / `#080D1B` | `#281B4B` / `#0E091A` | `#412D25` / `#16100D` | `#244239` / `#0C1714` |
| `op-nav-text` | Sidebar text | `#FFFFFF` / `#E7ECFB` | `#FFFFFF` / `#EDE8FA` | `#FFFFFF` / `#F6EFEC` | `#FFFFFF` / `#ECF7F4` |
| `op-nav-text-2` | Sidebar secondary text | `#A7B2D7` / `#8691B6` | `#B6A9D5` / `#9488B4` | `#CBBAB3` / `#AA9992` | `#B2CDC5` / `#91ABA4` |

### Shared tokens (mode only)

| Token | Light | Dark | Use |
|---|---|---|---|
| `op-dot` | `#087050` | `#3DD68C` | New / unread status. Always green, every family. |
| `op-nav-dot` | `#3DD68C` | `#3DD68C` | Unread status on the sidebar. |
| `op-on-accent` | `#FFFFFF` | `#0B1022` | Text on `accent-strong` fills. |
| `op-nav-active` | `#FFFFFF1A` | `#FFFFFF14` | Active sidebar row (white overlay). |
| `op-nav-field` | `#FFFFFF12` | `#FFFFFF0D` | Sidebar search field. |
| `op-nav-border` | `#FFFFFF1A` | `#FFFFFF14` | Sidebar hairlines. |
| `op-danger` | `#C0362C` | `#F2766B` | Destructive text, icons, borders. |
| `op-danger-tint` | `#FDEDEB` | `#3A1614` | Destructive backgrounds, overdue chips. |
| `op-warning` | `#8A4B00` | `#F5C26B` | Warning text and icons. |
| `op-warning-tint` | `#FFF4DB` | `#33260C` | Warning notices, internal notes. |
| `op-scrim` | `#0B102266` | `#00000099` | Overlay behind mobile drawers and sheets. |
| `op-shadow-edge` | `#18244F24` | `#FFFFFF1A` | 1px edge shadow (0 0 1) on raised surfaces. |
| `op-shadow-soft` | `#18244F14` | `#00000059` | Soft drop (0 1 3) on cards. |
| `op-shadow-pop` | `#18244F29` | `#00000080` | Deep drop (0 12 32) on popovers and sheets. |
| `op-image-outline` | `#0000001A` | `#FFFFFF1A` | 1px inside outline on photos and avatars. |

### Non-colour tokens

| Token | Value | Use |
|---|---|---|
| `op-font` | `Inter` | All UI text. |
| `op-font-mono` | `JetBrains Mono` | Codes, keys and `{{variables}}` only. |
| `op-mode-icon` | `sun` (light) / `moon` (dark) | Icon on the header theme button. |

---

## 04 Typography

Inter (`op-font`), five sizes plus Display 28 on auth pages, two weights. Hierarchy comes from weight and colour before size. `op-font-mono` is allowed only for codes, keys and `{{variables}}`.

| Style | Spec | Use | Example |
|---|---|---|---|
| Display | 28 px · 700 · lh 1.2 | Auth page headings **only** | Welcome back |
| Heading | 20 px · 700 · lh 1.25 | Drawer and dialog titles | Select a card |
| Title | 16 px · 700 · lh 1.25 | Page title, app name, card section titles | Inbox |
| Body | 13 px · 400 / 700 · lh 1.5 | Nav, card titles, inputs, buttons | Q3 paper stock reconciliation |
| Small | 12 px · 400 / 700 · lh 1.5 | Sender, preview, helper text | The Q3 count is off by fourteen reams. |
| Caption | 11 px · 400 / 700 · lh 1.5 | Times, badges, overlines (caps + 1 px tracking) | ON THIS DEVICE · 09:58 |

---

<!-- officepress-source:end -->
