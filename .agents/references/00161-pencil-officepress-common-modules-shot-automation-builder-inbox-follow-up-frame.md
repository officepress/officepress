# OfficePress Common Modules / Section · Automations / Screens / Shot · Automation builder · Inbox Follow up — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| G5dq5E / KcNTs | frame / Shot · Automation builder · Inbox Follow up | {"name":"Shot · Automation builder · Inbox Follow up"} | {"layout":"vertical","gap":14} |
| Fo6j5 / G5dq5E | frame / Automation builder · Inbox Follow up | {"name":"Automation builder · Inbox Follow up","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":1776,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| RTSi2 / Fo6j5 | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"communicate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| RTSi2/e8Mh51 / RTSi2 | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| RTSi2/wa3fh / RTSi2/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| RTSi2/qSLZP / RTSi2/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| RTSi2/wGkoP / RTSi2/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| RTSi2/RypvX / RTSi2/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RTSi2/hMZlj / RTSi2/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/DMxFL / RTSi2 | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| RTSi2/bjoKC / RTSi2/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/VFvrR / RTSi2/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search mail"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/Bi3Oq / RTSi2 | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| RTSi2/h7yLT / RTSi2/Bi3Oq | text / Heading | {"name":"Heading","content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| RTSi2/wr1HS / RTSi2/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/oUd2W / RTSi2/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| RTSi2/Gy4RX / RTSi2/wr1HS | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| RTSi2/A98xQ / RTSi2/wr1HS | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| RTSi2/r98DX / RTSi2/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/o2KTfe / RTSi2/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/DHPdR / RTSi2/r98DX | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/kvxW2 / RTSi2/r98DX | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| RTSi2/Z9t8jA / RTSi2/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/O3OPw6 / RTSi2/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/EcutZ / RTSi2/Z9t8jA | text / Label | {"name":"Label","content":"Sent"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/aFxaX / RTSi2/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/xQdsD / RTSi2/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/z1e6sO / RTSi2/aFxaX | text / Label | {"name":"Label","content":"Drafts"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/rszAx / RTSi2/aFxaX | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| RTSi2/ePSXn / RTSi2/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/BSLwH / RTSi2/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/FrOSh / RTSi2/ePSXn | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/e76XGD / RTSi2/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/jBNNf / RTSi2/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/l5SsD / RTSi2/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/X3qjt / RTSi2/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/f1c2yw / RTSi2/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/D6ei92 / RTSi2/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/XcWKh / RTSi2 | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| RTSi2/w2m1ZA / RTSi2/XcWKh | text / Heading | {"name":"Heading","content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| RTSi2/UlEfD / RTSi2/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/Foaq0 / RTSi2/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/XpOhP / RTSi2/UlEfD | text / Label | {"name":"Label","content":"Suppliers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/lLJfZ / RTSi2/UlEfD | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| RTSi2/E7ULBO / RTSi2/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/ucDWU / RTSi2/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/k6qoaw / RTSi2/E7ULBO | text / Label | {"name":"Label","content":"Invoices"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/lCE61 / RTSi2/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| RTSi2/VSXP9 / RTSi2/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/ESrDf / RTSi2/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/G5QrjH / RTSi2/VSXP9 | text / Label | {"name":"Label","content":"Warehouse move"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/eSee9 / RTSi2/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/DMNjp / RTSi2/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/Mjfq1 / RTSi2/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RTSi2/sWYLg / RTSi2 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| RTSi2/z3f4jF / RTSi2 | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RTSi2/qyaB8 / RTSi2/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| RTSi2/S49k6J / RTSi2/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
