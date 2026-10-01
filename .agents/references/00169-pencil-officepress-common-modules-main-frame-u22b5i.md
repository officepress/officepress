# OfficePress Common Modules / Section · Chat view / Screens / Shot · Chat · Ticket Tracker #2042 / Chat · Ticket Tracker #2042 / Main — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| u22b5I / rdxHe | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| wLBZ1 / u22b5I | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| wLBZ1/NL2v5 / wLBZ1 | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| wLBZ1/v0pIr4 / wLBZ1/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| wLBZ1/E8PtZC / wLBZ1 | text / Page Title | {"name":"Page Title","content":"Chat"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| wLBZ1/G3t23s / wLBZ1 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| wLBZ1/dtuXO / wLBZ1 | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| wLBZ1/H5cU4B / wLBZ1/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| wLBZ1/I7kF1e / wLBZ1/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| wLBZ1/vQMp0 / wLBZ1/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| wLBZ1/qS8da / wLBZ1/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| wLBZ1/f6Nm4U / wLBZ1 | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| wLBZ1/BTxZN / wLBZ1 | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| wLBZ1/fawPG / wLBZ1/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| wLBZ1/MT9A7 / wLBZ1/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| wLBZ1/SkOaY / wLBZ1/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| wLBZ1/XGyoO / wLBZ1/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wLBZ1/C5tCn / wLBZ1/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| wLBZ1/szMHy / wLBZ1/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wLBZ1/K5uDK / wLBZ1/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| wLBZ1/I60pf / wLBZ1/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wLBZ1/h47xa8 / wLBZ1/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| bAFVv / u22b5I | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas"} |
| E2gjWB / bAFVv | frame / Conversations | {"name":"Conversations"} | {"width":300,"height":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"right":1},"layout":"vertical"} |
| V6TTy / E2gjWB | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":8,"padding":12} |
| b6BRCq / V6TTy | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| EOcip / b6BRCq | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| gXH5r / b6BRCq | text / P | {"name":"P","content":"Search tickets"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Gog4Q / V6TTy | frame / Status | {"name":"Status"} | {"gap":4} |
| WOlhO / Gog4Q | frame / New | {"name":"New"} | {"height":28,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| cklcG / WOlhO | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Djf0h / WOlhO | text / C | {"name":"C","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| k5am7v / Gog4Q | frame / Open | {"name":"Open"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| A1fm4 / k5am7v | text / L | {"name":"L","content":"Open"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| pmUQ3 / k5am7v | text / C | {"name":"C","content":"5"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RCDy2 / Gog4Q | frame / Pending | {"name":"Pending"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| lJyBT / RCDy2 | text / L | {"name":"L","content":"Pending"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Zz404 / RCDy2 | text / C | {"name":"C","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| e4IoH6 / Gog4Q | frame / Closed | {"name":"Closed"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| x2J4X / e4IoH6 | text / L | {"name":"L","content":"Closed"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| L8vqJS / E2gjWB | frame / Conv #2042 | {"name":"Conv #2042"} | {"width":"fill_container","fill":"$op-tint","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":12} |
| vOs8R / L8vqJS | frame / Avatar | {"name":"Avatar"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| h4CPh / vOs8R | text / I | {"name":"I","content":"LR"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| x5kgCZ / L8vqJS | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| jj70j / x5kgCZ | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| aP0oD / jj70j | text / Id | {"name":"Id","content":"#2042"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ARrFb / jj70j | text / N | {"name":"N","content":"Lina Reyes"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| OUpwF / jj70j | icon / Ch | {"name":"Ch"} | {"width":12,"height":12,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| HA8vg / jj70j | frame / Sp | {"name":"Sp"} | {"width":"fill_container","height":1} |
| a3Lpi / jj70j | text / Time | {"name":"Time","content":"Now"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| n9ama / x5kgCZ | frame / Bottom | {"name":"Bottom"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| AvaAv / n9ama | text / S | {"name":"S","content":"Request for delivery quotation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| gprh4 / n9ama | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| A2Ekr / E2gjWB | frame / Conv #2043 | {"name":"Conv #2043"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":12} |
| or7ly / A2Ekr | frame / Avatar | {"name":"Avatar"} | {"width":36,"height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| CWMzz / or7ly | text / I | {"name":"I","content":"PT"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| r2uej / A2Ekr | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| GmX4h / r2uej | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| FPYtQ / GmX4h | text / Id | {"name":"Id","content":"#2043"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qSsVB / GmX4h | text / N | {"name":"N","content":"Paolo Tan"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| wbwSH / GmX4h | icon / Ch | {"name":"Ch"} | {"width":12,"height":12,"icon":"message-circle","library":"lucide","fill":"$op-text-2"} |
| lffqd / GmX4h | frame / Sp | {"name":"Sp"} | {"width":"fill_container","height":1} |
| oJWz1 / GmX4h | text / Time | {"name":"Time","content":"12m"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| sKO4d / r2uej | frame / Bottom | {"name":"Bottom"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| m45EgS / sKO4d | text / S | {"name":"S","content":"Return label expired"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| pEsoT / sKO4d | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| S3TDq / E2gjWB | frame / Conv #2039 | {"name":"Conv #2039"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":12} |
| xF8lN / S3TDq | frame / Avatar | {"name":"Avatar"} | {"width":36,"height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| kiJIu / xF8lN | text / I | {"name":"I","content":"MC"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| mTICy / S3TDq | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| uXokQ / mTICy | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| dJzfx / uXokQ | text / Id | {"name":"Id","content":"#2039"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ZqLCa / uXokQ | text / N | {"name":"N","content":"Maria Castillo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| vHOJP / uXokQ | icon / Ch | {"name":"Ch"} | {"width":12,"height":12,"icon":"messages-square","library":"lucide","fill":"$op-text-2"} |
| D3AV2 / uXokQ | frame / Sp | {"name":"Sp"} | {"width":"fill_container","height":1} |
| Lmwx4 / uXokQ | text / Time | {"name":"Time","content":"1h"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| wbF4h / mTICy | frame / Bottom | {"name":"Bottom"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| GJkkm / wbF4h | text / S | {"name":"S","content":"Where is order ORD-24081?"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| ZbcO1 / E2gjWB | frame / Conv #2031 | {"name":"Conv #2031"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":12} |
| mkqRI / ZbcO1 | frame / Avatar | {"name":"Avatar"} | {"width":36,"height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wezIg / mkqRI | text / I | {"name":"I","content":"JB"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| UeAaU / ZbcO1 | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| fvK2g / UeAaU | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| H9uvtZ / fvK2g | text / Id | {"name":"Id","content":"#2031"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| UT6jA / fvK2g | text / N | {"name":"N","content":"Jun Bautista"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| MhF3e / fvK2g | icon / Ch | {"name":"Ch"} | {"width":12,"height":12,"icon":"phone","library":"lucide","fill":"$op-text-2"} |
| W2aGS / fvK2g | frame / Sp | {"name":"Sp"} | {"width":"fill_container","height":1} |
| Owcrf / fvK2g | text / Time | {"name":"Time","content":"Yesterday"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| RbrJq / UeAaU | frame / Bottom | {"name":"Bottom"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| DwBRh / RbrJq | text / S | {"name":"S","content":"Change delivery address"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
