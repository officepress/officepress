# OfficePress App Layout / Section · Header actions — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| ftMB4 / WASH2 | frame / Section · Header actions | {"name":"Section · Header actions"} | {"width":"fill_container","layout":"vertical","gap":28} |
| BWED4 / ftMB4 | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| ZPQHM / BWED4 | text / Title | {"name":"Title","content":"Header actions"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| g2mBh / BWED4 | text / Desc | {"name":"Desc","content":"Every app header ends with the same four circular controls, in this order: notifications (bell, dot = unread activity), agent, theme (shows the current mode, click to switch), user. Page-specific actions sit to the left of the divider."} | {"fill":"$muted","textGrowth":"fixed-width","width":900,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| tBXlw / ftMB4 | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| LAnCO / tBXlw | frame / Shot · Desktop · Notifications | {"name":"Shot · Desktop · Notifications"} | {"layout":"vertical","gap":14} |
| U2gTCu / LAnCO | frame / Desktop · Notifications | {"name":"Desktop · Notifications","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| XlNDY / U2gTCu | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"communicate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| XlNDY/e8Mh51 / XlNDY | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| XlNDY/wa3fh / XlNDY/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| XlNDY/qSLZP / XlNDY/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| XlNDY/wGkoP / XlNDY/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| XlNDY/RypvX / XlNDY/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| XlNDY/hMZlj / XlNDY/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/DMxFL / XlNDY | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| XlNDY/bjoKC / XlNDY/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/VFvrR / XlNDY/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search mail"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/Bi3Oq / XlNDY | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| XlNDY/h7yLT / XlNDY/Bi3Oq | text / Heading | {"name":"Heading","content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| XlNDY/wr1HS / XlNDY/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/oUd2W / XlNDY/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| XlNDY/Gy4RX / XlNDY/wr1HS | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| XlNDY/A98xQ / XlNDY/wr1HS | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| XlNDY/r98DX / XlNDY/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/o2KTfe / XlNDY/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/DHPdR / XlNDY/r98DX | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/kvxW2 / XlNDY/r98DX | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| XlNDY/Z9t8jA / XlNDY/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/O3OPw6 / XlNDY/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/EcutZ / XlNDY/Z9t8jA | text / Label | {"name":"Label","content":"Sent"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/aFxaX / XlNDY/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/xQdsD / XlNDY/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/z1e6sO / XlNDY/aFxaX | text / Label | {"name":"Label","content":"Drafts"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/rszAx / XlNDY/aFxaX | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| XlNDY/ePSXn / XlNDY/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/BSLwH / XlNDY/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/FrOSh / XlNDY/ePSXn | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/e76XGD / XlNDY/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/jBNNf / XlNDY/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/l5SsD / XlNDY/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/X3qjt / XlNDY/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/f1c2yw / XlNDY/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/D6ei92 / XlNDY/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/XcWKh / XlNDY | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| XlNDY/w2m1ZA / XlNDY/XcWKh | text / Heading | {"name":"Heading","content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| XlNDY/UlEfD / XlNDY/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/Foaq0 / XlNDY/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/XpOhP / XlNDY/UlEfD | text / Label | {"name":"Label","content":"Suppliers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/lLJfZ / XlNDY/UlEfD | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| XlNDY/E7ULBO / XlNDY/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/ucDWU / XlNDY/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/k6qoaw / XlNDY/E7ULBO | text / Label | {"name":"Label","content":"Invoices"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/lCE61 / XlNDY/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| XlNDY/VSXP9 / XlNDY/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/ESrDf / XlNDY/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/G5QrjH / XlNDY/VSXP9 | text / Label | {"name":"Label","content":"Warehouse move"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/eSee9 / XlNDY/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/DMNjp / XlNDY/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/Mjfq1 / XlNDY/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XlNDY/sWYLg / XlNDY | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| XlNDY/z3f4jF / XlNDY | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| XlNDY/qyaB8 / XlNDY/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| XlNDY/S49k6J / XlNDY/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
