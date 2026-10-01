# tokens.json — border-strong; text; text-2; accent; accent-text; accent-strong; tint

Source: `kit/tokens/tokens.json`, original lines 156–330. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
      "border-strong": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.7373,
            0.7804,
            0.9216
          ],
          "hex": "#BCC7EB"
        },
        "$description": "Input outlines, dashed slots",
        "$extensions": {
          "com.officepress.cssVar": "--op-border-strong",
          "com.officepress.modes": {
            "communicate.light": "#BCC7EB",
            "communicate.dark": "#33416E",
            "create.light": "#CABEE9",
            "create.dark": "#45366B",
            "operate.light": "#E0CFC8",
            "operate.dark": "#5F4A42",
            "commerce.light": "#C7E1D9",
            "commerce.dark": "#406157"
          }
        }
      },
      "text": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.0941,
            0.1294,
            0.2431
          ],
          "hex": "#18213E"
        },
        "$description": "Primary text, icons",
        "$extensions": {
          "com.officepress.cssVar": "--op-text",
          "com.officepress.modes": {
            "communicate.light": "#18213E",
            "communicate.dark": "#E7ECFB",
            "create.light": "#241A3D",
            "create.dark": "#EDE8FA",
            "operate.light": "#352722",
            "operate.dark": "#F6EFEC",
            "commerce.light": "#213630",
            "commerce.dark": "#ECF7F4"
          }
        }
      },
      "text-2": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.3569,
            0.3961,
            0.5255
          ],
          "hex": "#5B6586"
        },
        "$description": "Secondary text, meta, icons",
        "$extensions": {
          "com.officepress.cssVar": "--op-text-2",
          "com.officepress.modes": {
            "communicate.light": "#5B6586",
            "communicate.dark": "#97A2C3",
            "create.light": "#685D83",
            "create.dark": "#A59AC1",
            "operate.light": "#756761",
            "operate.dark": "#B8A9A2",
            "commerce.light": "#5B716A",
            "commerce.dark": "#A1BAB3"
          }
        }
      },
      "accent": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.1843,
            0.3569,
            0.9176
          ],
          "hex": "#2F5BEA"
        },
        "$description": "Brand fill: app tile, bars, key icons",
        "$extensions": {
          "com.officepress.cssVar": "--op-accent",
          "com.officepress.modes": {
            "communicate.light": "#2F5BEA",
            "communicate.dark": "#5D80EF",
            "create.light": "#6A3BE4",
            "create.dark": "#8F6CEB",
            "operate.light": "#E2551B",
            "operate.dark": "#E6622C",
            "commerce.light": "#0F8F6A",
            "commerce.dark": "#11A67B"
          }
        }
      },
      "accent-text": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.1843,
            0.3569,
            0.9176
          ],
          "hex": "#2F5BEA"
        },
        "$description": "Accent used as text or links",
        "$extensions": {
          "com.officepress.cssVar": "--op-accent-text",
          "com.officepress.modes": {
            "communicate.light": "#2F5BEA",
            "communicate.dark": "#708FF1",
            "create.light": "#6A3BE4",
            "create.dark": "#A082EE",
            "operate.light": "#C74B18",
            "operate.dark": "#EA7D50",
            "commerce.light": "#0E8160",
            "commerce.dark": "#13B989"
          }
        }
      },
      "accent-strong": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.1294,
            0.3137,
            0.9137
          ],
          "hex": "#2150E9"
        },
        "$description": "Primary button fill, urgent bars",
        "$extensions": {
          "com.officepress.cssVar": "--op-accent-strong",
          "com.officepress.modes": {
            "communicate.light": "#2150E9",
            "communicate.dark": "#9EB3F5",
            "create.light": "#6A3BE4",
            "create.dark": "#BBA6F3",
            "operate.light": "#AB4014",
            "operate.dark": "#F1A98C",
            "commerce.light": "#0C6F52",
            "commerce.dark": "#17DEA4"
          }
        }
      },
      "tint": {
        "$value": {
          "colorSpace": "srgb",
          "components": [
            0.9294,
            0.9451,
            0.9961
          ],
          "hex": "#EDF1FE"
        },
        "$description": "Selected / count badge background",
        "$extensions": {
          "com.officepress.cssVar": "--op-tint",
          "com.officepress.modes": {
            "communicate.light": "#EDF1FE",
            "communicate.dark": "#1C2B5F",
            "create.light": "#F2EEFD",
            "create.dark": "#301F5B",
            "operate.light": "#FBF3F0",
            "operate.dark": "#533428",
            "commerce.light": "#F0FBF8",
            "commerce.dark": "#285346"
          }
        }
      },
~~~~
<!-- officepress-source:end -->
