# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · Notifications / Desktop · Notifications / Main

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| EQXYr / U2gTCu | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| u8LFfB / EQXYr | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| u8LFfB/NL2v5 / u8LFfB | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| u8LFfB/v0pIr4 / u8LFfB/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| u8LFfB/E8PtZC / u8LFfB | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| u8LFfB/G3t23s / u8LFfB | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| u8LFfB/dtuXO / u8LFfB | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center"} |
| u8LFfB/H5cU4B / u8LFfB/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| u8LFfB/I7kF1e / u8LFfB/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| u8LFfB/vQMp0 / u8LFfB/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u8LFfB/qS8da / u8LFfB/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| u8LFfB/f6Nm4U / u8LFfB | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| u8LFfB/BTxZN / u8LFfB | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| u8LFfB/fawPG / u8LFfB/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":999,"stroke":"$op-accent","strokeWidth":1,"layout":"none"} |
| u8LFfB/MT9A7 / u8LFfB/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-accent-text"} |
| u8LFfB/SkOaY / u8LFfB/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| u8LFfB/XGyoO / u8LFfB/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| u8LFfB/C5tCn / u8LFfB/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| u8LFfB/szMHy / u8LFfB/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| u8LFfB/K5uDK / u8LFfB/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| u8LFfB/I60pf / u8LFfB/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| u8LFfB/h47xa8 / u8LFfB/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| kkK5P / EQXYr | frame / Content | {"name":"Content","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| kkK5P/eSdln / kkK5P | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| kkK5P/bbvEm / kkK5P/eSdln | frame / Search | {"name":"Search"} | {"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| kkK5P/XEGVQ / kkK5P/bbvEm | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| kkK5P/aVFJw / kkK5P/bbvEm | text / Placeholder | {"name":"Placeholder","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| kkK5P/GkglA / kkK5P/eSdln | text / Count | {"name":"Count","content":"12 cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/rwgBO / kkK5P | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":16,"padding":16} |
| kkK5P/l4HDp / kkK5P/rwgBO | frame / Column Inbox | {"name":"Column Inbox"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| kkK5P/G5MyhP / kkK5P/l4HDp | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| kkK5P/Umgko / kkK5P/G5MyhP | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| kkK5P/I9LqI / kkK5P/Umgko | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/OZw3o / kkK5P/Umgko | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| kkK5P/E8weM / kkK5P/OZw3o | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kkK5P/SqApD / kkK5P/G5MyhP | text / Desc | {"name":"Desc","content":"Mail in Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/M2BMk7 / kkK5P/l4HDp | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| kkK5P/BiTty / kkK5P/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| kkK5P/wza89 / kkK5P/BiTty | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| kkK5P/y8TFO / kkK5P/wza89 | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kkK5P/yYy8m / kkK5P/wza89 | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kkK5P/L3HSlJ / kkK5P/BiTty | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kkK5P/MUoBY / kkK5P/L3HSlJ | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| kkK5P/zdMl2 / kkK5P/L3HSlJ | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/LCdhp / kkK5P/BiTty | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/CZuLx / kkK5P/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| kkK5P/Pz8ym / kkK5P/CZuLx | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| kkK5P/t0HdB / kkK5P/Pz8ym | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kkK5P/SA4ZE / kkK5P/Pz8ym | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kkK5P/pG3PF / kkK5P/CZuLx | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kkK5P/Zrubq / kkK5P/pG3PF | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| kkK5P/a3NrBr / kkK5P/pG3PF | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/H48mvg / kkK5P/CZuLx | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/CRVa7 / kkK5P/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| kkK5P/lFDrE / kkK5P/CRVa7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| kkK5P/E1l9V4 / kkK5P/lFDrE | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kkK5P/v360U8 / kkK5P/lFDrE | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kkK5P/l5Hps / kkK5P/CRVa7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kkK5P/wueVk / kkK5P/l5Hps | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/eWG8L / kkK5P/CRVa7 | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/DEbw4 / kkK5P/rwgBO | frame / Column Follow up | {"name":"Column Follow up"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| kkK5P/JsDlg / kkK5P/DEbw4 | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| kkK5P/w7HSrN / kkK5P/JsDlg | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| kkK5P/Yj7HY / kkK5P/w7HSrN | text / Title | {"name":"Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/nfHkf / kkK5P/w7HSrN | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| kkK5P/AjiLP / kkK5P/nfHkf | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kkK5P/f5g8V4 / kkK5P/JsDlg | text / Desc | {"name":"Desc","content":"Needs a reply or next step"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/u6wS7O / kkK5P/DEbw4 | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| kkK5P/ljopi / kkK5P/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| kkK5P/f60nd / kkK5P/ljopi | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| kkK5P/mMukx / kkK5P/f60nd | text / Sender | {"name":"Sender","content":"Ana Cruz, Marco Villar"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kkK5P/uqWBw / kkK5P/f60nd | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kkK5P/o9z9SI / kkK5P/ljopi | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kkK5P/c7EyA / kkK5P/o9z9SI | text / Title | {"name":"Title","content":"Warehouse move — dock schedule Friday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/fAvE8 / kkK5P/ljopi | text / Preview | {"name":"Preview","content":"Print it at A3, anything smaller and the exit labels are unreadable."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/bzztC / kkK5P/ljopi | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| kkK5P/g3VRle / kkK5P/bzztC | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| kkK5P/RRAcl / kkK5P/g3VRle | text / Left | {"name":"Left","content":"10h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kkK5P/Y4lHV / kkK5P/bzztC | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| kkK5P/K14iSS / kkK5P/Y4lHV | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":6} |
| kkK5P/AA3iT / kkK5P/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| kkK5P/CUJts / kkK5P/AA3iT | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| kkK5P/Y2sPxq / kkK5P/CUJts | text / Sender | {"name":"Sender","content":"Northwind Billing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kkK5P/zVcMj / kkK5P/CUJts | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kkK5P/x81YkH / kkK5P/AA3iT | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kkK5P/u59xm / kkK5P/x81YkH | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| kkK5P/GeczV / kkK5P/x81YkH | text / Title | {"name":"Title","content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/YRJhQ / kkK5P/AA3iT | text / Preview | {"name":"Preview","content":"Mila, this one needs your sign-off before Friday."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/yIi3x / kkK5P/AA3iT | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| kkK5P/Ckm7G / kkK5P/yIi3x | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| kkK5P/PYYt6 / kkK5P/Ckm7G | text / Left | {"name":"Left","content":"4h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kkK5P/pDfqc / kkK5P/yIi3x | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| kkK5P/B25Q4 / kkK5P/pDfqc | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent-strong","width":230,"height":6} |
| kkK5P/pOfqX / kkK5P/rwgBO | frame / Column Done | {"name":"Column Done"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| kkK5P/x9VbXU / kkK5P/pOfqX | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| kkK5P/dCrmU / kkK5P/x9VbXU | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| kkK5P/lxxQt / kkK5P/dCrmU | text / Title | {"name":"Title","content":"Done"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/nf6rQ / kkK5P/dCrmU | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| kkK5P/pG8Dr / kkK5P/nf6rQ | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kkK5P/sYKwF / kkK5P/x9VbXU | text / Desc | {"name":"Desc","content":"Handled for now"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kkK5P/SoB3a / kkK5P/pOfqX | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| kkK5P/RDPzS / kkK5P/SoB3a | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| kkK5P/kTg7R / kkK5P/RDPzS | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| kkK5P/L2FBJ / kkK5P/kTg7R | text / Sender | {"name":"Sender","content":"Tom Lim"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kkK5P/S0GKF / kkK5P/kTg7R | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kkK5P/atVZk / kkK5P/RDPzS | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kkK5P/EYl11 / kkK5P/atVZk | text / Title | {"name":"Title","content":"Press check moved to Thursday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kkK5P/m1ofQ / kkK5P/RDPzS | text / Preview | {"name":"Preview","content":"The proofs didn't clear Thursday so I moved it."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
