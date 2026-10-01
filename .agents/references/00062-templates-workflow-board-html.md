# workflow-board.html — workflow-board

Source: `kit/templates/workflow-board.html`, original lines 1–244. Captured 2026-10-01; SHA-256 is in the coverage manifest.

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
  <title>Hiring · Resourcing</title>
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
      <a class="op-nav__item" href="#" aria-current="page" title="Workflows"><svg class="op-icon" aria-hidden="true"><use href="#i-kanban"/></svg><span class="op-nav__label">Workflows</span></a>
      <a class="op-nav__item" href="#" title="Careers"><svg class="op-icon" aria-hidden="true"><use href="#i-briefcase"/></svg><span class="op-nav__label">Careers</span></a>
    </nav>
    <nav class="op-nav" aria-labelledby="nav-1">
      <h2 class="op-nav__heading" id="nav-1">Templates</h2>
      <a class="op-nav__item" href="#" title="Forms"><svg class="op-icon" aria-hidden="true"><use href="#i-file-text"/></svg><span class="op-nav__label">Forms</span></a>
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
      <h1 class="op-header__title">Hiring</h1>
      <div class="op-header__actions"><button class="op-btn op-btn--secondary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-kanban"/></svg>Board<svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-chevron-down"/></svg></button></div>
      <span class="op-header__divider" aria-hidden="true"></span>
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
        <div class="op-toolbar">
          <label class="op-search op-search--compact" style="width:280px"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-search"/></svg><span class="op-sr-only">Search</span><input type="search" placeholder="Name, role or tag"></label>
          <select class="op-select" style="width:auto;height:var(--op-control-h)" aria-label="Owner"><option>All owners</option></select>
          <select class="op-select" style="width:auto;height:var(--op-control-h)" aria-label="Workflow"><option>Hiring workflow</option></select>
          <span class="op-spacer"></span>
          <a class="op-btn op-btn--secondary" href="automations.html"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-zap"/></svg>Automations</a>
          <a class="op-btn op-btn--secondary" href="workflow-designer.html"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-pencil"/></svg>Edit workflow</a>
          <button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-user-plus"/></svg>Add personnel</button>
        </div>
        <div class="op-board">
        <section class="op-column op-column--fluid" aria-labelledby="st-applied">
          <header class="op-column__header">
            <h3 class="op-column__title" id="st-applied"><span class="op-grow">Applied</span><span class="op-badge">2</span></h3>
            <div class="op-column__meta"><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>24h target</span></div>
          </header>
          <div class="op-column__cards">
            <article class="op-wf-card">
              <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">DR</span><div class="op-grow"><div class="op-strong">Diana Reyes</div><div class="op-caption op-muted">Procurement Specialist</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Drag to move"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg></button></div>
              <div class="op-wf-card__tags"><span class="op-pill">Referral</span></div>
              <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">1 of 2 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:50%"></div></div></div>
              <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral" title="Owner: Janelle Cruz">JC</span><span class="op-spacer"></span><span class="op-due"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>Aug 18</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-message-square"/></svg>1</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-paperclip"/></svg>0</span></div>
            </article>
            <article class="op-wf-card">
              <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">PL</span><div class="op-grow"><div class="op-strong">Paolo Lim</div><div class="op-caption op-muted">AI Engineer</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Drag to move"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg></button></div>
              <div class="op-wf-card__tags"><span class="op-pill">Internal</span></div>
              <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">0 of 2 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:0%"></div></div></div>
              <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral" title="Owner: Miguel Santos">MS</span><span class="op-spacer"></span><span class="op-due"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>Aug 19</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-message-square"/></svg>0</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-paperclip"/></svg>1</span></div>
            </article>
          </div>
        </section>
        <section class="op-column op-column--fluid" aria-labelledby="st-screen">
          <header class="op-column__header">
            <h3 class="op-column__title" id="st-screen"><span class="op-grow">Screening</span><span class="op-badge">2</span></h3>
            <div class="op-column__meta"><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>48h target</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layers"/></svg>WIP 2 / 5</span></div>
          </header>
          <div class="op-column__cards">
            <article class="op-wf-card">
              <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">AN</span><div class="op-grow"><div class="op-strong">Angel Navarro</div><div class="op-caption op-muted">Business Manager</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Drag to move"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg></button></div>
              <div class="op-wf-card__tags"><span class="op-pill">Priority</span><span class="op-pill">Office</span></div>
              <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">2 of 3 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:67%"></div></div></div>
              <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral" title="Owner: Janelle Cruz">JC</span><span class="op-spacer"></span><span class="op-due op-due--overdue"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>Overdue 1d</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-message-square"/></svg>2</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-paperclip"/></svg>1</span></div>
            </article>
            <article class="op-wf-card">
              <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">JV</span><div class="op-grow"><div class="op-strong">Jomar Villanueva</div><div class="op-caption op-muted">Process Manager</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Drag to move"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg></button></div>
              <div class="op-wf-card__tags"><span class="op-pill">Remote</span></div>
              <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">1 of 3 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:33%"></div></div></div>
              <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral" title="Owner: Miguel Santos">MS</span><span class="op-spacer"></span><span class="op-due"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>Aug 17</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-message-square"/></svg>0</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-paperclip"/></svg>0</span></div>
            </article>
          </div>
        </section>
        <section class="op-column op-column--fluid" aria-labelledby="st-interview">
          <header class="op-column__header">
            <h3 class="op-column__title" id="st-interview"><span class="op-grow">Interview</span><span class="op-badge">2</span></h3>
            <div class="op-column__meta"><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>72h target</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layers"/></svg>WIP 2 / 4</span></div>
          </header>
          <div class="op-column__cards">
            <article class="op-wf-card">
              <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">LT</span><div class="op-grow"><div class="op-strong">Lea Torres</div><div class="op-caption op-muted">AI Engineer</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Drag to move"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg></button></div>
              <div class="op-wf-card__tags"><span class="op-pill">Senior</span><span class="op-pill">Remote</span></div>
              <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">2 of 3 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:67%"></div></div></div>
              <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral" title="Owner: Janelle Cruz">JC</span><span class="op-spacer"></span><span class="op-due op-due--today"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>Today</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-message-square"/></svg>2</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-paperclip"/></svg>2</span></div>
            </article>
          </div>
        </section>
        <section class="op-column op-column--fluid" aria-labelledby="st-offer">
          <header class="op-column__header">
            <h3 class="op-column__title" id="st-offer"><span class="op-grow">Offer</span><span class="op-badge">1</span></h3>
            <div class="op-column__meta"><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>48h target</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layers"/></svg>WIP 1 / 3</span></div>
          </header>
          <div class="op-column__cards">
            <article class="op-wf-card">
              <div class="op-wf-card__top"><span class="op-avatar op-avatar--32 op-avatar--square op-avatar--soft">AD</span><div class="op-grow"><div class="op-strong">Alexandra Dela Cruz</div><div class="op-caption op-muted">Executive Officer</div></div><button class="op-icon-btn op-icon-btn--small op-icon-btn--muted" type="button" aria-label="Drag to move"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-grip-vertical"/></svg></button></div>
              <div class="op-wf-card__tags"><span class="op-pill">Leadership</span></div>
              <div class="op-stack" style="gap:var(--op-space-1)"><span class="op-caption op-muted">3 of 4 tasks</span><div class="op-progress op-progress--thin"><div class="op-progress__bar" style="width:75%"></div></div></div>
              <div class="op-wf-card__foot"><span class="op-avatar op-avatar--20 op-avatar--neutral" title="Owner: People Operations">PO</span><span class="op-spacer"></span><span class="op-due"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-timer"/></svg>Aug 20</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-message-square"/></svg>0</span><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-paperclip"/></svg>2</span></div>
            </article>
            <div class="op-drop-slot">Drop to move to Offer</div>
          </div>
        </section>
        <section class="op-column op-column--fluid" aria-labelledby="st-hired" data-blocked>
          <header class="op-column__header">
            <h3 class="op-column__title" id="st-hired"><span class="op-grow">Hired</span><span class="op-badge">0</span></h3>
            <div class="op-column__meta"><span><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-flag"/></svg>Final stage</span></div>
          </header>
          <div class="op-column__cards">
            <div class="op-blocked-slot"><svg class="op-icon op-icon--14" aria-hidden="true"><use href="#i-lock"/></svg>Not allowed from Interview</div>
          </div>
        </section>
        </div>
        <!-- While dragging: add data-dragging to the moving .op-wf-card; show .op-drop-slot in allowed stages and data-blocked on the rest. -->
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
