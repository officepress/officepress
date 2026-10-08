# OfficePress App Layout / Section · Account & app settings / Screens / Row · About / Shot · App settings · About · Terminal guide — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| BCtq4 / o7dF4 | frame / Shot · App settings · About · Terminal guide | {"name":"Shot · App settings · About · Terminal guide"} | {"layout":"vertical","gap":14} |
| Uozi6 / BCtq4 | frame / App settings · About · Terminal guide | {"name":"App settings · About · Terminal guide","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":1321,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| QufRi / Uozi6 | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| wha0H / QufRi | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| wha0H/NL2v5 / wha0H | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| wha0H/v0pIr4 / wha0H/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text"} |
| wha0H/E8PtZC / wha0H | text / Page Title | {"name":"Page Title","content":"App settings"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| wha0H/G3t23s / wha0H | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| wha0H/dtuXO / wha0H | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| wha0H/H5cU4B / wha0H/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| wha0H/I7kF1e / wha0H/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| wha0H/vQMp0 / wha0H/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| wha0H/qS8da / wha0H/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| wha0H/f6Nm4U / wha0H | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| wha0H/BTxZN / wha0H | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| wha0H/fawPG / wha0H/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| wha0H/MT9A7 / wha0H/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| wha0H/SkOaY / wha0H/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| wha0H/XGyoO / wha0H/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wha0H/C5tCn / wha0H/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| wha0H/szMHy / wha0H/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wha0H/K5uDK / wha0H/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| wha0H/I60pf / wha0H/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wha0H/h47xa8 / wha0H/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| N4u7Tn / QufRi | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":24,"padding":[24,16,40,16]} |
| XtK9r / N4u7Tn | frame / Settings Nav | {"name":"Settings Nav"} | {"width":240,"layout":"vertical","gap":4} |
| y11g1I / XtK9r | frame / Tab Theme | {"name":"Tab Theme"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| t8XpdI / y11g1I | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| fU2C3 / t8XpdI | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"palette","library":"lucide","fill":"$op-text-2"} |
| uYj1f / y11g1I | text / L | {"name":"L","content":"Theme"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| n2ycn / XtK9r | frame / Tab About | {"name":"Tab About"} | {"width":"fill_container","height":36,"fill":"$op-tint","cornerRadius":4,"gap":12,"padding":[0,8,0,0],"alignItems":"center"} |
| BOKa0 / n2ycn | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| dNCdj / BOKa0 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"info","library":"lucide","fill":"$op-accent-text"} |
| GyisK / n2ycn | text / L | {"name":"L","content":"About"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| MYbOD / n2ycn | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| fU3Ao / n2ycn | frame / Badge | {"name":"Badge"} | {"height":20,"fill":"$op-accent-strong","cornerRadius":999,"padding":[0,6],"justifyContent":"center","alignItems":"center"} |
| Z5eaGq / fU3Ao | text / T | {"name":"T","content":"1"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| MvdJu / XtK9r | frame / Divider | {"name":"Divider"} | {"width":"fill_container","layout":"vertical","padding":[12,0]} |
| qJrs3 / MvdJu | rectangle / Line | {"name":"Line"} | {"fill":"$op-border","width":"fill_container","height":1} |
| nZuhM / XtK9r | frame / Back to App | {"name":"Back to App"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| wPZpq / nZuhM | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| nvdID / wPZpq | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| pHMCL / nZuhM | text / L | {"name":"L","content":"Back to App"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
