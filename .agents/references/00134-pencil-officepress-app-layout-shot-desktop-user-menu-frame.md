# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · User menu — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| y7QF3 / tBXlw | frame / Shot · Desktop · User menu | {"name":"Shot · Desktop · User menu"} | {"layout":"vertical","gap":14} |
| A1Gtos / y7QF3 | frame / Desktop · User menu | {"name":"Desktop · User menu","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| E9bxc / A1Gtos | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"communicate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| E9bxc/e8Mh51 / E9bxc | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| E9bxc/wa3fh / E9bxc/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| E9bxc/qSLZP / E9bxc/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| E9bxc/wGkoP / E9bxc/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| E9bxc/RypvX / E9bxc/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| E9bxc/hMZlj / E9bxc/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/DMxFL / E9bxc | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| E9bxc/bjoKC / E9bxc/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/VFvrR / E9bxc/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search mail"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/Bi3Oq / E9bxc | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| E9bxc/h7yLT / E9bxc/Bi3Oq | text / Heading | {"name":"Heading","content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| E9bxc/wr1HS / E9bxc/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/oUd2W / E9bxc/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| E9bxc/Gy4RX / E9bxc/wr1HS | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| E9bxc/A98xQ / E9bxc/wr1HS | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| E9bxc/r98DX / E9bxc/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/o2KTfe / E9bxc/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/DHPdR / E9bxc/r98DX | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/kvxW2 / E9bxc/r98DX | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| E9bxc/Z9t8jA / E9bxc/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/O3OPw6 / E9bxc/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/EcutZ / E9bxc/Z9t8jA | text / Label | {"name":"Label","content":"Sent"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/aFxaX / E9bxc/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/xQdsD / E9bxc/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/z1e6sO / E9bxc/aFxaX | text / Label | {"name":"Label","content":"Drafts"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/rszAx / E9bxc/aFxaX | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| E9bxc/ePSXn / E9bxc/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/BSLwH / E9bxc/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/FrOSh / E9bxc/ePSXn | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/e76XGD / E9bxc/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/jBNNf / E9bxc/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/l5SsD / E9bxc/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/X3qjt / E9bxc/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/f1c2yw / E9bxc/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/D6ei92 / E9bxc/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/XcWKh / E9bxc | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| E9bxc/w2m1ZA / E9bxc/XcWKh | text / Heading | {"name":"Heading","content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| E9bxc/UlEfD / E9bxc/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/Foaq0 / E9bxc/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/XpOhP / E9bxc/UlEfD | text / Label | {"name":"Label","content":"Suppliers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/lLJfZ / E9bxc/UlEfD | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| E9bxc/E7ULBO / E9bxc/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/ucDWU / E9bxc/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/k6qoaw / E9bxc/E7ULBO | text / Label | {"name":"Label","content":"Invoices"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/lCE61 / E9bxc/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| E9bxc/VSXP9 / E9bxc/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/ESrDf / E9bxc/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/G5QrjH / E9bxc/VSXP9 | text / Label | {"name":"Label","content":"Warehouse move"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/eSee9 / E9bxc/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/DMNjp / E9bxc/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/Mjfq1 / E9bxc/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E9bxc/sWYLg / E9bxc | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| E9bxc/z3f4jF / E9bxc | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| E9bxc/qyaB8 / E9bxc/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| E9bxc/S49k6J / E9bxc/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
