# OfficePress App Layout / Section · Left aside / Screens / Shot · Desktop · Aside expanded / Desktop · Aside expanded / Main

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| xF0c7 / bzwrE | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| nytOE / xF0c7 | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| nytOE/NL2v5 / nytOE | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| nytOE/v0pIr4 / nytOE/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| nytOE/E8PtZC / nytOE | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| nytOE/G3t23s / nytOE | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| nytOE/dtuXO / nytOE | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center"} |
| nytOE/H5cU4B / nytOE/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| nytOE/I7kF1e / nytOE/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| nytOE/vQMp0 / nytOE/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| nytOE/qS8da / nytOE/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| nytOE/f6Nm4U / nytOE | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| nytOE/BTxZN / nytOE | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| nytOE/fawPG / nytOE/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| nytOE/MT9A7 / nytOE/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| nytOE/SkOaY / nytOE/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| nytOE/XGyoO / nytOE/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nytOE/C5tCn / nytOE/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| nytOE/szMHy / nytOE/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nytOE/K5uDK / nytOE/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| nytOE/I60pf / nytOE/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nytOE/h47xa8 / nytOE/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| Q6f2au / xF0c7 | frame / Content | {"name":"Content","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| Q6f2au/eSdln / Q6f2au | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| Q6f2au/bbvEm / Q6f2au/eSdln | frame / Search | {"name":"Search"} | {"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Q6f2au/XEGVQ / Q6f2au/bbvEm | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| Q6f2au/aVFJw / Q6f2au/bbvEm | text / Placeholder | {"name":"Placeholder","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Q6f2au/GkglA / Q6f2au/eSdln | text / Count | {"name":"Count","content":"12 cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/rwgBO / Q6f2au | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":16,"padding":16} |
| Q6f2au/l4HDp / Q6f2au/rwgBO | frame / Column Inbox | {"name":"Column Inbox"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| Q6f2au/G5MyhP / Q6f2au/l4HDp | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| Q6f2au/Umgko / Q6f2au/G5MyhP | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| Q6f2au/I9LqI / Q6f2au/Umgko | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/OZw3o / Q6f2au/Umgko | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| Q6f2au/E8weM / Q6f2au/OZw3o | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Q6f2au/SqApD / Q6f2au/G5MyhP | text / Desc | {"name":"Desc","content":"Mail in Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/M2BMk7 / Q6f2au/l4HDp | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| Q6f2au/BiTty / Q6f2au/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Q6f2au/wza89 / Q6f2au/BiTty | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Q6f2au/y8TFO / Q6f2au/wza89 | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Q6f2au/yYy8m / Q6f2au/wza89 | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Q6f2au/L3HSlJ / Q6f2au/BiTty | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q6f2au/MUoBY / Q6f2au/L3HSlJ | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| Q6f2au/zdMl2 / Q6f2au/L3HSlJ | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/LCdhp / Q6f2au/BiTty | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/CZuLx / Q6f2au/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Q6f2au/Pz8ym / Q6f2au/CZuLx | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Q6f2au/t0HdB / Q6f2au/Pz8ym | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Q6f2au/SA4ZE / Q6f2au/Pz8ym | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Q6f2au/pG3PF / Q6f2au/CZuLx | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q6f2au/Zrubq / Q6f2au/pG3PF | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| Q6f2au/a3NrBr / Q6f2au/pG3PF | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/H48mvg / Q6f2au/CZuLx | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/CRVa7 / Q6f2au/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Q6f2au/lFDrE / Q6f2au/CRVa7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Q6f2au/E1l9V4 / Q6f2au/lFDrE | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Q6f2au/v360U8 / Q6f2au/lFDrE | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Q6f2au/l5Hps / Q6f2au/CRVa7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q6f2au/wueVk / Q6f2au/l5Hps | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/eWG8L / Q6f2au/CRVa7 | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/DEbw4 / Q6f2au/rwgBO | frame / Column Follow up | {"name":"Column Follow up"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| Q6f2au/JsDlg / Q6f2au/DEbw4 | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| Q6f2au/w7HSrN / Q6f2au/JsDlg | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| Q6f2au/Yj7HY / Q6f2au/w7HSrN | text / Title | {"name":"Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/nfHkf / Q6f2au/w7HSrN | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| Q6f2au/AjiLP / Q6f2au/nfHkf | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Q6f2au/f5g8V4 / Q6f2au/JsDlg | text / Desc | {"name":"Desc","content":"Needs a reply or next step"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/u6wS7O / Q6f2au/DEbw4 | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| Q6f2au/ljopi / Q6f2au/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Q6f2au/f60nd / Q6f2au/ljopi | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Q6f2au/mMukx / Q6f2au/f60nd | text / Sender | {"name":"Sender","content":"Ana Cruz, Marco Villar"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Q6f2au/uqWBw / Q6f2au/f60nd | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Q6f2au/o9z9SI / Q6f2au/ljopi | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q6f2au/c7EyA / Q6f2au/o9z9SI | text / Title | {"name":"Title","content":"Warehouse move — dock schedule Friday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/fAvE8 / Q6f2au/ljopi | text / Preview | {"name":"Preview","content":"Print it at A3, anything smaller and the exit labels are unreadable."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/bzztC / Q6f2au/ljopi | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Q6f2au/g3VRle / Q6f2au/bzztC | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| Q6f2au/RRAcl / Q6f2au/g3VRle | text / Left | {"name":"Left","content":"10h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Q6f2au/Y4lHV / Q6f2au/bzztC | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| Q6f2au/K14iSS / Q6f2au/Y4lHV | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":6} |
| Q6f2au/AA3iT / Q6f2au/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Q6f2au/CUJts / Q6f2au/AA3iT | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Q6f2au/Y2sPxq / Q6f2au/CUJts | text / Sender | {"name":"Sender","content":"Northwind Billing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Q6f2au/zVcMj / Q6f2au/CUJts | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Q6f2au/x81YkH / Q6f2au/AA3iT | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q6f2au/u59xm / Q6f2au/x81YkH | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| Q6f2au/GeczV / Q6f2au/x81YkH | text / Title | {"name":"Title","content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/YRJhQ / Q6f2au/AA3iT | text / Preview | {"name":"Preview","content":"Mila, this one needs your sign-off before Friday."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/yIi3x / Q6f2au/AA3iT | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Q6f2au/Ckm7G / Q6f2au/yIi3x | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| Q6f2au/PYYt6 / Q6f2au/Ckm7G | text / Left | {"name":"Left","content":"4h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Q6f2au/pDfqc / Q6f2au/yIi3x | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| Q6f2au/B25Q4 / Q6f2au/pDfqc | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent-strong","width":230,"height":6} |
| Q6f2au/pOfqX / Q6f2au/rwgBO | frame / Column Done | {"name":"Column Done"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| Q6f2au/x9VbXU / Q6f2au/pOfqX | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| Q6f2au/dCrmU / Q6f2au/x9VbXU | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| Q6f2au/lxxQt / Q6f2au/dCrmU | text / Title | {"name":"Title","content":"Done"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/nf6rQ / Q6f2au/dCrmU | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| Q6f2au/pG8Dr / Q6f2au/nf6rQ | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Q6f2au/sYKwF / Q6f2au/x9VbXU | text / Desc | {"name":"Desc","content":"Handled for now"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q6f2au/SoB3a / Q6f2au/pOfqX | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| Q6f2au/RDPzS / Q6f2au/SoB3a | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Q6f2au/kTg7R / Q6f2au/RDPzS | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| Q6f2au/L2FBJ / Q6f2au/kTg7R | text / Sender | {"name":"Sender","content":"Tom Lim"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Q6f2au/S0GKF / Q6f2au/kTg7R | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Q6f2au/atVZk / Q6f2au/RDPzS | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q6f2au/EYl11 / Q6f2au/atVZk | text / Title | {"name":"Title","content":"Press check moved to Thursday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q6f2au/m1ofQ / Q6f2au/RDPzS | text / Preview | {"name":"Preview","content":"The proofs didn't clear Thursday so I moved it."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Spq7d / z8N46 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| GQUCa / Spq7d | text / Label | {"name":"Label","content":"Desktop · Aside expanded"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| HWh9e / Spq7d | text / Note | {"name":"Note","content":"260 px aside. The collapse button sits next to the brand; the header's panel button does the same."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
