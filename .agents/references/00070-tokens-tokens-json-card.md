# tokens.json — card; pop; number; press-scale

Source: `kit/tokens/tokens.json`, original lines 990–1091. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
    "card": {
      "$value": [
        {
          "color": "{color.shared.shadow-edge}",
          "offsetX": {
            "value": 0,
            "unit": "px"
          },
          "offsetY": {
            "value": 0,
            "unit": "px"
          },
          "blur": {
            "value": 1,
            "unit": "px"
          },
          "spread": {
            "value": 0,
            "unit": "px"
          }
        },
        {
          "color": "{color.shared.shadow-soft}",
          "offsetX": {
            "value": 0,
            "unit": "px"
          },
          "offsetY": {
            "value": 1,
            "unit": "px"
          },
          "blur": {
            "value": 3,
            "unit": "px"
          },
          "spread": {
            "value": 0,
            "unit": "px"
          }
        }
      ],
      "$extensions": {
        "com.officepress.cssVar": "--op-elev-card"
      }
    },
    "pop": {
      "$value": [
        {
          "color": "{color.shared.shadow-edge}",
          "offsetX": {
            "value": 0,
            "unit": "px"
          },
          "offsetY": {
            "value": 0,
            "unit": "px"
          },
          "blur": {
            "value": 1,
            "unit": "px"
          },
          "spread": {
            "value": 0,
            "unit": "px"
          }
        },
        {
          "color": "{color.shared.shadow-pop}",
          "offsetX": {
            "value": 0,
            "unit": "px"
          },
          "offsetY": {
            "value": 12,
            "unit": "px"
          },
          "blur": {
            "value": 32,
            "unit": "px"
          },
          "spread": {
            "value": 0,
            "unit": "px"
          }
        }
      ],
      "$extensions": {
        "com.officepress.cssVar": "--op-elev-pop"
      }
    }
  },
  "number": {
    "$type": "number",
    "press-scale": {
      "$value": 0.96,
      "$description": "Scale on press. Never below 0.95.",
      "$extensions": {
        "com.officepress.cssVar": "--op-press-scale"
      }
    }
  }
}
~~~~
<!-- officepress-source:end -->
