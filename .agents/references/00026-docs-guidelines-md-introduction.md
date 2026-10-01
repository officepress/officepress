# guidelines.md — Introduction; Contents; 01 How theming works; 02 Colour tokens; 03 Typography

Source: `kit/docs/guidelines.md`, original lines 1–155. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; Contents; 01 How theming works; 02 Colour tokens; 03 Typography](00026-docs-guidelines-md-introduction.md) · [04 Spacing & sizing; 05 Shape & elevation; 06 Components; 07 Rules: do  ›  don't; 08 App frame; 09 Polish & motion; 10 Accessibility; 11 Content & voice](00027-docs-guidelines-md-04-spacing-sizing.md)

<!-- officepress-source:start -->
# OfficePress App UI Guidelines

> One interface. Four families. Two modes.

Every OfficePress app shares one structure, one spacing scale, one type scale and one component set. **Only colour changes**: each app inherits its suite family's hue, and every colour is a CSS custom property (`--op-*`) that resolves from two axes, **mode** and **family**.

- **Source of truth:** the Pencil file `officepress.pen` (variables `op-*`, screens "OfficePress App Layout", "OfficePress Common Modules", "Inbox Board — Light / Dark"). Snapshots are in [`reference › `](00077-officepress-visual-asset-map.md).
- **Code truth:** `css/officepress.css` + `css/families/*.css`, machine-readable in `tokens/tokens.json`.
- **Enforced by:** `python3 scripts/check.py` (rule ids in brackets below, e.g. **[hex]**).

Each rule below names the kit class or token that implements it. If you use the classes, you get the rule for free.

---

## Contents

1. [How theming works](00026-docs-guidelines-md-introduction.md#01-how-theming-works)
2. [Colour tokens](00026-docs-guidelines-md-introduction.md#02-colour-tokens)
3. [Typography](00026-docs-guidelines-md-introduction.md#03-typography)
4. [Spacing & sizing](00027-docs-guidelines-md-04-spacing-sizing.md#04-spacing--sizing)
5. [Shape & elevation](00027-docs-guidelines-md-04-spacing-sizing.md#05-shape--elevation)
6. [Components](00027-docs-guidelines-md-04-spacing-sizing.md#06-components)
7. [Rules: do  ›  don't](00027-docs-guidelines-md-04-spacing-sizing.md#07-rules-do--dont)
8. [App frame](00027-docs-guidelines-md-04-spacing-sizing.md#08-app-frame)
9. [Polish & motion](00027-docs-guidelines-md-04-spacing-sizing.md#09-polish--motion)
10. [Accessibility](00027-docs-guidelines-md-04-spacing-sizing.md#10-accessibility)
11. [Content & voice](00027-docs-guidelines-md-04-spacing-sizing.md#11-content--voice)

---

## 01 How theming works

Two axes, one token set. **Never hard-code a colour in an app.** **[hex]**

| Axis | Values | Set by |
|---|---|---|
| `family` | `communicate` · `create` · `operate` · `commerce` | Which family stylesheet you load: `css/families/<family>.css` (exactly one) **[head]** |
| `mode` | `light` · `dark` | `data-mode` on `<html>`, toggled by `[data-action="toggle-mode"]`, saved in `localStorage["op-mode"]` |

| Family | Apps |
|---|---|
| Communicate | Inbox · Chat · Meet · Calendar · Support · Agent |
| Create | Drive · Tables · Forms · Whiteboards · Diagrams · Content |
| Operate | Resourcing · Procurement · Accounting · Approvals · Clients · Sign |
| Commerce | Products · Orders · Inventory · Payments · Fulfillments |

```html
<html lang="en" data-mode="light">
<head>
  <!-- no-flash: apply saved / preferred mode before first paint (copy from any template) -->
  <link rel="stylesheet" href="css/officepress.css">
  <link rel="stylesheet" href="css/families/operate.css" id="op-family">
  <script src="js/icons.js" defer></script>
  <script src="js/officepress.js" defer></script>
</head>
```

Load order matters: core first, then the family file (it defines the family tokens for `:root` / `[data-mode="light"]` and `[data-mode="dark"]`).

---

## 02 Colour tokens

Generated from each family's brand colour. Contrast-checked: text ≥ 4.6:1 on its surface, accent text ≥ 4.5:1, in all eight combinations.

### Family tokens — in `css/families/<family>.css`

Values are `light / dark`.

| Token | Role | Communicate | Create | Operate | Commerce |
|---|---|---|---|---|---|
| `--op-canvas` | Board background | `#F3F5FB` / `#0B1022` | `#F5F3FB` / `#120C21` | `#F9F6F5` / `#1C1411` | `#F5F9F8` / `#101D19` |
| `--op-toolbar` | Toolbar strip, between header and canvas | `#EAEDFA` / `#0F162C` | `#EEEAF9` / `#18102B` | `#F6F0EE` / `#251A16` | `#EDF6F4` / `#152621` |
| `--op-column` | Column / grouping panels | `#E6EBF9` / `#0F162D` | `#ECE7F8` / `#18112B` | `#F4EEEB` / `#251B17` | `#EAF5F2` / `#162622` |
| `--op-surface` | Cards, header, dialogs | `#FFFFFF` / `#141C36` | `#FFFFFF` / `#1E1634` | `#FFFFFF` / `#2D211C` | `#FFFFFF` / `#1C2E29` |
| `--op-sunken` | Inputs, toggles | `#EEF1FB` / `#0E1429` | `#F2EFFA` / `#160F28` | `#F8F3F1` / `#221915` | `#F1F8F6` / `#14231F` |
| `--op-border` | Hairlines, dividers | `#D6DDF3` / `#26325A` | `#DFD7F2` / `#352857` | `#ECE1DD` / `#4D3A33` | `#DCEDE8` / `#314E46` |
| `--op-border-strong` | Input outlines, dashed slots | `#BCC7EB` / `#33416E` | `#CABEE9` / `#45366B` | `#E0CFC8` / `#5F4A42` | `#C7E1D9` / `#406157` |
| `--op-text` | Primary text, icons | `#18213E` / `#E7ECFB` | `#241A3D` / `#EDE8FA` | `#352722` / `#F6EFEC` | `#213630` / `#ECF7F4` |
| `--op-text-2` | Secondary text, meta, icons | `#5B6586` / `#97A2C3` | `#685D83` / `#A59AC1` | `#756761` / `#B8A9A2` | `#5B716A` / `#A1BAB3` |
| `--op-accent` | Brand fill: app tile, bars, key icons | `#2F5BEA` / `#5D80EF` | `#6A3BE4` / `#8F6CEB` | `#E2551B` / `#E6622C` | `#0F8F6A` / `#11A67B` |
| `--op-accent-text` | Accent used as text or links | `#2F5BEA` / `#708FF1` | `#6A3BE4` / `#A082EE` | `#C74B18` / `#EA7D50` | `#0E8160` / `#13B989` |
| `--op-accent-strong` | Primary button fill, urgent bars | `#2150E9` / `#9EB3F5` | `#6A3BE4` / `#BBA6F3` | `#AB4014` / `#F1A98C` | `#0C6F52` / `#17DEA4` |
| `--op-tint` | Selected / count badge background | `#EDF1FE` / `#1C2B5F` | `#F2EEFD` / `#301F5B` | `#FBF3F0` / `#533428` | `#F0FBF8` / `#285346` |
| `--op-tint-2` | Progress tracks, hover | `#D6DFFC` / `#233670` | `#E2D8FA` / `#3B276D` | `#F6E4DC` / `#643F30` | `#DCF6EF` / `#306455` |
| `--op-on-tint` | Text on tint | `#2F5BEA` / `#95ACF5` | `#6A3BE4` / `#B49DF2` | `#B94616` / `#F2B094` | `#0E7C5D` / `#62EFC6` |
| `--op-nav` | Sidebar — darkest surface | `#18254E` / `#080D1B` | `#281B4B` / `#0E091A` | `#412D25` / `#16100D` | `#244239` / `#0C1714` |
| `--op-nav-text` | Sidebar text | `#FFFFFF` / `#E7ECFB` | `#FFFFFF` / `#EDE8FA` | `#FFFFFF` / `#F6EFEC` | `#FFFFFF` / `#ECF7F4` |
| `--op-nav-text-2` | Sidebar secondary text | `#A7B2D7` / `#8691B6` | `#B6A9D5` / `#9488B4` | `#CBBAB3` / `#AA9992` | `#B2CDC5` / `#91ABA4` |

### Shared tokens (mode only) — in `css/officepress.css`

| Token | Light | Dark | Use |
|---|---|---|---|
| `--op-dot` | `#087050` | `#3DD68C` | New / unread status. Always green, every family. |
| `--op-nav-dot` | `#3DD68C` | `#3DD68C` | Unread status on the sidebar. |
| `--op-on-accent` | `#FFFFFF` | `#0B1022` | Text on `accent-strong` fills. |
| `--op-nav-active` | `#FFFFFF1A` | `#FFFFFF14` | Active sidebar row (white overlay). |
| `--op-nav-field` | `#FFFFFF12` | `#FFFFFF0D` | Sidebar search field. |
| `--op-nav-border` | `#FFFFFF1A` | `#FFFFFF14` | Sidebar hairlines. |
| `--op-danger` | `#C0362C` | `#F2766B` | Destructive text, icons, borders. |
| `--op-danger-tint` | `#FDEDEB` | `#3A1614` | Destructive backgrounds, overdue chips. |
| `--op-warning` | `#8A4B00` | `#F5C26B` | Warning text and icons. |
| `--op-warning-tint` | `#FFF4DB` | `#33260C` | Warning notices, internal notes. |
| `--op-scrim` | `#0B102266` | `#00000099` | Overlay behind mobile drawers and sheets. |
| `--op-shadow-edge` | `#18244F24` | `#FFFFFF1A` | 1px edge shadow (0 0 1) on raised surfaces. |
| `--op-shadow-soft` | `#18244F14` | `#00000059` | Soft drop (0 1 3) on cards. |
| `--op-shadow-pop` | `#18244F29` | `#00000080` | Deep drop (0 12 32) on popovers and sheets. |
| `--op-image-outline` | `#0000001A` | `#FFFFFF1A` | 1px inside outline on photos and avatars. |

### Cross-app identity (mode-independent)

| Token | Value | Use |
|---|---|---|
| `--op-fam-communicate` | `#2F5BEA` | Only to name *another* app: `.op-app-tag` / `.op-icon-tile--family` with `data-family="…"` |
| `--op-fam-create` | `#6A3BE4` | 〃 |
| `--op-fam-operate` | `#E2551B` | 〃 |
| `--op-fam-commerce` | `#0F8F6A` | 〃 |
| `--op-on-fam` | `#FFFFFF` | Icon on a family tile |

### Choosing a colour token

| You are colouring… | Use |
|---|---|
| Page background | `--op-canvas` (board), `--op-surface` (settings / forms pages use `.op-page`) |
| A card, header, dialog | `--op-surface` |
| An input, toggle track, quiet well | `--op-sunken` |
| Body text / secondary text | `--op-text` / `--op-text-2` |
| A link or accent **text** | `--op-accent-text` (never `--op-accent`) |
| A primary button fill | `--op-accent-strong` + `--op-on-accent` |
| A selected row, count badge | `--op-tint` + `--op-on-tint` |
| Progress track, hover wash | `--op-tint-2` |
| Unread / new | `--op-dot` (always green) |
| Destructive | `--op-danger` / `--op-danger-tint` |
| Warning, internal note | `--op-warning` / `--op-warning-tint` |

---

## 03 Typography

Inter (`--op-font`), five sizes plus Display 28 on auth pages, two weights (400 / 700). **[font-size] [font-family]** Hierarchy comes from weight and colour before size. `--op-font-mono` (JetBrains Mono) only for codes, keys and `{{variables}}`.

| Style | Spec | Class / token | Use |
|---|---|---|---|
| Display | 28 · 700 · lh 1.2 | `.op-display` / `--op-text-display` | Auth page headings **only** |
| Heading | 20 · 700 · lh 1.25 | `.op-heading` | Drawer, dialog, page-head titles |
| Title | 16 · 700 · lh 1.25 | `.op-title` | Page title (header), app name, section titles |
| Body | 13 · 400/700 · lh 1.5 | `.op-body` (default) | Nav, card titles, inputs, buttons |
| Small | 12 · 400/700 · lh 1.5 | `.op-small` | Sender, preview, helper text |
| Caption | 11 · 400/700 · lh 1.5 | `.op-caption`, `.op-overline` (caps + 1 px tracking) | Times, badges, overlines |

Modifiers: `.op-strong` (700), `.op-muted` (`--op-text-2`), `.op-mono`, `.op-link`, `.op-danger-text`.

---

<!-- officepress-source:end -->
