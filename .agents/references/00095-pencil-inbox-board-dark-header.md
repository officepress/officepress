# Inbox Board — Dark / header

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| LZXqs / tQmpX | frame / header | {"name":"header","context":"header"} | {"x":260,"y":0,"width":1180,"height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":12,"padding":[0,16],"justifyContent":"space_between","alignItems":"center"} |
| ATKbt / LZXqs | frame / div | {"name":"div","context":"div"} | {"gap":12,"alignItems":"center"} |
| auTUw / ATKbt | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| SPHah / auTUw | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| E1lYEe / SPHah | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| ycN18 / E1lYEe | path /  | {} | {"x":2.5,"y":3.125,"width":10,"height":8.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| HZtyO / ATKbt | frame / div | {"name":"div","context":"div"} | {"gap":8,"alignItems":"center"} |
| HBuo4 / HZtyO | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| D1B7gm / HBuo4 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":18,"height":20,"layout":"none"} |
| KEGMt / D1B7gm | path /  | {} | {"x":1.5,"y":9,"width":15,"height":2.25,"stroke":"$op-text-2","strokeWidth":1.5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| qkXUP / D1B7gm | path /  | {} | {"x":1.5,"y":3,"width":15,"height":12,"stroke":"$op-text-2","strokeWidth":1.5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| va5UO / HZtyO | text / Inbox | {"name":"Inbox","content":"Inbox","context":"h1"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| gsRXT / LZXqs | frame / div | {"name":"div","context":"div"} | {"gap":12,"alignItems":"center"} |
| ruEDS / gsRXT | frame / a | {"name":"a","context":"a"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","justifyContent":"center","alignItems":"center"} |
| TV6SP / ruEDS | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| XwfLu / TV6SP | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| LfO5O / XwfLu | path /  | {} | {"x":1.2500330805778503,"y":1.2497618049383163,"width":12.499893009662628,"height":12.49972440302372,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| z2Jegb / gsRXT | frame / button | {"name":"button","context":"button"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","gap":8,"padding":[0,12],"justifyContent":"center","alignItems":"center"} |
| uIMsf / z2Jegb | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| pI210 / uIMsf | rectangle /  | {} | {"cornerRadius":1.25,"x":1.875,"y":1.875,"width":11.25,"height":11.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| rsAlm / uIMsf | path /  | {} | {"x":5.625,"y":1.875,"width":3.75,"height":11.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| LYK7E / z2Jegb | text / Board | {"name":"Board","content":"Board","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| a1YEy / z2Jegb | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| l8nkwF / a1YEy | path /  | {} | {"x":3.75,"y":5.625,"width":7.5,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| hcc0D / gsRXT | frame / button | {"name":"button","context":"button"} | {"gap":8,"alignItems":"center"} |
| pXFtU / hcc0D | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| SvPc1 / pXFtU | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| dlm5b / SvPc1 | path /  | {} | {"x":1.75,"y":1.75,"width":10.5,"height":5.25,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| kCjcJ / SvPc1 | path /  | {} | {"x":1.75,"y":1.75,"width":10.5,"height":10.5,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| obPnJ / SvPc1 | path /  | {} | {"x":1.75,"y":9.333333333333334,"width":2.916666666666667,"height":2.916666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| T1Ykq / hcc0D | text / Last checked 09:52 | {"name":"Last checked 09:52","content":"Last checked 09:52","context":"span"} | {"fill":"$op-text-2","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| j9K5sf / gsRXT | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| YperG / gsRXT | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qx1Ct / YperG | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| pYzEe / qx1Ct | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| rn6ep / pYzEe | path /  | {} | {"x":1.8754446506500244,"y":1.25,"width":11.249791383743286,"height":12.499945163726807,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| CyEG7 / YperG | ellipse / span | {"name":"span","context":"span"} | {"layoutPosition":"absolute","x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| F1Lsg / gsRXT | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| zSzK0 / F1Lsg | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| X5ubq2 / gsRXT | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| FfiJC / X5ubq2 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| C3OR9 / gsRXT | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| ZZ9DU / C3OR9 | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| O2VgZ / ZZ9DU | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| W2dU2d / O2VgZ | path /  | {} | {"x":3.125,"y":9.375,"width":8.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| ButiH / O2VgZ | ellipse /  | {} | {"x":5,"y":1.875,"width":5,"height":5,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
