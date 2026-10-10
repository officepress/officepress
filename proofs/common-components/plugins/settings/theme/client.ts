//client
import { families } from './families.js';

//--------------------------------------------------------------------//
// Types

//available kit families used to select authoritative palette defaults
export type Family = keyof typeof families;

//app-owned brand and three background colors; foregrounds are derived
export type Theme = {
  brand: string,
  logo: string,
  accent: string,
  sidebar: string,
  canvas: string
};

//saved theme and revision used to reject concurrent settings writes
export type ThemeState = { theme: Theme, revision: number };

//--------------------------------------------------------------------//
// Functions

/**
 * Calculate the contrast ratio between two six-digit RGB colors.
 */
export function getContrastRatio(firstColor: string, secondColor: string) {
  const firstLuminance = getRelativeLuminance(firstColor);
  const secondLuminance = getRelativeLuminance(secondColor);
  return (
    (Math.max(firstLuminance, secondLuminance) + 0.05) /
    (Math.min(firstLuminance, secondLuminance) + 0.05)
  );
};

/**
 * Build the default theme for the selected visual family.
 */
export function getDefaultTheme(family: Family): Theme {
  const palette = families[family].light;
  return {
    brand: 'OfficePress',
    logo: '/logo.svg',
    accent: palette.accent,
    sidebar: palette.nav,
    canvas: palette.canvas
  };
};

/**
 * Choose the more legible light or dark foreground for the supplied
 * background.
 */
export function getForeground(background: string) {
  return getContrastRatio('#FFFFFF', background) >=
    getContrastRatio('#111111', background)
    ? '#FFFFFF'
    : '#111111';
};

/**
 * Convert a six-digit RGB color to its relative luminance for contrast
 * comparisons.
 */
export function getRelativeLuminance(hex: string) {
  //convert sRGB channels to linear light before applying WCAG weights
  const rgb = hex
    .match(/[\da-f]{2}/gi)!
    .map((channelHex) => parseInt(channelHex, 16) / 255)
    .map((channelValue) =>
      channelValue <= 0.04045
        ? channelValue / 12.92
        : ((channelValue + 0.055) / 1.055) ** 2.4
    );
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

/**
 * Produce only overridden CSS tokens, deriving readable foregrounds from
 * their backgrounds.
 */
export function themeTokens(
  theme: Theme,
  family: Family = 'operate'
): Record<string, string> {
  const base = getDefaultTheme(family);
  const tokens: Record<string, string> = {};
  //one canvas change updates its related surfaces and readable foregrounds
  if (theme.canvas.toUpperCase() !== base.canvas.toUpperCase()) {
    const text = getForeground(theme.canvas);
    Object.assign(tokens, {
      '--op-canvas': theme.canvas,
      '--op-surface': theme.canvas,
      '--op-sunken': theme.canvas,
      '--op-toolbar': theme.canvas,
      '--op-column': theme.canvas,
      '--op-text': text,
      '--op-text-2': text,
      '--op-accent-text': text
    });
  }
  //emit only actual overrides so unchanged kit tokens remain authoritative
  if (theme.accent.toUpperCase() !== base.accent.toUpperCase())
    Object.assign(tokens, {
      '--op-accent': theme.accent,
      '--op-accent-strong': theme.accent,
      '--op-on-accent': getForeground(theme.accent)
    });
  if (theme.sidebar.toUpperCase() !== base.sidebar.toUpperCase())
    Object.assign(tokens, {
      '--op-nav': theme.sidebar,
      '--op-nav-text': getForeground(theme.sidebar),
      '--op-nav-text-2': getForeground(theme.sidebar)
    });
  return tokens;
};

/**
 * Validate app-owned branding and local image paths before theme persistence.
 */
export function validateTheme(value: unknown): Theme {
  const theme = value as Theme;
  //validate branding before trimming or reading any optional input fields
  if (
    !theme ||
    typeof theme.brand !== 'string' ||
    !theme.brand.trim() ||
    theme.brand.length > 60
  )
    throw new Error('Brand name must contain 1–60 characters.');
  //local image paths cannot traverse directories or become
  // protocol-relative
  if (
    typeof theme.logo !== 'string' ||
    !/^\/[\w./-]+\.(svg|png|webp)$/.test(theme.logo) ||
    theme.logo.includes('..') ||
    theme.logo.startsWith('//')
  )
    throw new Error('Logo must be a local image path.');
  //accept only complete RGB tokens before evaluating contrast
  for (const tokenName of [ 'accent', 'sidebar', 'canvas' ] as const)
    if (!/^#[\da-f]{6}$/i.test(theme[tokenName] || ''))
      throw new Error('Use six-digit hex colours.');
  //derive foregrounds, never accept a custom illegible text token
  for (const tokenName of [ 'accent', 'sidebar', 'canvas' ] as const)
    if (
      getContrastRatio(getForeground(theme[tokenName]), theme[tokenName]) < 4.6
    )
      throw new Error('Colour contrast is too low.');
  return {
    brand: theme.brand.trim(),
    logo: theme.logo,
    accent: theme.accent,
    sidebar: theme.sidebar,
    canvas: theme.canvas
  };
};
