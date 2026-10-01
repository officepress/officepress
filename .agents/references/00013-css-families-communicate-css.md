# communicate.css — communicate

Source: `kit/css/families/communicate.css`, original lines 1–51. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~css
/* ==========================================================================
   OfficePress UI — Communicate family
   Apps: Inbox · Chat · Meet · Calendar · Support · Agent
   --------------------------------------------------------------------------
   Load AFTER officepress.css. Load exactly one family file per app.
   Contrast-checked: text >= 4.6:1 on its surface, accent text >= 4.5:1.
   Use --op-accent-text for links and --op-accent-strong for button fills.
   ========================================================================== */

:root,
[data-mode="light"] {
  --op-canvas:        #F3F5FB;  /* Board background */
  --op-toolbar:       #EAEDFA;  /* Toolbar strip, between header and canvas */
  --op-column:        #E6EBF9;  /* Column / grouping panels */
  --op-surface:       #FFFFFF;  /* Cards, header, dialogs */
  --op-sunken:        #EEF1FB;  /* Inputs, toggles */
  --op-border:        #D6DDF3;  /* Hairlines, dividers */
  --op-border-strong: #BCC7EB;  /* Input outlines, dashed slots */
  --op-text:          #18213E;  /* Primary text, icons */
  --op-text-2:        #5B6586;  /* Secondary text, meta, icons */
  --op-accent:        #2F5BEA;  /* Brand fill: app tile, bars, key icons */
  --op-accent-text:   #2F5BEA;  /* Accent used as text or links */
  --op-accent-strong: #2150E9;  /* Primary button fill, urgent bars */
  --op-tint:          #EDF1FE;  /* Selected / count badge background */
  --op-tint-2:        #D6DFFC;  /* Progress tracks, hover */
  --op-on-tint:       #2F5BEA;  /* Text on tint */
  --op-nav:           #18254E;  /* Sidebar — darkest surface */
  --op-nav-text:      #FFFFFF;  /* Sidebar text */
  --op-nav-text-2:    #A7B2D7;  /* Sidebar secondary text */
}

[data-mode="dark"] {
  --op-canvas:        #0B1022;  /* Board background */
  --op-toolbar:       #0F162C;  /* Toolbar strip, between header and canvas */
  --op-column:        #0F162D;  /* Column / grouping panels */
  --op-surface:       #141C36;  /* Cards, header, dialogs */
  --op-sunken:        #0E1429;  /* Inputs, toggles */
  --op-border:        #26325A;  /* Hairlines, dividers */
  --op-border-strong: #33416E;  /* Input outlines, dashed slots */
  --op-text:          #E7ECFB;  /* Primary text, icons */
  --op-text-2:        #97A2C3;  /* Secondary text, meta, icons */
  --op-accent:        #5D80EF;  /* Brand fill: app tile, bars, key icons */
  --op-accent-text:   #708FF1;  /* Accent used as text or links */
  --op-accent-strong: #9EB3F5;  /* Primary button fill, urgent bars */
  --op-tint:          #1C2B5F;  /* Selected / count badge background */
  --op-tint-2:        #233670;  /* Progress tracks, hover */
  --op-on-tint:       #95ACF5;  /* Text on tint */
  --op-nav:           #080D1B;  /* Sidebar — darkest surface */
  --op-nav-text:      #E7ECFB;  /* Sidebar text */
  --op-nav-text-2:    #8691B6;  /* Sidebar secondary text */
}
~~~~
<!-- officepress-source:end -->
