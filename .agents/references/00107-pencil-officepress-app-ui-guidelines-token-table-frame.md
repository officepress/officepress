# OfficePress App UI Guidelines / Section · Colour tokens / Token Table — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| le4i4 / aBG8j | frame / Token Table | {"name":"Token Table"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","padding":[20,24]} |
| OWN2y / le4i4 | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":8,"padding":[0,0,12,0],"alignItems":"end"} |
| JTTfj / OWN2y | text / Token | {"name":"Token","content":"TOKEN · ROLE"} | {"fill":"$muted","textGrowth":"fixed-width","width":300,"fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| XR5mO / OWN2y | frame / Communicate | {"name":"Communicate"} | {"width":"fill_container","layout":"vertical","gap":4} |
| PiTls / XR5mO | text / Fam | {"name":"Fam","content":"COMMUNICATE"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| VJP7f / XR5mO | text / Modes | {"name":"Modes","content":"light          dark"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| hgIKB / OWN2y | frame / Create | {"name":"Create"} | {"width":"fill_container","layout":"vertical","gap":4} |
| RoVNO / hgIKB | text / Fam | {"name":"Fam","content":"CREATE"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| DxcFz / hgIKB | text / Modes | {"name":"Modes","content":"light          dark"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| T4wLd / OWN2y | frame / Operate | {"name":"Operate"} | {"width":"fill_container","layout":"vertical","gap":4} |
| LOddY / T4wLd | text / Fam | {"name":"Fam","content":"OPERATE"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| QNScG / T4wLd | text / Modes | {"name":"Modes","content":"light          dark"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| gyyo2 / OWN2y | frame / Commerce | {"name":"Commerce"} | {"width":"fill_container","layout":"vertical","gap":4} |
| aXX5f / gyyo2 | text / Fam | {"name":"Fam","content":"COMMERCE"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| jMYbc / gyyo2 | text / Modes | {"name":"Modes","content":"light          dark"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Z9QnSS / le4i4 | frame / Row canvas | {"name":"Row canvas"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| fLRkj / Z9QnSS | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| J2lVhu / fLRkj | text / Token | {"name":"Token","content":"op-canvas"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| n8WkNK / fLRkj | text / Role | {"name":"Role","content":"Board background"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| HufIy / Z9QnSS | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| UjlVS / HufIy | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| HGCew / UjlVS | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| WjxGn / UjlVS | text / Hex | {"name":"Hex","content":"#F3F5FB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| p6AWfD / HufIy | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| F1bTT / p6AWfD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| bw0nz / p6AWfD | text / Hex | {"name":"Hex","content":"#0B1022"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| sglOJ / Z9QnSS | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| sBVmR / sglOJ | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| CaHoX / sBVmR | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| EVjRh / sBVmR | text / Hex | {"name":"Hex","content":"#F5F3FB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| RtRtS / sglOJ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| h3uLD / RtRtS | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| O7zl3 / RtRtS | text / Hex | {"name":"Hex","content":"#120C21"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| GzAg4 / Z9QnSS | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| yVpbr / GzAg4 | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| aJ0zm / yVpbr | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| wIXVq / yVpbr | text / Hex | {"name":"Hex","content":"#F9F6F5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| npzTn / GzAg4 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| MdouF / npzTn | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| gGXbA / npzTn | text / Hex | {"name":"Hex","content":"#1C1411"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| xRXyZ / Z9QnSS | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| zNwZ4 / xRXyZ | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| M9Zedf / zNwZ4 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| zlNow / zNwZ4 | text / Hex | {"name":"Hex","content":"#F5F9F8"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| zojL2 / xRXyZ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| XDAJc / zojL2 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-canvas","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| C7HHwI / zojL2 | text / Hex | {"name":"Hex","content":"#101D19"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| f8EuH / le4i4 | frame / Row toolbar | {"name":"Row toolbar"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| M7BvJ / f8EuH | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| dtlaH / M7BvJ | text / Token | {"name":"Token","content":"op-toolbar"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| jqy7V / M7BvJ | text / Role | {"name":"Role","content":"Toolbar strip, between header and canvas"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| G4xHQF / f8EuH | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| clvBQ / G4xHQF | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zXe9u / clvBQ | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| z2fzmy / clvBQ | text / Hex | {"name":"Hex","content":"#EAEDFA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| d9ME4H / G4xHQF | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TCvXI / d9ME4H | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| jmr42 / d9ME4H | text / Hex | {"name":"Hex","content":"#0F162C"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| iztl8 / f8EuH | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| UwyVq / iztl8 | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ywwii / UwyVq | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| kLNwc / UwyVq | text / Hex | {"name":"Hex","content":"#EEEAF9"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| rqH9R / iztl8 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| lnsHL / rqH9R | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| soo4x / rqH9R | text / Hex | {"name":"Hex","content":"#18102B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| ldIwB / f8EuH | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| RnGAY / ldIwB | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| I1Sb94 / RnGAY | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| TkwtM / RnGAY | text / Hex | {"name":"Hex","content":"#F6F0EE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| uTXym / ldIwB | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| bTn19 / uTXym | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| KdUB6 / uTXym | text / Hex | {"name":"Hex","content":"#251A16"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| JC4mJ / f8EuH | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| uiWA7 / JC4mJ | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| AnjEi / uiWA7 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| y5Gft / uiWA7 | text / Hex | {"name":"Hex","content":"#EDF6F4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| rQtLm / JC4mJ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| DPXfO / rQtLm | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-toolbar","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| YNpWu / rQtLm | text / Hex | {"name":"Hex","content":"#152621"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| b1zK9L / le4i4 | frame / Row column | {"name":"Row column"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| aKZef / b1zK9L | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| k0hfV / aKZef | text / Token | {"name":"Token","content":"op-column"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| staez / aKZef | text / Role | {"name":"Role","content":"Column / grouping panels"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| qjUpY / b1zK9L | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| w0Gli / qjUpY | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Es271 / w0Gli | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| wFcHK / w0Gli | text / Hex | {"name":"Hex","content":"#E6EBF9"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| PZ8Xd / qjUpY | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| h9o4QV / PZ8Xd | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Z9Pe8k / PZ8Xd | text / Hex | {"name":"Hex","content":"#0F162D"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| I1czO / b1zK9L | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| Ubt1S / I1czO | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| VNxqz / Ubt1S | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| jwo4B / Ubt1S | text / Hex | {"name":"Hex","content":"#ECE7F8"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| jevQ8 / I1czO | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zJBhk / jevQ8 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ZdAE5 / jevQ8 | text / Hex | {"name":"Hex","content":"#18112B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| W2Vzi / b1zK9L | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| adfUX / W2Vzi | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| HguqT / adfUX | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| oOumh / adfUX | text / Hex | {"name":"Hex","content":"#F4EEEB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| J8pkX4 / W2Vzi | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| rl7M9 / J8pkX4 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| uFMro / J8pkX4 | text / Hex | {"name":"Hex","content":"#251B17"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bLKcI / b1zK9L | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| PQXRC / bLKcI | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| cJ6kj / PQXRC | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ghN6K / PQXRC | text / Hex | {"name":"Hex","content":"#EAF5F2"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| f5PYGD / bLKcI | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| xZnCN / f5PYGD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-column","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ZSPh7 / f5PYGD | text / Hex | {"name":"Hex","content":"#162622"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| JV1ds / le4i4 | frame / Row surface | {"name":"Row surface"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| yujp7 / JV1ds | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| xoaPg / yujp7 | text / Token | {"name":"Token","content":"op-surface"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| zCLGl / yujp7 | text / Role | {"name":"Role","content":"Cards, header, dialogs"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| l09ZKe / JV1ds | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| S4Z02 / l09ZKe | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| x7j3ji / S4Z02 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| c9BjXs / S4Z02 | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| iS5VO / l09ZKe | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| AX8XW / iS5VO | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| m5zXJH / iS5VO | text / Hex | {"name":"Hex","content":"#141C36"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| ljyvR / JV1ds | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| v4kQNn / ljyvR | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| e7DWI / v4kQNn | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| uAo7v / v4kQNn | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| FDMpb / ljyvR | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| f4z6w / FDMpb | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| pKqR4 / FDMpb | text / Hex | {"name":"Hex","content":"#1E1634"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| s4jy5n / JV1ds | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| z1hbm / s4jy5n | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Z623I / z1hbm | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| CDJtV / z1hbm | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bf68b / s4jy5n | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| FO3bH / bf68b | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| fHara / bf68b | text / Hex | {"name":"Hex","content":"#2D211C"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| xajd6 / JV1ds | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| jmUGB / xajd6 | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| FT0rX / jmUGB | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| W5TdDr / jmUGB | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Rf03n / xajd6 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Y2XRT7 / Rf03n | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-surface","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| On0sg / Rf03n | text / Hex | {"name":"Hex","content":"#1C2E29"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
