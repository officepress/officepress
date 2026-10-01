# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · Agent open / Desktop · Agent open / Main — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| kjiIc / d72xS | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| lhT9v / kjiIc | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| lhT9v/NL2v5 / lhT9v | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| lhT9v/v0pIr4 / lhT9v/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| lhT9v/E8PtZC / lhT9v | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| lhT9v/G3t23s / lhT9v | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| lhT9v/dtuXO / lhT9v | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center"} |
| lhT9v/H5cU4B / lhT9v/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| lhT9v/I7kF1e / lhT9v/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| lhT9v/vQMp0 / lhT9v/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| lhT9v/qS8da / lhT9v/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| lhT9v/f6Nm4U / lhT9v | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| lhT9v/BTxZN / lhT9v | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| lhT9v/fawPG / lhT9v/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| lhT9v/MT9A7 / lhT9v/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| lhT9v/SkOaY / lhT9v/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| lhT9v/XGyoO / lhT9v/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lhT9v/C5tCn / lhT9v/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-accent-text"} |
| lhT9v/szMHy / lhT9v/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lhT9v/K5uDK / lhT9v/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| lhT9v/I60pf / lhT9v/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lhT9v/h47xa8 / lhT9v/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| Cwgex / kjiIc | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container"} |
| K16W8P / Cwgex | frame / Content | {"name":"Content","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| K16W8P/eSdln / K16W8P | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| K16W8P/bbvEm / K16W8P/eSdln | frame / Search | {"name":"Search"} | {"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| K16W8P/XEGVQ / K16W8P/bbvEm | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| K16W8P/aVFJw / K16W8P/bbvEm | text / Placeholder | {"name":"Placeholder","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| K16W8P/GkglA / K16W8P/eSdln | text / Count | {"name":"Count","content":"11 cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/rwgBO / K16W8P | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":16,"padding":16} |
| K16W8P/l4HDp / K16W8P/rwgBO | frame / Column Inbox | {"name":"Column Inbox"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| K16W8P/G5MyhP / K16W8P/l4HDp | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| K16W8P/Umgko / K16W8P/G5MyhP | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| K16W8P/I9LqI / K16W8P/Umgko | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/OZw3o / K16W8P/Umgko | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| K16W8P/E8weM / K16W8P/OZw3o | text / N | {"name":"N","content":"8"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| K16W8P/SqApD / K16W8P/G5MyhP | text / Desc | {"name":"Desc","content":"Mail in Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/M2BMk7 / K16W8P/l4HDp | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| K16W8P/BiTty / K16W8P/M2BMk7 | frame / Card | {"name":"Card"} | {"x":8,"y":8,"enabled":false,"width":"fill_container(356)","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| K16W8P/wza89 / K16W8P/BiTty | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K16W8P/y8TFO / K16W8P/wza89 | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| K16W8P/yYy8m / K16W8P/wza89 | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| K16W8P/L3HSlJ / K16W8P/BiTty | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K16W8P/MUoBY / K16W8P/L3HSlJ | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| K16W8P/zdMl2 / K16W8P/L3HSlJ | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/LCdhp / K16W8P/BiTty | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/CZuLx / K16W8P/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| K16W8P/Pz8ym / K16W8P/CZuLx | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K16W8P/t0HdB / K16W8P/Pz8ym | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| K16W8P/SA4ZE / K16W8P/Pz8ym | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| K16W8P/pG3PF / K16W8P/CZuLx | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K16W8P/Zrubq / K16W8P/pG3PF | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| K16W8P/a3NrBr / K16W8P/pG3PF | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/H48mvg / K16W8P/CZuLx | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/CRVa7 / K16W8P/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| K16W8P/lFDrE / K16W8P/CRVa7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K16W8P/E1l9V4 / K16W8P/lFDrE | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| K16W8P/v360U8 / K16W8P/lFDrE | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| K16W8P/l5Hps / K16W8P/CRVa7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K16W8P/wueVk / K16W8P/l5Hps | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/eWG8L / K16W8P/CRVa7 | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/DEbw4 / K16W8P/rwgBO | frame / Column Follow up | {"name":"Column Follow up"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| K16W8P/JsDlg / K16W8P/DEbw4 | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| K16W8P/w7HSrN / K16W8P/JsDlg | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| K16W8P/Yj7HY / K16W8P/w7HSrN | text / Title | {"name":"Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/nfHkf / K16W8P/w7HSrN | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| K16W8P/AjiLP / K16W8P/nfHkf | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| K16W8P/f5g8V4 / K16W8P/JsDlg | text / Desc | {"name":"Desc","content":"Needs a reply or next step"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/u6wS7O / K16W8P/DEbw4 | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| K16W8P/ljopi / K16W8P/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| K16W8P/f60nd / K16W8P/ljopi | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K16W8P/mMukx / K16W8P/f60nd | text / Sender | {"name":"Sender","content":"Ana Cruz, Marco Villar"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| K16W8P/uqWBw / K16W8P/f60nd | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| K16W8P/o9z9SI / K16W8P/ljopi | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K16W8P/c7EyA / K16W8P/o9z9SI | text / Title | {"name":"Title","content":"Warehouse move — dock schedule Friday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/fAvE8 / K16W8P/ljopi | text / Preview | {"name":"Preview","content":"Print it at A3, anything smaller and the exit labels are unreadable."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/bzztC / K16W8P/ljopi | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| K16W8P/g3VRle / K16W8P/bzztC | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| K16W8P/RRAcl / K16W8P/g3VRle | text / Left | {"name":"Left","content":"10h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| K16W8P/Y4lHV / K16W8P/bzztC | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| K16W8P/K14iSS / K16W8P/Y4lHV | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":6} |
| K16W8P/AA3iT / K16W8P/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-accent","strokeWidth":2,"effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| K16W8P/CUJts / K16W8P/AA3iT | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K16W8P/Y2sPxq / K16W8P/CUJts | text / Sender | {"name":"Sender","content":"Northwind Billing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| K16W8P/zVcMj / K16W8P/CUJts | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| K16W8P/x81YkH / K16W8P/AA3iT | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K16W8P/u59xm / K16W8P/x81YkH | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| K16W8P/GeczV / K16W8P/x81YkH | text / Title | {"name":"Title","content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/YRJhQ / K16W8P/AA3iT | text / Preview | {"name":"Preview","content":"Mila, this one needs your sign-off before Friday."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/yIi3x / K16W8P/AA3iT | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| K16W8P/Ckm7G / K16W8P/yIi3x | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| K16W8P/PYYt6 / K16W8P/Ckm7G | text / Left | {"name":"Left","content":"4h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| K16W8P/pDfqc / K16W8P/yIi3x | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| K16W8P/B25Q4 / K16W8P/pDfqc | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent-strong","width":230,"height":6} |
| K16W8P/pOfqX / K16W8P/rwgBO | frame / Column Done | {"name":"Column Done"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| K16W8P/x9VbXU / K16W8P/pOfqX | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| K16W8P/dCrmU / K16W8P/x9VbXU | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| K16W8P/lxxQt / K16W8P/dCrmU | text / Title | {"name":"Title","content":"Done"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/nf6rQ / K16W8P/dCrmU | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| K16W8P/pG8Dr / K16W8P/nf6rQ | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| K16W8P/sYKwF / K16W8P/x9VbXU | text / Desc | {"name":"Desc","content":"Handled for now"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| K16W8P/SoB3a / K16W8P/pOfqX | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| K16W8P/RDPzS / K16W8P/SoB3a | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| K16W8P/kTg7R / K16W8P/RDPzS | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| K16W8P/L2FBJ / K16W8P/kTg7R | text / Sender | {"name":"Sender","content":"Tom Lim"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| K16W8P/S0GKF / K16W8P/kTg7R | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| K16W8P/atVZk / K16W8P/RDPzS | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K16W8P/EYl11 / K16W8P/atVZk | text / Title | {"name":"Title","content":"Press check moved to Thursday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| K16W8P/m1ofQ / K16W8P/RDPzS | text / Preview | {"name":"Preview","content":"The proofs didn't clear Thursday so I moved it."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
