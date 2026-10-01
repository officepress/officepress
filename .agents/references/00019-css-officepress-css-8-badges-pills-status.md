# officepress.css — 8. BADGES, PILLS, STATUS ----------------------------------------------------- */; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- */; 10. CARDS & SECTIONS ------------------------------------------------------------ */; 11. POPOVERS & MENUS ---------------------------------------------------------- */; 12. AGENT PANEL -------------------------------------------------------------- */; 13. TABLES & STATS ------------------------------------------------------------ */; 14. WORKFLOW BOARD ------------------------------------------------------------- */

Source: `kit/css/officepress.css`, original lines 452–617. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; 1. SHARED TOKENS; 2. BASE & TYPE ----------------------------------------------------------- * › ](00016-css-officepress-css-introduction.md) · [3. ICONS & IMAGES; 4. APP FRAME; 5. ASIDE ------------------------------------------------------------------ * › ; 6. HEADER](00017-css-officepress-css-3-icons-images.md) · [7. BUTTONS & CONTROLS -------------------------------------------------------- * › ](00018-css-officepress-css-7-buttons-controls.md) · [8. BADGES, PILLS, STATUS ----------------------------------------------------- * › ; 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- * › ; 10. CARDS & SECTIONS ------------------------------------------------------------ * › ; 11. POPOVERS & MENUS ---------------------------------------------------------- * › ; 12. AGENT PANEL -------------------------------------------------------------- * › ; 13. TABLES & STATS ------------------------------------------------------------ * › ; 14. WORKFLOW BOARD ------------------------------------------------------------- * › ](00019-css-officepress-css-8-badges-pills-status.md) · [15. AUTOMATION BUILDER ---------------------------------------------------------- * › ; 16. FORM BUILDER ---------------------------------------------------------------- * › ; 17. MESSAGE TEMPLATES --------------------------------------------------------- * › ; 18. CHAT ---------------------------------------------------------------------- * › ; 19. SETTINGS PAGES (full page, no aside); 20. AUTH PAGES](00020-css-officepress-css-15-automation-builder.md) · [21. DIALOG (confirmations; destructive actions confirm by typing) ------------------ * › ; 22. MOBILE (< 768px) ------------------------------------------------------------------ * › ; 23. MOTION RESTRAINT -------------------------------------------------------------------- * › ](00021-css-officepress-css-21-dialog-confirmations-destructive-actions-confirm-by-typing.md)

<!-- officepress-source:start -->
~~~~css
/* 8. BADGES, PILLS, STATUS ----------------------------------------------------- */
.op-badge { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 8px; border-radius: var(--op-radius-full); background: var(--op-tint); color: var(--op-on-tint); font: 700 11px/1 var(--op-font); }
.op-badge--neutral { background: var(--op-sunken); color: var(--op-text-2); }
.op-badge--accent { background: var(--op-accent-strong); color: var(--op-on-accent); }   /* stays visible on tint rows */
.op-pill { display: inline-flex; align-items: center; gap: var(--op-space-1); height: 20px; padding: 0 var(--op-space-2); border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-full); font: 700 11px/1 var(--op-font); color: var(--op-text); white-space: nowrap; }
.op-pill--tint    { background: var(--op-tint); border-color: transparent; color: var(--op-on-tint); }
.op-pill--neutral { background: var(--op-sunken); border-color: transparent; color: var(--op-text-2); }
.op-pill--danger  { background: var(--op-danger-tint); border-color: transparent; color: var(--op-danger); }
.op-pill--warning { background: var(--op-warning-tint); border-color: transparent; color: var(--op-warning); }
.op-pill--accent  { background: var(--op-accent-strong); border-color: transparent; color: var(--op-on-accent); }
.op-pill--lg { height: 24px; padding: 0 12px; }

.op-dot { display: inline-block; flex: none; width: 8px; height: 8px; border-radius: var(--op-radius-full); background: var(--op-dot); box-shadow: 0 0 0 1.5px var(--op-surface); }
.op-dot--muted  { background: var(--op-text-2); }
.op-dot--danger { background: var(--op-danger); }
.op-dot--accent { background: var(--op-accent); }

.op-status { display: inline-flex; align-items: center; gap: 4px; height: 24px; padding: 0 12px; border-radius: var(--op-radius-full); background: var(--op-sunken); color: var(--op-text-2); font: 700 11px/1 var(--op-font); }
.op-status::before { content: ""; width: 8px; height: 8px; border-radius: var(--op-radius-full); background: currentColor; }
.op-status--on { background: var(--op-tint); color: var(--op-on-tint); }
.op-status--on::before { background: var(--op-dot); }

.op-progress { height: 6px; /* op-allow: track thickness */ border-radius: var(--op-radius-full); background: var(--op-tint-2); overflow: hidden; }
.op-progress--thin { height: 4px; }
.op-progress__bar { height: 100%; border-radius: inherit; background: var(--op-accent); }
.op-progress--urgent .op-progress__bar { background: var(--op-accent-strong); }

.op-notice { display: flex; gap: var(--op-space-3); padding: var(--op-space-4); border-radius: var(--op-radius-8); background: var(--op-warning-tint); color: var(--op-text); }
.op-notice > .op-icon { color: var(--op-warning); margin-top: 2px; }
.op-notice__title { font-weight: 700; color: var(--op-warning); }
.op-notice--info { background: var(--op-tint); }
.op-notice--info > .op-icon, .op-notice--info .op-notice__title { color: var(--op-on-tint); }
.op-notice ul { margin: var(--op-space-1) 0 0; padding-left: 16px; font: var(--op-text-small); }

.op-empty { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: var(--op-space-10) var(--op-space-8); text-align: center; }
.op-empty__icon { display: grid; place-items: center; width: 48px; height: 48px; border-radius: var(--op-radius-full); background: var(--op-tint); color: var(--op-accent-text); }

/* 9. CONTENT: TOOLBAR & BOARD --------------------------------------------------- */
.op-toolbar { display: flex; align-items: center; flex-wrap: wrap; gap: var(--op-space-3); padding: var(--op-space-3) var(--op-space-4); background: var(--op-toolbar); border-bottom: 1px solid var(--op-border); }

.op-board { position: relative; display: flex; align-items: flex-start; gap: var(--op-space-4); flex: 1; padding: var(--op-space-4); overflow-x: auto; }
.op-column { display: flex; flex-direction: column; flex: 0 0 304px; max-height: 100%; border: 1px solid var(--op-border); border-radius: var(--op-radius-16); background: var(--op-column); overflow: hidden; }
.op-column--fluid { flex: 1 1 0; min-width: 220px; }
.op-column[data-blocked] { opacity: 0.55; }
.op-column__header { display: flex; flex-direction: column; gap: 2px; padding: var(--op-space-3); background: var(--op-surface); border-bottom: 1px solid var(--op-border); }
.op-column__title { display: flex; align-items: center; gap: var(--op-space-2); font-weight: 700; }
.op-column__meta { display: flex; align-items: center; gap: 8px; font: var(--op-text-caption); color: var(--op-text-2); }
.op-column__meta > span { display: inline-flex; align-items: center; gap: var(--op-space-1); }
.op-column__cards { display: flex; flex-direction: column; gap: var(--op-space-2); padding: var(--op-space-2); overflow-y: auto; }
.op-column__add { display: flex; align-items: center; justify-content: center; gap: var(--op-space-2); flex: 0 0 304px; height: 112px; border: 1px dashed var(--op-tint-2); border-radius: var(--op-radius-16); background: var(--op-tint); color: var(--op-accent-text); font-weight: 700; }

.op-drop-slot { display: grid; place-items: center; height: 96px; border: 1.5px dashed var(--op-accent); border-radius: var(--op-radius-8); background: var(--op-tint); color: var(--op-on-tint); font: 700 12px/1.5 var(--op-font); }
.op-blocked-slot { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--op-space-1); height: 96px; border: 1px dashed var(--op-border-strong); border-radius: var(--op-radius-8); color: var(--op-text-2); font: var(--op-text-caption); }

/* 10. CARDS & SECTIONS ------------------------------------------------------------ */
.op-card { display: flex; flex-direction: column; gap: var(--op-space-2); padding: var(--op-space-3); border-radius: var(--op-radius-8); background: var(--op-surface); box-shadow: var(--op-elev-card); color: inherit; text-decoration: none; transition: box-shadow var(--op-dur-fast) var(--op-ease-out); }
a.op-card:hover { text-decoration: none; box-shadow: var(--op-elev-card-hover); }
.op-card[aria-selected="true"], .op-card[data-highlight] { box-shadow: 0 0 0 2px var(--op-accent), var(--op-elev-card); }
.op-card__meta { display: flex; align-items: center; justify-content: space-between; gap: var(--op-space-2); }
.op-card__title { display: flex; align-items: center; gap: var(--op-space-2); font-weight: 700; }
.op-card__preview { font: var(--op-text-small); color: var(--op-text-2); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.op-card__foot { display: flex; align-items: center; gap: var(--op-space-2); color: var(--op-text-2); font: var(--op-text-caption); }

.op-section { border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-section--danger { box-shadow: 0 0 0 1px var(--op-danger); }
.op-section__head { display: flex; align-items: flex-start; gap: var(--op-space-3); padding: var(--op-space-5) var(--op-space-6); border-bottom: 1px solid var(--op-border); }
.op-section__head > div { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: var(--op-space-1); }
.op-section__title { font: var(--op-text-title); }
.op-section--danger .op-section__title { color: var(--op-danger); }
.op-section__desc { font: var(--op-text-body); color: var(--op-text-2); }
.op-section__body { display: flex; flex-direction: column; gap: var(--op-space-5); padding: var(--op-space-6); }
.op-section__foot { display: flex; align-items: center; gap: 8px; padding: var(--op-space-3) var(--op-space-6); background: var(--op-toolbar); border-top: 1px solid var(--op-border); border-radius: 0 0 var(--op-radius-12) var(--op-radius-12); }
.op-section__foot > .op-small:first-child { flex: 1; color: var(--op-text-2); }

/* Settings-style row: icon tile · text · actions */
.op-item-row { display: flex; align-items: center; gap: var(--op-space-4); }
.op-item-row__text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.op-item-row__actions { display: flex; align-items: center; gap: 8px; }

/* Key/value list */
.op-kv { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 8px var(--op-space-2); align-items: center; font: var(--op-text-small); }
.op-kv dt { color: var(--op-text-2); }
.op-kv dd { margin: 0; font-weight: 700; min-width: 0; overflow-wrap: anywhere; }

/* 11. POPOVERS & MENUS ---------------------------------------------------------- */
.op-popover {
  position: absolute; top: calc(100% + 8px); right: 0; z-index: var(--op-z-popover);
  border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-pop);
  opacity: 0; translate: 0 4px; visibility: hidden;
  transition-property: opacity, translate, visibility; transition-duration: var(--op-dur-fast); transition-timing-function: var(--op-ease-out);
}
.op-popover[data-open] { opacity: 1; translate: 0 0; visibility: visible; transition-duration: var(--op-dur); }

.op-menu { width: 280px; padding: var(--op-space-2); display: flex; flex-direction: column; gap: var(--op-space-1); }
.op-menu__identity { display: flex; align-items: center; gap: var(--op-space-3); padding: var(--op-space-2) var(--op-space-2) var(--op-space-3); }
.op-menu__item { display: flex; align-items: center; gap: var(--op-space-3); width: 100%; height: var(--op-control-h); padding: 0 var(--op-space-2); border: 0; border-radius: var(--op-radius-4); background: transparent; color: var(--op-text); font-weight: 400; text-align: left; text-decoration: none; transition: background-color var(--op-dur-fast) var(--op-ease-out); }
.op-menu__item:hover, .op-menu__item:focus-visible { background: var(--op-sunken); text-decoration: none; }
.op-menu__item > .op-icon { color: var(--op-text-2); }
.op-menu__item > span:first-of-type { flex: 1; }

.op-notifs { width: 380px; max-height: min(640px, calc(100dvh - 96px)); display: flex; flex-direction: column; overflow: hidden; }
.op-notifs__head { display: flex; align-items: center; gap: var(--op-space-2); padding: 12px var(--op-space-3) 12px var(--op-space-4); }
.op-notifs .op-tabs { padding: 0 var(--op-space-4); }
.op-notifs__list { overflow-y: auto; }
.op-notifs__group { padding: 12px var(--op-space-4) var(--op-space-1); }
.op-notif { display: flex; gap: var(--op-space-3); padding: 12px var(--op-space-4); }
.op-notif[data-unread] { background: var(--op-sunken); }
.op-notif__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: var(--op-space-1); }
.op-notif__meta { display: flex; align-items: center; gap: 4px; font: var(--op-text-caption); color: var(--op-text-2); }
.op-notif__quote { padding-left: 12px; border-left: 2px solid var(--op-border-strong); font: var(--op-text-small); color: var(--op-text-2); }
.op-notifs__foot { display: flex; justify-content: center; padding: var(--op-space-3) var(--op-space-4); border-top: 1px solid var(--op-border); }
.op-app-tag { display: inline-flex; align-items: center; gap: var(--op-space-1); height: 18px; padding: 0 8px; border: 1px solid var(--op-border); border-radius: var(--op-radius-4); font: 700 11px/1 var(--op-font); color: var(--op-text-2); }
.op-app-tag::before { content: ""; width: 6px; height: 6px; border-radius: 2px; background: var(--op-app-tag, var(--op-fam, var(--op-accent))); } /* op-allow: mark geometry */

/* 12. AGENT PANEL -------------------------------------------------------------- */
.op-agent { display: flex; flex-direction: column; min-width: 0; min-height: 0; overflow: hidden; background: var(--op-surface); border-left: 1px solid var(--op-border); }
.op-app:not([data-agent="open"]) .op-agent { visibility: hidden; }
.op-agent__head { display: flex; align-items: center; gap: 8px; min-height: 56px; padding: 0 var(--op-space-3) 0 var(--op-space-4); border-bottom: 1px solid var(--op-border); }
.op-agent__mark { display: grid; place-items: center; flex: none; width: 28px; height: 28px; border-radius: var(--op-radius-8); background: var(--op-accent); color: #FFFFFF; }
.op-agent__context { display: flex; align-items: center; gap: var(--op-space-2); padding: 12px var(--op-space-4); background: var(--op-toolbar); border-bottom: 1px solid var(--op-border); }
.op-agent__thread { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; gap: var(--op-space-4); padding: var(--op-space-4); overflow-y: auto; }
.op-agent__starter { display: flex; align-items: center; gap: var(--op-space-3); width: 100%; padding: 12px var(--op-space-3); border: 0; border-radius: var(--op-radius-8); background: var(--op-surface); box-shadow: var(--op-elev-card); color: var(--op-text); text-align: left; }
.op-agent__starter:hover { background: var(--op-sunken); }
.op-msg-user { align-self: flex-end; max-width: 300px; padding: 12px var(--op-space-3); border-radius: var(--op-radius-12) var(--op-radius-12) var(--op-radius-4) var(--op-radius-12); background: var(--op-tint); }
.op-msg-agent { display: flex; gap: 8px; }
.op-action { display: flex; align-items: center; gap: 8px; padding: 12px var(--op-space-3); border: 1px solid var(--op-border); border-radius: var(--op-radius-8); background: var(--op-sunken); }
.op-action__name { font: 700 11px/1.5 var(--op-font); letter-spacing: 0.3px; color: var(--op-text-2); }
.op-agent__composer { display: flex; flex-direction: column; gap: var(--op-space-3); margin: var(--op-space-3) var(--op-space-4) var(--op-space-1); padding: var(--op-space-3); border: 1px solid var(--op-border-strong); border-radius: var(--op-radius-12); background: var(--op-surface); }
.op-agent__composer:focus-within { border-color: var(--op-accent); }
.op-agent__composer textarea { min-height: 40px; border: 0; outline: 0; resize: none; background: transparent; color: var(--op-text); }
.op-agent__composer textarea::placeholder { color: var(--op-text-2); }
.op-agent__controls { display: flex; align-items: center; gap: var(--op-space-1); }
.op-agent__disclaimer { padding: 0 var(--op-space-4) var(--op-space-3); text-align: center; font: var(--op-text-caption); color: var(--op-text-2); }
.op-send { width: 32px; height: 32px; border-radius: var(--op-radius-full); background: var(--op-accent-strong); color: var(--op-on-accent); }
.op-send:hover { background: var(--op-accent-strong); }

/* 13. TABLES & STATS ------------------------------------------------------------ */
.op-table-wrap { border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); overflow: hidden; }
.op-table-wrap__filters { display: flex; align-items: center; gap: var(--op-space-3); padding: 12px var(--op-space-4); border-bottom: 1px solid var(--op-border); }
.op-table { width: 100%; border-collapse: collapse; }
.op-table th { padding: 12px var(--op-space-4); background: var(--op-toolbar); border-bottom: 1px solid var(--op-border); text-align: left; font: 700 11px/1.5 var(--op-font); letter-spacing: 0.5px; text-transform: uppercase; color: var(--op-text-2); }
.op-table td { padding: 12px var(--op-space-4); border-bottom: 1px solid var(--op-border); vertical-align: middle; }
.op-table tr:last-child td { border-bottom: 0; }
.op-table tbody tr:hover { background: var(--op-sunken); }

.op-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--op-space-4); }
.op-stat { display: flex; align-items: center; gap: 12px; padding: var(--op-space-5); border-radius: var(--op-radius-12); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-stat--danger { box-shadow: 0 0 0 1px var(--op-danger); }
.op-stat__value { font: 700 20px/1.25 var(--op-font); }
.op-stat--danger .op-stat__value { color: var(--op-danger); }

/* 14. WORKFLOW BOARD ------------------------------------------------------------- */
.op-wf-card { display: flex; flex-direction: column; gap: 8px; padding: var(--op-space-3); border-radius: var(--op-radius-8); background: var(--op-surface); box-shadow: var(--op-elev-card); }
.op-wf-card[data-dragging] { rotate: -3deg; box-shadow: var(--op-elev-pop); }
.op-wf-card__top { display: flex; align-items: flex-start; gap: 8px; }
.op-wf-card__tags { display: flex; flex-wrap: wrap; gap: 4px; }
.op-wf-card__foot { display: flex; align-items: center; gap: var(--op-space-2); padding-top: var(--op-space-2); border-top: 1px solid var(--op-border); font: var(--op-text-caption); color: var(--op-text-2); }
.op-wf-card__foot > span { display: inline-flex; align-items: center; gap: 3px; }
.op-due { display: inline-flex; align-items: center; gap: var(--op-space-1); height: 20px; padding: 0 8px; border-radius: var(--op-radius-full); font: 700 11px/1 var(--op-font); color: var(--op-text-2); }
.op-due--today { background: var(--op-tint); color: var(--op-on-tint); }
.op-due--overdue { background: var(--op-danger-tint); color: var(--op-danger); }

/* Workflow designer: stage list */
.op-stage-item { display: flex; align-items: center; gap: 8px; padding: 12px; border: 1px solid var(--op-border); border-radius: var(--op-radius-8); background: var(--op-surface); }
.op-stage-item[aria-selected="true"] { border: 2px solid var(--op-accent); background: var(--op-tint); }

~~~~
<!-- officepress-source:end -->
