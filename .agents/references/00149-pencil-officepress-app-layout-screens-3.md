# OfficePress App Layout / Section · Authentication / Screens 3

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| w4sITo / piYiD | frame / Screens 3 | {"name":"Screens 3"} | {"width":"fill_container","gap":40} |
| m7KIK / w4sITo | frame / Shot · Mobile · Sign in | {"name":"Shot · Mobile · Sign in"} | {"layout":"vertical","gap":14} |
| V6zSuW / m7KIK | frame / Mobile · Sign in | {"name":"Mobile · Sign in","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":390,"height":844,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| AHt2a / V6zSuW | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":64,"gap":12,"padding":[0,16],"alignItems":"center"} |
| wkznx / AHt2a | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| liLjH / wkznx | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| LJESk / AHt2a | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| FjJD0 / AHt2a | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| f3bBg / FjJD0 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| qveEF / V6zSuW | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","padding":[0,20],"justifyContent":"center","alignItems":"center"} |
| ARExI / qveEF | frame / Column | {"name":"Column"} | {"width":"fill_container","layout":"vertical","gap":24} |
| eos1g / ARExI | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| TYHSB / eos1g | text / Title | {"name":"Title","content":"Welcome back"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| d9K1uv / eos1g | text / Desc | {"name":"Desc","content":"Choose how you'd like to sign in to Resourcing."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| f5b4H / ARExI | frame / Methods | {"name":"Methods"} | {"width":"fill_container","layout":"vertical","gap":8} |
| E18MS / f5b4H | frame / Method · Continue with username | {"name":"Method · Continue with username"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"gap":12,"padding":[16,20],"alignItems":"center"} |
| Y14En / E18MS | frame / Icon Box | {"name":"Icon Box"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| OYhOe / Y14En | icon / I | {"name":"I"} | {"width":17,"height":17,"icon":"at-sign","library":"lucide","fill":"$op-accent-text"} |
| eHuTh / E18MS | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| oAJ5x / eHuTh | text / T | {"name":"T","content":"Continue with username"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| LXVYg / eHuTh | text / D | {"name":"D","content":"Workspace username and password"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Z698V / E18MS | icon / Arrow | {"name":"Arrow"} | {"width":16,"height":16,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| Bx0R2 / f5b4H | frame / Method · Continue with email | {"name":"Method · Continue with email"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"gap":12,"padding":[16,20],"alignItems":"center"} |
| NG0P4 / Bx0R2 | frame / Icon Box | {"name":"Icon Box"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| h7TX7m / NG0P4 | icon / I | {"name":"I"} | {"width":17,"height":17,"icon":"mail","library":"lucide","fill":"$op-accent-text"} |
| NUhMh / Bx0R2 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| g3ssB / NUhMh | text / T | {"name":"T","content":"Continue with email"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| m5uqq / NUhMh | text / D | {"name":"D","content":"Password, code, or magic link"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| h23heI / Bx0R2 | icon / Arrow | {"name":"Arrow"} | {"width":16,"height":16,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| U61tMm / V6zSuW | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| kc1IE / U61tMm | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| DNrHl / m7KIK | frame / Caption | {"name":"Caption"} | {"width":390,"layout":"vertical","gap":4} |
| gpJe2 / DNrHl | text / Label | {"name":"Label","content":"Mobile · Sign in"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| zB4uL / DNrHl | text / Note | {"name":"Note","content":"Same column, full width with 20 px margins."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| VLx9H / w4sITo | frame / Shot · Mobile · Email (dark) | {"name":"Shot · Mobile · Email (dark)"} | {"layout":"vertical","gap":14} |
| DvyZy / VLx9H | frame / Mobile · Email (dark) | {"name":"Mobile · Email (dark)","theme":{"mode":"dark","family":"operate"}} | {"clip":true,"width":390,"height":844,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| ZqnMR / DvyZy | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":64,"gap":12,"padding":[0,16],"alignItems":"center"} |
| wKaMr / ZqnMR | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| EfnXO / wKaMr | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| PCsqY / ZqnMR | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| ca1Fy / ZqnMR | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| w1F1h / ca1Fy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| stNap / DvyZy | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","padding":[0,20],"justifyContent":"center","alignItems":"center"} |
| OQ8rn / stNap | frame / Column | {"name":"Column"} | {"width":"fill_container","layout":"vertical","gap":24} |
| oFKpw / OQ8rn | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| WNqs4 / oFKpw | frame / Back | {"name":"Back"} | {"gap":4,"padding":[0,0,8,0],"alignItems":"center"} |
| pda5w / WNqs4 | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| rHaHh / WNqs4 | text / T | {"name":"T","content":"All options"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| UBQ2K / oFKpw | text / Title | {"name":"Title","content":"Sign in with email"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| LUdeu / oFKpw | text / Desc | {"name":"Desc","content":"We'll use this to find your workspace account."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| dt5AS / OQ8rn | frame / Method Tabs | {"name":"Method Tabs"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":4,"alignItems":"center"} |
| RTWGl / dt5AS | frame / Password | {"name":"Password"} | {"width":"fill_container","height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| F7Rd9 / RTWGl | text / L | {"name":"L","content":"Password"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| FcrJK / dt5AS | frame / Code | {"name":"Code"} | {"width":"fill_container","height":32,"fill":"$op-surface","cornerRadius":999,"effect":{"type":"shadow","shadowType":"outer","color":"#0000001A","offset":{"x":0,"y":1},"blur":2},"justifyContent":"center","alignItems":"center"} |
| bop7b / FcrJK | text / L | {"name":"L","content":"Code"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| eDdZR / dt5AS | frame / Link | {"name":"Link"} | {"width":"fill_container","height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| UnHMq / eDdZR | text / L | {"name":"L","content":"Link"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| m3peY / OQ8rn | frame / Field · Email | {"name":"Field · Email"} | {"width":"fill_container","layout":"vertical","gap":4} |
| ifzcG / m3peY | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| G901V / ifzcG | text / Label | {"name":"Label","content":"Email"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| HjshS / m3peY | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| ToY6W / HjshS | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| Phgh9 / HjshS | text / Value | {"name":"Value","content":"mila.reyes@officepress.ph"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| ZFiXB / OQ8rn | frame / Primary · Send me a code | {"name":"Primary · Send me a code"} | {"width":"fill_container","height":44,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"justifyContent":"center","alignItems":"center"} |
| f3mBwc / ZFiXB | text / L | {"name":"L","content":"Send me a code"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eHVsa / DvyZy | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| Up3AW / eHVsa | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| m3ybhP / VLx9H | frame / Caption | {"name":"Caption"} | {"width":390,"layout":"vertical","gap":4} |
| OFiGe / m3ybhP | text / Label | {"name":"Label","content":"Mobile · Email (dark)"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| h4URR / m3ybhP | text / Note | {"name":"Note","content":"Dark mode follows the device until the toggle is used; the choice is remembered per app."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| DkloK / w4sITo | frame / Shot · Mobile · Two-factor (Inbox) | {"name":"Shot · Mobile · Two-factor (Inbox)"} | {"layout":"vertical","gap":14} |
| EkiZQ / DkloK | frame / Mobile · Two-factor (Inbox) | {"name":"Mobile · Two-factor (Inbox)","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":390,"height":844,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| I8aPBA / EkiZQ | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":64,"gap":12,"padding":[0,16],"alignItems":"center"} |
| cbJLk / I8aPBA | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| jfVdc / cbJLk | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| y7oLQ / I8aPBA | text / App Name | {"name":"App Name","content":"Inbox"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| ZVbWM / I8aPBA | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| sREMW / ZVbWM | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| lWLaw / EkiZQ | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","padding":[0,20],"justifyContent":"center","alignItems":"center"} |
| b9brKn / lWLaw | frame / Column | {"name":"Column"} | {"width":"fill_container","layout":"vertical","gap":24} |
| n3hYB / b9brKn | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| fENXQ / n3hYB | frame / Back | {"name":"Back"} | {"gap":4,"padding":[0,0,8,0],"alignItems":"center"} |
| Hxv7G / fENXQ | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| sq5hv / fENXQ | text / T | {"name":"T","content":"Use a different account"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| cyTX8 / n3hYB | text / Title | {"name":"Title","content":"Enter your code"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| djZqp / n3hYB | text / Desc | {"name":"Desc","content":"Enter the 6-digit code from your authenticator app."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| v6HfZ7 / b9brKn | frame / Code | {"name":"Code"} | {"width":"fill_container","gap":4} |
| rztjz / v6HfZ7 | frame / Digit | {"name":"Digit"} | {"width":"fill_container","height":52,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| X1bdEM / rztjz | text / D | {"name":"D","content":"2"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| QFVQe / v6HfZ7 | frame / Digit | {"name":"Digit"} | {"width":"fill_container","height":52,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| wkQDG / QFVQe | text / D | {"name":"D","content":"7"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| JJiE2 / v6HfZ7 | frame / Digit | {"name":"Digit"} | {"width":"fill_container","height":52,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-accent","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| klZxA / v6HfZ7 | frame / Digit | {"name":"Digit"} | {"width":"fill_container","height":52,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| epEGs / v6HfZ7 | frame / Digit | {"name":"Digit"} | {"width":"fill_container","height":52,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| p90Cd / v6HfZ7 | frame / Digit | {"name":"Digit"} | {"width":"fill_container","height":52,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Oy22D / b9brKn | frame / Primary · Verify | {"name":"Primary · Verify"} | {"width":"fill_container","height":44,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"justifyContent":"center","alignItems":"center"} |
| OCy8L / Oy22D | text / L | {"name":"L","content":"Verify"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| pmZgy / EkiZQ | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| HTkPh / pmZgy | text / T | {"name":"T","content":"Inbox · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| TlGlw / DkloK | frame / Caption | {"name":"Caption"} | {"width":390,"layout":"vertical","gap":4} |
| aJCC1 / TlGlw | text / Label | {"name":"Label","content":"Mobile · Two-factor (Inbox)"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| rsIPs / TlGlw | text / Note | {"name":"Note","content":"Another family, same page: the Inbox app (Communicate)."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
