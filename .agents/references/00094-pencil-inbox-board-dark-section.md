# Inbox Board — Dark / main / div / div / div / section

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| w5wBxT / kAYtQ | frame / section | {"name":"section","context":"section"} | {"clip":true,"fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical"} |
| y8utX / w5wBxT | frame / header | {"name":"header","context":"header"} | {"width":302,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":8,"padding":12} |
| GMVuZ / y8utX | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":44,"layout":"vertical","gap":4} |
| ecixy / GMVuZ | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| XPvCj / ecixy | text / Follow up | {"name":"Follow up","content":"Follow up","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| i4QxVy / ecixy | frame / 2 | {"name":"2","context":"span"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| b3Bm2n / i4QxVy | text /  | {"content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ddMwN / GMVuZ | text / Needs a reply or next step | {"name":"Needs a reply or next step","content":"Needs a reply or next step","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| HZea6 / y8utX | frame / div | {"name":"div","context":"div"} | {"gap":4,"alignItems":"center"} |
| GVdlh / HZea6 | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ANwFJ / GVdlh | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| m6eSo / ANwFJ | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| arQSq / m6eSo | ellipse /  | {} | {"x":5,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| zJ4wH / m6eSo | ellipse /  | {} | {"x":5,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| KZV6F / m6eSo | ellipse /  | {} | {"x":5,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| gcF9T / m6eSo | ellipse /  | {} | {"x":8.75,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| kwE3L / m6eSo | ellipse /  | {} | {"x":8.75,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Ef6ci / m6eSo | ellipse /  | {} | {"x":8.75,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| fMEvX / HZea6 | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| X0qp17 / fMEvX | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| F7q8NC / X0qp17 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| tgF2x / F7q8NC | path /  | {} | {"x":1.9021466374397278,"y":1.260891705751419,"width":11.195707023143768,"height":12.47759148478508,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| DJGMO / F7q8NC | ellipse /  | {} | {"x":5.625,"y":5.625,"width":3.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| CVBN8 / w5wBxT | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":302,"layout":"vertical","gap":8,"padding":8} |
| uPtRm / CVBN8 | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| WMUmC / uPtRm | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| n83F0P / WMUmC | text / Ana Cruz, Marco Villar, Priya Nair | {"name":"Ana Cruz, Marco Villar, Priya Nair","content":"Ana Cruz, Marco Villar, Priya Nair","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| o61xO / WMUmC | text / 09:40 | {"name":"09:40","content":"09:40","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| q9GbB5 / uPtRm | text / Warehouse move — dock schedule Friday | {"name":"Warehouse move — dock schedule Friday","content":"Warehouse move — dock schedule Friday","context":"h3"} | {"fill":"$op-text","textGrowth":"fixed-width-height","width":"fill_container","height":31.19,"lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| lHS5n / uPtRm | text / Print it at A3, anything smaller and the | {"name":"Print it at A3, anything smaller and the","content":"Print it at A3, anything smaller and the exit labels are unreadable.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| jMJhO / uPtRm | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","layout":"vertical","gap":4,"padding":[4,0,0,0]} |
| VQauC / jMJhO | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","justifyContent":"end","alignItems":"center"} |
| NMtyi / VQauC | text / 10h left | {"name":"10h left","content":"10h left","context":"strong"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| bihOj / jMJhO | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-tint-2","cornerRadius":999,"layout":"vertical"} |
| ALL4c / bihOj | rectangle / span | {"name":"span","context":"span"} | {"cornerRadius":999,"fill":"$op-accent","width":161.19,"height":6} |
| fKsIs / uPtRm | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| cOZg9 / fKsIs | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| V8bz9L / cOZg9 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| Hniuh / V8bz9L | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| NXGMB / fKsIs | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| NK2sT / NXGMB | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| YWnaL / NK2sT | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| LFT0q / NXGMB | text / 1/2 | {"name":"1/2","content":"1/2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| mspJs / fKsIs | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| aeMZc / mspJs | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| GWL3y / aeMZc | path /  | {} | {"x":1.1656075914700827,"y":1.166728695233663,"width":11.66773686806361,"height":11.12537395954132,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| ZVQF9 / CVBN8 | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| VGocY / ZVQF9 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| IFgBv / VGocY | text / Northwind Billing, Ana Cruz | {"name":"Northwind Billing, Ana Cruz","content":"Northwind Billing, Ana Cruz","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| C5f0X / VGocY | text / Wed | {"name":"Wed","content":"Wed","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| wpUnY / ZVQF9 | frame / Invoice NW-4471 is ready | {"name":"Invoice NW-4471 is ready","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zlgoi / wpUnY | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| D8jmS1 / wpUnY | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| MfrUT / D8jmS1 | text /  | {"content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Sl3g6 / ZVQF9 | text / Mila, this one needs your sign-off befor | {"name":"Mila, this one needs your sign-off befor","content":"Mila, this one needs your sign-off before Friday or it slips to the October run.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| gwjr8 / ZVQF9 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","layout":"vertical","gap":4,"padding":[4,0,0,0]} |
| uIzIE / gwjr8 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","justifyContent":"end","alignItems":"center"} |
| Hrpjp / uIzIE | text / 4h left | {"name":"4h left","content":"4h left","context":"strong"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lM9d0 / gwjr8 | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-tint-2","cornerRadius":999,"layout":"vertical"} |
| vEZxu / lM9d0 | rectangle / span | {"name":"span","context":"span"} | {"cornerRadius":999,"fill":"$op-accent-strong","width":223.59,"height":6} |
| i0ssUs / ZVQF9 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| eFlbx / i0ssUs | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| mfZE3 / eFlbx | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| KEysU / mfZE3 | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| V9CfFp / i0ssUs | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| HpW8q / V9CfFp | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| vSft7 / HpW8q | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| W36AJ / V9CfFp | text / 0/2 | {"name":"0/2","content":"0/2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Vq0ES / kAYtQ | frame / section | {"name":"section","context":"section"} | {"clip":true,"fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical"} |
| SbAHR / Vq0ES | frame / header | {"name":"header","context":"header"} | {"width":302,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":8,"padding":12} |
| n31NTU / SbAHR | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":44,"layout":"vertical","gap":4} |
| xpp4a / n31NTU | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K2wj9 / xpp4a | text / Done | {"name":"Done","content":"Done","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| c1JQe / xpp4a | frame / 1 | {"name":"1","context":"span"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| QV8Aq / c1JQe | text /  | {"content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P3zeo / n31NTU | text / Finished for now | {"name":"Finished for now","content":"Finished for now","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| eupHM / SbAHR | frame / div | {"name":"div","context":"div"} | {"gap":4,"alignItems":"center"} |
| xbHcT / eupHM | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| xujfQ / xbHcT | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| HQ2js / xujfQ | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| A596T5 / HQ2js | ellipse /  | {} | {"x":5,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| C7vQl / HQ2js | ellipse /  | {} | {"x":5,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| jt4ZI / HQ2js | ellipse /  | {} | {"x":5,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| VZwxl / HQ2js | ellipse /  | {} | {"x":8.75,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| wsjcj / HQ2js | ellipse /  | {} | {"x":8.75,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| yK02N / HQ2js | ellipse /  | {} | {"x":8.75,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Oj2Y8 / eupHM | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| gw5Dy / Oj2Y8 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Q5Idln / gw5Dy | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| ikhvY / Q5Idln | path /  | {} | {"x":1.9021466374397278,"y":1.260891705751419,"width":11.195707023143768,"height":12.47759148478508,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| TBplg / Q5Idln | ellipse /  | {} | {"x":5.625,"y":5.625,"width":3.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| HBmCw / Vq0ES | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":302,"layout":"vertical","padding":8} |
| IOB5h / HBmCw | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| jBaJZ / IOB5h | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| MvLIk / jBaJZ | text / Tere Lim | {"name":"Tere Lim","content":"Tere Lim","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| M6FAY / jBaJZ | text / Wed | {"name":"Wed","content":"Wed","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| xCHTl / IOB5h | text / Press check moved to Thursday | {"name":"Press check moved to Thursday","content":"Press check moved to Thursday","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| DcyVX / IOB5h | text / The press slot is now Thursday at 14:00. | {"name":"The press slot is now Thursday at 14:00.","content":"The press slot is now Thursday at 14:00. Please confirm who will attend.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| KCYTx / IOB5h | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| dX6yS / kAYtQ | frame / button | {"name":"button","context":"button"} | {"width":304,"height":112,"fill":"$op-tint","cornerRadius":8,"stroke":"$op-tint-2","strokeWidth":1,"strokeAlignment":"inner","gap":8,"padding":[0,8],"justifyContent":"center","alignItems":"center"} |
| IeHSO / dX6yS | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| YDlVR / IeHSO | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":17,"height":17,"layout":"none"} |
| YrjmW / YDlVR | path /  | {} | {"x":3.541666666666667,"y":3.541666666666667,"width":9.916666666666668,"height":9.916666666666668,"stroke":"$op-accent","strokeWidth":1.4166666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| kGFcb / dX6yS | text / Add column | {"name":"Add column","content":"Add column"} | {"fill":"$op-accent","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
