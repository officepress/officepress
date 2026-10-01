# OfficePress App Layout / Section · Account & app settings / Screens / Row · Account & theme / Shot · App settings · Theme / App settings · Theme / Main / Body / Content / Column / Section · Colours

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| q0m4Ap / X7c96 | frame / Section · Colours | {"name":"Section · Colours"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| sgIRp / q0m4Ap | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| jBZGN / sgIRp | text / Title | {"name":"Title","content":"Colours"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| JVC7c / sgIRp | text / Desc | {"name":"Desc","content":"Starts from the Communicate family. Change a colour and the rest of the palette is rebuilt around it."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| oQuij / q0m4Ap | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| mhtZ9 / oQuij | frame / Top Row | {"name":"Top Row"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| EcAVx / mhtZ9 | frame / Mode Tabs | {"name":"Mode Tabs"} | {"height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":4,"alignItems":"center"} |
| E1uZP / EcAVx | frame / Light | {"name":"Light"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"effect":{"type":"shadow","shadowType":"outer","color":"#0000001A","offset":{"x":0,"y":1},"blur":2},"gap":4,"padding":[0,12],"alignItems":"center"} |
| k98vfr / E1uZP | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"sun","library":"lucide","fill":"$op-accent-text"} |
| wpqP2 / E1uZP | text / L | {"name":"L","content":"Light"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| MIfZ3 / EcAVx | frame / Dark | {"name":"Dark"} | {"height":28,"cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| lP2YC / MIfZ3 | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"moon","library":"lucide","fill":"$op-text-2"} |
| bGB43 / MIfZ3 | text / L | {"name":"L","content":"Dark"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| p3MXLA / mhtZ9 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| E4g3s / mhtZ9 | frame / Customised | {"name":"Customised"} | {"height":24,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| QhYoX / E4g3s | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"paintbrush","library":"lucide","fill":"$op-on-tint"} |
| ay9hF / E4g3s | text / T | {"name":"T","content":"Customised · 3 changes"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| HSBaC / oQuij | frame / Colour · Accent | {"name":"Colour · Accent"} | {"width":"fill_container","gap":16,"padding":[4,0],"alignItems":"center"} |
| AvRDT / HSBaC | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":8,"fill":"#0E7490","width":40,"height":40,"stroke":"#15171C1F","strokeWidth":1} |
| YIOm6 / HSBaC | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| s8bXF4 / YIOm6 | text / T | {"name":"T","content":"Accent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| z6Xyz / YIOm6 | text / D | {"name":"D","content":"App tile, buttons, links, progress"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Hnrar / YIOm6 | frame / Checks | {"name":"Checks"} | {"gap":8,"padding":[4,0,0,0]} |
| E2h0A / Hnrar | frame / Check | {"name":"Check"} | {"gap":4,"alignItems":"center"} |
| YKFPc / E2h0A | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| r0LTNi / E2h0A | text / T | {"name":"T","content":"Text on white 5.4:1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| djeQz / Hnrar | frame / Check | {"name":"Check"} | {"gap":4,"alignItems":"center"} |
| gT58e / djeQz | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| SRQL2 / djeQz | text / T | {"name":"T","content":"Button text 5.4:1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| tVIb7 / HSBaC | frame / Hex | {"name":"Hex"} | {"width":120,"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| BiU1P / tVIb7 | text / Hash | {"name":"Hash","content":"#"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| e9mRF / tVIb7 | text / V | {"name":"V","content":"0E7490"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"normal"} |
| mD0ME / HSBaC | frame / Default | {"name":"Default"} | {"width":110,"layout":"vertical","gap":4} |
| dPZls / mD0ME | text / L | {"name":"L","content":"Default"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| HXkse / mD0ME | frame / Row | {"name":"Row"} | {"gap":4,"alignItems":"center"} |
| CbGqV / HXkse | rectangle / S | {"name":"S"} | {"cornerRadius":4,"fill":"$op-accent","width":12,"height":12} |
| vZwwJ / HXkse | text / V | {"name":"V","content":"#2F5BEA"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"normal"} |
| k0NsA5 / HSBaC | frame / Reset colour | {"name":"Reset colour"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| c62Z4i / k0NsA5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"rotate-ccw","library":"lucide","fill":"$op-text-2"} |
| iYiu3 / oQuij | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| MTqhi / oQuij | frame / Colour · Sidebar | {"name":"Colour · Sidebar"} | {"width":"fill_container","gap":16,"padding":[4,0],"alignItems":"center"} |
| c7a8Ht / MTqhi | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":8,"fill":"#0F2A33","width":40,"height":40,"stroke":"#15171C1F","strokeWidth":1} |
| BevRx / MTqhi | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Cw3Gw / BevRx | text / T | {"name":"T","content":"Sidebar"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| jwhq1 / BevRx | text / D | {"name":"D","content":"The aside background; always the darkest surface"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| noVJU / BevRx | frame / Checks | {"name":"Checks"} | {"gap":8,"padding":[4,0,0,0]} |
| Ow4sK / noVJU | frame / Check | {"name":"Check"} | {"gap":4,"alignItems":"center"} |
| AtBdk / Ow4sK | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| w1bGU / Ow4sK | text / T | {"name":"T","content":"Sidebar text 14.8:1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| v5ALqP / noVJU | frame / Check | {"name":"Check"} | {"gap":4,"alignItems":"center"} |
| p396wF / v5ALqP | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| h1Mix / v5ALqP | text / T | {"name":"T","content":"Secondary text 7.0:1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| L0M67 / MTqhi | frame / Hex | {"name":"Hex"} | {"width":120,"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| zlDE3 / L0M67 | text / Hash | {"name":"Hash","content":"#"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Dc8w5 / L0M67 | text / V | {"name":"V","content":"0F2A33"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"normal"} |
| bVQHB / MTqhi | frame / Default | {"name":"Default"} | {"width":110,"layout":"vertical","gap":4} |
| Qhckd / bVQHB | text / L | {"name":"L","content":"Default"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l7GxNS / bVQHB | frame / Row | {"name":"Row"} | {"gap":4,"alignItems":"center"} |
| c1snqO / l7GxNS | rectangle / S | {"name":"S"} | {"cornerRadius":4,"fill":"$op-nav","width":12,"height":12} |
| pRoOC / l7GxNS | text / V | {"name":"V","content":"#18254E"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"normal"} |
| SUcct / MTqhi | frame / Reset colour | {"name":"Reset colour"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| BYHGj / SUcct | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"rotate-ccw","library":"lucide","fill":"$op-text-2"} |
| UbUGW / oQuij | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| YF7X3 / oQuij | frame / Colour · Canvas | {"name":"Colour · Canvas"} | {"width":"fill_container","gap":16,"padding":[4,0],"alignItems":"center"} |
| u72GY / YF7X3 | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":8,"fill":"#F2F7F8","width":40,"height":40,"stroke":"#15171C1F","strokeWidth":1} |
| Z6Qeq / YF7X3 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| S1fxiX / Z6Qeq | text / T | {"name":"T","content":"Canvas"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| aWGnS / Z6Qeq | text / D | {"name":"D","content":"Board background; toolbar and columns derive from it"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| N7Ybl / Z6Qeq | frame / Checks | {"name":"Checks"} | {"gap":8,"padding":[4,0,0,0]} |
| m8xubE / N7Ybl | frame / Check | {"name":"Check"} | {"gap":4,"alignItems":"center"} |
| xE7w8 / m8xubE | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| kcyYZ / m8xubE | text / T | {"name":"T","content":"Secondary text 5.6:1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ylKO3 / YF7X3 | frame / Hex | {"name":"Hex"} | {"width":120,"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| sl3Eq / ylKO3 | text / Hash | {"name":"Hash","content":"#"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CVyLR / ylKO3 | text / V | {"name":"V","content":"F2F7F8"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"normal"} |
| qq1sC / YF7X3 | frame / Default | {"name":"Default"} | {"width":110,"layout":"vertical","gap":4} |
| XJ80e / qq1sC | text / L | {"name":"L","content":"Default"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| OC5bu / qq1sC | frame / Row | {"name":"Row"} | {"gap":4,"alignItems":"center"} |
| k5djJ / OC5bu | rectangle / S | {"name":"S"} | {"cornerRadius":4,"fill":"$op-canvas","width":12,"height":12} |
| PMd0h / OC5bu | text / V | {"name":"V","content":"#F3F5FB"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"normal"} |
| nb4tU / YF7X3 | frame / Reset colour | {"name":"Reset colour"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| fyxsH / nb4tU | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"rotate-ccw","library":"lucide","fill":"$op-text-2"} |
| KhqEP / oQuij | frame / Presets | {"name":"Presets"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":[8,0,0,0]} |
| ffe0i / KhqEP | text / L | {"name":"L","content":"Quick picks for accent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| NA39j / KhqEP | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| Jj5wA / NA39j | frame / Preset #2F5BEA | {"name":"Preset #2F5BEA"} | {"width":32,"height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| CMhVL / Jj5wA | ellipse / C | {"name":"C"} | {"fill":"#2F5BEA","width":24,"height":24} |
| lv6ye / NA39j | frame / Preset #0E7490 | {"name":"Preset #0E7490"} | {"width":32,"height":32,"cornerRadius":999,"stroke":"$op-text","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| LUSnK / lv6ye | ellipse / C | {"name":"C"} | {"fill":"#0E7490","width":24,"height":24} |
| JQgIg / NA39j | frame / Preset #1D4ED8 | {"name":"Preset #1D4ED8"} | {"width":32,"height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| iUTgD / JQgIg | ellipse / C | {"name":"C"} | {"fill":"#1D4ED8","width":24,"height":24} |
| wgPS7 / NA39j | frame / Preset #4338CA | {"name":"Preset #4338CA"} | {"width":32,"height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| rnN6k / wgPS7 | ellipse / C | {"name":"C"} | {"fill":"#4338CA","width":24,"height":24} |
| xYoYJ / NA39j | frame / Preset #0F766E | {"name":"Preset #0F766E"} | {"width":32,"height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| cPfIr / xYoYJ | ellipse / C | {"name":"C"} | {"fill":"#0F766E","width":24,"height":24} |
| n9bd1A / NA39j | frame / Preset #9D174D | {"name":"Preset #9D174D"} | {"width":32,"height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| h0PNA / n9bd1A | ellipse / C | {"name":"C"} | {"fill":"#9D174D","width":24,"height":24} |
| r0D2kO / NA39j | frame / Preset #374151 | {"name":"Preset #374151"} | {"width":32,"height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| efe2j / r0D2kO | ellipse / C | {"name":"C"} | {"fill":"#374151","width":24,"height":24} |
| fGKdE / NA39j | text / Note | {"name":"Note","content":"Other families' colours are hidden to keep apps distinct."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| nFXXl / oQuij | frame / Live preview | {"name":"Live preview"} | {"clip":true,"width":"fill_container","height":150,"cornerRadius":8,"stroke":"$op-border","strokeWidth":1} |
| CtOEt / nFXXl | frame / Aside | {"name":"Aside"} | {"width":150,"height":"fill_container","fill":"#0F2A33","layout":"vertical","gap":8,"padding":12} |
| iY5G1 / CtOEt | frame / Brand | {"name":"Brand"} | {"gap":8,"alignItems":"center"} |
| sYnQv / iY5G1 | frame / Logo | {"name":"Logo"} | {"width":20,"height":20,"fill":"#0E7490","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ak0zI / sYnQv | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"mail-open","library":"lucide","fill":"#FFFFFF"} |
| H9mA8 / iY5G1 | text / N | {"name":"N","content":"Paperworks Inbox"} | {"fill":"#FFFFFF","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| wPCgl / CtOEt | frame / Nav | {"name":"Nav"} | {"width":"fill_container","height":20,"fill":"#FFFFFF1A","cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| iMw5a / wPCgl | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":4,"fill":"#FFFFFF","width":60,"height":5} |
| gVnuy / CtOEt | frame / Nav | {"name":"Nav"} | {"width":"fill_container","height":20,"cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| lrZGV / gVnuy | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":4,"fill":"#FFFFFF66","width":48,"height":5} |
| sok3Q / CtOEt | frame / Nav | {"name":"Nav"} | {"width":"fill_container","height":20,"cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| JQ3Ut / sok3Q | rectangle / Bar | {"name":"Bar"} | {"cornerRadius":4,"fill":"#FFFFFF66","width":54,"height":5} |
| f0t7hR / nFXXl | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","fill":"#F2F7F8","layout":"vertical","gap":8,"padding":12} |
| ku7tv / f0t7hR | frame / Head | {"name":"Head"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| hWqXh / ku7tv | text / T | {"name":"T","content":"Inbox"} | {"fill":"#0F2A33","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| O13zDU / ku7tv | frame / Btn | {"name":"Btn"} | {"height":24,"fill":"#0E7490","cornerRadius":4,"padding":[0,12],"alignItems":"center"} |
| gA7e9 / O13zDU | text / L | {"name":"L","content":"New"} | {"fill":"#FFFFFF","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| tJPlJ / f0t7hR | frame / Card | {"name":"Card"} | {"width":220,"fill":"#FFFFFF","cornerRadius":8,"stroke":"#D3E3E7","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| kIF3Q / tJPlJ | text / T | {"name":"T","content":"Invoice NW-4471"} | {"fill":"#0F2A33","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ifGFU / tJPlJ | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"#CFE6EC","cornerRadius":999,"layout":"none"} |
| tK1px / ifGFU | rectangle / F | {"name":"F"} | {"cornerRadius":999,"x":0,"y":0,"fill":"#0E7490","width":150,"height":4} |
| lfuvB / q0m4Ap | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| EIzkC / lfuvB | frame / Button · Reset to default | {"name":"Button · Reset to default"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| sZlDp / EIzkC | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"rotate-ccw","library":"lucide","fill":"$op-text"} |
| ia9Nn / EIzkC | text / Label | {"name":"Label","content":"Reset to default"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| F97rZ0 / lfuvB | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| pUfVL / lfuvB | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| i4Xckh / pUfVL | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| HasLE / lfuvB | frame / Button · Save theme | {"name":"Button · Save theme"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16],"alignItems":"center"} |
| tg8sx / HasLE | text / Label | {"name":"Label","content":"Save theme"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| SCS3N / tFlP3 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| OtaAE / SCS3N | text / Label | {"name":"Label","content":"App settings · Theme"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| vrGBc / SCS3N | text / Note | {"name":"Note","content":"Brand and colour for this app only. Colours start from the family defaults; only accent, sidebar and canvas are editable, and everything else (tints, text-safe accents, borders) is derived and contrast-checked. Reset restores the family defaults."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
