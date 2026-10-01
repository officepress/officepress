# check-email.html — check-email

Source: `kit/templates/auth/check-email.html`, original lines 1–35. Captured 2026-10-01; SHA-256 is in the coverage manifest.

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
  <title>Check your email · Resourcing</title>
  <link rel="icon" href="../../logos/products/operate/resourcing.svg">
  <!-- Apply saved / preferred mode before first paint (no flash) -->
  <script>(function(){var m=localStorage.getItem("op-mode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.setAttribute("data-mode",m);r.classList.add("op-no-motion");})();</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap">
  <link rel="stylesheet" href="../../css/officepress.css">
  <link rel="stylesheet" href="../../css/families/operate.css" id="op-family"><!-- family: operate -->
  <script src="../../js/icons.js" defer></script>
  <script src="../../js/officepress.js" defer></script>
</head>
<body data-app="resourcing">
<div class="op-auth">
  <header class="op-auth__top">
    <span class="op-brand__logo"><img src="../../logos/products/operate/resourcing.svg" alt=""></span>
    <span class="op-title op-grow">Resourcing</span>
    <button class="op-icon-btn op-icon-btn--circle op-theme-btn" type="button" aria-label="Switch to dark mode" data-action="toggle-mode"><svg class="op-icon op-icon--sun" aria-hidden="true"><use href="#i-sun"/></svg><svg class="op-icon op-icon--moon" aria-hidden="true"><use href="#i-moon"/></svg></button>
  </header>
  <main class="op-auth__main"><div class="op-auth__column">
    <span class="op-icon-tile" style="width:56px;height:56px;border-radius:var(--op-radius-16)"><svg class="op-icon op-icon--20" aria-hidden="true"><use href="#i-mail-check"/></svg></span>
    <div class="op-auth__head"><h1 class="op-display">Check your email</h1><p class="op-muted">We sent a sign-in link to mila.reyes@officepress.ph. It expires in 15 minutes.</p></div>
    <div class="op-notice op-notice--info"><svg class="op-icon" aria-hidden="true"><use href="#i-info"/></svg><span class="op-small">Open the link on this device to sign in here. Can't find it? Check spam or promotions.</span></div>
    <button class="op-btn op-btn--secondary op-btn--large op-btn--block" type="button" disabled>Resend link in 0:24</button>
    <div class="op-links op-links--center"><span class="op-muted">Wrong email?</span><a href="email.html">Use a different one</a></div>
  </div></main>
  <footer class="op-auth__foot">Resourcing · Workspace access</footer>
</div>
</body>
</html>
~~~~
<!-- officepress-source:end -->
