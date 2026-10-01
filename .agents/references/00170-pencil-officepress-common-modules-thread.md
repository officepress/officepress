# OfficePress Common Modules / Section · Chat view / Screens / Shot · Chat · Ticket Tracker #2042 / Chat · Ticket Tracker #2042 / Main / Body / Thread

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| m1wl1 / bAFVv | frame / Thread | {"name":"Thread"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| TQBma / m1wl1 | frame / Thread Head | {"name":"Thread Head"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| FnxAI / TQBma | frame / Avatar | {"name":"Avatar"} | {"width":40,"height":40,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| lx4tC / FnxAI | text / I | {"name":"I","content":"LR"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| AW8I0 / TQBma | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| yZu3V / AW8I0 | frame / Top | {"name":"Top"} | {"gap":8,"alignItems":"center"} |
| xZhfa / yZu3V | text / N | {"name":"N","content":"Lina Reyes"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| oD2xJ / yZu3V | frame / Channel | {"name":"Channel"} | {"height":20,"fill":"$op-sunken","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| Q8cOw / oD2xJ | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| jsRA2 / oD2xJ | text / L | {"name":"L","content":"#2042 · Email"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| PZO09 / AW8I0 | text / S | {"name":"S","content":"Request for delivery quotation"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| FHSqK / TQBma | frame / Assignee | {"name":"Assignee"} | {"height":36,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| FAHCO / FHSqK | frame / A | {"name":"A"} | {"width":22,"height":22,"fill":"$op-sunken","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| fIn7u / FAHCO | text / I | {"name":"I","content":"MS"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qHbE0 / FHSqK | text / L | {"name":"L","content":"Mara Santos"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| atZwk / FHSqK | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| rTgsa / TQBma | frame / Status | {"name":"Status"} | {"height":36,"fill":"$op-tint","cornerRadius":4,"gap":8,"padding":[0,12],"alignItems":"center"} |
| dTtPH / rTgsa | ellipse / D | {"name":"D"} | {"fill":"$op-accent","width":8,"height":8} |
| WnlOO / rTgsa | text / L | {"name":"L","content":"Open"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| nzrCh / rTgsa | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-on-tint"} |
| Ps1WY / TQBma | frame / Details | {"name":"Details"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| uIXke / Ps1WY | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-right","library":"lucide","fill":"$op-accent-text"} |
| XyOkj / m1wl1 | frame / Messages | {"name":"Messages"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":12,"padding":[16,20]} |
| Ai44Q / XyOkj | frame / Day | {"name":"Day"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| LhyAA / Ai44Q | rectangle / L | {"name":"L"} | {"fill":"$op-border","width":"fill_container","height":1} |
| tLnv8 / Ai44Q | text / T | {"name":"T","content":"Today"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| GvLlp / Ai44Q | rectangle / R | {"name":"R"} | {"fill":"$op-border","width":"fill_container","height":1} |
| n4mjPF / XyOkj | frame / In · Lina Reyes | {"name":"In · Lina Reyes"} | {"width":"fill_container"} |
| W2aqhM / n4mjPF | frame / Bubble | {"name":"Bubble"} | {"width":440,"fill":"$op-surface","cornerRadius":[4,12,12,12],"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":8,"padding":12} |
| uIuMg / W2aqhM | frame / H | {"name":"H"} | {"gap":8,"alignItems":"center"} |
| rhO8T / uIuMg | frame / A | {"name":"A"} | {"width":24,"height":24,"fill":"$op-sunken","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| CymCs / rhO8T | text / I | {"name":"I","content":"LR"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| O4kzR2 / uIuMg | text / N | {"name":"N","content":"Lina Reyes"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Tqjbn / uIuMg | text / T | {"name":"T","content":"09:02"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| HF8xy / W2aqhM | text / B | {"name":"B","content":"Hi Support team, we're preparing our September restock and need a delivery quotation for the attached purchase order. Please quote standard and express."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| IqSWG / W2aqhM | frame / Details | {"name":"Details"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"layout":"vertical","gap":4,"padding":[8,12]} |
| fvBw5 / IqSWG | frame / Shipment | {"name":"Shipment"} | {"width":"fill_container","gap":12} |
| omfM8 / fvBw5 | text / K | {"name":"K","content":"Shipment"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| LJ1B7 / fvBw5 | text / V | {"name":"V","content":"48 cartons · approx. 620 kg"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| f9q9gY / IqSWG | frame / Pickup | {"name":"Pickup"} | {"width":"fill_container","gap":12} |
| rZDnZ / f9q9gY | text / K | {"name":"K","content":"Pickup"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| yBfIG / f9q9gY | text / V | {"name":"V","content":"Sep 22 · Pasig warehouse"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| vBYA5 / IqSWG | frame / Delivery | {"name":"Delivery"} | {"width":"fill_container","gap":12} |
| Ncsls / vBYA5 | text / K | {"name":"K","content":"Delivery"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kosuE / vBYA5 | text / V | {"name":"V","content":"Sep 24 before 3 PM · Makati loading bay"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| WlHcS / W2aqhM | frame / Files | {"name":"Files"} | {"width":"fill_container","layout":"vertical","gap":8} |
| L96cO / WlHcS | frame / File delivery-site.jpg | {"name":"File delivery-site.jpg"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[8,12],"alignItems":"center"} |
| u9qnB / L96cO | frame / I | {"name":"I"} | {"width":32,"height":32,"fill":"$op-sunken","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| Hw75u / u9qnB | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"image","library":"lucide","fill":"$op-text-2"} |
| Wa6rz / L96cO | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| L5hQpK / Wa6rz | text / N | {"name":"N","content":"delivery-site.jpg"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| HwXcJ / Wa6rz | text / S | {"name":"S","content":"1.8 MB · Image"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| urbmk / L96cO | frame / Download | {"name":"Download"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| kESDQ / urbmk | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"download","library":"lucide","fill":"$op-text-2"} |
| qQNWy / WlHcS | frame / File purchase-order-4821.xlsx | {"name":"File purchase-order-4821.xlsx"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[8,12],"alignItems":"center"} |
| OabWX / qQNWy | frame / I | {"name":"I"} | {"width":32,"height":32,"fill":"$op-sunken","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| XLLNU / OabWX | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"file-text","library":"lucide","fill":"$op-text-2"} |
| uhOB8 / qQNWy | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| hRJpQ / uhOB8 | text / N | {"name":"N","content":"purchase-order-4821.xlsx"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| mPfR8 / uhOB8 | text / S | {"name":"S","content":"36 KB · Spreadsheet"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| q8Oxem / qQNWy | frame / Download | {"name":"Download"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| alRIY / q8Oxem | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"download","library":"lucide","fill":"$op-text-2"} |
| r0cb7u / XyOkj | frame / Event | {"name":"Event"} | {"width":"fill_container","gap":4,"justifyContent":"center","alignItems":"center"} |
| g3trww / r0cb7u | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"arrow-right-left","library":"lucide","fill":"$op-text-2"} |
| caQ8S / r0cb7u | text / T | {"name":"T","content":"Mara Santos changed status New → Open · 09:14"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| bLNum / XyOkj | frame / Internal Note | {"name":"Internal Note"} | {"width":"fill_container","justifyContent":"end"} |
| u5yQR7 / bLNum | frame / Bubble | {"name":"Bubble"} | {"width":440,"fill":"$op-warning-tint","cornerRadius":[12,4,12,12],"layout":"vertical","gap":4,"padding":12} |
| Xkwrz / u5yQR7 | frame / H | {"name":"H"} | {"gap":4,"alignItems":"center"} |
| Pqpig / Xkwrz | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"lock","library":"lucide","fill":"$op-warning"} |
| RQiX6 / Xkwrz | text / L | {"name":"L","content":"Internal note · only agents see this"} | {"fill":"$op-warning","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| inbgo / u5yQR7 | text / B | {"name":"B","content":"@Jun can you confirm the Makati bay takes a 6-wheeler before 3 PM?"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RzFoR / XyOkj | frame / Out · Mara Santos | {"name":"Out · Mara Santos"} | {"width":"fill_container","justifyContent":"end"} |
| F0c9h2 / RzFoR | frame / Bubble | {"name":"Bubble"} | {"width":440,"fill":"$op-tint","cornerRadius":[12,4,12,12],"stroke":"$op-tint-2","strokeWidth":1,"layout":"vertical","gap":8,"padding":12} |
| gXaEM / F0c9h2 | frame / H | {"name":"H"} | {"gap":8,"alignItems":"center"} |
| YdPln / gXaEM | frame / A | {"name":"A"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| SNayH / YdPln | text / I | {"name":"I","content":"MS"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| w9cjKu / gXaEM | text / N | {"name":"N","content":"Mara Santos"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| RdVDo / gXaEM | text / T | {"name":"T","content":"10:18"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| PXj3V / F0c9h2 | text / B | {"name":"B","content":"Hi Lina, thanks for the complete details. We can support the September 24 window. Both standard and express options are attached."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| fVTEk / F0c9h2 | frame / File quotation-Q-2042.pdf | {"name":"File quotation-Q-2042.pdf"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[8,12],"alignItems":"center"} |
| YgZWA / fVTEk | frame / I | {"name":"I"} | {"width":32,"height":32,"fill":"$op-sunken","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| AKATp / YgZWA | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"file-text","library":"lucide","fill":"$op-text-2"} |
| u3sqpM / fVTEk | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| a0qSGr / u3sqpM | text / N | {"name":"N","content":"quotation-Q-2042.pdf"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| p4EloE / u3sqpM | text / S | {"name":"S","content":"264 KB · PDF"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XV5Wp / fVTEk | frame / Download | {"name":"Download"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| yufE7 / XV5Wp | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"download","library":"lucide","fill":"$op-text-2"} |
| KoXTg / m1wl1 | frame / Composer Area | {"name":"Composer Area"} | {"width":"fill_container","fill":"$op-canvas","padding":[12,16,16,16]} |
| QlOq8 / KoXTg | frame / Composer | {"name":"Composer"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border-strong","strokeWidth":1,"layout":"vertical"} |
| I9ceMb / QlOq8 | frame / Mode | {"name":"Mode"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[8,12,0,12]} |
| HWLkW / I9ceMb | frame / Reply | {"name":"Reply"} | {"stroke":"$op-accent","strokeWidth":{"bottom":2},"gap":4,"padding":[8,0],"alignItems":"center"} |
| JViX2 / HWLkW | icon / I | {"name":"I"} | {"width":13,"height":13,"icon":"reply","library":"lucide","fill":"$op-accent-text"} |
| S4WHg / HWLkW | text / L | {"name":"L","content":"Reply"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| p8NGdu / I9ceMb | frame / Internal note | {"name":"Internal note"} | {"gap":4,"padding":[8,0],"alignItems":"center"} |
| r1M76 / p8NGdu | icon / I | {"name":"I"} | {"width":13,"height":13,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| fymo9 / p8NGdu | text / L | {"name":"L","content":"Internal note"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| qxAHf / I9ceMb | frame / Sp | {"name":"Sp"} | {"width":"fill_container","height":1} |
| D9RLX / I9ceMb | frame / To | {"name":"To"} | {"gap":4,"padding":[8,0],"alignItems":"center"} |
| sjzVF / D9RLX | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| X8dTy / D9RLX | text / L | {"name":"L","content":"to lina.reyes@northwind.ph"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zQwK7 / QlOq8 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":56,"padding":12} |
| tgxka / zQwK7 | text / P | {"name":"P","content":"Write a reply…"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| N694J / QlOq8 | frame / Controls | {"name":"Controls"} | {"width":"fill_container","gap":4,"padding":[8,12],"alignItems":"center"} |
| VmCF2 / N694J | frame / Template | {"name":"Template"} | {"height":32,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| OlFHI / VmCF2 | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"file-text","library":"lucide","fill":"$op-accent-text"} |
| xAdoO / VmCF2 | text / L | {"name":"L","content":"Insert template"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| iw4JZ / N694J | frame / smile | {"name":"smile"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| xN5b6 / iw4JZ | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"smile","library":"lucide","fill":"$op-text-2"} |
| X9LiEo / N694J | frame / type | {"name":"type"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| E57IF / X9LiEo | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"type","library":"lucide","fill":"$op-text-2"} |
| qRxew / N694J | frame / paperclip | {"name":"paperclip"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| FTsJM / qRxew | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| Zcg4z / N694J | frame / Sp | {"name":"Sp"} | {"width":"fill_container","height":1} |
| WNmNH / N694J | frame / Send | {"name":"Send"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"alignItems":"center"} |
| a1cezH / WNmNH | frame / Main | {"name":"Main"} | {"height":36,"gap":8,"padding":[0,12],"alignItems":"center"} |
| E4R5G / a1cezH | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"send","library":"lucide","fill":"$op-on-accent"} |
| V9VrSn / a1cezH | text / L | {"name":"L","content":"Send"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| C9gWF / WNmNH | rectangle / Div | {"name":"Div"} | {"fill":"#FFFFFF4D","width":1,"height":20} |
| yYOUj / WNmNH | frame / More | {"name":"More"} | {"width":32,"height":36,"justifyContent":"center","alignItems":"center"} |
| MO5Im / yYOUj | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-on-accent"} |
