# OfficePress Common Modules / Section · Automations / Screens / Shot · Automation builder · Inbox Follow up / Automation builder · Inbox Follow up / Main — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| geQCp / Fo6j5 | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| cXrTa / geQCp | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| cXrTa/NL2v5 / cXrTa | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| cXrTa/v0pIr4 / cXrTa/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| cXrTa/E8PtZC / cXrTa | text / Page Title | {"name":"Page Title","content":"New automation"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| cXrTa/G3t23s / cXrTa | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| cXrTa/dtuXO / cXrTa | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| cXrTa/H5cU4B / cXrTa/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| cXrTa/I7kF1e / cXrTa/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| cXrTa/vQMp0 / cXrTa/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| cXrTa/qS8da / cXrTa/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| cXrTa/f6Nm4U / cXrTa | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| cXrTa/BTxZN / cXrTa | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| cXrTa/fawPG / cXrTa/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| cXrTa/MT9A7 / cXrTa/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| cXrTa/SkOaY / cXrTa/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| cXrTa/XGyoO / cXrTa/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| cXrTa/C5tCn / cXrTa/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| cXrTa/szMHy / cXrTa/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| cXrTa/K5uDK / cXrTa/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| cXrTa/I60pf / cXrTa/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| cXrTa/h47xa8 / cXrTa/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| jGltP / geQCp | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical","gap":20,"padding":[24,32]} |
| G3tpPL / jGltP | frame / Page Head | {"name":"Page Head"} | {"width":"fill_container","gap":12,"alignItems":"end"} |
| KmPpM / G3tpPL | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical","gap":4} |
| dEg1x / KmPpM | text / Crumb | {"name":"Crumb","content":"Board  ›  Follow up  ›  Automations"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| gKbKu / KmPpM | text / T | {"name":"T","content":"New automation"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| S8kLVN / G3tpPL | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| ENzLS / S8kLVN | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| FZh0L / G3tpPL | frame / Button · Save automation | {"name":"Button · Save automation"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| yvAIm / FZh0L | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"save","library":"lucide","fill":"$op-on-accent"} |
| R42vB / FZh0L | text / Label | {"name":"Label","content":"Save automation"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| HNtbQ / jGltP | frame / Rule Details | {"name":"Rule Details"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":16,"padding":20,"alignItems":"end"} |
| CnHyA / HNtbQ | frame / Field · Rule name | {"name":"Field · Rule name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| CiSi1 / CnHyA | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| QchiH / CiSi1 | text / Label | {"name":"Label","content":"Rule name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| wgDqz / CnHyA | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| FWm0c / wgDqz | text / Value | {"name":"Value","content":"Tidy unread follow-ups"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| y8FBee / HNtbQ | frame / Field · Status | {"name":"Field · Status"} | {"width":200,"layout":"vertical","gap":4} |
| bG2Hb / y8FBee | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Xpq6E / bG2Hb | text / Label | {"name":"Label","content":"Status"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| d0gWTj / y8FBee | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| EjC2M / d0gWTj | text / Value | {"name":"Value","content":"Draft"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| V7VIr / d0gWTj | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| QYXT9 / jGltP | frame / Split | {"name":"Split"} | {"width":"fill_container","gap":20} |
| KhNmh / QYXT9 | frame / Steps | {"name":"Steps"} | {"width":"fill_container","layout":"vertical","gap":16} |
| X52xyF / KhNmh | frame / Step 1 · Trigger | {"name":"Step 1 · Trigger"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| UjfCk / X52xyF | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[16,20],"alignItems":"center"} |
| Fl6Wz / UjfCk | frame / No | {"name":"No"} | {"width":28,"height":28,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| wK83b / Fl6Wz | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| c8Wo0 / UjfCk | frame / T | {"name":"T"} | {"layout":"vertical"} |
| PoSYk / c8Wo0 | text / T | {"name":"T","content":"Trigger"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| lJUaI / c8Wo0 | text / D | {"name":"D","content":"Choose the event that starts this rule."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| ddFT4 / X52xyF | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":12,"padding":20} |
| YxHYW / ddFT4 | frame / Field · When | {"name":"Field · When"} | {"width":"fill_container","layout":"vertical","gap":4} |
| XbuX0 / YxHYW | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| MXMUv / XbuX0 | text / Label | {"name":"Label","content":"When"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| x0QZF / YxHYW | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| AI2VT / x0QZF | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"log-in","library":"lucide","fill":"$op-text-2"} |
| X2hH7r / x0QZF | text / Value | {"name":"Value","content":"A card enters this column"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| c448c / x0QZF | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| XVeXK / KhNmh | frame / Step 2 · Conditions | {"name":"Step 2 · Conditions"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| O0Vgp / XVeXK | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[16,20],"alignItems":"center"} |
| clGGl / O0Vgp | frame / No | {"name":"No"} | {"width":28,"height":28,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| CxrFl / clGGl | text / N | {"name":"N","content":"2"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| k4geH3 / O0Vgp | frame / T | {"name":"T"} | {"layout":"vertical"} |
| wa8QV / k4geH3 | text / T | {"name":"T","content":"Conditions"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| S5jTOB / k4geH3 | text / D | {"name":"D","content":"Only continue when the card matches these checks."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| v0Y0t / XVeXK | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":12,"padding":20} |
| S8Ku6Y / v0Y0t | frame / Match | {"name":"Match"} | {"gap":8,"alignItems":"center"} |
| A9ki6 / S8Ku6Y | text / L | {"name":"L","content":"Continue when"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| lMkFZ / S8Ku6Y | frame / Seg | {"name":"Seg"} | {"height":32,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":4,"alignItems":"center"} |
| W7gSh / lMkFZ | frame / All match | {"name":"All match"} | {"height":24,"fill":"$op-surface","cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| N3iuj1 / W7gSh | text / L | {"name":"L","content":"All match"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| gg1Ug / lMkFZ | frame / Any match | {"name":"Any match"} | {"height":24,"cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| REncE / gg1Ug | text / L | {"name":"L","content":"Any match"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| M2vvG / v0Y0t | frame / Condition | {"name":"Condition"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"gap":8,"padding":12,"alignItems":"end"} |
| Yy0VI / M2vvG | frame / Field · Field | {"name":"Field · Field"} | {"width":"fill_container","layout":"vertical","gap":4} |
| enYPV / Yy0VI | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| gWXJZ / enYPV | text / Label | {"name":"Label","content":"Field"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| uywB8 / Yy0VI | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| uQwMC / uywB8 | text / Value | {"name":"Value","content":"Read state"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| QkD1b / uywB8 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| cHOHP / M2vvG | frame / Field · Operator | {"name":"Field · Operator"} | {"width":160,"layout":"vertical","gap":4} |
| Tasvt / cHOHP | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| mLY9g / Tasvt | text / Label | {"name":"Label","content":"Operator"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| gWQ2v / cHOHP | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| L9hkUp / gWQ2v | text / Value | {"name":"Value","content":"is"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| f7HMrc / gWQ2v | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| V3s0jw / M2vvG | frame / Field · Value | {"name":"Field · Value"} | {"width":"fill_container","layout":"vertical","gap":4} |
| mc7xY / V3s0jw | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| U5pu4D / mc7xY | text / Label | {"name":"Label","content":"Value"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| PBaQi / V3s0jw | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| YWKQK / PBaQi | text / Value | {"name":"Value","content":"Unread"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| TlvKU / M2vvG | frame / Remove | {"name":"Remove"} | {"width":40,"height":40,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| VAq4A / TlvKU | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| z6KpVJ / v0Y0t | frame / Condition | {"name":"Condition"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"gap":8,"padding":12,"alignItems":"end"} |
| AtUXy / z6KpVJ | frame / Field · Field | {"name":"Field · Field"} | {"width":"fill_container","layout":"vertical","gap":4} |
| LINqg / AtUXy | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| H87DqB / LINqg | text / Label | {"name":"Label","content":"Field"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Yy4Bc / AtUXy | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| bm0F3 / Yy4Bc | text / Value | {"name":"Value","content":"From"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| dO732 / Yy4Bc | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| KuO55 / z6KpVJ | frame / Field · Operator | {"name":"Field · Operator"} | {"width":160,"layout":"vertical","gap":4} |
| TcSUn / KuO55 | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| uTCQF / TcSUn | text / Label | {"name":"Label","content":"Operator"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| TXmq0 / KuO55 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| UHFp7 / TXmq0 | text / Value | {"name":"Value","content":"contains"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| WkgVY / TXmq0 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| Y2krse / z6KpVJ | frame / Field · Value | {"name":"Field · Value"} | {"width":"fill_container","layout":"vertical","gap":4} |
| GTiXP / Y2krse | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| P8WQqw / GTiXP | text / Label | {"name":"Label","content":"Value"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ieetV / Y2krse | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Dq2PR / ieetV | text / Value | {"name":"Value","content":"@northwind.ph"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| LUzTl / z6KpVJ | frame / Remove | {"name":"Remove"} | {"width":40,"height":40,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| HExs7 / LUzTl | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| UQ2rt / v0Y0t | frame / Add | {"name":"Add"} | {"width":"fill_container","height":36,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"justifyContent":"center","alignItems":"center"} |
| RUe5S / UQ2rt | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"plus","library":"lucide","fill":"$op-text"} |
| K1C6E9 / UQ2rt | text / L | {"name":"L","content":"Add condition"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| xn5wd / KhNmh | frame / Step 3 · Timing | {"name":"Step 3 · Timing"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| TSZqv / xn5wd | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[16,20],"alignItems":"center"} |
| rjwt1 / TSZqv | frame / No | {"name":"No"} | {"width":28,"height":28,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| KVOlm / rjwt1 | text / N | {"name":"N","content":"3"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| mwOKY / TSZqv | frame / T | {"name":"T"} | {"layout":"vertical"} |
| mDa12 / mwOKY | text / T | {"name":"T","content":"Timing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| uZLJT / mwOKY | text / D | {"name":"D","content":"Run now, after a delay, on a date field, or relative to this column's SLA."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| QctdY / xn5wd | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":12,"padding":20} |
| tmGXi / QctdY | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16,"alignItems":"end"} |
| EonST / tmGXi | frame / Field · Run | {"name":"Field · Run"} | {"width":"fill_container","layout":"vertical","gap":4} |
| SvfOn / EonST | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ZUQUp / SvfOn | text / Label | {"name":"Label","content":"Run"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ppKDK / EonST | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| H87BMp / ppKDK | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"timer","library":"lucide","fill":"$op-text-2"} |
| WPcga / ppKDK | text / Value | {"name":"Value","content":"Before the SLA is due"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| CXqOz / ppKDK | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| ysAPo / tmGXi | frame / Field · Offset | {"name":"Field · Offset"} | {"width":180,"layout":"vertical","gap":4} |
| xfrBv / ysAPo | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| QGk5k / xfrBv | text / Label | {"name":"Label","content":"Offset"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| jj5T9 / ysAPo | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Bje6h / jj5T9 | text / Value | {"name":"Value","content":"2 hours"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Z1OpC / jj5T9 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| J1Irv / QctdY | frame / Hint | {"name":"Hint"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"gap":8,"padding":12,"alignItems":"center"} |
| ywn2Z / J1Irv | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"info","library":"lucide","fill":"$op-on-tint"} |
| eYmhE / J1Irv | text / T | {"name":"T","content":"Follow up's SLA is 12 hours, so this runs 10 hours after a card arrives."} | {"fill":"$op-on-tint","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
