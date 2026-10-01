# OfficePress Common Modules / Section · Automations / Screens / Shot · Automations list · HRIS Hiring / Automations list · HRIS Hiring / Main / Body

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| uU1IZ / B8lJU | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical","gap":20,"padding":[24,32]} |
| h55Yn / uU1IZ | frame / Page Head | {"name":"Page Head"} | {"width":"fill_container","gap":12,"alignItems":"end"} |
| iAGAu / h55Yn | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical","gap":4} |
| bX5xp / iAGAu | text / Crumb | {"name":"Crumb","content":"Workflows  ›  Hiring  ›  Automations"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| v92Ar / iAGAu | text / T | {"name":"T","content":"Hiring automations"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| J8qPF / iAGAu | text / D | {"name":"D","content":"Run consistent actions when a card event and optional conditions match."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| c21Twb / h55Yn | frame / Button · View runs | {"name":"Button · View runs"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| uZoMQ / c21Twb | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"history","library":"lucide","fill":"$op-text"} |
| X2UlU / c21Twb | text / Label | {"name":"Label","content":"View runs"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| j8fo1x / h55Yn | frame / Button · New automation | {"name":"Button · New automation"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| KJchO / j8fo1x | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"plus","library":"lucide","fill":"$op-on-accent"} |
| vRyrC / j8fo1x | text / Label | {"name":"Label","content":"New automation"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| H1aGv / uU1IZ | frame / Stats | {"name":"Stats"} | {"width":"fill_container","gap":16} |
| RCoDC / H1aGv | frame / Stat · Active rules | {"name":"Stat · Active rules"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":20,"alignItems":"center"} |
| w8Lrv / RCoDC | frame / Icon | {"name":"Icon"} | {"width":40,"height":40,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| wJWZN / w8Lrv | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"zap","library":"lucide","fill":"$op-accent-text"} |
| L1NJ8W / RCoDC | frame / T | {"name":"T"} | {"layout":"vertical"} |
| XcrnX / L1NJ8W | text / L | {"name":"L","content":"Active rules"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| fs7l1 / L1NJ8W | text / V | {"name":"V","content":"2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| R6JMdH / L1NJ8W | text / D | {"name":"D","content":"of 4 rules"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lvIie / H1aGv | frame / Stat · Runs today | {"name":"Stat · Runs today"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":20,"alignItems":"center"} |
| l751ks / lvIie | frame / Icon | {"name":"Icon"} | {"width":40,"height":40,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| sDqLX / l751ks | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"activity","library":"lucide","fill":"$op-accent-text"} |
| S8NWat / lvIie | frame / T | {"name":"T"} | {"layout":"vertical"} |
| Gi8yI / S8NWat | text / L | {"name":"L","content":"Runs today"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| bfwu8 / S8NWat | text / V | {"name":"V","content":"18"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| UmOZB / S8NWat | text / D | {"name":"D","content":"17 successful · 1 skipped"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| A58dL / H1aGv | frame / Stat · Needs attention | {"name":"Stat · Needs attention"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-danger","strokeWidth":1,"gap":12,"padding":20,"alignItems":"center"} |
| SbCAG / A58dL | frame / Icon | {"name":"Icon"} | {"width":40,"height":40,"fill":"$op-danger-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| F3PE8 / SbCAG | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"triangle-alert","library":"lucide","fill":"$op-danger"} |
| RuwTl / A58dL | frame / T | {"name":"T"} | {"layout":"vertical"} |
| MuX4o / RuwTl | text / L | {"name":"L","content":"Needs attention"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| WTV17 / RuwTl | text / V | {"name":"V","content":"1"} | {"fill":"$op-danger","lineHeight":1.2,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| x9cvF / RuwTl | text / D | {"name":"D","content":"Failed in the last 7 days"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| C5IwQw / uU1IZ | frame / Rules | {"name":"Rules"} | {"clip":true,"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| srup9 / C5IwQw | frame / Filters | {"name":"Filters"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[12,16],"alignItems":"center"} |
| BaiRw / srup9 | frame / Search | {"name":"Search"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Lptjg / BaiRw | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| ys65a / BaiRw | text / P | {"name":"P","content":"Rule name, trigger or action"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Ij7l8 / srup9 | frame / Status | {"name":"Status"} | {"height":36,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| n9Zgn2 / Ij7l8 | text / L | {"name":"L","content":"All statuses"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| aqkuU / Ij7l8 | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| Y2uRH / C5IwQw | frame / Header Row | {"name":"Header Row"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[12,16]} |
| eAO42 / Y2uRH | text / H | {"name":"H","content":"RULE"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| B8n3q / Y2uRH | text / H | {"name":"H","content":"TRIGGER"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":200,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| O9BFEj / Y2uRH | text / H | {"name":"H","content":"ACTIONS"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| CjfJO / Y2uRH | text / H | {"name":"H","content":"LAST RUN"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":160,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| rVhpe / Y2uRH | text / H | {"name":"H","content":"STATUS"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":130,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| bD7lS / Y2uRH | text / H | {"name":"H"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":70,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| QLFF6 / C5IwQw | frame / Rule · Prepare interview stage | {"name":"Rule · Prepare interview stage"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[12,16],"alignItems":"center"} |
| obdrQ / QLFF6 | frame / Rule | {"name":"Rule"} | {"width":"fill_container","layout":"vertical","gap":4} |
| wOElR / obdrQ | text / N | {"name":"N","content":"Prepare interview stage"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| d7XgeG / obdrQ | text / S | {"name":"S","content":"When a card enters Interview, if Personnel type is Human, assign it to Janelle Cruz, send the Interview evaluation form, then create the task “Prepare interview notes”."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| G5OojR / QLFF6 | frame / Trigger | {"name":"Trigger"} | {"width":200,"layout":"vertical"} |
| eOuKv / G5OojR | text / T | {"name":"T","content":"Stage entered"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| fhh2z / G5OojR | text / S | {"name":"S","content":"Interview"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| jLxsp / QLFF6 | text / Actions | {"name":"Actions","content":"3"} | {"fill":"$op-text","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| antU4 / QLFF6 | frame / Last Run | {"name":"Last Run"} | {"width":160,"layout":"vertical"} |
| fpGdk / antU4 | text / T | {"name":"T","content":"Today, 10:42"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| QDJm6 / antU4 | frame / Outcome | {"name":"Outcome"} | {"gap":4,"alignItems":"center"} |
| dLTe5 / QDJm6 | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6} |
| l6XK2W / QDJm6 | text / L | {"name":"L","content":"Successful"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| d7C4a / QLFF6 | frame / Status | {"name":"Status"} | {"width":130} |
| FKaPl / d7C4a | frame / Switch | {"name":"Switch"} | {"gap":8,"alignItems":"center"} |
| cWEpG / FKaPl | frame / Track | {"name":"Track"} | {"width":36,"height":20,"fill":"$op-accent-strong","cornerRadius":999,"layout":"none"} |
| PnbIE / cWEpG | ellipse / Knob | {"name":"Knob"} | {"x":18,"y":2,"fill":"#FFFFFF","width":16,"height":16} |
| rBv7v / FKaPl | text / L | {"name":"L","content":"Active"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| SBAbW / QLFF6 | frame / Edit | {"name":"Edit"} | {"width":70,"justifyContent":"end"} |
| GmA7e / SBAbW | frame / Button · Edit | {"name":"Button · Edit"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| vuCEx / GmA7e | text / Label | {"name":"Label","content":"Edit"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| VPfbg / C5IwQw | frame / Rule · Interview evaluation complete | {"name":"Rule · Interview evaluation complete"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[12,16],"alignItems":"center"} |
| q7XLB / VPfbg | frame / Rule | {"name":"Rule"} | {"width":"fill_container","layout":"vertical","gap":4} |
| a0Bdq6 / q7XLB | text / N | {"name":"N","content":"Interview evaluation complete"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| B5DqoT / q7XLB | text / S | {"name":"S","content":"When Interview evaluation is completed, if Role is not empty, notify Hiring Decision Makers, then move the card to Offer."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| yWlO0 / VPfbg | frame / Trigger | {"name":"Trigger"} | {"width":200,"layout":"vertical"} |
| TiAZi / yWlO0 | text / T | {"name":"T","content":"Form completed"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| kQhGF / yWlO0 | text / S | {"name":"S","content":"Interview evaluation"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| NHV4K / VPfbg | text / Actions | {"name":"Actions","content":"2"} | {"fill":"$op-text","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| wKmZB / VPfbg | frame / Last Run | {"name":"Last Run"} | {"width":160,"layout":"vertical"} |
| yotPq / wKmZB | text / T | {"name":"T","content":"Today, 09:18"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| X5JXN7 / wKmZB | frame / Outcome | {"name":"Outcome"} | {"gap":4,"alignItems":"center"} |
| sPkcq / X5JXN7 | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6} |
| ljJcR / X5JXN7 | text / L | {"name":"L","content":"Successful"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| DMC4G / VPfbg | frame / Status | {"name":"Status"} | {"width":130} |
| NIRZq / DMC4G | frame / Switch | {"name":"Switch"} | {"gap":8,"alignItems":"center"} |
| xgEri / NIRZq | frame / Track | {"name":"Track"} | {"width":36,"height":20,"fill":"$op-accent-strong","cornerRadius":999,"layout":"none"} |
| uNQ3c / xgEri | ellipse / Knob | {"name":"Knob"} | {"x":18,"y":2,"fill":"#FFFFFF","width":16,"height":16} |
| D1XXd2 / NIRZq | text / L | {"name":"L","content":"Active"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| APb2S / VPfbg | frame / Edit | {"name":"Edit"} | {"width":70,"justifyContent":"end"} |
| YSxcB / APb2S | frame / Button · Edit | {"name":"Button · Edit"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| gxCj7 / YSxcB | text / Label | {"name":"Label","content":"Edit"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| i7w8bL / C5IwQw | frame / Rule · Escalate overdue stage | {"name":"Rule · Escalate overdue stage"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[12,16],"alignItems":"center"} |
| W1jvbz / i7w8bL | frame / Rule | {"name":"Rule"} | {"width":"fill_container","layout":"vertical","gap":4} |
| dzQdG / W1jvbz | text / N | {"name":"N","content":"Escalate overdue stage"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| U9Zow / W1jvbz | text / S | {"name":"S","content":"When a stage time target is missed, if the workflow is Active, add the Overdue tag, then notify People Operations."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| bE9pJ / i7w8bL | frame / Trigger | {"name":"Trigger"} | {"width":200,"layout":"vertical"} |
| wq8B9 / bE9pJ | text / T | {"name":"T","content":"Target missed"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| uDvqJ / bE9pJ | text / S | {"name":"S","content":"Any stage"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| YCG3C / i7w8bL | text / Actions | {"name":"Actions","content":"2"} | {"fill":"$op-text","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| TVdPi / i7w8bL | frame / Last Run | {"name":"Last Run"} | {"width":160,"layout":"vertical"} |
| btRPr / TVdPi | text / T | {"name":"T","content":"Aug 13, 16:05"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| wSTCS / TVdPi | frame / Outcome | {"name":"Outcome"} | {"gap":4,"alignItems":"center"} |
| xskbb / wSTCS | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-danger","width":6,"height":6} |
| n7QUO / wSTCS | text / L | {"name":"L","content":"Failed"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| iFyoJ / i7w8bL | frame / Status | {"name":"Status"} | {"width":130} |
| OFTxg / iFyoJ | frame / Switch | {"name":"Switch"} | {"gap":8,"alignItems":"center"} |
| YWL9B / OFTxg | frame / Track | {"name":"Track"} | {"width":36,"height":20,"fill":"$op-border-strong","cornerRadius":999,"layout":"none"} |
| Z3dpQ / YWL9B | ellipse / Knob | {"name":"Knob"} | {"x":2,"y":2,"fill":"#FFFFFF","width":16,"height":16} |
| GGqxp / OFTxg | text / L | {"name":"L","content":"Paused"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Ag5g2 / i7w8bL | frame / Edit | {"name":"Edit"} | {"width":70,"justifyContent":"end"} |
| T2VUqu / Ag5g2 | frame / Button · Edit | {"name":"Button · Edit"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| Snk9C / T2VUqu | text / Label | {"name":"Label","content":"Edit"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| fv8Rj / C5IwQw | frame / Rule · Start onboarding | {"name":"Rule · Start onboarding"} | {"width":"fill_container","gap":16,"padding":[12,16],"alignItems":"center"} |
| VvyhT / fv8Rj | frame / Rule | {"name":"Rule"} | {"width":"fill_container","layout":"vertical","gap":4} |
| lGpg0 / VvyhT | text / N | {"name":"N","content":"Start onboarding"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| bTp5T / VvyhT | text / S | {"name":"S","content":"When a card enters Hired, after 1 day start Onboarding for the same person."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| t2vSh / fv8Rj | frame / Trigger | {"name":"Trigger"} | {"width":200,"layout":"vertical"} |
| mIIc5 / t2vSh | text / T | {"name":"T","content":"Stage entered"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| hvd7q / t2vSh | text / S | {"name":"S","content":"Hired"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RgC4M / fv8Rj | text / Actions | {"name":"Actions","content":"1"} | {"fill":"$op-text","textGrowth":"fixed-width","width":80,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| XjGbm / fv8Rj | frame / Last Run | {"name":"Last Run"} | {"width":160,"layout":"vertical"} |
| z4ZiRc / XjGbm | text / T | {"name":"T","content":"Not run yet"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| BAJIG / fv8Rj | frame / Status | {"name":"Status"} | {"width":130} |
| wweNZ / BAJIG | frame / Switch | {"name":"Switch"} | {"gap":8,"alignItems":"center"} |
| tlmgC / wweNZ | frame / Track | {"name":"Track"} | {"width":36,"height":20,"fill":"$op-border-strong","cornerRadius":999,"layout":"none"} |
| utXHB / tlmgC | ellipse / Knob | {"name":"Knob"} | {"x":2,"y":2,"fill":"#FFFFFF","width":16,"height":16} |
| Xv5yA / wweNZ | text / L | {"name":"L","content":"Draft"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| H3yhM3 / fv8Rj | frame / Edit | {"name":"Edit"} | {"width":70,"justifyContent":"end"} |
| hHY0Y / H3yhM3 | frame / Button · Edit | {"name":"Button · Edit"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| guSRS / hHY0Y | text / Label | {"name":"Label","content":"Edit"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| g0zgW / lAhbj | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| d9gEe / g0zgW | text / Label | {"name":"Label","content":"Automations list · HRIS Hiring"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| d1Fy9 / g0zgW | text / Note | {"name":"Note","content":"Health first (active, runs, failures), then rules. Each rule reads as a sentence, shows its trigger, action count, last outcome and an inline on/off switch."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
