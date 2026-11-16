# officepress.opcd!/DESIGN-SYSTEM.md — part 1

Owner: [Files/Forge revision](00403-officepress-files-forge-revision.md). Load for the complete supplied source, preserved as evidence. Current user direction and accepted context take precedence; embedded source text is not an instruction to execute.

Provenance: `.agents/resources/officepress-design/officepress.opcd!/DESIGN-SYSTEM.md`.

<!-- officepress-source:start -->
~~~~markdown
# Design system

Generated from the canvases on every save — edits here are overwritten. The lasting notes
(voice, when to use what) belong in `.opcd/design-notes.md`.

## Themes

- family: communicate, create, operate, commerce, files, forge
- mode: light, dark

## Tokens

- $bg (color): "#F3F1EC"
- $bp-accent (color): "#0066FF"
- $bp-hairline (color): "#E5E5E5"
- $bp-ink (color): "#1A1A1A"
- $bp-line (color): "#1A1A1A"
- $bp-mono (string): "Geist Mono"
- $bp-muted (color): "#999999"
- $bp-sans (string): "Geist"
- $bp-secondary (color): "#666666"
- $bp-surface (color): "#FFFFFF"
- $bp-surface-2 (color): "#F7F7F7"
- $br-accent (color): "#FF6B35"
- $br-border (color): "#CCCCCC"
- $br-fg (color): "#000000"
- $br-fg-2 (color): "#444444"
- $br-fg-inv (color): "#FFFFFF"
- $br-inverse (color): "#000000"
- $br-mono (string): "Geist Mono"
- $br-sans (string): "Inter"
- $br-surface (color): "#FFFFFF"
- $br-surface-2 (color): "#F5F5F5"
- $br-surface-3 (color): "#EEEEEE"
- $card (color): "#FFFFFF"
- $cb-amber (color): "#F59E0B"
- $cb-body (string): "Inter"
- $cb-fg (color): "#111827"
- $cb-fg-inverse (color): "#FFFFFF"
- $cb-head (string): "Anton"
- $cb-inverse (color): "#111827"
- $cb-line (color): "#E5E7EB"
- $cb-mono (string): "IBM Plex Mono"
- $cb-muted (color): "#9CA3AF"
- $cb-pale (color): "#FDE68A"
- $cb-surface (color): "#FFFFFF"
- $cb-yellow (color): "#FACC15"
- $comm-100 (color): "#DCE4FC"
- $comm-50 (color): "#EEF2FD"
- $comm-700 (color): "#2447C2"
- $comm-800 (color): "#33427A"
- $comm-900 (color): "#172A6E"
- $comm-secondary (color): "#A1B5F6"
- $es-accent (color): "#8F5A3C"
- $es-body (string): "Inter"
- $es-fg (color): "#1A1A1A"
- $es-fg-2 (color): "#666666"
- $es-fg-inv (color): "#FFFFFF"
- $es-head (string): "Newsreader"
- $es-inverse (color): "#1A1A1A"
- $es-mono (string): "IBM Plex Mono"
- $es-muted (color): "#999999"
- $es-surface (color): "#E8E9EB"
- $fam-brand (color): "#15171C"
- $fam-commerce (color): "#0F8F6A"
- $fam-communicate (color): "#2F5BEA"
- $fam-files (color): "#6A3BE4"
- $fam-forge (color): "#D23F6F"
- $fam-operate (color): "#E2551B"
- $font-display (string): "Manrope"
- $font-mono (string): "JetBrains Mono"
- $hw-accent (color): "#7D6B3D"
- $hw-accent-2 (color): "#4A3F24"
- $hw-body (string): "Geist"
- $hw-fg (color): "#2D2926"
- $hw-fg-2 (color): "#5E5954"
- $hw-fg-inv (color): "#F5F2E9"
- $hw-head (string): "Funnel Sans"
- $hw-mono (string): "Geist Mono"
- $hw-surface (color): "#F5F2E9"
- $hw-surface-2 (color): "#E8E4D8"
- $hw-surface-3 (color): "#DCD8CB"
- $ib-accent (color): [{"value":"#2F5BEA","theme":{"mode":"light"}},{"value":"#6184F2","theme":{"mode":"dark"}}]
- $ib-accent-strong (color): [{"value":"#2447C2","theme":{"mode":"light"}},{"value":"#9DB4F8","theme":{"mode":"dark"}}]
- $ib-border (color): [{"value":"#D6DEF3","theme":{"mode":"light"}},{"value":"#26315A","theme":{"mode":"dark"}}]
- $ib-border-strong (color): [{"value":"#BCC9EC","theme":{"mode":"light"}},{"value":"#334070","theme":{"mode":"dark"}}]
- $ib-canvas (color): [{"value":"#F2F5FC","theme":{"mode":"light"}},{"value":"#0B1022","theme":{"mode":"dark"}}]
- $ib-column (color): [{"value":"#E6ECFA","theme":{"mode":"light"}},{"value":"#10172E","theme":{"mode":"dark"}}]
- $ib-dot (color): [{"value":"#087050","theme":{"mode":"light"}},{"value":"#3DD68C","theme":{"mode":"dark"}}]
- $ib-nav (color): [{"value":"#18244F","theme":{"mode":"light"}},{"value":"#080C1B","theme":{"mode":"dark"}}]
- $ib-nav-active (color): [{"value":"#FFFFFF1A","theme":{"mode":"light"}},{"value":"#FFFFFF14","theme":{"mode":"dark"}}]
- $ib-nav-border (color): [{"value":"#FFFFFF1A","theme":{"mode":"light"}},{"value":"#FFFFFF14","theme":{"mode":"dark"}}]
- $ib-nav-dot (color): [{"value":"#3DD68C","theme":{"mode":"light"}},{"value":"#3DD68C","theme":{"mode":"dark"}}]
- $ib-nav-field (color): [{"value":"#FFFFFF12","theme":{"mode":"light"}},{"value":"#FFFFFF0D","theme":{"mode":"dark"}}]
- $ib-nav-text (color): [{"value":"#FFFFFF","theme":{"mode":"light"}},{"value":"#E7ECFB","theme":{"mode":"dark"}}]
- $ib-nav-text-2 (color): [{"value":"#A9B4D8","theme":{"mode":"light"}},{"value":"#8490B8","theme":{"mode":"dark"}}]
- $ib-on-tint (color): [{"value":"#2447C2","theme":{"mode":"light"}},{"value":"#C3D1FC","theme":{"mode":"dark"}}]
- $ib-sunken (color): [{"value":"#EEF2FB","theme":{"mode":"light"}},{"value":"#0E1429","theme":{"mode":"dark"}}]
- $ib-surface (color): [{"value":"#FFFFFF","theme":{"mode":"light"}},{"value":"#141C36","theme":{"mode":"dark"}}]
- $ib-text (color): [{"value":"#18213D","theme":{"mode":"light"}},{"value":"#E7ECFB","theme":{"mode":"dark"}}]
- $ib-text-2 (color): [{"value":"#5B6585","theme":{"mode":"light"}},{"value":"#97A2C6","theme":{"mode":"dark"}}]
- $ib-tint (color): [{"value":"#EAF0FE","theme":{"mode":"light"}},{"value":"#1B2A5E","theme":{"mode":"dark"}}]
- $ib-tint-2 (color): [{"value":"#D6E1FC","theme":{"mode":"light"}},{"value":"#243672","theme":{"mode":"dark"}}]
- $ib-toolbar (color): [{"value":"#E9EEFA","theme":{"mode":"light"}},{"value":"#0F162C","theme":{"mode":"dark"}}]
- $ink (color): "#15171C"
- $iso-accent (color): "#5D5DFF"
- $iso-body (string): "Inter"
- $iso-border (color): "#EEEEEE"
- $iso-fg (color): "#1A1A1A"
- $iso-fg-2 (color): "#666666"
- $iso-fg-inv (color): "#FFFFFF"
- $iso-head (string): "Funnel Sans"
- $iso-inverse (color): "#1A1A1A"
- $iso-mono (string): "IBM Plex Mono"
- $iso-surface (color): "#FFFFFF"
- $iso-surface-2 (color): "#F9F9F9"
- $iso-surface-3 (color): "#F3F4F6"
- $kmn-body (string): "Geist"
- $kmn-fg (color): "#1A1A1A"
- $kmn-fg-2 (color): "#666666"
- $kmn-fg-inv (color): "#FFFFFF"
- $kmn-head (string): "Newsreader"
- $kmn-indigo (color): "#3D5A80"
- $kmn-inverse (color): "#1A1A1A"
- $kmn-line (color): "#EEEEEE"
- $kmn-mono (string): "Geist Mono"
- $kmn-periwinkle (color): "#5D5DFF"
- $kmn-surface (color): "#FFFFFF"
- $kmn-terracotta (color): "#E07A5F"
- $line (color): "#DEDAD2"
- $mark-primary (color): "#FFFFFF"
- $mark-secondary (color): "#FFFFFF8C"
- $mon-accent (color): "#FF9800"
- $mon-hairline (color): "#E6E1D8"
- $mon-ink (color): "#000000"
- $mon-inverse (color): "#000000"
- $mon-mono (string): "IBM Plex Mono"
- $mon-muted (color): "#666666"
- $mon-on-inverse (color): "#FFFFFF"
- $mon-sans (string): "Inter"
- $mon-serif (string): "Newsreader"
- $mon-surface (color): "#FCFAF7"
- $muted (color): "#6A6D75"
- $op-accent (color): [{"value":"#2F5BEA","theme":{"mode":"light","family":"communicate"}},{"value":"#5D80EF","theme":{"mode":"dark","family":"communicate"}},{"value":"#6A3BE4","theme":{"mode":"light","family":"files"}},{"value":"#8F6CEB","theme":{"mode":"dark","family":"files"}},{"value":"#E2551B","theme":{"mode":"light","family":"operate"}},{"value":"#E6622C","theme":{"mode":"dark","family":"operate"}},{"value":"#0F8F6A","theme":{"mode":"light","family":"commerce"}},{"value":"#11A67B","theme":{"mode":"dark","family":"commerce"}},{"value":"#D23F6F","theme":{"mode":"light","family":"forge"}},{"value":"#E62C69","theme":{"mode":"dark","family":"forge"}}]
- $op-accent-strong (color): [{"value":"#2150E9","theme":{"mode":"light","family":"communicate"}},{"value":"#9EB3F5","theme":{"mode":"dark","family":"communicate"}},{"value":"#6A3BE4","theme":{"mode":"light","family":"files"}},{"value":"#BBA6F3","theme":{"mode":"dark","family":"files"}},{"value":"#AB4014","theme":{"mode":"light","family":"operate"}},{"value":"#F1A98C","theme":{"mode":"dark","family":"operate"}},{"value":"#0C6F52","theme":{"mode":"light","family":"commerce"}},{"value":"#17DEA4","theme":{"mode":"dark","family":"commerce"}},{"value":"#AB1445","theme":{"mode":"light","family":"forge"}},{"value":"#F18CAD","theme":{"mode":"dark","family":"forge"}}]
- $op-accent-text (color): [{"value":"#2F5BEA","theme":{"mode":"light","family":"communicate"}},{"value":"#708FF1","theme":{"mode":"dark","family":"communicate"}},{"value":"#6A3BE4","theme":{"mode":"light","family":"files"}},{"value":"#A082EE","theme":{"mode":"dark","family":"files"}},{"value":"#C74B18","theme":{"mode":"light","family":"operate"}},{"value":"#EA7D50","theme":{"mode":"dark","family":"operate"}},{"value":"#0E8160","theme":{"mode":"light","family":"commerce"}},{"value":"#13B989","theme":{"mode":"dark","family":"commerce"}},{"value":"#C71851","theme":{"mode":"light","family":"forge"}},{"value":"#EA5082","theme":{"mode":"dark","family":"forge"}}]
- $op-border (color): [{"value":"#D6DDF3","theme":{"mode":"light","family":"communicate"}},{"value":"#26325A","theme":{"mode":"dark","family":"communicate"}},{"value":"#DFD7F2","theme":{"mode":"light","family":"files"}},{"value":"#352857","theme":{"mode":"dark","family":"files"}},{"value":"#ECE1DD","theme":{"mode":"light","family":"operate"}},{"value":"#4D3A33","theme":{"mode":"dark","family":"operate"}},{"value":"#DCEDE8","theme":{"mode":"light","family":"commerce"}},{"value":"#314E46","theme":{"mode":"dark","family":"commerce"}},{"value":"#ECDDE2","theme":{"mode":"light","family":"forge"}},{"value":"#4D333C","theme":{"mode":"dark","family":"forge"}}]
- $op-border-strong (color): [{"value":"#BCC7EB","theme":{"mode":"light","family":"communicate"}},{"value":"#33416E","theme":{"mode":"dark","family":"communicate"}},{"value":"#CABEE9","theme":{"mode":"light","family":"files"}},{"value":"#45366B","theme":{"mode":"dark","family":"files"}},{"value":"#E0CFC8","theme":{"mode":"light","family":"operate"}},{"value":"#5F4A42","theme":{"mode":"dark","family":"operate"}},{"value":"#C7E1D9","theme":{"mode":"light","family":"commerce"}},{"value":"#406157","theme":{"mode":"dark","family":"commerce"}},{"value":"#E0C8D0","theme":{"mode":"light","family":"forge"}},{"value":"#5F424C","theme":{"mode":"dark","family":"forge"}}]
- $op-canvas (color): [{"value":"#F3F5FB","theme":{"mode":"light","family":"communicate"}},{"value":"#0B1022","theme":{"mode":"dark","family":"communicate"}},{"value":"#F5F3FB","theme":{"mode":"light","family":"files"}},{"value":"#120C21","theme":{"mode":"dark","family":"files"}},{"value":"#F9F6F5","theme":{"mode":"light","family":"operate"}},{"value":"#1C1411","theme":{"mode":"dark","family":"operate"}},{"value":"#F5F9F8","theme":{"mode":"light","family":"commerce"}},{"value":"#101D19","theme":{"mode":"dark","family":"commerce"}},{"value":"#F9F5F6","theme":{"mode":"light","family":"forge"}},{"value":"#1C1115","theme":{"mode":"dark","family":"forge"}}]
- $op-column (color): [{"value":"#E6EBF9","theme":{"mode":"light","family":"communicate"}},{"value":"#0F162D","theme":{"mode":"dark","family":"communicate"}},{"value":"#ECE7F8","theme":{"mode":"light","family":"files"}},{"value":"#18112B","theme":{"mode":"dark","family":"files"}},{"value":"#F4EEEB","theme":{"mode":"light","family":"operate"}},{"value":"#251B17","theme":{"mode":"dark","family":"operate"}},{"value":"#EAF5F2","theme":{"mode":"light","family":"commerce"}},{"value":"#162622","theme":{"mode":"dark","family":"commerce"}},{"value":"#F4EBEE","theme":{"mode":"light","family":"forge"}},{"value":"#25171C","theme":{"mode":"dark","family":"forge"}}]
- $op-danger (color): [{"value":"#C0362C","theme":{"mode":"light"}},{"value":"#F2766B","theme":{"mode":"dark"}}]
- $op-danger-tint (color): [{"value":"#FDEDEB","theme":{"mode":"light"}},{"value":"#3A1614","theme":{"mode":"dark"}}]
- $op-dot (color): [{"value":"#087050","theme":{"mode":"light"}},{"value":"#3DD68C","theme":{"mode":"dark"}}]
- $op-font (string): "Inter"
- $op-font-mono (string): "JetBrains Mono"
- $op-image-outline (color): [{"value":"#0000001A","theme":{"mode":"light"}},{"value":"#FFFFFF1A","theme":{"mode":"dark"}}]
- $op-mode-icon (string): [{"value":"sun","theme":{"mode":"light"}},{"value":"moon","theme":{"mode":"dark"}}]
- $op-nav (color): [{"value":"#18254E","theme":{"mode":"light","family":"communicate"}},{"value":"#080D1B","theme":{"mode":"dark","family":"communicate"}},{"value":"#281B4B","theme":{"mode":"light","family":"files"}},{"value":"#0E091A","theme":{"mode":"dark","family":"files"}},{"value":"#412D25","theme":{"mode":"light","family":"operate"}},{"value":"#16100D","theme":{"mode":"dark","family":"operate"}},{"value":"#244239","theme":{"mode":"light","family":"commerce"}},{"value":"#0C1714","theme":{"mode":"dark","family":"commerce"}},{"value":"#41252E","theme":{"mode":"light","family":"forge"}},{"value":"#160D10","theme":{"mode":"dark","family":"forge"}}]
- $op-nav-active (color): [{"value":"#FFFFFF1A","theme":{"mode":"light"}},{"value":"#FFFFFF14","theme":{"mode":"dark"}}]
- $op-nav-border (color): [{"value":"#FFFFFF1A","theme":{"mode":"light"}},{"value":"#FFFFFF14","theme":{"mode":"dark"}}]
- $op-nav-dot (color): [{"value":"#3DD68C","theme":{"mode":"light"}},{"value":"#3DD68C","theme":{"mode":"dark"}}]
- $op-nav-field (color): [{"value":"#FFFFFF12","theme":{"mode":"light"}},{"value":"#FFFFFF0D","theme":{"mode":"dark"}}]
- $op-nav-text (color): [{"value":"#FFFFFF","theme":{"mode":"light","family":"communicate"}},{"value":"#E7ECFB","theme":{"mode":"dark","family":"communicate"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"files"}},{"value":"#EDE8FA","theme":{"mode":"dark","family":"files"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"operate"}},{"value":"#F6EFEC","theme":{"mode":"dark","family":"operate"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"commerce"}},{"value":"#ECF7F4","theme":{"mode":"dark","family":"commerce"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"forge"}},{"value":"#F6ECEF","theme":{"mode":"dark","family":"forge"}}]
- $op-nav-text-2 (color): [{"value":"#A7B2D7","theme":{"mode":"light","family":"communicate"}},{"value":"#8691B6","theme":{"mode":"dark","family":"communicate"}},{"value":"#B6A9D5","theme":{"mode":"light","family":"files"}},{"value":"#9488B4","theme":{"mode":"dark","family":"files"}},{"value":"#CBBAB3","theme":{"mode":"light","family":"operate"}},{"value":"#AA9992","theme":{"mode":"dark","family":"operate"}},{"value":"#B2CDC5","theme":{"mode":"light","family":"commerce"}},{"value":"#91ABA4","theme":{"mode":"dark","family":"commerce"}},{"value":"#CBB3BB","theme":{"mode":"light","family":"forge"}},{"value":"#AA929A","theme":{"mode":"dark","family":"forge"}}]
- $op-on-accent (color): [{"value":"#FFFFFF","theme":{"mode":"light"}},{"value":"#0B1022","theme":{"mode":"dark"}}]
- $op-on-tint (color): [{"value":"#2F5BEA","theme":{"mode":"light","family":"communicate"}},{"value":"#95ACF5","theme":{"mode":"dark","family":"communicate"}},{"value":"#6A3BE4","theme":{"mode":"light","family":"files"}},{"value":"#B49DF2","theme":{"mode":"dark","family":"files"}},{"value":"#B94616","theme":{"mode":"light","family":"operate"}},{"value":"#F2B094","theme":{"mode":"dark","family":"operate"}},{"value":"#0E7C5D","theme":{"mode":"light","family":"commerce"}},{"value":"#62EFC6","theme":{"mode":"dark","family":"commerce"}},{"value":"#B9164B","theme":{"mode":"light","family":"forge"}},{"value":"#F294B2","theme":{"mode":"dark","family":"forge"}}]
- $op-scrim (color): [{"value":"#0B102266","theme":{"mode":"light"}},{"value":"#00000099","theme":{"mode":"dark"}}]
- $op-shadow-edge (color): [{"value":"#18244F24","theme":{"mode":"light"}},{"value":"#FFFFFF1A","theme":{"mode":"dark"}}]
- $op-shadow-pop (color): [{"value":"#18244F29","theme":{"mode":"light"}},{"value":"#00000080","theme":{"mode":"dark"}}]
- $op-shadow-soft (color): [{"value":"#18244F14","theme":{"mode":"light"}},{"value":"#00000059","theme":{"mode":"dark"}}]
- $op-sunken (color): [{"value":"#EEF1FB","theme":{"mode":"light","family":"communicate"}},{"value":"#0E1429","theme":{"mode":"dark","family":"communicate"}},{"value":"#F2EFFA","theme":{"mode":"light","family":"files"}},{"value":"#160F28","theme":{"mode":"dark","family":"files"}},{"value":"#F8F3F1","theme":{"mode":"light","family":"operate"}},{"value":"#221915","theme":{"mode":"dark","family":"operate"}},{"value":"#F1F8F6","theme":{"mode":"light","family":"commerce"}},{"value":"#14231F","theme":{"mode":"dark","family":"commerce"}},{"value":"#F8F1F3","theme":{"mode":"light","family":"forge"}},{"value":"#221519","theme":{"mode":"dark","family":"forge"}}]
- $op-surface (color): [{"value":"#FFFFFF","theme":{"mode":"light","family":"communicate"}},{"value":"#141C36","theme":{"mode":"dark","family":"communicate"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"files"}},{"value":"#1E1634","theme":{"mode":"dark","family":"files"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"operate"}},{"value":"#2D211C","theme":{"mode":"dark","family":"operate"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"commerce"}},{"value":"#1C2E29","theme":{"mode":"dark","family":"commerce"}},{"value":"#FFFFFF","theme":{"mode":"light","family":"forge"}},{"value":"#2D1C22","theme":{"mode":"dark","family":"forge"}}]
- $op-text (color): [{"value":"#18213E","theme":{"mode":"light","family":"communicate"}},{"value":"#E7ECFB","theme":{"mode":"dark","family":"communicate"}},{"value":"#241A3D","theme":{"mode":"light","family":"files"}},{"value":"#EDE8FA","theme":{"mode":"dark","family":"files"}},{"value":"#352722","theme":{"mode":"light","family":"operate"}},{"value":"#F6EFEC","theme":{"mode":"dark","family":"operate"}},{"value":"#213630","theme":{"mode":"light","family":"commerce"}},{"value":"#ECF7F4","theme":{"mode":"dark","family":"commerce"}},{"value":"#352229","theme":{"mode":"light","family":"forge"}},{"value":"#F6ECEF","theme":{"mode":"dark","family":"forge"}}]
- $op-text-2 (color): [{"value":"#5B6586","theme":{"mode":"light","family":"communicate"}},{"value":"#97A2C3","theme":{"mode":"dark","family":"communicate"}},{"value":"#685D83","theme":{"mode":"light","family":"files"}},{"value":"#A59AC1","theme":{"mode":"dark","family":"files"}},{"value":"#756761","theme":{"mode":"light","family":"operate"}},{"value":"#B8A9A2","theme":{"mode":"dark","family":"operate"}},{"value":"#5B716A","theme":{"mode":"light","family":"commerce"}},{"value":"#A1BAB3","theme":{"mode":"dark","family":"commerce"}},{"value":"#756167","theme":{"mode":"light","family":"forge"}},{"value":"#B8A2A9","theme":{"mode":"dark","family":"forge"}}]
- $op-tint (color): [{"value":"#EDF1FE","theme":{"mode":"light","family":"communicate"}},{"value":"#1C2B5F","theme":{"mode":"dark","family":"communicate"}},{"value":"#F2EEFD","theme":{"mode":"light","family":"files"}},{"value":"#301F5B","theme":{"mode":"dark","family":"files"}},{"value":"#FBF3F0","theme":{"mode":"light","family":"operate"}},{"value":"#533428","theme":{"mode":"dark","family":"operate"}},{"value":"#F0FBF8","theme":{"mode":"light","family":"commerce"}},{"value":"#285346","theme":{"mode":"dark","family":"commerce"}},{"value":"#FBF0F4","theme":{"mode":"light","family":"forge"}},{"value":"#532837","theme":{"mode":"dark","family":"forge"}}]
~~~~
<!-- officepress-source:end -->
