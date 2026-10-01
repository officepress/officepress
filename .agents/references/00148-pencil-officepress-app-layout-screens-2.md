# OfficePress App Layout / Section · Authentication / Screens 2

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| GO2OY / piYiD | frame / Screens 2 | {"name":"Screens 2"} | {"width":"fill_container","gap":40} |
| o6WttB / GO2OY | frame / Shot · 4 · Two-factor | {"name":"Shot · 4 · Two-factor"} | {"layout":"vertical","gap":14} |
| LYntx / o6WttB | frame / 4 · Two-factor | {"name":"4 · Two-factor","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| rCGWY / LYntx | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":80,"gap":12,"padding":[0,32],"alignItems":"center"} |
| F0inT / rCGWY | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| KaOfC / F0inT | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| u5jSiN / rCGWY | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| hODHK / rCGWY | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lmqt9 / hODHK | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| C3zhk / LYntx | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","justifyContent":"center","alignItems":"center"} |
| NhSBH / C3zhk | frame / Column | {"name":"Column"} | {"width":400,"layout":"vertical","gap":24} |
| JbZS0 / NhSBH | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| kt9cI / JbZS0 | frame / Back | {"name":"Back"} | {"gap":4,"padding":[0,0,8,0],"alignItems":"center"} |
| lcK0c / kt9cI | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| k0D0Ma / kt9cI | text / T | {"name":"T","content":"Use a different account"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Gavcr / JbZS0 | text / Title | {"name":"Title","content":"Enter your code"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| YYhrL / JbZS0 | text / Desc | {"name":"Desc","content":"Open your authenticator app and enter the 6-digit code for Resourcing."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Q1o1J / NhSBH | frame / Code | {"name":"Code"} | {"width":"fill_container","gap":8} |
| G3rWQj / Q1o1J | frame / Digit 1 | {"name":"Digit 1"} | {"width":"fill_container","height":56,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Kq52J / G3rWQj | text / D | {"name":"D","content":"4"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| tBAeY / Q1o1J | frame / Digit 2 | {"name":"Digit 2"} | {"width":"fill_container","height":56,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| dXGcs / tBAeY | text / D | {"name":"D","content":"8"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| r6F0d / Q1o1J | frame / Digit 3 | {"name":"Digit 3"} | {"width":"fill_container","height":56,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Q1iB4 / r6F0d | text / D | {"name":"D","content":"1"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| s1IEFq / Q1o1J | frame / Digit 4 | {"name":"Digit 4"} | {"width":"fill_container","height":56,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| JTNi8 / s1IEFq | text / D | {"name":"D","content":"0"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| bSbpv / Q1o1J | frame / Digit 5 | {"name":"Digit 5"} | {"width":"fill_container","height":56,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-accent","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| O3ngmI / Q1o1J | frame / Digit 6 | {"name":"Digit 6"} | {"width":"fill_container","height":56,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| xqksI / NhSBH | frame / Checkbox · Trust this device for 30 days | {"name":"Checkbox · Trust this device for 30 days"} | {"gap":8,"alignItems":"center"} |
| T3x7J / xqksI | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| R2akQs / T3x7J | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| GtdWE / xqksI | text / L | {"name":"L","content":"Trust this device for 30 days"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| kNvqH / NhSBH | frame / Primary · Verify | {"name":"Primary · Verify"} | {"width":"fill_container","height":44,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"justifyContent":"center","alignItems":"center"} |
| T7MhS / kNvqH | text / L | {"name":"L","content":"Verify"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| R7I4X / NhSBH | frame / Links | {"name":"Links"} | {"width":"fill_container","gap":4,"justifyContent":"space_between","alignItems":"center"} |
| BBuGD / R7I4X | text / Link | {"name":"Link","content":"Use a recovery code"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| xwsVm / R7I4X | text / Link | {"name":"Link","content":"Send a text instead"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| H4IcY / LYntx | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| qbBfg / H4IcY | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| aSc1w / o6WttB | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| itfma / aSc1w | text / Label | {"name":"Label","content":"4 · Two-factor"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| crWx8 / aSc1w | text / Note | {"name":"Note","content":"Shown after a correct password when 2FA is on. Paste fills all six boxes; the code submits on the last digit."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| YzUT6 / GO2OY | frame / Shot · 5 · Forgot password | {"name":"Shot · 5 · Forgot password"} | {"layout":"vertical","gap":14} |
| pvfzd / YzUT6 | frame / 5 · Forgot password | {"name":"5 · Forgot password","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| UHJPx / pvfzd | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":80,"gap":12,"padding":[0,32],"alignItems":"center"} |
| tCzmd / UHJPx | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| IcvH1 / tCzmd | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| Fujgw / UHJPx | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| C5i2I / UHJPx | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| bSBgJ / C5i2I | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| MxNwN / pvfzd | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","justifyContent":"center","alignItems":"center"} |
| aAmQ0 / MxNwN | frame / Column | {"name":"Column"} | {"width":400,"layout":"vertical","gap":24} |
| zZe2Y / aAmQ0 | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| pJGdS / zZe2Y | frame / Back | {"name":"Back"} | {"gap":4,"padding":[0,0,8,0],"alignItems":"center"} |
| RJAGS / pJGdS | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| pGT31 / pJGdS | text / T | {"name":"T","content":"Back to sign in"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| w2GRb / zZe2Y | text / Title | {"name":"Title","content":"Reset your password"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| loc38 / zZe2Y | text / Desc | {"name":"Desc","content":"Enter your work email and we'll send you a link to set a new one."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| z9fuI / aAmQ0 | frame / Field · Email | {"name":"Field · Email"} | {"width":"fill_container","layout":"vertical","gap":4} |
| mnDlQ / z9fuI | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| TBVTS / mnDlQ | text / Label | {"name":"Label","content":"Email"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| asnmM / z9fuI | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-accent","strokeWidth":2,"gap":8,"padding":[0,12],"alignItems":"center"} |
| WpLZs / asnmM | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| zYSi7 / asnmM | text / Value | {"name":"Value","content":"mila.reyes@officepress.ph"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| MGtld / aAmQ0 | frame / Primary · Send reset link | {"name":"Primary · Send reset link"} | {"width":"fill_container","height":44,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"justifyContent":"center","alignItems":"center"} |
| yR6Bd / MGtld | text / L | {"name":"L","content":"Send reset link"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| zSECz / pvfzd | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| D9IHs / zSECz | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LDwq5 / YzUT6 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| tON68 / LDwq5 | text / Label | {"name":"Label","content":"5 · Forgot password"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| z5i8p / LDwq5 | text / Note | {"name":"Note","content":"Always says the link was sent, whether or not the email exists, so accounts can't be probed."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| ZwDfX / GO2OY | frame / Shot · 6 · Check your email | {"name":"Shot · 6 · Check your email"} | {"layout":"vertical","gap":14} |
| pyfyh / ZwDfX | frame / 6 · Check your email | {"name":"6 · Check your email","theme":{"mode":"light","family":"operate"}} | {"clip":true,"width":1440,"height":900,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24},"layout":"vertical"} |
| Otc5P / pyfyh | frame / Auth Top Bar | {"name":"Auth Top Bar"} | {"width":"fill_container","height":80,"gap":12,"padding":[0,32],"alignItems":"center"} |
| A85AZ / Otc5P | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| F4cM7 / A85AZ | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"users","library":"lucide","fill":"#FFFFFF"} |
| Q4Sl9k / Otc5P | text / App Name | {"name":"App Name","content":"Resourcing"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| TGbyy / Otc5P | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| L948F / TGbyy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| J0jmsp / pyfyh | frame / Center | {"name":"Center"} | {"width":"fill_container","height":"fill_container","justifyContent":"center","alignItems":"center"} |
| dd01l / J0jmsp | frame / Column | {"name":"Column"} | {"width":400,"layout":"vertical","gap":24} |
| Z8ecWS / dd01l | frame / Mail Icon | {"name":"Mail Icon"} | {"width":56,"height":56,"fill":"$op-tint","cornerRadius":12,"justifyContent":"center","alignItems":"center"} |
| Jj4LL / Z8ecWS | icon / I | {"name":"I"} | {"width":28,"height":28,"icon":"mail-check","library":"lucide","fill":"$op-accent-text"} |
| iQeMS / dd01l | frame / Heading | {"name":"Heading"} | {"width":"fill_container","layout":"vertical","gap":8} |
| w6lvr / iQeMS | text / Title | {"name":"Title","content":"Check your email"} | {"fill":"$op-text","lineHeight":1.2,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700","letterSpacing":-0.6} |
| xAbcE / iQeMS | text / Desc | {"name":"Desc","content":"We sent a sign-in link to mila.reyes@officepress.ph. It expires in 15 minutes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| NrJJl / dd01l | frame / Tip | {"name":"Tip"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":[12,16],"alignItems":"center"} |
| Ge3uf / NrJJl | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"info","library":"lucide","fill":"$op-text-2"} |
| i2mj8R / NrJJl | text / T | {"name":"T","content":"Open the link on this device to sign in here. Can't find it? Check spam or promotions."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| XGYEH / dd01l | frame / Resend | {"name":"Resend"} | {"width":"fill_container","height":44,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| yVhHN / XGYEH | text / L | {"name":"L","content":"Resend link in 0:24"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| j5fEp / dd01l | frame / Links | {"name":"Links"} | {"width":"fill_container","gap":4,"justifyContent":"center","alignItems":"center"} |
| jqo15 / j5fEp | text / Link | {"name":"Link","content":"Wrong email?"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| BBM2i / j5fEp | text / Link | {"name":"Link","content":"Use a different one"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eCd9H / pyfyh | frame / Auth Footer | {"name":"Auth Footer"} | {"width":"fill_container","padding":[20,0],"justifyContent":"center"} |
| rVdap / eCd9H | text / T | {"name":"T","content":"Resourcing · Workspace access"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| VOFl9 / ZwDfX | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| eSKwr / VOFl9 | text / Label | {"name":"Label","content":"6 · Check your email"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| W3HlH / VOFl9 | text / Note | {"name":"Note","content":"Shared by magic link and password reset. Resend unlocks after 30 s."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
