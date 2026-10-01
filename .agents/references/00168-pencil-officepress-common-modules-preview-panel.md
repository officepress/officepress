# OfficePress Common Modules / Section · Message templates / Screens / Shot · Template editor · Order Processing Dispatch update / Template editor · Order Processing Dispatch update / Main / Body / Split / Preview Panel

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| x0Kxx / UNzAL | frame / Preview Panel | {"name":"Preview Panel"} | {"width":380,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":20} |
| ePPii / x0Kxx | text / L | {"name":"L","content":"INPUT VALUES"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| FNTAe / x0Kxx | text / T | {"name":"T","content":"Sample values"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| huolY / x0Kxx | frame / Val customer.firstName | {"name":"Val customer.firstName"} | {"width":"fill_container","layout":"vertical","gap":4} |
| GtqdK / huolY | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"space_between"} |
| Bvz2K / GtqdK | text / K | {"name":"K","content":"customer.firstName"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"700"} |
| t2C5Y0 / GtqdK | text / T | {"name":"T","content":"Automatic"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| vn6OO / huolY | frame / Input | {"name":"Input"} | {"width":"fill_container","height":34,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| Q1Soz / vn6OO | text / V | {"name":"V","content":"Lina"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Y5tWH / x0Kxx | frame / Val order.number | {"name":"Val order.number"} | {"width":"fill_container","layout":"vertical","gap":4} |
| jiZcq / Y5tWH | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"space_between"} |
| HUmLr / jiZcq | text / K | {"name":"K","content":"order.number"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"700"} |
| pdZfm / jiZcq | text / T | {"name":"T","content":"Automatic"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| I8qtJ / Y5tWH | frame / Input | {"name":"Input"} | {"width":"fill_container","height":34,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| bZC7S / I8qtJ | text / V | {"name":"V","content":"ORD-24088"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| xM4wf / x0Kxx | frame / Val shipment.carrier | {"name":"Val shipment.carrier"} | {"width":"fill_container","layout":"vertical","gap":4} |
| E6XyKV / xM4wf | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"space_between"} |
| xrjGK / E6XyKV | text / K | {"name":"K","content":"shipment.carrier"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"700"} |
| i4Ux8N / E6XyKV | text / T | {"name":"T","content":"Automatic"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| pvQN8 / xM4wf | frame / Input | {"name":"Input"} | {"width":"fill_container","height":34,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| WvxIq / pvQN8 | text / V | {"name":"V","content":"LBC Express"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| G9gF3W / x0Kxx | frame / Val shipment.trackingNumber | {"name":"Val shipment.trackingNumber"} | {"width":"fill_container","layout":"vertical","gap":4} |
| YFyMl / G9gF3W | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"space_between"} |
| mOH4Z / YFyMl | text / K | {"name":"K","content":"shipment.trackingNumber"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"700"} |
| sj2AZ / YFyMl | text / T | {"name":"T","content":"Automatic"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| gss38 / G9gF3W | frame / Input | {"name":"Input"} | {"width":"fill_container","height":34,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| y80v4V / gss38 | text / V | {"name":"V","content":"LBC 7781 2290"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| sL42O / x0Kxx | frame / Val delivery_window | {"name":"Val delivery_window"} | {"width":"fill_container","layout":"vertical","gap":4} |
| U0hWI / sL42O | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"space_between"} |
| ALkQg / U0hWI | text / K | {"name":"K","content":"delivery_window"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"700"} |
| wGivU / U0hWI | text / T | {"name":"T","content":"Custom"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Aa3Hd / sL42O | frame / Input | {"name":"Input"} | {"width":"fill_container","height":34,"cornerRadius":4,"stroke":"$op-accent","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| RB1il / Aa3Hd | text / V | {"name":"V","content":"Thu, 1–5 PM"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| pPFzh / x0Kxx | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| C9PJel / x0Kxx | text / L | {"name":"L","content":"PREVIEW"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| Ufozw / x0Kxx | text / T | {"name":"T","content":"Resolved message · WhatsApp"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| y4GVo / x0Kxx | frame / Chat Preview | {"name":"Chat Preview"} | {"width":"fill_container","fill":"#E9E3DA","cornerRadius":12,"layout":"vertical","gap":4,"padding":12} |
| M9V5l7 / y4GVo | frame / Bubble | {"name":"Bubble"} | {"width":290,"fill":"#FFFFFF","cornerRadius":[4,12,12,12],"effect":{"type":"shadow","shadowType":"outer","color":"#0000001A","offset":{"x":0,"y":1},"blur":1},"layout":"vertical","gap":4,"padding":12} |
| bSWq9 / M9V5l7 | text / T | {"name":"T","content":"Hi Lina, your order ORD-24088 is on its way!\n🚚 Carrier: LBC Express\n📦 Tracking: LBC 7781 2290\nExpected delivery: Thu, 1–5 PM\nReply STOP to opt out."} | {"fill":"#15171C","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| mT6tP / M9V5l7 | text / Time | {"name":"Time","content":"10:42"} | {"fill":"#6A6D75","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"right","fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| orcQz / x0Kxx | frame / Check | {"name":"Check"} | {"gap":8,"alignItems":"center"} |
| YfuRY / orcQz | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| BS2Gr / orcQz | text / T | {"name":"T","content":"All 5 variables resolved"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| AW9yd / b6upA8 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| WC5P9 / AW9yd | text / Label | {"name":"Label","content":"Template editor · Order Processing Dispatch update"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| DgzHl / AW9yd | text / Note | {"name":"Note","content":"Channel decides the editor: Email gets subject + rich text, chat channels get plain text with a character counter. The preview on the right resolves every variable with sample values, in the shape of the chosen channel."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| dmQaD / fgzpp | frame / Section · Chat view | {"name":"Section · Chat view"} | {"width":"fill_container","layout":"vertical","gap":28} |
| uNInt / dmQaD | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| yKroQ / uNInt | text / Title | {"name":"Title","content":"Chat view"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| j7gk2G / uNInt | text / Desc | {"name":"Desc","content":"Conversation list, thread and details side by side. Any channel (Email, WhatsApp, Messenger, Viber) renders as the same thread. Replies can insert message templates; internal notes stay with the team. Ticket Tracker uses the details panel; Inbox's Messenger mode uses the list and thread only."} | {"fill":"$muted","textGrowth":"fixed-width","width":1100,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| WYOjK / dmQaD | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| DvXjt / WYOjK | frame / Shot · Chat · Ticket Tracker #2042 | {"name":"Shot · Chat · Ticket Tracker #2042"} | {"layout":"vertical","gap":14} |
| rdxHe / DvXjt | frame / Chat · Ticket Tracker #2042 | {"name":"Chat · Ticket Tracker #2042","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":1120,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| m9tMbY / rdxHe | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"communicate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| m9tMbY/e8Mh51 / m9tMbY | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| m9tMbY/wa3fh / m9tMbY/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| m9tMbY/qSLZP / m9tMbY/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"life-buoy","library":"lucide","fill":"#FFFFFF"} |
| m9tMbY/wGkoP / m9tMbY/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Support"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| m9tMbY/RypvX / m9tMbY/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| m9tMbY/hMZlj / m9tMbY/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/DMxFL / m9tMbY | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/bjoKC / m9tMbY/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/VFvrR / m9tMbY/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search tickets"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/Bi3Oq / m9tMbY | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| m9tMbY/h7yLT / m9tMbY/Bi3Oq | text / Heading | {"name":"Heading","content":"WORKSPACE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| m9tMbY/wr1HS / m9tMbY/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/oUd2W / m9tMbY/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/Gy4RX / m9tMbY/wr1HS | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/A98xQ / m9tMbY/wr1HS | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| m9tMbY/r98DX / m9tMbY/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/o2KTfe / m9tMbY/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"messages-square","library":"lucide","fill":"$op-nav-text"} |
| m9tMbY/DHPdR / m9tMbY/r98DX | text / Label | {"name":"Label","content":"Chat"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| m9tMbY/kvxW2 / m9tMbY/r98DX | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| m9tMbY/Z9t8jA / m9tMbY/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/O3OPw6 / m9tMbY/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"kanban","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/EcutZ / m9tMbY/Z9t8jA | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/aFxaX / m9tMbY/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/xQdsD / m9tMbY/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"contact","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/z1e6sO / m9tMbY/aFxaX | text / Label | {"name":"Label","content":"Customers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/rszAx / m9tMbY/aFxaX | text / Count | {"name":"Count","content":"2"} | {"x":208,"y":9,"enabled":false,"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| m9tMbY/ePSXn / m9tMbY/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/BSLwH / m9tMbY/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"eye","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/FrOSh / m9tMbY/ePSXn | text / Label | {"name":"Label","content":"Views"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/e76XGD / m9tMbY/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"x":0,"y":221,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/jBNNf / m9tMbY/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/l5SsD / m9tMbY/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/X3qjt / m9tMbY/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"x":0,"y":261,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/f1c2yw / m9tMbY/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/D6ei92 / m9tMbY/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/XcWKh / m9tMbY | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| m9tMbY/w2m1ZA / m9tMbY/XcWKh | text / Heading | {"name":"Heading","content":"ADMIN"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| m9tMbY/UlEfD / m9tMbY/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/Foaq0 / m9tMbY/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"building-2","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/XpOhP / m9tMbY/UlEfD | text / Label | {"name":"Label","content":"Departments"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/lLJfZ / m9tMbY/UlEfD | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| m9tMbY/E7ULBO / m9tMbY/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/ucDWU / m9tMbY/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/k6qoaw / m9tMbY/E7ULBO | text / Label | {"name":"Label","content":"Agents"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/lCE61 / m9tMbY/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| m9tMbY/VSXP9 / m9tMbY/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/ESrDf / m9tMbY/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"zap","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/G5QrjH / m9tMbY/VSXP9 | text / Label | {"name":"Label","content":"Automation"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/eSee9 / m9tMbY/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"x":0,"y":141,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/DMNjp / m9tMbY/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/Mjfq1 / m9tMbY/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m9tMbY/sWYLg / m9tMbY | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| m9tMbY/z3f4jF / m9tMbY | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| m9tMbY/qyaB8 / m9tMbY/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| m9tMbY/S49k6J / m9tMbY/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
