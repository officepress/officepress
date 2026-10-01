# Inbox Board — Dark / aside

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| HkH3s / tQmpX | frame / aside | {"name":"aside","context":"aside"} | {"x":0,"y":0,"clip":true,"width":260,"height":1000,"fill":"$op-nav","stroke":"$op-nav-border","strokeWidth":{"right":1},"strokeAlignment":"inner","layout":"vertical"} |
| OsB8d / HkH3s | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","layout":"vertical","gap":12,"padding":[16,16,12,16]} |
| mEuNP / OsB8d | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":24,"gap":8,"alignItems":"center"} |
| fAQR3 / mEuNP | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| XAU8I / fAQR3 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":20,"height":20,"layout":"none"} |
| jUSet / XAU8I | path /  | {} | {"x":1.6666666666666667,"y":10,"width":16.666666666666668,"height":2.5,"stroke":"$op-nav-text","strokeWidth":1.6666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| gxHzA / XAU8I | path /  | {} | {"x":1.6666666666666667,"y":3.3333333333333335,"width":16.666666666666668,"height":13.333333333333334,"stroke":"$op-nav-text","strokeWidth":1.6666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| QWJEX / mEuNP | text / office-inbox | {"name":"office-inbox","content":"office-inbox"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| kfpgi / OsB8d | frame / form | {"name":"form","context":"form"} | {"width":"fill_container","layout":"vertical"} |
| Cqlmq / kfpgi | frame / Search mail | {"name":"Search mail","context":"input"} | {"clip":true,"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical","padding":[0,12,0,32],"justifyContent":"center"} |
| G3hIOr / Cqlmq | text /  | {"content":"Search mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":183,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| fgza8 / kfpgi | frame / span | {"name":"span","context":"span"} | {"layoutPosition":"absolute","x":12,"y":10,"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| RUMYS / fgza8 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| Z04jW / RUMYS | path /  | {} | {"x":11.106666564941406,"y":11.106666564941406,"width":2.8933334350585938,"height":2.8933334350585938,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| o7p3BU / RUMYS | ellipse /  | {} | {"x":2,"y":2,"width":10.666666666666666,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| wuQac / HkH3s | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":16,"padding":[12,8]} |
| acIOR / wuQac | frame / nav | {"name":"nav","context":"nav"} | {"width":"fill_container","layout":"vertical","gap":4,"padding":[12,0,0,0]} |
| BPjXc / acIOR | frame / ON THIS DEVICE | {"name":"ON THIS DEVICE","context":"p"} | {"width":"fill_container","height":40,"layout":"vertical","padding":[8,12,4,12],"justifyContent":"center"} |
| rUsIK / BPjXc | text /  | {"content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.88} |
| GLFac / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| YiFKB / GLFac | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| p52eF / YiFKB | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| jYNNI / p52eF | path /  | {} | {"x":1.3333333333333333,"y":8,"width":13.333333333333332,"height":2,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| zxfvi / p52eF | path /  | {} | {"x":1.3333333333333333,"y":2.6666666666666665,"width":13.333333333333332,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| dSlJ8 / GLFac | text / Inbox | {"name":"Inbox","content":"Inbox","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| i1nCG / GLFac | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| rnjTL / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| xV9dN / rnjTL | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| C7sBtp / xV9dN | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| anRLi / C7sBtp | path /  | {} | {"x":1.3321229616800943,"y":1.333404223124186,"width":13.334556420644123,"height":12.714713096618652,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Ph83y / rnjTL | text / Starred | {"name":"Starred","content":"Starred","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| iDsJZ / rnjTL | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| XsdYR / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| Rwr3Y / XsdYR | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| RKFgN / Rwr3Y | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| TZ9yl / RKFgN | path /  | {} | {"x":1.3334623972574868,"y":1.3316589991251626,"width":13.334878921508789,"height":13.334879239400227,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| HEhW1 / XsdYR | text / Sent | {"name":"Sent","content":"Sent","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| SVN5x / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| H19OWW / SVN5x | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| eKzHa / H19OWW | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| BZhOb / eKzHa | path /  | {} | {"x":2.6666666666666665,"y":1.333331267038981,"width":10.666669209798176,"height":13.333335399627686,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| wUZQe / eKzHa | path /  | {} | {"x":9.333333333333332,"y":1.3333333333333333,"width":4,"height":4,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| m2frxq / SVN5x | text / Drafts | {"name":"Drafts","content":"Drafts","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| cqvI9 / SVN5x | text / 2 | {"name":"2","content":"2","context":"span"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| PQgB5 / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| nsIDL / PQgB5 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| sX0KN / nsIDL | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| V2O4Po / sX0KN | rectangle /  | {} | {"cornerRadius":0.6666666666666666,"x":1.3333333333333333,"y":2,"width":13.333333333333332,"height":3.333333333333333,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| mGKYJ / sX0KN | path /  | {} | {"x":2.6666666666666665,"y":5.333333333333333,"width":10.666666666666666,"height":8.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Twjmd / PQgB5 | text / Archive | {"name":"Archive","content":"Archive","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| zsDb4 / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| TppTB / zsDb4 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| O1Xwc / TppTB | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| he5VK / O1Xwc | path /  | {} | {"x":1.3213361104329426,"y":1.9907356897989907,"width":13.343963623046875,"height":12.009318987528482,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| OJkEQ / zsDb4 | text / Spam | {"name":"Spam","content":"Spam","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| EpAB5 / acIOR | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| owSyI / EpAB5 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| I1wKI / owSyI | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| vwzhl / I1wKI | path /  | {} | {"x":1.3333333333333333,"y":4.666666666666666,"width":13.333333333333332,"height":3.9983698527018228,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| zeHHc / I1wKI | rectangle /  | {} | {"cornerRadius":1.3333333333333333,"x":1.3333333333333333,"y":2.6666666666666665,"width":13.333333333333332,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| HrG5j / EpAB5 | text / All Mail | {"name":"All Mail","content":"All Mail","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Qr6vQ / wuQac | frame / nav | {"name":"nav","context":"nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| i4aP4 / Qr6vQ | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":52,"layout":"none"} |
| Xgv8l / i4aP4 | frame / FILTERS | {"name":"FILTERS","context":"p"} | {"x":0,"y":11,"width":167,"height":28,"layout":"vertical","padding":[8,0,4,12],"justifyContent":"center"} |
| lkKhG / Xgv8l | text /  | {"content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.88} |
| fjeyi / i4aP4 | frame / span | {"name":"span","context":"span"} | {"x":175,"y":11.25,"gap":4,"justifyContent":"end","alignItems":"center"} |
| HsRgd / fjeyi | frame / a | {"name":"a","context":"a"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| I10wVc / HsRgd | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| ujmwg / I10wVc | path /  | {} | {"x":3.333333333333333,"y":3.333333333333333,"width":9.333333333333332,"height":9.333333333333332,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| lfrWW / fjeyi | frame / button | {"name":"button","context":"button"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| J5Pir / lfrWW | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| pQNmv / J5Pir | path /  | {} | {"x":2,"y":2.6666666666666665,"width":12,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| p1tQ66 / Qr6vQ | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| Mi5hV / p1tQ66 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| XuzI8 / Mi5hV | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| XkfOA / XuzI8 | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| JmUif / p1tQ66 | text / Suppliers | {"name":"Suppliers","content":"Suppliers","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| e5rNQb / p1tQ66 | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| I8obh7 / Qr6vQ | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| qQOGV / I8obh7 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| GBCaT / qQOGV | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| fAvjv / GBCaT | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| U9Tke7 / I8obh7 | text / Invoices | {"name":"Invoices","content":"Invoices","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| vEUsM / I8obh7 | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| tMqOU / Qr6vQ | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| cvbXe / tMqOU | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Cermw / cvbXe | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| xV03L / Cermw | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| UkYKr / tMqOU | text / Warehouse move | {"name":"Warehouse move","content":"Warehouse move","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| BTAhq / tMqOU | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| rkONB / Qr6vQ | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| n0neAc / rkONB | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| K68wn / n0neAc | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| OPcsY / K68wn | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| QXpMg / rkONB | text / Press schedule | {"name":"Press schedule","content":"Press schedule","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| gKyIE / HkH3s | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","fill":"#FFFFFF00","stroke":"$op-nav-border","strokeWidth":{"top":1},"strokeAlignment":"inner","layout":"vertical","padding":12} |
| p4gCNS / gKyIE | frame / button | {"name":"button","context":"button"} | {"width":"fill_container","fill":"$op-nav-field","cornerRadius":8,"stroke":"$op-nav-border","strokeWidth":1,"strokeAlignment":"inner","gap":12,"padding":[8,12],"alignItems":"center"} |
| tyJyp / p4gCNS | frame / MR | {"name":"MR","context":"span"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":999,"stroke":"$op-accent","strokeWidth":1,"strokeAlignment":"inner","justifyContent":"center","alignItems":"center"} |
| GOByG / tyJyp | text /  | {"content":"MR"} | {"fill":"#FFFFFF","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":12,"fontWeight":"700","letterSpacing":0.24} |
| wl6OO / p4gCNS | frame / span | {"name":"span","context":"span"} | {"width":"fill_container","layout":"vertical"} |
| ijgdB / wl6OO | frame / mila.reyes@officepress.ph | {"name":"mila.reyes@officepress.ph","context":"span"} | {"clip":true,"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| fBZYI / ijgdB | text /  | {"content":"mila.reyes@officepress.ph"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| V8kZG / wl6OO | text / Checked 2 minutes ago | {"name":"Checked 2 minutes ago","content":"Checked 2 minutes ago","context":"span"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| vWman / p4gCNS | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| DbLaO / vWman | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| ipbt9 / DbLaO | path /  | {} | {"x":3.75,"y":5.625,"width":7.5,"height":3.75,"stroke":"$op-nav-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| cmCen / tQmpX | frame / aside | {"name":"aside","context":"aside"} | {"x":1440,"y":0,"clip":true,"width":320,"height":1000,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"strokeAlignment":"inner","layout":"vertical","gap":16,"padding":20} |
| a9kSdV / cmCen | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":12,"justifyContent":"space_between","alignItems":"center"} |
| yufHg / a9kSdV | text / Select a card | {"name":"Select a card","content":"Select a card","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| qVtcH / a9kSdV | frame / div | {"name":"div","context":"div"} | {"gap":4,"alignItems":"center"} |
| L8Wjk / qVtcH | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"fill":"$op-column","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","justifyContent":"center","alignItems":"center"} |
| dkAhF / L8Wjk | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| N0VPy / dkAhF | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| OJ9iD / N0VPy | path /  | {} | {"x":2,"y":2,"width":12,"height":12,"stroke":"$op-text-2","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| HacRo / qVtcH | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| S1gGoJ / HacRo | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| DYqvz / S1gGoJ | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| l84Bjv / DYqvz | path /  | {} | {"x":4,"y":4,"width":8,"height":8,"stroke":"$op-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| pN6aw / cmCen | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","height":20,"layout":"vertical"} |
| fAIUx / pN6aw | text / Choose an email card to inspect its deta | {"name":"Choose an email card to inspect its deta","content":"Choose an email card to inspect its details.","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
