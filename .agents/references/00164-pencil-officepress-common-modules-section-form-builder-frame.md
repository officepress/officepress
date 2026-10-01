# OfficePress Common Modules / Section · Form builder — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| gUM8f / fgzpp | frame / Section · Form builder | {"name":"Section · Form builder"} | {"width":"fill_container","layout":"vertical","gap":28} |
| noUEz / gUM8f | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| FrS85 / noUEz | text / Title | {"name":"Title","content":"Form builder"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| yidIb / noUEz | text / Desc | {"name":"Desc","content":"One ordered question list with an outline and a settings panel. Stable field names keep responses consistent across edits. Forms can be required by workflow stages and triggered by automations. Seen in HRIS."} | {"fill":"$muted","textGrowth":"fixed-width","width":1100,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| i15Hyn / gUM8f | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| xpSAw / i15Hyn | frame / Shot · Form builder · HRIS New hire information | {"name":"Shot · Form builder · HRIS New hire information"} | {"layout":"vertical","gap":14} |
| s6pnF / xpSAw | frame / Form builder · HRIS New hire information | {"name":"Form builder · HRIS New hire information","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":1160,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| u2Aw9 / s6pnF | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"operate"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| u2Aw9/e8Mh51 / u2Aw9 | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u2Aw9/wa3fh / u2Aw9/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| u2Aw9/qSLZP / u2Aw9/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| u2Aw9/wGkoP / u2Aw9/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Resourcing"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| u2Aw9/RypvX / u2Aw9/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| u2Aw9/hMZlj / u2Aw9/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/DMxFL / u2Aw9 | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/bjoKC / u2Aw9/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/VFvrR / u2Aw9/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search people"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/Bi3Oq / u2Aw9 | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| u2Aw9/h7yLT / u2Aw9/Bi3Oq | text / Heading | {"name":"Heading","content":"WORKSPACE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| u2Aw9/wr1HS / u2Aw9/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/oUd2W / u2Aw9/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"network","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/Gy4RX / u2Aw9/wr1HS | text / Label | {"name":"Label","content":"Organization"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/A98xQ / u2Aw9/wr1HS | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| u2Aw9/r98DX / u2Aw9/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/o2KTfe / u2Aw9/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/DHPdR / u2Aw9/r98DX | text / Label | {"name":"Label","content":"Personnel"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/kvxW2 / u2Aw9/r98DX | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| u2Aw9/Z9t8jA / u2Aw9/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/O3OPw6 / u2Aw9/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"clipboard-check","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/EcutZ / u2Aw9/Z9t8jA | text / Label | {"name":"Label","content":"Assignments"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/aFxaX / u2Aw9/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/xQdsD / u2Aw9/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"kanban","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/z1e6sO / u2Aw9/aFxaX | text / Label | {"name":"Label","content":"Workflows"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/rszAx / u2Aw9/aFxaX | text / Count | {"name":"Count","content":"2"} | {"x":208,"y":9,"enabled":false,"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| u2Aw9/ePSXn / u2Aw9/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/BSLwH / u2Aw9/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"briefcase","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/FrOSh / u2Aw9/ePSXn | text / Label | {"name":"Label","content":"Careers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/e76XGD / u2Aw9/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"x":0,"y":221,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/jBNNf / u2Aw9/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/l5SsD / u2Aw9/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/X3qjt / u2Aw9/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"x":0,"y":261,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/f1c2yw / u2Aw9/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/D6ei92 / u2Aw9/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/XcWKh / u2Aw9 | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| u2Aw9/w2m1ZA / u2Aw9/XcWKh | text / Heading | {"name":"Heading","content":"TEMPLATES"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| u2Aw9/UlEfD / u2Aw9/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/Foaq0 / u2Aw9/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file-text","library":"lucide","fill":"$op-nav-text"} |
| u2Aw9/XpOhP / u2Aw9/UlEfD | text / Label | {"name":"Label","content":"Forms"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| u2Aw9/lLJfZ / u2Aw9/UlEfD | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| u2Aw9/E7ULBO / u2Aw9/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/ucDWU / u2Aw9/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"message-square","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/k6qoaw / u2Aw9/E7ULBO | text / Label | {"name":"Label","content":"Messages"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/lCE61 / u2Aw9/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| u2Aw9/VSXP9 / u2Aw9/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/ESrDf / u2Aw9/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"files","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/G5QrjH / u2Aw9/VSXP9 | text / Label | {"name":"Label","content":"Documents"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/eSee9 / u2Aw9/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"x":0,"y":141,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/DMNjp / u2Aw9/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"tag","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/Mjfq1 / u2Aw9/eSee9 | text / Label | {"name":"Label","content":"Press schedule"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u2Aw9/sWYLg / u2Aw9 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| u2Aw9/z3f4jF / u2Aw9 | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| u2Aw9/qyaB8 / u2Aw9/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| u2Aw9/S49k6J / u2Aw9/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| DYfsw / s6pnF | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| M5oXWJ / DYfsw | frame / Header | {"name":"Header","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| M5oXWJ/NL2v5 / M5oXWJ | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| M5oXWJ/v0pIr4 / M5oXWJ/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| M5oXWJ/E8PtZC / M5oXWJ | text / Page Title | {"name":"Page Title","content":"New hire information"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| M5oXWJ/G3t23s / M5oXWJ | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| M5oXWJ/dtuXO / M5oXWJ | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| M5oXWJ/H5cU4B / M5oXWJ/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| M5oXWJ/I7kF1e / M5oXWJ/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| M5oXWJ/vQMp0 / M5oXWJ/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| M5oXWJ/qS8da / M5oXWJ/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| M5oXWJ/f6Nm4U / M5oXWJ | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| M5oXWJ/BTxZN / M5oXWJ | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| M5oXWJ/fawPG / M5oXWJ/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| M5oXWJ/MT9A7 / M5oXWJ/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| M5oXWJ/SkOaY / M5oXWJ/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| M5oXWJ/XGyoO / M5oXWJ/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| M5oXWJ/C5tCn / M5oXWJ/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| M5oXWJ/szMHy / M5oXWJ/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| M5oXWJ/K5uDK / M5oXWJ/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| M5oXWJ/I60pf / M5oXWJ/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| M5oXWJ/h47xa8 / M5oXWJ/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| ek9xn / DYfsw | frame / Form Bar | {"name":"Form Bar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[8,16],"alignItems":"center"} |
| Th5QV / ek9xn | frame / Tabs | {"name":"Tabs"} | {"gap":4} |
| BZf7s / Th5QV | frame / Tab Build | {"name":"Tab Build"} | {"height":32,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| x7ntf / BZf7s | text / L | {"name":"L","content":"Build"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| c5nFZ / Th5QV | frame / Tab Preview | {"name":"Tab Preview"} | {"height":32,"cornerRadius":4,"gap":4,"padding":[0,12],"alignItems":"center"} |
| hmfSC / c5nFZ | text / L | {"name":"L","content":"Preview"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| FcghH / Th5QV | frame / Tab Responses | {"name":"Tab Responses"} | {"height":32,"cornerRadius":4,"gap":4,"padding":[0,12],"alignItems":"center"} |
| NAuMX / FcghH | text / L | {"name":"L","content":"Responses"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| I1IgH / FcghH | frame / C | {"name":"C"} | {"height":18,"fill":"$op-tint","cornerRadius":999,"padding":[0,8],"alignItems":"center"} |
| Y6oQT / I1IgH | text / N | {"name":"N","content":"12"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| LKv2Q / Th5QV | frame / Tab Share | {"name":"Tab Share"} | {"height":32,"cornerRadius":4,"gap":4,"padding":[0,12],"alignItems":"center"} |
| yFkMY / LKv2Q | text / L | {"name":"L","content":"Share"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| d9Mc2X / ek9xn | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| gOutA / ek9xn | frame / Saved | {"name":"Saved"} | {"gap":4,"alignItems":"center"} |
| OwEH0 / gOutA | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"cloud-check","library":"lucide","fill":"$op-text-2"} |
| m2IMv5 / gOutA | text / L | {"name":"L","content":"Saved · 10:42"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RnP2D / ek9xn | frame / Button · Preview | {"name":"Button · Preview"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| VbGRy / RnP2D | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text"} |
| A0pAx / RnP2D | text / Label | {"name":"Label","content":"Preview"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q9vi1 / ek9xn | frame / Button · Save | {"name":"Button · Save"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| L3cRja / Q9vi1 | text / Label | {"name":"Label","content":"Save"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ps7OO / ek9xn | frame / Button · Publish | {"name":"Button · Publish"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| rPB2W / ps7OO | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"send","library":"lucide","fill":"$op-on-accent"} |
| JPdaS / ps7OO | text / Label | {"name":"Label","content":"Publish"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ELHCS / DYfsw | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas"} |
| n6gPFq / ELHCS | frame / Outline | {"name":"Outline"} | {"width":240,"height":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"right":1},"layout":"vertical","gap":4,"padding":16} |
| CTS8i / n6gPFq | frame / Head | {"name":"Head"} | {"width":"fill_container","padding":[0,0,8,0],"alignItems":"center"} |
| scnLg / CTS8i | text / L | {"name":"L","content":"OUTLINE"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| F3LHf / CTS8i | text / N | {"name":"N","content":"6"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| z8Myh / n6gPFq | frame / Outline 1 | {"name":"Outline 1"} | {"width":"fill_container","height":36,"fill":"$op-tint","cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| CXWXu / z8Myh | frame / No | {"name":"No"} | {"width":20,"height":20,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| uO9I7 / CXWXu | text / N | {"name":"N","content":"1"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| jdzmx / z8Myh | text / T | {"name":"T","content":"Preferred name"} | {"fill":"$op-on-tint","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ygJ7O / n6gPFq | frame / Outline 2 | {"name":"Outline 2"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| LkRaD / ygJ7O | frame / No | {"name":"No"} | {"width":20,"height":20,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| pINrj / LkRaD | text / N | {"name":"N","content":"2"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| r6xad / ygJ7O | text / T | {"name":"T","content":"Pronouns"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Y3oeyG / n6gPFq | frame / Outline 3 | {"name":"Outline 3"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| LzKNK / Y3oeyG | frame / No | {"name":"No"} | {"width":20,"height":20,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| kqTuW / LzKNK | text / N | {"name":"N","content":"3"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ylnbT / Y3oeyG | text / T | {"name":"T","content":"Preferred work arrangement"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| r48he1 / n6gPFq | frame / Outline 4 | {"name":"Outline 4"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| Weyu6 / r48he1 | frame / No | {"name":"No"} | {"width":20,"height":20,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| XkhS8 / Weyu6 | text / N | {"name":"N","content":"4"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ZSvtF / r48he1 | text / T | {"name":"T","content":"Available start date"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| fNA8b / n6gPFq | frame / Outline 5 | {"name":"Outline 5"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| uVchh / fNA8b | frame / No | {"name":"No"} | {"width":20,"height":20,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| l5DNkR / uVchh | text / N | {"name":"N","content":"5"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ByaGw / fNA8b | text / T | {"name":"T","content":"Government ID or passport"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| xQzHQ / n6gPFq | frame / Outline 6 | {"name":"Outline 6"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| jgsGO / xQzHQ | frame / No | {"name":"No"} | {"width":20,"height":20,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| GdWWw / jgsGO | text / N | {"name":"N","content":"6"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| StSaS / xQzHQ | text / T | {"name":"T","content":"Anything People Ops should know?"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
