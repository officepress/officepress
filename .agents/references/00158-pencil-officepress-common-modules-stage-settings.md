# OfficePress Common Modules / Section · Workflows / Screens / Shot · Workflow designer · Order Processing / Workflow designer · Order Processing / Main / Body / Split / Stage Settings

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| eesLQ / k8xSY | frame / Stage Settings | {"name":"Stage Settings"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| q5iAxv / eesLQ | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"padding":[16,20],"alignItems":"center"} |
| I7z3cL / q5iAxv | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| yWmWl / I7z3cL | text / L | {"name":"L","content":"SELECTED STAGE"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| J2YVuS / I7z3cL | text / N | {"name":"N","content":"Picking"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| XeS8u / q5iAxv | frame / Badge | {"name":"Badge"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| pRmsR / XeS8u | text / T | {"name":"T","content":"Stage 2"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| xx1Ye / eesLQ | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":20} |
| zLa3g / xx1Ye | frame / Row 1 | {"name":"Row 1"} | {"width":"fill_container","gap":16} |
| R6kAB / zLa3g | frame / Field · Stage name | {"name":"Field · Stage name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| VTjRP / R6kAB | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| XJ95i / VTjRP | text / Label | {"name":"Label","content":"Stage name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| s1KTMH / R6kAB | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| YZTgU / s1KTMH | text / Value | {"name":"Value","content":"Picking"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| YShEL / zLa3g | frame / Field · Assign cards entering this stage to | {"name":"Field · Assign cards entering this stage to"} | {"width":"fill_container","layout":"vertical","gap":4} |
| rRCuU / YShEL | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ubIxK / rRCuU | text / Label | {"name":"Label","content":"Assign cards entering this stage to"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| dPDnR / YShEL | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| sPFyC / dPDnR | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"users","library":"lucide","fill":"$op-text-2"} |
| t9oZf / dPDnR | text / Value | {"name":"Value","content":"Warehouse team"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| FoQ7v / dPDnR | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| UT4Bb / xx1Ye | frame / Row 2 | {"name":"Row 2"} | {"width":"fill_container","gap":16} |
| c5Uua / UT4Bb | frame / Field · Description | {"name":"Field · Description"} | {"width":"fill_container","layout":"vertical","gap":4} |
| RlmOw / c5Uua | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ue1Wv / RlmOw | text / Label | {"name":"Label","content":"Description"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| nufX2 / c5Uua | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| xDoPf / nufX2 | text / Value | {"name":"Value","content":"Pick every line item and confirm stock."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| j5XCzo / UT4Bb | frame / Field · Outcome | {"name":"Field · Outcome"} | {"width":"fill_container","layout":"vertical","gap":4} |
| LRpqm / j5XCzo | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| H93PD / LRpqm | text / Label | {"name":"Label","content":"Outcome"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| tqkb0 / j5XCzo | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| GKn18 / tqkb0 | text / Value | {"name":"Value","content":"Continue workflow"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| T7bqa / tqkb0 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| DHNo0 / xx1Ye | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| UmbHk / xx1Ye | frame / Limits Head | {"name":"Limits Head"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Rpt7p / UmbHk | text / T | {"name":"T","content":"Limits and entry requirements"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| I5oME3 / UmbHk | text / D | {"name":"D","content":"Expected time in stage, capacity, and what a card needs before it can enter."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| HkEKS / xx1Ye | frame / Row 3 | {"name":"Row 3"} | {"width":"fill_container","gap":16} |
| o1iqd / HkEKS | frame / Field · Time target | {"name":"Field · Time target"} | {"width":"fill_container","layout":"vertical","gap":4} |
| E8XZy / o1iqd | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| aOf0q / E8XZy | text / Label | {"name":"Label","content":"Time target"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| wfil9 / o1iqd | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| RWFfn / wfil9 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| nwh6l / wfil9 | text / Value | {"name":"Value","content":"4 hours"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m0odx9 / wfil9 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| Y8SJj / HkEKS | frame / Field · Max cards (WIP) | {"name":"Field · Max cards (WIP)"} | {"width":"fill_container","layout":"vertical","gap":4} |
| d9kyTa / Y8SJj | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Q5Gsn / d9kyTa | text / Label | {"name":"Label","content":"Max cards (WIP)"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| acTzH / Y8SJj | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| kgUjL / acTzH | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"layers","library":"lucide","fill":"$op-text-2"} |
| b6lETi / acTzH | text / Value | {"name":"Value","content":"20"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| fSuOp / xx1Ye | frame / Requirements | {"name":"Requirements"} | {"width":"fill_container","gap":12} |
| R7UM5 / fSuOp | frame / Check · Payment confirmed | {"name":"Check · Payment confirmed"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"stroke":"$op-accent","strokeWidth":1,"gap":8,"padding":12} |
| Vbg1g / R7UM5 | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| m13vI / Vbg1g | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| G3fk4 / R7UM5 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| T6pDe / G3fk4 | text / T | {"name":"T","content":"Payment confirmed"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| gWWm6 / G3fk4 | text / D | {"name":"D","content":"The order must be paid before picking starts."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| B3Py0W / fSuOp | frame / Check · Document attached | {"name":"Check · Document attached"} | {"width":"fill_container","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12} |
| GfjDQ / B3Py0W | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1.5,"justifyContent":"center","alignItems":"center"} |
| qZJdE / B3Py0W | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| QcfYh / qZJdE | text / T | {"name":"T","content":"Document attached"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| GAPc7 / qZJdE | text / D | {"name":"D","content":"At least one attachment must be present."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| J8LjO / xx1Ye | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| n4LYqR / xx1Ye | frame / Tasks Head | {"name":"Tasks Head"} | {"width":"fill_container","alignItems":"center"} |
| I75Wp / n4LYqR | text / T | {"name":"T","content":"Default stage tasks"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| OvMpB / n4LYqR | frame / Button · Add task | {"name":"Button · Add task"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| A60eHz / OvMpB | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"plus","library":"lucide","fill":"$op-text"} |
| c29xlQ / OvMpB | text / Label | {"name":"Label","content":"Add task"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| wXBZI / xx1Ye | frame / Task | {"name":"Task"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| U9nhD / wXBZI | icon / D | {"name":"D"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| dOrr9 / wXBZI | frame / Input | {"name":"Input"} | {"width":"fill_container","height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| QVO2x / dOrr9 | text / V | {"name":"V","content":"Print pick list"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| q7gjD / wXBZI | frame / Delete | {"name":"Delete"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| EgDFM / q7gjD | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"trash-2","library":"lucide","fill":"$op-text-2"} |
| KmQ5I / xx1Ye | frame / Task | {"name":"Task"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| E2UQFU / KmQ5I | icon / D | {"name":"D"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| v5AecJ / KmQ5I | frame / Input | {"name":"Input"} | {"width":"fill_container","height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| eIspT / v5AecJ | text / V | {"name":"V","content":"Scan every item"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| mIyIg / KmQ5I | frame / Delete | {"name":"Delete"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| a0yx9m / mIyIg | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"trash-2","library":"lucide","fill":"$op-text-2"} |
| c7zET / xx1Ye | frame / Task | {"name":"Task"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| MuMOJ / c7zET | icon / D | {"name":"D"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| Tid5p / c7zET | frame / Input | {"name":"Input"} | {"width":"fill_container","height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| X3BKu / Tid5p | text / V | {"name":"V","content":"Flag missing stock"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| YkKjh / c7zET | frame / Delete | {"name":"Delete"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| f8zNf / YkKjh | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"trash-2","library":"lucide","fill":"$op-text-2"} |
| kqCxl / xx1Ye | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| h0tIJ / xx1Ye | text / T | {"name":"T","content":"Allowed next stages"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| hLavi / xx1Ye | frame / Next | {"name":"Next"} | {"width":"fill_container","gap":12} |
| H2opp / hLavi | frame / Check · Packed | {"name":"Check · Packed"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"stroke":"$op-accent","strokeWidth":1,"gap":8,"padding":12} |
| xlU7Q / H2opp | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| nvayH / xlU7Q | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| fSjHA / H2opp | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| EJAPX / fSjHA | text / T | {"name":"T","content":"Packed"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| UWLvD / fSjHA | text / D | {"name":"D","content":"Allow cards to move here."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| aOZAr / hLavi | frame / Check · Received | {"name":"Check · Received"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"stroke":"$op-accent","strokeWidth":1,"gap":8,"padding":12} |
| UvjFG / aOZAr | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| KgjZW / UvjFG | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| zpDPG / aOZAr | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| DiFxa / zpDPG | text / T | {"name":"T","content":"Received"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| JJIbP / zpDPG | text / D | {"name":"D","content":"Send back if stock is missing."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| rEjXO / hLavi | frame / Check · Shipped | {"name":"Check · Shipped"} | {"width":"fill_container","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12} |
| A7uXc / rEjXO | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1.5,"justifyContent":"center","alignItems":"center"} |
| YITGs / rEjXO | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical","gap":4} |
| bt1Bl / YITGs | text / T | {"name":"T","content":"Shipped"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| oAg7J / YITGs | text / D | {"name":"D","content":"Skip packing."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Fo13p / dCyof | frame / Section · Automations | {"name":"Section · Automations"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| NO789 / Fo13p | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| nHreS / NO789 | text / Title | {"name":"Title","content":"Automations"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| T7CGsJ / NO789 | text / Desc | {"name":"Desc","content":"Run ordered actions when a card event and optional conditions match."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| fSvIl / Fo13p | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| X6Z8Ni / fSvIl | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| G32bWl / X6Z8Ni | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| wPUHc / G32bWl | text / T | {"name":"T","content":"Fulfilment automations"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| xcaZG / G32bWl | text / D | {"name":"D","content":"3 active · 1 paused · 1 draft"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Sdh5M / X6Z8Ni | frame / Button · Manage automations | {"name":"Button · Manage automations"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| P8Aew / Sdh5M | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"zap","library":"lucide","fill":"$op-text"} |
| W5mXM / Sdh5M | text / Label | {"name":"Label","content":"Manage automations"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| J8J1B / J6ySNa | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| T1k0y / J8J1B | text / Label | {"name":"Label","content":"Workflow designer · Order Processing"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| uMHDn / J8J1B | text / Note | {"name":"Note","content":"Workflow identity, then stages on the left and the selected stage on the right: owner, outcome, time target, WIP limit, entry requirements, default tasks and allowed next stages. Automations are managed from here."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
