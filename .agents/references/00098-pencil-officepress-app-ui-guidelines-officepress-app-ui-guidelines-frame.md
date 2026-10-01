# OfficePress App UI Guidelines — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| zTKmr / root | frame / OfficePress App UI Guidelines | {"name":"OfficePress App UI Guidelines"} | {"x":6720,"y":2493,"clip":true,"width":1680,"fill":"$bg","layout":"vertical","gap":96,"padding":80} |
| Z9d3PX / zTKmr | frame / Header | {"name":"Header"} | {"width":"fill_container","gap":80,"justifyContent":"space_between","alignItems":"end"} |
| fONll / Z9d3PX | frame / Intro | {"name":"Intro"} | {"width":760,"layout":"vertical","gap":20} |
| CV8Aj / fONll | text / Eyebrow | {"name":"Eyebrow","content":"OFFICEPRESS  /  APP UI GUIDELINES  /  v1.0 — DERIVED FROM INBOX BOARD"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal","letterSpacing":1.5} |
| y3raZ / fONll | text / Title | {"name":"Title","content":"One interface.\nFour families. Two modes."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.02,"fontFamily":"$font-display","fontSize":64,"fontWeight":"700","letterSpacing":-2} |
| vwwoH / Z9d3PX | text / Lede | {"name":"Lede","content":"Every OfficePress app shares the Inbox board's structure, spacing, type and components. Only colour changes: each app inherits its suite family's hue, and every colour is a token (op-*) that resolves from two theme axes, mode and family. Set both on the app's root frame and the whole UI follows."} | {"fill":"$muted","textGrowth":"fixed-width","width":560,"lineHeight":1.6,"fontFamily":"$font-display","fontSize":17,"fontWeight":"normal"} |
| c9tSPg / zTKmr | frame / Section · How theming works | {"name":"Section · How theming works"} | {"width":"fill_container","layout":"vertical","gap":32} |
| My24r / c9tSPg | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| pOcj5 / My24r | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| hcObN / pOcj5 | text / No | {"name":"No","content":"01"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| nGgBO / pOcj5 | text / Title | {"name":"Title","content":"How theming works"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| iOCAR / My24r | text / Desc | {"name":"Desc","content":"Two axes, one token set. Never hard-code a hex value in an app."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| udTSI / c9tSPg | frame / Axes | {"name":"Axes"} | {"width":"fill_container","gap":24} |
| VWe19 / udTSI | frame / Family Axis | {"name":"Family Axis"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":18,"padding":28} |
| R5han / VWe19 | text / Label | {"name":"Label","content":"AXIS 1 — family"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| isq2F / VWe19 | frame / Families | {"name":"Families"} | {"width":"fill_container","gap":16} |
| YWOor / isq2F | frame / Family · Communicate | {"name":"Family · Communicate"} | {"width":"fill_container","layout":"vertical","gap":10} |
| sE6iX / YWOor | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| v3JKc4 / sE6iX | path / Walls | {"name":"Walls"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-secondary","width":96,"height":96} |
| zJ16u / sE6iX | path / Front | {"name":"Front"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| cAmjq / YWOor | text / Key | {"name":"Key","content":"family: communicate"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| La3ee / YWOor | text / Apps | {"name":"Apps","content":"Inbox · Chat · Meet · Calendar · Support · Agent"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| pBx0T / isq2F | frame / Family · Create | {"name":"Family · Create"} | {"width":"fill_container","layout":"vertical","gap":10} |
| QQFXF / pBx0T | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| lNfNJ / QQFXF | rectangle / Tab | {"name":"Tab"} | {"cornerRadius":5,"x":16,"y":20,"fill":"$mark-secondary","width":30,"height":16} |
| c9jb6 / QQFXF | rectangle / Back | {"name":"Back"} | {"cornerRadius":8,"x":16,"y":28,"fill":"$mark-secondary","width":64,"height":48} |
| X53o7 / QQFXF | rectangle / Front | {"name":"Front"} | {"cornerRadius":8,"x":16,"y":38,"fill":"$mark-primary","width":64,"height":42} |
| bxY4L / pBx0T | text / Key | {"name":"Key","content":"family: create"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| B47Ep / pBx0T | text / Apps | {"name":"Apps","content":"Drive · Tables · Forms · Whiteboards · Diagrams · Content"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| y8Z4tK / isq2F | frame / Family · Operate | {"name":"Family · Operate"} | {"width":"fill_container","layout":"vertical","gap":10} |
| adhhI / y8Z4tK | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| r0Nto9 / adhhI | rectangle / Body | {"name":"Body"} | {"cornerRadius":10,"x":22,"y":14,"fill":"$mark-primary","width":52,"height":68} |
| i7peJT / adhhI | rectangle / Screen | {"name":"Screen"} | {"cornerRadius":3,"x":30,"y":22,"fill":"$fam-operate","width":36,"height":14} |
| Sqde4 / adhhI | rectangle / Key 1 | {"name":"Key 1"} | {"cornerRadius":2,"x":30,"y":44,"fill":"$fam-operate","width":10,"height":10} |
| W0mml / adhhI | rectangle / Key 2 | {"name":"Key 2"} | {"cornerRadius":2,"x":43,"y":44,"fill":"$fam-operate","width":10,"height":10} |
| H9IIX / adhhI | rectangle / Key 3 | {"name":"Key 3"} | {"cornerRadius":2,"x":56,"y":44,"fill":"$mark-secondary","width":10,"height":26} |
| g9DhKQ / adhhI | rectangle / Key 4 | {"name":"Key 4"} | {"cornerRadius":2,"x":30,"y":60,"fill":"$fam-operate","width":10,"height":10} |
| cWYZX / adhhI | rectangle / Key 5 | {"name":"Key 5"} | {"cornerRadius":2,"x":43,"y":60,"fill":"$fam-operate","width":10,"height":10} |
| FkUig / y8Z4tK | text / Key | {"name":"Key","content":"family: operate"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| c3KqSQ / y8Z4tK | text / Apps | {"name":"Apps","content":"Resourcing · Procurement · Accounting · Approvals · Clients · Sign"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| aM1iW / isq2F | frame / Family · Commerce | {"name":"Family · Commerce"} | {"width":"fill_container","layout":"vertical","gap":10} |
| Wy1gy / aM1iW | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| K5D4jp / Wy1gy | rectangle / Card Behind | {"name":"Card Behind"} | {"cornerRadius":8,"x":26,"y":18,"fill":"$mark-secondary","width":54,"height":38} |
| j1x5rW / Wy1gy | rectangle / Card | {"name":"Card"} | {"cornerRadius":8,"x":16,"y":32,"fill":"$mark-primary","width":58,"height":42} |
| IA48h / Wy1gy | rectangle / Stripe | {"name":"Stripe"} | {"x":16,"y":42,"fill":"$fam-commerce","width":58,"height":8} |
| Wdtfw / Wy1gy | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"x":24,"y":58,"fill":"$fam-commerce","width":14,"height":10} |
| WwkUC / Wy1gy | rectangle / Digits | {"name":"Digits"} | {"cornerRadius":2.5,"x":44,"y":61,"fill":"$fam-commerce","width":22,"height":5} |
| mXfbM / aM1iW | text / Key | {"name":"Key","content":"family: commerce"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| sqgog / aM1iW | text / Apps | {"name":"Apps","content":"Products · Orders · Inventory · Payments · Fulfillments"} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| ht3ZP / udTSI | frame / Mode Axis | {"name":"Mode Axis"} | {"width":360,"fill":"$card","cornerRadius":16,"layout":"vertical","gap":18,"padding":28} |
| CCoIl / ht3ZP | text / Label | {"name":"Label","content":"AXIS 2 — mode"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| hMgJD / ht3ZP | frame / Modes | {"name":"Modes"} | {"gap":12} |
| wPLr2 / hMgJD | frame / Mode light | {"name":"Mode light"} | {"width":150,"height":96,"fill":"#F3F5FB","cornerRadius":10,"stroke":"$line","strokeWidth":1,"layout":"vertical","padding":14,"justifyContent":"end"} |
| EoDB5 / wPLr2 | text / Key | {"name":"Key","content":"mode: light"} | {"fill":"#18213D","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| utskd / hMgJD | frame / Mode dark | {"name":"Mode dark"} | {"width":150,"height":96,"fill":"#0B1022","cornerRadius":10,"stroke":"$line","strokeWidth":1,"layout":"vertical","padding":14,"justifyContent":"end"} |
| iv44n / utskd | text / Key | {"name":"Key","content":"mode: dark"} | {"fill":"#E7ECFB","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| DCDD8 / ht3ZP | text / Code | {"name":"Code","content":"root.theme = {\n  mode: \"light\",\n  family: \"operate\"\n}"} | {"fill":"$ink","lineHeight":1.6,"fontFamily":"$font-mono","fontSize":13,"fontWeight":"normal"} |
