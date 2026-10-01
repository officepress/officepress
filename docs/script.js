/* OfficePress home page — mobile menu + white-label preview. No dependencies. */
(function () {
  "use strict";

  /* Mobile menu */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  function setMenu(open) {
    nav.setAttribute("data-open", open ? "true" : "false");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () { setMenu(nav.getAttribute("data-open") !== "true"); });
  document.querySelectorAll(".nav__links a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* White-label preview */
  var demo = document.getElementById("wl-demo");
  if (!demo) return;
  var nameInput = document.getElementById("wl-name");
  var colorInput = document.getElementById("wl-color");
  var brandName = document.getElementById("wl-brand");
  var brandLogo = document.getElementById("wl-logo");
  var swatches = document.querySelectorAll(".swatch[data-color]");
  var custom = document.querySelector(".swatch--custom");

  function rgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function lum(c) {
    var a = c.map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }
  function contrast(a, b) {
    var x = lum(a), y = lum(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function toHex(c) { return "#" + c.map(function (v) { return Math.round(v).toString(16).padStart(2, "0"); }).join(""); }

  function applyColor(hex) {
    var c = rgb(hex), white = [255, 255, 255], ink = [20, 26, 46];
    demo.style.setProperty("--brand", hex);
    // Text on brand fills: white when it passes, otherwise ink
    demo.style.setProperty("--on-brand", contrast(c, white) >= 4.5 ? "#FFFFFF" : "#141A2E");
    // Brand used as text on white: darken until it reaches 4.5:1
    var t = c.slice(), i = 0;
    while (contrast(t, white) < 4.5 && i++ < 20) t = t.map(function (v) { return v * 0.88; });
    demo.style.setProperty("--brand-text", toHex(t));
  }
  function select(btn) {
    swatches.forEach(function (s) { s.setAttribute("aria-pressed", s === btn ? "true" : "false"); });
    custom.setAttribute("data-active", btn ? "false" : "true");
  }

  swatches.forEach(function (s) {
    s.addEventListener("click", function () {
      var hex = s.getAttribute("data-color");
      select(s); applyColor(hex); colorInput.value = hex;
    });
  });
  colorInput.addEventListener("input", function () { select(null); applyColor(colorInput.value); });

  nameInput.addEventListener("input", function () {
    var v = nameInput.value.trim() || "Your brand";
    brandName.textContent = v;
    brandLogo.textContent = v.charAt(0).toUpperCase();
  });

  applyColor(colorInput.value);
})();
