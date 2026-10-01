# OfficePress Product Marks / Section · Create

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| n2NEXA / o8qxhR | frame / Section · Create | {"name":"Section · Create"} | {"width":"fill_container","layout":"vertical","gap":28} |
| CkO9b / n2NEXA | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1.5},"padding":[0,0,16,0],"justifyContent":"space_between","alignItems":"end"} |
| QvO0C / CkO9b | frame / Family | {"name":"Family"} | {"gap":16,"alignItems":"center"} |
| aseBW / QvO0C | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":6,"fill":"$fam-create","width":20,"height":20} |
| NdWWo / QvO0C | text / Family Name | {"name":"Family Name","content":"Create"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| g3QK3 / QvO0C | text / Family No | {"name":"Family No","content":"02"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| KvM0r / CkO9b | text / Family Desc | {"name":"Family Desc","content":"Files, data and canvases."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| VSYxC / n2NEXA | frame / Marks | {"name":"Marks"} | {"width":"fill_container","gap":20} |
| mkjj8 / VSYxC | frame / Mark · Drive | {"name":"Mark · Drive"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| SyFcd / mkjj8 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| UX0QV / SyFcd | rectangle / Tab | {"name":"Tab"} | {"cornerRadius":5,"x":16,"y":20,"fill":"$mark-secondary","width":30,"height":16} |
| lch7r / SyFcd | rectangle / Back | {"name":"Back"} | {"cornerRadius":8,"x":16,"y":28,"fill":"$mark-secondary","width":64,"height":48} |
| vL0bK / SyFcd | rectangle / Front | {"name":"Front"} | {"cornerRadius":8,"x":16,"y":38,"fill":"$mark-primary","width":64,"height":42} |
| g6cTI / mkjj8 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| WrD0Q / g6cTI | text / Product Name | {"name":"Product Name","content":"Drive"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| x1C4Us / g6cTI | text / Idea | {"name":"Idea","content":"The folder — the one symbol everyone knows for \"where my files live\", yours and the apps'."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| q3YdJ7 / VSYxC | frame / Mark · Tables | {"name":"Mark · Tables"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| Zw64S / q3YdJ7 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| QiI6z / Zw64S | rectangle / Sheet | {"name":"Sheet"} | {"cornerRadius":8,"x":16,"y":18,"fill":"$mark-primary","width":64,"height":60} |
| K7DDm / Zw64S | rectangle / Header | {"name":"Header"} | {"cornerRadius":[8,8,0,0],"x":16,"y":18,"fill":"$mark-secondary","width":64,"height":16} |
| z2jGG / Zw64S | rectangle / Col 1 | {"name":"Col 1"} | {"x":36,"y":18,"fill":"$fam-create","width":3,"height":60} |
| wMWHl / Zw64S | rectangle / Col 2 | {"name":"Col 2"} | {"x":57,"y":18,"fill":"$fam-create","width":3,"height":60} |
| GvgID / Zw64S | rectangle / Row 1 | {"name":"Row 1"} | {"x":16,"y":34,"fill":"$fam-create","width":64,"height":3} |
| J7vzH / Zw64S | rectangle / Row 2 | {"name":"Row 2"} | {"x":16,"y":53,"fill":"$fam-create","width":64,"height":3} |
| yzw86 / q3YdJ7 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| U0xuLd / yzw86 | text / Product Name | {"name":"Product Name","content":"Tables"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| Pxd72 / yzw86 | text / Idea | {"name":"Idea","content":"A grid with a header row — a spreadsheet on the surface, a SQL table underneath."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| zA7JJ / VSYxC | frame / Mark · Forms | {"name":"Mark · Forms"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| r5dqH / zA7JJ | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| XztHZ / r5dqH | rectangle / Sheet | {"name":"Sheet"} | {"cornerRadius":8,"x":20,"y":14,"fill":"$mark-primary","width":56,"height":68} |
| B9EEN8 / r5dqH | rectangle / Field 1 | {"name":"Field 1"} | {"cornerRadius":4,"x":28,"y":24,"fill":"$fam-create","width":40,"height":8} |
| yN66H / r5dqH | rectangle / Field 2 | {"name":"Field 2"} | {"cornerRadius":4,"x":28,"y":38,"fill":"$fam-create","width":40,"height":8} |
| Asabb / r5dqH | rectangle / Check | {"name":"Check"} | {"cornerRadius":3,"x":28,"y":54,"fill":"$fam-create","width":14,"height":14} |
| yHmYr / r5dqH | path / Tick | {"name":"Tick"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$mark-primary","strokeWidth":3,"strokeLinejoin":"round","strokeLinecap":"round"} |
| WjHRr / r5dqH | rectangle / Label | {"name":"Label"} | {"cornerRadius":3,"x":46,"y":58,"fill":"$fam-create","width":22,"height":6} |
| DkRut / zA7JJ | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| HvK1w / DkRut | text / Product Name | {"name":"Product Name","content":"Forms"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| m1l2Dz / DkRut | text / Idea | {"name":"Idea","content":"A form with fields and a ticked box — questions asked, answers collected, files generated."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| hgwxh / VSYxC | frame / Mark · Whiteboards | {"name":"Mark · Whiteboards"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| oCsTj / hgwxh | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| t3l1c3 / oCsTj | rectangle / Legs L | {"name":"Legs L"} | {"cornerRadius":2,"x":28,"y":62,"fill":"$mark-secondary","width":5,"height":18} |
| u84xVk / oCsTj | rectangle / Legs R | {"name":"Legs R"} | {"cornerRadius":2,"x":63,"y":62,"fill":"$mark-secondary","width":5,"height":18} |
| QW94R / oCsTj | rectangle / Board | {"name":"Board"} | {"cornerRadius":6,"x":16,"y":16,"fill":"$mark-primary","width":64,"height":50} |
| j65sCb / oCsTj | path / Scribble | {"name":"Scribble"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$fam-create","strokeWidth":5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Gk1m7 / hgwxh | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| vzTVT / Gk1m7 | text / Product Name | {"name":"Product Name","content":"Whiteboards"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| FhyoY / Gk1m7 | text / Idea | {"name":"Idea","content":"A whiteboard on its easel with a free scribble — sketch the idea before you structure it."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| v5Djs / VSYxC | frame / Mark · Diagrams | {"name":"Mark · Diagrams"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| I1ubG / v5Djs | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| CANWV / I1ubG | rectangle / Top Node | {"name":"Top Node"} | {"cornerRadius":5,"x":34,"y":14,"fill":"$mark-primary","width":28,"height":20} |
| sk3KA / I1ubG | rectangle / Stem | {"name":"Stem"} | {"x":46.5,"y":34,"fill":"$mark-primary","width":3,"height":10} |
| FKrE9 / I1ubG | rectangle / Branch | {"name":"Branch"} | {"x":27,"y":43,"fill":"$mark-primary","width":42,"height":3} |
| vxELV / I1ubG | rectangle / Drop L | {"name":"Drop L"} | {"x":27,"y":43,"fill":"$mark-primary","width":3,"height":11} |
| BWnRm / I1ubG | rectangle / Drop R | {"name":"Drop R"} | {"x":66,"y":43,"fill":"$mark-primary","width":3,"height":11} |
| fxQMm / I1ubG | polygon / Decision | {"name":"Decision"} | {"polygonCount":4,"x":16,"y":54,"fill":"$mark-secondary","width":26,"height":26} |
| qlHGh / I1ubG | rectangle / Bottom Node | {"name":"Bottom Node"} | {"cornerRadius":5,"x":54,"y":56,"fill":"$mark-primary","width":26,"height":22} |
| uudb4 / v5Djs | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| xgXtW / uudb4 | text / Product Name | {"name":"Product Name","content":"Diagrams"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| MX7lY / uudb4 | text / Idea | {"name":"Idea","content":"A flowchart: one step branching into two — processes and systems drawn as boxes and connectors."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| S3R6In / VSYxC | frame / Mark · Content | {"name":"Mark · Content"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| z7mJKX / S3R6In | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| V2Z3qZ / z7mJKX | rectangle / Site Behind | {"name":"Site Behind"} | {"cornerRadius":7,"x":26,"y":14,"fill":"$mark-secondary","width":54,"height":44} |
| c5Z3w / z7mJKX | rectangle / Page | {"name":"Page"} | {"cornerRadius":7,"x":16,"y":26,"fill":"$mark-primary","width":56,"height":54} |
| ocTjB / z7mJKX | ellipse / Dot 1 | {"name":"Dot 1"} | {"x":22,"y":31,"fill":"$fam-create","width":5,"height":5} |
| zlEOF / z7mJKX | ellipse / Dot 2 | {"name":"Dot 2"} | {"x":30,"y":31,"fill":"$fam-create","width":5,"height":5} |
| IYHYe / z7mJKX | rectangle / Hero Block | {"name":"Hero Block"} | {"cornerRadius":3,"x":22,"y":42,"fill":"$fam-create","width":44,"height":16} |
| w72wd / z7mJKX | rectangle / Line 1 | {"name":"Line 1"} | {"cornerRadius":2,"x":22,"y":64,"fill":"$fam-create","width":32,"height":4} |
| EwM0U / z7mJKX | rectangle / Line 2 | {"name":"Line 2"} | {"cornerRadius":2,"x":22,"y":72,"fill":"$fam-create","width":22,"height":4} |
| pJCjV / S3R6In | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| Qkczm / pJCjV | text / Product Name | {"name":"Product Name","content":"Content"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| yof0z / pJCjV | text / Idea | {"name":"Idea","content":"A web page built from content blocks, with another site behind it — publish once, to every website."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| ldijF / o8qxhR | frame / Section · Operate | {"name":"Section · Operate"} | {"width":"fill_container","layout":"vertical","gap":28} |
| VrjIo / ldijF | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1.5},"padding":[0,0,16,0],"justifyContent":"space_between","alignItems":"end"} |
| DrFkk / VrjIo | frame / Family | {"name":"Family"} | {"gap":16,"alignItems":"center"} |
| W9GqaF / DrFkk | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":6,"fill":"$fam-operate","width":20,"height":20} |
| EYH92 / DrFkk | text / Family Name | {"name":"Family Name","content":"Operate"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| x2SSQ / DrFkk | text / Family No | {"name":"Family No","content":"03"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| GYRiO / VrjIo | text / Family Desc | {"name":"Family Desc","content":"People, vendors, money and decisions."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| YBTS8 / ldijF | frame / Marks | {"name":"Marks"} | {"width":"fill_container","gap":20} |
| vnT4L / YBTS8 | frame / Mark · Resourcing | {"name":"Mark · Resourcing"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| tuQp2 / vnT4L | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| kCAUq / tuQp2 | ellipse / Head B | {"name":"Head B"} | {"x":52,"y":20,"fill":"$mark-secondary","width":20,"height":20} |
| NqIR1 / tuQp2 | rectangle / Body B | {"name":"Body B"} | {"cornerRadius":[18,18,6,6],"x":44,"y":44,"fill":"$mark-secondary","width":36,"height":30} |
| Bj2HC / tuQp2 | ellipse / Head A | {"name":"Head A"} | {"x":26,"y":26,"fill":"$mark-primary","width":22,"height":22} |
| Phi5e / tuQp2 | rectangle / Body A | {"name":"Body A"} | {"cornerRadius":[21,21,6,6],"x":16,"y":52,"fill":"$mark-primary","width":42,"height":28} |
| uJkeT / vnT4L | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| mnlHP / uJkeT | text / Product Name | {"name":"Product Name","content":"Resourcing"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| gOlLS / uJkeT | text / Idea | {"name":"Idea","content":"People, one in front of the team — HR is about the person first, the structure around them second."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| BQgJC / YBTS8 | frame / Mark · Procurement | {"name":"Mark · Procurement"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| LGUvu / BQgJC | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| sOsHy / LGUvu | path / Handle | {"name":"Handle"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$mark-primary","strokeWidth":6,"strokeLinejoin":"round","strokeLinecap":"round"} |
| NmDZu / LGUvu | rectangle / Basket | {"name":"Basket"} | {"cornerRadius":[4,4,12,12],"x":26,"y":28,"fill":"$mark-primary","width":54,"height":30} |
| z3wbpx / LGUvu | rectangle / Slat | {"name":"Slat"} | {"x":26,"y":40,"fill":"$fam-operate","width":54,"height":3} |
| K1n9GI / LGUvu | ellipse / Wheel L | {"name":"Wheel L"} | {"x":32,"y":64,"fill":"$mark-secondary","width":14,"height":14} |
| vJk3v / LGUvu | ellipse / Wheel R | {"name":"Wheel R"} | {"x":62,"y":64,"fill":"$mark-secondary","width":14,"height":14} |
| Pflg5 / BQgJC | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| TkcUp / Pflg5 | text / Product Name | {"name":"Product Name","content":"Procurement"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| EXUto / Pflg5 | text / Idea | {"name":"Idea","content":"The shopping cart — buying for the business, from approved vendors, with a paper trail."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| E4AL8 / YBTS8 | frame / Mark · Accounting | {"name":"Mark · Accounting"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| jt5UP / E4AL8 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| P9ft7F / jt5UP | rectangle / Body | {"name":"Body"} | {"cornerRadius":10,"x":22,"y":14,"fill":"$mark-primary","width":52,"height":68} |
| Lb3DR / jt5UP | rectangle / Screen | {"name":"Screen"} | {"cornerRadius":3,"x":30,"y":22,"fill":"$fam-operate","width":36,"height":14} |
| xxHY9 / jt5UP | rectangle / Key 1 | {"name":"Key 1"} | {"cornerRadius":2,"x":30,"y":44,"fill":"$fam-operate","width":10,"height":10} |
| xyUai / jt5UP | rectangle / Key 2 | {"name":"Key 2"} | {"cornerRadius":2,"x":43,"y":44,"fill":"$fam-operate","width":10,"height":10} |
| xkiWj / jt5UP | rectangle / Key 3 | {"name":"Key 3"} | {"cornerRadius":2,"x":56,"y":44,"fill":"$mark-secondary","width":10,"height":26} |
| FZ3Vu / jt5UP | rectangle / Key 4 | {"name":"Key 4"} | {"cornerRadius":2,"x":30,"y":60,"fill":"$fam-operate","width":10,"height":10} |
| ieJTp / jt5UP | rectangle / Key 5 | {"name":"Key 5"} | {"cornerRadius":2,"x":43,"y":60,"fill":"$fam-operate","width":10,"height":10} |
| KchiY / E4AL8 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| S9jrv / KchiY | text / Product Name | {"name":"Product Name","content":"Accounting"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| oezWW / KchiY | text / Idea | {"name":"Idea","content":"The calculator — money owed and money moved, added up until the statement balances."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| hYRj8 / YBTS8 | frame / Mark · Approvals | {"name":"Mark · Approvals"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| nZyrq / hYRj8 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| fD7pQ / nZyrq | ellipse / Seal | {"name":"Seal"} | {"x":16,"y":16,"fill":"$mark-primary","width":64,"height":64} |
| MvjH4 / nZyrq | path / Check | {"name":"Check"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$fam-operate","strokeWidth":8,"strokeLinejoin":"round","strokeLinecap":"round"} |
| K8Kox / hYRj8 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| J2fkte / K8Kox | text / Product Name | {"name":"Product Name","content":"Approvals"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| esE2M / K8Kox | text / Idea | {"name":"Idea","content":"The check mark inside a seal — a request reviewed, decided, and kept on the record."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| dz7ER / YBTS8 | frame / Mark · Clients | {"name":"Mark · Clients"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| sjlpU / dz7ER | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| iNwLt / sjlpU | rectangle / Card Behind | {"name":"Card Behind"} | {"cornerRadius":7,"x":22,"y":16,"fill":"$mark-secondary","width":58,"height":40} |
| htp9Z / sjlpU | rectangle / Card | {"name":"Card"} | {"cornerRadius":8,"x":16,"y":30,"fill":"$mark-primary","width":64,"height":48} |
| N8dez / sjlpU | ellipse / Avatar Head | {"name":"Avatar Head"} | {"x":25,"y":40,"fill":"$fam-operate","width":14,"height":14} |
| YSePd / sjlpU | rectangle / Avatar Body | {"name":"Avatar Body"} | {"cornerRadius":[10,10,2,2],"x":22,"y":56,"fill":"$fam-operate","width":20,"height":12} |
| VpFTN / sjlpU | rectangle / Line 1 | {"name":"Line 1"} | {"cornerRadius":2.5,"x":48,"y":44,"fill":"$fam-operate","width":24,"height":5} |
| p6Jn9S / sjlpU | rectangle / Line 2 | {"name":"Line 2"} | {"cornerRadius":2.5,"x":48,"y":56,"fill":"$fam-operate","width":18,"height":5} |
| N3iAQ / dz7ER | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| LSmnq / N3iAQ | text / Product Name | {"name":"Product Name","content":"Clients"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| i2cna / N3iAQ | text / Idea | {"name":"Idea","content":"The contact card — a client's profile, the person and their details, always one tap away."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| MklGe / YBTS8 | frame / Mark · Sign | {"name":"Mark · Sign"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| Y36Sm / MklGe | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| sJNsY / Y36Sm | rectangle / Baseline | {"name":"Baseline"} | {"cornerRadius":2.5,"x":16,"y":74,"fill":"$mark-secondary","width":64,"height":5} |
| C6zQo / Y36Sm | path / Nib | {"name":"Nib"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| f0EIA / Y36Sm | ellipse / Breather | {"name":"Breather"} | {"x":43,"y":36,"fill":"$fam-operate","width":10,"height":10} |
| J3XTI / Y36Sm | rectangle / Slit | {"name":"Slit"} | {"cornerRadius":1.5,"x":46.5,"y":44,"fill":"$fam-operate","width":3,"height":24} |
| kgw7N / MklGe | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| A0AJct / kgw7N | text / Product Name | {"name":"Product Name","content":"Sign"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| U7uZV / kgw7N | text / Idea | {"name":"Idea","content":"The pen nib meeting the line — a signature, backed by cryptographic proof that it's really yours."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
