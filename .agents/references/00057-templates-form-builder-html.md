# form-builder.html — form-builder

Source: `kit/templates/form-builder.html`, original lines 1–209. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~html
<!doctype html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New hire information · Resourcing</title>
  <link rel="icon" href="../logos/products/operate/resourcing.svg">
  <!-- Apply saved / preferred mode before first paint (no flash) -->
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="../css/officepress.css">
  <link rel="stylesheet" href="../css/families/operate.css" id="op-family"><!-- family: operate -->
  <script src="../js/icons.js" defer></script>
  <script src="../js/officepress.js" defer></script>
</head>
<body data-app="resourcing">

<div class="op-app" data-aside="expanded" data-agent="closed">
  <!-- ===== ASIDE · 260 px, collapses to 64 px rail (desktop) / overlay (mobile) ===== -->
  <aside class="op-aside" aria-label="Resourcing navigation">
    <div class="op-brand">
      <span class="op-brand__logo"><img src="../logos/products/operate/resourcing.svg" alt=""></span>
      <span class="op-brand__name">Resourcing</span>
      <button class="op-icon-btn op-icon-btn--compact op-desktop-only" type="button" data-action="toggle-aside" data-aside-hide aria-label="Collapse sidebar"><svg class="op-icon" aria-hidden="true"><use href="#i-panel-left-close"/></svg></button>
      <button class="op-icon-btn op-icon-btn--compact op-mobile-only" type="button" data-action="close-aside" aria-label="Close menu"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
    </div>
    <label class="op-aside__search"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-search"/></svg><span class="op-sr-only">Search</span><input type="search" placeholder="Search people"></label>
    <nav class="op-nav" aria-labelledby="nav-0">
      <h2 class="op-nav__heading" id="nav-0">Workspace</h2>
      <a class="op-nav__item" href="#" title="Organization"><svg class="op-icon" aria-hidden="true"><use href="#i-network"/></svg><span class="op-nav__label">Organization</span></a>
      <a class="op-nav__item" href="#" title="Personnel"><svg class="op-icon" aria-hidden="true"><use href="#i-users"/></svg><span class="op-nav__label">Personnel</span></a>
      <a class="op-nav__item" href="#" title="Assignments"><svg class="op-icon" aria-hidden="true"><use href="#i-clipboard-check"/></svg><span class="op-nav__label">Assignments</span></a>
      <a class="op-nav__item" href="#" title="Workflows"><svg class="op-icon" aria-hidden="true"><use href="#i-kanban"/></svg><span class="op-nav__label">Workflows</span></a>
      <a class="op-nav__item" href="#" title="Careers"><svg class="op-icon" aria-hidden="true"><use href="#i-briefcase"/></svg><span class="op-nav__label">Careers</span></a>
    </nav>
    <nav class="op-nav" aria-labelledby="nav-1">
      <h2 class="op-nav__heading" id="nav-1">Templates</h2>
      <a class="op-nav__item" href="#" aria-current="page" title="Forms"><svg class="op-icon" aria-hidden="true"><use href="#i-file-text"/></svg><span class="op-nav__label">Forms</span></a>
      <a class="op-nav__item" href="#" title="Messages"><svg class="op-icon" aria-hidden="true"><use href="#i-message-square"/></svg><span class="op-nav__label">Messages</span></a>
      <a class="op-nav__item" href="#" title="Documents"><svg class="op-icon" aria-hidden="true"><use href="#i-file"/></svg><span class="op-nav__label">Documents</span></a>
    </nav>
    <div class="op-aside__footer"><a class="op-nav__item" href="#" title="Help &amp; feedback"><svg class="op-icon" aria-hidden="true"><use href="#i-life-buoy"/></svg><span class="op-nav__label">Help &amp; feedback</span></a></div>
  </aside>
  <div class="op-main">
    <!-- ===== HEADER · 64 px ===== -->
    <header class="op-header">
      <button class="op-icon-btn op-desktop-only" type="button" data-action="toggle-aside" aria-label="Toggle sidebar"><svg class="op-icon" aria-hidden="true"><use href="#i-panel-left"/></svg></button>
      <button class="op-icon-btn op-mobile-only" type="button" data-action="open-aside" aria-label="Open menu"><svg class="op-icon" aria-hidden="true"><use href="#i-menu"/></svg></button>
      <h1 class="op-header__title">New hire information</h1>

      <!-- Global actions: identical in every app, always in this order -->
      <div class="op-globals">
        <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Notifications, 3 unread" aria-haspopup="dialog" aria-expanded="false" data-popover="pop-notifs"><svg class="op-icon" aria-hidden="true"><use href="#i-bell"/></svg><span class="op-icon-btn__dot" aria-hidden="true"></span></button>
        <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Agent" aria-pressed="false" data-action="toggle-agent"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></button>
        <button class="op-icon-btn op-icon-btn--circle op-theme-btn" type="button" aria-label="Switch to dark mode" data-action="toggle-mode"><svg class="op-icon op-icon--sun" aria-hidden="true"><use href="#i-sun"/></svg><svg class="op-icon op-icon--moon" aria-hidden="true"><use href="#i-moon"/></svg></button>
        <button class="op-icon-btn op-icon-btn--circle" type="button" aria-label="Account menu" aria-haspopup="menu" aria-expanded="false" data-popover="pop-user"><svg class="op-icon" aria-hidden="true"><use href="#i-user"/></svg></button>
        <!-- Notifications · 380 px · account-wide -->
        <section class="op-popover op-notifs" id="pop-notifs" role="dialog" aria-label="Notifications">
          <div class="op-notifs__head">
            <h2 class="op-title">Notifications</h2><span class="op-badge">3</span><span class="op-spacer"></span>
            <button class="op-btn op-btn--link op-btn--compact" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-check-check"/></svg>Mark all read</button>
            <button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Notification settings"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-settings"/></svg></button>
          </div>
          <div class="op-tabs" role="tablist"><button class="op-tab" role="tab" aria-selected="true">All</button><button class="op-tab" role="tab" aria-selected="false">Mentions <span class="op-badge op-badge--neutral">1</span></button><button class="op-tab" role="tab" aria-selected="false">Agent <span class="op-badge op-badge--neutral">1</span></button></div>
          <div class="op-notifs__list">
            <div class="op-notifs__group op-overline">Today</div>
            <article class="op-notif" data-unread>
              <span class="op-avatar op-avatar--32 op-avatar--soft">AC</span>
              <div class="op-notif__body"><div>Ana Cruz mentioned you in <strong>Warehouse move — dock schedule</strong></div><div class="op-notif__quote">@Mila can you confirm we print the labels at A3?</div><div class="op-notif__meta"><span class="op-app-tag">Inbox</span>12 min ago</div></div>
              <span class="op-dot" aria-label="Unread"></span>
            </article>
            <article class="op-notif" data-unread>
              <span class="op-icon-tile op-icon-tile--32 op-icon-tile--accent"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>
              <div class="op-notif__body"><div>Inbox Agent finished drafting your reply to Ana Cruz</div><div class="op-notif__meta"><span class="op-app-tag">Inbox</span>18 min ago</div><div><button class="op-btn op-btn--primary op-btn--small" type="button">Review draft</button></div></div>
              <span class="op-dot" aria-label="Unread"></span>
            </article>
            <article class="op-notif" data-unread>
              <span class="op-icon-tile op-icon-tile--32 op-icon-tile--family" data-family="operate"><svg class="op-icon" aria-hidden="true"><use href="#i-calculator"/></svg></span>
              <div class="op-notif__body"><div>Invoice NW-4471 (₱48,200) is waiting for your approval</div><div class="op-notif__meta"><span class="op-app-tag" data-family="operate">Accounting</span>1 hr ago</div><div class="op-row"><button class="op-btn op-btn--primary op-btn--small" type="button">Approve</button><button class="op-btn op-btn--secondary op-btn--small" type="button">View</button></div></div>
              <span class="op-dot" aria-label="Unread"></span>
            </article>
            <div class="op-notifs__group op-overline">Earlier</div>
            <article class="op-notif">
              <span class="op-icon-tile op-icon-tile--32 op-icon-tile--neutral"><svg class="op-icon" aria-hidden="true"><use href="#i-shield-check"/></svg></span>
              <div class="op-notif__body"><div>New sign-in to your account from Chrome on macOS · Manila</div><div class="op-notif__meta"><span class="op-app-tag" style="--op-app-tag:var(--op-text-2)">Account</span>Yesterday, 18:42</div><a class="op-small" href="#">Not you? Secure your account</a></div>
            </article>
            <article class="op-notif">
              <span class="op-avatar op-avatar--32 op-avatar--soft">RD</span>
              <div class="op-notif__body"><div>Rina Delgado assigned you <strong>Supplier onboarding documents</strong></div><div class="op-notif__meta"><span class="op-app-tag">Inbox</span>Mon</div></div>
            </article>
          </div>
          <div class="op-notifs__foot"><a href="#">View all activity <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-arrow-right"/></svg></a></div>
        </section>
        <!-- User menu · 280 px -->
        <div class="op-popover op-menu" id="pop-user" role="menu" aria-label="Account">
          <div class="op-menu__identity"><span class="op-avatar op-avatar--40">MR</span><div class="op-grow"><div class="op-strong">Mila Reyes</div><div class="op-small op-muted">mila.reyes@officepress.ph</div></div></div>
          <hr>
          <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon" aria-hidden="true"><use href="#i-sliders-horizontal"/></svg><span>User Preferences</span></a>
          <a class="op-menu__item" role="menuitem" href="settings-account.html"><svg class="op-icon" aria-hidden="true"><use href="#i-circle-user"/></svg><span>Account Settings</span></a>
          <hr>
          <!-- App-level items: render only when the user has access -->
          <a class="op-menu__item" role="menuitem" href="settings-app-theme.html"><svg class="op-icon" aria-hidden="true"><use href="#i-settings"/></svg><span>App Settings</span><span class="op-caption op-muted">Resourcing</span></a>
          <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon" aria-hidden="true"><use href="#i-shield-check"/></svg><span>Admin Dashboard</span><span class="op-pill op-pill--tint">Admin</span></a>
          <hr>
          <button class="op-menu__item" role="menuitem" type="button"><svg class="op-icon" aria-hidden="true"><use href="#i-log-out"/></svg><span>Sign out</span></button>
        </div>
      </div>
    </header>
    <div class="op-body">
      <!-- ===== CONTENT: replace with your screen ===== -->
      <main class="op-content" id="content">
        <div class="op-toolbar" style="padding:var(--op-space-2) var(--op-space-4)">
          <div class="op-tabs" role="tablist" style="border:0;gap:var(--op-space-1)"><button class="op-btn op-btn--secondary op-btn--compact" role="tab" aria-selected="true">Build</button><button class="op-btn op-btn--ghost op-btn--compact" role="tab" aria-selected="false">Preview</button><button class="op-btn op-btn--ghost op-btn--compact" role="tab" aria-selected="false">Responses <span class="op-badge">12</span></button><button class="op-btn op-btn--ghost op-btn--compact" role="tab" aria-selected="false">Share</button></div>
          <span class="op-spacer"></span>
          <span class="op-row op-small op-muted"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-cloud-check"/></svg>Saved · 10:42</span>
          <button class="op-btn op-btn--secondary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-eye"/></svg>Preview</button><button class="op-btn op-btn--secondary" type="button">Save</button><button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-send"/></svg>Publish</button>
        </div>
        <div class="op-three-pane">
          <nav class="op-pane op-pane--start" aria-label="Form outline"><div class="op-row"><span class="op-overline op-grow">Outline</span><span class="op-caption op-muted op-strong">6</span></div>
        <a class="op-outline-item" href="#q1" aria-current="true"><span class="op-num">1</span>Preferred name</a>
        <a class="op-outline-item" href="#q2"><span class="op-num">2</span>Pronouns</a>
        <a class="op-outline-item" href="#q3"><span class="op-num">3</span>Preferred work arrangement</a>
        <a class="op-outline-item" href="#q4"><span class="op-num">4</span>Available start date</a>
        <a class="op-outline-item" href="#q5"><span class="op-num">5</span>Government ID or passport</a>
        <a class="op-outline-item" href="#q6"><span class="op-num">6</span>Anything People Ops should know?</a>
          </nav>
          <div class="op-pane op-pane--canvas">
            <header class="op-form-head"><h2 class="op-heading">New hire information</h2><p class="op-muted">Collect what People Operations needs before a new hire starts.</p><div class="op-row"><span class="op-status op-status--on">Active</span><span class="op-small op-muted">Used by Hiring › Offer stage</span></div></header>
            <article class="op-question" id="q1" aria-selected="true">
              <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-num" style="background:var(--op-accent-strong);color:var(--op-on-accent);border-color:transparent">1</span>
              <div class="op-question__body"><div class="op-strong">Preferred name <span class="op-danger-text">*</span></div><div class="op-caption op-muted">Short answer · Required</div><div class="op-answer">Name you would like us to use</div></div>
              <div class="op-row" style="gap:2px;align-self:flex-start"><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Duplicate"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg></button></div>
            </article>
            <article class="op-question" id="q2">
              <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-num">2</span>
              <div class="op-question__body"><div class="op-strong">Pronouns</div><div class="op-caption op-muted">Dropdown</div><div class="op-answer"><span class="op-grow">Select an option</span><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></div></div>
              <div class="op-row" style="gap:2px;align-self:flex-start"><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Duplicate"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg></button></div>
            </article>
            <article class="op-question" id="q3">
              <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-num">3</span>
              <div class="op-question__body"><div class="op-strong">Preferred work arrangement <span class="op-danger-text">*</span></div><div class="op-caption op-muted">Multiple choice · Required</div><div class="op-stack"><label class="op-check"><input type="radio" name="arr" disabled><span>Office</span></label><label class="op-check"><input type="radio" name="arr" disabled><span>Hybrid</span></label><label class="op-check"><input type="radio" name="arr" disabled><span>Remote</span></label></div></div>
              <div class="op-row" style="gap:2px;align-self:flex-start"><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Duplicate"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg></button></div>
            </article>
            <article class="op-question" id="q4">
              <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-num">4</span>
              <div class="op-question__body"><div class="op-strong">Available start date <span class="op-danger-text">*</span></div><div class="op-caption op-muted">Date · Required</div><div class="op-answer"><span class="op-grow">dd / mm / yyyy</span><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-calendar"/></svg></div></div>
              <div class="op-row" style="gap:2px;align-self:flex-start"><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Duplicate"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg></button></div>
            </article>
            <article class="op-question" id="q5">
              <svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg><span class="op-num">5</span>
              <div class="op-question__body"><div class="op-strong">Government ID or passport</div><div class="op-caption op-muted">File upload</div><div class="op-dropzone"><svg class="op-icon" aria-hidden="true"><use href="#i-upload"/></svg>Drop a file or browse · PDF, JPG up to 10 MB</div></div>
              <div class="op-row" style="gap:2px;align-self:flex-start"><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move up"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-up"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Move down"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-chevron-down"/></svg></button><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Duplicate"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-copy"/></svg></button></div>
            </article>
            <div class="op-add-question"><span class="op-row op-strong"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-plus"/></svg>Add question</span><div class="op-row" style="flex-wrap:wrap;justify-content:center"><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-text-cursor-input"/></svg>Short</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-pilcrow"/></svg>Long</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-circle-dot"/></svg>Choice</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-square-check"/></svg>Checkboxes</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-circle-chevron-down"/></svg>Dropdown</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-calendar"/></svg>Date</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-hash"/></svg>Number</button><button class="op-chip" type="button"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-upload"/></svg>File</button></div></div>
          </div>
          <aside class="op-pane op-pane--end" aria-label="Question settings">
            <div><div class="op-overline">Selected question</div><h2 class="op-title">Question settings</h2></div>
            <div class="op-field"><label class="op-field__label" for="f-question">Question</label><input class="op-input" id="f-question" value="Preferred name"></div>
            <div class="op-field"><label class="op-field__label" for="f-fieldname">Field name</label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-braces"/></svg><input class="op-input" id="f-fieldname" value="preferredName"></div><span class="op-field__hint">Stable name stored with responses.</span></div>
            <div class="op-field"><label class="op-field__label" for="f-answertype">Answer type</label><select class="op-select" id="f-answertype"><option>Short answer</option></select></div>
            <div class="op-field"><label class="op-field__label" for="f-helptext">Help text</label><input class="op-input" id="f-helptext" placeholder="Optional guidance under the question"></div>
            <div class="op-field"><label class="op-field__label" for="f-placeholder">Placeholder</label><input class="op-input" id="f-placeholder" value="Name you would like us to use"></div>
            <div class="op-item-row"><div class="op-item-row__text"><span class="op-strong">Required</span><span class="op-small op-muted">Respondents must answer before submitting.</span></div><button class="op-switch" type="button" role="switch" aria-checked="true" aria-label="Required"></button></div>
            <hr>
            <div class="op-row"><button class="op-btn op-btn--secondary op-grow" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-copy"/></svg>Duplicate</button><button class="op-btn op-btn--danger op-grow" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-trash-2"/></svg>Delete</button></div>
          </aside>
        </div>
      </main>
      <!-- ===== AGENT PANEL · 400 px docked · sheet on mobile ===== -->
      <aside class="op-agent" aria-label="Agent">
        <div class="op-agent__head">
          <span class="op-agent__mark"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>
          <div class="op-grow"><div class="op-strong">Resourcing Agent</div><div class="op-caption op-muted">Can read and act on this page</div></div>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="New chat"><svg class="op-icon" aria-hidden="true"><use href="#i-square-pen"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="History"><svg class="op-icon" aria-hidden="true"><use href="#i-history"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Close agent" data-action="toggle-agent"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
        </div>
        <div class="op-agent__context"><span class="op-overline">Context</span><span class="op-pill"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layout-grid"/></svg>Resourcing · this page</span></div>
        <div class="op-agent__thread">
          <span class="op-agent__mark" style="width:40px;height:40px;border-radius:var(--op-radius-12)"><svg class="op-icon op-icon--20" aria-hidden="true"><use href="#i-bot"/></svg></span>
          <div class="op-stack"><h2 class="op-heading">What should we get done?</h2><p class="op-muted">I can read, sort, draft and schedule anything here. You'll see every change I make.</p></div>
          <div class="op-stack">
            <button class="op-agent__starter" type="button"><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-list-checks"/></svg></span><span><span class="op-strong">Triage what's new</span><br><span class="op-small op-muted">Sort new items into the right column</span></span></button>
            <button class="op-agent__starter" type="button"><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-timer"/></svg></span><span><span class="op-strong">What's due today?</span><br><span class="op-small op-muted">Summarise SLAs under 24h</span></span></button>
            <button class="op-agent__starter" type="button"><span class="op-icon-tile"><svg class="op-icon" aria-hidden="true"><use href="#i-pen-line"/></svg></span><span><span class="op-strong">Draft replies</span><br><span class="op-small op-muted">For everything waiting on me</span></span></button>
          </div>
        </div>
        <form class="op-agent__composer" onsubmit="return false">
          <label class="op-sr-only" for="agent-input">Message the agent</label>
          <textarea id="agent-input" rows="2" placeholder="Ask the agent to do anything in Resourcing…"></textarea>
          <div class="op-agent__controls">
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Attach"><svg class="op-icon" aria-hidden="true"><use href="#i-paperclip"/></svg></button>
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Add context"><svg class="op-icon" aria-hidden="true"><use href="#i-at-sign"/></svg></button>
            <span class="op-pill op-pill--neutral op-pill--lg"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-sparkles"/></svg>Auto</span>
            <span class="op-spacer"></span>
            <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Voice input"><svg class="op-icon" aria-hidden="true"><use href="#i-mic"/></svg></button>
            <button class="op-icon-btn op-send" type="submit" aria-label="Send"><svg class="op-icon op-icon--bold" aria-hidden="true"><use href="#i-arrow-up"/></svg></button>
          </div>
        </form>
        <p class="op-agent__disclaimer">The agent can take actions in this app. Every action is logged and can be undone.</p>
      </aside>
    </div>
  </div>
  <div class="op-scrim" data-action="close-overlays" aria-hidden="true"></div>
</div>
</body>
</html>
~~~~
<!-- officepress-source:end -->
