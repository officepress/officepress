# Inbox Board — Light — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| uNSQ6 / root | frame / Inbox Board — Light | {"name":"Inbox Board — Light","context":"div","theme":{"mode":"light","family":"communicate"}} | {"x":3560,"y":2493,"clip":true,"width":1440,"height":1000,"fill":"$op-canvas","layout":"none"} |
| fmDp3 / uNSQ6 | frame / main | {"name":"main","context":"main"} | {"x":260,"y":64,"clip":true,"width":1180,"layout":"vertical"} |
| OahzF / fmDp3 | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-surface","layout":"vertical"} |
| jVW6v / OahzF | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":12,"padding":[8,16],"alignItems":"center"} |
| beeFN / jVW6v | frame / label | {"name":"label","context":"label"} | {"layout":"vertical"} |
| m6Sdan / beeFN | frame / Search cards | {"name":"Search cards","context":"input"} | {"clip":true,"width":320,"height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical","padding":[8,12,8,32],"justifyContent":"center"} |
| i6gikg / m6Sdan | text /  | {"content":"Search cards"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| v4nGLa / beeFN | frame / span | {"name":"span","context":"span"} | {"layoutPosition":"absolute","x":12,"y":12.75,"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| P0Avj / v4nGLa | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| AcXY7 / P0Avj | path /  | {} | {"x":10.412499904632568,"y":10.412499904632568,"width":2.7125000953674316,"height":2.7125000953674316,"stroke":"$op-text-2","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| PAg9Y / P0Avj | ellipse /  | {} | {"x":1.875,"y":1.875,"width":10,"height":10,"stroke":"$op-text-2","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| cohk7 / jVW6v | text / 12 cards | {"name":"12 cards","content":"12 cards","context":"span"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| vpzpY / OahzF | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-canvas","layout":"vertical"} |
| p7TJg / vpzpY | frame / div | {"name":"div","context":"div"} | {"gap":16,"padding":16} |
| Ob1VL / p7TJg | frame / section | {"name":"section","context":"section"} | {"clip":true,"height":846.5,"fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical"} |
| rHUTS / Ob1VL | frame / header | {"name":"header","context":"header"} | {"width":302,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":8,"padding":12} |
| J5CwLQ / rHUTS | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":44.5,"layout":"vertical","gap":4} |
| q8Gl3Y / J5CwLQ | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| lD7yv / q8Gl3Y | text / Inbox | {"name":"Inbox","content":"Inbox","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eiHh9 / q8Gl3Y | frame / 9 | {"name":"9","context":"span"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| Uuxel / eiHh9 | text /  | {"content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| vf5eu / q8Gl3Y | frame / Fixed | {"name":"Fixed","context":"span"} | {"height":20,"cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","padding":[0,8],"justifyContent":"center","alignItems":"center"} |
| YVdXS / vf5eu | text /  | {"content":"Fixed"} | {"fill":"$op-text","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ajElU / J5CwLQ | text / Mail in Inbox | {"name":"Mail in Inbox","content":"Mail in Inbox","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| e0pO2 / rHUTS | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| PzZ3g / e0pO2 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| G64JG / PzZ3g | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| BxXfN / G64JG | path /  | {} | {"x":1.9021466374397278,"y":1.260891705751419,"width":11.195707023143768,"height":12.47759148478508,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| F9MAW4 / G64JG | ellipse /  | {} | {"x":5.625,"y":5.625,"width":3.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| CSK0G / Ob1VL | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":302,"height":"fill_container","layout":"vertical","gap":8,"padding":8} |
| f8QKl1 / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| bOkrm / f8QKl1 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| uMEyM / bOkrm | text / Mail Delivery Subsystem | {"name":"Mail Delivery Subsystem","content":"Mail Delivery Subsystem","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| q5ReA5 / bOkrm | text / 09:58 | {"name":"09:58","content":"09:58","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| oL8Tz / f8QKl1 | frame / Address not found | {"name":"Address not found","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| axJes / oL8Tz | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| iKdzN / oL8Tz | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| ZtPGr / iKdzN | text /  | {"content":"Address not found"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| wrSyj / f8QKl1 | frame / Your message was not delivered to tere.l | {"name":"Your message was not delivered to tere.l","context":"p"} | {"clip":true,"width":"fill_container","height":36,"layout":"vertical"} |
| H5Ivh / wrSyj | text /  | {"content":"Your message was not delivered to tere.lim@paperwrks.co because the domain could not be found."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":260,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Yz2rO / f8QKl1 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| tGX0o / Yz2rO | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| B6zcMM / tGX0o | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| xLZ1W / B6zcMM | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| PzsnN / tGX0o | text / 1/3 | {"name":"1/3","content":"1/3"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| MMAcL / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| ljrMJ / MMAcL | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| T7c5If / ljrMJ | text / Dan Ocampo | {"name":"Dan Ocampo","content":"Dan Ocampo","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| mm7C9 / ljrMJ | text / 11:48 | {"name":"11:48","content":"11:48","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| pjhcO / MMAcL | frame / Q3 paper stock reconciliation | {"name":"Q3 paper stock reconciliation","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| KXb3d / pjhcO | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| RK9ER / pjhcO | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| wf3id / RK9ER | text /  | {"content":"Q3 paper stock reconciliation"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| M0Xg0d / MMAcL | text / The Q3 count is off by fourteen reams ag | {"name":"The Q3 count is off by fourteen reams ag","content":"The Q3 count is off by fourteen reams against the delivery notes.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| ICQMb / MMAcL | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| Dplbs / ICQMb | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| IU8Su / Dplbs | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| ILEL5 / IU8Su | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| fENYw / Dplbs | text / 1/3 | {"name":"1/3","content":"1/3"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| M1H7Wn / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| dmOqx / M1H7Wn | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| z1Va4o / dmOqx | text / Rina Delgado | {"name":"Rina Delgado","content":"Rina Delgado","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| WEb0s / dmOqx | text / 08:05 | {"name":"08:05","content":"08:05","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| H5WEb4 / M1H7Wn | frame / Quote for Q4 paper stock | {"name":"Quote for Q4 paper stock","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| A7I8x / H5WEb4 | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| BQ7Dr / H5WEb4 | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| ZJs8K / BQ7Dr | text /  | {"content":"Quote for Q4 paper stock"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| HSdcX / M1H7Wn | text / We supply coated and uncoated stock acro | {"name":"We supply coated and uncoated stock acro","content":"We supply coated and uncoated stock across Metro Manila and can match your current rate.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| ZWD20 / M1H7Wn | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| piKJ3 / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| zBSqv / piKJ3 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| uRgtB / zBSqv | text / Rina Delgado, Procurement | {"name":"Rina Delgado, Procurement","content":"Rina Delgado, Procurement","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| wVQRL / zBSqv | text / Wed | {"name":"Wed","content":"Wed","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| y4WTr / piKJ3 | frame / Supplier onboarding documents | {"name":"Supplier onboarding documents","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| RojwU / y4WTr | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| NUk2Y / y4WTr | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| xi3kx / NUk2Y | text /  | {"content":"Supplier onboarding documents"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| w2RJQc / piKJ3 | text / Attached are the tax certificate and upd | {"name":"Attached are the tax certificate and upd","content":"Attached are the tax certificate and updated payment details for your records.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| HDvlD / piKJ3 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| cMZhT / HDvlD | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Y8D8Dw / cMZhT | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| p1aVr7 / Y8D8Dw | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| t2bxaB / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| l0kCri / t2bxaB | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| ajRRO / l0kCri | text / Jules Mercado | {"name":"Jules Mercado","content":"Jules Mercado","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| yHllF / l0kCri | text / Tue | {"name":"Tue","content":"Tue","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kt5Oy / t2bxaB | text / October production calendar | {"name":"October production calendar","content":"October production calendar","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| SJnyK / t2bxaB | text / I highlighted the jobs that still need p | {"name":"I highlighted the jobs that still need p","content":"I highlighted the jobs that still need paper and finishing confirmations.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| RKn3a / t2bxaB | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wsid1 / RKn3a | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| j6pUP / wsid1 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| jN8om / j6pUP | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Yh5LK / RKn3a | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| o5s0Ho / Yh5LK | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| R3ybU / o5s0Ho | path /  | {} | {"x":1.1656075914700827,"y":1.166728695233663,"width":11.66773686806361,"height":11.12537395954132,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| pkdJc / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| cytNi / pkdJc | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| KVsXi / cytNi | text / People Operations | {"name":"People Operations","content":"People Operations","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| f2hK3d / cytNi | text / Tue | {"name":"Tue","content":"Tue","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| f76k8 / pkdJc | text / Senior press operator, open role | {"name":"Senior press operator, open role","content":"Senior press operator, open role","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| YFGyD / pkdJc | text / We work with a printing group in Quezon  | {"name":"We work with a printing group in Quezon ","content":"We work with a printing group in Quezon City and thought of your team first.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| q1wyTM / pkdJc | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| gtWFa / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| iq2Ws / gtWFa | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| hEFhI / iq2Ws | text / Priya Nair | {"name":"Priya Nair","content":"Priya Nair","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Ru8VZ / iq2Ws | text / Mon | {"name":"Mon","content":"Mon","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kuMKo / gtWFa | text / Corridor markings, before and after | {"name":"Corridor markings, before and after","content":"Corridor markings, before and after","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| M8a6dN / gtWFa | text / Took photos this morning so we have a re | {"name":"Took photos this morning so we have a re","content":"Took photos this morning so we have a record of where the new tape went.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| E6ZWM / gtWFa | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| a1D6TA / E6ZWM | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| C5PWG / a1D6TA | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| XdYzl / C5PWG | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| mt4hu / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| csFzp / mt4hu | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| aZ35P / csFzp | text / Stackpress Cloud | {"name":"Stackpress Cloud","content":"Stackpress Cloud","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Nmhlk / csFzp | text / Sep 9 | {"name":"Sep 9","content":"Sep 9","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| XJm6i / mt4hu | text / Your September usage summary | {"name":"Your September usage summary","content":"Your September usage summary","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eKJro / mt4hu | text / Storage, transfer, and build minutes for | {"name":"Storage, transfer, and build minutes for","content":"Storage, transfer, and build minutes for the period ending 31 August.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| u34Dzy / mt4hu | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| MYYJF / CSK0G | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| Eygei / MYYJF | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| KvcKx / Eygei | text / Marco Villar | {"name":"Marco Villar","content":"Marco Villar","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Xl2kS / Eygei | text / Sep 9 | {"name":"Sep 9","content":"Sep 9","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| gNWmw / MYYJF | text / Forklift battery replacement quote | {"name":"Forklift battery replacement quote","content":"Forklift battery replacement quote","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| dwfAJ / MYYJF | text / Two suppliers came back, the cheaper one | {"name":"Two suppliers came back, the cheaper one","content":"Two suppliers came back, the cheaper one cannot deliver before December.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| QYvxO / MYYJF | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","alignItems":"center"} |
| eOQek / QYvxO | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| p2s65 / eOQek | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| F5IHx / p2s65 | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
