# tokens.json — tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot

Source: `kit/tokens/tokens.json`, original lines 331–493. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
      "tint-2": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.8392,
            0.8745,
            0.9882
          ],
          "hex": "#D6DFFC"
        },
        "$description": "Progress tracks, hover",
        "$extensions": {
          "com.officepress.cssVar": "--op-tint-2",
          "com.officepress.modes": {
            "communicate.light": "#D6DFFC",
            "communicate.dark": "#233670",
            "create.light": "#E2D8FA",
            "create.dark": "#3B276D",
            "operate.light": "#F6E4DC",
            "operate.dark": "#643F30",
            "commerce.light": "#DCF6EF",
            "commerce.dark": "#306455"
          }
        }
      },
      "on-tint": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.1843,
            0.3569,
            0.9176
          ],
          "hex": "#2F5BEA"
        },
        "$description": "Text on tint",
        "$extensions": {
          "com.officepress.cssVar": "--op-on-tint",
          "com.officepress.modes": {
            "communicate.light": "#2F5BEA",
            "communicate.dark": "#95ACF5",
            "create.light": "#6A3BE4",
            "create.dark": "#B49DF2",
            "operate.light": "#B94616",
            "operate.dark": "#F2B094",
            "commerce.light": "#0E7C5D",
            "commerce.dark": "#62EFC6"
          }
        }
      },
      "nav": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0941,
            0.1451,
            0.3059
          ],
          "hex": "#18254E"
        },
        "$description": "Sidebar — darkest surface",
        "$extensions": {
          "com.officepress.cssVar": "--op-nav",
          "com.officepress.modes": {
            "communicate.light": "#18254E",
            "communicate.dark": "#080D1B",
            "create.light": "#281B4B",
            "create.dark": "#0E091A",
            "operate.light": "#412D25",
            "operate.dark": "#16100D",
            "commerce.light": "#244239",
            "commerce.dark": "#0C1714"
          }
        }
      },
      "nav-text": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF"
        },
        "$description": "Sidebar text",
        "$extensions": {
          "com.officepress.cssVar": "--op-nav-text",
          "com.officepress.modes": {
            "communicate.light": "#FFFFFF",
            "communicate.dark": "#E7ECFB",
            "create.light": "#FFFFFF",
            "create.dark": "#EDE8FA",
            "operate.light": "#FFFFFF",
            "operate.dark": "#F6EFEC",
            "commerce.light": "#FFFFFF",
            "commerce.dark": "#ECF7F4"
          }
        }
      },
      "nav-text-2": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.6549,
            0.698,
            0.8431
          ],
          "hex": "#A7B2D7"
        },
        "$description": "Sidebar secondary text",
        "$extensions": {
          "com.officepress.cssVar": "--op-nav-text-2",
          "com.officepress.modes": {
            "communicate.light": "#A7B2D7",
            "communicate.dark": "#8691B6",
            "create.light": "#B6A9D5",
            "create.dark": "#9488B4",
            "operate.light": "#CBBAB3",
            "operate.dark": "#AA9992",
            "commerce.light": "#B2CDC5",
            "commerce.dark": "#91ABA4"
          }
        }
      }
    },
    "shared": {
      "dot": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0314,
            0.4392,
            0.3137
          ],
          "hex": "#087050"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-dot",
          "com.officepress.modes": {
            "light": "#087050",
            "dark": "#3DD68C"
          }
        }
      },
      "nav-dot": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.2392,
            0.8392,
            0.549
          ],
          "hex": "#3DD68C"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-nav-dot",
          "com.officepress.modes": {
            "light": "#3DD68C",
            "dark": "#3DD68C"
          }
        }
      },
~~~~
<!-- officepress-source:end -->
