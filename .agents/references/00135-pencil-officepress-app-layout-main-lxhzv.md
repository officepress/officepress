# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · User menu / Desktop · User menu / Main

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| lXHzV / A1Gtos | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| DTuwg / lXHzV | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| DTuwg/NL2v5 / DTuwg | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| DTuwg/v0pIr4 / DTuwg/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| DTuwg/E8PtZC / DTuwg | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| DTuwg/G3t23s / DTuwg | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| DTuwg/dtuXO / DTuwg | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center"} |
| DTuwg/H5cU4B / DTuwg/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| DTuwg/I7kF1e / DTuwg/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| DTuwg/vQMp0 / DTuwg/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| DTuwg/qS8da / DTuwg/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| DTuwg/f6Nm4U / DTuwg | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| DTuwg/BTxZN / DTuwg | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| DTuwg/fawPG / DTuwg/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| DTuwg/MT9A7 / DTuwg/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| DTuwg/SkOaY / DTuwg/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| DTuwg/XGyoO / DTuwg/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| DTuwg/C5tCn / DTuwg/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| DTuwg/szMHy / DTuwg/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| DTuwg/K5uDK / DTuwg/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| DTuwg/I60pf / DTuwg/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-accent","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| DTuwg/h47xa8 / DTuwg/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| S2X4l / lXHzV | frame / Content | {"name":"Content","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| S2X4l/eSdln / S2X4l | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| S2X4l/bbvEm / S2X4l/eSdln | frame / Search | {"name":"Search"} | {"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| S2X4l/XEGVQ / S2X4l/bbvEm | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| S2X4l/aVFJw / S2X4l/bbvEm | text / Placeholder | {"name":"Placeholder","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| S2X4l/GkglA / S2X4l/eSdln | text / Count | {"name":"Count","content":"12 cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/rwgBO / S2X4l | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":16,"padding":16} |
| S2X4l/l4HDp / S2X4l/rwgBO | frame / Column Inbox | {"name":"Column Inbox"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| S2X4l/G5MyhP / S2X4l/l4HDp | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| S2X4l/Umgko / S2X4l/G5MyhP | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| S2X4l/I9LqI / S2X4l/Umgko | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/OZw3o / S2X4l/Umgko | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| S2X4l/E8weM / S2X4l/OZw3o | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| S2X4l/SqApD / S2X4l/G5MyhP | text / Desc | {"name":"Desc","content":"Mail in Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/M2BMk7 / S2X4l/l4HDp | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| S2X4l/BiTty / S2X4l/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| S2X4l/wza89 / S2X4l/BiTty | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| S2X4l/y8TFO / S2X4l/wza89 | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S2X4l/yYy8m / S2X4l/wza89 | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S2X4l/L3HSlJ / S2X4l/BiTty | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| S2X4l/MUoBY / S2X4l/L3HSlJ | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| S2X4l/zdMl2 / S2X4l/L3HSlJ | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/LCdhp / S2X4l/BiTty | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/CZuLx / S2X4l/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| S2X4l/Pz8ym / S2X4l/CZuLx | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| S2X4l/t0HdB / S2X4l/Pz8ym | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S2X4l/SA4ZE / S2X4l/Pz8ym | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S2X4l/pG3PF / S2X4l/CZuLx | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| S2X4l/Zrubq / S2X4l/pG3PF | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| S2X4l/a3NrBr / S2X4l/pG3PF | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/H48mvg / S2X4l/CZuLx | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/CRVa7 / S2X4l/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| S2X4l/lFDrE / S2X4l/CRVa7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| S2X4l/E1l9V4 / S2X4l/lFDrE | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S2X4l/v360U8 / S2X4l/lFDrE | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S2X4l/l5Hps / S2X4l/CRVa7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| S2X4l/wueVk / S2X4l/l5Hps | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/eWG8L / S2X4l/CRVa7 | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/DEbw4 / S2X4l/rwgBO | frame / Column Follow up | {"name":"Column Follow up"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| S2X4l/JsDlg / S2X4l/DEbw4 | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| S2X4l/w7HSrN / S2X4l/JsDlg | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| S2X4l/Yj7HY / S2X4l/w7HSrN | text / Title | {"name":"Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/nfHkf / S2X4l/w7HSrN | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| S2X4l/AjiLP / S2X4l/nfHkf | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| S2X4l/f5g8V4 / S2X4l/JsDlg | text / Desc | {"name":"Desc","content":"Needs a reply or next step"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/u6wS7O / S2X4l/DEbw4 | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| S2X4l/ljopi / S2X4l/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| S2X4l/f60nd / S2X4l/ljopi | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| S2X4l/mMukx / S2X4l/f60nd | text / Sender | {"name":"Sender","content":"Ana Cruz, Marco Villar"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S2X4l/uqWBw / S2X4l/f60nd | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S2X4l/o9z9SI / S2X4l/ljopi | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| S2X4l/c7EyA / S2X4l/o9z9SI | text / Title | {"name":"Title","content":"Warehouse move — dock schedule Friday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/fAvE8 / S2X4l/ljopi | text / Preview | {"name":"Preview","content":"Print it at A3, anything smaller and the exit labels are unreadable."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/bzztC / S2X4l/ljopi | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| S2X4l/g3VRle / S2X4l/bzztC | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| S2X4l/RRAcl / S2X4l/g3VRle | text / Left | {"name":"Left","content":"10h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| S2X4l/Y4lHV / S2X4l/bzztC | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| S2X4l/K14iSS / S2X4l/Y4lHV | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":6} |
| S2X4l/AA3iT / S2X4l/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| S2X4l/CUJts / S2X4l/AA3iT | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| S2X4l/Y2sPxq / S2X4l/CUJts | text / Sender | {"name":"Sender","content":"Northwind Billing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S2X4l/zVcMj / S2X4l/CUJts | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S2X4l/x81YkH / S2X4l/AA3iT | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| S2X4l/u59xm / S2X4l/x81YkH | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| S2X4l/GeczV / S2X4l/x81YkH | text / Title | {"name":"Title","content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/YRJhQ / S2X4l/AA3iT | text / Preview | {"name":"Preview","content":"Mila, this one needs your sign-off before Friday."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/yIi3x / S2X4l/AA3iT | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| S2X4l/Ckm7G / S2X4l/yIi3x | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| S2X4l/PYYt6 / S2X4l/Ckm7G | text / Left | {"name":"Left","content":"4h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| S2X4l/pDfqc / S2X4l/yIi3x | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| S2X4l/B25Q4 / S2X4l/pDfqc | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent-strong","width":230,"height":6} |
| S2X4l/pOfqX / S2X4l/rwgBO | frame / Column Done | {"name":"Column Done"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| S2X4l/x9VbXU / S2X4l/pOfqX | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| S2X4l/dCrmU / S2X4l/x9VbXU | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| S2X4l/lxxQt / S2X4l/dCrmU | text / Title | {"name":"Title","content":"Done"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/nf6rQ / S2X4l/dCrmU | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| S2X4l/pG8Dr / S2X4l/nf6rQ | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| S2X4l/sYKwF / S2X4l/x9VbXU | text / Desc | {"name":"Desc","content":"Handled for now"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S2X4l/SoB3a / S2X4l/pOfqX | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| S2X4l/RDPzS / S2X4l/SoB3a | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| S2X4l/kTg7R / S2X4l/RDPzS | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| S2X4l/L2FBJ / S2X4l/kTg7R | text / Sender | {"name":"Sender","content":"Tom Lim"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| S2X4l/S0GKF / S2X4l/kTg7R | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S2X4l/atVZk / S2X4l/RDPzS | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| S2X4l/EYl11 / S2X4l/atVZk | text / Title | {"name":"Title","content":"Press check moved to Thursday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| S2X4l/m1ofQ / S2X4l/RDPzS | text / Preview | {"name":"Preview","content":"The proofs didn't clear Thursday so I moved it."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LYgIy / A1Gtos | frame / User Popover | {"name":"User Popover","theme":{"mode":"light","family":"communicate"}} | {"layoutPosition":"absolute","x":1144,"y":60,"width":280,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-pop","offset":{"x":0,"y":12},"blur":32}],"layout":"vertical","gap":4,"padding":8} |
| LYgIy/n2hny / LYgIy | frame / User | {"name":"User"} | {"width":"fill_container","gap":12,"padding":[8,8,12,8],"alignItems":"center"} |
| LYgIy/cpurE / LYgIy/n2hny | frame / Avatar | {"name":"Avatar"} | {"width":40,"height":40,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| LYgIy/U2u1NA / LYgIy/cpurE | text / Initials | {"name":"Initials","content":"MR"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| LYgIy/gwpfK / LYgIy/n2hny | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| LYgIy/gDX8n / LYgIy/gwpfK | text / Name | {"name":"Name","content":"Mila Reyes"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| LYgIy/Q9YyL / LYgIy/gwpfK | text / Email | {"name":"Email","content":"mila.reyes@officepress.ph"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LYgIy/KfuiO / LYgIy | rectangle / Divider 1 | {"name":"Divider 1"} | {"fill":"$op-border","width":"fill_container","height":1} |
| LYgIy/g0eVT9 / LYgIy | frame / Item User Preferences | {"name":"Item User Preferences"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| LYgIy/KDmgW / LYgIy/g0eVT9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"sliders-horizontal","library":"lucide","fill":"$op-text-2"} |
| LYgIy/rxZhX / LYgIy/g0eVT9 | text / Label | {"name":"Label","content":"User Preferences"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| LYgIy/RnFMf / LYgIy | frame / Item Account Settings | {"name":"Item Account Settings"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| LYgIy/J4MHXA / LYgIy/RnFMf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user-cog","library":"lucide","fill":"$op-text-2"} |
| LYgIy/T3KGuz / LYgIy/RnFMf | text / Label | {"name":"Label","content":"Account Settings"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| LYgIy/FgeUO / LYgIy | rectangle / Divider 2 | {"name":"Divider 2"} | {"fill":"$op-border","width":"fill_container","height":1} |
| LYgIy/F3gvh / LYgIy | frame / Item App Settings | {"name":"Item App Settings"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| LYgIy/yUtUC / LYgIy/F3gvh | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| LYgIy/A9mQ5 / LYgIy/F3gvh | text / Label | {"name":"Label","content":"App Settings"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| LYgIy/MXyiL / LYgIy/F3gvh | text / Hint | {"name":"Hint","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| LYgIy/i5DMM / LYgIy | frame / Item Admin Dashboard | {"name":"Item Admin Dashboard"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| LYgIy/Y5bUUG / LYgIy/i5DMM | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"shield-check","library":"lucide","fill":"$op-text-2"} |
| LYgIy/YWJrg / LYgIy/i5DMM | text / Label | {"name":"Label","content":"Admin Dashboard"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| LYgIy/ddQhd / LYgIy/i5DMM | frame / Tag | {"name":"Tag"} | {"height":20,"fill":"$op-tint","cornerRadius":999,"padding":[0,8],"alignItems":"center"} |
| LYgIy/MxFpL / LYgIy/ddQhd | text / T | {"name":"T","content":"Admin"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| LYgIy/kkiOc / LYgIy | rectangle / Divider 3 | {"name":"Divider 3"} | {"fill":"$op-border","width":"fill_container","height":1} |
| LYgIy/Y6Otp / LYgIy | frame / Item Sign out | {"name":"Item Sign out"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| LYgIy/nyc2o / LYgIy/Y6Otp | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"log-out","library":"lucide","fill":"$op-text-2"} |
| LYgIy/pbY9C / LYgIy/Y6Otp | text / Label | {"name":"Label","content":"Sign out"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| wnzkw / y7QF3 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| TIuoP / wnzkw | text / Label | {"name":"Label","content":"Desktop · User menu"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| rFkHQ / wnzkw | text / Note | {"name":"Note","content":"Anchored under the avatar, right-aligned, 280 px. Groups: identity · personal (preferences, account) · app (settings, admin, only if permitted) · sign out."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
