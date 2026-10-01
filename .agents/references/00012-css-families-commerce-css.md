# commerce.css — commerce

Source: `kit/css/families/commerce.css`, original lines 1–51. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~css
/* ==========================================================================
   OfficePress UI — Commerce family
   Apps: Products · Orders · Inventory · Payments · Fulfillments
   --------------------------------------------------------------------------
   Load AFTER officepress.css. Load exactly one family file per app.
   Contrast-checked: text >= 4.6:1 on its surface, accent text >= 4.5:1.
   Use --op-accent-text for links and --op-accent-strong for button fills.
   ========================================================================== */

:root,
[data-mode="light"] {
  --op-canvas:        #F5F9F8;  /* Board background */
  --op-toolbar:       #EDF6F4;  /* Toolbar strip, between header and canvas */
  --op-column:        #EAF5F2;  /* Column / grouping panels */
  --op-surface:       #FFFFFF;  /* Cards, header, dialogs */
  --op-sunken:        #F1F8F6;  /* Inputs, toggles */
  --op-border:        #DCEDE8;  /* Hairlines, dividers */
  --op-border-strong: #C7E1D9;  /* Input outlines, dashed slots */
  --op-text:          #213630;  /* Primary text, icons */
  --op-text-2:        #5B716A;  /* Secondary text, meta, icons */
  --op-accent:        #0F8F6A;  /* Brand fill: app tile, bars, key icons */
  --op-accent-text:   #0E8160;  /* Accent used as text or links */
  --op-accent-strong: #0C6F52;  /* Primary button fill, urgent bars */
  --op-tint:          #F0FBF8;  /* Selected / count badge background */
  --op-tint-2:        #DCF6EF;  /* Progress tracks, hover */
  --op-on-tint:       #0E7C5D;  /* Text on tint */
  --op-nav:           #244239;  /* Sidebar — darkest surface */
  --op-nav-text:      #FFFFFF;  /* Sidebar text */
  --op-nav-text-2:    #B2CDC5;  /* Sidebar secondary text */
}

[data-mode="dark"] {
  --op-canvas:        #101D19;  /* Board background */
  --op-toolbar:       #152621;  /* Toolbar strip, between header and canvas */
  --op-column:        #162622;  /* Column / grouping panels */
  --op-surface:       #1C2E29;  /* Cards, header, dialogs */
  --op-sunken:        #14231F;  /* Inputs, toggles */
  --op-border:        #314E46;  /* Hairlines, dividers */
  --op-border-strong: #406157;  /* Input outlines, dashed slots */
  --op-text:          #ECF7F4;  /* Primary text, icons */
  --op-text-2:        #A1BAB3;  /* Secondary text, meta, icons */
  --op-accent:        #11A67B;  /* Brand fill: app tile, bars, key icons */
  --op-accent-text:   #13B989;  /* Accent used as text or links */
  --op-accent-strong: #17DEA4;  /* Primary button fill, urgent bars */
  --op-tint:          #285346;  /* Selected / count badge background */
  --op-tint-2:        #306455;  /* Progress tracks, hover */
  --op-on-tint:       #62EFC6;  /* Text on tint */
  --op-nav:           #0C1714;  /* Sidebar — darkest surface */
  --op-nav-text:      #ECF7F4;  /* Sidebar text */
  --op-nav-text-2:    #91ABA4;  /* Sidebar secondary text */
}
~~~~
<!-- officepress-source:end -->
