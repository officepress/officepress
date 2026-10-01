# OfficePress App UI Guidelines / Section · Colour tokens / Token Table / Row text-2

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| eQXUy / le4i4 | frame / Row text-2 | {"name":"Row text-2"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| qrCXc / eQXUy | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| z48bEX / qrCXc | text / Token | {"name":"Token","content":"op-text-2"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| K0QjqJ / qrCXc | text / Role | {"name":"Role","content":"Secondary text, meta, icons"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| OtI8y / eQXUy | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| Sy6A2 / OtI8y | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wAkuB / Sy6A2 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| P1VYp / Sy6A2 | text / Hex | {"name":"Hex","content":"#5B6586"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| uWClD / OtI8y | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| A4qFtF / uWClD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| zrltO / uWClD | text / Hex | {"name":"Hex","content":"#97A2C3"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| iHcTK / eQXUy | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| X40lrH / iHcTK | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zBMJl / X40lrH | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| IAfF0 / X40lrH | text / Hex | {"name":"Hex","content":"#685D83"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| qLPac / iHcTK | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| NPkoJ / qLPac | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ERX5O / qLPac | text / Hex | {"name":"Hex","content":"#A59AC1"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| aTcdq / eQXUy | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| ww5BE / aTcdq | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| sl3Z6 / ww5BE | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| BdOWp / ww5BE | text / Hex | {"name":"Hex","content":"#756761"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Q2qKl / aTcdq | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| d4XX5 / Q2qKl | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Z0KMhc / Q2qKl | text / Hex | {"name":"Hex","content":"#B8A9A2"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| pbEDY / eQXUy | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| FE6at / pbEDY | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Lpj3g / FE6at | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| P7xj4v / FE6at | text / Hex | {"name":"Hex","content":"#5B716A"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| JHr4H / pbEDY | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| HOGl6 / JHr4H | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| O3HJpI / JHr4H | text / Hex | {"name":"Hex","content":"#A1BAB3"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| P9cJRF / le4i4 | frame / Row accent | {"name":"Row accent"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| TYuLp / P9cJRF | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| sjWcI / TYuLp | text / Token | {"name":"Token","content":"op-accent"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| o6JT4r / TYuLp | text / Role | {"name":"Role","content":"Brand fill: app tile, bars, key icons"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| B2j4Dy / P9cJRF | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| rfykk / B2j4Dy | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| gf6Ky / rfykk | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Fca0x / rfykk | text / Hex | {"name":"Hex","content":"#2F5BEA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bK6cn / B2j4Dy | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| nrerO / bK6cn | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Wt1Sk / bK6cn | text / Hex | {"name":"Hex","content":"#5D80EF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| hw90v / P9cJRF | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| khn2j / hw90v | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Wc6Ja / khn2j | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| KaV0L / khn2j | text / Hex | {"name":"Hex","content":"#6A3BE4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| vGFa8 / hw90v | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Kf5qK / vGFa8 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| A8oKKg / vGFa8 | text / Hex | {"name":"Hex","content":"#8F6CEB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| FCjSW / P9cJRF | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| JKUqL / FCjSW | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| L3ysZ / JKUqL | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| VT9N7 / JKUqL | text / Hex | {"name":"Hex","content":"#E2551B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| LKV9k / FCjSW | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| UvCHf / LKV9k | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| z6CSA2 / LKV9k | text / Hex | {"name":"Hex","content":"#E6622C"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Hy58w / P9cJRF | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| AipMh / Hy58w | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| jEQR2 / AipMh | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| qwrZ9 / AipMh | text / Hex | {"name":"Hex","content":"#0F8F6A"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bs24a / Hy58w | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| LMCJg / bs24a | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| rN35F / bs24a | text / Hex | {"name":"Hex","content":"#11A67B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| h8LnPq / le4i4 | frame / Row accent-text | {"name":"Row accent-text"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| RtgrU / h8LnPq | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| uquPI / RtgrU | text / Token | {"name":"Token","content":"op-accent-text"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| CyhXa / RtgrU | text / Role | {"name":"Role","content":"Accent used as text or links"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| vIs1J / h8LnPq | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| XyHsM / vIs1J | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| iufw6 / XyHsM | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| MWfVa / XyHsM | text / Hex | {"name":"Hex","content":"#2F5BEA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| CBDTD / vIs1J | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| suCa0 / CBDTD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Ug0hb / CBDTD | text / Hex | {"name":"Hex","content":"#708FF1"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| b5tP6c / h8LnPq | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| soI2e / b5tP6c | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| e0RTK / soI2e | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| wUzXX / soI2e | text / Hex | {"name":"Hex","content":"#6A3BE4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| q1OaY3 / b5tP6c | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| U0114 / q1OaY3 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| k9xAEV / q1OaY3 | text / Hex | {"name":"Hex","content":"#A082EE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| CUZA0 / h8LnPq | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| d21h8 / CUZA0 | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| eWDDS / d21h8 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| OOMDo / d21h8 | text / Hex | {"name":"Hex","content":"#C74B18"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| w9WIhj / CUZA0 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| KoQeh / w9WIhj | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| IjnVT / w9WIhj | text / Hex | {"name":"Hex","content":"#EA7D50"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| zwi8Q / h8LnPq | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| ahJ7g / zwi8Q | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| w74oHU / ahJ7g | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| skC4g / ahJ7g | text / Hex | {"name":"Hex","content":"#0E8160"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| s3nCs / zwi8Q | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wkqBq / s3nCs | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Y5suD / s3nCs | text / Hex | {"name":"Hex","content":"#13B989"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| u13u4 / le4i4 | frame / Row accent-strong | {"name":"Row accent-strong"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| BdXlc / u13u4 | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| RL7sW / BdXlc | text / Token | {"name":"Token","content":"op-accent-strong"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| lsniX / BdXlc | text / Role | {"name":"Role","content":"Primary button fill, urgent bars"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| YAihJ / u13u4 | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| lfDNC / YAihJ | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| adJiD / lfDNC | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| NUgEq / lfDNC | text / Hex | {"name":"Hex","content":"#2150E9"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| dx0KB / YAihJ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| d5Ux04 / dx0KB | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| cdx1Z / dx0KB | text / Hex | {"name":"Hex","content":"#9EB3F5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| MhVlw / u13u4 | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| N7KcnD / MhVlw | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Y1UKK / N7KcnD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| mYG7n / N7KcnD | text / Hex | {"name":"Hex","content":"#6A3BE4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| TDBVV / MhVlw | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| PEqFg / TDBVV | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| rRKXM / TDBVV | text / Hex | {"name":"Hex","content":"#BBA6F3"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| pkEGf / u13u4 | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| psPCQ / pkEGf | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| uYwVS / psPCQ | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| R1fWq2 / psPCQ | text / Hex | {"name":"Hex","content":"#AB4014"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Q87UKo / pkEGf | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| UXpMI / Q87UKo | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| zr5YL / Q87UKo | text / Hex | {"name":"Hex","content":"#F1A98C"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| g550DE / u13u4 | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| q2ZIA / g550DE | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| vd5s7 / q2ZIA | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| O0974P / q2ZIA | text / Hex | {"name":"Hex","content":"#0C6F52"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| gKgk7 / g550DE | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| n8GU2 / gKgk7 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-accent-strong","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| BnnIW / gKgk7 | text / Hex | {"name":"Hex","content":"#17DEA4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
