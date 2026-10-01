# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · Agent open — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| TSPVF / tBXlw | frame / Shot · Desktop · Agent open | {"name":"Shot · Desktop · Agent open"} | {"layout":"vertical","gap":14} |
| d72xS / TSPVF | frame / Desktop · Agent open | {"name":"Desktop · Agent open","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| aEEcI / d72xS | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"communicate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| aEEcI/e8Mh51 / aEEcI | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| aEEcI/wa3fh / aEEcI/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| aEEcI/qSLZP / aEEcI/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| aEEcI/wGkoP / aEEcI/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| aEEcI/RypvX / aEEcI/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| aEEcI/hMZlj / aEEcI/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/DMxFL / aEEcI | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| aEEcI/bjoKC / aEEcI/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/VFvrR / aEEcI/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search mail"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/Bi3Oq / aEEcI | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| aEEcI/h7yLT / aEEcI/Bi3Oq | text / Heading | {"name":"Heading","content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| aEEcI/wr1HS / aEEcI/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/oUd2W / aEEcI/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| aEEcI/Gy4RX / aEEcI/wr1HS | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| aEEcI/A98xQ / aEEcI/wr1HS | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| aEEcI/r98DX / aEEcI/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/o2KTfe / aEEcI/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/DHPdR / aEEcI/r98DX | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/kvxW2 / aEEcI/r98DX | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| aEEcI/Z9t8jA / aEEcI/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/O3OPw6 / aEEcI/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/EcutZ / aEEcI/Z9t8jA | text / Label | {"name":"Label","content":"Sent"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/aFxaX / aEEcI/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/xQdsD / aEEcI/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/z1e6sO / aEEcI/aFxaX | text / Label | {"name":"Label","content":"Drafts"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/rszAx / aEEcI/aFxaX | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| aEEcI/ePSXn / aEEcI/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/BSLwH / aEEcI/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/FrOSh / aEEcI/ePSXn | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/e76XGD / aEEcI/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/jBNNf / aEEcI/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/l5SsD / aEEcI/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/X3qjt / aEEcI/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/f1c2yw / aEEcI/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/D6ei92 / aEEcI/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/XcWKh / aEEcI | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| aEEcI/w2m1ZA / aEEcI/XcWKh | text / Heading | {"name":"Heading","content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| aEEcI/UlEfD / aEEcI/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/Foaq0 / aEEcI/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/XpOhP / aEEcI/UlEfD | text / Label | {"name":"Label","content":"Suppliers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/lLJfZ / aEEcI/UlEfD | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| aEEcI/E7ULBO / aEEcI/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/ucDWU / aEEcI/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/k6qoaw / aEEcI/E7ULBO | text / Label | {"name":"Label","content":"Invoices"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/lCE61 / aEEcI/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| aEEcI/VSXP9 / aEEcI/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/ESrDf / aEEcI/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/G5QrjH / aEEcI/VSXP9 | text / Label | {"name":"Label","content":"Warehouse move"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/eSee9 / aEEcI/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/DMNjp / aEEcI/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/Mjfq1 / aEEcI/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aEEcI/sWYLg / aEEcI | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| aEEcI/z3f4jF / aEEcI | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| aEEcI/qyaB8 / aEEcI/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| aEEcI/S49k6J / aEEcI/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
