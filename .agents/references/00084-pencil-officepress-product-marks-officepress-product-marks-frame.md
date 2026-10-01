# OfficePress Product Marks — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| o8qxhR / root | frame / OfficePress Product Marks | {"name":"OfficePress Product Marks"} | {"x":0,"y":2493,"clip":true,"width":1680,"fill":"$bg","layout":"vertical","gap":80,"padding":80} |
| pP9A6 / o8qxhR | frame / Header | {"name":"Header"} | {"width":"fill_container","gap":80,"justifyContent":"space_between"} |
| eWkN3 / pP9A6 | frame / Intro | {"name":"Intro"} | {"width":720,"layout":"vertical","gap":20} |
| u4K3U / eWkN3 | text / Eyebrow | {"name":"Eyebrow","content":"OFFICEPRESS  /  BACK OFFICE SUITE  /  MARK SYSTEM v2 — MEANING FIRST"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal","letterSpacing":1.5} |
| q0KKgp / eWkN3 | text / Title | {"name":"Title","content":"One grid.\nTwenty-three familiar symbols."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.02,"fontFamily":"$font-display","fontSize":64,"fontWeight":"700","letterSpacing":-2} |
| SD2N4 / eWkN3 | text / Lede | {"name":"Lede","content":"Every mark starts from the symbol people already know for the job — a calendar, a headset, a pen nib — then gets reduced to the same simple geometry. Colour tells you the family; the symbol tells you the product."} | {"fill":"$muted","textGrowth":"fixed-width","width":560,"lineHeight":1.5,"fontFamily":"$font-display","fontSize":18,"fontWeight":"normal"} |
| V682JW / pP9A6 | frame / Rules | {"name":"Rules"} | {"width":560,"layout":"vertical"} |
| dldKS / V682JW | frame / Rule 01 | {"name":"Rule 01"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"gap":20,"padding":[16,0]} |
| L8ceCe / dldKS | text / No | {"name":"No","content":"01"} | {"fill":"$muted","textGrowth":"fixed-width","width":28,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| djrD0 / dldKS | frame / Rule Text | {"name":"Rule Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| FiqlO / djrD0 | text / Rule Title | {"name":"Rule Title","content":"Tile"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":15,"fontWeight":"700"} |
| XOSiZ / djrD0 | text / Rule Desc | {"name":"Rule Desc","content":"Every mark sits on a 96-unit rounded tile (radius 24) filled with its suite family colour."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| vRqyf / V682JW | frame / Rule 02 | {"name":"Rule 02"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"gap":20,"padding":[16,0]} |
| LYiFG / vRqyf | text / No | {"name":"No","content":"02"} | {"fill":"$muted","textGrowth":"fixed-width","width":28,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| VE9cH / vRqyf | frame / Rule Text | {"name":"Rule Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| IIDAl / VE9cH | text / Rule Title | {"name":"Rule Title","content":"Grid"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":15,"fontWeight":"700"} |
| EelCr / VE9cH | text / Rule Desc | {"name":"Rule Desc","content":"Shapes snap to an 8-unit grid inside a 16-unit safe margin. Keep it to the fewest parts that still read."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| W1hqNK / V682JW | frame / Rule 03 | {"name":"Rule 03"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"gap":20,"padding":[16,0]} |
| RvcUN / W1hqNK | text / No | {"name":"No","content":"03"} | {"fill":"$muted","textGrowth":"fixed-width","width":28,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| BnAWQ / W1hqNK | frame / Rule Text | {"name":"Rule Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| yNFPz / BnAWQ | text / Rule Title | {"name":"Rule Title","content":"Two tones + cut-outs"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":15,"fontWeight":"700"} |
| ogyW2 / BnAWQ | text / Rule Desc | {"name":"Rule Desc","content":"Solid white carries the symbol, 55% white the supporting layer; details are cut out in the tile colour."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| A3TFU / V682JW | frame / Rule 04 | {"name":"Rule 04"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"gap":20,"padding":[16,0]} |
| unGsU / A3TFU | text / No | {"name":"No","content":"04"} | {"fill":"$muted","textGrowth":"fixed-width","width":28,"fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| xJYaQ / A3TFU | frame / Rule Text | {"name":"Rule Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| SjZwp / xJYaQ | text / Rule Title | {"name":"Rule Title","content":"Recognisable first"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":15,"fontWeight":"700"} |
| MHtw0 / xJYaQ | text / Rule Desc | {"name":"Rule Desc","content":"Start from the universal symbol for the job, then reduce it to squares, circles, pills and arcs. No gradients."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| DkNl5 / o8qxhR | frame / Section · Communicate | {"name":"Section · Communicate"} | {"width":"fill_container","layout":"vertical","gap":28} |
| o5REto / DkNl5 | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1.5},"padding":[0,0,16,0],"justifyContent":"space_between","alignItems":"end"} |
| B2gob6 / o5REto | frame / Family | {"name":"Family"} | {"gap":16,"alignItems":"center"} |
| i2ktzA / B2gob6 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":6,"fill":"$fam-communicate","width":20,"height":20} |
| OJO9E / B2gob6 | text / Family Name | {"name":"Family Name","content":"Communicate"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| JYbRL / B2gob6 | text / Family No | {"name":"Family No","content":"01"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| gdDmk / o5REto | text / Family Desc | {"name":"Family Desc","content":"Conversations, time and presence."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| q7sMtN / DkNl5 | frame / Marks | {"name":"Marks"} | {"width":"fill_container","gap":20} |
| kslhC / q7sMtN | frame / Mark · Inbox | {"name":"Mark · Inbox"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| GdlvS / kslhC | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| p5lQc / GdlvS | path / Walls | {"name":"Walls"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-secondary","width":96,"height":96} |
| jHAnY / GdlvS | path / Front | {"name":"Front"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| N1H3WZ / kslhC | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| cgSav / N1H3WZ | text / Product Name | {"name":"Product Name","content":"Inbox"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| mH6Zs / N1H3WZ | text / Idea | {"name":"Idea","content":"The classic in-tray, seen from the front: sloped walls and the finger notch — mail waiting to be handled."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| BYIRQ / q7sMtN | frame / Mark · Chat | {"name":"Mark · Chat"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| BfIun / BYIRQ | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| X2r7I / BfIun | rectangle / Back Bubble | {"name":"Back Bubble"} | {"cornerRadius":12,"x":32,"y":16,"fill":"$mark-secondary","width":48,"height":34} |
| zFJmc / BfIun | rectangle / Bubble | {"name":"Bubble"} | {"cornerRadius":14,"x":16,"y":30,"fill":"$mark-primary","width":56,"height":38} |
| pBmGe / BfIun | path / Tail | {"name":"Tail"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| ULR3f / BfIun | ellipse / Dot 1 | {"name":"Dot 1"} | {"x":28,"y":45,"fill":"$fam-communicate","width":8,"height":8} |
| U8cDU / BfIun | ellipse / Dot 2 | {"name":"Dot 2"} | {"x":40,"y":45,"fill":"$fam-communicate","width":8,"height":8} |
| d17VUT / BfIun | ellipse / Dot 3 | {"name":"Dot 3"} | {"x":52,"y":45,"fill":"$fam-communicate","width":8,"height":8} |
| mctj8 / BYIRQ | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| ZApYx / mctj8 | text / Product Name | {"name":"Product Name","content":"Chat"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| G4Sba / mctj8 | text / Idea | {"name":"Idea","content":"The speech bubble, mid-reply — three dots for a conversation that's still going."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| Ve0Ze / q7sMtN | frame / Mark · Meet | {"name":"Mark · Meet"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| jqbLg / Ve0Ze | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| VT5jI / jqbLg | ellipse / Circle A | {"name":"Circle A"} | {"x":16,"y":26,"fill":"$mark-secondary","width":44,"height":44} |
| Kyuio / jqbLg | ellipse / Circle B | {"name":"Circle B"} | {"x":36,"y":26,"fill":"$mark-secondary","width":44,"height":44} |
| lyghU / jqbLg | path / Lens | {"name":"Lens"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| E6aFRk / Ve0Ze | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| l2Hgc / E6aFRk | text / Product Name | {"name":"Product Name","content":"Meet"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| zInVc / E6aFRk | text / Idea | {"name":"Idea","content":"Two circles converging — the shared lens in the middle is where people meet and sync."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| EdvQV / q7sMtN | frame / Mark · Calendar | {"name":"Mark · Calendar"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| Wu6Yu / EdvQV | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| l3YSw / Wu6Yu | rectangle / Page | {"name":"Page"} | {"cornerRadius":10,"x":16,"y":22,"fill":"$mark-primary","width":64,"height":58} |
| pazwR / Wu6Yu | rectangle / Header Cut | {"name":"Header Cut"} | {"x":16,"y":38,"fill":"$fam-communicate","width":64,"height":4} |
| gs0un / Wu6Yu | rectangle / Ring L | {"name":"Ring L"} | {"cornerRadius":3,"x":30,"y":14,"fill":"$mark-secondary","width":6,"height":16} |
| Fp3Zj / Wu6Yu | rectangle / Ring R | {"name":"Ring R"} | {"cornerRadius":3,"x":60,"y":14,"fill":"$mark-secondary","width":6,"height":16} |
| wgsip / Wu6Yu | rectangle / Today | {"name":"Today"} | {"cornerRadius":3,"x":52,"y":52,"fill":"$fam-communicate","width":14,"height":14} |
| nB0nQ / EdvQV | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| HwzCY / nB0nQ | text / Product Name | {"name":"Product Name","content":"Calendar"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| ZxMBB / nB0nQ | text / Idea | {"name":"Idea","content":"The calendar page with one day marked — the universal sign for a scheduled moment."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| Mx9Xf / q7sMtN | frame / Mark · Support | {"name":"Mark · Support"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| hXkoA / Mx9Xf | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| mAeCS / hXkoA | ellipse / Headband | {"name":"Headband"} | {"x":20,"y":18,"innerRadius":0.84,"sweepAngle":180,"fill":"$mark-primary","width":56,"height":56} |
| Hw3Zy / hXkoA | rectangle / Cup L | {"name":"Cup L"} | {"cornerRadius":7,"x":16,"y":42,"fill":"$mark-primary","width":14,"height":26} |
| h5KFZr / hXkoA | rectangle / Cup R | {"name":"Cup R"} | {"cornerRadius":7,"x":66,"y":42,"fill":"$mark-primary","width":14,"height":26} |
| T2I2U / hXkoA | path / Boom | {"name":"Boom"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$mark-secondary","strokeWidth":5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Mt72q / hXkoA | rectangle / Mic | {"name":"Mic"} | {"cornerRadius":4,"x":46,"y":74,"fill":"$mark-primary","width":16,"height":8} |
| V5mnB / Mx9Xf | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| PKR3T / V5mnB | text / Product Name | {"name":"Product Name","content":"Support"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| sfuSZ / V5mnB | text / Idea | {"name":"Idea","content":"The headset — someone is on the line, ready to take the ticket through to resolution."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| o3wxij / q7sMtN | frame / Mark · Agent | {"name":"Mark · Agent"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| xg50P / o3wxij | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-communicate","cornerRadius":24,"layout":"none"} |
| K50iN / xg50P | ellipse / Antenna Tip | {"name":"Antenna Tip"} | {"x":42,"y":12,"fill":"$mark-secondary","width":12,"height":12} |
| PTjlK / xg50P | rectangle / Antenna | {"name":"Antenna"} | {"cornerRadius":2,"x":46,"y":20,"fill":"$mark-secondary","width":4,"height":12} |
| s8xNZ / xg50P | rectangle / Head | {"name":"Head"} | {"cornerRadius":14,"x":18,"y":32,"fill":"$mark-primary","width":60,"height":46} |
| oxKhJ / xg50P | ellipse / Eye L | {"name":"Eye L"} | {"x":31,"y":47,"fill":"$fam-communicate","width":12,"height":12} |
| NtKHY / xg50P | ellipse / Eye R | {"name":"Eye R"} | {"x":53,"y":47,"fill":"$fam-communicate","width":12,"height":12} |
| DxJU6 / xg50P | rectangle / Mouth | {"name":"Mouth"} | {"cornerRadius":2,"x":40,"y":66,"fill":"$fam-communicate","width":16,"height":4} |
| dPeRs / o3wxij | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| lYQsY / dPeRs | text / Product Name | {"name":"Product Name","content":"Agent"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| kIiCs / dPeRs | text / Idea | {"name":"Idea","content":"A friendly robot head — your own AI helper, listening on its antenna and ready to work."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
