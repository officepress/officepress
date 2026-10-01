# OfficePress Common Modules / Section · Form builder / Screens / Shot · Form builder · HRIS New hire information / Form builder · HRIS New hire information / Main / Body / Settings

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| Rellu / ELHCS | frame / Settings | {"name":"Settings"} | {"width":320,"height":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"layout":"vertical","gap":16,"padding":20} |
| LZ3wj / Rellu | frame / Head | {"name":"Head"} | {"width":"fill_container","layout":"vertical","gap":4} |
| v4SmOV / LZ3wj | text / L | {"name":"L","content":"SELECTED QUESTION"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| oEwTo / LZ3wj | text / T | {"name":"T","content":"Question settings"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| VcQ6t / Rellu | frame / Field · Question | {"name":"Field · Question"} | {"width":"fill_container","layout":"vertical","gap":4} |
| K96rA / VcQ6t | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Z2oTQL / K96rA | text / Label | {"name":"Label","content":"Question"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ebgt2 / VcQ6t | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| c4W5z / ebgt2 | text / Value | {"name":"Value","content":"Preferred name"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Yktbr / Rellu | frame / Field · Field name | {"name":"Field · Field name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| MKNO6 / Yktbr | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| EGPug / MKNO6 | text / Label | {"name":"Label","content":"Field name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| QmzRl / Yktbr | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| XrqYu / QmzRl | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"braces","library":"lucide","fill":"$op-text-2"} |
| kPiWn / QmzRl | text / Value | {"name":"Value","content":"preferredName"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| skYRx / Yktbr | text / Hint | {"name":"Hint","content":"Stable name stored with responses."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| gVICG / Rellu | frame / Field · Answer type | {"name":"Field · Answer type"} | {"width":"fill_container","layout":"vertical","gap":4} |
| kdxMX / gVICG | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Tp61K / kdxMX | text / Label | {"name":"Label","content":"Answer type"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ktVry / gVICG | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| ApvPG / ktVry | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"text-cursor-input","library":"lucide","fill":"$op-text-2"} |
| W8z4t / ktVry | text / Value | {"name":"Value","content":"Short answer"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| w66odf / ktVry | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| BFSnI / Rellu | frame / Field · Help text | {"name":"Field · Help text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| wuXP5 / BFSnI | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| z1MVLz / wuXP5 | text / Label | {"name":"Label","content":"Help text"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| X2vdBi / BFSnI | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| KoPKO / X2vdBi | text / Value | {"name":"Value","content":"Optional guidance under the question"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| JfqEg / Rellu | frame / Field · Placeholder | {"name":"Field · Placeholder"} | {"width":"fill_container","layout":"vertical","gap":4} |
| RLthM / JfqEg | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| FFQKJ / RLthM | text / Label | {"name":"Label","content":"Placeholder"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| JJpvK / JfqEg | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| X9umH / JJpvK | text / Value | {"name":"Value","content":"Name you would like us to use"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| BMf02 / Rellu | frame / Required | {"name":"Required"} | {"width":"fill_container","alignItems":"center"} |
| B8A7i / BMf02 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| G8EEoA / B8A7i | text / T | {"name":"T","content":"Required"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| rJoos / B8A7i | text / D | {"name":"D","content":"Respondents must answer before submitting."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| l0ROrJ / BMf02 | frame / Switch | {"name":"Switch"} | {"gap":8,"alignItems":"center"} |
| IEGdu / l0ROrJ | frame / Track | {"name":"Track"} | {"width":36,"height":20,"fill":"$op-accent-strong","cornerRadius":999,"layout":"none"} |
| NfQxu / IEGdu | ellipse / Knob | {"name":"Knob"} | {"x":18,"y":2,"fill":"#FFFFFF","width":16,"height":16} |
| DrEvS / l0ROrJ | text / L | {"name":"L"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| gXSoU / Rellu | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| VsDHh / Rellu | frame / Buttons | {"name":"Buttons"} | {"width":"fill_container","gap":8} |
| KV4Yj / VsDHh | frame / Button · Duplicate | {"name":"Button · Duplicate"} | {"width":"fill_container","height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"justifyContent":"center","alignItems":"center"} |
| ohLZs / KV4Yj | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"copy","library":"lucide","fill":"$op-text"} |
| TPCji / KV4Yj | text / Label | {"name":"Label","content":"Duplicate"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| V5Fkbe / VsDHh | frame / Button · Delete | {"name":"Button · Delete"} | {"width":"fill_container","height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-danger","strokeWidth":1,"gap":8,"padding":[0,12],"justifyContent":"center","alignItems":"center"} |
| e2MWl / V5Fkbe | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"trash-2","library":"lucide","fill":"$op-danger"} |
| Miegj / V5Fkbe | text / Label | {"name":"Label","content":"Delete"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| e193vr / xpSAw | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| jvERk / e193vr | text / Label | {"name":"Label","content":"Form builder · HRIS New hire information"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| Z87nv / e193vr | text / Note | {"name":"Note","content":"Outline left, questions centre, selected question right. Drag or use move up/down; duplicate from the card. Status and publish live in the top strip; Responses and Share are tabs, not separate pages."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| uwsMe / fgzpp | frame / Section · Message templates | {"name":"Section · Message templates"} | {"width":"fill_container","layout":"vertical","gap":28} |
| DFTyB / uwsMe | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| skrFx / DFTyB | text / Title | {"name":"Title","content":"Message templates"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| mG5n3 / DFTyB | text / Desc | {"name":"Desc","content":"Reusable content with {{mustache}} variables. Variables are detected from the text, marked Automatic (filled from the record) or Custom (asked for at send time), and verified in a resolved preview before sending. HRIS uses email; Order Processing adds SMS, WhatsApp, Messenger and Viber."} | {"fill":"$muted","textGrowth":"fixed-width","width":1100,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| fiyw0 / uwsMe | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| b6upA8 / fiyw0 | frame / Shot · Template editor · Order Processing Dispatch update | {"name":"Shot · Template editor · Order Processing Dispatch update"} | {"layout":"vertical","gap":14} |
| MovR1 / b6upA8 | frame / Template editor · Order Processing Dispatch update | {"name":"Template editor · Order Processing Dispatch update","theme":{"mode":"light","family":"commerce"}} | {"clip":true,"width":1440,"height":1235,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| CEl6y / MovR1 | frame / Sidebar | {"name":"Sidebar","theme":{"mode":"light","family":"commerce"}} | {"width":260,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":16,"padding":16} |
| CEl6y/e8Mh51 / CEl6y | frame / Brand | {"name":"Brand"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| CEl6y/wa3fh / CEl6y/e8Mh51 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| CEl6y/qSLZP / CEl6y/wa3fh | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"package","library":"lucide","fill":"#FFFFFF"} |
| CEl6y/wGkoP / CEl6y/e8Mh51 | text / Brand Name | {"name":"Brand Name","content":"Order Processing"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| CEl6y/RypvX / CEl6y/e8Mh51 | frame / Collapse | {"name":"Collapse"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| CEl6y/hMZlj / CEl6y/RypvX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-close","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/DMxFL / CEl6y | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| CEl6y/bjoKC / CEl6y/DMxFL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/VFvrR / CEl6y/DMxFL | text / Placeholder | {"name":"Placeholder","content":"Search orders"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/Bi3Oq / CEl6y | frame / Section ON THIS DEVICE | {"name":"Section ON THIS DEVICE"} | {"width":"fill_container","layout":"vertical","gap":4} |
| CEl6y/h7yLT / CEl6y/Bi3Oq | text / Heading | {"name":"Heading","content":"OPERATIONS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| CEl6y/wr1HS / CEl6y/Bi3Oq | frame / Nav Inbox | {"name":"Nav Inbox"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/oUd2W / CEl6y/wr1HS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"package","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/Gy4RX / CEl6y/wr1HS | text / Label | {"name":"Label","content":"Orders"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/A98xQ / CEl6y/wr1HS | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| CEl6y/r98DX / CEl6y/Bi3Oq | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/o2KTfe / CEl6y/r98DX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"kanban","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/DHPdR / CEl6y/r98DX | text / Label | {"name":"Label","content":"Workflows"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/kvxW2 / CEl6y/r98DX | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| CEl6y/Z9t8jA / CEl6y/Bi3Oq | frame / Nav Sent | {"name":"Nav Sent"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/O3OPw6 / CEl6y/Z9t8jA | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"contact","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/EcutZ / CEl6y/Z9t8jA | text / Label | {"name":"Label","content":"Customers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/aFxaX / CEl6y/Bi3Oq | frame / Nav Drafts | {"name":"Nav Drafts"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/xQdsD / CEl6y/aFxaX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/z1e6sO / CEl6y/aFxaX | text / Label | {"name":"Label","content":"Users"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/rszAx / CEl6y/aFxaX | text / Count | {"name":"Count","content":"2"} | {"x":208,"y":9,"enabled":false,"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| CEl6y/ePSXn / CEl6y/Bi3Oq | frame / Nav Archive | {"name":"Nav Archive"} | {"x":0,"y":181,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/BSLwH / CEl6y/ePSXn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/FrOSh / CEl6y/ePSXn | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/e76XGD / CEl6y/Bi3Oq | frame / Nav Spam | {"name":"Nav Spam"} | {"x":0,"y":221,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/jBNNf / CEl6y/e76XGD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/l5SsD / CEl6y/e76XGD | text / Label | {"name":"Label","content":"Spam"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/X3qjt / CEl6y/Bi3Oq | frame / Nav All Mail | {"name":"Nav All Mail"} | {"x":0,"y":261,"enabled":false,"width":"fill_container(228)","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/f1c2yw / CEl6y/X3qjt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/D6ei92 / CEl6y/X3qjt | text / Label | {"name":"Label","content":"All Mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/XcWKh / CEl6y | frame / Section FILTERS | {"name":"Section FILTERS"} | {"width":"fill_container","layout":"vertical","gap":4} |
| CEl6y/w2m1ZA / CEl6y/XcWKh | text / Heading | {"name":"Heading","content":"TEMPLATES"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| CEl6y/UlEfD / CEl6y/XcWKh | frame / Nav Suppliers | {"name":"Nav Suppliers"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/Foaq0 / CEl6y/UlEfD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"list-checks","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/XpOhP / CEl6y/UlEfD | text / Label | {"name":"Label","content":"Dispositions"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/lLJfZ / CEl6y/UlEfD | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| CEl6y/E7ULBO / CEl6y/XcWKh | frame / Nav Invoices | {"name":"Nav Invoices"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/ucDWU / CEl6y/E7ULBO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"message-square","library":"lucide","fill":"$op-nav-text"} |
| CEl6y/k6qoaw / CEl6y/E7ULBO | text / Label | {"name":"Label","content":"Messages"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| CEl6y/lCE61 / CEl6y/E7ULBO | ellipse / Dot | {"name":"Dot"} | {"x":208,"y":14,"enabled":false,"fill":"$op-nav-dot","width":8,"height":8} |
| CEl6y/VSXP9 / CEl6y/XcWKh | frame / Nav Warehouse move | {"name":"Nav Warehouse move"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/ESrDf / CEl6y/VSXP9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"plug","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/G5QrjH / CEl6y/VSXP9 | text / Label | {"name":"Label","content":"Channels"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/eSee9 / CEl6y/XcWKh | frame / Nav Press schedule | {"name":"Nav Press schedule"} | {"width":"fill_container","height":36,"fill":"#00000000","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/DMNjp / CEl6y/eSee9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"truck","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/Mjfq1 / CEl6y/eSee9 | text / Label | {"name":"Label","content":"Providers"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CEl6y/sWYLg / CEl6y | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":"fill_container"} |
| CEl6y/z3f4jF / CEl6y | frame / Help | {"name":"Help"} | {"width":"fill_container","height":36,"gap":12,"padding":[0,12],"alignItems":"center"} |
| CEl6y/qyaB8 / CEl6y/z3f4jF | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
| CEl6y/S49k6J / CEl6y/z3f4jF | text / Label | {"name":"Label","content":"Help &amp; feedback"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| cgYNL / MovR1 | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| nbOn4 / cgYNL | frame / Header | {"name":"Header","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| nbOn4/NL2v5 / nbOn4 | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| nbOn4/v0pIr4 / nbOn4/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| nbOn4/E8PtZC / nbOn4 | text / Page Title | {"name":"Page Title","content":"Dispatch update"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| nbOn4/G3t23s / nbOn4 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| nbOn4/dtuXO / nbOn4 | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| nbOn4/H5cU4B / nbOn4/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| nbOn4/I7kF1e / nbOn4/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| nbOn4/vQMp0 / nbOn4/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| nbOn4/qS8da / nbOn4/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| nbOn4/f6Nm4U / nbOn4 | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| nbOn4/BTxZN / nbOn4 | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| nbOn4/fawPG / nbOn4/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| nbOn4/MT9A7 / nbOn4/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| nbOn4/SkOaY / nbOn4/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| nbOn4/XGyoO / nbOn4/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nbOn4/C5tCn / nbOn4/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| nbOn4/szMHy / nbOn4/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nbOn4/K5uDK / nbOn4/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| nbOn4/I60pf / nbOn4/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nbOn4/h47xa8 / nbOn4/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
