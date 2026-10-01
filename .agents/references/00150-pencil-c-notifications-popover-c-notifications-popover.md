# C · Notifications Popover

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| cDR6A / root | frame / C · Notifications Popover | {"name":"C · Notifications Popover","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":8600,"y":3529,"clip":true,"width":380,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-pop","offset":{"x":0,"y":12},"blur":32}],"layout":"vertical"} |
| D4BOjA / cDR6A | frame / Header | {"name":"Header"} | {"width":"fill_container","gap":8,"padding":[12,12,12,16],"alignItems":"center"} |
| B0XDo / D4BOjA | text / Title | {"name":"Title","content":"Notifications"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| HVYEK / D4BOjA | frame / Unread Count | {"name":"Unread Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| z68Dpq / HVYEK | text / N | {"name":"N","content":"3"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| d3aHHg / D4BOjA | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| Ls7un / D4BOjA | frame / Mark All Read | {"name":"Mark All Read"} | {"height":28,"cornerRadius":4,"gap":4,"padding":[0,8],"alignItems":"center"} |
| csfnx / Ls7un | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"check-check","library":"lucide","fill":"$op-accent-text"} |
| I5Eyl / Ls7un | text / L | {"name":"L","content":"Mark all read"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| jdRvW / D4BOjA | frame / Settings | {"name":"Settings"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| aiNqV / jdRvW | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| ikJNd / cDR6A | frame / Tabs | {"name":"Tabs"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[0,16]} |
| c3HWC5 / ikJNd | frame / Tab All | {"name":"Tab All"} | {"stroke":"$op-accent","strokeWidth":{"bottom":2},"gap":4,"padding":[8,0,12,0],"alignItems":"center"} |
| vA6BN / c3HWC5 | text / L | {"name":"L","content":"All"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| q9dgWZ / ikJNd | frame / Tab Mentions | {"name":"Tab Mentions"} | {"gap":4,"padding":[8,0,12,0],"alignItems":"center"} |
| e9pBxa / q9dgWZ | text / L | {"name":"L","content":"Mentions"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| PYqIV / q9dgWZ | frame / C | {"name":"C"} | {"height":16,"fill":"$op-sunken","cornerRadius":999,"padding":[0,4],"alignItems":"center"} |
| PpPZP / PYqIV | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| I8z45 / ikJNd | frame / Tab Agent | {"name":"Tab Agent"} | {"gap":4,"padding":[8,0,12,0],"alignItems":"center"} |
| ROC7x / I8z45 | text / L | {"name":"L","content":"Agent"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| J25Vds / I8z45 | frame / C | {"name":"C"} | {"height":16,"fill":"$op-sunken","cornerRadius":999,"padding":[0,4],"alignItems":"center"} |
| QZ4cn / J25Vds | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| MNIoc / cDR6A | frame / List | {"name":"List"} | {"width":"fill_container","layout":"vertical","padding":[4,0]} |
| qyNpx / MNIoc | frame / Group Today | {"name":"Group Today"} | {"width":"fill_container","padding":[12,16,4,16]} |
| r0JHD / qyNpx | text / L | {"name":"L","content":"TODAY"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| SHZqd / MNIoc | frame / Item · Mention | {"name":"Item · Mention"} | {"width":"fill_container","fill":"$op-sunken","gap":12,"padding":[12,16]} |
| R0QTg / SHZqd | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-tint-2","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| edUMX / R0QTg | text / I | {"name":"I","content":"AC"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| KoC1M / SHZqd | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| OsCOA / KoC1M | text / Text | {"name":"Text","content":"Ana Cruz mentioned you in Warehouse move — dock schedule"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| UwQkC / KoC1M | frame / Quote | {"name":"Quote"} | {"width":"fill_container","stroke":"$op-border-strong","strokeWidth":{"left":2},"padding":[4,0,4,12]} |
| l9o9I / UwQkC | text / Q | {"name":"Q","content":"@Mila can you confirm we print the labels at A3?"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| PzGn0 / KoC1M | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| N7UbU / PzGn0 | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| opCpD / N7UbU | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-communicate","width":6,"height":6} |
| UNp8z / N7UbU | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| d1thrx / PzGn0 | text / Time | {"name":"Time","content":"12 min ago"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| mPU6l / SHZqd | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| mBFzx / mPU6l | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| l4rHi / MNIoc | frame / Item · Agent | {"name":"Item · Agent"} | {"width":"fill_container","fill":"$op-sunken","gap":12,"padding":[12,16]} |
| WLRME / l4rHi | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| AdhmN / WLRME | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| IVSez / l4rHi | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| rAf3z / IVSez | text / Text | {"name":"Text","content":"Inbox Agent finished drafting your reply to Ana Cruz"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| mxKwi / IVSez | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| wjnMH / mxKwi | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| ubXQc / wjnMH | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-communicate","width":6,"height":6} |
| DYVRw / wjnMH | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Ykpg7 / mxKwi | text / Time | {"name":"Time","content":"18 min ago"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| u1wovT / IVSez | frame / Actions | {"name":"Actions"} | {"gap":8,"padding":[4,0,0,0]} |
| Pl48l / u1wovT | frame / Button · Review draft | {"name":"Button · Review draft"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| DVvRc / Pl48l | text / L | {"name":"L","content":"Review draft"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| a3UxiB / l4rHi | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| sPlM4 / a3UxiB | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| RUFIy / MNIoc | frame / Item · Approval | {"name":"Item · Approval"} | {"width":"fill_container","fill":"$op-sunken","gap":12,"padding":[12,16]} |
| kOJZM / RUFIy | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$fam-operate","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| GZztd / kOJZM | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"calculator","library":"lucide","fill":"#FFFFFF"} |
| LdXfz / RUFIy | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| PtWfi / LdXfz | text / Text | {"name":"Text","content":"Invoice NW-4471 (₱48,200) is waiting for your approval"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| q1v9wg / LdXfz | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| KJKiD / q1v9wg | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| Y8cZc0 / KJKiD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-operate","width":6,"height":6} |
| rWHfp / KJKiD | text / L | {"name":"L","content":"Accounting"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| r45aN5 / q1v9wg | text / Time | {"name":"Time","content":"1 hr ago"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| GwnTj / LdXfz | frame / Actions | {"name":"Actions"} | {"gap":8,"padding":[4,0,0,0]} |
| BAiRK / GwnTj | frame / Button · Approve | {"name":"Button · Approve"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| h1915R / BAiRK | text / L | {"name":"L","content":"Approve"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| h3ONe4 / GwnTj | frame / Button · View | {"name":"Button · View"} | {"height":28,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,16],"alignItems":"center"} |
| F5QdZ / h3ONe4 | text / L | {"name":"L","content":"View"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| QUNMO / RUFIy | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| JGN4M / QUNMO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| b0dmzu / MNIoc | frame / Group Earlier | {"name":"Group Earlier"} | {"width":"fill_container","padding":[12,16,4,16]} |
| Hs9PO / b0dmzu | text / L | {"name":"L","content":"EARLIER"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| L1VvI / MNIoc | frame / Item · Security | {"name":"Item · Security"} | {"width":"fill_container","gap":12,"padding":[12,16]} |
| nJGV7 / L1VvI | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| BVMWp / nJGV7 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"shield-check","library":"lucide","fill":"$op-text-2"} |
| C3KRB / L1VvI | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| lhC0A / C3KRB | text / Text | {"name":"Text","content":"New sign-in to your account from Chrome on macOS · Manila"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| zAhhE / C3KRB | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| W5RKSy / zAhhE | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| Fz4bC / W5RKSy | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":6,"height":6} |
| INVqp / W5RKSy | text / L | {"name":"L","content":"Account"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| YZ5HY / zAhhE | text / Time | {"name":"Time","content":"Yesterday, 18:42"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| LrrJ0 / C3KRB | text / Link | {"name":"Link","content":"Not you? Secure your account"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| wMuMj / L1VvI | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| FI3IM / MNIoc | frame / Item · Assignment | {"name":"Item · Assignment"} | {"width":"fill_container","gap":12,"padding":[12,16]} |
| xnB3s / FI3IM | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-tint-2","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| aCoDH / xnB3s | text / I | {"name":"I","content":"RD"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l3rf9 / FI3IM | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| h2lJCQ / l3rf9 | text / Text | {"name":"Text","content":"Rina Delgado assigned you Supplier onboarding documents"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| YtnIO / l3rf9 | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| kXElq / YtnIO | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| F5wsC / kXElq | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-communicate","width":6,"height":6} |
| kW4TT / kXElq | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ZY00c / YtnIO | text / Time | {"name":"Time","content":"Mon"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| ALWAY / FI3IM | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| waQNO / cDR6A | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":4,"padding":[12,16],"justifyContent":"center","alignItems":"center"} |
| wboEJ / waQNO | text / L | {"name":"L","content":"View all activity"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| dND1I / waQNO | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
