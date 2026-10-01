# create.css — create

Source: `kit/css/families/create.css`, original lines 1–51. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~css
/* ==========================================================================
   OfficePress UI — Create family
   Apps: Drive · Tables · Forms · Whiteboards · Diagrams · Content
   --------------------------------------------------------------------------
   Load AFTER officepress.css. Load exactly one family file per app.
   Contrast-checked: text >= 4.6:1 on its surface, accent text >= 4.5:1.
   Use --op-accent-text for links and --op-accent-strong for button fills.
   ========================================================================== */

:root,
[data-mode="light"] {
  --op-canvas:        #F5F3FB;  /* Board background */
  --op-toolbar:       #EEEAF9;  /* Toolbar strip, between header and canvas */
  --op-column:        #ECE7F8;  /* Column / grouping panels */
  --op-surface:       #FFFFFF;  /* Cards, header, dialogs */
  --op-sunken:        #F2EFFA;  /* Inputs, toggles */
  --op-border:        #DFD7F2;  /* Hairlines, dividers */
  --op-border-strong: #CABEE9;  /* Input outlines, dashed slots */
  --op-text:          #241A3D;  /* Primary text, icons */
  --op-text-2:        #685D83;  /* Secondary text, meta, icons */
  --op-accent:        #6A3BE4;  /* Brand fill: app tile, bars, key icons */
  --op-accent-text:   #6A3BE4;  /* Accent used as text or links */
  --op-accent-strong: #6A3BE4;  /* Primary button fill, urgent bars */
  --op-tint:          #F2EEFD;  /* Selected / count badge background */
  --op-tint-2:        #E2D8FA;  /* Progress tracks, hover */
  --op-on-tint:       #6A3BE4;  /* Text on tint */
  --op-nav:           #281B4B;  /* Sidebar — darkest surface */
  --op-nav-text:      #FFFFFF;  /* Sidebar text */
  --op-nav-text-2:    #B6A9D5;  /* Sidebar secondary text */
}

[data-mode="dark"] {
  --op-canvas:        #120C21;  /* Board background */
  --op-toolbar:       #18102B;  /* Toolbar strip, between header and canvas */
  --op-column:        #18112B;  /* Column / grouping panels */
  --op-surface:       #1E1634;  /* Cards, header, dialogs */
  --op-sunken:        #160F28;  /* Inputs, toggles */
  --op-border:        #352857;  /* Hairlines, dividers */
  --op-border-strong: #45366B;  /* Input outlines, dashed slots */
  --op-text:          #EDE8FA;  /* Primary text, icons */
  --op-text-2:        #A59AC1;  /* Secondary text, meta, icons */
  --op-accent:        #8F6CEB;  /* Brand fill: app tile, bars, key icons */
  --op-accent-text:   #A082EE;  /* Accent used as text or links */
  --op-accent-strong: #BBA6F3;  /* Primary button fill, urgent bars */
  --op-tint:          #301F5B;  /* Selected / count badge background */
  --op-tint-2:        #3B276D;  /* Progress tracks, hover */
  --op-on-tint:       #B49DF2;  /* Text on tint */
  --op-nav:           #0E091A;  /* Sidebar — darkest surface */
  --op-nav-text:      #EDE8FA;  /* Sidebar text */
  --op-nav-text-2:    #9488B4;  /* Sidebar secondary text */
}
~~~~
<!-- officepress-source:end -->
