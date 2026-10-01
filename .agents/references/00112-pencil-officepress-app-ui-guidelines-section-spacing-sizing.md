# OfficePress App UI Guidelines / Section · Spacing & sizing

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| HjUak / zTKmr | frame / Section · Spacing &amp; sizing | {"name":"Section · Spacing &amp; sizing"} | {"width":"fill_container","layout":"vertical","gap":32} |
| hI970 / HjUak | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| o89D5S / hI970 | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| yaKla / o89D5S | text / No | {"name":"No","content":"05"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| lggfm / o89D5S | text / Title | {"name":"Title","content":"Spacing &amp; sizing"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| ygHET / hI970 | text / Desc | {"name":"Desc","content":"A 4-point scale. Every padding, gap and fixed height is a multiple of 4."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| gQm3g / HjUak | frame / Spacing Row | {"name":"Spacing Row"} | {"width":"fill_container","gap":24} |
| PEUii / gQm3g | frame / Scale | {"name":"Scale"} | {"width":520,"fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":28} |
| HV87Y / PEUii | text / Label | {"name":"Label","content":"SCALE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| dVf1d / PEUii | frame / Step 4 | {"name":"Step 4"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| PPMpm / dVf1d | text / V | {"name":"V","content":"4"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| n75QT5 / dVf1d | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":16,"height":12} |
| qEGiG / dVf1d | text / U | {"name":"U","content":"Icon–text, badge inset"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| eKjfm / PEUii | frame / Step 8 | {"name":"Step 8"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| X85uqH / eKjfm | text / V | {"name":"V","content":"8"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| kiIXP / eKjfm | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":32,"height":12} |
| iUWCP / eKjfm | text / U | {"name":"U","content":"Card gap, column padding, row gap"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| OoDsX / PEUii | frame / Step 12 | {"name":"Step 12"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| nCfTW / OoDsX | text / V | {"name":"V","content":"12"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| M3dbo / OoDsX | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":48,"height":12} |
| uMjV6 / OoDsX | text / U | {"name":"U","content":"Card padding, nav inset, header gap"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| z7hdYA / PEUii | frame / Step 16 | {"name":"Step 16"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| KUpyr / z7hdYA | text / V | {"name":"V","content":"16"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| WP0I6 / z7hdYA | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":64,"height":12} |
| cSIb8 / z7hdYA | text / U | {"name":"U","content":"Board padding, column gap, sidebar inset"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| zQiIB / PEUii | frame / Step 20 | {"name":"Step 20"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| rwzTX / zQiIB | text / V | {"name":"V","content":"20"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| BzFG1 / zQiIB | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":80,"height":12} |
| FpiiB / zQiIB | text / U | {"name":"U","content":"Drawer padding"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| XqlUs / PEUii | frame / Step 24 | {"name":"Step 24"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| jX2ai / XqlUs | text / V | {"name":"V","content":"24"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| UX1lL / XqlUs | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":96,"height":12} |
| m5Xlf / XqlUs | text / U | {"name":"U","content":"Section spacing in drawers"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| l4Q7d3 / PEUii | frame / Step 32 | {"name":"Step 32"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| OYOUq / l4Q7d3 | text / V | {"name":"V","content":"32"} | {"fill":"$ink","textGrowth":"fixed-width","width":24,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| zqBJr / l4Q7d3 | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":2,"fill":"$fam-communicate","width":128,"height":12} |
| SWbDm / l4Q7d3 | text / U | {"name":"U","content":"Empty-state spacing"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| s4xYW / gQm3g | frame / Metrics | {"name":"Metrics"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","padding":28} |
| kDQKE / s4xYW | text / Label | {"name":"Label","content":"COMPONENT METRICS"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| IWxPN / s4xYW | frame / Header | {"name":"Header"} | {"width":"fill_container","padding":[11,0],"justifyContent":"space_between"} |
| E7XlD / IWxPN | text / N | {"name":"N","content":"Header"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| QQTmA / IWxPN | text / V | {"name":"V","content":"64 h · padding 0 16 · gap 12"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| cJRtr / s4xYW | frame / Sidebar | {"name":"Sidebar"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| Vy9iP / cJRtr | text / N | {"name":"N","content":"Sidebar"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| P0AVZQ / cJRtr | text / V | {"name":"V","content":"260 w · padding 16 · nav gap 4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| K7WKjr / s4xYW | frame / Nav row | {"name":"Nav row"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| QGlYR / K7WKjr | text / N | {"name":"N","content":"Nav row"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| Bl8jU / K7WKjr | text / V | {"name":"V","content":"36 h · padding 0 12 · gap 12 · icon 16"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| A7YSuK / s4xYW | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| nTyfr / A7YSuK | text / N | {"name":"N","content":"Toolbar"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| EwpMG / A7YSuK | text / V | {"name":"V","content":"padding 8 16 · search 320 × 40"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| zX7uy / s4xYW | frame / Board | {"name":"Board"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| VwZOq / zX7uy | text / N | {"name":"N","content":"Board"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| sSjS1 / zX7uy | text / V | {"name":"V","content":"padding 16 · gap 16 · column 304 w"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| zIQDr / s4xYW | frame / Column | {"name":"Column"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| Vz7Q7 / zIQDr | text / N | {"name":"N","content":"Column"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| VOlbw / zIQDr | text / V | {"name":"V","content":"radius 16 · padding 8 · gap 8 · header padding 12"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| s49yo / s4xYW | frame / Card | {"name":"Card"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| L44g5 / s49yo | text / N | {"name":"N","content":"Card"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| kc0m2 / s49yo | text / V | {"name":"V","content":"radius 8 · padding 12 · gap 8 · shadow, no border"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| s4wwIi / s4xYW | frame / Button / icon button | {"name":"Button / icon button"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| PRluf / s4wwIi | text / N | {"name":"N","content":"Button / icon button"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| gMXqz / s4wwIi | text / V | {"name":"V","content":"36 h · padding 0 12 · icon 15–16"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| NGoiE / s4xYW | frame / Badge | {"name":"Badge"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| QH3Vd / NGoiE | text / N | {"name":"N","content":"Badge"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| FLm5o / NGoiE | text / V | {"name":"V","content":"20 h · circle 20 w or pill padding 0 8"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| gWPk2 / s4xYW | frame / Avatar | {"name":"Avatar"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| ccily / gWPk2 | text / N | {"name":"N","content":"Avatar"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| CYd3P / gWPk2 | text / V | {"name":"V","content":"36 × 36 · initials 12/700"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| f3k6p / s4xYW | frame / Compact controls | {"name":"Compact controls"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| ugzuG / f3k6p | text / N | {"name":"N","content":"Compact controls"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| e56Fc / f3k6p | text / V | {"name":"V","content":"28 / 32 h inside panels, popovers and toolbars"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| eI2jT / s4xYW | frame / Overlays | {"name":"Overlays"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[11,0],"justifyContent":"space_between"} |
| Mrzzm / eI2jT | text / N | {"name":"N","content":"Overlays"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| y0QiiP / eI2jT | text / V | {"name":"V","content":"scrim op-scrim · popover radius 12 · sheet radius 12"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| y0xcZ / zTKmr | frame / Section · Shape &amp; elevation | {"name":"Section · Shape &amp; elevation"} | {"width":"fill_container","layout":"vertical","gap":32} |
| jTkLk / y0xcZ | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| d8Yuz / jTkLk | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| Xxv4i / d8Yuz | text / No | {"name":"No","content":"06"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| ySsL0 / d8Yuz | text / Title | {"name":"Title","content":"Shape &amp; elevation"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| iFfsx / jTkLk | text / Desc | {"name":"Desc","content":"Concentric radii (outer = inner + padding) and elevation from layered shadows. Borders only for structure and state."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| u9BDP / y0xcZ | frame / Shape Row | {"name":"Shape Row","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":24} |
| XVZer / u9BDP | frame / Radius 4 | {"name":"Radius 4"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":16,"padding":24} |
| z2t4q5 / XVZer | rectangle / Shape | {"name":"Shape"} | {"cornerRadius":4,"fill":"$op-tint","width":96,"height":72,"stroke":"$op-accent","strokeWidth":1.5} |
| CcB4i / XVZer | text / V | {"name":"V","content":"radius 4"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| S1w8D / XVZer | text / U | {"name":"U","content":"Buttons, nav rows, inputs, menu items"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| xfUQj / u9BDP | frame / Radius 8 | {"name":"Radius 8"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":16,"padding":24} |
| EVmkM / xfUQj | rectangle / Shape | {"name":"Shape"} | {"cornerRadius":8,"fill":"$op-tint","width":96,"height":72,"stroke":"$op-accent","strokeWidth":1.5} |
| i0r0h / xfUQj | text / V | {"name":"V","content":"radius 8"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| DlNdz / xfUQj | text / U | {"name":"U","content":"Cards, menus, small panels"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| ewCYS / u9BDP | frame / Radius 12 | {"name":"Radius 12"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":16,"padding":24} |
| YAAAQ / ewCYS | rectangle / Shape | {"name":"Shape"} | {"cornerRadius":12,"fill":"$op-tint","width":96,"height":72,"stroke":"$op-accent","strokeWidth":1.5} |
| Ub8D0 / ewCYS | text / V | {"name":"V","content":"radius 12"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| gAEgz / ewCYS | text / U | {"name":"U","content":"Popovers (4 item + 8 padding), settings cards, sheets"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| H4wyuH / u9BDP | frame / Radius 16 | {"name":"Radius 16"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":16,"padding":24} |
| lm9PK / H4wyuH | frame / Shape | {"name":"Shape"} | {"width":96,"height":72,"fill":"$op-tint","cornerRadius":16,"stroke":"$op-accent","strokeWidth":1.5,"padding":8} |
| dBZUx / lm9PK | rectangle / Inner | {"name":"Inner"} | {"cornerRadius":8,"fill":"$op-surface","width":"fill_container","height":"fill_container"} |
| nkOwr / H4wyuH | text / V | {"name":"V","content":"radius 16"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| hGUsd / H4wyuH | text / U | {"name":"U","content":"Card holders: board columns (8 card + 8 padding)"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| gP8Z9 / u9BDP | frame / Radius 999 | {"name":"Radius 999"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":16,"padding":24} |
| ir4ae / gP8Z9 | rectangle / Shape | {"name":"Shape"} | {"cornerRadius":999,"fill":"$op-tint","width":120,"height":40,"stroke":"$op-accent","strokeWidth":1.5} |
| BW9l3 / gP8Z9 | text / V | {"name":"V","content":"radius full"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| WlcHn / gP8Z9 | text / U | {"name":"U","content":"Badges, pills, search, avatars, toggle"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| qBse5 / u9BDP | frame / Shadow light | {"name":"Shadow light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"layout":"vertical","gap":16,"padding":24} |
| r59jOE / qBse5 | rectangle / Card | {"name":"Card"} | {"cornerRadius":8,"fill":"$op-surface","width":120,"height":72,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}]} |
| dLbth / qBse5 | text / V | {"name":"V","content":"card shadow · light"} | {"fill":"$op-text","fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| snGlc / qBse5 | text / U | {"name":"U","content":"edge 0 0 1 + soft 0 1 3 · op-shadow-*"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| CE2tB / u9BDP | frame / Shadow dark | {"name":"Shadow dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"layout":"vertical","gap":16,"padding":24} |
| R0ccU / CE2tB | rectangle / Card | {"name":"Card"} | {"cornerRadius":8,"fill":"$op-surface","width":120,"height":72,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}]} |
| cd3ay / CE2tB | text / V | {"name":"V","content":"card shadow · dark"} | {"fill":"$op-text","fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| WUv1X / CE2tB | text / U | {"name":"U","content":"edge becomes a light hairline in dark"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
