# OfficePress App Layout / Section · Header actions / Screens / Shot · Mobile · Agent

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| rynx5 / tBXlw | frame / Shot · Mobile · Agent | {"name":"Shot · Mobile · Agent"} | {"layout":"vertical","gap":14} |
| gn5xa / rynx5 | frame / Mobile · Agent | {"name":"Mobile · Agent","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":390,"height":844,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| H5m67q / gn5xa | frame / Mobile Header | {"name":"Mobile Header"} | {"width":"fill_container","height":56,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":4,"padding":[0,12,0,4],"alignItems":"center"} |
| Y0ddD / H5m67q | frame / Menu | {"name":"Menu"} | {"width":44,"height":44,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| r1haeb / Y0ddD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"menu","library":"lucide","fill":"$op-text"} |
| w5Oqcr / H5m67q | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| x3MKop / H5m67q | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| XiZSR / x3MKop | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| G49Pq1 / x3MKop | ellipse / Dot | {"name":"Dot"} | {"x":20.88,"y":6.84,"fill":"$op-dot","width":7.92,"height":7.92,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| pt46d / H5m67q | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| ustxS / pt46d | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| aSbZZ / H5m67q | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| m9NPrx / aSbZZ | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| CgxlJ / H5m67q | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lAorT / CgxlJ | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| eh8Hd / gn5xa | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":8,"padding":[12,16]} |
| capRh / eh8Hd | frame / Search | {"name":"Search"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| scBLV / capRh | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| owKqI / capRh | text / P | {"name":"P","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| OXNnF / eh8Hd | frame / Column Tabs | {"name":"Column Tabs"} | {"gap":8} |
| HyDXM / OXNnF | frame / Tab Inbox | {"name":"Tab Inbox"} | {"height":32,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| sO7AA / HyDXM | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| qFtV2 / HyDXM | text / C | {"name":"C","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| aYTMC / OXNnF | frame / Tab Follow up | {"name":"Tab Follow up"} | {"height":32,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| lIKms / aYTMC | text / L | {"name":"L","content":"Follow up"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| akC03 / aYTMC | text / C | {"name":"C","content":"2"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kwu92 / OXNnF | frame / Tab Done | {"name":"Tab Done"} | {"height":32,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| bPz6R / kwu92 | text / L | {"name":"L","content":"Done"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| d1uLW / kwu92 | text / C | {"name":"C","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| GPykH / gn5xa | frame / Cards | {"name":"Cards"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":8,"padding":12} |
| xKR4T / GPykH | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| t3bJE / xKR4T | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| j8edr / t3bJE | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S4Pot / t3bJE | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| h6saG / xKR4T | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| SeSeZ / h6saG | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| A6avA / h6saG | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| TPZcw / xKR4T | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| JFgaV / GPykH | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| gF8TJ / JFgaV | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| FQkSY / gF8TJ | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| lC3uR / gF8TJ | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| CdPI1 / JFgaV | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| rGyw4 / CdPI1 | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| oWWiq / CdPI1 | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| sZSIf / JFgaV | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| H3Isz6 / GPykH | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| CDVyJ / H3Isz6 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| cjsse / CDVyJ | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| r1nEC / CDVyJ | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| gIrss / H3Isz6 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TKFyC / gIrss | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| OKDyn / H3Isz6 | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RodU0 / GPykH | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| W3LlyY / RodU0 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| MbBov / W3LlyY | text / Sender | {"name":"Sender","content":"Rina Delgado, Procurement"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| LYoiJ / W3LlyY | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Ctq3m / RodU0 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| uObtt / Ctq3m | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| tALeN / Ctq3m | text / Title | {"name":"Title","content":"Supplier onboarding documents"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| siumR / RodU0 | text / Preview | {"name":"Preview","content":"Attached are the tax certificate and updated payment details."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| bAjyq / GPykH | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| YwSXS / bAjyq | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| E1egWR / YwSXS | text / Sender | {"name":"Sender","content":"Jules Mercado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| j3rDJ / YwSXS | text / Time | {"name":"Time","content":"Tue"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lF3qm / bAjyq | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wrcuP / lF3qm | text / Title | {"name":"Title","content":"October production calendar"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| rcB1b / bAjyq | text / Preview | {"name":"Preview","content":"I highlighted the jobs that still need paper."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u1JTAY / gn5xa | rectangle / Scrim | {"name":"Scrim"} | {"layoutPosition":"absolute","x":0,"y":0,"fill":"$op-scrim","width":390,"height":844} |
| igTNR / gn5xa | frame / Agent Sheet | {"name":"Agent Sheet","theme":{"mode":"light","family":"communicate"}} | {"layoutPosition":"absolute","x":0,"y":44,"clip":true,"width":390,"height":800,"fill":"$op-surface","cornerRadius":[16,16,0,0],"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| igTNR/M23iCx / igTNR | frame / Panel Header | {"name":"Panel Header"} | {"width":"fill_container","height":56,"stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12,0,16],"alignItems":"center"} |
| igTNR/Blx35 / igTNR/M23iCx | frame / Agent Mark | {"name":"Agent Mark"} | {"width":28,"height":28,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| igTNR/E5eI9X / igTNR/Blx35 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| igTNR/Uor9G / igTNR/M23iCx | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical"} |
| igTNR/yG3UQ / igTNR/Uor9G | text / Name | {"name":"Name","content":"Inbox Agent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| igTNR/VhMqS / igTNR/Uor9G | text / Status | {"name":"Status","content":"Can read and act on this board"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| igTNR/IO0xC / igTNR/M23iCx | frame / New chat | {"name":"New chat"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/U0MoE / igTNR/IO0xC | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"square-pen","library":"lucide","fill":"$op-text-2"} |
| igTNR/dODrf / igTNR/M23iCx | frame / History | {"name":"History"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/g5Nu8M / igTNR/dODrf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"history","library":"lucide","fill":"$op-text-2"} |
| igTNR/inHNO / igTNR/M23iCx | frame / Expand | {"name":"Expand"} | {"x":316,"y":12,"enabled":false,"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/HU04B / igTNR/inHNO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"maximize-2","library":"lucide","fill":"$op-text-2"} |
| igTNR/s0xYZ / igTNR/M23iCx | frame / Close | {"name":"Close"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/x3Qdpj / igTNR/s0xYZ | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| igTNR/cZ72Y / igTNR | frame / Context Bar | {"name":"Context Bar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[12,16],"alignItems":"center"} |
| igTNR/t8fH7 / igTNR/cZ72Y | text / Label | {"name":"Label","content":"CONTEXT"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| igTNR/jxkrm / igTNR/cZ72Y | frame / Context Chip | {"name":"Context Chip"} | {"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| igTNR/ykars / igTNR/jxkrm | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"layout-grid","library":"lucide","fill":"$op-accent-text"} |
| igTNR/ouh4v / igTNR/jxkrm | text / T | {"name":"T","content":"Inbox board · 12 cards"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| igTNR/C0FIP / igTNR/jxkrm | icon / Remove | {"name":"Remove"} | {"width":12,"height":12,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| igTNR/UuwJ3 / igTNR | frame / Thread | {"name":"Thread"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":16,"padding":16,"justifyContent":"end"} |
| igTNR/rA887 / igTNR/UuwJ3 | frame / Hello | {"name":"Hello"} | {"width":"fill_container","layout":"vertical","gap":8} |
| igTNR/fOISY / igTNR/rA887 | frame / Mark | {"name":"Mark"} | {"width":40,"height":40,"fill":"$op-accent","cornerRadius":12,"justifyContent":"center","alignItems":"center"} |
| igTNR/p1faX / igTNR/fOISY | icon / Icon | {"name":"Icon"} | {"width":22,"height":22,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| igTNR/lU0Pj / igTNR/rA887 | text / Title | {"name":"Title","content":"What should we get done?"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| igTNR/xasao / igTNR/rA887 | text / Sub | {"name":"Sub","content":"I can read, sort, draft and schedule anything on this board. You'll see every change I make."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| igTNR/xxu19 / igTNR/UuwJ3 | frame / Starters | {"name":"Starters"} | {"width":"fill_container","layout":"vertical","gap":8} |
| igTNR/xAOJJ / igTNR/xxu19 | frame / Starter · Triage my inbox | {"name":"Starter · Triage my inbox"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| igTNR/pTfwY / igTNR/xAOJJ | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| igTNR/BwCn7 / igTNR/pTfwY | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"list-checks","library":"lucide","fill":"$op-accent-text"} |
| igTNR/jnnyW / igTNR/xAOJJ | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| igTNR/ZwqvY / igTNR/jnnyW | text / T | {"name":"T","content":"Triage my inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| igTNR/lIPs7 / igTNR/jnnyW | text / D | {"name":"D","content":"Sort new cards into Follow up or Done"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| igTNR/HYNUQ / igTNR/xxu19 | frame / Starter · What's due today? | {"name":"Starter · What's due today?"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| igTNR/oi3oG / igTNR/HYNUQ | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| igTNR/bS2gb / igTNR/oi3oG | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"timer","library":"lucide","fill":"$op-accent-text"} |
| igTNR/Qk7gI / igTNR/HYNUQ | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| igTNR/ywgfM / igTNR/Qk7gI | text / T | {"name":"T","content":"What's due today?"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| igTNR/U2cXT / igTNR/Qk7gI | text / D | {"name":"D","content":"Summarise SLAs under 24h"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| igTNR/oui5r / igTNR/xxu19 | frame / Starter · Draft replies | {"name":"Starter · Draft replies"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| igTNR/mpmfv / igTNR/oui5r | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| igTNR/n4M4jr / igTNR/mpmfv | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"pen-line","library":"lucide","fill":"$op-accent-text"} |
| igTNR/Z0VDf / igTNR/oui5r | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| igTNR/nMS7X / igTNR/Z0VDf | text / T | {"name":"T","content":"Draft replies"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| igTNR/AyjjP / igTNR/Z0VDf | text / D | {"name":"D","content":"For everything waiting on me"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| igTNR/sGrdd / igTNR/xxu19 | frame / Starter · Build a filter | {"name":"Starter · Build a filter"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| igTNR/kmXZ1 / igTNR/sGrdd | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| igTNR/tBDyn / igTNR/kmXZ1 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"funnel","library":"lucide","fill":"$op-accent-text"} |
| igTNR/gh89H / igTNR/sGrdd | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| igTNR/L0CeD / igTNR/gh89H | text / T | {"name":"T","content":"Build a filter"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| igTNR/Tac0x / igTNR/gh89H | text / D | {"name":"D","content":"Like “Invoices over ₱50k”"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| igTNR/StezJ / igTNR | frame / Composer Area | {"name":"Composer Area"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":[12,16,16,16]} |
| igTNR/KB4rr / igTNR/StezJ | frame / Composer | {"name":"Composer"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border-strong","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#18244F0F","offset":{"x":0,"y":2},"blur":6},"layout":"vertical","gap":12,"padding":12} |
| igTNR/jGDvh / igTNR/KB4rr | text / Placeholder | {"name":"Placeholder","content":"Ask the agent to do anything in Inbox…"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| igTNR/hHX5u / igTNR/KB4rr | frame / Controls | {"name":"Controls"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| igTNR/LV7xb / igTNR/hHX5u | frame / Attach | {"name":"Attach"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/C0PY5g / igTNR/LV7xb | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| igTNR/TyINw / igTNR/hHX5u | frame / Mention | {"name":"Mention"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/EC24C / igTNR/TyINw | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"at-sign","library":"lucide","fill":"$op-text-2"} |
| igTNR/XkYsY / igTNR/hHX5u | frame / Model | {"name":"Model"} | {"height":28,"fill":"$op-sunken","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| igTNR/tbMdf / igTNR/XkYsY | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"sparkles","library":"lucide","fill":"$op-accent-text"} |
| igTNR/ygFQE / igTNR/XkYsY | text / T | {"name":"T","content":"Auto"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| igTNR/GcsOQ / igTNR/XkYsY | icon / Chevron | {"name":"Chevron"} | {"width":12,"height":12,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| igTNR/Su9Bz / igTNR/hHX5u | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| igTNR/p17v3 / igTNR/hHX5u | frame / Voice | {"name":"Voice"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| igTNR/Es9Fn / igTNR/p17v3 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mic","library":"lucide","fill":"$op-text-2"} |
| igTNR/lWQez / igTNR/hHX5u | frame / Send | {"name":"Send"} | {"width":32,"height":32,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| igTNR/B0GjJp / igTNR/lWQez | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-up","library":"lucide","fill":"$op-on-accent"} |
| igTNR/IHIF4 / igTNR/StezJ | text / Disclaimer | {"name":"Disclaimer","content":"The agent can take actions in this app. Every action is logged and can be undone."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| NYBE4 / rynx5 | frame / Caption | {"name":"Caption"} | {"width":390,"layout":"vertical","gap":4} |
| Z2y00 / NYBE4 | text / Label | {"name":"Label","content":"Mobile · Agent"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| pnSNQ / NYBE4 | text / Note | {"name":"Note","content":"Opens as a full-height sheet over the app, starting on the empty state with starter prompts."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
