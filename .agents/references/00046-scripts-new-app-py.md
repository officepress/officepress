# new_app.py — new_app

Source: `kit/scripts/new_app.py`, original lines 1–151. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

<!-- officepress-source:start -->
~~~~python
#!/usr/bin/env python3
"""Scaffold (or update) an OfficePress app from the kit. Python 3.9+, stdlib only.

Usage:
  python3 scripts/new_app.py --name "Accounting" --family operate --out ../accounting
  python3 scripts/new_app.py --name "Orders" --family commerce --template workflow-board --page board.html --out ../orders
  python3 scripts/new_app.py --update --out ../accounting      # refresh officepress/ + agent skills only
Options:
  --name       App name shown in the aside, title and agent (required unless --update)
  --family     communicate | create | operate | commerce (required unless --update)
  --mark       Product mark under logos/products, e.g. operate/accounting (default: <family>/<slug of name>)
  --template   Page to start from (default: app-board). Any file in templates/ without .html, e.g. auth/sign-in
  --page       Output file name (default: index.html). Never overwritten unless --force
  --out        App folder (required)
  --update     Only refresh the vendored kit (<out>/officepress/) and <out>/.claude skills
  --force      Allow overwriting --page
What you get:
  <out>/<page>                 your screen (brand, family, title and agent already set)
  <out>/officepress/           the kit: css, js, icons, logos, docs, templates, tokens, scripts/check.py — do not edit
  <out>/.claude/skills|agents  OfficePress agent skills (Claude Code)
  <out>/AGENTS.md, CLAUDE.md   agent instructions (only written if missing)
"""
import argparse, json, os, re, shutil, sys

KIT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAMILIES = ("communicate", "create", "operate", "commerce")
VENDOR_SKIP = {"reference", ".claude", ".git", "node_modules"}


def slug(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def vendor(out):
    """Copy the kit into <out>/officepress and the agent files into <out>/.claude."""
    dest = os.path.join(out, "officepress")
    if os.path.exists(dest):
        shutil.rmtree(dest)
    def ignore(d, names):
        rel = os.path.relpath(d, KIT)
        skip = {n for n in names if rel == "." and n in VENDOR_SKIP}
        if rel == "scripts":
            skip |= {n for n in names if n != "check.py"}
        if rel == "icons":
            skip |= {"svg"}
        return skip | {n for n in names if n in ("__pycache__", ".DS_Store")}
    shutil.copytree(KIT, dest, ignore=ignore)
    open(os.path.join(dest, "VENDORED.md"), "w").write(
        "# Vendored copy of the OfficePress UI Kit\n\nDo not edit. Refresh with:\n\n"
        f"    python3 {KIT}/scripts/new_app.py --update --out {out}\n\n"
        f"Kit source: {KIT}\nReference screenshots: {KIT}/reference\n")
    for kind in ("skills", "agents"):
        src = os.path.join(KIT, ".claude", kind)
        if not os.path.isdir(src):
            continue
        for n in os.listdir(src):
            if not n.startswith("officepress") or n == "officepress-new-app":   # new-app needs the full kit
                continue
            s, d = os.path.join(src, n), os.path.join(out, ".claude", kind, n)
            os.makedirs(os.path.dirname(d), exist_ok=True)
            if os.path.isdir(s):
                shutil.rmtree(d, ignore_errors=True); shutil.copytree(s, d)
            else:
                shutil.copy(s, d)


def write_page(a, out):
    tpl_path = os.path.join(KIT, "templates", a.template + ".html")
    if not os.path.exists(tpl_path):
        sys.exit(f"Template not found: {tpl_path}")
    page = os.path.join(out, a.page)
    if os.path.exists(page) and not a.force:
        sys.exit(f"{page} exists — choose another --page, or pass --force to overwrite")
    logos = json.load(open(os.path.join(KIT, "logos", "logos.json")))
    mark = a.mark or f"{a.family}/{slug(a.name)}"
    if not os.path.exists(os.path.join(KIT, "logos", "products", mark + ".svg")):
        fallback = next(iter(logos["products"][a.family].values())).replace("products/", "").replace(".svg", "")
        print(f"! No product mark for '{mark}', using {fallback}. Pass --mark or add logos/products/{mark}.svg (see docs/logos.md)")
        mark = fallback

    html = open(tpl_path, encoding="utf-8").read()
    depth = a.template.count("/") + 1                      # templates/x.html → 1, templates/auth/x.html → 2
    up = "../" * depth
    html = html.replace(f'href="{up}', 'href="officepress/').replace(f'src="{up}', 'src="officepress/')
    html = re.sub(r"families/(communicate|create|operate|commerce)\.css", f"families/{a.family}.css", html)
    html = re.sub(r"<!-- family: \w+ -->", f"<!-- family: {a.family} -->", html)
    html = re.sub(r"logos/products/[a-z]+/[a-z-]+\.svg", f"logos/products/{mark}.svg", html)
    m = re.search(r'data-app="([a-z-]+)"', html)
    old_slug = m.group(1) if m else None
    old = re.search(r'<span class="op-brand__name">(.*?)</span>', html) or re.search(r'<span class="op-title op-grow">(.*?)</span>', html)
    if old:
        old_name = old.group(1)
        html = html.replace(old.group(0), old.group(0).replace(old_name, a.name))
        if a.template.startswith("auth/"):                  # auth pages only mention the app as the app
            html = re.sub(rf"(?<![\w/-]){re.escape(old_name)}(?![\w-])", a.name, html)
        for pat in (f"{old_name} Agent", f"anything in {old_name}", f'aria-label="{old_name} navigation"'):
            html = html.replace(pat, pat.replace(old_name, a.name))
    html = re.sub(r"<title>(.*?) · .*?</title>", lambda t: f"<title>{t.group(1)} · {a.name}</title>", html)
    if old_slug:
        html = html.replace(f'data-app="{old_slug}"', f'data-app="{slug(a.name)}"')
    open(page, "w", encoding="utf-8").write(html)
    return mark


def write_agent_files(a, out, mark):
    agents = os.path.join(out, "AGENTS.md")
    if not os.path.exists(agents):
        open(agents, "w").write(f"""# {a.name} — OfficePress app

Family: **{a.family}** · Product mark: `officepress/logos/products/{mark}.svg`

This app is built on the OfficePress UI Kit, vendored in `officepress/`. **Before changing any UI, read `officepress/AGENTS.md` and follow it.** Paths in the kit docs are relative to `officepress/`.

- Do not edit `officepress/` — it is a copy of the kit. Refresh it with `officepress/VENDORED.md`.
- Every page loads `officepress/css/officepress.css` + `officepress/css/families/{a.family}.css` (only this family).
- Copy the frame (aside, header globals, agent panel) from an existing page; replace the nav items and `<main class="op-content">`.
- Own CSS goes in `app.css` with `app-` classes and `var(--op-*)` tokens.
- Validate before you finish: `python3 officepress/scripts/check.py .` (0 errors), then `officepress/docs/workflows/review.md`.
""")
    claude = os.path.join(out, "CLAUDE.md")
    if not os.path.exists(claude):
        open(claude, "w").write("@AGENTS.md\n\nOfficePress skills are installed in `.claude/skills/` (officepress-ui, officepress-screen, officepress-review).\n")


def main():
    ap = argparse.ArgumentParser(description="Scaffold or update an OfficePress app")
    ap.add_argument("--name"); ap.add_argument("--family", choices=FAMILIES); ap.add_argument("--mark")
    ap.add_argument("--template", default="app-board"); ap.add_argument("--page", default="index.html")
    ap.add_argument("--out", required=True); ap.add_argument("--update", action="store_true"); ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    out = os.path.abspath(a.out)
    if a.update:
        if not os.path.isdir(os.path.join(out, "officepress")):
            sys.exit(f"{out} has no officepress/ folder — scaffold it first")
        vendor(out)
        print(f"✓ Refreshed {out}/officepress and .claude skills from {KIT}")
        return
    if not a.name or not a.family:
        ap.error("--name and --family are required (or use --update)")
    os.makedirs(out, exist_ok=True)
    page = os.path.join(out, a.page)
    if os.path.exists(page) and not a.force:
        sys.exit(f"{page} exists — choose another --page, or pass --force to overwrite")
    vendor(out)
    mark = write_page(a, out)
    write_agent_files(a, out, mark)
    print(f"✓ {a.name} ({a.family}) → {page}  ·  from templates/{a.template}.html")
    print(f"  Next: edit the nav + <main>, then: cd {out} && python3 officepress/scripts/check.py .")


if __name__ == "__main__":
    main()
~~~~
<!-- officepress-source:end -->
