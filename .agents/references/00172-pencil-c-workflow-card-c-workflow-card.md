# C · Workflow Card

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| DkTVM / root | frame / C · Workflow Card | {"name":"C · Workflow Card","reusable":true,"theme":{"mode":"light","family":"operate"}} | {"x":9460,"y":3529,"width":240,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| gM86T / DkTVM | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":8} |
| vse2o / gM86T | frame / Avatar | {"name":"Avatar"} | {"width":32,"height":32,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| pV9vf / vse2o | text / Initials | {"name":"Initials","content":"DR"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| PfR77 / gM86T | frame / Name | {"name":"Name"} | {"width":"fill_container","layout":"vertical"} |
| Yqt6Z / PfR77 | text / Title | {"name":"Title","content":"Diana Reyes"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| GR8dk / PfR77 | text / Subtitle | {"name":"Subtitle","content":"Procurement Specialist"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| BtRfS / gM86T | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| w9AtP / DkTVM | frame / Tags | {"name":"Tags"} | {"gap":4} |
| yIVLp / w9AtP | frame / Tag 1 | {"name":"Tag 1"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| JKAqm / yIVLp | text / L | {"name":"L","content":"Referral"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| mHDmq / w9AtP | frame / Tag 2 | {"name":"Tag 2"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| yNYoj / mHDmq | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| BtB9h / DkTVM | frame / Tasks | {"name":"Tasks"} | {"width":"fill_container","layout":"vertical","gap":4} |
| SXbNY / BtB9h | text / Label | {"name":"Label","content":"1 of 2 tasks"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| VwmkB / BtB9h | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| e1o9d4 / VwmkB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":108,"height":4} |
| O40Pl / DkTVM | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[8,0,0,0],"alignItems":"center"} |
| l0lBXw / O40Pl | frame / Owner | {"name":"Owner"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| Kim3Z / l0lBXw | frame / Owner Avatar | {"name":"Owner Avatar"} | {"width":20,"height":20,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| U5HZgV / Kim3Z | text / I | {"name":"I","content":"JC"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| t3z4Ll / l0lBXw | text / Owner Name | {"name":"Owner Name","content":"Janelle Cruz"} | {"x":26,"y":1.5,"enabled":false,"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| delWt / O40Pl | frame / Due | {"name":"Due"} | {"height":20,"cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| H3tjw / delWt | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| ZHcuC / delWt | text / L | {"name":"L","content":"Aug 18"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ilt8m / O40Pl | frame / Comments | {"name":"Comments"} | {"gap":4,"alignItems":"center"} |
| IPqOv / ilt8m | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"message-square","library":"lucide","fill":"$op-text-2"} |
| FtPsZ / ilt8m | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| nXAgl / O40Pl | frame / Files | {"name":"Files"} | {"gap":4,"alignItems":"center"} |
| mFRxr / nXAgl | icon / I | {"name":"I"} | {"width":11,"height":11,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| FHWJD / nXAgl | text / N | {"name":"N","content":"0"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
