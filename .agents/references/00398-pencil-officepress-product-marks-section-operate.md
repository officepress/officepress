# OfficePress Product Marks / Section · Operate

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| ldijF / o8qxhR | frame / Section · Operate | {"name":"Section · Operate"} | {"width":"fill_container","layout":"vertical","gap":28} |
| VrjIo / ldijF | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1.5},"padding":[0,0,16,0],"justifyContent":"space_between","alignItems":"end"} |
| DrFkk / VrjIo | frame / Family | {"name":"Family"} | {"gap":16,"alignItems":"center"} |
| W9GqaF / DrFkk | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":6,"fill":"$fam-operate","width":20,"height":20} |
| EYH92 / DrFkk | text / Family Name | {"name":"Family Name","content":"Operate"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| x2SSQ / DrFkk | text / Family No | {"name":"Family No","content":"03"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| GYRiO / VrjIo | text / Family Desc | {"name":"Family Desc","content":"People, vendors, money, content and process."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| YBTS8 / ldijF | frame / Marks | {"name":"Marks"} | {"width":"fill_container","layout":"vertical","gap":16} |
| j1KfoM / YBTS8 | frame / Row 1 | {"name":"Row 1"} | {"width":"fill_container","gap":16} |
| vnT4L / j1KfoM | frame / Mark · Resourcing | {"name":"Mark · Resourcing"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| tuQp2 / vnT4L | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| kCAUq / tuQp2 | ellipse / Head B | {"name":"Head B"} | {"x":52,"y":20,"fill":"$mark-secondary","width":20,"height":20} |
| NqIR1 / tuQp2 | rectangle / Body B | {"name":"Body B"} | {"cornerRadius":[18,18,6,6],"x":44,"y":44,"fill":"$mark-secondary","width":36,"height":30} |
| Bj2HC / tuQp2 | ellipse / Head A | {"name":"Head A"} | {"x":26,"y":26,"fill":"$mark-primary","width":22,"height":22} |
| Phi5e / tuQp2 | rectangle / Body A | {"name":"Body A"} | {"cornerRadius":[21,21,6,6],"x":16,"y":52,"fill":"$mark-primary","width":42,"height":28} |
| uJkeT / vnT4L | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| mnlHP / uJkeT | text / Product Name | {"name":"Product Name","content":"Resourcing"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| gOlLS / uJkeT | text / Idea | {"name":"Idea","content":"People, one in front of the team — HR is about the person first, the structure around them second."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| BQgJC / j1KfoM | frame / Mark · Procurement | {"name":"Mark · Procurement"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| LGUvu / BQgJC | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| sOsHy / LGUvu | path / Handle | {"name":"Handle"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$mark-primary","strokeWidth":6,"strokeLinejoin":"round","strokeLinecap":"round"} |
| NmDZu / LGUvu | rectangle / Basket | {"name":"Basket"} | {"cornerRadius":[4,4,12,12],"x":26,"y":28,"fill":"$mark-primary","width":54,"height":30} |
| z3wbpx / LGUvu | rectangle / Slat | {"name":"Slat"} | {"x":26,"y":40,"fill":"$fam-operate","width":54,"height":3} |
| K1n9GI / LGUvu | ellipse / Wheel L | {"name":"Wheel L"} | {"x":32,"y":64,"fill":"$mark-secondary","width":14,"height":14} |
| vJk3v / LGUvu | ellipse / Wheel R | {"name":"Wheel R"} | {"x":62,"y":64,"fill":"$mark-secondary","width":14,"height":14} |
| Pflg5 / BQgJC | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| TkcUp / Pflg5 | text / Product Name | {"name":"Product Name","content":"Procurement"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| EXUto / Pflg5 | text / Idea | {"name":"Idea","content":"The shopping cart — buying for the business, from approved vendors, with a paper trail."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| E4AL8 / j1KfoM | frame / Mark · Accounting | {"name":"Mark · Accounting"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
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
| hYRj8 / j1KfoM | frame / Mark · Approvals | {"name":"Mark · Approvals"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| nZyrq / hYRj8 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| fD7pQ / nZyrq | ellipse / Seal | {"name":"Seal"} | {"x":16,"y":16,"fill":"$mark-primary","width":64,"height":64} |
| MvjH4 / nZyrq | path / Check | {"name":"Check"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$fam-operate","strokeWidth":8,"strokeLinejoin":"round","strokeLinecap":"round"} |
| K8Kox / hYRj8 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| J2fkte / K8Kox | text / Product Name | {"name":"Product Name","content":"Approvals"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| esE2M / K8Kox | text / Idea | {"name":"Idea","content":"The check mark inside a seal — a request reviewed, decided, and kept on the record."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| MklGe / j1KfoM | frame / Mark · Sign | {"name":"Mark · Sign"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| Y36Sm / MklGe | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| sJNsY / Y36Sm | rectangle / Baseline | {"name":"Baseline"} | {"cornerRadius":2.5,"x":16,"y":74,"fill":"$mark-secondary","width":64,"height":5} |
| C6zQo / Y36Sm | path / Nib | {"name":"Nib"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| f0EIA / Y36Sm | ellipse / Breather | {"name":"Breather"} | {"x":43,"y":36,"fill":"$fam-operate","width":10,"height":10} |
| J3XTI / Y36Sm | rectangle / Slit | {"name":"Slit"} | {"cornerRadius":1.5,"x":46.5,"y":44,"fill":"$fam-operate","width":3,"height":24} |
| kgw7N / MklGe | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| A0AJct / kgw7N | text / Product Name | {"name":"Product Name","content":"Sign"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| U7uZV / kgw7N | text / Idea | {"name":"Idea","content":"The pen nib meeting the line — a signature, backed by cryptographic proof that it's really yours."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| S3R6In / j1KfoM | frame / Mark · Content | {"name":"Mark · Content"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| z7mJKX / S3R6In | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| V2Z3qZ / z7mJKX | rectangle / Site Behind | {"name":"Site Behind"} | {"cornerRadius":7,"x":26,"y":14,"fill":"$mark-secondary","width":54,"height":44} |
| c5Z3w / z7mJKX | rectangle / Page | {"name":"Page"} | {"cornerRadius":7,"x":16,"y":26,"fill":"$mark-primary","width":56,"height":54} |
| ocTjB / z7mJKX | ellipse / Dot 1 | {"name":"Dot 1"} | {"x":22,"y":31,"fill":"$fam-operate","width":5,"height":5} |
| zlEOF / z7mJKX | ellipse / Dot 2 | {"name":"Dot 2"} | {"x":30,"y":31,"fill":"$fam-operate","width":5,"height":5} |
| IYHYe / z7mJKX | rectangle / Hero Block | {"name":"Hero Block"} | {"cornerRadius":3,"x":22,"y":42,"fill":"$fam-operate","width":44,"height":16} |
| w72wd / z7mJKX | rectangle / Line 1 | {"name":"Line 1"} | {"cornerRadius":2,"x":22,"y":64,"fill":"$fam-operate","width":32,"height":4} |
| EwM0U / z7mJKX | rectangle / Line 2 | {"name":"Line 2"} | {"cornerRadius":2,"x":22,"y":72,"fill":"$fam-operate","width":22,"height":4} |
| pJCjV / S3R6In | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| Qkczm / pJCjV | text / Product Name | {"name":"Product Name","content":"Content"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| yof0z / pJCjV | text / Idea | {"name":"Idea","content":"A web page built from content blocks, with another site behind it — publish once, to every website."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| MdCn2 / j1KfoM | frame / Mark · Pipelines | {"name":"Mark · Pipelines"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| fD1Av / MdCn2 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-operate","cornerRadius":24,"layout":"none"} |
| v09mYm / fD1Av | rectangle / Stage 1 | {"name":"Stage 1"} | {"cornerRadius":6,"x":16,"y":16,"fill":"$mark-secondary","width":18,"height":64} |
| f5ebZ / fD1Av | rectangle / Card 1.1 | {"name":"Card 1.1"} | {"cornerRadius":3,"x":19,"y":20,"fill":"$mark-primary","width":12,"height":12} |
| mMrFz / fD1Av | rectangle / Card 1.2 | {"name":"Card 1.2"} | {"cornerRadius":3,"x":19,"y":36,"fill":"$mark-primary","width":12,"height":12} |
| LFl6S / fD1Av | rectangle / Card 1.3 | {"name":"Card 1.3"} | {"cornerRadius":3,"x":19,"y":52,"fill":"$mark-primary","width":12,"height":12} |
| l1wLTH / fD1Av | rectangle / Stage 2 | {"name":"Stage 2"} | {"cornerRadius":6,"x":39,"y":16,"fill":"$mark-secondary","width":18,"height":64} |
| TnGGt / fD1Av | rectangle / Card 2.1 | {"name":"Card 2.1"} | {"cornerRadius":3,"x":42,"y":20,"fill":"$mark-primary","width":12,"height":12} |
| z6nHI / fD1Av | rectangle / Card 2.2 | {"name":"Card 2.2"} | {"cornerRadius":3,"x":42,"y":36,"fill":"$mark-primary","width":12,"height":12} |
| OHed7 / fD1Av | rectangle / Stage 3 | {"name":"Stage 3"} | {"cornerRadius":6,"x":62,"y":16,"fill":"$mark-secondary","width":18,"height":64} |
| Re4Ju / fD1Av | rectangle / Card 3.1 | {"name":"Card 3.1"} | {"cornerRadius":3,"x":65,"y":20,"fill":"$mark-primary","width":12,"height":12} |
| S1AWjr / fD1Av | rectangle / Card In Transit | {"name":"Card In Transit"} | {"cornerRadius":3,"x":51,"y":54,"fill":"$mark-primary","width":16,"height":14,"stroke":"$fam-operate","strokeWidth":3,"strokeAlignment":"outer"} |
| v6wVT1 / MdCn2 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| e9tLNo / v6wVT1 | text / Product Name | {"name":"Product Name","content":"Pipelines"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| d928Ek / v6wVT1 | text / Idea | {"name":"Idea","content":"A board of stages with live cards moving left to right — deals, orders and tasks flowing through the whole business."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
