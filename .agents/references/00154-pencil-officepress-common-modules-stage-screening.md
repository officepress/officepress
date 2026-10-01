# OfficePress Common Modules / Section · Workflows / Screens / Shot · Board · HRIS Hiring / Board · HRIS Hiring / Main / Board / Stage · Screening

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| O0aye / Fewt0 | frame / Stage · Screening | {"name":"Stage · Screening"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| blebw / O0aye | frame / Stage Header | {"name":"Stage Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| KI98f / blebw | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| YABn8 / KI98f | text / Name | {"name":"Name","content":"Screening"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| bxZfb / KI98f | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| s092QJ / bxZfb | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| w3QWh / blebw | frame / Meta | {"name":"Meta"} | {"gap":8,"alignItems":"center"} |
| iLGaT / w3QWh | frame / Target | {"name":"Target"} | {"gap":4,"alignItems":"center"} |
| ygxP3 / iLGaT | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| EQIfi / iLGaT | text / L | {"name":"L","content":"48h target"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| mrR9K / w3QWh | frame / WIP | {"name":"WIP"} | {"gap":4,"alignItems":"center"} |
| e5deSl / mrR9K | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"layers","library":"lucide","fill":"$op-text-2"} |
| gJNQs / mrR9K | text / L | {"name":"L","content":"WIP 2 / 5"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Y00hL / O0aye | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| XZy30 / Y00hL | frame / Card · Angel Navarro | {"name":"Card · Angel Navarro","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| XZy30/gM86T / XZy30 | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| XZy30/vse2o / XZy30/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| XZy30/pV9vf / XZy30/vse2o | text / Initials | {"name":"Initials","content":"AN"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XZy30/PfR77 / XZy30/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| XZy30/Yqt6Z / XZy30/PfR77 | text / Title | {"name":"Title","content":"Angel Navarro"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| XZy30/GR8dk / XZy30/PfR77 | text / Subtitle | {"name":"Subtitle","content":"Business Manager"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XZy30/BtRfS / XZy30/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| XZy30/w9AtP / XZy30 | frame / Tags | {"name":"Tags"} | {"gap":4} |
| XZy30/yIVLp / XZy30/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| XZy30/JKAqm / XZy30/yIVLp | text / L | {"name":"L","content":"Priority"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XZy30/mHDmq / XZy30/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| XZy30/yNYoj / XZy30/mHDmq | text / L | {"name":"L","content":"Office"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XZy30/BtB9h / XZy30 | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| XZy30/SXbNY / XZy30/BtB9h | text / Label | {"name":"Label","content":"2 of 3 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XZy30/VwmkB / XZy30/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| XZy30/e1o9d4 / XZy30/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":140,"height":4} |
| XZy30/O40Pl / XZy30 | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| XZy30/l0lBXw / XZy30/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| XZy30/Kim3Z / XZy30/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| XZy30/U5HZgV / XZy30/Kim3Z | text / I | {"name":"I","content":"JC"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XZy30/t3z4Ll / XZy30/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Janelle Cruz"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XZy30/delWt / XZy30/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"fill":"$op-danger-tint","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| XZy30/H3tjw / XZy30/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-danger"} |
| XZy30/ZHcuC / XZy30/delWt | text / L | {"name":"L","content":"Overdue 1d"} | {"fill":"$op-danger","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XZy30/ilt8m / XZy30/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| XZy30/IPqOv / XZy30/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| XZy30/FtPsZ / XZy30/ilt8m | text / N | {"name":"N","content":"2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XZy30/nXAgl / XZy30/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| XZy30/mFRxr / XZy30/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| XZy30/FHWJD / XZy30/nXAgl | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| a5mFwF / Y00hL | frame / Card · Jomar Villanueva | {"name":"Card · Jomar Villanueva","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| a5mFwF/gM86T / a5mFwF | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| a5mFwF/vse2o / a5mFwF/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| a5mFwF/pV9vf / a5mFwF/vse2o | text / Initials | {"name":"Initials","content":"JV"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| a5mFwF/PfR77 / a5mFwF/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| a5mFwF/Yqt6Z / a5mFwF/PfR77 | text / Title | {"name":"Title","content":"Jomar Villanueva"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| a5mFwF/GR8dk / a5mFwF/PfR77 | text / Subtitle | {"name":"Subtitle","content":"Process Manager"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| a5mFwF/BtRfS / a5mFwF/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| a5mFwF/w9AtP / a5mFwF | frame / Tags | {"name":"Tags"} | {"gap":4} |
| a5mFwF/yIVLp / a5mFwF/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| a5mFwF/JKAqm / a5mFwF/yIVLp | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| a5mFwF/mHDmq / a5mFwF/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"x":63,"y":0,"enabled":false,"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| a5mFwF/yNYoj / a5mFwF/mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| a5mFwF/BtB9h / a5mFwF | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| a5mFwF/SXbNY / a5mFwF/BtB9h | text / Label | {"name":"Label","content":"1 of 3 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| a5mFwF/VwmkB / a5mFwF/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| a5mFwF/e1o9d4 / a5mFwF/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":70,"height":4} |
| a5mFwF/O40Pl / a5mFwF | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| a5mFwF/l0lBXw / a5mFwF/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| a5mFwF/Kim3Z / a5mFwF/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| a5mFwF/U5HZgV / a5mFwF/Kim3Z | text / I | {"name":"I","content":"MS"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| a5mFwF/t3z4Ll / a5mFwF/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Miguel Santos"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| a5mFwF/delWt / a5mFwF/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| a5mFwF/H3tjw / a5mFwF/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| a5mFwF/ZHcuC / a5mFwF/delWt | text / L | {"name":"L","content":"Aug 17"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| a5mFwF/ilt8m / a5mFwF/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| a5mFwF/IPqOv / a5mFwF/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| a5mFwF/FtPsZ / a5mFwF/ilt8m | text / N | {"name":"N","content":"0"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| a5mFwF/nXAgl / a5mFwF/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| a5mFwF/mFRxr / a5mFwF/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| a5mFwF/FHWJD / a5mFwF/nXAgl | text / N | {"name":"N","content":"0"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
