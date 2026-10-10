# OfficePress active colour tokens

Owner: [UI foundations](../context/ui-foundations.md). Load when choosing semantic colours or comparing family/mode values. This table is extracted without rounding from the source token JSON. Complete representations, descriptions, sRGB components and extension metadata remain in the source references. This file is the active token owner; the matching table inside the guideline source capture (00071) is immutable evidence and is not updated when tokens change.

| CSS token | Meaning | Communicate light / dark | Create light / dark | Operate light / dark | Commerce light / dark |
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

## Complete implementation detail

- [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) — load when needing the full token representation.
- [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) — load when needing the full token representation.
- [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) — load when needing the full token representation.
- [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) — load when needing the full token representation.
- [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) — load when needing the full token representation.
- [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) — load when needing the full token representation.
- [card; pop; number; press-scale](00070-tokens-tokens-json-card.md) — load when needing the full token representation.
- [kit › css › officepress.css — Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › officepress.css — 3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › officepress.css — 7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › officepress.css — 8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › officepress.css — 15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › officepress.css — 21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › families › communicate.css — communicate](00013-css-families-communicate-css.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › families › create.css — create](00014-css-families-create-css.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › families › operate.css — operate](00015-css-families-operate-css.md) — load when using actual CSS declarations, including dimensions and exceptions.
- [kit › css › families › commerce.css — commerce](00012-css-families-commerce-css.md) — load when using actual CSS declarations, including dimensions and exceptions.
