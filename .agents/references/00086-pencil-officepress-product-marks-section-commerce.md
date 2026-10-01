# OfficePress Product Marks / Section · Commerce

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| q8MhDM / o8qxhR | frame / Section · Commerce | {"name":"Section · Commerce"} | {"width":"fill_container","layout":"vertical","gap":28} |
| aOcYn / q8MhDM | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1.5},"padding":[0,0,16,0],"justifyContent":"space_between","alignItems":"end"} |
| e9WPLU / aOcYn | frame / Family | {"name":"Family"} | {"gap":16,"alignItems":"center"} |
| qE3No / e9WPLU | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":6,"fill":"$fam-commerce","width":20,"height":20} |
| LgNYK / e9WPLU | text / Family Name | {"name":"Family Name","content":"Commerce"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| aRleD / e9WPLU | text / Family No | {"name":"Family No","content":"04"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| huuO8 / aOcYn | text / Family Desc | {"name":"Family Desc","content":"Catalogue, orders and delivery."} | {"fill":"$muted","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| ow5Vo / q8MhDM | frame / Marks | {"name":"Marks"} | {"width":"fill_container","gap":20} |
| FkqMX / ow5Vo | frame / Mark · Products | {"name":"Mark · Products"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| N4OBG / FkqMX | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| rekfQ / N4OBG | path / Variant Tag | {"name":"Variant Tag"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-secondary","width":96,"height":96} |
| cFQ1d / N4OBG | path / Tag | {"name":"Tag"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| R2VO2f / N4OBG | ellipse / Hole | {"name":"Hole"} | {"x":28,"y":50,"fill":"$fam-commerce","width":8,"height":8} |
| x128M / FkqMX | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| CCk5E / x128M | text / Product Name | {"name":"Product Name","content":"Products"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| El7Gm / x128M | text / Idea | {"name":"Idea","content":"The price tag, with a variant behind it — one catalogue item, many offers from many sellers."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| zvdAg / ow5Vo | frame / Mark · Orders | {"name":"Mark · Orders"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| DOOGX / zvdAg | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| NxiwS / DOOGX | path / Receipt | {"name":"Receipt"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| IVMF6 / DOOGX | rectangle / Line 1 | {"name":"Line 1"} | {"cornerRadius":3,"x":30,"y":26,"fill":"$fam-commerce","width":36,"height":6} |
| m4T1oa / DOOGX | rectangle / Line 2 | {"name":"Line 2"} | {"cornerRadius":3,"x":30,"y":40,"fill":"$fam-commerce","width":36,"height":6} |
| X0vmV / DOOGX | rectangle / Line 3 | {"name":"Line 3"} | {"cornerRadius":3,"x":30,"y":54,"fill":"$fam-commerce","width":20,"height":6} |
| W1cn42 / DOOGX | rectangle / Total | {"name":"Total"} | {"cornerRadius":3,"x":56,"y":54,"fill":"$mark-secondary","width":10,"height":6} |
| Uqwrx / zvdAg | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| dfhDC / Uqwrx | text / Product Name | {"name":"Product Name","content":"Orders"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| d9D7g / Uqwrx | text / Idea | {"name":"Idea","content":"The receipt, torn off the roll — an order and its line items, tracked from intake to fulfilment."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| fC9fU / ow5Vo | frame / Mark · Inventory | {"name":"Mark · Inventory"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| I7CPv8 / fC9fU | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| MSpWt / I7CPv8 | rectangle / Box L | {"name":"Box L"} | {"cornerRadius":5,"x":16,"y":48,"fill":"$mark-primary","width":30,"height":32} |
| lrGoL / I7CPv8 | rectangle / Box R | {"name":"Box R"} | {"cornerRadius":5,"x":50,"y":48,"fill":"$mark-primary","width":30,"height":32} |
| ks1VB / I7CPv8 | rectangle / Box Top | {"name":"Box Top"} | {"cornerRadius":5,"x":33,"y":16,"fill":"$mark-secondary","width":30,"height":28} |
| z9HgSC / I7CPv8 | rectangle / Tape L | {"name":"Tape L"} | {"x":28,"y":48,"fill":"$fam-commerce","width":6,"height":10} |
| nj7vZ / I7CPv8 | rectangle / Tape R | {"name":"Tape R"} | {"x":62,"y":48,"fill":"$fam-commerce","width":6,"height":10} |
| H9OrAP / I7CPv8 | rectangle / Tape Top | {"name":"Tape Top"} | {"x":45,"y":16,"fill":"$fam-commerce","width":6,"height":9} |
| JoJtV / fC9fU | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| p5c22 / JoJtV | text / Product Name | {"name":"Product Name","content":"Inventory"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| wiiG5 / JoJtV | text / Idea | {"name":"Idea","content":"Taped boxes, stacked — stock on hand, counted and ready to move."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| F7oWzB / ow5Vo | frame / Mark · Payments | {"name":"Mark · Payments"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| i6QD5t / F7oWzB | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| ZCjbf / i6QD5t | rectangle / Card Behind | {"name":"Card Behind"} | {"cornerRadius":8,"x":26,"y":18,"fill":"$mark-secondary","width":54,"height":38} |
| Ngk2I / i6QD5t | rectangle / Card | {"name":"Card"} | {"cornerRadius":8,"x":16,"y":32,"fill":"$mark-primary","width":58,"height":42} |
| tFDKV / i6QD5t | rectangle / Stripe | {"name":"Stripe"} | {"x":16,"y":42,"fill":"$fam-commerce","width":58,"height":8} |
| zFYsB / i6QD5t | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"x":24,"y":58,"fill":"$fam-commerce","width":14,"height":10} |
| O73gg5 / i6QD5t | rectangle / Digits | {"name":"Digits"} | {"cornerRadius":2.5,"x":44,"y":61,"fill":"$fam-commerce","width":22,"height":5} |
| Q6SJn / F7oWzB | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| h8R2fR / Q6SJn | text / Product Name | {"name":"Product Name","content":"Payments"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| X7cxI1 / Q6SJn | text / Idea | {"name":"Idea","content":"The payment card — invoices and payment links your clients settle with the method they prefer."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| nM5eH / ow5Vo | frame / Mark · Fulfillments | {"name":"Mark · Fulfillments"} | {"width":"fill_container","fill":"$card","cornerRadius":20,"layout":"vertical","gap":28,"padding":28} |
| k4DBCs / nM5eH | frame / Tile | {"name":"Tile"} | {"clip":true,"width":96,"height":96,"fill":"$fam-commerce","cornerRadius":24,"layout":"none"} |
| pN3nY / k4DBCs | rectangle / Cargo | {"name":"Cargo"} | {"cornerRadius":5,"x":14,"y":26,"fill":"$mark-primary","width":44,"height":36} |
| ixDX8 / k4DBCs | path / Cab | {"name":"Cab"} | {"x":0,"y":0,"viewBox":[0,0,96,96],"fill":"$mark-primary","width":96,"height":96} |
| OVSt6 / k4DBCs | rectangle / Window | {"name":"Window"} | {"cornerRadius":2,"x":64,"y":42,"fill":"$fam-commerce","width":8,"height":8} |
| Xm2qU / k4DBCs | ellipse / Wheel L | {"name":"Wheel L"} | {"x":20,"y":56,"fill":"$fam-commerce","width":18,"height":18} |
| DRpbQ / k4DBCs | ellipse / Wheel R | {"name":"Wheel R"} | {"x":60,"y":56,"fill":"$fam-commerce","width":18,"height":18} |
| mcYiM / k4DBCs | ellipse / Hub L | {"name":"Hub L"} | {"x":24,"y":60,"fill":"$mark-secondary","width":10,"height":10} |
| qxyvb / k4DBCs | ellipse / Hub R | {"name":"Hub R"} | {"x":64,"y":60,"fill":"$mark-secondary","width":10,"height":10} |
| VwyiO / nM5eH | frame / Copy | {"name":"Copy"} | {"width":"fill_container","layout":"vertical","gap":8} |
| YN5rn / VwyiO | text / Product Name | {"name":"Product Name","content":"Fulfillments"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700","letterSpacing":-0.4} |
| R8kHH / VwyiO | text / Idea | {"name":"Idea","content":"The delivery truck — waybills printed, parcels picked up and delivered by approved carriers."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| eG2ET / ow5Vo | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
