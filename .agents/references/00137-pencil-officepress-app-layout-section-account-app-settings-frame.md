# OfficePress App Layout / Section · Account & app settings — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| BzLxn / WASH2 | frame / Section · Account &amp; app settings | {"name":"Section · Account &amp; app settings"} | {"width":"fill_container","layout":"vertical","gap":28} |
| ucKLu / BzLxn | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| X9qkE2 / ucKLu | text / Title | {"name":"Title","content":"Account &amp; app settings"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| q7rO4J / ucKLu | text / Desc | {"name":"Desc","content":"Opened from the user menu. Settings take over the app: no aside, and the header's first button becomes a back arrow. A 240 px section nav sits flush under it (icons align with the arrow, labels with the title) and ends with a divider and “Back to App”. Content is a centred 760 px column of cards; each card saves on its own."} | {"fill":"$muted","textGrowth":"fixed-width","width":900,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| mPPSw / BzLxn | frame / Screens | {"name":"Screens"} | {"width":"fill_container","layout":"vertical","gap":40} |
| HLqC7 / mPPSw | frame / Row · Account &amp; theme | {"name":"Row · Account &amp; theme"} | {"gap":40} |
| ASO0C / HLqC7 | frame / Shot · Account settings | {"name":"Shot · Account settings"} | {"layout":"vertical","gap":14} |
| Bh4Us / ASO0C | frame / Account settings | {"name":"Account settings","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":2193,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| SGAWM / Bh4Us | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| aWRfD / SGAWM | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| aWRfD/NL2v5 / aWRfD | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| aWRfD/v0pIr4 / aWRfD/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text"} |
| aWRfD/E8PtZC / aWRfD | text / Page Title | {"name":"Page Title","content":"Account settings"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| aWRfD/G3t23s / aWRfD | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| aWRfD/dtuXO / aWRfD | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| aWRfD/H5cU4B / aWRfD/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| aWRfD/I7kF1e / aWRfD/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| aWRfD/vQMp0 / aWRfD/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| aWRfD/qS8da / aWRfD/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| aWRfD/f6Nm4U / aWRfD | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| aWRfD/BTxZN / aWRfD | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| aWRfD/fawPG / aWRfD/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| aWRfD/MT9A7 / aWRfD/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| aWRfD/SkOaY / aWRfD/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| aWRfD/XGyoO / aWRfD/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| aWRfD/C5tCn / aWRfD/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| aWRfD/szMHy / aWRfD/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| aWRfD/K5uDK / aWRfD/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| aWRfD/I60pf / aWRfD/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-accent","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| aWRfD/h47xa8 / aWRfD/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| pWcM7 / SGAWM | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":24,"padding":[24,16,40,16]} |
| UfBQQ / pWcM7 | frame / Settings Nav | {"name":"Settings Nav"} | {"width":240,"layout":"vertical","gap":4} |
| rX6PB / UfBQQ | frame / Tab Personal information | {"name":"Tab Personal information"} | {"width":"fill_container","height":36,"fill":"$op-tint","cornerRadius":4,"gap":12,"alignItems":"center"} |
| jcjyJ / rX6PB | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| o2yYtq / jcjyJ | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-accent-text"} |
| B9pf8 / rX6PB | text / L | {"name":"L","content":"Personal information"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ZJfsk / UfBQQ | frame / Tab Password | {"name":"Tab Password"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| swjK5 / ZJfsk | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| ltjTT / swjK5 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"key-round","library":"lucide","fill":"$op-text-2"} |
| L0kwc3 / ZJfsk | text / L | {"name":"L","content":"Password"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Nt3RM / UfBQQ | frame / Tab Two-factor | {"name":"Tab Two-factor"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| W1Z9u / Nt3RM | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| rMEgb / W1Z9u | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"shield-check","library":"lucide","fill":"$op-text-2"} |
| VPkly / Nt3RM | text / L | {"name":"L","content":"Two-factor"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| jRtwT / UfBQQ | frame / Tab Export data | {"name":"Tab Export data"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| KxSk6 / jRtwT | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| LsXcG / KxSk6 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"download","library":"lucide","fill":"$op-text-2"} |
| eshu6 / jRtwT | text / L | {"name":"L","content":"Export data"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| rCwnU / UfBQQ | frame / Tab Danger zone | {"name":"Tab Danger zone"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| mP1es / rCwnU | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| x7UH18 / mP1es | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"triangle-alert","library":"lucide","fill":"$op-text-2"} |
| dnhGO / rCwnU | text / L | {"name":"L","content":"Danger zone"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| e0uz6 / UfBQQ | frame / Divider | {"name":"Divider"} | {"width":"fill_container","layout":"vertical","padding":[12,0]} |
| r7ZEk / e0uz6 | rectangle / Line | {"name":"Line"} | {"fill":"$op-border","width":"fill_container","height":1} |
| zV3N2 / UfBQQ | frame / Back to App | {"name":"Back to App"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| nJbhR / zV3N2 | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| ub2cz / nJbhR | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| A7wB0X / zV3N2 | text / L | {"name":"L","content":"Back to App"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
