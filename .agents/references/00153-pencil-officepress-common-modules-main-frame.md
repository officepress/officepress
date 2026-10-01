# OfficePress Common Modules / Section · Workflows / Screens / Shot · Board · HRIS Hiring / Board · HRIS Hiring / Main — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| oKebE / TgMRX | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| jUu1I / oKebE | frame / Header | {"name":"Header","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| jUu1I/NL2v5 / jUu1I | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| jUu1I/v0pIr4 / jUu1I/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| jUu1I/E8PtZC / jUu1I | text / Page Title | {"name":"Page Title","content":"Hiring"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| jUu1I/G3t23s / jUu1I | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| jUu1I/dtuXO / jUu1I | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center"} |
| jUu1I/H5cU4B / jUu1I/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| jUu1I/I7kF1e / jUu1I/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| jUu1I/vQMp0 / jUu1I/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| jUu1I/qS8da / jUu1I/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| jUu1I/f6Nm4U / jUu1I | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| jUu1I/BTxZN / jUu1I | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| jUu1I/fawPG / jUu1I/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| jUu1I/MT9A7 / jUu1I/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| jUu1I/SkOaY / jUu1I/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| jUu1I/XGyoO / jUu1I/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| jUu1I/C5tCn / jUu1I/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| jUu1I/szMHy / jUu1I/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| jUu1I/K5uDK / jUu1I/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| jUu1I/I60pf / jUu1I/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| jUu1I/h47xa8 / jUu1I/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| n8rwG6 / oKebE | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| yWZkZ / n8rwG6 | frame / Search | {"name":"Search"} | {"width":280,"height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| G5QVb9 / yWZkZ | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| GEzz0 / yWZkZ | text / P | {"name":"P","content":"Name, role or tag"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Uen80 / n8rwG6 | frame / Select · All owners | {"name":"Select · All owners"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| AewKB / Uen80 | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"user","library":"lucide","fill":"$op-text-2"} |
| OEINn / Uen80 | text / L | {"name":"L","content":"All owners"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Ajam6 / Uen80 | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| knIGJ / n8rwG6 | frame / Select · Hiring workflow | {"name":"Select · Hiring workflow"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| dYIEk / knIGJ | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"kanban","library":"lucide","fill":"$op-text-2"} |
| QmsrS / knIGJ | text / L | {"name":"L","content":"Hiring workflow"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| WWARD / knIGJ | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| tiOUN / n8rwG6 | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| IP1Aj / n8rwG6 | frame / Button · Automations | {"name":"Button · Automations"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| K8DOeK / IP1Aj | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"zap","library":"lucide","fill":"$op-text"} |
| y5SxBx / IP1Aj | text / Label | {"name":"Label","content":"Automations"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| NCwf0 / n8rwG6 | frame / Button · Edit workflow | {"name":"Button · Edit workflow"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| wRCPt / NCwf0 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"pencil","library":"lucide","fill":"$op-text"} |
| V4MBj / NCwf0 | text / Label | {"name":"Label","content":"Edit workflow"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| nPsMM / n8rwG6 | frame / Button · Add personnel | {"name":"Button · Add personnel"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| Ye9lm / nPsMM | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"user-plus","library":"lucide","fill":"$op-on-accent"} |
| RoaUx / nPsMM | text / Label | {"name":"Label","content":"Add personnel"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Fewt0 / oKebE | frame / Board | {"name":"Board"} | {"clip":true,"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":12,"padding":16} |
| JCMJo / Fewt0 | frame / Stage · Applied | {"name":"Stage · Applied"} | {"clip":true,"width":"fill_container","fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| cvDWP / JCMJo | frame / Stage Header | {"name":"Stage Header"} | {"width":"fill_container","fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":12} |
| JgGSp / cvDWP | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| NpDsd / JgGSp | text / Name | {"name":"Name","content":"Applied"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ciLWH / JgGSp | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| wkKBg / ciLWH | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| r88551 / cvDWP | frame / Meta | {"name":"Meta"} | {"gap":8,"alignItems":"center"} |
| mPXAn / r88551 | frame / Target | {"name":"Target"} | {"gap":4,"alignItems":"center"} |
| eKVHC / mPXAn | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| naBhl / mPXAn | text / L | {"name":"L","content":"24h target"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Bwxf5 / JCMJo | frame / Cards | {"name":"Cards"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":8} |
| EFZUf / Bwxf5 | frame / Card · Diana Reyes | {"name":"Card · Diana Reyes","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| EFZUf/gM86T / EFZUf | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| EFZUf/vse2o / EFZUf/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| EFZUf/pV9vf / EFZUf/vse2o | text / Initials | {"name":"Initials","content":"DR"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| EFZUf/PfR77 / EFZUf/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| EFZUf/Yqt6Z / EFZUf/PfR77 | text / Title | {"name":"Title","content":"Diana Reyes"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| EFZUf/GR8dk / EFZUf/PfR77 | text / Subtitle | {"name":"Subtitle","content":"Procurement Specialist"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| EFZUf/BtRfS / EFZUf/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| EFZUf/w9AtP / EFZUf | frame / Tags | {"name":"Tags"} | {"gap":4} |
| EFZUf/yIVLp / EFZUf/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| EFZUf/JKAqm / EFZUf/yIVLp | text / L | {"name":"L","content":"Referral"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| EFZUf/mHDmq / EFZUf/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"x":63,"y":0,"enabled":false,"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| EFZUf/yNYoj / EFZUf/mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| EFZUf/BtB9h / EFZUf | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| EFZUf/SXbNY / EFZUf/BtB9h | text / Label | {"name":"Label","content":"1 of 2 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| EFZUf/VwmkB / EFZUf/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| EFZUf/e1o9d4 / EFZUf/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":108,"height":4} |
| EFZUf/O40Pl / EFZUf | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| EFZUf/l0lBXw / EFZUf/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| EFZUf/Kim3Z / EFZUf/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| EFZUf/U5HZgV / EFZUf/Kim3Z | text / I | {"name":"I","content":"JC"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| EFZUf/t3z4Ll / EFZUf/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Janelle Cruz"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| EFZUf/delWt / EFZUf/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| EFZUf/H3tjw / EFZUf/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| EFZUf/ZHcuC / EFZUf/delWt | text / L | {"name":"L","content":"Aug 18"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| EFZUf/ilt8m / EFZUf/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| EFZUf/IPqOv / EFZUf/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| EFZUf/FtPsZ / EFZUf/ilt8m | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| EFZUf/nXAgl / EFZUf/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| EFZUf/mFRxr / EFZUf/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| EFZUf/FHWJD / EFZUf/nXAgl | text / N | {"name":"N","content":"0"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qwxr1 / Bwxf5 | frame / Card · Paolo Lim | {"name":"Card · Paolo Lim","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| qwxr1/gM86T / qwxr1 | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| qwxr1/vse2o / qwxr1/gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| qwxr1/pV9vf / qwxr1/vse2o | text / Initials | {"name":"Initials","content":"PL"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qwxr1/PfR77 / qwxr1/gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| qwxr1/Yqt6Z / qwxr1/PfR77 | text / Title | {"name":"Title","content":"Paolo Lim"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| qwxr1/GR8dk / qwxr1/PfR77 | text / Subtitle | {"name":"Subtitle","content":"AI Engineer"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qwxr1/BtRfS / qwxr1/gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| qwxr1/w9AtP / qwxr1 | frame / Tags | {"name":"Tags"} | {"gap":4} |
| qwxr1/yIVLp / qwxr1/w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| qwxr1/JKAqm / qwxr1/yIVLp | text / L | {"name":"L","content":"Internal"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qwxr1/mHDmq / qwxr1/w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"x":63,"y":0,"enabled":false,"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| qwxr1/yNYoj / qwxr1/mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qwxr1/BtB9h / qwxr1 | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| qwxr1/SXbNY / qwxr1/BtB9h | text / Label | {"name":"Label","content":"0 of 2 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qwxr1/VwmkB / qwxr1/BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| qwxr1/e1o9d4 / qwxr1/VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":0,"height":4} |
| qwxr1/O40Pl / qwxr1 | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| qwxr1/l0lBXw / qwxr1/O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| qwxr1/Kim3Z / qwxr1/l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qwxr1/U5HZgV / qwxr1/Kim3Z | text / I | {"name":"I","content":"MS"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qwxr1/t3z4Ll / qwxr1/l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Miguel Santos"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qwxr1/delWt / qwxr1/O40Pl | frame / Due | {"name":"Due"} | {"height":20,"cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| qwxr1/H3tjw / qwxr1/delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| qwxr1/ZHcuC / qwxr1/delWt | text / L | {"name":"L","content":"Aug 19"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| qwxr1/ilt8m / qwxr1/O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| qwxr1/IPqOv / qwxr1/ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| qwxr1/FtPsZ / qwxr1/ilt8m | text / N | {"name":"N","content":"0"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qwxr1/nXAgl / qwxr1/O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| qwxr1/mFRxr / qwxr1/nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| qwxr1/FHWJD / qwxr1/nXAgl | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
