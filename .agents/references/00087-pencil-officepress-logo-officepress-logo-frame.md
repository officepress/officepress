# OfficePress Logo — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| dJApv / root | frame / OfficePress Logo | {"name":"OfficePress Logo"} | {"x":1840,"y":2493,"clip":true,"width":1680,"fill":"$bg","layout":"vertical","gap":80,"padding":80} |
| h4Obd6 / dJApv | frame / Header | {"name":"Header"} | {"width":"fill_container","gap":80,"justifyContent":"space_between","alignItems":"end"} |
| alZbX / h4Obd6 | frame / Intro | {"name":"Intro"} | {"width":720,"layout":"vertical","gap":20} |
| MARyI / alZbX | text / Eyebrow | {"name":"Eyebrow","content":"OFFICEPRESS  /  BACK OFFICE SUITE  /  MASTER MARK"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal","letterSpacing":1.5} |
| k6vJwG / alZbX | text / Title | {"name":"Title","content":"The office,\non the same grid."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.02,"fontFamily":"$font-display","fontSize":64,"fontWeight":"700","letterSpacing":-2} |
| MKaia / h4Obd6 | text / Lede | {"name":"Lede","content":"The universal symbol for an office — a building — reduced to the same pills and squares as every product mark. Four windows, one for each family, lit in its colour. The tile takes slate, a mid-tone that holds on light and dark."} | {"fill":"$muted","textGrowth":"fixed-width","width":560,"lineHeight":1.5,"fontFamily":"$font-display","fontSize":18,"fontWeight":"normal"} |
| uxpBl / dJApv | frame / Hero | {"name":"Hero"} | {"width":"fill_container","gap":24} |
| Dwrbz / uxpBl | frame / Primary Mark | {"name":"Primary Mark"} | {"width":"fill_container","height":560,"fill":"$card","cornerRadius":16,"justifyContent":"center","alignItems":"center"} |
| oBcn1 / Dwrbz | frame / Logo Mark · Large | {"name":"Logo Mark · Large"} | {"clip":true,"width":336,"height":336,"fill":"$suite-tile","cornerRadius":84,"layout":"none"} |
| PryT0 / oBcn1 | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":21,"x":56,"y":140,"fill":"$mark-secondary","width":84,"height":140} |
| jRqBo / oBcn1 | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":28,"x":112,"y":56,"fill":"$mark-primary","width":168,"height":224} |
| l4WhVT / oBcn1 | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":10.5,"x":140,"y":84,"fill":"$fam-communicate","width":42,"height":42} |
| qDQ82 / oBcn1 | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":10.5,"x":210,"y":84,"fill":"$fam-create","width":42,"height":42} |
| J14Fib / oBcn1 | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":10.5,"x":140,"y":154,"fill":"$fam-operate","width":42,"height":42} |
| pcgGi / oBcn1 | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":10.5,"x":210,"y":154,"fill":"$fam-commerce","width":42,"height":42} |
| yfwCJ / oBcn1 | rectangle / Door | {"name":"Door"} | {"cornerRadius":[14,14,0,0],"x":168,"y":224,"fill":"$suite-tile","width":56,"height":63} |
| Ocg5h / uxpBl | frame / Construction | {"name":"Construction"} | {"width":560,"height":560,"fill":"$card","cornerRadius":16,"layout":"vertical","gap":20,"padding":32,"alignItems":"center"} |
| ADcjX / Ocg5h | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","justifyContent":"space_between"} |
| x7YE4M / ADcjX | text / Label | {"name":"Label","content":"CONSTRUCTION"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
| ohGv1 / ADcjX | text / Spec | {"name":"Spec","content":"96u  ·  8u GRID  ·  16u SAFE  ·  R24"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
| FYPpc / Ocg5h | frame / Stage | {"name":"Stage"} | {"width":408,"height":408,"layout":"none"} |
| sgVvc / FYPpc | frame / Logo Mark · Construction | {"name":"Logo Mark · Construction"} | {"x":0,"y":0,"clip":true,"width":408,"height":408,"fill":"$suite-tile","cornerRadius":102,"layout":"none"} |
| Mbi3S / sgVvc | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":25.5,"x":68,"y":170,"fill":"$mark-secondary","width":102,"height":170} |
| gbcuL / sgVvc | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":34,"x":136,"y":68,"fill":"$mark-primary","width":204,"height":272} |
| Mx960 / sgVvc | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":12.75,"x":170,"y":102,"fill":"$fam-communicate","width":51,"height":51} |
| UEDBl / sgVvc | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":12.75,"x":255,"y":102,"fill":"$fam-create","width":51,"height":51} |
| ixJ9J / sgVvc | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":12.75,"x":170,"y":187,"fill":"$fam-operate","width":51,"height":51} |
| d7Wh4 / sgVvc | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":12.75,"x":255,"y":187,"fill":"$fam-commerce","width":51,"height":51} |
| zoSQ3 / sgVvc | rectangle / Door | {"name":"Door"} | {"cornerRadius":[17,17,0,0],"x":204,"y":272,"fill":"$suite-tile","width":68,"height":76.5} |
| TlZ5j / FYPpc | rectangle / Grid V1 | {"name":"Grid V1"} | {"x":34,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| iBp8c / FYPpc | rectangle / Grid H1 | {"name":"Grid H1"} | {"x":0,"y":34,"fill":"#FFFFFF26","width":408,"height":1} |
| UIdfT / FYPpc | rectangle / Grid V2 | {"name":"Grid V2"} | {"x":68,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| SG1bq / FYPpc | rectangle / Grid H2 | {"name":"Grid H2"} | {"x":0,"y":68,"fill":"#FFFFFF26","width":408,"height":1} |
| LAtGt / FYPpc | rectangle / Grid V3 | {"name":"Grid V3"} | {"x":102,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| rMYTJ / FYPpc | rectangle / Grid H3 | {"name":"Grid H3"} | {"x":0,"y":102,"fill":"#FFFFFF26","width":408,"height":1} |
| X0qPBE / FYPpc | rectangle / Grid V4 | {"name":"Grid V4"} | {"x":136,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| Z2BwJ6 / FYPpc | rectangle / Grid H4 | {"name":"Grid H4"} | {"x":0,"y":136,"fill":"#FFFFFF26","width":408,"height":1} |
| iNL5L / FYPpc | rectangle / Grid V5 | {"name":"Grid V5"} | {"x":170,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| JWggf / FYPpc | rectangle / Grid H5 | {"name":"Grid H5"} | {"x":0,"y":170,"fill":"#FFFFFF26","width":408,"height":1} |
| k0i2GT / FYPpc | rectangle / Grid V6 | {"name":"Grid V6"} | {"x":204,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| d3Vmmv / FYPpc | rectangle / Grid H6 | {"name":"Grid H6"} | {"x":0,"y":204,"fill":"#FFFFFF26","width":408,"height":1} |
| pZn44 / FYPpc | rectangle / Grid V7 | {"name":"Grid V7"} | {"x":238,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| bUmab / FYPpc | rectangle / Grid H7 | {"name":"Grid H7"} | {"x":0,"y":238,"fill":"#FFFFFF26","width":408,"height":1} |
| R5Lk4 / FYPpc | rectangle / Grid V8 | {"name":"Grid V8"} | {"x":272,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| hBV74 / FYPpc | rectangle / Grid H8 | {"name":"Grid H8"} | {"x":0,"y":272,"fill":"#FFFFFF26","width":408,"height":1} |
| WQU9c / FYPpc | rectangle / Grid V9 | {"name":"Grid V9"} | {"x":306,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| slrUM / FYPpc | rectangle / Grid H9 | {"name":"Grid H9"} | {"x":0,"y":306,"fill":"#FFFFFF26","width":408,"height":1} |
| wenda / FYPpc | rectangle / Grid V10 | {"name":"Grid V10"} | {"x":340,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| s1A5fy / FYPpc | rectangle / Grid H10 | {"name":"Grid H10"} | {"x":0,"y":340,"fill":"#FFFFFF26","width":408,"height":1} |
| o9LZG / FYPpc | rectangle / Grid V11 | {"name":"Grid V11"} | {"x":374,"y":0,"fill":"#FFFFFF26","width":1,"height":408} |
| P70n9 / FYPpc | rectangle / Grid H11 | {"name":"Grid H11"} | {"x":0,"y":374,"fill":"#FFFFFF26","width":408,"height":1} |
| P8pCHr / FYPpc | rectangle / Safe Margin | {"name":"Safe Margin"} | {"x":68,"y":68,"width":272,"height":272,"stroke":"#FF4D8D","strokeWidth":1.5} |
| CLaEM / Ocg5h | text / Note | {"name":"Note","content":"Tower 48×64 · annex 24×40 at 55% · windows 12u · door 16×16"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":0.5} |
| pYfOr / dJApv | frame / Section · Lockups | {"name":"Section · Lockups"} | {"width":"fill_container","layout":"vertical","gap":28} |
| N0qEj / pYfOr | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| s3TKa / N0qEj | frame / Title | {"name":"Title"} | {"gap":10,"alignItems":"center"} |
| fM8Ln / s3TKa | text / Section Name | {"name":"Section Name","content":"Lockups"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| u5Igpx / s3TKa | text / Section No | {"name":"Section No","content":"01"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| RBaCT / N0qEj | text / Section Desc | {"name":"Section Desc","content":"The mark always leads; wordmark set in Manrope Bold, tight tracking."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| T9lNHm / pYfOr | frame / Lockup Row | {"name":"Lockup Row"} | {"width":"fill_container","gap":24} |
| NFhFD / T9lNHm | frame / Horizontal | {"name":"Horizontal"} | {"width":"fill_container","height":320,"fill":"$card","cornerRadius":16,"justifyContent":"center","alignItems":"center"} |
| I3uHU / NFhFD | frame / Lockup · Horizontal | {"name":"Lockup · Horizontal"} | {"gap":48,"alignItems":"center"} |
| j8srEL / I3uHU | frame / Logo Mark | {"name":"Logo Mark"} | {"clip":true,"width":96,"height":96,"fill":"$suite-tile","cornerRadius":24,"layout":"none"} |
| cTqxn / j8srEL | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":6,"x":16,"y":40,"fill":"$mark-secondary","width":24,"height":40} |
| tUJYi / j8srEL | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":8,"x":32,"y":16,"fill":"$mark-primary","width":48,"height":64} |
| uzGGg / j8srEL | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":3,"x":40,"y":24,"fill":"$fam-communicate","width":12,"height":12} |
| ftuIU / j8srEL | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":3,"x":60,"y":24,"fill":"$fam-create","width":12,"height":12} |
| Y2vePG / j8srEL | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":3,"x":40,"y":44,"fill":"$fam-operate","width":12,"height":12} |
| AhGzU / j8srEL | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":3,"x":60,"y":44,"fill":"$fam-commerce","width":12,"height":12} |
| vSte4 / j8srEL | rectangle / Door | {"name":"Door"} | {"cornerRadius":[4,4,0,0],"x":48,"y":64,"fill":"$suite-tile","width":16,"height":18} |
| Lq4Ao / I3uHU | text / Wordmark | {"name":"Wordmark","content":"OfficePress"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":64,"fontWeight":"700","letterSpacing":-2} |
| u8wgPF / T9lNHm | frame / Stacked | {"name":"Stacked"} | {"width":420,"height":320,"fill":"$card","cornerRadius":16,"justifyContent":"center","alignItems":"center"} |
| SBEgN / u8wgPF | frame / Lockup · Stacked | {"name":"Lockup · Stacked"} | {"layout":"vertical","gap":24,"alignItems":"center"} |
| CyS1h / SBEgN | frame / Logo Mark | {"name":"Logo Mark"} | {"clip":true,"width":96,"height":96,"fill":"$suite-tile","cornerRadius":24,"layout":"none"} |
| ujqxE / CyS1h | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":6,"x":16,"y":40,"fill":"$mark-secondary","width":24,"height":40} |
| Cr1dV / CyS1h | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":8,"x":32,"y":16,"fill":"$mark-primary","width":48,"height":64} |
| ORBOH / CyS1h | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":3,"x":40,"y":24,"fill":"$fam-communicate","width":12,"height":12} |
| t2KiAI / CyS1h | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":3,"x":60,"y":24,"fill":"$fam-create","width":12,"height":12} |
| gYllY / CyS1h | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":3,"x":40,"y":44,"fill":"$fam-operate","width":12,"height":12} |
| o9lddy / CyS1h | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":3,"x":60,"y":44,"fill":"$fam-commerce","width":12,"height":12} |
| mjDc9 / CyS1h | rectangle / Door | {"name":"Door"} | {"cornerRadius":[4,4,0,0],"x":48,"y":64,"fill":"$suite-tile","width":16,"height":18} |
| MTxKT / SBEgN | text / Wordmark | {"name":"Wordmark","content":"OfficePress"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":36,"fontWeight":"700","letterSpacing":-1} |
| KRcDJ / T9lNHm | frame / Compact | {"name":"Compact"} | {"width":420,"height":320,"fill":"$card","cornerRadius":16,"justifyContent":"center","alignItems":"center"} |
| F5KhQf / KRcDJ | frame / Lockup · Compact | {"name":"Lockup · Compact"} | {"gap":12,"alignItems":"center"} |
| BGVES / F5KhQf | frame / Logo Mark | {"name":"Logo Mark"} | {"clip":true,"width":32,"height":32,"fill":"$suite-tile","cornerRadius":8,"layout":"none"} |
| IjYjm / BGVES | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":2,"x":5.333333333333333,"y":13.333333333333332,"fill":"$mark-secondary","width":8,"height":13.333333333333332} |
| aznLr / BGVES | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":2.6666666666666665,"x":10.666666666666666,"y":5.333333333333333,"fill":"$mark-primary","width":16,"height":21.333333333333332} |
| DcKYq / BGVES | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":1,"x":13.333333333333332,"y":8,"fill":"$fam-communicate","width":4,"height":4} |
| CV0sG / BGVES | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":1,"x":20,"y":8,"fill":"$fam-create","width":4,"height":4} |
| Hn1ZY / BGVES | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":1,"x":13.333333333333332,"y":14.666666666666666,"fill":"$fam-operate","width":4,"height":4} |
| ZS90q / BGVES | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":1,"x":20,"y":14.666666666666666,"fill":"$fam-commerce","width":4,"height":4} |
| LM1Dl / BGVES | rectangle / Door | {"name":"Door"} | {"cornerRadius":[1.3333333333333333,1.3333333333333333,0,0],"x":16,"y":21.333333333333332,"fill":"$suite-tile","width":5.333333333333333,"height":6} |
| LXfXP / F5KhQf | text / Wordmark | {"name":"Wordmark","content":"OfficePress"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":20,"fontWeight":"700","letterSpacing":-0.5} |
| Wkg5N / dJApv | frame / Section · In The System | {"name":"Section · In The System"} | {"width":"fill_container","layout":"vertical","gap":28} |
| v3xFc / Wkg5N | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| VhIPw / v3xFc | frame / Title | {"name":"Title"} | {"gap":10,"alignItems":"center"} |
| h2LSwz / VhIPw | text / Section Name | {"name":"Section Name","content":"In the system"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| C1ekXT / VhIPw | text / Section No | {"name":"Section No","content":"02"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| Ftx2I / v3xFc | text / Section Desc | {"name":"Section Desc","content":"Same tile, same grid — the four family colours light the windows."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| zV3ql / Wkg5N | frame / System Row | {"name":"System Row"} | {"width":"fill_container","gap":24} |
| IQbYh / zV3ql | frame / OfficePress | {"name":"OfficePress"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":20,"padding":28} |
| tPnnk / IQbYh | frame / Logo Mark | {"name":"Logo Mark"} | {"clip":true,"width":96,"height":96,"fill":"$suite-tile","cornerRadius":24,"layout":"none"} |
| TtKNB / tPnnk | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":6,"x":16,"y":40,"fill":"$mark-secondary","width":24,"height":40} |
| a2WPcS / tPnnk | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":8,"x":32,"y":16,"fill":"$mark-primary","width":48,"height":64} |
| SQCbb / tPnnk | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":3,"x":40,"y":24,"fill":"$fam-communicate","width":12,"height":12} |
| gLmAT / tPnnk | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":3,"x":60,"y":24,"fill":"$fam-create","width":12,"height":12} |
| WtVTd / tPnnk | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":3,"x":40,"y":44,"fill":"$fam-operate","width":12,"height":12} |
| G7vXu4 / tPnnk | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":3,"x":60,"y":44,"fill":"$fam-commerce","width":12,"height":12} |
| q8axNJ / tPnnk | rectangle / Door | {"name":"Door"} | {"cornerRadius":[4,4,0,0],"x":48,"y":64,"fill":"$suite-tile","width":16,"height":18} |
| A3ruW / IQbYh | text / Label | {"name":"Label","content":"OfficePress"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":18,"fontWeight":"700"} |
| sVk1I / IQbYh | text / Family | {"name":"Family","content":"MASTER"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
| q2igL3 / zV3ql | frame / Inbox | {"name":"Inbox"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":20,"padding":28} |
| qcX0q / q2igL3 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| Ai4je / qcX0q | path / Walls | {"name":"Walls"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-secondary","width":96,"height":96} |
| i2tyHa / qcX0q | path / Front | {"name":"Front"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| pOFsQ / q2igL3 | text / Label | {"name":"Label","content":"Inbox"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":18,"fontWeight":"700"} |
| t3icgz / q2igL3 | text / Family | {"name":"Family","content":"COMMUNICATE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
| oOXjs / zV3ql | frame / Drive | {"name":"Drive"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":20,"padding":28} |
| T9jUc / oOXjs | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| ZSNld / T9jUc | rectangle / Tab | {"name":"Tab"} | {"cornerRadius":5,"x":16,"y":20,"fill":"$mark-secondary","width":30,"height":16} |
| Rg0yV / T9jUc | rectangle / Back | {"name":"Back"} | {"cornerRadius":8,"x":16,"y":28,"fill":"$mark-secondary","width":64,"height":48} |
| jxrOg / T9jUc | rectangle / Front | {"name":"Front"} | {"cornerRadius":8,"x":16,"y":38,"fill":"$mark-primary","width":64,"height":42} |
| M0dn5 / oOXjs | text / Label | {"name":"Label","content":"Drive"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":18,"fontWeight":"700"} |
| Nfuqw / oOXjs | text / Family | {"name":"Family","content":"CREATE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
| UkR6d / zV3ql | frame / Accounting | {"name":"Accounting"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":20,"padding":28} |
| q0lp6z / UkR6d | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| gjyZb / q0lp6z | rectangle / Body | {"name":"Body"} | {"cornerRadius":10,"x":22,"y":14,"fill":"$mark-primary","width":52,"height":68} |
| yA8FM / q0lp6z | rectangle / Screen | {"name":"Screen"} | {"cornerRadius":3,"x":30,"y":22,"fill":"$fam-operate","width":36,"height":14} |
| RuOXi / q0lp6z | rectangle / Key 1 | {"name":"Key 1"} | {"cornerRadius":2,"x":30,"y":44,"fill":"$fam-operate","width":10,"height":10} |
| TS0eo / q0lp6z | rectangle / Key 2 | {"name":"Key 2"} | {"cornerRadius":2,"x":43,"y":44,"fill":"$fam-operate","width":10,"height":10} |
| coqSO / q0lp6z | rectangle / Key 3 | {"name":"Key 3"} | {"cornerRadius":2,"x":56,"y":44,"fill":"$mark-secondary","width":10,"height":26} |
| E2eOGM / q0lp6z | rectangle / Key 4 | {"name":"Key 4"} | {"cornerRadius":2,"x":30,"y":60,"fill":"$fam-operate","width":10,"height":10} |
| KS3CJ / q0lp6z | rectangle / Key 5 | {"name":"Key 5"} | {"cornerRadius":2,"x":43,"y":60,"fill":"$fam-operate","width":10,"height":10} |
| WG2rS / UkR6d | text / Label | {"name":"Label","content":"Accounting"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":18,"fontWeight":"700"} |
| W31se / UkR6d | text / Family | {"name":"Family","content":"OPERATE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
| AfzUI / zV3ql | frame / Payments | {"name":"Payments"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":20,"padding":28} |
| q7iw3Y / AfzUI | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| qponU / q7iw3Y | rectangle / Card Behind | {"name":"Card Behind"} | {"cornerRadius":8,"x":26,"y":18,"fill":"$mark-secondary","width":54,"height":38} |
| d1pvHE / q7iw3Y | rectangle / Card | {"name":"Card"} | {"cornerRadius":8,"x":16,"y":32,"fill":"$mark-primary","width":58,"height":42} |
| Y53iiN / q7iw3Y | rectangle / Stripe | {"name":"Stripe"} | {"x":16,"y":42,"fill":"$fam-commerce","width":58,"height":8} |
| PI0G6 / q7iw3Y | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"x":24,"y":58,"fill":"$fam-commerce","width":14,"height":10} |
| uyudU / q7iw3Y | rectangle / Digits | {"name":"Digits"} | {"cornerRadius":2.5,"x":44,"y":61,"fill":"$fam-commerce","width":22,"height":5} |
| TjNiE / AfzUI | text / Label | {"name":"Label","content":"Payments"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":18,"fontWeight":"700"} |
| AdCoC / AfzUI | text / Family | {"name":"Family","content":"COMMERCE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal","letterSpacing":1.5} |
