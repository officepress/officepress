# OfficePress App Layout / Section · Authentication — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| piYiD / WASH2 | frame / Section · Authentication | {"name":"Section · Authentication"} | {"width":"fill_container","layout":"vertical","gap":28} |
| A8QCCP / piYiD | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| AutMi / A8QCCP | text / Title | {"name":"Title","content":"Authentication"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":32,"fontWeight":"700","letterSpacing":-0.8} |
| CyQy3 / A8QCCP | text / Desc | {"name":"Desc","content":"One page set for every app, themed by the app's family (shown here as Resourcing, Operate). Same frame on every step: brand top-left, theme toggle top-right, a 400 px column centred, a one-line footer. Display type 28/700 is used only here."} | {"fill":"$muted","textGrowth":"fixed-width","width":900,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| HoJLP / piYiD | frame / Screens | {"name":"Screens"} | {"width":"fill_container","gap":40} |
| OxkR3 / HoJLP | frame / Shot · 1 · Sign in | {"name":"Shot · 1 · Sign in"} | {"layout":"vertical","gap":14} |
| MRJBl / OxkR3 | frame / 1 · Sign in | {"name":"1 · Sign in","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| q0XFvq / MRJBl | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":80,"gap":12,"padding":[0,32],"alignItems":"center"} |
| F35nbN / q0XFvq | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| Yfh6f / F35nbN | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| neVHb / q0XFvq | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| A9jrp / q0XFvq | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| BzKZi / A9jrp | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| Q4lQT / MRJBl | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","justifyContent":"center","alignItems":"center"} |
| bVIhM / Q4lQT | frame / Column | {"name":"Column"} | {"width":400,"layout":"vertical","gap":24} |
| t2F38 / bVIhM | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| V2PaqL / t2F38 | text / Title | {"name":"Title","content":"Welcome back"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| iFXwf / t2F38 | text / Desc | {"name":"Desc","content":"Choose how you'd like to sign in to Resourcing."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| BDAUN / bVIhM | frame / Methods | {"name":"Methods"} | {"width":"fill_container","layout":"vertical","gap":8} |
| kKus9 / BDAUN | frame / Method · Continue with username | {"name":"Method · Continue with username"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"gap":12,"padding":[16,20],"alignItems":"center"} |
| pzDL8 / kKus9 | frame / Icon Box | {"name":"Icon Box"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| F5PzYd / pzDL8 | icon / I | {"name":"I"} | {"width":17,"height":17,"icon":"at-sign","library":"lucide","fill":"$op-accent-text"} |
| VNzL3 / kKus9 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| A4Rq5 / VNzL3 | text / T | {"name":"T","content":"Continue with username"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| VA9Xi / VNzL3 | text / D | {"name":"D","content":"Your workspace username and password"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| e8mg7S / kKus9 | icon / Arrow | {"name":"Arrow"} | {"width":16,"height":16,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| qwsog / BDAUN | frame / Method · Continue with email | {"name":"Method · Continue with email"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"gap":12,"padding":[16,20],"alignItems":"center"} |
| Y6TIag / qwsog | frame / Icon Box | {"name":"Icon Box"} | {"width":36,"height":36,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| q8n6Lt / Y6TIag | icon / I | {"name":"I"} | {"width":17,"height":17,"icon":"mail","library":"lucide","fill":"$op-accent-text"} |
| olLaq / qwsog | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| h44AjO / olLaq | text / T | {"name":"T","content":"Continue with email"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| mxclV / olLaq | text / D | {"name":"D","content":"Password, one-time code, or magic link"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| oku6s / qwsog | icon / Arrow | {"name":"Arrow"} | {"width":16,"height":16,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| h2h4f / bVIhM | frame / Links | {"name":"Links"} | {"width":"fill_container","gap":4,"justifyContent":"center","alignItems":"center"} |
| pSxa5 / h2h4f | text / Link | {"name":"Link","content":"New to the workspace?"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| i42sv / h2h4f | text / Link | {"name":"Link","content":"Ask an admin for an invite"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| uZ9CN / MRJBl | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| q85jK / uZ9CN | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| pPoCg / OxkR3 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| h0cB5W / pPoCg | text / Label | {"name":"Label","content":"1 · Sign in"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| TPNhv / pPoCg | text / Note | {"name":"Note","content":"Pick a method. Methods the workspace hasn't enabled are hidden; SSO appears first when configured."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| kuLwt / HoJLP | frame / Shot · 2 · Email | {"name":"Shot · 2 · Email"} | {"layout":"vertical","gap":14} |
| flPOX / kuLwt | frame / 2 · Email | {"name":"2 · Email","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| MQuk6 / flPOX | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":80,"gap":12,"padding":[0,32],"alignItems":"center"} |
| Rkdnt / MQuk6 | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| fS5ej / Rkdnt | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| XB8is / MQuk6 | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| amwum / MQuk6 | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| s8Rvy4 / amwum | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| G3MjI / flPOX | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","justifyContent":"center","alignItems":"center"} |
| XkbYf / G3MjI | frame / Column | {"name":"Column"} | {"width":400,"layout":"vertical","gap":24} |
| XjZqW / XkbYf | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| D8rrk / XjZqW | frame / Back | {"name":"Back"} | {"gap":4,"padding":[0,0,8,0],"alignItems":"center"} |
| X5ZC6m / D8rrk | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| X6QLAR / D8rrk | text / T | {"name":"T","content":"All sign-in options"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| n1YJN3 / XjZqW | text / Title | {"name":"Title","content":"Sign in with email"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| ihCwM / XjZqW | text / Desc | {"name":"Desc","content":"We'll use this to find your workspace account."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| H7gV1g / XkbYf | frame / Method Tabs | {"name":"Method Tabs"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":4,"alignItems":"center"} |
| ByzMR / H7gV1g | frame / Password | {"name":"Password"} | {"width":"fill_container","height":32,"fill":"$op-surface","cornerRadius":999,"effect":{"type":"shadow","shadowType":"outer","color":"#0000001A","offset":{"x":0,"y":1},"blur":2},"justifyContent":"center","alignItems":"center"} |
| pKmRJ / ByzMR | text / L | {"name":"L","content":"Password"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| l1dH5 / H7gV1g | frame / One-time code | {"name":"One-time code"} | {"width":"fill_container","height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| T6NiTX / l1dH5 | text / L | {"name":"L","content":"One-time code"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| FeVSz / H7gV1g | frame / Magic link | {"name":"Magic link"} | {"width":"fill_container","height":32,"cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| LfsPy / FeVSz | text / L | {"name":"L","content":"Magic link"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| BHrJZ / XkbYf | frame / Form | {"name":"Form"} | {"width":"fill_container","layout":"vertical","gap":16} |
| sTaMi / BHrJZ | frame / Field · Email | {"name":"Field · Email"} | {"width":"fill_container","layout":"vertical","gap":4} |
| T8DH4 / sTaMi | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| wwc4G / T8DH4 | text / Label | {"name":"Label","content":"Email"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| k8MHnU / sTaMi | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Y3K5er / k8MHnU | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| ONKAP / k8MHnU | text / Value | {"name":"Value","content":"mila.reyes@officepress.ph"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| tVysl / BHrJZ | frame / Field · Password | {"name":"Field · Password"} | {"width":"fill_container","layout":"vertical","gap":4} |
| nqPJq / tVysl | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| K3p6yk / nqPJq | text / Label | {"name":"Label","content":"Password"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| phcvR / tVysl | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-accent","strokeWidth":2,"gap":8,"padding":[0,12],"alignItems":"center"} |
| rSBrj / phcvR | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| kB0bS / phcvR | text / Value | {"name":"Value","content":"••••••••••••"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| rVdUr / phcvR | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| W42XST / BHrJZ | frame / Row | {"name":"Row"} | {"width":"fill_container","justifyContent":"space_between","alignItems":"center"} |
| x0lHl / W42XST | frame / Checkbox · Keep me signed in | {"name":"Checkbox · Keep me signed in"} | {"gap":8,"alignItems":"center"} |
| uxNVa / x0lHl | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| TFJRt / uxNVa | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| IKEBG / x0lHl | text / L | {"name":"L","content":"Keep me signed in"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| j38F3Y / W42XST | text / Forgot | {"name":"Forgot","content":"Forgot password?"} | {"fill":"$op-accent-text","fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| H187xn / XkbYf | frame / Primary · Sign in | {"name":"Primary · Sign in"} | {"width":"fill_container","height":44,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"justifyContent":"center","alignItems":"center"} |
| HtDov / H187xn | text / L | {"name":"L","content":"Sign in"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| t71JP / flPOX | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| fgjvt / t71JP | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| jUbvI / kuLwt | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| K5a7DK / jUbvI | text / Label | {"name":"Label","content":"2 · Email"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| iCQPf / jUbvI | text / Note | {"name":"Note","content":"One screen, three ways in. The tab changes the second field and the button label."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| Bfiz5 / HoJLP | frame / Shot · 3 · Username | {"name":"Shot · 3 · Username"} | {"layout":"vertical","gap":14} |
| p2Y55 / Bfiz5 | frame / 3 · Username | {"name":"3 · Username","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| GHz4T / p2Y55 | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":80,"gap":12,"padding":[0,32],"alignItems":"center"} |
| T0az4 / GHz4T | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| jHQsj / T0az4 | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| eedaS / GHz4T | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| qv1RR / GHz4T | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| eNqgh / qv1RR | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| UfAnQ / p2Y55 | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","justifyContent":"center","alignItems":"center"} |
| cLkQa / UfAnQ | frame / Column | {"name":"Column"} | {"width":400,"layout":"vertical","gap":24} |
| C4UEtl / cLkQa | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| ytcaC / C4UEtl | frame / Back | {"name":"Back"} | {"gap":4,"padding":[0,0,8,0],"alignItems":"center"} |
| KqM9A / ytcaC | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| LUWB3 / ytcaC | text / T | {"name":"T","content":"All sign-in options"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| XpGZR / C4UEtl | text / Title | {"name":"Title","content":"Sign in with username"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| mDEps / C4UEtl | text / Desc | {"name":"Desc","content":"Use the username your workspace admin gave you."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| FvCIG / cLkQa | frame / Form | {"name":"Form"} | {"width":"fill_container","layout":"vertical","gap":16} |
| vPwgH / FvCIG | frame / Field · Username | {"name":"Field · Username"} | {"width":"fill_container","layout":"vertical","gap":4} |
| pBIYr / vPwgH | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| o3KVx / pBIYr | text / Label | {"name":"Label","content":"Username"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| cSeoF / vPwgH | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| p3RwjH / cSeoF | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"at-sign","library":"lucide","fill":"$op-text-2"} |
| G1ZhIB / cSeoF | text / Value | {"name":"Value","content":"mreyes"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| ghG1N / FvCIG | frame / Field · Password | {"name":"Field · Password"} | {"width":"fill_container","layout":"vertical","gap":4} |
| TMpoa / ghG1N | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| be6Ay / TMpoa | text / Label | {"name":"Label","content":"Password"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| cgivL / ghG1N | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| ax3MJ / cgivL | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| xakwA / cgivL | text / Value | {"name":"Value","content":"••••••••••••"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| GRME9 / cgivL | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| KlhbI / FvCIG | frame / Checkbox · Keep me signed in | {"name":"Checkbox · Keep me signed in"} | {"gap":8,"alignItems":"center"} |
| W8LrS / KlhbI | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1.5,"justifyContent":"center","alignItems":"center"} |
| Czicb / KlhbI | text / L | {"name":"L","content":"Keep me signed in"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| yv6UQ / cLkQa | frame / Primary · Sign in | {"name":"Primary · Sign in"} | {"width":"fill_container","height":44,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"justifyContent":"center","alignItems":"center"} |
| r8MRBN / yv6UQ | text / L | {"name":"L","content":"Sign in"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| T5ewa6 / cLkQa | frame / Links | {"name":"Links"} | {"width":"fill_container","gap":4,"justifyContent":"space_between","alignItems":"center"} |
| bjpM1 / T5ewa6 | text / Link | {"name":"Link","content":"Forgot password?"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| MBSfJ / T5ewa6 | text / Link | {"name":"Link","content":"Forgot username?"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| deYx6 / p2Y55 | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| R51ViS / deYx6 | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| z5bNUC / Bfiz5 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| Om5oI / z5bNUC | text / Label | {"name":"Label","content":"3 · Username"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| kp0M2 / z5bNUC | text / Note | {"name":"Note","content":"For workspaces that issue usernames instead of emails."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
