# OfficePress App Layout / Section · Account & app settings / Screens / Row · Updates — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| o7dF4 / mPPSw | frame / Row · Updates | {"name":"Row · Updates"} | {"gap":40} |
| odO7S / o7dF4 | frame / Shot · App settings · Updates | {"name":"Shot · App settings · Updates"} | {"layout":"vertical","gap":14} |
| Kf2t5 / odO7S | frame / App settings · Updates | {"name":"App settings · Updates","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":1321,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| yMqZv / Kf2t5 | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| SbTuc / yMqZv | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| SbTuc/NL2v5 / SbTuc | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| SbTuc/v0pIr4 / SbTuc/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text"} |
| SbTuc/E8PtZC / SbTuc | text / Page Title | {"name":"Page Title","content":"App settings"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| SbTuc/G3t23s / SbTuc | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| SbTuc/dtuXO / SbTuc | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| SbTuc/H5cU4B / SbTuc/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| SbTuc/I7kF1e / SbTuc/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| SbTuc/vQMp0 / SbTuc/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| SbTuc/qS8da / SbTuc/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| SbTuc/f6Nm4U / SbTuc | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| SbTuc/BTxZN / SbTuc | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| SbTuc/fawPG / SbTuc/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| SbTuc/MT9A7 / SbTuc/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| SbTuc/SkOaY / SbTuc/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| SbTuc/XGyoO / SbTuc/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| SbTuc/C5tCn / SbTuc/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| SbTuc/szMHy / SbTuc/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| SbTuc/K5uDK / SbTuc/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| SbTuc/I60pf / SbTuc/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| SbTuc/h47xa8 / SbTuc/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| AZ7sJ / yMqZv | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":24,"padding":[24,16,40,16]} |
| YlWbu / AZ7sJ | frame / Settings Nav | {"name":"Settings Nav"} | {"width":240,"layout":"vertical","gap":4} |
| xz4zz / YlWbu | frame / Tab General | {"name":"Tab General"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| GPLwS / xz4zz | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| z0Awj / GPLwS | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| FpV71 / xz4zz | text / L | {"name":"L","content":"General"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| xM1HL / YlWbu | frame / Tab Theme | {"name":"Tab Theme"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| NfYB6 / xM1HL | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| pgjoY / NfYB6 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"palette","library":"lucide","fill":"$op-text-2"} |
| ozHQg / xM1HL | text / L | {"name":"L","content":"Theme"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| noSVT / YlWbu | frame / Tab Members | {"name":"Tab Members"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| TnDW5 / noSVT | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| n4ZBI / TnDW5 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-text-2"} |
| v6SIMs / noSVT | text / L | {"name":"L","content":"Members"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| vklgF / YlWbu | frame / Tab Agent | {"name":"Tab Agent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| XcTRm / vklgF | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| M0iWm / XcTRm | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text-2"} |
| uOxVm / vklgF | text / L | {"name":"L","content":"Agent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| U2lkJP / YlWbu | frame / Tab Integrations | {"name":"Tab Integrations"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| E7WjA / U2lkJP | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| KR37G / E7WjA | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"plug","library":"lucide","fill":"$op-text-2"} |
| XBXOE / U2lkJP | text / L | {"name":"L","content":"Integrations"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| WikLc / YlWbu | frame / Tab Notifications | {"name":"Tab Notifications"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| h1OkM2 / WikLc | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| QYvyr / h1OkM2 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text-2"} |
| j6l8W / WikLc | text / L | {"name":"L","content":"Notifications"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| G223K / YlWbu | frame / Tab Updates | {"name":"Tab Updates"} | {"width":"fill_container","height":36,"fill":"$op-tint","cornerRadius":4,"gap":12,"padding":[0,8,0,0],"alignItems":"center"} |
| tPLlr / G223K | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| OgwLi / tPLlr | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"circle-arrow-up","library":"lucide","fill":"$op-accent-text"} |
| NzJYF / G223K | text / L | {"name":"L","content":"Updates"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eFMut / G223K | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| k6UL8 / G223K | frame / Badge | {"name":"Badge"} | {"height":20,"fill":"$op-accent-strong","cornerRadius":999,"padding":[0,6],"justifyContent":"center","alignItems":"center"} |
| Bg0gx / k6UL8 | text / T | {"name":"T","content":"1"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| x8x0NP / YlWbu | frame / Divider | {"name":"Divider"} | {"width":"fill_container","layout":"vertical","padding":[12,0]} |
| wdNZa / x8x0NP | rectangle / Line | {"name":"Line"} | {"fill":"$op-border","width":"fill_container","height":1} |
| yTkKU / YlWbu | frame / Back to App | {"name":"Back to App"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| yogHH / yTkKU | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| sx4di / yogHH | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| MAqs6 / yTkKU | text / L | {"name":"L","content":"Back to App"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
