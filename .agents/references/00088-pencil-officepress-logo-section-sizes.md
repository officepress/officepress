# OfficePress Logo / Section · Sizes

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| FvpSC / dJApv | frame / Section · Sizes | {"name":"Section · Sizes"} | {"width":"fill_container","layout":"vertical","gap":28} |
| mfm4Q / FvpSC | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| ORKWL / mfm4Q | frame / Title | {"name":"Title"} | {"gap":10,"alignItems":"center"} |
| Sdskd / ORKWL | text / Section Name | {"name":"Section Name","content":"Sizes"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| dgTyI / ORKWL | text / Section No | {"name":"Section No","content":"03"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| f2I6W / mfm4Q | text / Section Desc | {"name":"Section Desc","content":"Fewest parts that still read — holds down to a 16 px favicon."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| srcT6 / FvpSC | frame / Size Row | {"name":"Size Row"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"gap":56,"padding":40,"alignItems":"end"} |
| R1ByE / srcT6 | frame / Size 128 | {"name":"Size 128"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| DxNfD / R1ByE | frame / Logo Mark · 128 | {"name":"Logo Mark · 128"} | {"clip":true,"width":128,"height":128,"fill":"$suite-tile","cornerRadius":32,"layout":"none"} |
| mjioC / DxNfD | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":8,"x":21.333333333333332,"y":53.33333333333333,"fill":"$mark-secondary","width":32,"height":53.33333333333333} |
| fGIvY / DxNfD | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":10.666666666666666,"x":42.666666666666664,"y":21.333333333333332,"fill":"$mark-primary","width":64,"height":85.33333333333333} |
| ez73v / DxNfD | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":4,"x":53.33333333333333,"y":32,"fill":"$fam-communicate","width":16,"height":16} |
| K9XouS / DxNfD | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":4,"x":80,"y":32,"fill":"$fam-create","width":16,"height":16} |
| kdo69 / DxNfD | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":4,"x":53.33333333333333,"y":58.666666666666664,"fill":"$fam-operate","width":16,"height":16} |
| fv2fJ / DxNfD | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":4,"x":80,"y":58.666666666666664,"fill":"$fam-commerce","width":16,"height":16} |
| jc922 / DxNfD | rectangle / Door | {"name":"Door"} | {"cornerRadius":[5.333333333333333,5.333333333333333,0,0],"x":64,"y":85.33333333333333,"fill":"$suite-tile","width":21.333333333333332,"height":24} |
| rTA17 / R1ByE | text / Px | {"name":"Px","content":"128 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| f3uMbd / srcT6 | frame / Size 96 | {"name":"Size 96"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| Mkfzb / f3uMbd | frame / Logo Mark · 96 | {"name":"Logo Mark · 96"} | {"clip":true,"width":96,"height":96,"fill":"$suite-tile","cornerRadius":24,"layout":"none"} |
| aqtQL / Mkfzb | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":6,"x":16,"y":40,"fill":"$mark-secondary","width":24,"height":40} |
| JEch7 / Mkfzb | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":8,"x":32,"y":16,"fill":"$mark-primary","width":48,"height":64} |
| nhpWQ / Mkfzb | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":3,"x":40,"y":24,"fill":"$fam-communicate","width":12,"height":12} |
| b5Rhjq / Mkfzb | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":3,"x":60,"y":24,"fill":"$fam-create","width":12,"height":12} |
| fo3fH / Mkfzb | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":3,"x":40,"y":44,"fill":"$fam-operate","width":12,"height":12} |
| ZQTKt / Mkfzb | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":3,"x":60,"y":44,"fill":"$fam-commerce","width":12,"height":12} |
| m89VF2 / Mkfzb | rectangle / Door | {"name":"Door"} | {"cornerRadius":[4,4,0,0],"x":48,"y":64,"fill":"$suite-tile","width":16,"height":18} |
| zQ5rf / f3uMbd | text / Px | {"name":"Px","content":"96 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| x51958 / srcT6 | frame / Size 64 | {"name":"Size 64"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| VEkIA / x51958 | frame / Logo Mark · 64 | {"name":"Logo Mark · 64"} | {"clip":true,"width":64,"height":64,"fill":"$suite-tile","cornerRadius":16,"layout":"none"} |
| msaJ9 / VEkIA | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":4,"x":10.666666666666666,"y":26.666666666666664,"fill":"$mark-secondary","width":16,"height":26.666666666666664} |
| efmPL / VEkIA | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":5.333333333333333,"x":21.333333333333332,"y":10.666666666666666,"fill":"$mark-primary","width":32,"height":42.666666666666664} |
| m44kC / VEkIA | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":2,"x":26.666666666666664,"y":16,"fill":"$fam-communicate","width":8,"height":8} |
| i5pXxx / VEkIA | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":2,"x":40,"y":16,"fill":"$fam-create","width":8,"height":8} |
| gfeju / VEkIA | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":2,"x":26.666666666666664,"y":29.333333333333332,"fill":"$fam-operate","width":8,"height":8} |
| F5gRgI / VEkIA | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":2,"x":40,"y":29.333333333333332,"fill":"$fam-commerce","width":8,"height":8} |
| O5gV5C / VEkIA | rectangle / Door | {"name":"Door"} | {"cornerRadius":[2.6666666666666665,2.6666666666666665,0,0],"x":32,"y":42.666666666666664,"fill":"$suite-tile","width":10.666666666666666,"height":12} |
| bGExk / x51958 | text / Px | {"name":"Px","content":"64 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| GsUC7 / srcT6 | frame / Size 48 | {"name":"Size 48"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| lHOjH / GsUC7 | frame / Logo Mark · 48 | {"name":"Logo Mark · 48"} | {"clip":true,"width":48,"height":48,"fill":"$suite-tile","cornerRadius":12,"layout":"none"} |
| qxXLH / lHOjH | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":3,"x":8,"y":20,"fill":"$mark-secondary","width":12,"height":20} |
| jNEpv / lHOjH | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":4,"x":16,"y":8,"fill":"$mark-primary","width":24,"height":32} |
| n3PfZ / lHOjH | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":1.5,"x":20,"y":12,"fill":"$fam-communicate","width":6,"height":6} |
| l9qqX / lHOjH | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":1.5,"x":30,"y":12,"fill":"$fam-create","width":6,"height":6} |
| is0wJ / lHOjH | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":1.5,"x":20,"y":22,"fill":"$fam-operate","width":6,"height":6} |
| LCaZn / lHOjH | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":1.5,"x":30,"y":22,"fill":"$fam-commerce","width":6,"height":6} |
| uuqJS / lHOjH | rectangle / Door | {"name":"Door"} | {"cornerRadius":[2,2,0,0],"x":24,"y":32,"fill":"$suite-tile","width":8,"height":9} |
| LjjHU / GsUC7 | text / Px | {"name":"Px","content":"48 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| VWcAY / srcT6 | frame / Size 32 | {"name":"Size 32"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| R4Seb / VWcAY | frame / Logo Mark · 32 | {"name":"Logo Mark · 32"} | {"clip":true,"width":32,"height":32,"fill":"$suite-tile","cornerRadius":8,"layout":"none"} |
| Jk4Ck / R4Seb | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":2,"x":5.333333333333333,"y":13.333333333333332,"fill":"$mark-secondary","width":8,"height":13.333333333333332} |
| PMHDV / R4Seb | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":2.6666666666666665,"x":10.666666666666666,"y":5.333333333333333,"fill":"$mark-primary","width":16,"height":21.333333333333332} |
| zmVoz / R4Seb | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":1,"x":13.333333333333332,"y":8,"fill":"$fam-communicate","width":4,"height":4} |
| pII25 / R4Seb | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":1,"x":20,"y":8,"fill":"$fam-create","width":4,"height":4} |
| J4tgIm / R4Seb | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":1,"x":13.333333333333332,"y":14.666666666666666,"fill":"$fam-operate","width":4,"height":4} |
| u9npn / R4Seb | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":1,"x":20,"y":14.666666666666666,"fill":"$fam-commerce","width":4,"height":4} |
| Dl140 / R4Seb | rectangle / Door | {"name":"Door"} | {"cornerRadius":[1.3333333333333333,1.3333333333333333,0,0],"x":16,"y":21.333333333333332,"fill":"$suite-tile","width":5.333333333333333,"height":6} |
| Y4LQO / VWcAY | text / Px | {"name":"Px","content":"32 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| m8G8gW / srcT6 | frame / Size 24 | {"name":"Size 24"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| V9Iwkb / m8G8gW | frame / Logo Mark · 24 | {"name":"Logo Mark · 24"} | {"clip":true,"width":24,"height":24,"fill":"$suite-tile","cornerRadius":6,"layout":"none"} |
| S5z7Zb / V9Iwkb | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":1.5,"x":4,"y":10,"fill":"$mark-secondary","width":6,"height":10} |
| FBX0C / V9Iwkb | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":2,"x":8,"y":4,"fill":"$mark-primary","width":12,"height":16} |
| KY6Sq / V9Iwkb | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":0.75,"x":10,"y":6,"fill":"$fam-communicate","width":3,"height":3} |
| jgT05 / V9Iwkb | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":0.75,"x":15,"y":6,"fill":"$fam-create","width":3,"height":3} |
| YiIRj / V9Iwkb | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":0.75,"x":10,"y":11,"fill":"$fam-operate","width":3,"height":3} |
| PELbq / V9Iwkb | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":0.75,"x":15,"y":11,"fill":"$fam-commerce","width":3,"height":3} |
| R77zlX / V9Iwkb | rectangle / Door | {"name":"Door"} | {"cornerRadius":[1,1,0,0],"x":12,"y":16,"fill":"$suite-tile","width":4,"height":4.5} |
| tgdim / m8G8gW | text / Px | {"name":"Px","content":"24 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| dwZ42 / srcT6 | frame / Size 16 | {"name":"Size 16"} | {"layout":"vertical","gap":14,"alignItems":"center"} |
| DogOY / dwZ42 | frame / Logo Mark · 16 | {"name":"Logo Mark · 16"} | {"clip":true,"width":16,"height":16,"fill":"$suite-tile","cornerRadius":4,"layout":"none"} |
| KMnR0 / DogOY | rectangle / Annex | {"name":"Annex"} | {"cornerRadius":1,"x":2.6666666666666665,"y":6.666666666666666,"fill":"$mark-secondary","width":4,"height":6.666666666666666} |
| oZ1jS / DogOY | rectangle / Tower | {"name":"Tower"} | {"cornerRadius":1.3333333333333333,"x":5.333333333333333,"y":2.6666666666666665,"fill":"$mark-primary","width":8,"height":10.666666666666666} |
| CvRLr / DogOY | rectangle / Window 1 | {"name":"Window 1"} | {"cornerRadius":0.5,"x":6.666666666666666,"y":4,"fill":"$fam-communicate","width":2,"height":2} |
| F6W2P / DogOY | rectangle / Window 2 | {"name":"Window 2"} | {"cornerRadius":0.5,"x":10,"y":4,"fill":"$fam-create","width":2,"height":2} |
| v5g5Ex / DogOY | rectangle / Window 3 | {"name":"Window 3"} | {"cornerRadius":0.5,"x":6.666666666666666,"y":7.333333333333333,"fill":"$fam-operate","width":2,"height":2} |
| U3K9P / DogOY | rectangle / Window 4 | {"name":"Window 4"} | {"cornerRadius":0.5,"x":10,"y":7.333333333333333,"fill":"$fam-commerce","width":2,"height":2} |
| E3SK9 / DogOY | rectangle / Door | {"name":"Door"} | {"cornerRadius":[0.6666666666666666,0.6666666666666666,0,0],"x":8,"y":10.666666666666666,"fill":"$suite-tile","width":2.6666666666666665,"height":3} |
| RtKla / dwZ42 | text / Px | {"name":"Px","content":"16 px"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| pEQR8 / dJApv | frame / Section · Rules | {"name":"Section · Rules"} | {"width":"fill_container","layout":"vertical","gap":28} |
| m7IygS / pEQR8 | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| aOtQ1 / m7IygS | frame / Title | {"name":"Title"} | {"gap":10,"alignItems":"center"} |
| gHIs8 / aOtQ1 | text / Section Name | {"name":"Section Name","content":"How it follows the rules"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| l3USiS / aOtQ1 | text / Section No | {"name":"Section No","content":"04"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| iXMSH / m7IygS | text / Section Desc | {"name":"Section Desc","content":"Checked against the four mark-system rules."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| pZ2hh / pEQR8 | frame / Rules Row | {"name":"Rules Row"} | {"width":"fill_container","gap":40} |
| CjvS9 / pZ2hh | frame / Rule 01 | {"name":"Rule 01"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"layout":"vertical","gap":10,"padding":[16,0,0,0]} |
| Z2QIq / CjvS9 | frame / Rule Head | {"name":"Rule Head"} | {"gap":12,"alignItems":"center"} |
| uF4id / Z2QIq | text / No | {"name":"No","content":"01"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| g1DRN / Z2QIq | text / Rule Title | {"name":"Rule Title","content":"Tile"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| R9Z0o / CjvS9 | text / Rule Desc | {"name":"Rule Desc","content":"96-unit tile, radius 24. Filled with slate (#6B7385), a mid-tone that holds 3.8–4.8:1 contrast on white, cream, ink and black."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| e9zF9j / pZ2hh | frame / Rule 02 | {"name":"Rule 02"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"layout":"vertical","gap":10,"padding":[16,0,0,0]} |
| u9tg8a / e9zF9j | frame / Rule Head | {"name":"Rule Head"} | {"gap":12,"alignItems":"center"} |
| DK98T / u9tg8a | text / No | {"name":"No","content":"02"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| Npmhx / u9tg8a | text / Rule Title | {"name":"Rule Title","content":"Grid"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| aSHzW / e9zF9j | text / Rule Desc | {"name":"Rule Desc","content":"Tower, annex and door land on the 8-unit grid inside the 16-unit safe margin; windows sit on its 4-unit half-step. Seven parts in total."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| BuZzT / pZ2hh | frame / Rule 03 | {"name":"Rule 03"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"layout":"vertical","gap":10,"padding":[16,0,0,0]} |
| KhVyC / BuZzT | frame / Rule Head | {"name":"Rule Head"} | {"gap":12,"alignItems":"center"} |
| NX3MH / KhVyC | text / No | {"name":"No","content":"03"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| EHhJ5 / KhVyC | text / Rule Title | {"name":"Rule Title","content":"Two tones + cut-outs"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| GjI55 / BuZzT | text / Rule Desc | {"name":"Rule Desc","content":"Tower in solid white, annex in 55% white behind it. The door is cut out in the tile colour; the four windows break the rule on purpose and take the family colours."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
| ZscAt / pZ2hh | frame / Rule 04 | {"name":"Rule 04"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"layout":"vertical","gap":10,"padding":[16,0,0,0]} |
| nG9mc / ZscAt | frame / Rule Head | {"name":"Rule Head"} | {"gap":12,"alignItems":"center"} |
| lx9Xh / nG9mc | text / No | {"name":"No","content":"04"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| VyCbo / nG9mc | text / Rule Title | {"name":"Rule Title","content":"Recognisable first"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| Xg2wU / ZscAt | text / Rule Desc | {"name":"Rule Desc","content":"Starts from the universal office symbol — a building — reduced to rounded squares. The four windows nod to the four families."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":14,"fontWeight":"normal"} |
