# OfficePress App UI Guidelines / Section · Colour tokens / Token Table / Row tint

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| EraIG / le4i4 | frame / Row tint | {"name":"Row tint"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| zgVfW / EraIG | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| G1l5AM / zgVfW | text / Token | {"name":"Token","content":"op-tint"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| F7DA6E / zgVfW | text / Role | {"name":"Role","content":"Selected / count badge background"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| rOfVs / EraIG | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| tmU5J / rOfVs | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| IURm2 / tmU5J | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| dpGkp / tmU5J | text / Hex | {"name":"Hex","content":"#EDF1FE"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| d2I5j2 / rOfVs | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ULbKF / d2I5j2 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| IYok9 / d2I5j2 | text / Hex | {"name":"Hex","content":"#1C2B5F"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| is33c / EraIG | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| gNI2D / is33c | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| EJDDo / gNI2D | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| BT51B / gNI2D | text / Hex | {"name":"Hex","content":"#F2EEFD"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| e8D4Y / is33c | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Y1YrBN / e8D4Y | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| z0g4p / e8D4Y | text / Hex | {"name":"Hex","content":"#301F5B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| iFE79 / EraIG | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| OlJTw / iFE79 | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| FbThI / OlJTw | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| i1PH7 / OlJTw | text / Hex | {"name":"Hex","content":"#FBF3F0"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Zpr4u / iFE79 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TZ3KH / Zpr4u | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| NnV7f / Zpr4u | text / Hex | {"name":"Hex","content":"#533428"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Cn5tZ / EraIG | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| bVzlX / Cn5tZ | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| D9Q1D1 / bVzlX | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| e9Mxwh / bVzlX | text / Hex | {"name":"Hex","content":"#F0FBF8"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| k5HCQ / Cn5tZ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wtRsD / k5HCQ | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| IX8IA / k5HCQ | text / Hex | {"name":"Hex","content":"#285346"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| fxBKu / le4i4 | frame / Row tint-2 | {"name":"Row tint-2"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| sGXNF / fxBKu | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| fO06D / sGXNF | text / Token | {"name":"Token","content":"op-tint-2"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| od7L9 / sGXNF | text / Role | {"name":"Role","content":"Progress tracks, hover"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| MF3uN / fxBKu | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| qnSTL / MF3uN | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| vr4qa / qnSTL | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| aXVVf / qnSTL | text / Hex | {"name":"Hex","content":"#D6DFFC"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| lbWZH / MF3uN | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| f2B7X / lbWZH | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| B0Jtpj / lbWZH | text / Hex | {"name":"Hex","content":"#233670"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| BCKCX / fxBKu | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| vABkK / BCKCX | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| mYUat / vABkK | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| A3RUIu / vABkK | text / Hex | {"name":"Hex","content":"#E2D8FA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| M55LXP / BCKCX | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| d7iMc / M55LXP | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| a7EEES / M55LXP | text / Hex | {"name":"Hex","content":"#3B276D"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| gpDkQ / fxBKu | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| bLSEY / gpDkQ | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| mSR1z / bLSEY | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| vttvm / bLSEY | text / Hex | {"name":"Hex","content":"#F6E4DC"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| SYsRS / gpDkQ | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q1eNLT / SYsRS | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| IE4gG / SYsRS | text / Hex | {"name":"Hex","content":"#643F30"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| d7Izls / fxBKu | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| x2y8t / d7Izls | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| d7YMXQ / x2y8t | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| rvngS / x2y8t | text / Hex | {"name":"Hex","content":"#DCF6EF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| clmgI / d7Izls | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| mLW3S / clmgI | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-tint-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| D7dwjs / clmgI | text / Hex | {"name":"Hex","content":"#306455"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| tTBFg / le4i4 | frame / Row on-tint | {"name":"Row on-tint"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| PYE3w / tTBFg | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| MXPqm / PYE3w | text / Token | {"name":"Token","content":"op-on-tint"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| s4UiT / PYE3w | text / Role | {"name":"Role","content":"Text on tint"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| Q8VMw / tTBFg | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| R4VMw / Q8VMw | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| R82od / R4VMw | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| XfmPs / R4VMw | text / Hex | {"name":"Hex","content":"#2F5BEA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| e358n / Q8VMw | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| sGs1V / e358n | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Z5BbIO / e358n | text / Hex | {"name":"Hex","content":"#95ACF5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| OpuxX / tTBFg | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| A8CUO / OpuxX | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| lc63T / A8CUO | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| DcS5l / A8CUO | text / Hex | {"name":"Hex","content":"#6A3BE4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| wz0xO / OpuxX | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| v2hk0 / wz0xO | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| gcxuF / wz0xO | text / Hex | {"name":"Hex","content":"#B49DF2"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Ls1em / tTBFg | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| b1F1F2 / Ls1em | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| A2X4Ls / b1F1F2 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| DzWzC / b1F1F2 | text / Hex | {"name":"Hex","content":"#B94616"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| NUcus / Ls1em | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| KjQLH / NUcus | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| NrwKQ / NUcus | text / Hex | {"name":"Hex","content":"#F2B094"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| E1KzV / tTBFg | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| SvJr7 / E1KzV | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| YWMv2 / SvJr7 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| OzIEC / SvJr7 | text / Hex | {"name":"Hex","content":"#0E7C5D"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| s4udb7 / E1KzV | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| BHnjI / s4udb7 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-on-tint","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| GLZwH / s4udb7 | text / Hex | {"name":"Hex","content":"#62EFC6"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| m0KrX / le4i4 | frame / Row nav | {"name":"Row nav"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| YNHA1 / m0KrX | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| Sk7ni / YNHA1 | text / Token | {"name":"Token","content":"op-nav"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| SmFpe / YNHA1 | text / Role | {"name":"Role","content":"Sidebar — darkest surface"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| wFJL2 / m0KrX | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| uMGZ3 / wFJL2 | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| oP1S1 / uMGZ3 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Rwx3z / uMGZ3 | text / Hex | {"name":"Hex","content":"#18254E"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| F6XSjn / wFJL2 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| iy7YJ / F6XSjn | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| gP7KZ / F6XSjn | text / Hex | {"name":"Hex","content":"#080D1B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| AutlT / m0KrX | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| ZVTjH / AutlT | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| jq2LF / ZVTjH | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| dC8vz / ZVTjH | text / Hex | {"name":"Hex","content":"#281B4B"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| kgRmP / AutlT | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| SLGuu / kgRmP | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| gvGcZ / kgRmP | text / Hex | {"name":"Hex","content":"#0E091A"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| ewt32 / m0KrX | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| d1zlz / ewt32 | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| g7E1a / d1zlz | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| c3aI7 / d1zlz | text / Hex | {"name":"Hex","content":"#412D25"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| SmEkA / ewt32 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| p82miS / SmEkA | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| Mvj8W / SmEkA | text / Hex | {"name":"Hex","content":"#16100D"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| V1x0eB / m0KrX | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| OedEW / V1x0eB | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| s5D6pt / OedEW | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| c6Ukm / OedEW | text / Hex | {"name":"Hex","content":"#244239"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| e3ww7 / V1x0eB | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Ru7kV / e3ww7 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| da6om / e3ww7 | text / Hex | {"name":"Hex","content":"#0C1714"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
