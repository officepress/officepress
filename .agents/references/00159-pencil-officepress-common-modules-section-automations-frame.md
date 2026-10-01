# OfficePress Common Modules / Section · Automations — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| aAYac / fgzpp | frame / Section · Automations | {"name":"Section · Automations"} | {"width":"fill_container","layout":"vertical","gap":28} |
| z5hPb / aAYac | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| BYhRl / z5hPb | text / Title | {"name":"Title","content":"Automations"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| R4fsXG / z5hPb | text / Desc | {"name":"Desc","content":"One rule format everywhere: trigger → conditions (all / any) → timing (now, delay, date or SLA) → ordered actions → run settings, with a plain-language summary and a live test. Inbox columns, HRIS stages, Order Processing stages and Ticket Tracker departments all use it."} | {"fill":"$muted","textGrowth":"fixed-width","width":1100,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| KcNTs / aAYac | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| lAhbj / KcNTs | frame / Shot · Automations list · HRIS Hiring | {"name":"Shot · Automations list · HRIS Hiring"} | {"layout":"vertical","gap":14} |
| Vz1Zt / lAhbj | frame / Automations list · HRIS Hiring | {"name":"Automations list · HRIS Hiring","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| tJlIc / Vz1Zt | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"operate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| tJlIc/e8Mh51 / tJlIc | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| tJlIc/wa3fh / tJlIc/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| tJlIc/qSLZP / tJlIc/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| tJlIc/wGkoP / tJlIc/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Resourcing"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| tJlIc/RypvX / tJlIc/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| tJlIc/hMZlj / tJlIc/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/DMxFL / tJlIc | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| tJlIc/bjoKC / tJlIc/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/VFvrR / tJlIc/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search people"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/Bi3Oq / tJlIc | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| tJlIc/h7yLT / tJlIc/Bi3Oq | text / Heading | {"name":"Heading","content":"WORKSPACE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| tJlIc/wr1HS / tJlIc/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/oUd2W / tJlIc/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"network","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/Gy4RX / tJlIc/wr1HS | text / Label | {"name":"Label","content":"Organization"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/A98xQ / tJlIc/wr1HS | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| tJlIc/r98DX / tJlIc/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/o2KTfe / tJlIc/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/DHPdR / tJlIc/r98DX | text / Label | {"name":"Label","content":"Personnel"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/kvxW2 / tJlIc/r98DX | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| tJlIc/Z9t8jA / tJlIc/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/O3OPw6 / tJlIc/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"clipboard-check","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/EcutZ / tJlIc/Z9t8jA | text / Label | {"name":"Label","content":"Assignments"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/aFxaX / tJlIc/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/xQdsD / tJlIc/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"kanban","library":"lucide","fill":"$op-nav-text"} |
| tJlIc/z1e6sO / tJlIc/aFxaX | text / Label | {"name":"Label","content":"Workflows"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| tJlIc/rszAx / tJlIc/aFxaX | text / Count | {"name":"Count","content":"2"} | {"x":208,"y":9,"enabled":false,"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| tJlIc/ePSXn / tJlIc/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/BSLwH / tJlIc/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"briefcase","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/FrOSh / tJlIc/ePSXn | text / Label | {"name":"Label","content":"Careers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/e76XGD / tJlIc/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"x":0,"y":221,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/jBNNf / tJlIc/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/l5SsD / tJlIc/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/X3qjt / tJlIc/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"x":0,"y":261,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/f1c2yw / tJlIc/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/D6ei92 / tJlIc/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/XcWKh / tJlIc | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| tJlIc/w2m1ZA / tJlIc/XcWKh | text / Heading | {"name":"Heading","content":"TEMPLATES"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| tJlIc/UlEfD / tJlIc/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/Foaq0 / tJlIc/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file-text","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/XpOhP / tJlIc/UlEfD | text / Label | {"name":"Label","content":"Forms"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/lLJfZ / tJlIc/UlEfD | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| tJlIc/E7ULBO / tJlIc/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/ucDWU / tJlIc/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"message-square","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/k6qoaw / tJlIc/E7ULBO | text / Label | {"name":"Label","content":"Messages"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/lCE61 / tJlIc/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| tJlIc/VSXP9 / tJlIc/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/ESrDf / tJlIc/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"files","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/G5QrjH / tJlIc/VSXP9 | text / Label | {"name":"Label","content":"Documents"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/eSee9 / tJlIc/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"x":0,"y":141,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/DMNjp / tJlIc/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/Mjfq1 / tJlIc/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tJlIc/sWYLg / tJlIc | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| tJlIc/z3f4jF / tJlIc | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| tJlIc/qyaB8 / tJlIc/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| tJlIc/S49k6J / tJlIc/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| B8lJU / Vz1Zt | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| qnIY5 / B8lJU | frame / Header | {"name":"Header","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| qnIY5/NL2v5 / qnIY5 | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| qnIY5/v0pIr4 / qnIY5/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| qnIY5/E8PtZC / qnIY5 | text / Page Title | {"name":"Page Title","content":"Automations"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| qnIY5/G3t23s / qnIY5 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| qnIY5/dtuXO / qnIY5 | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| qnIY5/H5cU4B / qnIY5/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| qnIY5/I7kF1e / qnIY5/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| qnIY5/vQMp0 / qnIY5/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| qnIY5/qS8da / qnIY5/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| qnIY5/f6Nm4U / qnIY5 | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| qnIY5/BTxZN / qnIY5 | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| qnIY5/fawPG / qnIY5/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| qnIY5/MT9A7 / qnIY5/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| qnIY5/SkOaY / qnIY5/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| qnIY5/XGyoO / qnIY5/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qnIY5/C5tCn / qnIY5/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| qnIY5/szMHy / qnIY5/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qnIY5/K5uDK / qnIY5/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| qnIY5/I60pf / qnIY5/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qnIY5/h47xa8 / qnIY5/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
