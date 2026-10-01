# tokens.json — shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui

Source: `kit/tokens/tokens.json`, original lines 660–831. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
      "shadow-edge": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0941,
            0.1412,
            0.3098
          ],
          "hex": "#18244F",
          "alpha": 0.141
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-shadow-edge",
          "com.officepress.modes": {
            "light": "#18244F24",
            "dark": "#FFFFFF1A"
          }
        }
      },
      "shadow-soft": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0941,
            0.1412,
            0.3098
          ],
          "hex": "#18244F",
          "alpha": 0.078
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-shadow-soft",
          "com.officepress.modes": {
            "light": "#18244F14",
            "dark": "#00000059"
          }
        }
      },
      "shadow-pop": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0941,
            0.1412,
            0.3098
          ],
          "hex": "#18244F",
          "alpha": 0.161
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-shadow-pop",
          "com.officepress.modes": {
            "light": "#18244F29",
            "dark": "#00000080"
          }
        }
      },
      "image-outline": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0,
            0.0,
            0.0
          ],
          "hex": "#000000",
          "alpha": 0.102
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-image-outline",
          "com.officepress.modes": {
            "light": "#0000001A",
            "dark": "#FFFFFF1A"
          }
        }
      },
      "fam-communicate": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.1843,
            0.3569,
            0.9176
          ],
          "hex": "#2F5BEA"
        },
        "$description": "Cross-app identity of communicate apps (app tags, app switchers). Never an in-app accent.",
        "$extensions": {
          "com.officepress.cssVar": "--op-fam-communicate"
        }
      },
      "fam-create": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.4157,
            0.2314,
            0.8941
          ],
          "hex": "#6A3BE4"
        },
        "$description": "Cross-app identity of create apps (app tags, app switchers). Never an in-app accent.",
        "$extensions": {
          "com.officepress.cssVar": "--op-fam-create"
        }
      },
      "fam-operate": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.8863,
            0.3333,
            0.1059
          ],
          "hex": "#E2551B"
        },
        "$description": "Cross-app identity of operate apps (app tags, app switchers). Never an in-app accent.",
        "$extensions": {
          "com.officepress.cssVar": "--op-fam-operate"
        }
      },
      "fam-commerce": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0588,
            0.5608,
            0.4157
          ],
          "hex": "#0F8F6A"
        },
        "$description": "Cross-app identity of commerce apps (app tags, app switchers). Never an in-app accent.",
        "$extensions": {
          "com.officepress.cssVar": "--op-fam-commerce"
        }
      },
      "on-fam": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF"
        },
        "$description": "Icon/text on a --op-fam-* tile.",
        "$extensions": {
          "com.officepress.cssVar": "--op-on-fam"
        }
      }
    }
  },
  "dimension": {
    "$type": "dimension",
    "space": {},
    "radius": {},
    "size": {}
  },
  "font": {
    "ui": {
      "$type": "fontFamily",
      "$value": [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif"
      ],
      "$extensions": {
        "com.officepress.cssVar": "--op-font"
      }
    },
~~~~
<!-- officepress-source:end -->
