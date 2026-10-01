# OfficePress Common Modules / Section · Form builder / Screens / Shot · Form builder · HRIS New hire information / Form builder · HRIS New hire information / Main / Body / Canvas

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| EOMo4 / ELHCS | frame / Canvas | {"name":"Canvas"} | {"width":"fill_container","height":"fill_container","layout":"vertical","gap":12,"padding":24,"alignItems":"center"} |
| kGDIh / EOMo4 | frame / Form Head | {"name":"Form Head"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-accent","strokeWidth":{"top":4,"right":1,"bottom":1,"left":1},"layout":"vertical","gap":4,"padding":20} |
| XldMa / kGDIh | text / T | {"name":"T","content":"New hire information"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| HlTNi / kGDIh | text / D | {"name":"D","content":"Collect what People Operations needs before a new hire starts."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Z3FefB / kGDIh | frame / Meta | {"name":"Meta"} | {"gap":8,"padding":[8,0,0,0]} |
| hvni8 / Z3FefB | frame / Status | {"name":"Status"} | {"height":22,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| ZciY7 / hvni8 | ellipse / D | {"name":"D"} | {"fill":"$op-dot","width":6,"height":6} |
| URQpq / hvni8 | text / L | {"name":"L","content":"Active"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XzfKy / Z3FefB | text / U | {"name":"U","content":"Used by Hiring › Offer stage"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| YT7zT / EOMo4 | frame / Question 1 | {"name":"Question 1"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-accent","strokeWidth":2,"effect":{"type":"shadow","shadowType":"outer","color":"#18244F14","offset":{"x":0,"y":4},"blur":12},"gap":12,"padding":16} |
| GfLtp / YT7zT | icon / Drag | {"name":"Drag"} | {"width":16,"height":16,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| DNcBS / YT7zT | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| HzCXZ / DNcBS | text / N | {"name":"N","content":"1"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| wBpMH / YT7zT | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":8} |
| L2WOwC / wBpMH | frame / T | {"name":"T"} | {"gap":4} |
| I4zXZ / L2WOwC | text / T | {"name":"T","content":"Preferred name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| dCkKT / L2WOwC | text / R | {"name":"R","content":"*"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| i63mSF / wBpMH | text / K | {"name":"K","content":"Short answer · Required"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| tzsr6 / wBpMH | frame / Answer | {"name":"Answer"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| U0tiLU / tzsr6 | text / P | {"name":"P","content":"Name you would like us to use"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| mlFoR / YT7zT | frame / Tools | {"name":"Tools"} | {"gap":4} |
| IlCjy / mlFoR | frame / chevron-up | {"name":"chevron-up"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| LPLtG / IlCjy | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| p3PQP / mlFoR | frame / chevron-down | {"name":"chevron-down"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| OFLv6 / p3PQP | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| ubQQS / mlFoR | frame / copy | {"name":"copy"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| R59fS / ubQQS | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-text-2"} |
| LwwWr / EOMo4 | frame / Question 2 | {"name":"Question 2"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":16} |
| Qpm37 / LwwWr | icon / Drag | {"name":"Drag"} | {"width":16,"height":16,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| S7SYHr / LwwWr | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-sunken","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| n4n9B / S7SYHr | text / N | {"name":"N","content":"2"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| oP7gF / LwwWr | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":8} |
| DPI2I / oP7gF | frame / T | {"name":"T"} | {"gap":4} |
| d4oSa5 / DPI2I | text / T | {"name":"T","content":"Pronouns"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| I2lVq / oP7gF | text / K | {"name":"K","content":"Dropdown"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| w5iFm / oP7gF | frame / Answer | {"name":"Answer"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| s3cy2 / w5iFm | text / P | {"name":"P","content":"Select an option"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m6KX6U / w5iFm | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| Ny6qZ / LwwWr | frame / Tools | {"name":"Tools"} | {"gap":4} |
| B4nPQ3 / Ny6qZ | frame / chevron-up | {"name":"chevron-up"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ZfXov / B4nPQ3 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| JMsJy / Ny6qZ | frame / chevron-down | {"name":"chevron-down"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| tHV5U / JMsJy | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| WwMOS / Ny6qZ | frame / copy | {"name":"copy"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| cMQh9 / WwMOS | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-text-2"} |
| kM4Vl / EOMo4 | frame / Question 3 | {"name":"Question 3"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":16} |
| m5hiB4 / kM4Vl | icon / Drag | {"name":"Drag"} | {"width":16,"height":16,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| q9hb9 / kM4Vl | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-sunken","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| DB5E3 / q9hb9 | text / N | {"name":"N","content":"3"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| J0UME / kM4Vl | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":8} |
| Ivd5X / J0UME | frame / T | {"name":"T"} | {"gap":4} |
| a6JY1 / Ivd5X | text / T | {"name":"T","content":"Preferred work arrangement"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| Zuybx / Ivd5X | text / R | {"name":"R","content":"*"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| w3oOO0 / J0UME | text / K | {"name":"K","content":"Multiple choice · Required"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| fKnbl / J0UME | frame / Opt | {"name":"Opt"} | {"gap":8,"alignItems":"center"} |
| voitz / fKnbl | ellipse / R | {"name":"R"} | {"fill":"$op-surface","width":16,"height":16,"stroke":"$op-border-strong","strokeWidth":1.5} |
| BrkLB / fKnbl | text / L | {"name":"L","content":"Office"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| JUM7n / J0UME | frame / Opt | {"name":"Opt"} | {"gap":8,"alignItems":"center"} |
| rOJnH / JUM7n | ellipse / R | {"name":"R"} | {"fill":"$op-surface","width":16,"height":16,"stroke":"$op-border-strong","strokeWidth":1.5} |
| Fs4mi / JUM7n | text / L | {"name":"L","content":"Hybrid"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| I7iHl / J0UME | frame / Opt | {"name":"Opt"} | {"gap":8,"alignItems":"center"} |
| BEN4b / I7iHl | ellipse / R | {"name":"R"} | {"fill":"$op-surface","width":16,"height":16,"stroke":"$op-border-strong","strokeWidth":1.5} |
| km3Lp / I7iHl | text / L | {"name":"L","content":"Remote"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| KY6Y8 / kM4Vl | frame / Tools | {"name":"Tools"} | {"gap":4} |
| sHufK / KY6Y8 | frame / chevron-up | {"name":"chevron-up"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| LUGEk / sHufK | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| MSoCd / KY6Y8 | frame / chevron-down | {"name":"chevron-down"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| St0Rt / MSoCd | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| y78RQ4 / KY6Y8 | frame / copy | {"name":"copy"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| EG5Hm / y78RQ4 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-text-2"} |
| l4ELn / EOMo4 | frame / Question 4 | {"name":"Question 4"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":16} |
| mi023 / l4ELn | icon / Drag | {"name":"Drag"} | {"width":16,"height":16,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| sHHOP / l4ELn | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-sunken","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| ViHEE / sHHOP | text / N | {"name":"N","content":"4"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| LbUCX / l4ELn | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":8} |
| nmcfr / LbUCX | frame / T | {"name":"T"} | {"gap":4} |
| yOScU / nmcfr | text / T | {"name":"T","content":"Available start date"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| nqzxU / nmcfr | text / R | {"name":"R","content":"*"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| N2SS8y / LbUCX | text / K | {"name":"K","content":"Date · Required"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| gbINM / LbUCX | frame / Answer | {"name":"Answer"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Qpwnv / gbINM | text / P | {"name":"P","content":"dd / mm / yyyy"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u7Flp / gbINM | icon / C | {"name":"C"} | {"width":14,"height":14,"icon":"calendar","library":"lucide","fill":"$op-text-2"} |
| MLSSZ / l4ELn | frame / Tools | {"name":"Tools"} | {"gap":4} |
| Oh5Df / MLSSZ | frame / chevron-up | {"name":"chevron-up"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ByMOc / Oh5Df | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| XPKGp / MLSSZ | frame / chevron-down | {"name":"chevron-down"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Q15ey1 / XPKGp | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| BkWuV / MLSSZ | frame / copy | {"name":"copy"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| hTXUh / BkWuV | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-text-2"} |
| sGvds / EOMo4 | frame / Question 5 | {"name":"Question 5"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":16} |
| ofLeA / sGvds | icon / Drag | {"name":"Drag"} | {"width":16,"height":16,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| s8JduT / sGvds | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-sunken","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| bWjJh / s8JduT | text / N | {"name":"N","content":"5"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Vm7LK / sGvds | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":8} |
| ViiLF / Vm7LK | frame / T | {"name":"T"} | {"gap":4} |
| GA0F1 / ViiLF | text / T | {"name":"T","content":"Government ID or passport"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| wO9uw / Vm7LK | text / K | {"name":"K","content":"File upload"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qc3d5 / Vm7LK | frame / Drop | {"name":"Drop"} | {"width":"fill_container","height":64,"fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"justifyContent":"center","alignItems":"center"} |
| MiRsT / qc3d5 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"upload","library":"lucide","fill":"$op-text-2"} |
| G7tC0D / qc3d5 | text / L | {"name":"L","content":"Drop a file or browse · PDF, JPG up to 10 MB"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| cdNob / sGvds | frame / Tools | {"name":"Tools"} | {"gap":4} |
| LOBy5 / cdNob | frame / chevron-up | {"name":"chevron-up"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| qUjGV / LOBy5 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| yWbLj / cdNob | frame / chevron-down | {"name":"chevron-down"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| y90qvN / yWbLj | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| oA0zK / cdNob | frame / copy | {"name":"copy"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| F3gPrZ / oA0zK | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-text-2"} |
| o4KUwd / EOMo4 | frame / Add Question | {"name":"Add Question"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":12,"stroke":"$op-accent","strokeWidth":1.5,"layout":"vertical","gap":8,"padding":12,"alignItems":"center"} |
| o8zMY / o4KUwd | frame / H | {"name":"H"} | {"gap":4,"alignItems":"center"} |
| MwwEC / o8zMY | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"plus","library":"lucide","fill":"$op-on-tint"} |
| vzNdi / o8zMY | text / L | {"name":"L","content":"Add question"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| BztHT / o4KUwd | frame / Types | {"name":"Types"} | {"layout":"vertical","gap":4,"alignItems":"center"} |
| AgKOw / BztHT | frame / Row 1 | {"name":"Row 1"} | {"gap":4} |
| zUKuO / AgKOw | frame / Short | {"name":"Short"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| Ws6CI / zUKuO | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"text-cursor-input","library":"lucide","fill":"$op-text"} |
| h9sAC / zUKuO | text / L | {"name":"L","content":"Short"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Kkqky / AgKOw | frame / Long | {"name":"Long"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| ahoZK / Kkqky | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"pilcrow","library":"lucide","fill":"$op-text"} |
| jcd8h / Kkqky | text / L | {"name":"L","content":"Long"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| TBocU / AgKOw | frame / Choice | {"name":"Choice"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| JEvgV / TBocU | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-dot","library":"lucide","fill":"$op-text"} |
| Rto1e / TBocU | text / L | {"name":"L","content":"Choice"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| sHPmI / AgKOw | frame / Checkboxes | {"name":"Checkboxes"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| R8vYjq / sHPmI | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"square-check","library":"lucide","fill":"$op-text"} |
| Y2XF0S / sHPmI | text / L | {"name":"L","content":"Checkboxes"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| gjcTg / BztHT | frame / Row 2 | {"name":"Row 2"} | {"gap":4} |
| OQxdc / gjcTg | frame / Dropdown | {"name":"Dropdown"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| e0reF / OQxdc | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-chevron-down","library":"lucide","fill":"$op-text"} |
| UPZaE / OQxdc | text / L | {"name":"L","content":"Dropdown"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| AWkKo / gjcTg | frame / Date | {"name":"Date"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| IGUdZ / AWkKo | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"calendar","library":"lucide","fill":"$op-text"} |
| Md34m / AWkKo | text / L | {"name":"L","content":"Date"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Fxh8x / gjcTg | frame / Number | {"name":"Number"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| PjHKm / Fxh8x | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"hash","library":"lucide","fill":"$op-text"} |
| mNOJG / Fxh8x | text / L | {"name":"L","content":"Number"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| FmHHn / gjcTg | frame / File | {"name":"File"} | {"height":28,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| Lwo4Y / FmHHn | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"upload","library":"lucide","fill":"$op-text"} |
| aoEtD / FmHHn | text / L | {"name":"L","content":"File"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
