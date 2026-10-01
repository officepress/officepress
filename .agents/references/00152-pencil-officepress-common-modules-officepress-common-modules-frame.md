# OfficePress Common Modules — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| fgzpp / root | frame / OfficePress Common Modules | {"name":"OfficePress Common Modules"} | {"x":0,"y":13871,"width":3080,"fill":"$bg","layout":"vertical","gap":96,"padding":80} |
| VxgGf / fgzpp | frame / Header | {"name":"Header"} | {"width":"fill_container","layout":"vertical","gap":16} |
| zOZ1D / VxgGf | text / Eyebrow | {"name":"Eyebrow","content":"OFFICEPRESS  /  COMMON MODULES  /  FROM THE INBOX, HRIS, ORDER PROCESSING AND TICKET TRACKER WIREFRAMES"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal","letterSpacing":1.5} |
| OMFE3 / VxgGf | text / Title | {"name":"Title","content":"Build it once. Theme it per app."} | {"fill":"$ink","fontFamily":"$font-display","fontSize":56,"fontWeight":"700","letterSpacing":-2} |
| neVbe / VxgGf | text / Lede | {"name":"Lede","content":"Workflows, automations, forms, message templates and chat recur across the suite. Each is designed once on op-* tokens and shown here inside the app that uses it; the family theme does the rest."} | {"fill":"$muted","textGrowth":"fixed-width","width":900,"lineHeight":1.6,"fontFamily":"$font-display","fontSize":17,"fontWeight":"normal"} |
| v7Qxw / fgzpp | frame / Section · Workflows | {"name":"Section · Workflows"} | {"width":"fill_container","layout":"vertical","gap":28} |
| N0YVwv / v7Qxw | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| oBcYB / N0YVwv | text / Title | {"name":"Title","content":"Workflows"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| NUSSf / N0YVwv | text / Desc | {"name":"Desc","content":"Kanban boards with stage targets, WIP limits, entry requirements and default tasks. The source column (Inbox, All statuses) is fixed; every other column is a configurable stage. Seen in Inbox, HRIS, Ticket Tracker and Order Processing."} | {"fill":"$muted","textGrowth":"fixed-width","width":1100,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| tpfnx / v7Qxw | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| HRylX / tpfnx | frame / Shot · Board · HRIS Hiring | {"name":"Shot · Board · HRIS Hiring"} | {"layout":"vertical","gap":14} |
| TgMRX / HRylX | frame / Board · HRIS Hiring | {"name":"Board · HRIS Hiring","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| W7lE0n / TgMRX | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"operate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| W7lE0n/e8Mh51 / W7lE0n | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| W7lE0n/wa3fh / W7lE0n/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| W7lE0n/qSLZP / W7lE0n/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| W7lE0n/wGkoP / W7lE0n/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Resourcing"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| W7lE0n/RypvX / W7lE0n/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| W7lE0n/hMZlj / W7lE0n/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/DMxFL / W7lE0n | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/bjoKC / W7lE0n/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/VFvrR / W7lE0n/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search people"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/Bi3Oq / W7lE0n | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| W7lE0n/h7yLT / W7lE0n/Bi3Oq | text / Heading | {"name":"Heading","content":"WORKSPACE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| W7lE0n/wr1HS / W7lE0n/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/oUd2W / W7lE0n/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"network","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/Gy4RX / W7lE0n/wr1HS | text / Label | {"name":"Label","content":"Organization"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/A98xQ / W7lE0n/wr1HS | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| W7lE0n/r98DX / W7lE0n/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/o2KTfe / W7lE0n/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/DHPdR / W7lE0n/r98DX | text / Label | {"name":"Label","content":"Personnel"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/kvxW2 / W7lE0n/r98DX | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| W7lE0n/Z9t8jA / W7lE0n/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/O3OPw6 / W7lE0n/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"clipboard-check","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/EcutZ / W7lE0n/Z9t8jA | text / Label | {"name":"Label","content":"Assignments"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/aFxaX / W7lE0n/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/xQdsD / W7lE0n/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"kanban","library":"lucide","fill":"$op-nav-text"} |
| W7lE0n/z1e6sO / W7lE0n/aFxaX | text / Label | {"name":"Label","content":"Workflows"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| W7lE0n/rszAx / W7lE0n/aFxaX | text / Count | {"name":"Count","content":"2"} | {"x":208,"y":9,"enabled":false,"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| W7lE0n/ePSXn / W7lE0n/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/BSLwH / W7lE0n/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"briefcase","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/FrOSh / W7lE0n/ePSXn | text / Label | {"name":"Label","content":"Careers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/e76XGD / W7lE0n/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"x":0,"y":221,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/jBNNf / W7lE0n/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/l5SsD / W7lE0n/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/X3qjt / W7lE0n/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"x":0,"y":261,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/f1c2yw / W7lE0n/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/D6ei92 / W7lE0n/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/XcWKh / W7lE0n | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| W7lE0n/w2m1ZA / W7lE0n/XcWKh | text / Heading | {"name":"Heading","content":"TEMPLATES"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| W7lE0n/UlEfD / W7lE0n/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/Foaq0 / W7lE0n/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file-text","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/XpOhP / W7lE0n/UlEfD | text / Label | {"name":"Label","content":"Forms"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/lLJfZ / W7lE0n/UlEfD | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| W7lE0n/E7ULBO / W7lE0n/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/ucDWU / W7lE0n/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"message-square","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/k6qoaw / W7lE0n/E7ULBO | text / Label | {"name":"Label","content":"Messages"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/lCE61 / W7lE0n/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| W7lE0n/VSXP9 / W7lE0n/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/ESrDf / W7lE0n/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"files","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/G5QrjH / W7lE0n/VSXP9 | text / Label | {"name":"Label","content":"Documents"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/eSee9 / W7lE0n/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"x":0,"y":141,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/DMNjp / W7lE0n/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/Mjfq1 / W7lE0n/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| W7lE0n/sWYLg / W7lE0n | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| W7lE0n/z3f4jF / W7lE0n | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| W7lE0n/qyaB8 / W7lE0n/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| W7lE0n/S49k6J / W7lE0n/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
