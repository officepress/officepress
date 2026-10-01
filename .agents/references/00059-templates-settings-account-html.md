# settings-account.html — settings-account

Source: `kit/templates/settings-account.html`, original lines 1–200. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

**Current status: purge and delete are production material, confirmed by the user. The original “Not in production yet” label below is retained solely as superseded source history; it must not determine current status.**

<!-- officepress-source:start -->
~~~~html
<!doctype html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Account settings · Inbox</title>
  <link rel="icon" href="../logos/products/communicate/inbox.svg">
  <!-- Apply saved / preferred mode before first paint (no flash) -->
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="../css/officepress.css">
  <link rel="stylesheet" href="../css/families/communicate.css" id="op-family"><!-- family: communicate -->
  <script src="../js/icons.js" defer></script>
  <script src="../js/officepress.js" defer></script>
</head>
<body data-app="inbox">

<div class="op-app op-app--no-aside" data-agent="closed">
  <div class="op-main">
    <!-- ===== HEADER · 64 px ===== -->
    <header class="op-header">
      <a class="op-icon-btn" href="app-board.html" aria-label="Back to app"><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-left"/></svg></a>
      <h1 class="op-header__title">Account settings</h1>

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
          <a class="op-menu__item" role="menuitem" href="settings-app-theme.html"><svg class="op-icon" aria-hidden="true"><use href="#i-settings"/></svg><span>App Settings</span><span class="op-caption op-muted">Inbox</span></a>
          <a class="op-menu__item" role="menuitem" href="#"><svg class="op-icon" aria-hidden="true"><use href="#i-shield-check"/></svg><span>Admin Dashboard</span><span class="op-pill op-pill--tint">Admin</span></a>
          <hr>
          <button class="op-menu__item" role="menuitem" type="button"><svg class="op-icon" aria-hidden="true"><use href="#i-log-out"/></svg><span>Sign out</span></button>
        </div>
      </div>
    </header>
    <div class="op-body">
      <!-- ===== CONTENT: replace with your screen ===== -->
      <main class="op-content" id="content">
        <div class="op-settings">
          <nav class="op-settings__nav" aria-label="Account">
            <span class="op-settings__heading op-overline">Account</span>
            <a class="op-settings__item" href="#profile" aria-current="true"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-user"/></svg></span>Personal information</a>
            <a class="op-settings__item" href="#password"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-key-round"/></svg></span>Password</a>
            <a class="op-settings__item" href="#two-factor"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-shield-check"/></svg></span>Two-factor</a>
            <a class="op-settings__item" href="#export"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-download"/></svg></span>Export data</a>
            <a class="op-settings__item" href="#danger"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-triangle-alert"/></svg></span>Danger zone</a>
            <div style="padding:var(--op-space-2) 0"><hr></div>
            <a class="op-settings__item" href="app-board.html"><span class="op-icon-slot"><svg class="op-icon" aria-hidden="true"><use href="#i-arrow-left"/></svg></span>Back to App</a>
          </nav>
          <div class="op-settings__main"><div class="op-settings__column">
            <section class="op-section" id="profile">
              <div class="op-section__head"><div><h2 class="op-section__title">Personal information</h2><p class="op-section__desc">Keep your profile and sign-in identifiers current.</p></div></div>
              <div class="op-section__body">
                <div class="op-row" style="align-items:flex-start;gap:var(--op-space-8)">
                  <div class="op-stack" style="width:160px;align-items:center;text-align:center"><span class="op-avatar op-avatar--96">MR</span><span class="op-small op-muted">Preview of your profile picture</span><span class="op-pill op-pill--neutral op-pill--lg"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-lock"/></svg>Role · Manager</span></div>
                  <div class="op-fields op-grow">
                    <div class="op-field"><label class="op-field__label" for="f-name">Name <span class="op-req">*</span></label><input class="op-input" id="f-name" value="Mila Reyes"></div>
                    <div class="op-field"><label class="op-field__label" for="f-image">Image</label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-image"/></svg><input class="op-input" id="f-image" value="https://cdn.officepress.ph/u/mreyes.jpg"></div><span class="op-field__hint">Paste an image URL. The preview updates as you type.</span></div>
                    <div class="op-field"><label class="op-field__label" for="f-username">Username</label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-at-sign"/></svg><input class="op-input" id="f-username" value="mreyes"></div></div>
                    <div class="op-fields op-fields--2"><div class="op-field"><label class="op-field__label" for="f-emailaddress">Email address</label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-mail"/></svg><input class="op-input" id="f-emailaddress" value="mila.reyes@officepress.ph"></div></div><div class="op-field"><label class="op-field__label" for="f-phonenumber">Phone number</label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-phone"/></svg><input class="op-input" id="f-phonenumber" placeholder="Enter your phone number"></div></div></div>
                    <div class="op-field"><label class="op-field__label" for="f-currentpassword">Current password</label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-lock"/></svg><input class="op-input" id="f-currentpassword" placeholder="Enter your current password"><span class="op-input-group__end"><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Show"><svg class="op-icon" aria-hidden="true"><use href="#i-eye"/></svg></button></span></div><span class="op-field__hint">Required only when adding a new username, email, or phone sign-in method.</span></div>
                  </div>
                </div>
              </div>
              <div class="op-section__foot"><span class="op-small">Role is managed by your workspace admin.</span><button class="op-btn op-btn--secondary" type="button">Cancel</button><button class="op-btn op-btn--primary" type="button">Update</button></div>
            </section>
            <section class="op-section" id="password">
              <div class="op-section__head"><div><h2 class="op-section__title">Change password</h2><p class="op-section__desc">Choose a strong password you don't use elsewhere. It's shared by every sign-in method that uses one.</p></div></div>
              <div class="op-section__body">
                <div class="op-field"><label class="op-field__label" for="f-currentpassword">Current password <span class="op-req">*</span></label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-lock"/></svg><input class="op-input" id="f-currentpassword" placeholder="Enter your current password"><span class="op-input-group__end"><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Show"><svg class="op-icon" aria-hidden="true"><use href="#i-eye"/></svg></button></span></div></div>
                <div class="op-field"><label class="op-field__label" for="f-newpassword">New password <span class="op-req">*</span></label><div class="op-input-group"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-lock"/></svg><input class="op-input" id="f-newpassword" placeholder="Enter your new password"><span class="op-input-group__end"><button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Show"><svg class="op-icon" aria-hidden="true"><use href="#i-eye"/></svg></button></span></div></div>
              </div>
              <div class="op-section__foot"><span class="op-small"></span><button class="op-btn op-btn--secondary" type="button">Cancel</button><button class="op-btn op-btn--primary" type="button">Update password</button></div>
            </section>
            <section class="op-section" id="two-factor">
              <div class="op-section__head"><div><h2 class="op-section__title">Two-factor authentication</h2><p class="op-section__desc">Add an authenticator-app step at sign-in. Works with Google Authenticator, 1Password, Authy and similar apps.</p></div></div>
              <div class="op-section__body">
                <div class="op-row" style="align-items:flex-start;gap:var(--op-space-6)">
                  <div class="op-stack" style="align-items:center"><span class="op-small op-strong">1 · Scan with your app</span><div class="op-qr" role="img" aria-label="QR code"><svg class="op-icon op-icon--bold" style="width:132px;height:132px" aria-hidden="true"><use href="#i-qr-code"/></svg></div></div>
                  <div class="op-stack op-grow" style="gap:var(--op-space-5)">
                    <div class="op-field"><span class="op-field__label">Or copy the secret key</span><div class="op-row"><input class="op-input op-mono op-strong" value="GMCU INCQ JBCY AU4I" readonly aria-label="Secret key" style="letter-spacing:1px"><button class="op-icon-btn op-icon-btn--outline" style="width:var(--op-input-h);height:var(--op-input-h)" type="button" aria-label="Copy secret key"><svg class="op-icon" aria-hidden="true"><use href="#i-copy"/></svg></button></div><button class="op-btn op-btn--link op-btn--small" type="button" style="align-self:flex-start;padding:0"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-refresh-cw"/></svg>Regenerate secret</button></div>
                    <div class="op-field"><span class="op-field__label">2 · Enter the code from your authenticator app</span><div class="op-otp" style="max-width:312px"><input inputmode="numeric" maxlength="1" aria-label="Digit"><input inputmode="numeric" maxlength="1" aria-label="Digit"><input inputmode="numeric" maxlength="1" aria-label="Digit"><input inputmode="numeric" maxlength="1" aria-label="Digit"><input inputmode="numeric" maxlength="1" aria-label="Digit"><input inputmode="numeric" maxlength="1" aria-label="Digit"></div></div>
                  </div>
                </div>
              </div>
              <div class="op-section__foot"><span class="op-small">Two-factor turns on once the code verifies.</span><button class="op-btn op-btn--primary" type="button">Verify</button></div>
            </section>
            <section class="op-section" id="export">
              <div class="op-section__head"><div><h2 class="op-section__title">Export your data</h2><p class="op-section__desc">Download a portable copy of your account data, including personal information and sign-in identifiers.</p></div></div>
              <div class="op-section__body">
                <div class="op-notice"><svg class="op-icon" aria-hidden="true"><use href="#i-triangle-alert"/></svg><div><div class="op-notice__title">Important security notice</div><ul><li>This file contains sensitive personal information.</li><li>Don’t share it or upload it to unsecured services.</li><li>Store it securely and delete it when no longer needed.</li></ul></div></div>
              </div>
              <div class="op-section__foot"><span class="op-small">Downloads immediately as a single file.</span><button class="op-btn op-btn--primary" type="button"><svg class="op-icon op-icon--15" aria-hidden="true"><use href="#i-download"/></svg>Download my data</button></div>
            </section>
            <section class="op-section op-section--danger" id="danger">
              <div class="op-section__head"><div><h2 class="op-section__title">Danger zone</h2><p class="op-section__desc">These can't be undone.</p></div><span class="op-pill op-pill--neutral">Not in production yet</span></div>
              <div class="op-section__body">
                <div class="op-item-row"><span class="op-icon-tile op-icon-tile--40 op-icon-tile--danger"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-eraser"/></svg></span><div class="op-item-row__text"><span class="op-strong">Purge my data from Inbox</span><span class="op-small op-muted">Removes your data from this app only. Your account and other apps stay as they are.</span></div><button class="op-btn op-btn--danger" type="button" data-dialog-open="dlg-purge">Purge data</button></div>
                <hr>
                <div class="op-item-row"><span class="op-icon-tile op-icon-tile--40 op-icon-tile--danger"><svg class="op-icon op-icon--18" aria-hidden="true"><use href="#i-user-x"/></svg></span><div class="op-item-row__text"><span class="op-strong">Delete account</span><span class="op-small op-muted">Permanently deletes your OfficePress account across every app.</span></div><button class="op-btn op-btn--danger" type="button" data-dialog-open="dlg-purge">Delete account</button></div>
              </div>
            </section>
          </div></div>
        </div>
        <dialog class="op-dialog" id="dlg-purge" aria-labelledby="dlg-purge-t">
          <form method="dialog">
            <div class="op-dialog__head"><h2 class="op-heading" id="dlg-purge-t">Purge your Inbox data?</h2><p class="op-muted">This removes your cards, drafts, filters and agent history from Inbox. It can't be undone.</p></div>
            <div class="op-dialog__body"><div class="op-field"><label class="op-field__label" for="f-typepurgetoconfirm">Type PURGE to confirm</label><input class="op-input" id="f-typepurgetoconfirm" placeholder="PURGE" data-confirm-text="PURGE"></div></div>
            <div class="op-dialog__foot"><button class="op-btn op-btn--secondary" type="button" data-dialog-close>Cancel</button><button class="op-btn op-btn--danger-solid" type="submit" data-confirm disabled>Purge data</button></div>
          </form>
        </dialog>
      </main>
      <!-- ===== AGENT PANEL · 400 px docked · sheet on mobile ===== -->
      <aside class="op-agent" aria-label="Agent">
        <div class="op-agent__head">
          <span class="op-agent__mark"><svg class="op-icon" aria-hidden="true"><use href="#i-bot"/></svg></span>
          <div class="op-grow"><div class="op-strong">Inbox Agent</div><div class="op-caption op-muted">Can read and act on this page</div></div>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="New chat"><svg class="op-icon" aria-hidden="true"><use href="#i-square-pen"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="History"><svg class="op-icon" aria-hidden="true"><use href="#i-history"/></svg></button>
          <button class="op-icon-btn op-icon-btn--compact op-icon-btn--muted" type="button" aria-label="Close agent" data-action="toggle-agent"><svg class="op-icon" aria-hidden="true"><use href="#i-x"/></svg></button>
        </div>
        <div class="op-agent__context"><span class="op-overline">Context</span><span class="op-pill"><svg class="op-icon op-icon--12" aria-hidden="true"><use href="#i-layout-grid"/></svg>Inbox · this page</span></div>
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
          <textarea id="agent-input" rows="2" placeholder="Ask the agent to do anything in Inbox…"></textarea>
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
