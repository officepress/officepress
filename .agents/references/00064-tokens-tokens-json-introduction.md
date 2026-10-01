# tokens.json — Introduction; color; family; canvas; toolbar; column; surface; sunken; border

Source: `kit/tokens/tokens.json`, original lines 1–155. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
{
  "$description": "OfficePress design tokens (DTCG 2025.10). Modes: $extensions.com.officepress.modes. Family colour tokens resolve per family; see css/families/*.css.",
  "color": {
    "$type": "color",
    "family": {
      "canvas": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.9529,
            0.9608,
            0.9843
          ],
          "hex": "#F3F5FB"
        },
        "$description": "Board background",
        "$extensions": {
          "com.officepress.cssVar": "--op-canvas",
          "com.officepress.modes": {
            "communicate.light": "#F3F5FB",
            "communicate.dark": "#0B1022",
            "create.light": "#F5F3FB",
            "create.dark": "#120C21",
            "operate.light": "#F9F6F5",
            "operate.dark": "#1C1411",
            "commerce.light": "#F5F9F8",
            "commerce.dark": "#101D19"
          }
        }
      },
      "toolbar": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.9176,
            0.9294,
            0.9804
          ],
          "hex": "#EAEDFA"
        },
        "$description": "Toolbar strip, between header and canvas",
        "$extensions": {
          "com.officepress.cssVar": "--op-toolbar",
          "com.officepress.modes": {
            "communicate.light": "#EAEDFA",
            "communicate.dark": "#0F162C",
            "create.light": "#EEEAF9",
            "create.dark": "#18102B",
            "operate.light": "#F6F0EE",
            "operate.dark": "#251A16",
            "commerce.light": "#EDF6F4",
            "commerce.dark": "#152621"
          }
        }
      },
      "column": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.902,
            0.9216,
            0.9765
          ],
          "hex": "#E6EBF9"
        },
        "$description": "Column / grouping panels",
        "$extensions": {
          "com.officepress.cssVar": "--op-column",
          "com.officepress.modes": {
            "communicate.light": "#E6EBF9",
            "communicate.dark": "#0F162D",
            "create.light": "#ECE7F8",
            "create.dark": "#18112B",
            "operate.light": "#F4EEEB",
            "operate.dark": "#251B17",
            "commerce.light": "#EAF5F2",
            "commerce.dark": "#162622"
          }
        }
      },
      "surface": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF"
        },
        "$description": "Cards, header, dialogs",
        "$extensions": {
          "com.officepress.cssVar": "--op-surface",
          "com.officepress.modes": {
            "communicate.light": "#FFFFFF",
            "communicate.dark": "#141C36",
            "create.light": "#FFFFFF",
            "create.dark": "#1E1634",
            "operate.light": "#FFFFFF",
            "operate.dark": "#2D211C",
            "commerce.light": "#FFFFFF",
            "commerce.dark": "#1C2E29"
          }
        }
      },
      "sunken": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.9333,
            0.9451,
            0.9843
          ],
          "hex": "#EEF1FB"
        },
        "$description": "Inputs, toggles",
        "$extensions": {
          "com.officepress.cssVar": "--op-sunken",
          "com.officepress.modes": {
            "communicate.light": "#EEF1FB",
            "communicate.dark": "#0E1429",
            "create.light": "#F2EFFA",
            "create.dark": "#160F28",
            "operate.light": "#F8F3F1",
            "operate.dark": "#221915",
            "commerce.light": "#F1F8F6",
            "commerce.dark": "#14231F"
          }
        }
      },
      "border": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.8392,
            0.8667,
            0.9529
          ],
          "hex": "#D6DDF3"
        },
        "$description": "Hairlines, dividers",
        "$extensions": {
          "com.officepress.cssVar": "--op-border",
          "com.officepress.modes": {
            "communicate.light": "#D6DDF3",
            "communicate.dark": "#26325A",
            "create.light": "#DFD7F2",
            "create.dark": "#352857",
            "operate.light": "#ECE1DD",
            "operate.dark": "#4D3A33",
            "commerce.light": "#DCEDE8",
            "commerce.dark": "#314E46"
          }
        }
      },
~~~~
<!-- officepress-source:end -->
