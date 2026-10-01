# tokens.json — on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim

Source: `kit/tokens/tokens.json`, original lines 494–659. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
      "on-accent": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-on-accent",
          "com.officepress.modes": {
            "light": "#FFFFFF",
            "dark": "#0B1022"
          }
        }
      },
      "danger": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.7529,
            0.2118,
            0.1725
          ],
          "hex": "#C0362C"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-danger",
          "com.officepress.modes": {
            "light": "#C0362C",
            "dark": "#F2766B"
          }
        }
      },
      "danger-tint": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.9922,
            0.9294,
            0.9216
          ],
          "hex": "#FDEDEB"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-danger-tint",
          "com.officepress.modes": {
            "light": "#FDEDEB",
            "dark": "#3A1614"
          }
        }
      },
      "warning": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.5412,
            0.2941,
            0.0
          ],
          "hex": "#8A4B00"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-warning",
          "com.officepress.modes": {
            "light": "#8A4B00",
            "dark": "#F5C26B"
          }
        }
      },
      "warning-tint": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            0.9569,
            0.8588
          ],
          "hex": "#FFF4DB"
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-warning-tint",
          "com.officepress.modes": {
            "light": "#FFF4DB",
            "dark": "#33260C"
          }
        }
      },
      "nav-active": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF",
          "alpha": 0.102
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-nav-active",
          "com.officepress.modes": {
            "light": "#FFFFFF1A",
            "dark": "#FFFFFF14"
          }
        }
      },
      "nav-field": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF",
          "alpha": 0.071
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-nav-field",
          "com.officepress.modes": {
            "light": "#FFFFFF12",
            "dark": "#FFFFFF0D"
          }
        }
      },
      "nav-border": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            1.0,
            1.0,
            1.0
          ],
          "hex": "#FFFFFF",
          "alpha": 0.102
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-nav-border",
          "com.officepress.modes": {
            "light": "#FFFFFF1A",
            "dark": "#FFFFFF14"
          }
        }
      },
      "scrim": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0431,
            0.0627,
            0.1333
          ],
          "hex": "#0B1022",
          "alpha": 0.4
        },
        "$extensions": {
          "com.officepress.cssVar": "--op-scrim",
          "com.officepress.modes": {
            "light": "#0B102266",
            "dark": "#00000099"
          }
        }
      },
~~~~
<!-- officepress-source:end -->
