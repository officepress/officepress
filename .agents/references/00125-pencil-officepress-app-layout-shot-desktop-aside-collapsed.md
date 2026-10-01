# OfficePress App Layout / Section · Left aside / Screens / Shot · Desktop · Aside collapsed

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| RsJjg / mXqBl | frame / Shot · Desktop · Aside collapsed | {"name":"Shot · Desktop · Aside collapsed"} | {"layout":"vertical","gap":14} |
| TxOK7 / RsJjg | frame / Desktop · Aside collapsed | {"name":"Desktop · Aside collapsed","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| sAYCa / TxOK7 | frame / Sidebar Rail | {"name":"Sidebar Rail","theme":{"mode":"light","family":"communicate"}} | {"width":64,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":8,"padding":[16,12],"alignItems":"center"} |
| sAYCa/Q1QnH / sAYCa | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| sAYCa/QGJIF / sAYCa/Q1QnH | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| sAYCa/r4HeYt / sAYCa | frame / Expand | {"name":"Expand"} | {"width":40,"height":40,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| sAYCa/AX4yB / sAYCa/r4HeYt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-open","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/kGKiP / sAYCa | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-nav-border","width":24,"height":1} |
| sAYCa/yM2Se / sAYCa | frame / Rail inbox | {"name":"Rail inbox"} | {"width":40,"height":40,"fill":"$op-nav-active","cornerRadius":4,"layout":"none"} |
| sAYCa/ciu9M / sAYCa/yM2Se | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| sAYCa/WmDYi / sAYCa/yM2Se | ellipse / Dot | {"name":"Dot"} | {"x":26,"y":8,"fill":"$op-nav-dot","width":7,"height":7} |
| sAYCa/pzTCm / sAYCa | frame / Rail star | {"name":"Rail star"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| sAYCa/uriFe / sAYCa/pzTCm | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/oMLQh / sAYCa/pzTCm | ellipse / Dot | {"name":"Dot"} | {"x":26,"y":8,"fill":"$op-nav-dot","width":7,"height":7} |
| sAYCa/a7is4y / sAYCa | frame / Rail send | {"name":"Rail send"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| sAYCa/dS2gS / sAYCa/a7is4y | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/ysvFv / sAYCa | frame / Rail file | {"name":"Rail file"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| sAYCa/MA4bc / sAYCa/ysvFv | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/vNPHP / sAYCa | frame / Rail archive | {"name":"Rail archive"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| sAYCa/HaNy6 / sAYCa/vNPHP | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/A2TbAT / sAYCa | frame / Rail octagon-alert | {"name":"Rail octagon-alert"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| sAYCa/q2cfs3 / sAYCa/A2TbAT | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/kOqhf / sAYCa | frame / Rail mails | {"name":"Rail mails"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| sAYCa/i67jj / sAYCa/kOqhf | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| sAYCa/jezK8 / sAYCa | frame / Spacer | {"name":"Spacer"} | {"width":1,"height":"fill_container"} |
| sAYCa/FKfY0 / sAYCa | frame / Help | {"name":"Help"} | {"width":40,"height":40,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| sAYCa/uYpXb / sAYCa/FKfY0 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| Xg2lc / TxOK7 | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| BalGf / Xg2lc | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| BalGf/NL2v5 / BalGf | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| BalGf/v0pIr4 / BalGf/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| BalGf/E8PtZC / BalGf | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| BalGf/G3t23s / BalGf | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| BalGf/dtuXO / BalGf | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center"} |
| BalGf/H5cU4B / BalGf/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| BalGf/I7kF1e / BalGf/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| BalGf/vQMp0 / BalGf/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| BalGf/qS8da / BalGf/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| BalGf/f6Nm4U / BalGf | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| BalGf/BTxZN / BalGf | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| BalGf/fawPG / BalGf/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| BalGf/MT9A7 / BalGf/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| BalGf/SkOaY / BalGf/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| BalGf/XGyoO / BalGf/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| BalGf/C5tCn / BalGf/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| BalGf/szMHy / BalGf/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| BalGf/K5uDK / BalGf/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| BalGf/I60pf / BalGf/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| BalGf/h47xa8 / BalGf/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| u16bEO / Xg2lc | frame / Content | {"name":"Content","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| u16bEO/eSdln / u16bEO | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| u16bEO/bbvEm / u16bEO/eSdln | frame / Search | {"name":"Search"} | {"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| u16bEO/XEGVQ / u16bEO/bbvEm | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| u16bEO/aVFJw / u16bEO/bbvEm | text / Placeholder | {"name":"Placeholder","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u16bEO/GkglA / u16bEO/eSdln | text / Count | {"name":"Count","content":"12 cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/rwgBO / u16bEO | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":16,"padding":16} |
| u16bEO/l4HDp / u16bEO/rwgBO | frame / Column Inbox | {"name":"Column Inbox"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| u16bEO/G5MyhP / u16bEO/l4HDp | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| u16bEO/Umgko / u16bEO/G5MyhP | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| u16bEO/I9LqI / u16bEO/Umgko | text / Title | {"name":"Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/OZw3o / u16bEO/Umgko | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| u16bEO/E8weM / u16bEO/OZw3o | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| u16bEO/SqApD / u16bEO/G5MyhP | text / Desc | {"name":"Desc","content":"Mail in Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/M2BMk7 / u16bEO/l4HDp | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| u16bEO/BiTty / u16bEO/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| u16bEO/wza89 / u16bEO/BiTty | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| u16bEO/y8TFO / u16bEO/wza89 | text / Sender | {"name":"Sender","content":"Mail Delivery Subsystem"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u16bEO/yYy8m / u16bEO/wza89 | text / Time | {"name":"Time","content":"09:58"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u16bEO/L3HSlJ / u16bEO/BiTty | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u16bEO/MUoBY / u16bEO/L3HSlJ | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| u16bEO/zdMl2 / u16bEO/L3HSlJ | text / Title | {"name":"Title","content":"Address not found"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/LCdhp / u16bEO/BiTty | text / Preview | {"name":"Preview","content":"Your message wasn't delivered to tevis.lim@paperworks.co."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/CZuLx / u16bEO/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| u16bEO/Pz8ym / u16bEO/CZuLx | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| u16bEO/t0HdB / u16bEO/Pz8ym | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u16bEO/SA4ZE / u16bEO/Pz8ym | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u16bEO/pG3PF / u16bEO/CZuLx | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u16bEO/Zrubq / u16bEO/pG3PF | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| u16bEO/a3NrBr / u16bEO/pG3PF | text / Title | {"name":"Title","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/H48mvg / u16bEO/CZuLx | text / Preview | {"name":"Preview","content":"The Q3 count is off by fourteen reams against the delivery notes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/CRVa7 / u16bEO/M2BMk7 | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| u16bEO/lFDrE / u16bEO/CRVa7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| u16bEO/E1l9V4 / u16bEO/lFDrE | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u16bEO/v360U8 / u16bEO/lFDrE | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u16bEO/l5Hps / u16bEO/CRVa7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u16bEO/wueVk / u16bEO/l5Hps | text / Title | {"name":"Title","content":"Quote for Q4 paper stock"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/eWG8L / u16bEO/CRVa7 | text / Preview | {"name":"Preview","content":"We supply coated and uncoated stock across Metro Manila."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/DEbw4 / u16bEO/rwgBO | frame / Column Follow up | {"name":"Column Follow up"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| u16bEO/JsDlg / u16bEO/DEbw4 | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| u16bEO/w7HSrN / u16bEO/JsDlg | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| u16bEO/Yj7HY / u16bEO/w7HSrN | text / Title | {"name":"Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/nfHkf / u16bEO/w7HSrN | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| u16bEO/AjiLP / u16bEO/nfHkf | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| u16bEO/f5g8V4 / u16bEO/JsDlg | text / Desc | {"name":"Desc","content":"Needs a reply or next step"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/u6wS7O / u16bEO/DEbw4 | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| u16bEO/ljopi / u16bEO/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| u16bEO/f60nd / u16bEO/ljopi | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| u16bEO/mMukx / u16bEO/f60nd | text / Sender | {"name":"Sender","content":"Ana Cruz, Marco Villar"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u16bEO/uqWBw / u16bEO/f60nd | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u16bEO/o9z9SI / u16bEO/ljopi | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u16bEO/c7EyA / u16bEO/o9z9SI | text / Title | {"name":"Title","content":"Warehouse move — dock schedule Friday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/fAvE8 / u16bEO/ljopi | text / Preview | {"name":"Preview","content":"Print it at A3, anything smaller and the exit labels are unreadable."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/bzztC / u16bEO/ljopi | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| u16bEO/g3VRle / u16bEO/bzztC | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| u16bEO/RRAcl / u16bEO/g3VRle | text / Left | {"name":"Left","content":"10h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| u16bEO/Y4lHV / u16bEO/bzztC | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| u16bEO/K14iSS / u16bEO/Y4lHV | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":6} |
| u16bEO/AA3iT / u16bEO/u6wS7O | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| u16bEO/CUJts / u16bEO/AA3iT | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| u16bEO/Y2sPxq / u16bEO/CUJts | text / Sender | {"name":"Sender","content":"Northwind Billing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u16bEO/zVcMj / u16bEO/CUJts | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u16bEO/x81YkH / u16bEO/AA3iT | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u16bEO/u59xm / u16bEO/x81YkH | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| u16bEO/GeczV / u16bEO/x81YkH | text / Title | {"name":"Title","content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/YRJhQ / u16bEO/AA3iT | text / Preview | {"name":"Preview","content":"Mila, this one needs your sign-off before Friday."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/yIi3x / u16bEO/AA3iT | frame / SLA | {"name":"SLA"} | {"width":"fill_container","layout":"vertical","gap":4} |
| u16bEO/Ckm7G / u16bEO/yIi3x | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"end"} |
| u16bEO/PYYt6 / u16bEO/Ckm7G | text / Left | {"name":"Left","content":"4h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| u16bEO/pDfqc / u16bEO/yIi3x | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| u16bEO/B25Q4 / u16bEO/pDfqc | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent-strong","width":230,"height":6} |
| u16bEO/pOfqX / u16bEO/rwgBO | frame / Column Done | {"name":"Column Done"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| u16bEO/x9VbXU / u16bEO/pOfqX | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| u16bEO/dCrmU / u16bEO/x9VbXU | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| u16bEO/lxxQt / u16bEO/dCrmU | text / Title | {"name":"Title","content":"Done"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/nf6rQ / u16bEO/dCrmU | frame / Badge | {"name":"Badge"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| u16bEO/pG8Dr / u16bEO/nf6rQ | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| u16bEO/sYKwF / u16bEO/x9VbXU | text / Desc | {"name":"Desc","content":"Handled for now"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u16bEO/SoB3a / u16bEO/pOfqX | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| u16bEO/RDPzS / u16bEO/SoB3a | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| u16bEO/kTg7R / u16bEO/RDPzS | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| u16bEO/L2FBJ / u16bEO/kTg7R | text / Sender | {"name":"Sender","content":"Tom Lim"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u16bEO/S0GKF / u16bEO/kTg7R | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u16bEO/atVZk / u16bEO/RDPzS | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u16bEO/EYl11 / u16bEO/atVZk | text / Title | {"name":"Title","content":"Press check moved to Thursday"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u16bEO/m1ofQ / u16bEO/RDPzS | text / Preview | {"name":"Preview","content":"The proofs didn't clear Thursday so I moved it."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| sbZ9h / RsJjg | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| uD89a / sbZ9h | text / Label | {"name":"Label","content":"Desktop · Aside collapsed"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| YPNy5 / sbZ9h | text / Note | {"name":"Note","content":"64 px rail: logo, expand, icon-only nav with tooltips and unread dots. Content reflows to the freed width."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
