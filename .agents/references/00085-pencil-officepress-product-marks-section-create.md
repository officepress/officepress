# OfficePress Product Marks / Section · Files

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.opcd`, extracted offline from its JSON frames with instances resolved and variables symbolic. Each row retains one node ID/path, parent, name/type, exact text/context and non-geometry properties. Samples remain examples; vector paths stay in the archive. See the [OPCD migration receipt](00399-officepress-opcd-user-preferences-direction.md) for extraction differences and lossless history.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

Current extraction: [Files/Forge revision](00403-officepress-files-forge-revision.md), including lossless prior-record recovery.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| n2NEXA / o8qxhR | frame / Section · Files | {"name":"Section · Files"} | {"width":"fill_container","layout":"vertical","gap":28} |
| CkO9b / n2NEXA | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1.5},"padding":[0,0,16,0],"justifyContent":"space_between","alignItems":"end"} |
| QvO0C / CkO9b | frame / Family | {"name":"Family"} | {"gap":16,"alignItems":"center"} |
| aseBW / QvO0C | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":6,"fill":"$fam-files","width":20,"height":20} |
| NdWWo / QvO0C | text / Family Name | {"name":"Family Name","content":"Files"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| g3QK3 / QvO0C | text / Family No | {"name":"Family No","content":"02"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| KvM0r / CkO9b | text / Family Desc | {"name":"Family Desc","content":"Files, data and knowledge — plus Forge, the studio that opens them."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| VSYxC / n2NEXA | frame / Marks | {"name":"Marks"} | {"width":"fill_container","layout":"vertical","gap":16} |
| qY4Xx / VSYxC | frame / Row 1 | {"name":"Row 1"} | {"width":"fill_container","gap":16} |
| mkjj8 / qY4Xx | frame / Mark · Drive | {"name":"Mark · Drive"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| SyFcd / mkjj8 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-files","cornerRadius":24,"layout":"none"} |
| UX0QV / SyFcd | rectangle / Tab | {"name":"Tab"} | {"cornerRadius":5,"x":16,"y":20,"fill":"$mark-secondary","width":30,"height":16} |
| lch7r / SyFcd | rectangle / Back | {"name":"Back"} | {"cornerRadius":8,"x":16,"y":28,"fill":"$mark-secondary","width":64,"height":48} |
| vL0bK / SyFcd | rectangle / Front | {"name":"Front"} | {"cornerRadius":8,"x":16,"y":38,"fill":"$mark-primary","width":64,"height":42} |
| g6cTI / mkjj8 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| WrD0Q / g6cTI | text / Product Name | {"name":"Product Name","content":"Drive"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| x1C4Us / g6cTI | text / Idea | {"name":"Idea","content":"The folder — the one symbol everyone knows for \"where my files live\", yours and the apps'."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| q3YdJ7 / qY4Xx | frame / Mark · Tables | {"name":"Mark · Tables"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| Zw64S / q3YdJ7 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-files","cornerRadius":24,"layout":"none"} |
| QiI6z / Zw64S | rectangle / Sheet | {"name":"Sheet"} | {"cornerRadius":8,"x":16,"y":18,"fill":"$mark-primary","width":64,"height":60} |
| K7DDm / Zw64S | rectangle / Header | {"name":"Header"} | {"cornerRadius":[8,8,0,0],"x":16,"y":18,"fill":"$mark-secondary","width":64,"height":16} |
| z2jGG / Zw64S | rectangle / Col 1 | {"name":"Col 1"} | {"x":36,"y":18,"fill":"$fam-files","width":3,"height":60} |
| wMWHl / Zw64S | rectangle / Col 2 | {"name":"Col 2"} | {"x":57,"y":18,"fill":"$fam-files","width":3,"height":60} |
| GvgID / Zw64S | rectangle / Row 1 | {"name":"Row 1"} | {"x":16,"y":34,"fill":"$fam-files","width":64,"height":3} |
| J7vzH / Zw64S | rectangle / Row 2 | {"name":"Row 2"} | {"x":16,"y":53,"fill":"$fam-files","width":64,"height":3} |
| yzw86 / q3YdJ7 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| U0xuLd / yzw86 | text / Product Name | {"name":"Product Name","content":"Tables"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| Pxd72 / yzw86 | text / Idea | {"name":"Idea","content":"A grid with a header row — a spreadsheet on the surface, a SQL table underneath."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| zA7JJ / qY4Xx | frame / Mark · Forms | {"name":"Mark · Forms"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| r5dqH / zA7JJ | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-files","cornerRadius":24,"layout":"none"} |
| XztHZ / r5dqH | rectangle / Sheet | {"name":"Sheet"} | {"cornerRadius":8,"x":20,"y":14,"fill":"$mark-primary","width":56,"height":68} |
| B9EEN8 / r5dqH | rectangle / Field 1 | {"name":"Field 1"} | {"cornerRadius":4,"x":28,"y":24,"fill":"$fam-files","width":40,"height":8} |
| yN66H / r5dqH | rectangle / Field 2 | {"name":"Field 2"} | {"cornerRadius":4,"x":28,"y":38,"fill":"$fam-files","width":40,"height":8} |
| Asabb / r5dqH | rectangle / Check | {"name":"Check"} | {"cornerRadius":3,"x":28,"y":54,"fill":"$fam-files","width":14,"height":14} |
| yHmYr / r5dqH | path / Tick | {"name":"Tick"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$mark-primary","strokeWidth":3,"strokeLinejoin":"round","strokeLinecap":"round"} |
| WjHRr / r5dqH | rectangle / Label | {"name":"Label"} | {"cornerRadius":3,"x":46,"y":58,"fill":"$fam-files","width":22,"height":6} |
| DkRut / zA7JJ | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| HvK1w / DkRut | text / Product Name | {"name":"Product Name","content":"Forms"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| m1l2Dz / DkRut | text / Idea | {"name":"Idea","content":"A form with fields and a ticked box — questions asked, answers collected, files generated."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| JXiuC / qY4Xx | frame / Mark · Context | {"name":"Mark · Context"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| D3DFs / JXiuC | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-files","cornerRadius":24,"layout":"none"} |
| J47nX / D3DFs | rectangle / Base | {"name":"Base"} | {"cornerRadius":[2,2,6,6],"x":36,"y":68,"fill":"$mark-secondary","width":24,"height":12} |
| P5yRP / D3DFs | ellipse / Bulb | {"name":"Bulb"} | {"x":24,"y":12,"fill":"$mark-primary","width":48,"height":48} |
| H1YU9h / D3DFs | rectangle / Neck | {"name":"Neck"} | {"cornerRadius":[0,0,4,4],"x":36,"y":50,"fill":"$mark-primary","width":24,"height":14} |
| nHZ6t / D3DFs | path / Tick | {"name":"Tick"} | {"x":36,"y":28,"viewBox":[0,0,24,16],"width":24,"height":16,"stroke":"$fam-files","strokeWidth":6,"strokeLinejoin":"round","strokeLinecap":"round"} |
| T85ruu / JXiuC | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| c9nhPb / T85ruu | text / Product Name | {"name":"Product Name","content":"Context"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| XR5ac / T85ruu | text / Idea | {"name":"Idea","content":"A lightbulb with a tick — an idea, researched until every question is closed and only confirmed facts remain."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| FFOd5 / qY4Xx | frame / Mark · Forge | {"name":"Mark · Forge"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| RlOcy / FFOd5 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-files","cornerRadius":24,"layout":"none"} |
| m1ahg / RlOcy | path / Handle | {"name":"Handle"} | {"viewBox":[0,0,96,96],"x":0,"y":0,"width":96,"height":96,"stroke":"$mark-secondary","strokeWidth":6,"strokeLinecap":"round"} |
| ulSRQ / RlOcy | path / Head | {"name":"Head"} | {"viewBox":[0,0,96,96],"x":0,"y":0,"width":96,"height":96,"fill":"$mark-primary","stroke":"$mark-primary","strokeWidth":3,"strokeLinejoin":"round"} |
| RYbGj / RlOcy | path / Anvil | {"name":"Anvil"} | {"viewBox":[0,0,96,96],"x":0,"y":0,"width":96,"height":96,"fill":"$mark-primary"} |
| ejwbF / FFOd5 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| 1RTqg / ejwbF | text / Product Name | {"name":"Product Name","content":"Forge"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| K1K25 / ejwbF | text / Idea | {"name":"Idea","content":"An anvil with the hammer raised — the studio where designs, media and decks get made."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| PBDCr / qY4Xx | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| axOhH / qY4Xx | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
