# OfficePress Product Marks / Section · Create

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.opcd`, extracted offline from its JSON frames with instances resolved and variables symbolic. Each row retains one node ID/path, parent, name/type, exact text/context and non-geometry properties. Samples remain examples; vector paths stay in the archive. See the [OPCD migration receipt](00399-officepress-opcd-user-preferences-direction.md) for extraction differences and lossless history.

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
| KvM0r / CkO9b | text / Family Desc | {"name":"Family Desc","content":"Files, data, knowledge and canvases."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| VSYxC / n2NEXA | frame / Marks | {"name":"Marks"} | {"width":"fill_container","layout":"vertical","gap":16} |
| qY4Xx / VSYxC | frame / Row 1 | {"name":"Row 1"} | {"width":"fill_container","gap":16} |
| mkjj8 / qY4Xx | frame / Mark · Drive | {"name":"Mark · Drive"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| SyFcd / mkjj8 | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| UX0QV / SyFcd | rectangle / Tab | {"name":"Tab"} | {"cornerRadius":5,"x":16,"y":20,"fill":"$mark-secondary","width":30,"height":16} |
| lch7r / SyFcd | rectangle / Back | {"name":"Back"} | {"cornerRadius":8,"x":16,"y":28,"fill":"$mark-secondary","width":64,"height":48} |
| vL0bK / SyFcd | rectangle / Front | {"name":"Front"} | {"cornerRadius":8,"x":16,"y":38,"fill":"$mark-primary","width":64,"height":42} |
| g6cTI / mkjj8 | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| WrD0Q / g6cTI | text / Product Name | {"name":"Product Name","content":"Drive"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| x1C4Us / g6cTI | text / Idea | {"name":"Idea","content":"The folder — the one symbol everyone knows for \"where my files live\", yours and the apps'."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| q3YdJ7 / qY4Xx | frame / Mark · Tables | {"name":"Mark · Tables"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
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
| zA7JJ / qY4Xx | frame / Mark · Forms | {"name":"Mark · Forms"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
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
| hgwxh / qY4Xx | frame / Mark · Whiteboards | {"name":"Mark · Whiteboards"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| oCsTj / hgwxh | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| t3l1c3 / oCsTj | rectangle / Legs L | {"name":"Legs L"} | {"cornerRadius":2,"x":28,"y":62,"fill":"$mark-secondary","width":5,"height":18} |
| u84xVk / oCsTj | rectangle / Legs R | {"name":"Legs R"} | {"cornerRadius":2,"x":63,"y":62,"fill":"$mark-secondary","width":5,"height":18} |
| QW94R / oCsTj | rectangle / Board | {"name":"Board"} | {"cornerRadius":6,"x":16,"y":16,"fill":"$mark-primary","width":64,"height":50} |
| j65sCb / oCsTj | path / Scribble | {"name":"Scribble"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"width":96,"height":96,"stroke":"$fam-create","strokeWidth":5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Gk1m7 / hgwxh | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| vzTVT / Gk1m7 | text / Product Name | {"name":"Product Name","content":"Whiteboards"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| FhyoY / Gk1m7 | text / Idea | {"name":"Idea","content":"A whiteboard on its easel with a free scribble — sketch the idea before you structure it."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| v5Djs / qY4Xx | frame / Mark · Diagrams | {"name":"Mark · Diagrams"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
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
| JXiuC / qY4Xx | frame / Mark · Context | {"name":"Mark · Context"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| D3DFs / JXiuC | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| J47nX / D3DFs | rectangle / Base | {"name":"Base"} | {"cornerRadius":[2,2,6,6],"x":36,"y":68,"fill":"$mark-secondary","width":24,"height":12} |
| P5yRP / D3DFs | ellipse / Bulb | {"name":"Bulb"} | {"x":24,"y":12,"fill":"$mark-primary","width":48,"height":48} |
| H1YU9h / D3DFs | rectangle / Neck | {"name":"Neck"} | {"cornerRadius":[0,0,4,4],"x":36,"y":50,"fill":"$mark-primary","width":24,"height":14} |
| nHZ6t / D3DFs | path / Tick | {"name":"Tick"} | {"x":36,"y":28,"viewBox":[0,0,24,16],"width":24,"height":16,"stroke":"$fam-create","strokeWidth":6,"strokeLinejoin":"round","strokeLinecap":"round"} |
| T85ruu / JXiuC | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| c9nhPb / T85ruu | text / Product Name | {"name":"Product Name","content":"Context"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| XR5ac / T85ruu | text / Idea | {"name":"Idea","content":"A lightbulb with a tick — an idea, researched until every question is closed and only confirmed facts remain."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| ZYhEI / qY4Xx | frame / Mark · UIUX | {"name":"Mark · UIUX"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| CKkTB / ZYhEI | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| Z0hUt / CKkTB | rectangle / Next Screen | {"name":"Next Screen"} | {"cornerRadius":7,"x":40,"y":24,"fill":"$mark-secondary","width":40,"height":48} |
| EDa4V / CKkTB | rectangle / Screen | {"name":"Screen"} | {"cornerRadius":8,"x":16,"y":16,"fill":"$mark-primary","width":52,"height":64} |
| DCzP3 / CKkTB | rectangle / Placeholder | {"name":"Placeholder"} | {"cornerRadius":3,"x":23,"y":23,"fill":"$fam-create","width":38,"height":26} |
| b6tzCX / CKkTB | path / Placeholder X | {"name":"Placeholder X"} | {"x":23,"y":23,"viewBox":[0,0,38,26],"width":38,"height":26,"stroke":"$mark-primary","strokeWidth":3,"strokeLinecap":"round"} |
| INbLK / CKkTB | rectangle / Line | {"name":"Line"} | {"cornerRadius":2.5,"x":23,"y":56,"fill":"$fam-create","width":30,"height":5} |
| PWdhS / CKkTB | rectangle / Button | {"name":"Button"} | {"cornerRadius":3.5,"x":23,"y":66,"fill":"$fam-create","width":18,"height":7} |
| q3kEY / ZYhEI | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| j3keEA / q3kEY | text / Product Name | {"name":"Product Name","content":"UIUX"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| sUpyD / q3kEY | text / Idea | {"name":"Idea","content":"A wireframe screen with the crossed box every sketch uses for “something goes here” — and the next screen waiting behind."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| SKNAq / VSYxC | frame / Row 2 | {"name":"Row 2"} | {"width":"fill_container","gap":16} |
| U0DNp / SKNAq | frame / Mark · Designs | {"name":"Mark · Designs"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| xOtUA / U0DNp | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| c6x09o / xOtUA | ellipse / Palette | {"name":"Palette"} | {"x":16,"y":16,"fill":"$mark-primary","width":64,"height":64} |
| qH6kQ / xOtUA | ellipse / Thumb Notch | {"name":"Thumb Notch"} | {"x":54,"y":52,"fill":"$fam-create","width":30,"height":30} |
| i8qY15 / xOtUA | ellipse / Well 1 | {"name":"Well 1"} | {"x":26,"y":40,"fill":"$fam-create","width":12,"height":12} |
| K1wwn8 / xOtUA | ellipse / Well 2 | {"name":"Well 2"} | {"x":34,"y":24,"fill":"$fam-create","width":12,"height":12} |
| X8Fah5 / xOtUA | ellipse / Well 3 | {"name":"Well 3"} | {"x":52,"y":26,"fill":"$fam-create","width":12,"height":12} |
| iaCwz / U0DNp | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| IzH3h / iaCwz | text / Product Name | {"name":"Product Name","content":"Designs"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| XgfZo / iaCwz | text / Idea | {"name":"Idea","content":"A painter’s palette — curated colours, type and styles mixed with taste, so the result looks designed, not generated."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| F1YJD / SKNAq | frame / Mark · Graphics | {"name":"Mark · Graphics"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":24} |
| Gx4ke / F1YJD | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-create","cornerRadius":24,"layout":"none"} |
| safQb / Gx4ke | path / Layer 3 | {"name":"Layer 3"} | {"x":16,"y":48,"viewBox":[0,0,64,32],"fill":"$mark-secondary","width":64,"height":32} |
| NPHB4 / Gx4ke | path / Cut 3 | {"name":"Cut 3"} | {"x":16,"y":40,"viewBox":[0,0,64,32],"fill":"$fam-create","width":64,"height":32} |
| arpul / Gx4ke | path / Layer 2 | {"name":"Layer 2"} | {"x":16,"y":32,"viewBox":[0,0,64,32],"fill":"$mark-secondary","width":64,"height":32} |
| RtsfG / Gx4ke | path / Cut 2 | {"name":"Cut 2"} | {"x":16,"y":24,"viewBox":[0,0,64,32],"fill":"$fam-create","width":64,"height":32} |
| byMyg / Gx4ke | path / Layer 1 | {"name":"Layer 1"} | {"x":16,"y":16,"viewBox":[0,0,64,32],"fill":"$mark-primary","width":64,"height":32} |
| b2WdGJ / F1YJD | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| HkHvs / b2WdGJ | text / Product Name | {"name":"Product Name","content":"Graphics"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| JIvCL / b2WdGJ | text / Idea | {"name":"Idea","content":"A stack of layers — shapes, text, pixels and effects each kept editable, saved inside an ordinary PNG."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| CbO76 / SKNAq | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| hr2XQ / SKNAq | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| zLvAD / SKNAq | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| XyKwy / SKNAq | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| f5hUYF / SKNAq | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
