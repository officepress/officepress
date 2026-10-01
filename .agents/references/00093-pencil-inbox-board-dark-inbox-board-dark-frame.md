# Inbox Board — Dark — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| tQmpX / root | frame / Inbox Board — Dark | {"name":"Inbox Board — Dark","context":"div","theme":{"mode":"dark","family":"communicate"}} | {"x":5120,"y":2493,"clip":true,"width":1440,"height":1000,"fill":"$op-canvas","layout":"none"} |
| X1GZ8N / tQmpX | frame / main | {"name":"main","context":"main"} | {"x":260,"y":64,"clip":true,"width":1180,"layout":"vertical"} |
| Z9fcp / X1GZ8N | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-surface","layout":"vertical"} |
| BhDk6 / Z9fcp | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":12,"padding":[8,16],"alignItems":"center"} |
| VNX1m / BhDk6 | frame / label | {"name":"label","context":"label"} | {"layout":"vertical"} |
| uIQmd / VNX1m | frame / Search cards | {"name":"Search cards","context":"input"} | {"clip":true,"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical","padding":[8,12,8,32],"justifyContent":"center"} |
| I2It0 / uIQmd | text /  | {"content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| KZw0s / VNX1m | frame / span | {"name":"span","context":"span"} | {"layoutPosition":"absolute","x":12,"y":12.75,"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| rY1gF / KZw0s | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| kDznP / rY1gF | path /  | {} | {"x":10.412499904632568,"y":10.412499904632568,"width":2.7125000953674316,"height":2.7125000953674316,"stroke":"$op-text-2","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| m37I5V / rY1gF | ellipse /  | {} | {"x":1.875,"y":1.875,"width":10,"height":10,"stroke":"$op-text-2","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| M3NMuS / BhDk6 | text / 12 cards | {"name":"12 cards","content":"12 cards","context":"span"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| B1y0oU / Z9fcp | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| kAYtQ / B1y0oU | frame / div | {"name":"div","context":"div"} | {"gap":16,"padding":16} |
| HCPaC / kAYtQ | frame / section | {"name":"section","context":"section"} | {"clip":true,"height":846.5,"fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical"} |
| QcCHU / HCPaC | frame / header | {"name":"header","context":"header"} | {"width":302,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":8,"padding":12} |
| cHSOs / QcCHU | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":44.5,"layout":"vertical","gap":4} |
| Jcn5H / cHSOs | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| AzFVu / Jcn5H | text / Inbox | {"name":"Inbox","content":"Inbox","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| PqWyK / Jcn5H | frame / 9 | {"name":"9","context":"span"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| TjMcD / PqWyK | text /  | {"content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| uYS2m / Jcn5H | frame / Fixed | {"name":"Fixed","context":"span"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","padding":[0,8],"justifyContent":"center","alignItems":"center"} |
| kHRW3 / uYS2m | text /  | {"content":"Fixed"} | {"fill":"$op-text","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| wmqLA / cHSOs | text / Mail in Inbox | {"name":"Mail in Inbox","content":"Mail in Inbox","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| R2JM7 / QcCHU | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| q5utt / R2JM7 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| RzyII / q5utt | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| T5cYEu / RzyII | path /  | {} | {"x":1.9021466374397278,"y":1.260891705751419,"width":11.195707023143768,"height":12.47759148478508,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| gMTq4 / RzyII | ellipse /  | {} | {"x":5.625,"y":5.625,"width":3.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| ip1Ti / HCPaC | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":302,"height":"fill_container","layout":"vertical","gap":8,"padding":8} |
| F70aC / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| L7K7z / F70aC | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| CE12g / L7K7z | text / Mail Delivery Subsystem | {"name":"Mail Delivery Subsystem","content":"Mail Delivery Subsystem","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| JauCh / L7K7z | text / 09:58 | {"name":"09:58","content":"09:58","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| KhOfQ / F70aC | frame / Address not found | {"name":"Address not found","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ln5zd / KhOfQ | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| EtzaS / KhOfQ | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| N8fjs / EtzaS | text /  | {"content":"Address not found"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| yFDqT / F70aC | frame / Your message was not delivered to tere.l | {"name":"Your message was not delivered to tere.l","context":"p"} | {"clip":true,"width":"fill_container","height":36,"layout":"vertical"} |
| Hhhf7 / yFDqT | text /  | {"content":"Your message was not delivered to tere.lim@paperwrks.co because the domain could not be found."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":260,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| A62wM / F70aC | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| XYWhy / A62wM | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| flNJX / XYWhy | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| y6u0s / flNJX | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| XhlBe / XYWhy | text / 1/3 | {"name":"1/3","content":"1/3"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ldryV / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| icnQo / ldryV | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| fOxsH / icnQo | text / Dan Ocampo | {"name":"Dan Ocampo","content":"Dan Ocampo","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| B3DOj / icnQo | text / 11:48 | {"name":"11:48","content":"11:48","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ctMrO / ldryV | frame / Q3 paper stock reconciliation | {"name":"Q3 paper stock reconciliation","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| lYMAi / ctMrO | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| G3PZRg / ctMrO | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| BZQqX / G3PZRg | text /  | {"content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| LJES4 / ldryV | text / The Q3 count is off by fourteen reams ag | {"name":"The Q3 count is off by fourteen reams ag","content":"The Q3 count is off by fourteen reams against the delivery notes.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Ov1Bg / ldryV | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| n4WZHo / Ov1Bg | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| qYncn / n4WZHo | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| l66ry / qYncn | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| o5NaF / n4WZHo | text / 1/3 | {"name":"1/3","content":"1/3"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| FAdvi / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| hYjl2 / FAdvi | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| S68A7 / hYjl2 | text / Rina Delgado | {"name":"Rina Delgado","content":"Rina Delgado","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| MEvGa / hYjl2 | text / 08:05 | {"name":"08:05","content":"08:05","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| qvgcP / FAdvi | frame / Quote for Q4 paper stock | {"name":"Quote for Q4 paper stock","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| a56y4h / qvgcP | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| m0dUg / qvgcP | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| K0pVyn / m0dUg | text /  | {"content":"Quote for Q4 paper stock"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| p3IJBm / FAdvi | text / We supply coated and uncoated stock acro | {"name":"We supply coated and uncoated stock acro","content":"We supply coated and uncoated stock across Metro Manila and can match your current rate.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| n5ipwY / FAdvi | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| CvgXe / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| RrZsd / CvgXe | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| QnXdW / RrZsd | text / Rina Delgado, Procurement | {"name":"Rina Delgado, Procurement","content":"Rina Delgado, Procurement","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| QM7rY / RrZsd | text / Wed | {"name":"Wed","content":"Wed","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| c5vYW / CvgXe | frame / Supplier onboarding documents | {"name":"Supplier onboarding documents","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| m3Lxdp / c5vYW | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| kBcZW / c5vYW | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| D1WUJQ / kBcZW | text /  | {"content":"Supplier onboarding documents"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| N9krp / CvgXe | text / Attached are the tax certificate and upd | {"name":"Attached are the tax certificate and upd","content":"Attached are the tax certificate and updated payment details for your records.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| PXeqp / CvgXe | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| e6WoP / PXeqp | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| lwerG / e6WoP | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| Jkj8p / lwerG | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| WPPmt / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Ypq1t / WPPmt | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| exg5h / Ypq1t | text / Jules Mercado | {"name":"Jules Mercado","content":"Jules Mercado","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| zGUvs / Ypq1t | text / Tue | {"name":"Tue","content":"Tue","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| nSYuz / WPPmt | text / October production calendar | {"name":"October production calendar","content":"October production calendar","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| KLRss / WPPmt | text / I highlighted the jobs that still need p | {"name":"I highlighted the jobs that still need p","content":"I highlighted the jobs that still need paper and finishing confirmations.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| UNWcn / WPPmt | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| j311IL / UNWcn | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| h6VtY / j311IL | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| RLSI7 / h6VtY | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| pHcgG / UNWcn | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Zz5K9 / pHcgG | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| rxfQz / Zz5K9 | path /  | {} | {"x":1.1656075914700827,"y":1.166728695233663,"width":11.66773686806361,"height":11.12537395954132,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| c2lYeD / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| eDhGk / c2lYeD | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| IXFMy / eDhGk | text / People Operations | {"name":"People Operations","content":"People Operations","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| PrMOf / eDhGk | text / Tue | {"name":"Tue","content":"Tue","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| tdpj9 / c2lYeD | text / Senior press operator, open role | {"name":"Senior press operator, open role","content":"Senior press operator, open role","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| F2I734 / c2lYeD | text / We work with a printing group in Quezon  | {"name":"We work with a printing group in Quezon ","content":"We work with a printing group in Quezon City and thought of your team first.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| YxovL / c2lYeD | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| BaMz2 / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| UqyBS / BaMz2 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| D5tQG / UqyBS | text / Priya Nair | {"name":"Priya Nair","content":"Priya Nair","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| DT4yI / UqyBS | text / Mon | {"name":"Mon","content":"Mon","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| btTrK / BaMz2 | text / Corridor markings, before and after | {"name":"Corridor markings, before and after","content":"Corridor markings, before and after","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Y3cmj9 / BaMz2 | text / Took photos this morning so we have a re | {"name":"Took photos this morning so we have a re","content":"Took photos this morning so we have a record of where the new tape went.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Q1wF5 / BaMz2 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| cRn4e / Q1wF5 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| A7cTFE / cRn4e | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| ty5Zm / A7cTFE | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| avjdD / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| L0W9d / avjdD | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| RCvki / L0W9d | text / Stackpress Cloud | {"name":"Stackpress Cloud","content":"Stackpress Cloud","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| BzZQE / L0W9d | text / Sep 9 | {"name":"Sep 9","content":"Sep 9","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| VjXPl / avjdD | text / Your September usage summary | {"name":"Your September usage summary","content":"Your September usage summary","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ah7fq / avjdD | text / Storage, transfer, and build minutes for | {"name":"Storage, transfer, and build minutes for","content":"Storage, transfer, and build minutes for the period ending 31 August.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| pbORc / avjdD | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| cgI1h / ip1Ti | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| xfS84 / cgI1h | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| CCH7D / xfS84 | text / Marco Villar | {"name":"Marco Villar","content":"Marco Villar","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| JnS5J / xfS84 | text / Sep 9 | {"name":"Sep 9","content":"Sep 9","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ll5iN / cgI1h | text / Forklift battery replacement quote | {"name":"Forklift battery replacement quote","content":"Forklift battery replacement quote","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| gaVp1 / cgI1h | text / Two suppliers came back, the cheaper one | {"name":"Two suppliers came back, the cheaper one","content":"Two suppliers came back, the cheaper one cannot deliver before December.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| A41bc / cgI1h | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| DbtNb / A41bc | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| AuiTo / DbtNb | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| SMhp1 / AuiTo | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
