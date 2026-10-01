# Inbox Board — Light / aside

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| Zk7cw / uNSQ6 | frame / aside | {"name":"aside","context":"aside"} | {"x":0,"y":0,"clip":true,"width":260,"height":1000,"fill":"$op-nav","stroke":"$op-nav-border","strokeWidth":{"right":1},"strokeAlignment":"inner","layout":"vertical"} |
| f5ZN4F / Zk7cw | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","layout":"vertical","gap":12,"padding":[16,16,12,16]} |
| TlFjm / f5ZN4F | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":24,"gap":8,"alignItems":"center"} |
| UTQ2G / TlFjm | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| wvh21 / UTQ2G | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":20,"height":20,"layout":"none"} |
| OgMzA / wvh21 | path /  | {} | {"x":1.6666666666666667,"y":10,"width":16.666666666666668,"height":2.5,"stroke":"$op-nav-text","strokeWidth":1.6666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| bCtW3 / wvh21 | path /  | {} | {"x":1.6666666666666667,"y":3.3333333333333335,"width":16.666666666666668,"height":13.333333333333334,"stroke":"$op-nav-text","strokeWidth":1.6666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| b1mMdn / TlFjm | text / office-inbox | {"name":"office-inbox","content":"office-inbox"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| wSHue / f5ZN4F | frame / form | {"name":"form","context":"form"} | {"width":"fill_container","layout":"vertical"} |
| w2gTf / wSHue | frame / Search mail | {"name":"Search mail","context":"input"} | {"clip":true,"width":"fill_container","height":36,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"strokeAlignment":"inner","layout":"vertical","padding":[0,12,0,32],"justifyContent":"center"} |
| YP4TK / w2gTf | text /  | {"content":"Search mail"} | {"fill":"$op-nav-text-2","textGrowth":"fixed-width","width":183,"lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RtiN9 / wSHue | frame / span | {"name":"span","context":"span"} | {"layoutPosition":"absolute","x":12,"y":10,"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| srd5I / RtiN9 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| mVwee / srd5I | path /  | {} | {"x":11.106666564941406,"y":11.106666564941406,"width":2.8933334350585938,"height":2.8933334350585938,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| a5IvJ / srd5I | ellipse /  | {} | {"x":2,"y":2,"width":10.666666666666666,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| f9NT5 / Zk7cw | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":16,"padding":[12,8]} |
| Q9NJB / f9NT5 | frame / nav | {"name":"nav","context":"nav"} | {"width":"fill_container","layout":"vertical","gap":4,"padding":[12,0,0,0]} |
| C35PCN / Q9NJB | frame / ON THIS DEVICE | {"name":"ON THIS DEVICE","context":"p"} | {"width":"fill_container","height":40,"layout":"vertical","padding":[8,12,4,12],"justifyContent":"center"} |
| ySyGv / C35PCN | text /  | {"content":"ON THIS DEVICE"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.88} |
| PJpLq / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"fill":"$op-nav-active","cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| uZ0FK / PJpLq | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| aZjRS / uZ0FK | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| Smuh7 / aZjRS | path /  | {} | {"x":1.3333333333333333,"y":8,"width":13.333333333333332,"height":2,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| gZ1mB / aZjRS | path /  | {} | {"x":1.3333333333333333,"y":2.6666666666666665,"width":13.333333333333332,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| mzJFh / PJpLq | text / Inbox | {"name":"Inbox","content":"Inbox","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| X2xro / PJpLq | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| EmqUp / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| GkAWW / EmqUp | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| BUe24 / GkAWW | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| z56pG / BUe24 | path /  | {} | {"x":1.3321229616800943,"y":1.333404223124186,"width":13.334556420644123,"height":12.714713096618652,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| QkBb7 / EmqUp | text / Starred | {"name":"Starred","content":"Starred","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| LtJwa / EmqUp | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| G7Xzb / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| cfuw2 / G7Xzb | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| WalRk / cfuw2 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| S35e9 / WalRk | path /  | {} | {"x":1.3334623972574868,"y":1.3316589991251626,"width":13.334878921508789,"height":13.334879239400227,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| nXxEq / G7Xzb | text / Sent | {"name":"Sent","content":"Sent","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| AyKFK / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| weDNz / AyKFK | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Fdbng / weDNz | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| g6H1Ep / Fdbng | path /  | {} | {"x":2.6666666666666665,"y":1.333331267038981,"width":10.666669209798176,"height":13.333335399627686,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| kDFl4 / Fdbng | path /  | {} | {"x":9.333333333333332,"y":1.3333333333333333,"width":4,"height":4,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| K0jGRa / AyKFK | text / Drafts | {"name":"Drafts","content":"Drafts","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Lr0cd / AyKFK | text / 2 | {"name":"2","content":"2","context":"span"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| x33HD / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| SGjmL / x33HD | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| vcRi5 / SGjmL | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| kVQ7L / vcRi5 | rectangle /  | {} | {"cornerRadius":0.6666666666666666,"x":1.3333333333333333,"y":2,"width":13.333333333333332,"height":3.333333333333333,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| XErxV / vcRi5 | path /  | {} | {"x":2.6666666666666665,"y":5.333333333333333,"width":10.666666666666666,"height":8.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| LG4XI / x33HD | text / Archive | {"name":"Archive","content":"Archive","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| u4BWS / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| p4Qux / u4BWS | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| c0eekS / p4Qux | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| V4J7CV / c0eekS | path /  | {} | {"x":1.3213361104329426,"y":1.9907356897989907,"width":13.343963623046875,"height":12.009318987528482,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Jh7pc / u4BWS | text / Spam | {"name":"Spam","content":"Spam","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| x8MCP / Q9NJB | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| kcC1c / x8MCP | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| m8j2G5 / kcC1c | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| m3tQR / m8j2G5 | path /  | {} | {"x":1.3333333333333333,"y":4.666666666666666,"width":13.333333333333332,"height":3.9983698527018228,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| FBX4I / m8j2G5 | rectangle /  | {} | {"cornerRadius":1.3333333333333333,"x":1.3333333333333333,"y":2.6666666666666665,"width":13.333333333333332,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| g6AZ6 / x8MCP | text / All Mail | {"name":"All Mail","content":"All Mail","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| cQgj1 / f9NT5 | frame / nav | {"name":"nav","context":"nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Bzm3I / cQgj1 | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","height":52,"layout":"none"} |
| KWHvn / Bzm3I | frame / FILTERS | {"name":"FILTERS","context":"p"} | {"x":0,"y":11,"width":167,"height":28,"layout":"vertical","padding":[8,0,4,12],"justifyContent":"center"} |
| inA3S / KWHvn | text /  | {"content":"FILTERS"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.88} |
| QZrro / Bzm3I | frame / span | {"name":"span","context":"span"} | {"x":175,"y":11.25,"gap":4,"justifyContent":"end","alignItems":"center"} |
| giN6F / QZrro | frame / a | {"name":"a","context":"a"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| hq185 / giN6F | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| FLwJO / hq185 | path /  | {} | {"x":3.333333333333333,"y":3.333333333333333,"width":9.333333333333332,"height":9.333333333333332,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| xUVng / QZrro | frame / button | {"name":"button","context":"button"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| i0FKQ / xUVng | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| nyWnP / i0FKQ | path /  | {} | {"x":2,"y":2.6666666666666665,"width":12,"height":10.666666666666666,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| PSCGa / cQgj1 | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| KfG1g / PSCGa | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| HyhoI / KfG1g | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| u4udz / HyhoI | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| JonUL / PSCGa | text / Suppliers | {"name":"Suppliers","content":"Suppliers","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| cRbmw / PSCGa | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| yXkVz / cQgj1 | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| j3Oie / yXkVz | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Tnlym / j3Oie | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| P1HOug / Tnlym | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| fQKjn / yXkVz | text / Invoices | {"name":"Invoices","content":"Invoices","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| vqF84 / yXkVz | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| CAKzP / cQgj1 | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| cWyF0 / CAKzP | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| RldeJ / cWyF0 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| e65SZ / RldeJ | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| FYAgX / CAKzP | text / Warehouse move | {"name":"Warehouse move","content":"Warehouse move","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| vAIcd / CAKzP | ellipse / span | {"name":"span","context":"span"} | {"fill":"$op-nav-dot","width":8,"height":8,"stroke":"#FFFFFF","strokeAlignment":"outer"} |
| u7GIB / cQgj1 | frame / a | {"name":"a","context":"a"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,12],"alignItems":"center"} |
| ZYUcg / u7GIB | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| EljZL / ZYUcg | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| Z0eOt8 / EljZL | path /  | {} | {"x":1.333561579386393,"y":2,"width":13.331544876098633,"height":12.666978200276692,"stroke":"$op-nav-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| T43yXT / u7GIB | text / Press schedule | {"name":"Press schedule","content":"Press schedule","context":"span"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| ofAe7 / Zk7cw | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","fill":"#FFFFFF00","stroke":"$op-nav-border","strokeWidth":{"top":1},"strokeAlignment":"inner","layout":"vertical","padding":12} |
| Nh4rA / ofAe7 | frame / button | {"name":"button","context":"button"} | {"width":"fill_container","fill":"$op-nav-field","cornerRadius":8,"stroke":"$op-nav-border","strokeWidth":1,"strokeAlignment":"inner","gap":12,"padding":[8,12],"alignItems":"center"} |
| LbMRO / Nh4rA | frame / MR | {"name":"MR","context":"span"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":999,"stroke":"$op-accent","strokeWidth":1,"strokeAlignment":"inner","justifyContent":"center","alignItems":"center"} |
| WtSY2 / LbMRO | text /  | {"content":"MR"} | {"fill":"#FFFFFF","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":12,"fontWeight":"700","letterSpacing":0.24} |
| RxbrI / Nh4rA | frame / span | {"name":"span","context":"span"} | {"width":"fill_container","layout":"vertical"} |
| AaU0D / RxbrI | frame / mila.reyes@officepress.ph | {"name":"mila.reyes@officepress.ph","context":"span"} | {"clip":true,"width":"fill_container","layout":"vertical","justifyContent":"center"} |
| I9UcZ3 / AaU0D | text /  | {"content":"mila.reyes@officepress.ph"} | {"fill":"$op-nav-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| RCpOE / RxbrI | text / Checked 2 minutes ago | {"name":"Checked 2 minutes ago","content":"Checked 2 minutes ago","context":"span"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| SUvla / Nh4rA | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| OFN0m / SUvla | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| PWpic / OFN0m | path /  | {} | {"x":3.75,"y":5.625,"width":7.5,"height":3.75,"stroke":"$op-nav-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| JZevz / uNSQ6 | frame / aside | {"name":"aside","context":"aside"} | {"x":1440,"y":0,"clip":true,"width":320,"height":1000,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"strokeAlignment":"inner","layout":"vertical","gap":16,"padding":20} |
| xAhrk / JZevz | frame / div | {"name":"div","context":"div"} | {"width":"fill_container","gap":12,"justifyContent":"space_between","alignItems":"center"} |
| TSPbc / xAhrk | text / Select a card | {"name":"Select a card","content":"Select a card","context":"h2"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| LTKqh / xAhrk | frame / div | {"name":"div","context":"div"} | {"gap":4,"alignItems":"center"} |
| UVNIH / LTKqh | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"fill":"$op-column","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","justifyContent":"center","alignItems":"center"} |
| CRfAA / UVNIH | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| H3goYd / CRfAA | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| F5Kbt5 / H3goYd | path /  | {} | {"x":2,"y":2,"width":12,"height":12,"stroke":"$op-text-2","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| Or9XI / LTKqh | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| def8R / Or9XI | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| hIxGA / def8R | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":16,"height":16,"layout":"none"} |
| Fh9xr / hIxGA | path /  | {} | {"x":4,"y":4,"width":8,"height":8,"stroke":"$op-text","strokeWidth":1.3333333333333333,"strokeLinejoin":"round","strokeLinecap":"round"} |
| zRGp9 / JZevz | frame / div | {"name":"div","context":"div"} | {"clip":true,"width":"fill_container","height":20,"layout":"vertical"} |
| AJgZu / zRGp9 | text / Choose an email card to inspect its deta | {"name":"Choose an email card to inspect its deta","content":"Choose an email card to inspect its details.","context":"p"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
