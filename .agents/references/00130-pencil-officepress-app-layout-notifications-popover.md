# OfficePress App Layout / Section · Header actions / Screens / Shot · Desktop · Notifications / Desktop · Notifications / Notifications Popover

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| l4H3w / U2gTCu | frame / Notifications Popover | {"name":"Notifications Popover","theme":{"mode":"light","family":"communicate"}} | {"layoutPosition":"absolute","x":912,"y":60,"clip":true,"width":380,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-pop","offset":{"x":0,"y":12},"blur":32}],"layout":"vertical"} |
| l4H3w/D4BOjA / l4H3w | frame / Header | {"name":"Header"} | {"width":"fill_container","gap":8,"padding":[12,12,12,16],"alignItems":"center"} |
| l4H3w/B0XDo / l4H3w/D4BOjA | text / Title | {"name":"Title","content":"Notifications"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| l4H3w/HVYEK / l4H3w/D4BOjA | frame / Unread Count | {"name":"Unread Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| l4H3w/z68Dpq / l4H3w/HVYEK | text / N | {"name":"N","content":"3"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/d3aHHg / l4H3w/D4BOjA | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| l4H3w/Ls7un / l4H3w/D4BOjA | frame / Mark All Read | {"name":"Mark All Read"} | {"height":28,"cornerRadius":4,"gap":4,"padding":[0,8],"alignItems":"center"} |
| l4H3w/csfnx / l4H3w/Ls7un | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"check-check","library":"lucide","fill":"$op-accent-text"} |
| l4H3w/I5Eyl / l4H3w/Ls7un | text / L | {"name":"L","content":"Mark all read"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/jdRvW / l4H3w/D4BOjA | frame / Settings | {"name":"Settings"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| l4H3w/aiNqV / l4H3w/jdRvW | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| l4H3w/ikJNd / l4H3w | frame / Tabs | {"name":"Tabs"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":16,"padding":[0,16]} |
| l4H3w/c3HWC5 / l4H3w/ikJNd | frame / Tab All | {"name":"Tab All"} | {"stroke":"$op-accent","strokeWidth":{"bottom":2},"gap":4,"padding":[8,0,12,0],"alignItems":"center"} |
| l4H3w/vA6BN / l4H3w/c3HWC5 | text / L | {"name":"L","content":"All"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/q9dgWZ / l4H3w/ikJNd | frame / Tab Mentions | {"name":"Tab Mentions"} | {"gap":4,"padding":[8,0,12,0],"alignItems":"center"} |
| l4H3w/e9pBxa / l4H3w/q9dgWZ | text / L | {"name":"L","content":"Mentions"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/PYqIV / l4H3w/q9dgWZ | frame / C | {"name":"C"} | {"height":16,"fill":"$op-sunken","cornerRadius":999,"padding":[0,4],"alignItems":"center"} |
| l4H3w/PpPZP / l4H3w/PYqIV | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/I8z45 / l4H3w/ikJNd | frame / Tab Agent | {"name":"Tab Agent"} | {"gap":4,"padding":[8,0,12,0],"alignItems":"center"} |
| l4H3w/ROC7x / l4H3w/I8z45 | text / L | {"name":"L","content":"Agent"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/J25Vds / l4H3w/I8z45 | frame / C | {"name":"C"} | {"height":16,"fill":"$op-sunken","cornerRadius":999,"padding":[0,4],"alignItems":"center"} |
| l4H3w/QZ4cn / l4H3w/J25Vds | text / N | {"name":"N","content":"1"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/MNIoc / l4H3w | frame / List | {"name":"List"} | {"width":"fill_container","layout":"vertical","padding":[4,0]} |
| l4H3w/qyNpx / l4H3w/MNIoc | frame / Group Today | {"name":"Group Today"} | {"width":"fill_container","padding":[12,16,4,16]} |
| l4H3w/r0JHD / l4H3w/qyNpx | text / L | {"name":"L","content":"TODAY"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| l4H3w/SHZqd / l4H3w/MNIoc | frame / Item · Mention | {"name":"Item · Mention"} | {"width":"fill_container","fill":"$op-sunken","gap":12,"padding":[12,16]} |
| l4H3w/R0QTg / l4H3w/SHZqd | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-tint-2","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| l4H3w/edUMX / l4H3w/R0QTg | text / I | {"name":"I","content":"AC"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/KoC1M / l4H3w/SHZqd | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| l4H3w/OsCOA / l4H3w/KoC1M | text / Text | {"name":"Text","content":"Ana Cruz mentioned you in Warehouse move — dock schedule"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| l4H3w/UwQkC / l4H3w/KoC1M | frame / Quote | {"name":"Quote"} | {"width":"fill_container","stroke":"$op-border-strong","strokeWidth":{"left":2},"padding":[4,0,4,12]} |
| l4H3w/l9o9I / l4H3w/UwQkC | text / Q | {"name":"Q","content":"@Mila can you confirm we print the labels at A3?"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| l4H3w/PzGn0 / l4H3w/KoC1M | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| l4H3w/N7UbU / l4H3w/PzGn0 | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| l4H3w/opCpD / l4H3w/N7UbU | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-communicate","width":6,"height":6} |
| l4H3w/UNp8z / l4H3w/N7UbU | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/d1thrx / l4H3w/PzGn0 | text / Time | {"name":"Time","content":"12 min ago"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l4H3w/mPU6l / l4H3w/SHZqd | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| l4H3w/mBFzx / l4H3w/mPU6l | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| l4H3w/l4rHi / l4H3w/MNIoc | frame / Item · Agent | {"name":"Item · Agent"} | {"width":"fill_container","fill":"$op-sunken","gap":12,"padding":[12,16]} |
| l4H3w/WLRME / l4H3w/l4rHi | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| l4H3w/AdhmN / l4H3w/WLRME | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| l4H3w/IVSez / l4H3w/l4rHi | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| l4H3w/rAf3z / l4H3w/IVSez | text / Text | {"name":"Text","content":"Inbox Agent finished drafting your reply to Ana Cruz"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| l4H3w/mxKwi / l4H3w/IVSez | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| l4H3w/wjnMH / l4H3w/mxKwi | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| l4H3w/ubXQc / l4H3w/wjnMH | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-communicate","width":6,"height":6} |
| l4H3w/DYVRw / l4H3w/wjnMH | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/Ykpg7 / l4H3w/mxKwi | text / Time | {"name":"Time","content":"18 min ago"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l4H3w/u1wovT / l4H3w/IVSez | frame / Actions | {"name":"Actions"} | {"gap":8,"padding":[4,0,0,0]} |
| l4H3w/Pl48l / l4H3w/u1wovT | frame / Button · Review draft | {"name":"Button · Review draft"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| l4H3w/DVvRc / l4H3w/Pl48l | text / L | {"name":"L","content":"Review draft"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/a3UxiB / l4H3w/l4rHi | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| l4H3w/sPlM4 / l4H3w/a3UxiB | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| l4H3w/RUFIy / l4H3w/MNIoc | frame / Item · Approval | {"name":"Item · Approval"} | {"width":"fill_container","fill":"$op-sunken","gap":12,"padding":[12,16]} |
| l4H3w/kOJZM / l4H3w/RUFIy | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$fam-operate","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| l4H3w/GZztd / l4H3w/kOJZM | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"calculator","library":"lucide","fill":"#FFFFFF"} |
| l4H3w/LdXfz / l4H3w/RUFIy | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| l4H3w/PtWfi / l4H3w/LdXfz | text / Text | {"name":"Text","content":"Invoice NW-4471 (₱48,200) is waiting for your approval"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| l4H3w/q1v9wg / l4H3w/LdXfz | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| l4H3w/KJKiD / l4H3w/q1v9wg | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| l4H3w/Y8cZc0 / l4H3w/KJKiD | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-operate","width":6,"height":6} |
| l4H3w/rWHfp / l4H3w/KJKiD | text / L | {"name":"L","content":"Accounting"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/r45aN5 / l4H3w/q1v9wg | text / Time | {"name":"Time","content":"1 hr ago"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l4H3w/GwnTj / l4H3w/LdXfz | frame / Actions | {"name":"Actions"} | {"gap":8,"padding":[4,0,0,0]} |
| l4H3w/BAiRK / l4H3w/GwnTj | frame / Button · Approve | {"name":"Button · Approve"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| l4H3w/h1915R / l4H3w/BAiRK | text / L | {"name":"L","content":"Approve"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/h3ONe4 / l4H3w/GwnTj | frame / Button · View | {"name":"Button · View"} | {"height":28,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,16],"alignItems":"center"} |
| l4H3w/F5QdZ / l4H3w/h3ONe4 | text / L | {"name":"L","content":"View"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/QUNMO / l4H3w/RUFIy | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| l4H3w/JGN4M / l4H3w/QUNMO | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":8,"height":8} |
| l4H3w/b0dmzu / l4H3w/MNIoc | frame / Group Earlier | {"name":"Group Earlier"} | {"width":"fill_container","padding":[12,16,4,16]} |
| l4H3w/Hs9PO / l4H3w/b0dmzu | text / L | {"name":"L","content":"EARLIER"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| l4H3w/L1VvI / l4H3w/MNIoc | frame / Item · Security | {"name":"Item · Security"} | {"width":"fill_container","gap":12,"padding":[12,16]} |
| l4H3w/nJGV7 / l4H3w/L1VvI | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| l4H3w/BVMWp / l4H3w/nJGV7 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"shield-check","library":"lucide","fill":"$op-text-2"} |
| l4H3w/C3KRB / l4H3w/L1VvI | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| l4H3w/lhC0A / l4H3w/C3KRB | text / Text | {"name":"Text","content":"New sign-in to your account from Chrome on macOS · Manila"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| l4H3w/zAhhE / l4H3w/C3KRB | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| l4H3w/W5RKSy / l4H3w/zAhhE | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| l4H3w/Fz4bC / l4H3w/W5RKSy | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$op-text-2","width":6,"height":6} |
| l4H3w/INVqp / l4H3w/W5RKSy | text / L | {"name":"L","content":"Account"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/YZ5HY / l4H3w/zAhhE | text / Time | {"name":"Time","content":"Yesterday, 18:42"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l4H3w/LrrJ0 / l4H3w/C3KRB | text / Link | {"name":"Link","content":"Not you? Secure your account"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l4H3w/wMuMj / l4H3w/L1VvI | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| l4H3w/FI3IM / l4H3w/MNIoc | frame / Item · Assignment | {"name":"Item · Assignment"} | {"width":"fill_container","gap":12,"padding":[12,16]} |
| l4H3w/xnB3s / l4H3w/FI3IM | frame / Lead | {"name":"Lead"} | {"width":32,"height":32,"fill":"$op-tint-2","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| l4H3w/aCoDH / l4H3w/xnB3s | text / I | {"name":"I","content":"RD"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/l3rf9 / l4H3w/FI3IM | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":4} |
| l4H3w/h2lJCQ / l4H3w/l3rf9 | text / Text | {"name":"Text","content":"Rina Delgado assigned you Supplier onboarding documents"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.45,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| l4H3w/YtnIO / l4H3w/l3rf9 | frame / Meta | {"name":"Meta"} | {"gap":4,"alignItems":"center"} |
| l4H3w/kXElq / l4H3w/YtnIO | frame / App | {"name":"App"} | {"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| l4H3w/F5wsC / l4H3w/kXElq | rectangle / Swatch | {"name":"Swatch"} | {"cornerRadius":4,"fill":"$fam-communicate","width":6,"height":6} |
| l4H3w/kW4TT / l4H3w/kXElq | text / L | {"name":"L","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l4H3w/ZY00c / l4H3w/YtnIO | text / Time | {"name":"Time","content":"Mon"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l4H3w/ALWAY / l4H3w/FI3IM | frame / Unread | {"name":"Unread"} | {"width":8,"height":32,"justifyContent":"center","alignItems":"center"} |
| l4H3w/waQNO / l4H3w | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":4,"padding":[12,16],"justifyContent":"center","alignItems":"center"} |
| l4H3w/wboEJ / l4H3w/waQNO | text / L | {"name":"L","content":"View all activity"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| l4H3w/dND1I / l4H3w/waQNO | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| d9HiDG / LAnCO | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| TGtwb / d9HiDG | text / Label | {"name":"Label","content":"Desktop · Notifications"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| i0dRmo / d9HiDG | text / Note | {"name":"Note","content":"Anchored under the bell, right edge aligned to it, 380 px. Account-wide: items from other apps carry their app tag. Unread items are tinted with a green dot; approvals and agent results can be acted on in place."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
