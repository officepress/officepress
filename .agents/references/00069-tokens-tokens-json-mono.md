# tokens.json — mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow

Source: `kit/tokens/tokens.json`, original lines 832–989. Captured 2026-10-01; SHA-256 is in the coverage manifest.

Load when working with this documented rule, example, implementation or data structure.

Read [source authority and corrections](00078-officepress-source-decisions.md) — load when interpreting historical copy, sample behavior or conflicting values.

[Complete local kit map](00074-officepress-kit-source-map.md) — load when following a source-relative path or locating a related implementation.

Sections of this source: [Introduction; color; family; canvas; toolbar; column; surface; sunken; border](00064-tokens-tokens-json-introduction.md) · [border-strong; text; text-2; accent; accent-text; accent-strong; tint](00065-tokens-tokens-json-border-strong.md) · [tint-2; on-tint; nav; nav-text; nav-text-2; shared; dot; nav-dot](00066-tokens-tokens-json-tint-2.md) · [on-accent; danger; danger-tint; warning; warning-tint; nav-active; nav-field; nav-border; scrim](00067-tokens-tokens-json-on-accent.md) · [shadow-edge; shadow-soft; shadow-pop; image-outline; fam-communicate; fam-create; fam-operate; fam-commerce; on-fam; dimension; space; radius; size; font; ui](00068-tokens-tokens-json-shadow-edge.md) · [mono; typography; display; heading; title; body; small; caption; duration; fast; base; easing; standard; out; shadow](00069-tokens-tokens-json-mono.md) · [card; pop; number; press-scale](00070-tokens-tokens-json-card.md)

<!-- officepress-source:start -->
~~~~json
    "mono": {
      "$type": "fontFamily",
      "$value": [
        "JetBrains Mono",
        "ui-monospace",
        "monospace"
      ],
      "$description": "Codes, keys and {{variables}} only",
      "$extensions": {
        "com.officepress.cssVar": "--op-font-mono"
      }
    }
  },
  "typography": {
    "$type": "typography",
    "display": {
      "$value": {
        "fontFamily": "{font.ui}",
        "fontSize": {
          "value": 28,
          "unit": "px"
        },
        "fontWeight": 700,
        "lineHeight": 1.2
      },
      "$description": "Auth pages only",
      "$extensions": {
        "com.officepress.cssVar": "--op-text-display"
      }
    },
    "heading": {
      "$value": {
        "fontFamily": "{font.ui}",
        "fontSize": {
          "value": 20,
          "unit": "px"
        },
        "fontWeight": 700,
        "lineHeight": 1.25
      },
      "$description": "Drawer and dialog titles",
      "$extensions": {
        "com.officepress.cssVar": "--op-text-heading"
      }
    },
    "title": {
      "$value": {
        "fontFamily": "{font.ui}",
        "fontSize": {
          "value": 16,
          "unit": "px"
        },
        "fontWeight": 700,
        "lineHeight": 1.25
      },
      "$description": "Page title, app name, section titles",
      "$extensions": {
        "com.officepress.cssVar": "--op-text-title"
      }
    },
    "body": {
      "$value": {
        "fontFamily": "{font.ui}",
        "fontSize": {
          "value": 13,
          "unit": "px"
        },
        "fontWeight": 400,
        "lineHeight": 1.5
      },
      "$description": "Nav, card titles, inputs, buttons (700 for emphasis)",
      "$extensions": {
        "com.officepress.cssVar": "--op-text-body"
      }
    },
    "small": {
      "$value": {
        "fontFamily": "{font.ui}",
        "fontSize": {
          "value": 12,
          "unit": "px"
        },
        "fontWeight": 400,
        "lineHeight": 1.5
      },
      "$description": "Sender, preview, helper text",
      "$extensions": {
        "com.officepress.cssVar": "--op-text-small"
      }
    },
    "caption": {
      "$value": {
        "fontFamily": "{font.ui}",
        "fontSize": {
          "value": 11,
          "unit": "px"
        },
        "fontWeight": 400,
        "lineHeight": 1.5
      },
      "$description": "Times, badges, overlines (caps + 1px tracking)",
      "$extensions": {
        "com.officepress.cssVar": "--op-text-caption"
      }
    }
  },
  "duration": {
    "$type": "duration",
    "fast": {
      "$value": {
        "value": 150,
        "unit": "ms"
      },
      "$description": "Colour and opacity transitions",
      "$extensions": {
        "com.officepress.cssVar": "--op-dur-fast"
      }
    },
    "base": {
      "$value": {
        "value": 200,
        "unit": "ms"
      },
      "$description": "Transform transitions, panels",
      "$extensions": {
        "com.officepress.cssVar": "--op-dur"
      }
    }
  },
  "easing": {
    "$type": "cubicBezier",
    "standard": {
      "$value": [
        0.2,
        0,
        0,
        1
      ],
      "$description": "Icon swaps, springs without a library",
      "$extensions": {
        "com.officepress.cssVar": "--op-ease"
      }
    },
    "out": {
      "$value": [
        0,
        0,
        0.2,
        1
      ],
      "$description": "Enter / hover transitions",
      "$extensions": {
        "com.officepress.cssVar": "--op-ease-out"
      }
    }
  },
  "shadow": {
    "$type": "shadow",
~~~~
<!-- officepress-source:end -->
