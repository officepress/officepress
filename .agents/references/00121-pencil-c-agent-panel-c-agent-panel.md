# C · Agent Panel

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| Y90fy0 / root | frame / C · Agent Panel | {"name":"C · Agent Panel","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":8920,"y":2633,"width":400,"height":836,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"layout":"vertical"} |
| Pnjbf / Y90fy0 | frame / Panel Header | {"name":"Panel Header"} | {"width":"fill_container","height":56,"stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12,0,16],"alignItems":"center"} |
| g2fLyZ / Pnjbf | frame / Agent Mark | {"name":"Agent Mark"} | {"width":28,"height":28,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| Y8Xa1l / g2fLyZ | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| ybeDU / Pnjbf | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical"} |
| gn6Sn / ybeDU | text / Name | {"name":"Name","content":"Inbox Agent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| P3xlUg / ybeDU | text / Status | {"name":"Status","content":"Can read and act on this board"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Irpj8 / Pnjbf | frame / New chat | {"name":"New chat"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| cgC6u / Irpj8 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"square-pen","library":"lucide","fill":"$op-text-2"} |
| tR3at / Pnjbf | frame / History | {"name":"History"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Ey7Gk / tR3at | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"history","library":"lucide","fill":"$op-text-2"} |
| FmqQS / Pnjbf | frame / Expand | {"name":"Expand"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| VwQoN / FmqQS | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"maximize-2","library":"lucide","fill":"$op-text-2"} |
| AYBay / Pnjbf | frame / Close | {"name":"Close"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| c2Ngn / AYBay | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| VOfE3 / Y90fy0 | frame / Context Bar | {"name":"Context Bar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[12,16],"alignItems":"center"} |
| M1EQk / VOfE3 | text / Label | {"name":"Label","content":"CONTEXT"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| NvSaP / VOfE3 | frame / Context Chip | {"name":"Context Chip"} | {"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| smWfS / NvSaP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"layout-grid","library":"lucide","fill":"$op-accent-text"} |
| Cj8ja / NvSaP | text / T | {"name":"T","content":"Inbox board · 12 cards"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| mOFdK / NvSaP | icon / Remove | {"name":"Remove"} | {"width":12,"height":12,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| mo9Bm / Y90fy0 | frame / Thread | {"name":"Thread"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":16,"padding":16} |
| W0guM / mo9Bm | frame / User Message | {"name":"User Message"} | {"width":"fill_container","justifyContent":"end"} |
| r0ZZ7F / W0guM | frame / Bubble | {"name":"Bubble"} | {"width":300,"fill":"$op-tint","cornerRadius":[12,12,4,12],"padding":12} |
| jK74Y / r0ZZ7F | text / Text | {"name":"Text","content":"Archive everything from Mail Delivery Subsystem and remind me about the Northwind invoice tomorrow at 9."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| j0M56u / mo9Bm | frame / Agent Message | {"name":"Agent Message"} | {"width":"fill_container","gap":8} |
| vibvi / j0M56u | frame / Mark | {"name":"Mark"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| lIDD6 / vibvi | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"bot","library":"lucide","fill":"$op-accent-text"} |
| HCOYc / j0M56u | text / Text | {"name":"Text","content":"Done. Here's what I changed on your board:"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| P2Il7 / mo9Bm | frame / Action · ARCHIVE_CARDS | {"name":"Action · ARCHIVE_CARDS"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| jA60W / P2Il7 | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| D0GJT3 / jA60W | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"archive","library":"lucide","fill":"$op-text"} |
| jyEc4 / P2Il7 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| aO6FI / jyEc4 | text / Name | {"name":"Name","content":"ARCHIVE_CARDS"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.3} |
| ZiV2z / jyEc4 | text / Result | {"name":"Result","content":"1 card moved to Archive"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| N1uqx / P2Il7 | frame / Status | {"name":"Status"} | {"gap":4,"alignItems":"center"} |
| iHOGz / N1uqx | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7} |
| Zivch / N1uqx | text / T | {"name":"T","content":"Done"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| esa9H / P2Il7 | text / Undo | {"name":"Undo","content":"Undo"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Io00u / mo9Bm | frame / Action · CREATE_REMINDER | {"name":"Action · CREATE_REMINDER"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| BFEP9 / Io00u | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| TbQND / BFEP9 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"alarm-clock","library":"lucide","fill":"$op-text"} |
| EYWpE / Io00u | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| i09s2t / EYWpE | text / Name | {"name":"Name","content":"CREATE_REMINDER"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.3} |
| E6at50 / EYWpE | text / Result | {"name":"Result","content":"Invoice NW-4471 · Thu 09:00"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| WMEtB / Io00u | frame / Status | {"name":"Status"} | {"gap":4,"alignItems":"center"} |
| bUlQi / WMEtB | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7} |
| mriG7 / WMEtB | text / T | {"name":"T","content":"Done"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| zVEu6 / Io00u | text / Undo | {"name":"Undo","content":"Undo"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| sbz9i / mo9Bm | frame / Agent Message | {"name":"Agent Message"} | {"width":"fill_container","gap":8} |
| YXE20 / sbz9i | frame / Mark | {"name":"Mark"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| Dw5Mo / YXE20 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"bot","library":"lucide","fill":"$op-accent-text"} |
| amtnJ / sbz9i | text / Text | {"name":"Text","content":"Northwind needs your sign-off before Friday. Want me to draft a reply to Ana confirming?"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| y5wdn / mo9Bm | frame / Follow-ups | {"name":"Follow-ups"} | {"width":"fill_container","gap":8,"padding":[0,0,0,32]} |
| kpoWA / y5wdn | frame / Chip | {"name":"Chip"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| bWZrX / kpoWA | text / T | {"name":"T","content":"Draft the reply"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| xlvII / y5wdn | frame / Chip | {"name":"Chip"} | {"height":28,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| kZ0pp / xlvII | text / T | {"name":"T","content":"Show overdue follow-ups"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| gh6wr / mo9Bm | frame / User Message 2 | {"name":"User Message 2"} | {"width":"fill_container","justifyContent":"end"} |
| k30YC / gh6wr | frame / Bubble | {"name":"Bubble"} | {"fill":"$op-tint","cornerRadius":[12,12,4,12],"padding":12} |
| i8Qi3M / k30YC | text / Text | {"name":"Text","content":"Draft the reply"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| pgd2W / mo9Bm | frame / Action · DRAFT_REPLY | {"name":"Action · DRAFT_REPLY"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| kCSSh / pgd2W | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Cpm3n / kCSSh | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"pen-line","library":"lucide","fill":"$op-text"} |
| Lv38Q / pgd2W | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| OEfub / Lv38Q | text / Name | {"name":"Name","content":"DRAFT_REPLY"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.3} |
| L4ylX / Lv38Q | text / Result | {"name":"Result","content":"Writing to Ana Cruz…"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| UBDs3 / pgd2W | frame / Status | {"name":"Status"} | {"gap":4,"alignItems":"center"} |
| Yckgp / UBDs3 | icon / Spinner | {"name":"Spinner"} | {"width":14,"height":14,"icon":"loader-circle","library":"lucide","fill":"$op-accent-text"} |
| oADVu / UBDs3 | text / T | {"name":"T","content":"Running"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| orKTu / Y90fy0 | frame / Composer Area | {"name":"Composer Area"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":[12,16,16,16]} |
| zYmR9 / orKTu | frame / Composer | {"name":"Composer"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border-strong","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#18244F0F","offset":{"x":0,"y":2},"blur":6},"layout":"vertical","gap":12,"padding":12} |
| IdiNV / zYmR9 | text / Placeholder | {"name":"Placeholder","content":"Ask the agent to do anything in Inbox…"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| k6OTRD / zYmR9 | frame / Controls | {"name":"Controls"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| H6MP6I / k6OTRD | frame / Attach | {"name":"Attach"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Ya6Zn / H6MP6I | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| WaH9A / k6OTRD | frame / Mention | {"name":"Mention"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| skWXm / WaH9A | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"at-sign","library":"lucide","fill":"$op-text-2"} |
| ar7Iu / k6OTRD | frame / Model | {"name":"Model"} | {"height":28,"fill":"$op-sunken","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| xoQ54 / ar7Iu | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"sparkles","library":"lucide","fill":"$op-accent-text"} |
| su2n9 / ar7Iu | text / T | {"name":"T","content":"Auto"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| PvPGD / ar7Iu | icon / Chevron | {"name":"Chevron"} | {"width":12,"height":12,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| Y2otV / k6OTRD | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| y5pVRy / k6OTRD | frame / Voice | {"name":"Voice"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Veijp / y5pVRy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mic","library":"lucide","fill":"$op-text-2"} |
| r1ppNh / k6OTRD | frame / Send | {"name":"Send"} | {"width":32,"height":32,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| anRSa / r1ppNh | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-up","library":"lucide","fill":"$op-on-accent"} |
| ffGUe / orKTu | text / Disclaimer | {"name":"Disclaimer","content":"The agent can take actions in this app. Every action is logged and can be undone."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
