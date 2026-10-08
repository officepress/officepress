import { families } from "./families.js";
export type Theme = {
  brand: string;
  logo: string;
  accent: string;
  sidebar: string;
  canvas: string;
};
export type ThemeState = { theme: Theme; revision: number };
export type Family = keyof typeof families;
export function defaults(family: Family): Theme {
  const f = families[family].light;
  return {
    brand: "OfficePress",
    logo: "/logo.svg",
    accent: f.accent,
    sidebar: f.nav,
    canvas: f.canvas,
  };
}
export function luminance(hex: string) {
  const rgb = hex
    .match(/[\da-f]{2}/gi)!
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
export function contrast(a: string, b: string) {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
export function foreground(bg: string) {
  return contrast("#FFFFFF", bg) >= contrast("#111111", bg)
    ? "#FFFFFF"
    : "#111111";
}
export function validateTheme(value: unknown): Theme {
  const t = value as Theme;
  if (
    !t ||
    typeof t.brand !== "string" ||
    !t.brand.trim() ||
    t.brand.length > 60
  )
    throw new Error("Brand name must contain 1–60 characters.");
  if (
    typeof t.logo !== "string" ||
    !/^\/[\w./-]+\.(svg|png|webp)$/.test(t.logo) ||
    t.logo.includes("..") ||
    t.logo.startsWith("//")
  )
    throw new Error("Logo must be a local image path.");
  for (const k of ["accent", "sidebar", "canvas"] as const)
    if (!/^#[\da-f]{6}$/i.test(t[k] || ""))
      throw new Error("Use six-digit hex colours.");
  // Derive foregrounds, never accept a custom illegible text token.
  for (const k of ["accent", "sidebar", "canvas"] as const)
    if (contrast(foreground(t[k]), t[k]) < 4.6)
      throw new Error("Colour contrast is too low.");
  return {
    brand: t.brand.trim(),
    logo: t.logo,
    accent: t.accent,
    sidebar: t.sidebar,
    canvas: t.canvas,
  };
}

export function themeTokens(
  t: Theme,
  family: Family = "operate",
): Record<string, string> {
  const base = defaults(family),
    tokens: Record<string, string> = {};
  if (t.canvas.toUpperCase() !== base.canvas.toUpperCase()) {
    const text = foreground(t.canvas);
    Object.assign(tokens, {
      "--op-canvas": t.canvas,
      "--op-surface": t.canvas,
      "--op-sunken": t.canvas,
      "--op-toolbar": t.canvas,
      "--op-column": t.canvas,
      "--op-text": text,
      "--op-text-2": text,
      "--op-accent-text": text,
    });
  }
  if (t.accent.toUpperCase() !== base.accent.toUpperCase())
    Object.assign(tokens, {
      "--op-accent": t.accent,
      "--op-accent-strong": t.accent,
      "--op-on-accent": foreground(t.accent),
    });
  if (t.sidebar.toUpperCase() !== base.sidebar.toUpperCase())
    Object.assign(tokens, {
      "--op-nav": t.sidebar,
      "--op-nav-text": foreground(t.sidebar),
      "--op-nav-text-2": foreground(t.sidebar),
    });
  return tokens;
}
