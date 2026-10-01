# OfficePress App UI Guidelines / Section · Colour tokens / Token Table / Row sunken

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| SjCrD / le4i4 | frame / Row sunken | {"name":"Row sunken"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| x66dHE / SjCrD | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| x23JXb / x66dHE | text / Token | {"name":"Token","content":"op-sunken"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| oE8u3 / x66dHE | text / Role | {"name":"Role","content":"Inputs, toggles"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| bAtTX / SjCrD | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| mxEY8 / bAtTX | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| dKeGG / mxEY8 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| UlTQ7 / mxEY8 | text / Hex | {"name":"Hex","content":"#EEF1FB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| DoUEi / bAtTX | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| R80jtm / DoUEi | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| m1OpR / DoUEi | text / Hex | {"name":"Hex","content":"#0E1429"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| mZvbB / SjCrD | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| P5gojU / mZvbB | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| DxWeD / P5gojU | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| DMlZy / P5gojU | text / Hex | {"name":"Hex","content":"#F2EFFA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| XoxhL / mZvbB | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| IKQcZ / XoxhL | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| y5LpQT / XoxhL | text / Hex | {"name":"Hex","content":"#160F28"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| H7aQ0 / SjCrD | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| M4YaH / H7aQ0 | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| cPGCG / M4YaH | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| txKYH / M4YaH | text / Hex | {"name":"Hex","content":"#F8F3F1"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| gDSJl / H7aQ0 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| bBm85 / gDSJl | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| QXeo9 / gDSJl | text / Hex | {"name":"Hex","content":"#221915"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| cvAUD / SjCrD | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| bwgWO / cvAUD | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ICPYv / bwgWO | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| mK74U / bwgWO | text / Hex | {"name":"Hex","content":"#F1F8F6"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| olXCC / cvAUD | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| WbWdY / olXCC | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-sunken","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| IY2VX / olXCC | text / Hex | {"name":"Hex","content":"#14231F"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| u3nuG / le4i4 | frame / Row border | {"name":"Row border"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| Q2Vkz / u3nuG | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| DOEKj / Q2Vkz | text / Token | {"name":"Token","content":"op-border"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| RzM2N / Q2Vkz | text / Role | {"name":"Role","content":"Hairlines, card edges"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| Vc897 / u3nuG | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| PSDbG / Vc897 | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Fvflv / PSDbG | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| FiRsw / PSDbG | text / Hex | {"name":"Hex","content":"#D6DDF3"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| VqTXK / Vc897 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| cQer5 / VqTXK | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| AcA9T / VqTXK | text / Hex | {"name":"Hex","content":"#26325A"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| dXrlA / u3nuG | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| GtcdW / dXrlA | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| JJ5oe / GtcdW | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| NnBeO / GtcdW | text / Hex | {"name":"Hex","content":"#DFD7F2"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| H6mtuj / dXrlA | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Rx92i / H6mtuj | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| rkTaB / H6mtuj | text / Hex | {"name":"Hex","content":"#352857"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| L7KkB / u3nuG | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| qOaUA / L7KkB | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TH4qZ / qOaUA | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| UrzGG / qOaUA | text / Hex | {"name":"Hex","content":"#ECE1DD"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| zmjzO / L7KkB | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| amlrE / zmjzO | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| v5Ltp / zmjzO | text / Hex | {"name":"Hex","content":"#4D3A33"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| HvdGa / u3nuG | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| ookcN / HvdGa | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| QuPpZ / ookcN | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Pi5df / ookcN | text / Hex | {"name":"Hex","content":"#DCEDE8"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| CDmQg / HvdGa | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| pwdi3 / CDmQg | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ovQ2r / CDmQg | text / Hex | {"name":"Hex","content":"#314E46"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| WlCRl / le4i4 | frame / Row border-strong | {"name":"Row border-strong"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| Lnu4t / WlCRl | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| mHSPo / Lnu4t | text / Token | {"name":"Token","content":"op-border-strong"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| VfZVP / Lnu4t | text / Role | {"name":"Role","content":"Input outlines, dashed slots"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| rt876 / WlCRl | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| k7HqYP / rt876 | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| tnP5r / k7HqYP | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ozIaz / k7HqYP | text / Hex | {"name":"Hex","content":"#BCC7EB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| lwt1G / rt876 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| w7dATX / lwt1G | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| m5o3K / lwt1G | text / Hex | {"name":"Hex","content":"#33416E"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bVXZn / WlCRl | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| CAX2h / bVXZn | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| U7rXD / CAX2h | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| bitK0 / CAX2h | text / Hex | {"name":"Hex","content":"#CABEE9"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| o784Ue / bVXZn | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| fVDv0 / o784Ue | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| NilMX / o784Ue | text / Hex | {"name":"Hex","content":"#45366B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Ul5mw / WlCRl | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| KxWzR / Ul5mw | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| szghg / KxWzR | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| U2rIAU / KxWzR | text / Hex | {"name":"Hex","content":"#E0CFC8"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| sK1ia / Ul5mw | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| z886Yx / sK1ia | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| L4BRkD / sK1ia | text / Hex | {"name":"Hex","content":"#5F4A42"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| xYtjy / WlCRl | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| XvvNm / xYtjy | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| l3A0bT / XvvNm | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| V1LT7N / XvvNm | text / Hex | {"name":"Hex","content":"#C7E1D9"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| T5F0NQ / xYtjy | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| INuVC / T5F0NQ | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-border-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| l4hBlt / T5F0NQ | text / Hex | {"name":"Hex","content":"#406157"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| tJeee / le4i4 | frame / Row text | {"name":"Row text"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| qJNKD / tJeee | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| aBzJR / qJNKD | text / Token | {"name":"Token","content":"op-text"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| RdPyK / qJNKD | text / Role | {"name":"Role","content":"Primary text, icons"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| vPaGh / tJeee | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| V4gZk2 / vPaGh | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| QA3JH / V4gZk2 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| wTsbA / V4gZk2 | text / Hex | {"name":"Hex","content":"#18213E"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| n7toh / vPaGh | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zkMzb / n7toh | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| n6Aokt / n7toh | text / Hex | {"name":"Hex","content":"#E7ECFB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| EaxEL / tJeee | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| zceW3 / EaxEL | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| NrX0i / zceW3 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| m1TDQ / zceW3 | text / Hex | {"name":"Hex","content":"#241A3D"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bHXsx / EaxEL | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| cEFUM / bHXsx | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| RUgSc / bHXsx | text / Hex | {"name":"Hex","content":"#EDE8FA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| iWxHZ / tJeee | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| MjFGf / iWxHZ | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| NUdFC / MjFGf | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| XSTUd / MjFGf | text / Hex | {"name":"Hex","content":"#352722"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| NagKv / iWxHZ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TYnZu / NagKv | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| j9U9j / NagKv | text / Hex | {"name":"Hex","content":"#F6EFEC"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| uBwAR / tJeee | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| c6tc32 / uBwAR | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| awxtg / c6tc32 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| eGKoK / c6tc32 | text / Hex | {"name":"Hex","content":"#213630"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| ymkCA / uBwAR | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| M8y7Ap / ymkCA | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| I7mopX / ymkCA | text / Hex | {"name":"Hex","content":"#ECF7F4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
