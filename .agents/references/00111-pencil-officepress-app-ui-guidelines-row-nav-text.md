# OfficePress App UI Guidelines / Section · Colour tokens / Token Table / Row nav-text

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| NUad6 / le4i4 | frame / Row nav-text | {"name":"Row nav-text"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":8,"padding":[8,0],"alignItems":"center"} |
| D2nHRr / NUad6 | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| Hvgfa / D2nHRr | text / Token | {"name":"Token","content":"op-nav-text"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| ahiwv / D2nHRr | text / Role | {"name":"Role","content":"Sidebar text"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| e1ghWS / NUad6 | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| slkak / e1ghWS | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| NeHVH / slkak | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| wCVOw / slkak | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| XIkzb / e1ghWS | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| kDVqC / XIkzb | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| y6xUK / XIkzb | text / Hex | {"name":"Hex","content":"#E7ECFB"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| X6VIz / NUad6 | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| xA5Js / X6VIz | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| HuXGR / xA5Js | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| T0Qhon / xA5Js | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| p4WNy / X6VIz | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| LbeKh / p4WNy | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| BFoTj / p4WNy | text / Hex | {"name":"Hex","content":"#EDE8FA"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| v6Y7ec / NUad6 | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| io3Lr / v6Y7ec | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| hFFV9 / io3Lr | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| PWcJv / io3Lr | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| I765e / v6Y7ec | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| pLyAW / I765e | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| P23nlP / I765e | text / Hex | {"name":"Hex","content":"#F6EFEC"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| R9fiEV / NUad6 | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| m98Tq / R9fiEV | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| SWxRv / m98Tq | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| RpRxU / m98Tq | text / Hex | {"name":"Hex","content":"#FFFFFF"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| Xb7jZ / R9fiEV | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| evqPg / Xb7jZ | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| h8jGRN / Xb7jZ | text / Hex | {"name":"Hex","content":"#ECF7F4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| pH3XV / le4i4 | frame / Row nav-text-2 | {"name":"Row nav-text-2"} | {"width":"fill_container","gap":8,"padding":[8,0],"alignItems":"center"} |
| wVEjQ / pH3XV | frame / Label | {"name":"Label"} | {"width":300,"layout":"vertical","gap":2} |
| m5e1Q / wVEjQ | text / Token | {"name":"Token","content":"op-nav-text-2"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| B9FPgU / wVEjQ | text / Role | {"name":"Role","content":"Sidebar secondary text"} | {"fill":"$muted","fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| S7O8pz / pH3XV | frame / communicate | {"name":"communicate"} | {"width":"fill_container","gap":8} |
| E5H8Lz / S7O8pz | frame / light | {"name":"light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| R0goS6 / E5H8Lz | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| BkWOx / E5H8Lz | text / Hex | {"name":"Hex","content":"#A7B2D7"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| ZJDAX / S7O8pz | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| SLVsS / ZJDAX | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| dVRr6 / ZJDAX | text / Hex | {"name":"Hex","content":"#8691B6"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| V8yae / pH3XV | frame / create | {"name":"create"} | {"width":"fill_container","gap":8} |
| PAUTr / V8yae | frame / light | {"name":"light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| j9TGz / PAUTr | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| XApem / PAUTr | text / Hex | {"name":"Hex","content":"#B6A9D5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| sGh0K / V8yae | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| VDcCw / sGh0K | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| iHHDE / sGh0K | text / Hex | {"name":"Hex","content":"#9488B4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| w2TWI / pH3XV | frame / operate | {"name":"operate"} | {"width":"fill_container","gap":8} |
| WQD3m / w2TWI | frame / light | {"name":"light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| hG118 / WQD3m | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| HndcK / WQD3m | text / Hex | {"name":"Hex","content":"#CBBAB3"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| e5T3p / w2TWI | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| t7Ncm7 / e5T3p | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| OOy31 / e5T3p | text / Hex | {"name":"Hex","content":"#AA9992"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| bGk65 / pH3XV | frame / commerce | {"name":"commerce"} | {"width":"fill_container","gap":8} |
| S2fq5v / bGk65 | frame / light | {"name":"light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ucfex / S2fq5v | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| nH0Uy / S2fq5v | text / Hex | {"name":"Hex","content":"#B2CDC5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| oYY4E / bGk65 | frame / dark | {"name":"dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| XjtpZ / oYY4E | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-nav-text-2","width":32,"height":24,"stroke":"#15171C1F","strokeWidth":1} |
| ruama / oYY4E | text / Hex | {"name":"Hex","content":"#91ABA4"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":10,"fontWeight":"normal"} |
| rpYDx / aBG8j | frame / Shared Tokens | {"name":"Shared Tokens"} | {"width":"fill_container","gap":16} |
| m34XC / rpYDx | frame / op-dot | {"name":"op-dot"} | {"width":"fill_container","fill":"$card","cornerRadius":12,"layout":"vertical","gap":10,"padding":20} |
| nkFpg / m34XC | frame / Swatches | {"name":"Swatches"} | {"gap":6} |
| t3L5iW / nkFpg | frame / Light | {"name":"Light"} | {"width":40,"height":28,"fill":"#18254E","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| SBBQP / t3L5iW | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":5,"fill":"#087050","width":10,"height":10} |
| jHFyY / nkFpg | frame / Dark | {"name":"Dark"} | {"width":40,"height":28,"fill":"#141C36","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| f58Mxa / jHFyY | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":5,"fill":"#3DD68C","width":10,"height":10} |
| MFZOF / m34XC | text / Token | {"name":"Token","content":"op-dot"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| NufBZ / m34XC | text / Desc | {"name":"Desc","content":"New / unread status. Always green, every family."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| iEaD8 / rpYDx | frame / op-nav-dot | {"name":"op-nav-dot"} | {"width":"fill_container","fill":"$card","cornerRadius":12,"layout":"vertical","gap":10,"padding":20} |
| e5Few / iEaD8 | frame / Swatches | {"name":"Swatches"} | {"gap":6} |
| iOEU5 / e5Few | frame / Light | {"name":"Light"} | {"width":40,"height":28,"fill":"#18254E","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| UwgJh / iOEU5 | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":5,"fill":"#3DD68C","width":10,"height":10} |
| I14xo / e5Few | frame / Dark | {"name":"Dark"} | {"width":40,"height":28,"fill":"#141C36","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| gjuDj / I14xo | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":5,"fill":"#3DD68C","width":10,"height":10} |
| Iyrej / iEaD8 | text / Token | {"name":"Token","content":"op-nav-dot"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| Sju3Z / iEaD8 | text / Desc | {"name":"Desc","content":"Unread status on the sidebar."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| T5DAn / rpYDx | frame / op-on-accent | {"name":"op-on-accent"} | {"width":"fill_container","fill":"$card","cornerRadius":12,"layout":"vertical","gap":10,"padding":20} |
| hIKWy / T5DAn | frame / Swatches | {"name":"Swatches"} | {"gap":6} |
| I8mDE / hIKWy | frame / Light | {"name":"Light"} | {"width":40,"height":28,"fill":"#18254E","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| ZJjuG / I8mDE | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"fill":"#FFFFFF","width":24,"height":14} |
| gHC8p / hIKWy | frame / Dark | {"name":"Dark"} | {"width":40,"height":28,"fill":"#141C36","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| av87r / gHC8p | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"fill":"#0B1022","width":24,"height":14} |
| N8kioL / T5DAn | text / Token | {"name":"Token","content":"op-on-accent"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| aGyou / T5DAn | text / Desc | {"name":"Desc","content":"Text on accent-strong fills."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| POQdb / rpYDx | frame / op-nav-active · field · border | {"name":"op-nav-active · field · border"} | {"width":"fill_container","fill":"$card","cornerRadius":12,"layout":"vertical","gap":10,"padding":20} |
| fao0Z / POQdb | frame / Swatches | {"name":"Swatches"} | {"gap":6} |
| LDjnp / fao0Z | frame / Light | {"name":"Light"} | {"width":40,"height":28,"fill":"#18254E","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| yZ2e7 / LDjnp | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"fill":"#FFFFFF1A","width":24,"height":14} |
| zrYNr / fao0Z | frame / Dark | {"name":"Dark"} | {"width":40,"height":28,"fill":"#141C36","cornerRadius":6,"justifyContent":"center","alignItems":"center"} |
| o6O6dJ / zrYNr | rectangle / Chip | {"name":"Chip"} | {"cornerRadius":3,"fill":"#FFFFFF14","width":24,"height":14} |
| CEQQc / POQdb | text / Token | {"name":"Token","content":"op-nav-active · field · border"} | {"fill":"$ink","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| lpVQM / POQdb | text / Desc | {"name":"Desc","content":"White overlays on the sidebar: 10 / 7 / 10 %."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| DPvae / zTKmr | frame / Section · Typography | {"name":"Section · Typography"} | {"width":"fill_container","layout":"vertical","gap":32} |
| XLPte / DPvae | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| gleBi / XLPte | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| KIQnD / gleBi | text / No | {"name":"No","content":"04"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| G2Wze / gleBi | text / Title | {"name":"Title","content":"Typography"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| Ub2CS / XLPte | text / Desc | {"name":"Desc","content":"Inter (op-font), five sizes plus Display 28 on auth pages, two weights. op-font-mono is allowed only for codes, keys and {{variables}}."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| IOpDO / DPvae | frame / Type Scale | {"name":"Type Scale","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","padding":[8,28]} |
| Haczn / IOpDO | frame / Type 20 | {"name":"Type 20"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":24,"padding":[18,0],"alignItems":"center"} |
| gu58O / Haczn | frame / Spec | {"name":"Spec"} | {"width":220,"layout":"vertical","gap":4} |
| hmqK8 / gu58O | text / Name | {"name":"Name","content":"Heading"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| R0Gnf / gu58O | text / Values | {"name":"Values","content":"20 px · 700 · lh 1.25"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| P4YJPn / Haczn | text / Example | {"name":"Example","content":"Select a card"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| gMF1N / Haczn | text / Usage | {"name":"Usage","content":"Drawer and dialog titles"} | {"fill":"$muted","textGrowth":"fixed-width","width":300,"textAlign":"right","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| nXB4z / IOpDO | frame / Type 16 | {"name":"Type 16"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":24,"padding":[18,0],"alignItems":"center"} |
| w3KL0y / nXB4z | frame / Spec | {"name":"Spec"} | {"width":220,"layout":"vertical","gap":4} |
| GfLGb / w3KL0y | text / Name | {"name":"Name","content":"Title"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| IW8rk / w3KL0y | text / Values | {"name":"Values","content":"16 px · 700 · lh 1.25"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| uVnsJ / nXB4z | text / Example | {"name":"Example","content":"Inbox"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| SfqL3 / nXB4z | text / Usage | {"name":"Usage","content":"Page title, app name"} | {"fill":"$muted","textGrowth":"fixed-width","width":300,"textAlign":"right","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| wIDod / IOpDO | frame / Type 13 | {"name":"Type 13"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":24,"padding":[18,0],"alignItems":"center"} |
| D0JOSI / wIDod | frame / Spec | {"name":"Spec"} | {"width":220,"layout":"vertical","gap":4} |
| Ouv2z / D0JOSI | text / Name | {"name":"Name","content":"Body"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| o6wMPB / D0JOSI | text / Values | {"name":"Values","content":"13 px · 400 / 700 · lh 1.5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| wMH5q / wIDod | text / Example | {"name":"Example","content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| h3eyl5 / wIDod | text / Usage | {"name":"Usage","content":"Nav, card titles, inputs, buttons"} | {"fill":"$muted","textGrowth":"fixed-width","width":300,"textAlign":"right","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| mkXYU / IOpDO | frame / Type 12 | {"name":"Type 12"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"bottom":1},"gap":24,"padding":[18,0],"alignItems":"center"} |
| zz3rb / mkXYU | frame / Spec | {"name":"Spec"} | {"width":220,"layout":"vertical","gap":4} |
| JkVJm / zz3rb | text / Name | {"name":"Name","content":"Small"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| QDbax / zz3rb | text / Values | {"name":"Values","content":"12 px · 400 / 700 · lh 1.5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| m7b8t / mkXYU | text / Example | {"name":"Example","content":"The Q3 count is off by fourteen reams."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| v5Fj2P / mkXYU | text / Usage | {"name":"Usage","content":"Sender, preview, helper text"} | {"fill":"$muted","textGrowth":"fixed-width","width":300,"textAlign":"right","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| qBg6K / IOpDO | frame / Type 11 | {"name":"Type 11"} | {"width":"fill_container","gap":24,"padding":[16,0],"alignItems":"center"} |
| qKixv / qBg6K | frame / Spec | {"name":"Spec"} | {"width":220,"layout":"vertical","gap":4} |
| l0iMrt / qKixv | text / Name | {"name":"Name","content":"Caption"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":14,"fontWeight":"700"} |
| kkB11 / qKixv | text / Values | {"name":"Values","content":"11 px · 400 / 700 · lh 1.5"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| yNEvD / qBg6K | text / Example | {"name":"Example","content":"ON THIS DEVICE · 09:58"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| G8xXL / qBg6K | text / Usage | {"name":"Usage","content":"Times, badges, overlines (caps + 1px tracking)"} | {"fill":"$muted","textGrowth":"fixed-width","width":300,"textAlign":"right","fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
