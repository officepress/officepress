# OfficePress App UI Guidelines / Section · Components — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| ilcWW / zTKmr | frame / Section · Components | {"name":"Section · Components"} | {"width":"fill_container","layout":"vertical","gap":32} |
| P4lbn7 / ilcWW | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| FFGtU / P4lbn7 | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| lpMkl / FFGtU | text / No | {"name":"No","content":"07"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| g6wWHv / FFGtU | text / Title | {"name":"Title","content":"Components"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| CIblr / P4lbn7 | text / Desc | {"name":"Desc","content":"Drawn from the Inbox board. Every colour is a token, so each component re-themes per family and mode."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| H3gl5 / ilcWW | frame / Component Grid | {"name":"Component Grid","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","gap":24} |
| OXxGg / H3gl5 | frame / Col | {"name":"Col"} | {"width":300,"layout":"vertical","gap":24} |
| m9ZKic / OXxGg | frame / Nav item states | {"name":"Nav item states"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| f9JSg8 / m9ZKic | text / Label | {"name":"Label","content":"NAV ITEM STATES"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| YJIln / m9ZKic | frame / Nav Sample | {"name":"Nav Sample"} | {"width":"fill_container","fill":"$op-nav","cornerRadius":8,"layout":"vertical","gap":4,"padding":12} |
| h6puS5 / YJIln | frame / Nav Active | {"name":"Nav Active"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| MlP6B / h6puS5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| z8t1A / h6puS5 | text / Label | {"name":"Label","content":"Active"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| z9CzX / YJIln | frame / Nav Unread | {"name":"Nav Unread"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| LD7Da / z9CzX | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| w9T0M / z9CzX | text / Label | {"name":"Label","content":"Unread"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| A4d6M / z9CzX | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":8,"height":8} |
| U0rEK / YJIln | frame / Nav Count | {"name":"Nav Count"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| ZzbEu / U0rEK | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| rsnoY / U0rEK | text / Label | {"name":"Label","content":"Count"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| sUPlE / U0rEK | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| yG3j3 / YJIln | frame / Nav Default | {"name":"Nav Default"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| RddSp / yG3j3 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| mwU68 / yG3j3 | text / Label | {"name":"Label","content":"Default"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| sKQll / OXxGg | frame / Header actions | {"name":"Header actions"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| yBOcn / sKQll | text / Label | {"name":"Label","content":"HEADER ACTIONS"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| SlI9d / sKQll | frame / Row light | {"name":"Row light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":8,"layout":"vertical","gap":8,"padding":12} |
| TkdaA / SlI9d | frame / Actions | {"name":"Actions"} | {"gap":8,"alignItems":"center"} |
| DM62Q / TkdaA | frame / Notifications | {"name":"Notifications"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| fSPyC / DM62Q | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| iAAFH / DM62Q | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| nzJKP / TkdaA | frame / bot | {"name":"bot"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Scb2Z / nzJKP | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| v0YRLB / TkdaA | frame / $op-mode-icon | {"name":"$op-mode-icon"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| G2hVp / v0YRLB | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| q3IVWy / TkdaA | frame / user | {"name":"user"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| ohH3N / q3IVWy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| iTe4O / SlI9d | text / Caption | {"name":"Caption","content":"Light mode"} | {"fill":"$op-text-2","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| JVnNc / sKQll | frame / Row dark | {"name":"Row dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":8,"layout":"vertical","gap":8,"padding":12} |
| OuyDb / JVnNc | frame / Actions | {"name":"Actions"} | {"gap":8,"alignItems":"center"} |
| HjjJs / OuyDb | frame / Notifications | {"name":"Notifications"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| v1LaIg / HjjJs | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| Dw1yg / HjjJs | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| jT3jU / OuyDb | frame / bot | {"name":"bot"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| w4iLtB / jT3jU | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| A8uqT / OuyDb | frame / $op-mode-icon | {"name":"$op-mode-icon"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| P9uMK4 / A8uqT | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| TfWR7 / OuyDb | frame / user | {"name":"user"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| J21dYm / TfWR7 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| zuDFW / JVnNc | text / Caption | {"name":"Caption","content":"Dark mode · after one click"} | {"fill":"$op-text-2","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NfaaK / sKQll | text / Spec | {"name":"Spec","content":"36 px circles, 1 px border-strong, 16 px icon. Order: notifications · agent · theme · user. The theme button shows the current mode (sun / moon) and switches on click."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":12,"fontWeight":"normal"} |
| J2BbKl / H3gl5 | frame / Col | {"name":"Col"} | {"width":"fill_container","layout":"vertical","gap":24} |
| M2KsG / J2BbKl | frame / Buttons | {"name":"Buttons"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| vyQkS / M2KsG | text / Label | {"name":"Label","content":"BUTTONS"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| RHhje / M2KsG | frame / Row | {"name":"Row"} | {"gap":12,"alignItems":"center"} |
| iVdRp / RHhje | frame / Primary | {"name":"Primary"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| u6huP3 / iVdRp | text / Label | {"name":"Label","content":"New card"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| OOo5Q / RHhje | frame / Secondary | {"name":"Secondary"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| CauxL / OOo5Q | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| QysDl / OOo5Q | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| mPnkV / OOo5Q | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| d6YdN / RHhje | frame / Icon pencil | {"name":"Icon pencil"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| UH5Og / d6YdN | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"pencil","library":"lucide","fill":"$op-text"} |
| Px6Ox / RHhje | frame / Icon bell | {"name":"Icon bell"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| DYm0v / Px6Ox | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| D2Adi / J2BbKl | frame / Badges &amp; status | {"name":"Badges &amp; status"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| hmceN / D2Adi | text / Label | {"name":"Label","content":"BADGES &amp; STATUS"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| B8Uez / D2Adi | frame / Row | {"name":"Row"} | {"gap":16,"alignItems":"center"} |
| rusis / B8Uez | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| rERVl / rusis | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| pCNaZ / B8Uez | frame / Pill | {"name":"Pill"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,8],"justifyContent":"center","alignItems":"center"} |
| VXJ13 / pCNaZ | text / N | {"name":"N","content":"Fixed"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Jn6Zl / B8Uez | frame / Unread | {"name":"Unread"} | {"gap":8,"alignItems":"center"} |
| Y8BUy / Jn6Zl | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| BXpAP / Jn6Zl | text / N | {"name":"N","content":"Unread dot, surface ring"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Ys7oo / J2BbKl | frame / SLA progress | {"name":"SLA progress"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| ocgow / Ys7oo | text / Label | {"name":"Label","content":"SLA PROGRESS"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| WNHX7 / Ys7oo | frame / 10h left | {"name":"10h left"} | {"width":"fill_container","layout":"vertical","gap":4} |
| m41tbE / WNHX7 | text / Label | {"name":"Label","content":"10h left"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| BmbMB / WNHX7 | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| PlHRv / BmbMB | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":180,"height":6} |
| FAE1V / Ys7oo | frame / 4h left · urgent | {"name":"4h left · urgent"} | {"width":"fill_container","layout":"vertical","gap":4} |
| C26c8 / FAE1V | text / Label | {"name":"Label","content":"4h left · urgent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| WRSoE / FAE1V | frame / Track | {"name":"Track"} | {"width":"fill_container","height":6,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| RnPIR / WRSoE | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent-strong","width":270,"height":6} |
| F1XSB / H3gl5 | frame / Col | {"name":"Col"} | {"width":"fill_container","layout":"vertical","gap":24} |
| B4BtGO / F1XSB | frame / Search field | {"name":"Search field"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| mygMT / B4BtGO | text / Label | {"name":"Label","content":"SEARCH FIELD"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| aZ1YD / B4BtGO | frame / Field | {"name":"Field"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| HNYBw / aZ1YD | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"search","library":"lucide","fill":"$op-text-2"} |
| D8u2Hp / aZ1YD | text / Placeholder | {"name":"Placeholder","content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| OJ41e / F1XSB | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":14,"padding":24} |
| MVlmu / OJ41e | text / Label | {"name":"Label","content":"CARD"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| cmV1G / OJ41e | frame / Canvas | {"name":"Canvas"} | {"width":"fill_container","fill":"$op-column","cornerRadius":16,"padding":8} |
| Sui9c / cmV1G | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| YrCNz / Sui9c | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| r0IFv / YrCNz | text / Sender | {"name":"Sender","content":"Northwind Billing"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| o3vkvg / YrCNz | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| orFiG / Sui9c | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| mjjES / orFiG | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":7,"height":7} |
| D7Aqi7 / orFiG | text / Title | {"name":"Title","content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| bkIvR / Sui9c | text / Preview | {"name":"Preview","content":"Needs your sign-off before Friday."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
