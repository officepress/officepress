# C · Sidebar

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| BT2V9 / root | frame / C · Sidebar | {"name":"C · Sidebar","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":9840,"y":2493,"width":260,"height":900,"fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| e8Mh51 / BT2V9 | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wa3fh / e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| qSLZP / wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| wGkoP / e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| RypvX / e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| hMZlj / RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| DMxFL / BT2V9 | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| bjoKC / DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| VFvrR / DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search mail"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Bi3Oq / BT2V9 | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| h7yLT / Bi3Oq | text / Heading | {"name":"Heading","content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| wr1HS / Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| oUd2W / wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| Gy4RX / wr1HS | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| A98xQ / wr1HS | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| r98DX / Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| o2KTfe / r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| DHPdR / r98DX | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| kvxW2 / r98DX | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| Z9t8jA / Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| O3OPw6 / Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| EcutZ / Z9t8jA | text / Label | {"name":"Label","content":"Sent"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aFxaX / Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| xQdsD / aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| z1e6sO / aFxaX | text / Label | {"name":"Label","content":"Drafts"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| rszAx / aFxaX | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ePSXn / Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| BSLwH / ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| FrOSh / ePSXn | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| e76XGD / Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| jBNNf / e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| l5SsD / e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| X3qjt / Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| f1c2yw / X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| D6ei92 / X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XcWKh / BT2V9 | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| w2m1ZA / XcWKh | text / Heading | {"name":"Heading","content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| UlEfD / XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| Foaq0 / UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| XpOhP / UlEfD | text / Label | {"name":"Label","content":"Suppliers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| lLJfZ / UlEfD | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| E7ULBO / XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| ucDWU / E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| k6qoaw / E7ULBO | text / Label | {"name":"Label","content":"Invoices"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| lCE61 / E7ULBO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| VSXP9 / XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| ESrDf / VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| G5QrjH / VSXP9 | text / Label | {"name":"Label","content":"Warehouse move"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| eSee9 / XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| DMNjp / eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| Mjfq1 / eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| sWYLg / BT2V9 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| z3f4jF / BT2V9 | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| qyaB8 / z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| S49k6J / z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
