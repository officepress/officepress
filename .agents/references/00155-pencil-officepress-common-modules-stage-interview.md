# OfficePress Common Modules / Section · Workflows / Screens / Shot · Board · HRIS Hiring / Board · HRIS Hiring / Main / Board / Stage · Interview

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| PkRHe / Fewt0 | frame / Stage · Interview | {"name":"Stage · Interview"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| QbaFI / PkRHe | frame / Stage Header | {"name":"Stage Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| kdMEO / QbaFI | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| OqfOl / kdMEO | text / Name | {"name":"Name","content":"Interview"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| OOi3P / kdMEO | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| Z7k3JV / OOi3P | text / N | {"name":"N","content":"3"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| pxvfA / QbaFI | frame / Meta | {"name":"Meta"} | {"gap":8,"alignItems":"center"} |
| c9zch / pxvfA | frame / Target | {"name":"Target"} | {"gap":4,"alignItems":"center"} |
| Ki4bp / c9zch | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| rtbd8 / c9zch | text / L | {"name":"L","content":"72h target"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| i5wgVM / pxvfA | frame / WIP | {"name":"WIP"} | {"gap":4,"alignItems":"center"} |
| K6bEj / i5wgVM | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"layers","library":"lucide","fill":"$op-text-2"} |
| JRSGK / i5wgVM | text / L | {"name":"L","content":"WIP 3 / 4"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ChV7x / PkRHe | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| zGaen / ChV7x | frame / Card · Lea Torres | {"name":"Card · Lea Torres","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| zGaen/gM86T / zGaen | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| zGaen/vse2o / zGaen/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| zGaen/pV9vf / zGaen/vse2o | text / Initials | {"name":"Initials","content":"LT"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| zGaen/PfR77 / zGaen/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| zGaen/Yqt6Z / zGaen/PfR77 | text / Title | {"name":"Title","content":"Lea Torres"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| zGaen/GR8dk / zGaen/PfR77 | text / Subtitle | {"name":"Subtitle","content":"AI Engineer"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zGaen/BtRfS / zGaen/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| zGaen/w9AtP / zGaen | frame / Tags | {"name":"Tags"} | {"gap":4} |
| zGaen/yIVLp / zGaen/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| zGaen/JKAqm / zGaen/yIVLp | text / L | {"name":"L","content":"Senior"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| zGaen/mHDmq / zGaen/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| zGaen/yNYoj / zGaen/mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| zGaen/BtB9h / zGaen | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| zGaen/SXbNY / zGaen/BtB9h | text / Label | {"name":"Label","content":"2 of 3 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zGaen/VwmkB / zGaen/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| zGaen/e1o9d4 / zGaen/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":140,"height":4} |
| zGaen/O40Pl / zGaen | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| zGaen/l0lBXw / zGaen/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| zGaen/Kim3Z / zGaen/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| zGaen/U5HZgV / zGaen/Kim3Z | text / I | {"name":"I","content":"JC"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| zGaen/t3z4Ll / zGaen/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Janelle Cruz"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zGaen/delWt / zGaen/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| zGaen/H3tjw / zGaen/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-on-tint"} |
| zGaen/ZHcuC / zGaen/delWt | text / L | {"name":"L","content":"Today"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| zGaen/ilt8m / zGaen/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| zGaen/IPqOv / zGaen/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| zGaen/FtPsZ / zGaen/ilt8m | text / N | {"name":"N","content":"2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zGaen/nXAgl / zGaen/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| zGaen/mFRxr / zGaen/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| zGaen/FHWJD / zGaen/nXAgl | text / N | {"name":"N","content":"2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| p88DTu / ChV7x | frame / Card · Ramon Uy | {"name":"Card · Ramon Uy","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| p88DTu/gM86T / p88DTu | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| p88DTu/vse2o / p88DTu/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| p88DTu/pV9vf / p88DTu/vse2o | text / Initials | {"name":"Initials","content":"RU"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| p88DTu/PfR77 / p88DTu/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| p88DTu/Yqt6Z / p88DTu/PfR77 | text / Title | {"name":"Title","content":"Ramon Uy"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| p88DTu/GR8dk / p88DTu/PfR77 | text / Subtitle | {"name":"Subtitle","content":"Operations Officer"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| p88DTu/BtRfS / p88DTu/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| p88DTu/w9AtP / p88DTu | frame / Tags | {"name":"Tags"} | {"gap":4} |
| p88DTu/yIVLp / p88DTu/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| p88DTu/JKAqm / p88DTu/yIVLp | text / L | {"name":"L","content":"Referral"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| p88DTu/mHDmq / p88DTu/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"x":63,"y":0,"enabled":false,"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| p88DTu/yNYoj / p88DTu/mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| p88DTu/BtB9h / p88DTu | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| p88DTu/SXbNY / p88DTu/BtB9h | text / Label | {"name":"Label","content":"3 of 3 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| p88DTu/VwmkB / p88DTu/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| p88DTu/e1o9d4 / p88DTu/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":196,"height":4} |
| p88DTu/O40Pl / p88DTu | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| p88DTu/l0lBXw / p88DTu/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| p88DTu/Kim3Z / p88DTu/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| p88DTu/U5HZgV / p88DTu/Kim3Z | text / I | {"name":"I","content":"MS"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| p88DTu/t3z4Ll / p88DTu/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Miguel Santos"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| p88DTu/delWt / p88DTu/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| p88DTu/H3tjw / p88DTu/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| p88DTu/ZHcuC / p88DTu/delWt | text / L | {"name":"L","content":"Aug 16"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| p88DTu/ilt8m / p88DTu/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| p88DTu/IPqOv / p88DTu/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| p88DTu/FtPsZ / p88DTu/ilt8m | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| p88DTu/nXAgl / p88DTu/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| p88DTu/mFRxr / p88DTu/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| p88DTu/FHWJD / p88DTu/nXAgl | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| CSIPE / Fewt0 | frame / Stage · Offer | {"name":"Stage · Offer"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| n1elP2 / CSIPE | frame / Stage Header | {"name":"Stage Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| zEIGL / n1elP2 | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| u45lju / zEIGL | text / Name | {"name":"Name","content":"Offer"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| zOBMv / zEIGL | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| YHVGt / zOBMv | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NZDnE / n1elP2 | frame / Meta | {"name":"Meta"} | {"gap":8,"alignItems":"center"} |
| kADxI / NZDnE | frame / Target | {"name":"Target"} | {"gap":4,"alignItems":"center"} |
| yN7qt / kADxI | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| iKKOw / kADxI | text / L | {"name":"L","content":"48h target"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Bf0hq / NZDnE | frame / WIP | {"name":"WIP"} | {"gap":4,"alignItems":"center"} |
| TT0mD / Bf0hq | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"layers","library":"lucide","fill":"$op-text-2"} |
| sGU1d / Bf0hq | text / L | {"name":"L","content":"WIP 1 / 3"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| rOXVC / CSIPE | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| T0iPI / rOXVC | frame / Card · Alexandra Dela Cruz | {"name":"Card · Alexandra Dela Cruz","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| T0iPI/gM86T / T0iPI | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| T0iPI/vse2o / T0iPI/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| T0iPI/pV9vf / T0iPI/vse2o | text / Initials | {"name":"Initials","content":"AD"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| T0iPI/PfR77 / T0iPI/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| T0iPI/Yqt6Z / T0iPI/PfR77 | text / Title | {"name":"Title","content":"Alexandra Dela Cruz"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| T0iPI/GR8dk / T0iPI/PfR77 | text / Subtitle | {"name":"Subtitle","content":"Executive Officer"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| T0iPI/BtRfS / T0iPI/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| T0iPI/w9AtP / T0iPI | frame / Tags | {"name":"Tags"} | {"gap":4} |
| T0iPI/yIVLp / T0iPI/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| T0iPI/JKAqm / T0iPI/yIVLp | text / L | {"name":"L","content":"Leadership"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| T0iPI/mHDmq / T0iPI/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"x":63,"y":0,"enabled":false,"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| T0iPI/yNYoj / T0iPI/mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| T0iPI/BtB9h / T0iPI | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| T0iPI/SXbNY / T0iPI/BtB9h | text / Label | {"name":"Label","content":"3 of 4 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| T0iPI/VwmkB / T0iPI/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| T0iPI/e1o9d4 / T0iPI/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":150,"height":4} |
| T0iPI/O40Pl / T0iPI | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| T0iPI/l0lBXw / T0iPI/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| T0iPI/Kim3Z / T0iPI/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| T0iPI/U5HZgV / T0iPI/Kim3Z | text / I | {"name":"I","content":"PO"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| T0iPI/t3z4Ll / T0iPI/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"People Ops"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| T0iPI/delWt / T0iPI/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| T0iPI/H3tjw / T0iPI/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| T0iPI/ZHcuC / T0iPI/delWt | text / L | {"name":"L","content":"Aug 20"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| T0iPI/ilt8m / T0iPI/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| T0iPI/IPqOv / T0iPI/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| T0iPI/FtPsZ / T0iPI/ilt8m | text / N | {"name":"N","content":"0"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| T0iPI/nXAgl / T0iPI/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| T0iPI/mFRxr / T0iPI/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| T0iPI/FHWJD / T0iPI/nXAgl | text / N | {"name":"N","content":"2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| vz8rY / rOXVC | frame / Drop Slot | {"name":"Drop Slot"} | {"width":"fill_container","height":96,"fill":"$op-tint","cornerRadius":8,"stroke":"$op-accent","strokeWidth":1.5,"justifyContent":"center","alignItems":"center"} |
| t6G7Ef / vz8rY | text / L | {"name":"L","content":"Drop to move to Offer"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ytiZT / Fewt0 | frame / Stage · Hired | {"name":"Stage · Hired"} | {"opacity":0.55,"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| g7XDe9 / ytiZT | frame / Stage Header | {"name":"Stage Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| YqqS7 / g7XDe9 | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Y7nnW / YqqS7 | text / Name | {"name":"Name","content":"Hired"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| SXU6x / YqqS7 | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| mk594 / SXU6x | text / N | {"name":"N","content":"0"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| AfFjh / g7XDe9 | frame / Meta | {"name":"Meta"} | {"gap":8,"alignItems":"center"} |
| FxjYf / AfFjh | frame / Target | {"name":"Target"} | {"gap":4,"alignItems":"center"} |
| hkzCQ / FxjYf | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"flag","library":"lucide","fill":"$op-text-2"} |
| GeT4O / FxjYf | text / L | {"name":"L","content":"Final stage"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Z8vGOT / ytiZT | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| XT6yK / Z8vGOT | frame / Blocked | {"name":"Blocked"} | {"width":"fill_container","height":96,"cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"layout":"vertical","gap":4,"justifyContent":"center","alignItems":"center"} |
| e2j5Qh / XT6yK | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| cI6PT / XT6yK | text / L | {"name":"L","content":"Not allowed from Interview"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
