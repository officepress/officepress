# Inbox Board — Light / main / div / div / div / section

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| s89Zd / p7TJg | frame / section | {"name":"section","context":"section"} | {"clip":true,"fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical"} |
| WJMSq / s89Zd | frame / header | {"name":"header","context":"header"} | {"width":302,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":8,"padding":12} |
| RQlb9 / WJMSq | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":44,"layout":"vertical","gap":4} |
| AwNeT / RQlb9 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zXXv1 / AwNeT | text / Follow up | {"name":"Follow up","content":"Follow up","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| VpTjr / AwNeT | frame / 2 | {"name":"2","context":"span"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| vG0FW / VpTjr | text /  | {"content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| cGOez / RQlb9 | text / Needs a reply or next step | {"name":"Needs a reply or next step","content":"Needs a reply or next step","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| SNqq5 / WJMSq | frame / div | {"name":"div","context":"div"} | {"gap":4,"alignItems":"center"} |
| brbxT / SNqq5 | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| YBEvy / brbxT | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| BLp8Y / YBEvy | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| HzAUq / BLp8Y | ellipse /  | {} | {"x":5,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| DAOY8 / BLp8Y | ellipse /  | {} | {"x":5,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| qaiF2 / BLp8Y | ellipse /  | {} | {"x":5,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| FduX5 / BLp8Y | ellipse /  | {} | {"x":8.75,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| YFiW0 / BLp8Y | ellipse /  | {} | {"x":8.75,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| OzJgC / BLp8Y | ellipse /  | {} | {"x":8.75,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| gG1iP / SNqq5 | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| qAAQM / gG1iP | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Ofw5W / qAAQM | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| ODh9M / Ofw5W | path /  | {} | {"x":1.9021466374397278,"y":1.260891705751419,"width":11.195707023143768,"height":12.47759148478508,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| BewD6 / Ofw5W | ellipse /  | {} | {"x":5.625,"y":5.625,"width":3.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| lWkOk / s89Zd | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":302,"layout":"vertical","gap":8,"padding":8} |
| MAWlp / lWkOk | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| jJNYk / MAWlp | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| roGj6 / jJNYk | text / Ana Cruz, Marco Villar, Priya Nair | {"name":"Ana Cruz, Marco Villar, Priya Nair","content":"Ana Cruz, Marco Villar, Priya Nair","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| KLnds / jJNYk | text / 09:40 | {"name":"09:40","content":"09:40","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| OIUsN / MAWlp | text / Warehouse move — dock schedule Friday | {"name":"Warehouse move — dock schedule Friday","content":"Warehouse move — dock schedule Friday","context":"h3"} | {"fill":"$op-text","textGrowth":"fixed-width-height","width":"fill_container","height":31.19,"lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| MYu2n / MAWlp | text / Print it at A3, anything smaller and the | {"name":"Print it at A3, anything smaller and the","content":"Print it at A3, anything smaller and the exit labels are unreadable.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Dg1if / MAWlp | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","layout":"vertical","gap":4,"padding":[4,0,0,0]} |
| Fn1Ja / Dg1if | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","justifyContent":"end","alignItems":"center"} |
| z9eFzA / Fn1Ja | text / 10h left | {"name":"10h left","content":"10h left","context":"strong"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| n49u4 / Dg1if | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-tint-2","cornerRadius":999,"layout":"vertical"} |
| v8nJka / n49u4 | rectangle / span | {"name":"span","context":"span"} | {"cornerRadius":999,"fill":"$op-accent","width":161.19,"height":6} |
| E7kGMc / MAWlp | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| VfcH6 / E7kGMc | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| xbr8D / VfcH6 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| i1cAG / xbr8D | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| l1q01T / E7kGMc | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| ABSLm / l1q01T | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| d8piTr / ABSLm | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| q0bU4i / l1q01T | text / 1/2 | {"name":"1/2","content":"1/2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| keSV7 / E7kGMc | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| mh11f / keSV7 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| NRpoL / mh11f | path /  | {} | {"x":1.1656075914700827,"y":1.166728695233663,"width":11.66773686806361,"height":11.12537395954132,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| AXD3t / lWkOk | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| of5jY / AXD3t | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| n2jQCN / of5jY | text / Northwind Billing, Ana Cruz | {"name":"Northwind Billing, Ana Cruz","content":"Northwind Billing, Ana Cruz","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| A52jd6 / of5jY | text / Wed | {"name":"Wed","content":"Wed","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2gYt / AXD3t | frame / Invoice NW-4471 is ready | {"name":"Invoice NW-4471 is ready","context":"h3"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| ryr4W / N2gYt | ellipse / Icon | {"name":"Icon"} | {"fill":"$op-dot","width":7,"height":7,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| XFkmw / N2gYt | frame /  | {} | {"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| GPFTr / XFkmw | text /  | {"content":"Invoice NW-4471 is ready"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| AI1wn / AXD3t | text / Mila, this one needs your sign-off befor | {"name":"Mila, this one needs your sign-off befor","content":"Mila, this one needs your sign-off before Friday or it slips to the October run.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| MCR1E / AXD3t | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","layout":"vertical","gap":4,"padding":[4,0,0,0]} |
| scPtg / MCR1E | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","justifyContent":"end","alignItems":"center"} |
| ou8fL / scPtg | text / 4h left | {"name":"4h left","content":"4h left","context":"strong"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| E9VrNG / MCR1E | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","fill":"$op-tint-2","cornerRadius":999,"layout":"vertical"} |
| vEYjA / E9VrNG | rectangle / span | {"name":"span","context":"span"} | {"cornerRadius":999,"fill":"$op-accent-strong","width":223.59,"height":6} |
| CDfV1 / AXD3t | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| P9vWFS / CDfV1 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| jxiQj / P9vWFS | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| WG9eP / jxiQj | path /  | {} | {"x":1.7496236562728882,"y":1.1671648422876995,"width":10.500376343727112,"height":11.666544556617737,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| KnZa4 / CDfV1 | frame / span | {"name":"span","context":"span"} | {"gap":4,"alignItems":"center"} |
| RHVWW / KnZa4 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| HYWov / RHVWW | path /  | {} | {"x":2.3333333333333335,"y":3.5,"width":9.333333333333334,"height":6.416666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| EhReY / KnZa4 | text / 0/2 | {"name":"0/2","content":"0/2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| X14Fpq / p7TJg | frame / section | {"name":"section","context":"section"} | {"clip":true,"fill":"$op-column","cornerRadius":16,"stroke":"$op-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical"} |
| zd2C3 / X14Fpq | frame / header | {"name":"header","context":"header"} | {"width":302,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":8,"padding":12} |
| OkEnN / zd2C3 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":44,"layout":"vertical","gap":4} |
| pwIQ3 / OkEnN | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| zswbN / pwIQ3 | text / Done | {"name":"Done","content":"Done","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| guwxT / pwIQ3 | frame / 1 | {"name":"1","context":"span"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| g8YXu7 / guwxT | text /  | {"content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| wFxZk / OkEnN | text / Finished for now | {"name":"Finished for now","content":"Finished for now","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| PZVyH / zd2C3 | frame / div | {"name":"div","context":"div"} | {"gap":4,"alignItems":"center"} |
| KU7i6 / PZVyH | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| z3Ojxl / KU7i6 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| h8OagH / z3Ojxl | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| LJJtw / h8OagH | ellipse /  | {} | {"x":5,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| mt48t / h8OagH | ellipse /  | {} | {"x":5,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| f7k59V / h8OagH | ellipse /  | {} | {"x":5,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| XelPS / h8OagH | ellipse /  | {} | {"x":8.75,"y":6.875,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| vI0YT / h8OagH | ellipse /  | {} | {"x":8.75,"y":2.5,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| r3c5z / h8OagH | ellipse /  | {} | {"x":8.75,"y":11.25,"width":1.25,"height":1.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| X7zbhE / PZVyH | frame / button | {"name":"button","context":"button"} | {"width":34,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| LYn7t / X7zbhE | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| gS4P1 / LYn7t | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| X7To4 / gS4P1 | path /  | {} | {"x":1.9021466374397278,"y":1.260891705751419,"width":11.195707023143768,"height":12.47759148478508,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| AEYFy / gS4P1 | ellipse /  | {} | {"x":5.625,"y":5.625,"width":3.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| nAC4v / X14Fpq | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":302,"layout":"vertical","padding":8} |
| mhix5 / nAC4v | frame / article | {"name":"article","context":"article"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeAlignment":"inner","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":8,"padding":12} |
| oZTvN / mhix5 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":20,"gap":8,"justifyContent":"space_between","alignItems":"center"} |
| gyl2d / oZTvN | text / Tere Lim | {"name":"Tere Lim","content":"Tere Lim","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| of8Bp / oZTvN | text / Wed | {"name":"Wed","content":"Wed","context":"time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| MBELy / mhix5 | text / Press check moved to Thursday | {"name":"Press check moved to Thursday","content":"Press check moved to Thursday","context":"h3"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| V2VwU9 / mhix5 | text / The press slot is now Thursday at 14:00. | {"name":"The press slot is now Thursday at 14:00.","content":"The press slot is now Thursday at 14:00. Please confirm who will attend.","context":"p"} | {"fill":"$op-text-2","textGrowth":"fixed-width-height","width":"fill_container","height":36,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| ucR47 / mhix5 | rectangle / div | {"name":"div","context":"div"} | {"width":"fill_container","height":18} |
| t7olx / p7TJg | frame / button | {"name":"button","context":"button"} | {"width":304,"height":112,"fill":"$op-tint","cornerRadius":8,"stroke":"$op-tint-2","strokeWidth":1,"strokeAlignment":"inner","gap":8,"padding":[0,8],"justifyContent":"center","alignItems":"center"} |
| NGZhX / t7olx | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| ELFhN / NGZhX | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":17,"height":17,"layout":"none"} |
| SNqgu / ELFhN | path /  | {} | {"x":3.541666666666667,"y":3.541666666666667,"width":9.916666666666668,"height":9.916666666666668,"stroke":"$op-accent","strokeWidth":1.4166666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| F8AVNj / t7olx | text / Add column | {"name":"Add column","content":"Add column"} | {"fill":"$op-accent","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
