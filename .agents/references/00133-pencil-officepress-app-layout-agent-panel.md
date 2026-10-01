# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · Agent open / Desktop · Agent open / Main / Body / Agent Panel

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| RqxgF / Cwgex | frame / Agent Panel | {"name":"Agent Panel","theme":{"mode":"light","family":"communicate"}} | {"width":400,"height":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"layout":"vertical"} |
| RqxgF/Pnjbf / RqxgF | frame / Panel Header | {"name":"Panel Header"} | {"width":"fill_container","height":56,"stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12,0,16],"alignItems":"center"} |
| RqxgF/g2fLyZ / RqxgF/Pnjbf | frame / Agent Mark | {"name":"Agent Mark"} | {"width":28,"height":28,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| RqxgF/Y8Xa1l / RqxgF/g2fLyZ | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| RqxgF/ybeDU / RqxgF/Pnjbf | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical"} |
| RqxgF/gn6Sn / RqxgF/ybeDU | text / Name | {"name":"Name","content":"Inbox Agent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| RqxgF/P3xlUg / RqxgF/ybeDU | text / Status | {"name":"Status","content":"Can read and act on this board"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| RqxgF/Irpj8 / RqxgF/Pnjbf | frame / New chat | {"name":"New chat"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/cgC6u / RqxgF/Irpj8 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"square-pen","library":"lucide","fill":"$op-text-2"} |
| RqxgF/tR3at / RqxgF/Pnjbf | frame / History | {"name":"History"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/Ey7Gk / RqxgF/tR3at | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"history","library":"lucide","fill":"$op-text-2"} |
| RqxgF/FmqQS / RqxgF/Pnjbf | frame / Expand | {"name":"Expand"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/VwQoN / RqxgF/FmqQS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"maximize-2","library":"lucide","fill":"$op-text-2"} |
| RqxgF/AYBay / RqxgF/Pnjbf | frame / Close | {"name":"Close"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/c2Ngn / RqxgF/AYBay | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| RqxgF/VOfE3 / RqxgF | frame / Context Bar | {"name":"Context Bar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[12,16],"alignItems":"center"} |
| RqxgF/M1EQk / RqxgF/VOfE3 | text / Label | {"name":"Label","content":"CONTEXT"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| RqxgF/NvSaP / RqxgF/VOfE3 | frame / Context Chip | {"name":"Context Chip"} | {"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| RqxgF/smWfS / RqxgF/NvSaP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"layout-grid","library":"lucide","fill":"$op-accent-text"} |
| RqxgF/Cj8ja / RqxgF/NvSaP | text / T | {"name":"T","content":"Inbox board · 12 cards"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/mOFdK / RqxgF/NvSaP | icon / Remove | {"name":"Remove"} | {"width":12,"height":12,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| RqxgF/mo9Bm / RqxgF | frame / Thread | {"name":"Thread"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":16,"padding":16} |
| RqxgF/W0guM / RqxgF/mo9Bm | frame / User Message | {"name":"User Message"} | {"width":"fill_container","justifyContent":"end"} |
| RqxgF/r0ZZ7F / RqxgF/W0guM | frame / Bubble | {"name":"Bubble"} | {"width":300,"fill":"$op-tint","cornerRadius":[12,12,4,12],"padding":12} |
| RqxgF/jK74Y / RqxgF/r0ZZ7F | text / Text | {"name":"Text","content":"Archive everything from Mail Delivery Subsystem and remind me about the Northwind invoice tomorrow at 9."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RqxgF/j0M56u / RqxgF/mo9Bm | frame / Agent Message | {"name":"Agent Message"} | {"width":"fill_container","gap":8} |
| RqxgF/vibvi / RqxgF/j0M56u | frame / Mark | {"name":"Mark"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| RqxgF/lIDD6 / RqxgF/vibvi | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"bot","library":"lucide","fill":"$op-accent-text"} |
| RqxgF/HCOYc / RqxgF/j0M56u | text / Text | {"name":"Text","content":"Done. Here's what I changed on your board:"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RqxgF/P2Il7 / RqxgF/mo9Bm | frame / Action · ARCHIVE_CARDS | {"name":"Action · ARCHIVE_CARDS"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| RqxgF/jA60W / RqxgF/P2Il7 | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| RqxgF/D0GJT3 / RqxgF/jA60W | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"archive","library":"lucide","fill":"$op-text"} |
| RqxgF/jyEc4 / RqxgF/P2Il7 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| RqxgF/aO6FI / RqxgF/jyEc4 | text / Name | {"name":"Name","content":"ARCHIVE_CARDS"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.3} |
| RqxgF/ZiV2z / RqxgF/jyEc4 | text / Result | {"name":"Result","content":"1 card moved to Archive"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RqxgF/N1uqx / RqxgF/P2Il7 | frame / Status | {"name":"Status"} | {"gap":4,"alignItems":"center"} |
| RqxgF/iHOGz / RqxgF/N1uqx | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7} |
| RqxgF/Zivch / RqxgF/N1uqx | text / T | {"name":"T","content":"Done"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/esa9H / RqxgF/P2Il7 | text / Undo | {"name":"Undo","content":"Undo"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/Io00u / RqxgF/mo9Bm | frame / Action · CREATE_REMINDER | {"name":"Action · CREATE_REMINDER"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| RqxgF/BFEP9 / RqxgF/Io00u | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| RqxgF/TbQND / RqxgF/BFEP9 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"alarm-clock","library":"lucide","fill":"$op-text"} |
| RqxgF/EYWpE / RqxgF/Io00u | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| RqxgF/i09s2t / RqxgF/EYWpE | text / Name | {"name":"Name","content":"CREATE_REMINDER"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.3} |
| RqxgF/E6at50 / RqxgF/EYWpE | text / Result | {"name":"Result","content":"Invoice NW-4471 · Thu 09:00"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RqxgF/WMEtB / RqxgF/Io00u | frame / Status | {"name":"Status"} | {"gap":4,"alignItems":"center"} |
| RqxgF/bUlQi / RqxgF/WMEtB | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7} |
| RqxgF/mriG7 / RqxgF/WMEtB | text / T | {"name":"T","content":"Done"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/zVEu6 / RqxgF/Io00u | text / Undo | {"name":"Undo","content":"Undo"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/sbz9i / RqxgF/mo9Bm | frame / Agent Message | {"name":"Agent Message"} | {"width":"fill_container","gap":8} |
| RqxgF/YXE20 / RqxgF/sbz9i | frame / Mark | {"name":"Mark"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| RqxgF/Dw5Mo / RqxgF/YXE20 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"bot","library":"lucide","fill":"$op-accent-text"} |
| RqxgF/amtnJ / RqxgF/sbz9i | text / Text | {"name":"Text","content":"Northwind needs your sign-off before Friday. Want me to draft a reply to Ana confirming?"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RqxgF/y5wdn / RqxgF/mo9Bm | frame / Follow-ups | {"name":"Follow-ups"} | {"width":"fill_container","gap":8,"padding":[0,0,0,32]} |
| RqxgF/kpoWA / RqxgF/y5wdn | frame / Chip | {"name":"Chip"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| RqxgF/bWZrX / RqxgF/kpoWA | text / T | {"name":"T","content":"Draft the reply"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| RqxgF/xlvII / RqxgF/y5wdn | frame / Chip | {"name":"Chip"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| RqxgF/kZ0pp / RqxgF/xlvII | text / T | {"name":"T","content":"Show overdue follow-ups"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| RqxgF/gh6wr / RqxgF/mo9Bm | frame / User Message 2 | {"name":"User Message 2"} | {"width":"fill_container","justifyContent":"end"} |
| RqxgF/k30YC / RqxgF/gh6wr | frame / Bubble | {"name":"Bubble"} | {"fill":"$op-tint","cornerRadius":[12,12,4,12],"padding":12} |
| RqxgF/i8Qi3M / RqxgF/k30YC | text / Text | {"name":"Text","content":"Draft the reply"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RqxgF/pgd2W / RqxgF/mo9Bm | frame / Action · DRAFT_REPLY | {"name":"Action · DRAFT_REPLY"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| RqxgF/kCSSh / RqxgF/pgd2W | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| RqxgF/Cpm3n / RqxgF/kCSSh | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"pen-line","library":"lucide","fill":"$op-text"} |
| RqxgF/Lv38Q / RqxgF/pgd2W | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| RqxgF/OEfub / RqxgF/Lv38Q | text / Name | {"name":"Name","content":"DRAFT_REPLY"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.3} |
| RqxgF/L4ylX / RqxgF/Lv38Q | text / Result | {"name":"Result","content":"Writing to Ana Cruz…"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RqxgF/UBDs3 / RqxgF/pgd2W | frame / Status | {"name":"Status"} | {"gap":4,"alignItems":"center"} |
| RqxgF/Yckgp / RqxgF/UBDs3 | icon / Spinner | {"name":"Spinner"} | {"width":14,"height":14,"icon":"loader-circle","library":"lucide","fill":"$op-accent-text"} |
| RqxgF/oADVu / RqxgF/UBDs3 | text / T | {"name":"T","content":"Running"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/orKTu / RqxgF | frame / Composer Area | {"name":"Composer Area"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":[12,16,16,16]} |
| RqxgF/zYmR9 / RqxgF/orKTu | frame / Composer | {"name":"Composer"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border-strong","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#18244F0F","offset":{"x":0,"y":2},"blur":6},"layout":"vertical","gap":12,"padding":12} |
| RqxgF/IdiNV / RqxgF/zYmR9 | text / Placeholder | {"name":"Placeholder","content":"Ask the agent to do anything in Inbox…"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RqxgF/k6OTRD / RqxgF/zYmR9 | frame / Controls | {"name":"Controls"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| RqxgF/H6MP6I / RqxgF/k6OTRD | frame / Attach | {"name":"Attach"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/Ya6Zn / RqxgF/H6MP6I | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| RqxgF/WaH9A / RqxgF/k6OTRD | frame / Mention | {"name":"Mention"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/skWXm / RqxgF/WaH9A | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"at-sign","library":"lucide","fill":"$op-text-2"} |
| RqxgF/ar7Iu / RqxgF/k6OTRD | frame / Model | {"name":"Model"} | {"height":28,"fill":"$op-sunken","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| RqxgF/xoQ54 / RqxgF/ar7Iu | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"sparkles","library":"lucide","fill":"$op-accent-text"} |
| RqxgF/su2n9 / RqxgF/ar7Iu | text / T | {"name":"T","content":"Auto"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RqxgF/PvPGD / RqxgF/ar7Iu | icon / Chevron | {"name":"Chevron"} | {"width":12,"height":12,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| RqxgF/Y2otV / RqxgF/k6OTRD | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| RqxgF/y5pVRy / RqxgF/k6OTRD | frame / Voice | {"name":"Voice"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RqxgF/Veijp / RqxgF/y5pVRy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mic","library":"lucide","fill":"$op-text-2"} |
| RqxgF/r1ppNh / RqxgF/k6OTRD | frame / Send | {"name":"Send"} | {"width":32,"height":32,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| RqxgF/anRSa / RqxgF/r1ppNh | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-up","library":"lucide","fill":"$op-on-accent"} |
| RqxgF/ffGUe / RqxgF/orKTu | text / Disclaimer | {"name":"Disclaimer","content":"The agent can take actions in this app. Every action is logged and can be undone."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| q29lf / TSPVF | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| QVqq0 / q29lf | text / Label | {"name":"Label","content":"Desktop · Agent open"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| KoFGQ / q29lf | text / Note | {"name":"Note","content":"The agent docks right at 400 px under the header and pushes the content. Changes it makes show on the board as they happen: the bounced mail left Inbox, and the invoice card is ringed while its reminder is set."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
