# OfficePress App Layout / Section · Left aside / Screens / Shot · Mobile · Default (collapsed)

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| xhnJh / mXqBl | frame / Shot · Mobile · Default (collapsed) | {"name":"Shot · Mobile · Default (collapsed)"} | {"layout":"vertical","gap":14} |
| e53ta / xhnJh | frame / Mobile · Default (collapsed) | {"name":"Mobile · Default (collapsed)","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":390,"height":844,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| dmlSw / e53ta | frame / Mobile Header | {"name":"Mobile Header"} | {"width":"fill_container","height":56,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":4,"padding":[0,12,0,4],"alignItems":"center"} |
| jSE5b / dmlSw | frame / Menu | {"name":"Menu"} | {"width":44,"height":44,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| hvBl8 / jSE5b | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"menu","library":"lucide","fill":"$op-text"} |
| c6a8K / dmlSw | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| XFqPN / dmlSw | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| GuuAi / XFqPN | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| R7paQ / XFqPN | ellipse / Dot | {"name":"Dot"} | {"x":20.88,"y":6.84,"fill":"$op-dot","width":7.92,"height":7.92,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| xNcLy / dmlSw | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| J4nnn8 / xNcLy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| lsrxN / dmlSw | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| OeALp / lsrxN | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| koxiv / dmlSw | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| P9OEQ5 / koxiv | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| g4EgmI / e53ta | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":8,"padding":[12,16]} |
| iN7Ne / g4EgmI | frame / Search | {"name":"Search"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| hoCLC / iN7Ne | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| F2QC1c / iN7Ne | text / P | {"name":"P","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| b0JMG / g4EgmI | frame / Column Tabs | {"name":"Column Tabs"} | {"gap":8} |
| KRwfY / b0JMG | frame / Tab Inbox | {"name":"Tab Inbox"} | {"height":32,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| n5xds / KRwfY | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| gGaCq / KRwfY | text / C | {"name":"C","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| xJlED / b0JMG | frame / Tab Follow up | {"name":"Tab Follow up"} | {"height":32,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| tF3MQ / xJlED | text / L | {"name":"L","content":"Follow up"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ISkbc / xJlED | text / C | {"name":"C","content":"2"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Y0ysq1 / b0JMG | frame / Tab Done | {"name":"Tab Done"} | {"height":32,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| NVk3L / Y0ysq1 | text / L | {"name":"L","content":"Done"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| wKiuy / Y0ysq1 | text / C | {"name":"C","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| sjW6Q / e53ta | frame / Cards | {"name":"Cards"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":8,"padding":12} |
| Z2f0kX / sjW6Q | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| YYxZD / Z2f0kX | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K8Nop / YYxZD | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Ecftt / YYxZD | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Fggkv / Z2f0kX | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| rw4GM / Fggkv | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| u4Igv / Fggkv | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Bbg4f / Z2f0kX | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| lBy9I / sjW6Q | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| MUNtb / lBy9I | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Xerth / MUNtb | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| A103O7 / MUNtb | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| h685V / lBy9I | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| dcFq4 / h685V | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| iqdOY / h685V | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| TKMEz / lBy9I | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| c3eK5p / sjW6Q | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| iBBpa / c3eK5p | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| fRcXe / iBBpa | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| skF8L / iBBpa | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| dC9q2 / c3eK5p | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| AdBX0 / dC9q2 | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| SIs1B / c3eK5p | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u1WziP / sjW6Q | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| EQiji / u1WziP | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| jDD9f / EQiji | text / Sender | {"name":"Sender","content":"Rina Delgado, Procurement"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| EKvui / EQiji | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XKdXD / u1WziP | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| DuDKB / XKdXD | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| T2TA1p / XKdXD | text / Title | {"name":"Title","content":"Supplier onboarding documents"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| LinFz / u1WziP | text / Preview | {"name":"Preview","content":"Attached are the tax certificate and updated payment details."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| SoPPc / sjW6Q | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| wzbSk / SoPPc | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| QTor3 / wzbSk | text / Sender | {"name":"Sender","content":"Jules Mercado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| c5VcUV / wzbSk | text / Time | {"name":"Time","content":"Tue"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| F6O6on / SoPPc | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| jNuJo / F6O6on | text / Title | {"name":"Title","content":"October production calendar"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eA5xL / SoPPc | text / Preview | {"name":"Preview","content":"I highlighted the jobs that still need paper."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LW8Bk / xhnJh | frame / Caption | {"name":"Caption"} | {"width":390,"layout":"vertical","gap":4} |
| Cj3iR / LW8Bk | text / Label | {"name":"Label","content":"Mobile · Default (collapsed)"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| R4Ge4 / LW8Bk | text / Note | {"name":"Note","content":"Aside hidden; the menu button opens it. The header keeps the same four circles as desktop: notifications, agent, theme, user."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
