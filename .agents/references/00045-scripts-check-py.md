# check.py — check

Source: `kit/scripts/check.py`, original lines 1–196. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~python
#!/usr/bin/env python3
"""OfficePress UI lint — checks HTML/CSS against the guidelines. Python 3.9+, stdlib only.

Usage:
  python3 scripts/check.py <file-or-folder> [...]   # check your app
  python3 scripts/check.py --kit                     # check this kit's own templates
Exit code 1 when errors are found (warnings never fail). Add --json for machine output.

Checks (E = error, W = warning)
  E hex          hard-coded colour in CSS/HTML (use var(--op-*)); allow with a trailing  /* op-allow */
  E font-size    font-size outside 11/12/13/16/20/28 px
  E spacing      padding/margin/gap/height/width/top/left… not a multiple of 4 (1px, 1.5px, 2px, 3px borders/hairlines ok)
  E radius       border-radius not in 0/4/8/12/16/999 (or a var)
  E font-family  font-family that isn't var(--op-font) / var(--op-font-mono)
  E transition   `transition: all` or `transition-property: all`
  E press        scale() below 0.95
  E icon         <use href="#i-x"> where x is not in icons/icons.json
  E head         page links officepress.css but no family stylesheet (or more than one)
  E globals      .op-globals children out of order (notifications · agent · theme · user) or missing
  E a11y-label   icon-only <button>/<a> without aria-label or visible text
  E class        class="op-…" that the kit doesn't define (op- is reserved for the kit; name your own classes app-…)
  W img-alt      <img> without alt
"""
import json, os, re, sys

KIT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_SIZES = {11, 12, 13, 16, 20, 28}
RADII = {0, 4, 8, 12, 16, 999}
HAIRLINES = {0, 0.5, 1, 1.5, 2, 3}
ICON_SIZES = {12, 14, 15, 16, 18, 20}   # icon scale (width/height only)
SPACING_PROPS = r"(?:padding|margin|gap|row-gap|column-gap|top|right|bottom|left|inset|height|width|min-height|min-width|max-height|max-width)(?:-(?:top|right|bottom|left|inline|block))?"
ALLOW = "op-allow"

def load_icons():
    try:
        return set(json.load(open(os.path.join(KIT, "icons", "icons.json")))["icons"])
    except Exception:
        return None

ICONS = load_icons()

def load_classes():
    try:
        css = open(os.path.join(KIT, "css", "officepress.css"), encoding="utf-8").read()
        return set(re.findall(r"\.(op-[a-z0-9_-]+)", css))
    except Exception:
        return None

CLASSES = load_classes()

class Report:
    def __init__(self): self.items = []
    def add(self, sev, rule, path, line, msg): self.items.append({"severity": sev, "rule": rule, "file": path, "line": line, "message": msg})

def line_of(text, idx): return text.count("\n", 0, idx) + 1

def px_values(value):
    return [float(x) for x in re.findall(r"(-?\d*\.?\d+)px", value)]

def check_css(text, path, rep, offset_line=0):
    is_kit_core = path.endswith(os.path.join("css", "officepress.css")) or os.sep + "families" + os.sep in path
    lines = text.split("\n")
    for m in re.finditer(r"(?<![\w-])([a-z-]+)\s*:\s*([^;{}]+)", text):
        prop, value = m.group(1), m.group(2).strip()
        lno = line_of(text, m.start())
        ln = lno + offset_line
        line = lines[lno - 1] if lno - 1 < len(lines) else ""
        if ALLOW in line or line.lstrip().startswith("@media") or "://" in value:
            continue
        if prop.startswith("--"):
            continue  # token definitions
        # Colours
        if not is_kit_core and re.search(r"#[0-9a-fA-F]{3,8}\b", value) and prop not in ("content",):
            rep.add("E", "hex", path, ln, f"{prop}: {value} — hard-coded colour; use var(--op-*)")
        if re.search(r"\b(rgb|rgba|hsl|hsla)\(", value) and not is_kit_core:
            rep.add("E", "hex", path, ln, f"{prop}: {value} — raw colour function; use var(--op-*)")
        # Font size
        if prop == "font-size":
            for v in px_values(value):
                if v not in FONT_SIZES:
                    rep.add("E", "font-size", path, ln, f"font-size {v:g}px not in 11/12/13/16/20/28")
        if prop == "font":
            for v in re.findall(r"(\d+)px/", value):
                if int(v) not in FONT_SIZES:
                    rep.add("E", "font-size", path, ln, f"font shorthand size {v}px not in scale")
        # Font family
        if prop == "font-family" and "var(--op-font" not in value and value not in ("inherit",):
            rep.add("E", "font-family", path, ln, f"font-family: {value} — use var(--op-font) or var(--op-font-mono)")
        # Spacing
        if re.fullmatch(SPACING_PROPS, prop):
            for v in px_values(value):
                if prop in ("width", "height") and abs(v) in ICON_SIZES:
                    continue
                if abs(v) not in HAIRLINES and abs(v) % 4 != 0:
                    rep.add("E", "spacing", path, ln, f"{prop}: {value} — {v:g}px is not on the 4-point scale")
        # Radius
        if prop.startswith("border") and "radius" in prop:
            for v in px_values(value):
                if v not in RADII and v not in (2, 3):  # 2/3 only for tiny swatches
                    rep.add("E", "radius", path, ln, f"{prop}: {value} — use 4/8/12/16/full (concentric: outer = inner + padding)")
        # Transitions
        if prop in ("transition", "transition-property") and re.search(r"(^|[\s,])all(\s|,|$)", value):
            rep.add("E", "transition", path, ln, f"{prop}: {value} — name exact properties")
        # Press scale
        for s in re.findall(r"scale\(\s*(0?\.\d+)", value) + ([value] if prop == "scale" and re.fullmatch(r"0?\.\d+", value) else []):
            try:
                if 0.5 <= float(s) < 0.95 and prop in ("transform", "scale"):
                    rep.add("E", "press", path, ln, f"{prop}: {value} — press scale must be ≥ 0.95 (use 0.96)")
            except ValueError:
                pass
        if "var(--op-font-mono)" in value and prop == "font-family":
            pass

def check_html(text, path, rep):
    # Inline <style> and style="" attributes
    for m in re.finditer(r"<style[^>]*>(.*?)</style>", text, re.S):
        check_css(m.group(1), path, rep, line_of(text, m.start()) - 1)
    for m in re.finditer(r'\sstyle="([^"]*)"', text):
        ln = line_of(text, m.start())
        before = text[max(0, m.start() - 300):m.start()]
        allowed = ALLOW in text[m.start():m.start() + 400].split(">")[0] or "data-op-allow" in before[-200:]
        frag = m.group(1)
        if not allowed:
            check_css(frag + ";", path, rep, ln - 1)
    # Icons
    if ICONS is not None:
        for m in re.finditer(r'<use href="#i-([a-z0-9-]+)"', text):
            if m.group(1) not in ICONS:
                rep.add("E", "icon", path, line_of(text, m.start()), f'icon "i-{m.group(1)}" is not in the sprite — run scripts/build_icons.py --add {m.group(1)}')
    # Classes: op- is the kit's namespace
    if CLASSES is not None:
        for m in re.finditer(r'class="([^"]*)"', text):
            for c in m.group(1).split():
                if c.startswith("op-") and c not in CLASSES:
                    rep.add("E", "class", path, line_of(text, m.start()), f'class "{c}" is not defined in css/officepress.css — see docs/components.md (own classes: app-…)')
    # Head: one family file
    if "officepress.css" in text and "<html" in text:
        fams = re.findall(r"families/(communicate|create|operate|commerce)\.css", text)
        if len(fams) != 1:
            rep.add("E", "head", path, 1, f"expected exactly one family stylesheet, found {len(fams)}")
    # Header globals order
    gm = re.search(r'<div class="op-globals">(.*?)(<section|<div class="op-popover|</div>\s*</header>)', text, re.S)
    if gm:
        seq = []
        for b in re.finditer(r"<button[^>]*>", gm.group(1)):
            tag = b.group(0)
            if 'pop-notifs' in tag or 'Notifications' in tag: seq.append("notifications")
            elif 'toggle-agent' in tag: seq.append("agent")
            elif 'toggle-mode' in tag: seq.append("theme")
            elif 'pop-user' in tag or 'Account menu' in tag: seq.append("user")
        if seq != ["notifications", "agent", "theme", "user"]:
            rep.add("E", "globals", path, line_of(text, gm.start()), f"header globals are {seq or 'missing'}; must be notifications · agent · theme · user")
    # Icon-only controls need a label
    for m in re.finditer(r"<(button|a)\b([^>]*)>(.*?)</\1>", text, re.S):
        attrs, inner = m.group(2), m.group(3)
        visible = re.sub(r"<svg.*?</svg>|<[^>]+>", "", inner, flags=re.S).strip()
        if "<svg" in inner and not visible and "aria-label" not in attrs and "aria-labelledby" not in attrs:
            rep.add("E", "a11y-label", path, line_of(text, m.start()), f"icon-only <{m.group(1)}> needs aria-label")
    for m in re.finditer(r"<img\b([^>]*)>", text):
        if "alt=" not in m.group(1):
            rep.add("W", "img-alt", path, line_of(text, m.start()), "<img> without alt (use alt=\"\" if decorative)")

def walk(paths):
    for p in paths:
        if os.path.isdir(p):
            for root, dirs, files in os.walk(p):
                dirs[:] = [d for d in dirs if d not in ("node_modules", ".git", ".claude", "icons", "logos", "officepress", "reference")]  # officepress/ = vendored kit
                for f in files:
                    if f.endswith((".html", ".css")):
                        yield os.path.join(root, f)
        elif p.endswith((".html", ".css")):
            yield p

def main(argv):
    as_json = "--json" in argv
    args = [a for a in argv if not a.startswith("--")]
    if "--kit" in argv:
        args = [os.path.join(KIT, "templates"), os.path.join(KIT, "index.html")]
    if not args:
        print(__doc__); return 2
    rep = Report()
    files = list(walk(args))
    for f in files:
        text = open(f, encoding="utf-8").read()
        (check_css if f.endswith(".css") else check_html)(text, f, rep)
    errors = [i for i in rep.items if i["severity"] == "E"]
    if as_json:
        print(json.dumps({"files": len(files), "errors": len(errors), "warnings": len(rep.items) - len(errors), "items": rep.items}, indent=2))
    else:
        for i in rep.items:
            print(f'{i["severity"]} {i["rule"]:<12} {os.path.relpath(i["file"])}:{i["line"]}  {i["message"]}')
        print(f"\n{len(files)} files · {len(errors)} errors · {len(rep.items) - len(errors)} warnings")
    return 1 if errors else 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
~~~~
<!-- officepress-source:end -->
