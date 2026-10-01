# Inbox Board — Light / header

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| g1YPY / uNSQ6 | frame / header | {"name":"header","context":"header"} | {"x":260,"y":0,"width":1180,"height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"strokeAlignment":"inner","gap":12,"padding":[0,16],"justifyContent":"space_between","alignItems":"center"} |
| x9V0lh / g1YPY | frame / div | {"name":"div","context":"div"} | {"gap":12,"alignItems":"center"} |
| RzPlE / x9V0lh | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| tqoRh / RzPlE | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| ZGv3T / tqoRh | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| N28a85 / ZGv3T | path /  | {} | {"x":2.5,"y":3.125,"width":10,"height":8.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| qrwcl / x9V0lh | frame / div | {"name":"div","context":"div"} | {"gap":8,"alignItems":"center"} |
| CU220 / qrwcl | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| zMlm5 / CU220 | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":18,"height":20,"layout":"none"} |
| yOiw5 / zMlm5 | path /  | {} | {"x":1.5,"y":9,"width":15,"height":2.25,"stroke":"$op-text-2","strokeWidth":1.5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| BzJFA / zMlm5 | path /  | {} | {"x":1.5,"y":3,"width":15,"height":12,"stroke":"$op-text-2","strokeWidth":1.5,"strokeLinejoin":"round","strokeLinecap":"round"} |
| C1dQMU / qrwcl | text / Inbox | {"name":"Inbox","content":"Inbox","context":"h1"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| GMCDC / g1YPY | frame / div | {"name":"div","context":"div"} | {"gap":12,"alignItems":"center"} |
| Y4KA4I / GMCDC | frame / a | {"name":"a","context":"a"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","justifyContent":"center","alignItems":"center"} |
| kaCKE / Y4KA4I | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| Nouzj / kaCKE | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| oO8PX / Nouzj | path /  | {} | {"x":1.2500330805778503,"y":1.2497618049383163,"width":12.499893009662628,"height":12.49972440302372,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| bPACV / GMCDC | frame / button | {"name":"button","context":"button"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"strokeAlignment":"inner","gap":8,"padding":[0,12],"justifyContent":"center","alignItems":"center"} |
| Xp4Ok / bPACV | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| S3omBh / Xp4Ok | rectangle /  | {} | {"cornerRadius":1.25,"x":1.875,"y":1.875,"width":11.25,"height":11.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| T0nZUY / Xp4Ok | path /  | {} | {"x":5.625,"y":1.875,"width":3.75,"height":11.25,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| tGCwh / bPACV | text / Board | {"name":"Board","content":"Board","context":"span"} | {"fill":"$op-text","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| QW6Ou / bPACV | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| GpyxO / QW6Ou | path /  | {} | {"x":3.75,"y":5.625,"width":7.5,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| OpK2L / GMCDC | frame / button | {"name":"button","context":"button"} | {"gap":8,"alignItems":"center"} |
| aVNKk / OpK2L | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| WQOWo / aVNKk | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":14,"height":14,"layout":"none"} |
| NjKWD / WQOWo | path /  | {} | {"x":1.75,"y":1.75,"width":10.5,"height":5.25,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| K5BaWi / WQOWo | path /  | {} | {"x":1.75,"y":1.75,"width":10.5,"height":10.5,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| onyHS / WQOWo | path /  | {} | {"x":1.75,"y":9.333333333333334,"width":2.916666666666667,"height":2.916666666666667,"stroke":"$op-text-2","strokeWidth":1.1666666666666667,"strokeLinejoin":"round","strokeLinecap":"round"} |
| JXxRi / OpK2L | text / Last checked 09:52 | {"name":"Last checked 09:52","content":"Last checked 09:52","context":"span"} | {"fill":"$op-text-2","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| btCIj / GMCDC | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24} |
| b36WnO / GMCDC | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| SyFWa / b36WnO | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| i866v / SyFWa | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| X9009 / i866v | path /  | {} | {"x":1.8754446506500244,"y":1.25,"width":11.249791383743286,"height":12.499945163726807,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| yLthH / b36WnO | ellipse / span | {"name":"span","context":"span"} | {"layoutPosition":"absolute","x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| W8EeRx / GMCDC | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| YXxWp / W8EeRx | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| Y4hKB / GMCDC | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| zCXW9 / Y4hKB | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| SyhGA / GMCDC | frame / button | {"name":"button","context":"button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| mtdAZ / SyhGA | frame / span | {"name":"span","context":"span"} | {"layout":"vertical","justifyContent":"center","alignItems":"center"} |
| r4VpP / mtdAZ | frame / svg | {"name":"svg","context":"svg"} | {"clip":true,"width":15,"height":15,"layout":"none"} |
| h9FCke / r4VpP | path /  | {} | {"x":3.125,"y":9.375,"width":8.75,"height":3.75,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
| ysZlf / r4VpP | ellipse /  | {} | {"x":5,"y":1.875,"width":5,"height":5,"stroke":"$op-text","strokeWidth":1.25,"strokeLinejoin":"round","strokeLinecap":"round"} |
