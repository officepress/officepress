# officepress.css — 7. BUTTONS & CONTROLS -------------------------------------------------------- */

Source: `kit/css/officepress.css`, original lines 305–451. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) · [3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) · [7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) · [8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) · [15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) · [21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md)

<!-- officepress-source:start -->
~~~~css
/* 7. BUTTONS & CONTROLS -------------------------------------------------------- */
.op-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--op-space-2);
  height: var(--op-control-h); padding: 0 var(--op-space-4);   /* text-only: 16 / 16 */
  border: 1px solid transparent; border-radius: var(--op-radius-4);
  font: 700 13px/1 var(--op-font); white-space: nowrap; text-decoration: none;
  transition-property: background-color, border-color, color, scale;
  transition-duration: var(--op-dur-fast), var(--op-dur-fast), var(--op-dur-fast), var(--op-dur);
  transition-timing-function: var(--op-ease-out);
}
.op-btn:hover { text-decoration: none; }
.op-btn:has(> .op-icon:first-child) { padding-left: var(--op-space-3); }   /* optical: icon side 12 */
.op-btn:has(> .op-icon:last-child)  { padding-right: var(--op-space-3); }
.op-btn .op-icon { stroke-width: 2; }
.op-btn--primary   { background: var(--op-accent-strong); color: var(--op-on-accent); }
.op-btn--secondary { background: var(--op-surface); border-color: var(--op-border-strong); color: var(--op-text); }
.op-btn--danger    { background: var(--op-surface); border-color: var(--op-danger); color: var(--op-danger); }
.op-btn--danger-solid { background: var(--op-danger); color: #FFFFFF; }
.op-btn--ghost     { background: transparent; color: var(--op-text); }
.op-btn--link      { background: transparent; color: var(--op-accent-text); padding: 0 var(--op-space-2); }
.op-btn--compact   { height: var(--op-control-compact-h); }
.op-btn--small     { height: var(--op-control-small-h); padding: 0 var(--op-space-3); font-size: 12px; }
.op-btn--large     { height: 44px; font-size: 13px; }     /* auth primary only */
.op-btn--block     { width: 100%; }
.op-btn--primary:hover   { background: color-mix(in srgb, var(--op-accent-strong) 90%, var(--op-text)); }
.op-btn--secondary:hover, .op-btn--ghost:hover { background: var(--op-sunken); }
.op-btn--danger:hover    { background: var(--op-danger-tint); }
.op-btn[disabled], .op-btn[aria-disabled="true"] { opacity: 0.5; pointer-events: none; }

/* Split button (Send ▾) */
.op-split { display: inline-flex; border-radius: var(--op-radius-4); overflow: hidden; background: var(--op-accent-strong); color: var(--op-on-accent); }
.op-split > .op-btn { border-radius: 0; background: transparent; color: inherit; }
.op-split > .op-btn + .op-btn { width: 32px; padding: 0; border-left: 1px solid color-mix(in srgb, var(--op-on-accent) 30%, transparent); }

.op-icon-btn {
  position: relative; display: inline-grid; place-items: center; flex: none;
  width: var(--op-control-h); height: var(--op-control-h); padding: 0;
  border: 1px solid transparent; border-radius: var(--op-radius-4);
  background: transparent; color: var(--op-text);
  transition-property: background-color, border-color, color, scale;
  transition-duration: var(--op-dur-fast), var(--op-dur-fast), var(--op-dur-fast), var(--op-dur);
  transition-timing-function: var(--op-ease-out);
}
.op-icon-btn:hover { background: var(--op-sunken); }
.op-icon-btn--compact { width: var(--op-control-compact-h); height: var(--op-control-compact-h); }
.op-icon-btn--small { width: var(--op-control-small-h); height: var(--op-control-small-h); }
.op-icon-btn--muted { color: var(--op-text-2); }
.op-icon-btn--outline { background: var(--op-surface); border-color: var(--op-border-strong); }
.op-icon-btn--circle { border-radius: var(--op-radius-full); border-color: var(--op-border-strong); background: var(--op-surface); }
.op-icon-btn--circle:hover { background: var(--op-sunken); }
.op-icon-btn[aria-expanded="true"], .op-icon-btn[aria-pressed="true"] { background: var(--op-tint); color: var(--op-accent-text); border-color: var(--op-accent); }
.op-icon-btn__dot { position: absolute; top: 8px; right: 8px; width: 8px; height: 8px; border-radius: var(--op-radius-full); background: var(--op-dot); box-shadow: 0 0 0 1.5px var(--op-surface); }

:is(.op-btn, .op-icon-btn, .op-chip, .op-method):not([data-static]):active { scale: var(--op-press-scale); }

/* Theme button — cross-fade both icons (scale .25→1, opacity 0→1, blur 4px→0) */
.op-theme-btn .op-icon { grid-area: 1 / 1; transition-property: scale, opacity, filter; transition-duration: 300ms; transition-timing-function: var(--op-ease); }
.op-theme-btn .op-icon--sun  { scale: 1; opacity: 1; filter: blur(0); }
.op-theme-btn .op-icon--moon { scale: 0.25; opacity: 0; filter: blur(4px); }
[data-mode="dark"] .op-theme-btn .op-icon--sun  { scale: 0.25; opacity: 0; filter: blur(4px); }
[data-mode="dark"] .op-theme-btn .op-icon--moon { scale: 1; opacity: 1; filter: blur(0); }
.op-no-motion .op-theme-btn .op-icon { transition: none; }

/* Fields */
.op-field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.op-field__label { display: flex; align-items: center; gap: var(--op-space-2); font: 700 12px/1.5 var(--op-font); color: var(--op-text); }
.op-field__label .op-req { color: var(--op-danger); }
.op-field__hint { font: var(--op-text-small); color: var(--op-text-2); }
.op-field__error { font: var(--op-text-small); color: var(--op-danger); }
.op-fields { display: grid; gap: var(--op-space-4); }
.op-fields--2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.op-fields--3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.op-input, .op-select, .op-textarea {
  width: 100%; min-width: 0;
  border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-4);
  background: var(--op-surface); color: var(--op-text);
  transition-property: border-color, box-shadow; transition-duration: var(--op-dur-fast);
}
.op-input, .op-select { height: var(--op-input-h); padding: 0 var(--op-space-3); }
.op-textarea { min-height: 88px; padding: 12px var(--op-space-3); resize: vertical; line-height: 1.5; }
.op-select { appearance: none; padding-right: 36px; background-image: linear-gradient(45deg, transparent 50%, var(--op-text-2) 50%), linear-gradient(135deg, var(--op-text-2) 50%, transparent 50%); background-position: calc(100% - 18px) 18px, calc(100% - 13px) 18px; background-size: 5px 5px; background-repeat: no-repeat; }
:is(.op-input, .op-select, .op-textarea)::placeholder { color: var(--op-text-2); }
:is(.op-input, .op-select, .op-textarea):focus { outline: 0; border-color: var(--op-accent); box-shadow: 0 0 0 1px var(--op-accent); }
:is(.op-input, .op-select, .op-textarea)[aria-invalid="true"] { border-color: var(--op-danger); }
:is(.op-input, .op-textarea)[readonly] { background: var(--op-sunken); }

/* Input with leading / trailing icon */
.op-input-group { position: relative; display: flex; align-items: center; }
.op-input-group > .op-icon { position: absolute; left: var(--op-space-3); color: var(--op-text-2); pointer-events: none; }
.op-input-group > .op-input { padding-left: 36px; }
.op-input-group > .op-input-group__end { position: absolute; right: var(--op-space-1); }
.op-input-group:has(.op-input-group__end) > .op-input { padding-right: 40px; }

.op-search { display: flex; align-items: center; gap: 8px; width: 320px; max-width: 100%; height: var(--op-input-h); padding: 0 12px; border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-full); background: var(--op-sunken); color: var(--op-text-2); }
.op-search--compact { height: var(--op-control-h); }
.op-search input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--op-text); }
.op-search input::placeholder { color: var(--op-text-2); }
.op-search:focus-within { border-color: var(--op-accent); }

/* Checkbox & radio */
.op-check { display: inline-flex; align-items: flex-start; gap: 8px; cursor: pointer; }
.op-check input { appearance: none; flex: none; width: 18px; height: 18px; margin: 1px 0 0; border: 1.5px solid var(--op-border-strong); border-radius: var(--op-radius-4); background: var(--op-surface); display: grid; place-items: center; transition: background-color var(--op-dur-fast), border-color var(--op-dur-fast); }
.op-check input[type="radio"] { border-radius: var(--op-radius-full); }
.op-check input:checked { background: var(--op-accent-strong); border-color: var(--op-accent-strong); }
.op-check input[type="checkbox"]:checked::after { content: ""; width: 9px; height: 5px; border: 2px solid var(--op-on-accent); border-top: 0; border-right: 0; rotate: -45deg; translate: 0 -1px; } /* op-allow: mark geometry */
.op-check input[type="radio"]:checked::after { content: ""; width: 6px; height: 6px; border-radius: var(--op-radius-full); background: var(--op-on-accent); } /* op-allow: mark geometry */
.op-check__text { display: flex; flex-direction: column; }

/* Option card (checkbox with description) */
.op-option { display: flex; gap: 8px; padding: var(--op-space-3); border: 1px solid var(--op-border); border-radius: var(--op-radius-8); cursor: pointer; }
.op-option:has(input:checked) { border-color: var(--op-accent); background: var(--op-tint); }

/* Switch — <button class="op-switch" role="switch" aria-checked="true"> */
.op-switch { display: inline-flex; align-items: center; gap: var(--op-space-2); padding: 0; border: 0; background: none; font-weight: 700; font-size: 12px; color: var(--op-text-2); }
.op-switch::before { content: ""; flex: none; width: 36px; height: 20px; border-radius: var(--op-radius-full); background: var(--op-border-strong); transition: background-color var(--op-dur-fast) var(--op-ease-out); }
.op-switch::after { content: ""; position: absolute; width: 16px; height: 16px; margin-left: 2px; border-radius: var(--op-radius-full); background: #FFFFFF; transition: translate var(--op-dur) var(--op-ease-out); }
.op-switch { position: relative; }
.op-switch[aria-checked="true"] { color: var(--op-text); }
.op-switch[aria-checked="true"]::before { background: var(--op-accent-strong); }
.op-switch[aria-checked="true"]::after { translate: 16px 0; }

/* Segmented control (theme toggle, mode tabs, channel tabs, match all/any) */
.op-segmented { display: inline-flex; align-items: center; gap: 2px; height: var(--op-control-h); padding: var(--op-space-1); border: 1px solid var(--op-border); border-radius: var(--op-radius-full); background: var(--op-sunken); }
.op-segmented > button { display: inline-flex; align-items: center; justify-content: center; gap: 4px; height: 100%; padding: 0 var(--op-space-3); border: 0; border-radius: var(--op-radius-full); background: transparent; color: var(--op-text-2); font: 700 12px/1 var(--op-font); transition: background-color var(--op-dur-fast), color var(--op-dur-fast); }
.op-segmented > button[aria-selected="true"], .op-segmented > button[aria-pressed="true"] { background: var(--op-surface); color: var(--op-text); box-shadow: var(--op-elev-card); }
.op-segmented > button[aria-selected="true"] .op-icon { color: var(--op-accent-text); }
.op-segmented--block { display: flex; width: 100%; height: var(--op-input-h); }
.op-segmented--block > button { flex: 1; }
.op-segmented--square { border-radius: var(--op-radius-8); }      /* 4 inner + 4 padding = 8 */
.op-segmented--square > button { border-radius: var(--op-radius-4); }

/* Underline tabs */
.op-tabs { display: flex; gap: var(--op-space-4); border-bottom: 1px solid var(--op-border); }
.op-tab { display: inline-flex; align-items: center; gap: 4px; padding: var(--op-space-2) 0 12px; border: 0; border-bottom: 2px solid transparent; background: none; color: var(--op-text-2); font: 700 12px/1.5 var(--op-font); }
.op-tab[aria-selected="true"] { color: var(--op-text); border-bottom-color: var(--op-accent); }

/* Chip (filters, quick types, follow-ups) */
.op-chip { display: inline-flex; align-items: center; gap: 4px; height: var(--op-control-small-h); padding: 0 var(--op-space-3); border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-full); background: var(--op-surface); color: var(--op-text); font: 700 11px/1 var(--op-font); white-space: nowrap; transition: background-color var(--op-dur-fast), scale var(--op-dur); }
.op-chip:hover { background: var(--op-sunken); }
.op-chip[aria-pressed="true"] { background: var(--op-tint); border-color: transparent; color: var(--op-on-tint); }

/* OTP / verification code */
.op-otp { display: flex; gap: var(--op-space-2); }
.op-otp input { width: 100%; min-width: 0; height: 56px; border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-8); background: var(--op-surface); text-align: center; font: 700 20px/1 var(--op-font); color: var(--op-text); }
.op-otp input:focus { outline: 0; border-color: var(--op-accent); box-shadow: 0 0 0 1px var(--op-accent); }

~~~~
<!-- officepress-source:end -->
