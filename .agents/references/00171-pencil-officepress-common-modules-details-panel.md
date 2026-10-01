# OfficePress Common Modules / Section · Chat view / Screens / Shot · Chat · Ticket Tracker #2042 / Chat · Ticket Tracker #2042 / Main / Body / Details Panel

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| d0Hm5 / bAFVv | frame / Details Panel | {"name":"Details Panel"} | {"width":280,"height":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"layout":"vertical","gap":16,"padding":20} |
| PfifN / d0Hm5 | text / L | {"name":"L","content":"TICKET DETAILS"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| o2ESE / d0Hm5 | frame / Ticket | {"name":"Ticket"} | {"width":"fill_container","layout":"vertical","gap":8} |
| xBG3G / o2ESE | frame / Status | {"name":"Status"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| o4DwJ / xBG3G | text / K | {"name":"K","content":"Status"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| s5UKQ / xBG3G | frame / Tag | {"name":"Tag"} | {"height":22,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| P2rq0 / s5UKQ | ellipse / D | {"name":"D"} | {"fill":"$op-accent","width":6,"height":6} |
| AO5Fr / s5UKQ | text / V | {"name":"V","content":"Open"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| hhqQo / o2ESE | frame / Priority | {"name":"Priority"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| I3dUq / hhqQo | text / K | {"name":"K","content":"Priority"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| qPEpD / hhqQo | frame / Tag | {"name":"Tag"} | {"height":22,"fill":"$op-danger-tint","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| dPDzf / qPEpD | text / V | {"name":"V","content":"High"} | {"fill":"$op-danger","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qi1Iy / o2ESE | frame / Department | {"name":"Department"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| WJ7xT / qi1Iy | text / K | {"name":"K","content":"Department"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| yofO1 / qi1Iy | text / V | {"name":"V","content":"Logistics"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| lUXps / o2ESE | frame / Assignee | {"name":"Assignee"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Yrf9H / lUXps | text / K | {"name":"K","content":"Assignee"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| X5Xnm / lUXps | text / V | {"name":"V","content":"Mara Santos"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| jVzUU / o2ESE | frame / Channel | {"name":"Channel"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TzeCR / jVzUU | text / K | {"name":"K","content":"Channel"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| yDciR / jVzUU | text / V | {"name":"V","content":"Email"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| GC5ap / d0Hm5 | frame / SLA | {"name":"SLA"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"layout":"vertical","gap":4,"padding":12} |
| EWxTO / GC5ap | frame / H | {"name":"H"} | {"width":"fill_container","justifyContent":"space_between"} |
| abLEf / EWxTO | text / L | {"name":"L","content":"Next response due"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| rsoFl / EWxTO | text / R | {"name":"R","content":"in 2h"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| jbOYb / GC5ap | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| z91d1 / jbOYb | rectangle / F | {"name":"F"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":170,"height":6} |
| U91Zh / d0Hm5 | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| xtCKk / d0Hm5 | text / L2 | {"name":"L2","content":"CONTACT"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| Y6Xijl / d0Hm5 | frame / Contact | {"name":"Contact"} | {"width":"fill_container","layout":"vertical","gap":8} |
| zeyAp / Y6Xijl | frame / Name | {"name":"Name"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| dj6ml / zeyAp | text / K | {"name":"K","content":"Name"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| jI9oS / zeyAp | text / V | {"name":"V","content":"Lina Reyes"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| GCMv9 / Y6Xijl | frame / Email | {"name":"Email"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| cVZcH / GCMv9 | text / K | {"name":"K","content":"Email"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LMnhR / GCMv9 | text / V | {"name":"V","content":"lina.reyes@northwind.ph"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| xPPiR / Y6Xijl | frame / Phone | {"name":"Phone"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| yMdfh / xPPiR | text / K | {"name":"K","content":"Phone"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| ZR5Xa / xPPiR | text / V | {"name":"V","content":"+63 917 555 0188"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| JaiM3 / Y6Xijl | frame / Company | {"name":"Company"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| dXHum / JaiM3 | text / K | {"name":"K","content":"Company"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":90,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Y5e3ji / JaiM3 | text / V | {"name":"V","content":"Northwind Supply"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| lj8Pq / d0Hm5 | text / Link | {"name":"Link","content":"Open customer profile →"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Eyo4s / d0Hm5 | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| J1cBt / d0Hm5 | text / L3 | {"name":"L3","content":"TAGS &amp; VIEWS"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| q8yMJ2 / d0Hm5 | frame / Tags | {"name":"Tags"} | {"gap":4} |
| RVgOD / q8yMJ2 | frame / Quotation | {"name":"Quotation"} | {"height":22,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| lyUzZ / RVgOD | text / L | {"name":"L","content":"Quotation"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| yGhmP / q8yMJ2 | frame / Restock | {"name":"Restock"} | {"height":22,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| k02uP / yGhmP | text / L | {"name":"L","content":"Restock"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| V9M2Hu / q8yMJ2 | frame / Logistics · All | {"name":"Logistics · All"} | {"height":22,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| P5k8PE / V9M2Hu | text / L | {"name":"L","content":"Logistics · All"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| CSNiS / DvXjt | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| dfxqg / CSNiS | text / Label | {"name":"Label","content":"Chat · Ticket Tracker #2042"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| RlBgA / CSNiS | text / Note | {"name":"Note","content":"Left: conversations with status filter and channel icons. Centre: the thread with day dividers, attachments, internal notes (amber) and status events. Right: ticket details, collapsible from the header."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
