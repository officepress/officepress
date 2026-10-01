# OfficePress App Layout / Section · Account & app settings / Screens / Row · Account & theme / Shot · Account settings / Account settings / Main / Body / Content / Column / Section · Danger zone

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

**Status correction:** the user confirms purge/delete are production material. Any “proposed” or “Not in production yet” wording below is superseded source history, retained for fidelity. See [the accepted production-status correction](00078-officepress-source-decisions.md) when interpreting these records.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| N9XvMT / f4MVi | frame / Section · Danger zone | {"name":"Section · Danger zone"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-danger","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#18244F0F","offset":{"x":0,"y":1},"blur":3},"layout":"vertical"} |
| ZSR2l / N9XvMT | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| gi6Vl / ZSR2l | text / Title | {"name":"Title","content":"Danger zone"} | {"fill":"$op-danger","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| kS7na / ZSR2l | text / Desc | {"name":"Desc","content":"These can't be undone."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| m0lBQI / ZSR2l | frame / Tag | {"name":"Tag"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"padding":[0,8],"alignItems":"center"} |
| RJw2Q / m0lBQI | text / T | {"name":"T","content":"Not in production yet"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| W73Xh / N9XvMT | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| G9VZKS / W73Xh | frame / Row · Purge my data from Inbox | {"name":"Row · Purge my data from Inbox"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| z0UyVF / G9VZKS | frame / Icon Box | {"name":"Icon Box"} | {"width":40,"height":40,"fill":"$op-danger-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| l85orl / z0UyVF | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"eraser","library":"lucide","fill":"$op-danger"} |
| prT57 / G9VZKS | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| O4wlr / prT57 | text / T | {"name":"T","content":"Purge my data from Inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| wXWfd / prT57 | text / D | {"name":"D","content":"Removes your data from this app only. Your account and other apps stay as they are."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LPOWA / G9VZKS | frame / Button · Purge data | {"name":"Button · Purge data"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-danger","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| gdbQ8 / LPOWA | text / Label | {"name":"Label","content":"Purge data"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| L8pvB / W73Xh | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| p1M4R / W73Xh | frame / Row · Delete account | {"name":"Row · Delete account"} | {"width":"fill_container","gap":16,"alignItems":"center"} |
| ihkru / p1M4R | frame / Icon Box | {"name":"Icon Box"} | {"width":40,"height":40,"fill":"$op-danger-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| EBnha / ihkru | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"user-x","library":"lucide","fill":"$op-danger"} |
| hppFA / p1M4R | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| jiSDT / hppFA | text / T | {"name":"T","content":"Delete account"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| YB5XK / hppFA | text / D | {"name":"D","content":"Permanently deletes your OfficePress account across every app."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| JvdwE / p1M4R | frame / Button · Delete account | {"name":"Button · Delete account"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-danger","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| xzXln / JvdwE | text / Label | {"name":"Label","content":"Delete account"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| xv30V / ASO0C | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| kBIKJ / xv30V | text / Label | {"name":"Label","content":"Account settings"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| aE7Lc / xv30V | text / Note | {"name":"Note","content":"Matches what the platform manages today: personal information (image by URL, role read-only), password, authenticator-app 2FA and instant data export. Purge and delete are proposed additions."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| tFlP3 / HLqC7 | frame / Shot · App settings · Theme | {"name":"Shot · App settings · Theme"} | {"layout":"vertical","gap":14} |
| BYgvp / tFlP3 | frame / App settings · Theme | {"name":"App settings · Theme","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":1345,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| T4jqaV / BYgvp | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| mfu6A / T4jqaV | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| mfu6A/NL2v5 / mfu6A | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| mfu6A/v0pIr4 / mfu6A/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text"} |
| mfu6A/E8PtZC / mfu6A | text / Page Title | {"name":"Page Title","content":"App settings"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| mfu6A/G3t23s / mfu6A | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| mfu6A/dtuXO / mfu6A | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| mfu6A/H5cU4B / mfu6A/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| mfu6A/I7kF1e / mfu6A/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| mfu6A/vQMp0 / mfu6A/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| mfu6A/qS8da / mfu6A/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| mfu6A/f6Nm4U / mfu6A | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| mfu6A/BTxZN / mfu6A | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| mfu6A/fawPG / mfu6A/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| mfu6A/MT9A7 / mfu6A/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| mfu6A/SkOaY / mfu6A/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| mfu6A/XGyoO / mfu6A/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| mfu6A/C5tCn / mfu6A/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| mfu6A/szMHy / mfu6A/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| mfu6A/K5uDK / mfu6A/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| mfu6A/I60pf / mfu6A/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| mfu6A/h47xa8 / mfu6A/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| FWQ2h / T4jqaV | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":24,"padding":[24,16,40,16]} |
| R13yEQ / FWQ2h | frame / Settings Nav | {"name":"Settings Nav"} | {"width":240,"layout":"vertical","gap":4} |
| x5cXDS / R13yEQ | frame / Tab General | {"name":"Tab General"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| raqzV / x5cXDS | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| nCK7Z / raqzV | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| vsUvZ / x5cXDS | text / L | {"name":"L","content":"General"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| N29Jhc / R13yEQ | frame / Tab Theme | {"name":"Tab Theme"} | {"width":"fill_container","height":36,"fill":"$op-tint","cornerRadius":4,"gap":12,"alignItems":"center"} |
| YH0lT / N29Jhc | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| JdKj1 / YH0lT | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"palette","library":"lucide","fill":"$op-accent-text"} |
| FNoEW / N29Jhc | text / L | {"name":"L","content":"Theme"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| b835zZ / R13yEQ | frame / Tab Members | {"name":"Tab Members"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| fuUdJ / b835zZ | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| p8A8bx / fuUdJ | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"users","library":"lucide","fill":"$op-text-2"} |
| WaoAt / b835zZ | text / L | {"name":"L","content":"Members"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| h7EeN / R13yEQ | frame / Tab Agent | {"name":"Tab Agent"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| lYKW7 / h7EeN | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| q2PWG / lYKW7 | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text-2"} |
| w8zksb / h7EeN | text / L | {"name":"L","content":"Agent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| ah2Ps / R13yEQ | frame / Tab Integrations | {"name":"Tab Integrations"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| wCUak / ah2Ps | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| H2XqwP / wCUak | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"plug","library":"lucide","fill":"$op-text-2"} |
| O6oGe / ah2Ps | text / L | {"name":"L","content":"Integrations"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| q4HuZN / R13yEQ | frame / Tab Notifications | {"name":"Tab Notifications"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| O8rDvK / q4HuZN | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| A6dmW / O8rDvK | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text-2"} |
| KGE3D / q4HuZN | text / L | {"name":"L","content":"Notifications"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| TKbCq / R13yEQ | frame / Divider | {"name":"Divider"} | {"width":"fill_container","layout":"vertical","padding":[12,0]} |
| lz1L4 / TKbCq | rectangle / Line | {"name":"Line"} | {"fill":"$op-border","width":"fill_container","height":1} |
| zUWnS / R13yEQ | frame / Back to App | {"name":"Back to App"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| lbQKO / zUWnS | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| p4qyH / lbQKO | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| KCzuE / zUWnS | text / L | {"name":"L","content":"Back to App"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| SgJeJ / FWQ2h | frame / Content | {"name":"Content"} | {"width":"fill_container","justifyContent":"center"} |
| X7c96 / SgJeJ | frame / Column | {"name":"Column"} | {"width":760,"layout":"vertical","gap":24} |
| gtzZH / X7c96 | frame / Section · Brand | {"name":"Section · Brand"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| UNdmU / gtzZH | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| GY8M5 / UNdmU | text / Title | {"name":"Title","content":"Brand"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| SkYob / UNdmU | text / Desc | {"name":"Desc","content":"Replaces the app's logo and name at the top of the aside, in the browser tab and on the sign-in page."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| g362u2 / gtzZH | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| V9PISd / g362u2 | frame / Brand Row | {"name":"Brand Row"} | {"width":"fill_container","gap":24} |
| P6JH6g / V9PISd | frame / Fields | {"name":"Fields"} | {"width":"fill_container","layout":"vertical","gap":20} |
| MFkNZ / P6JH6g | frame / Logo | {"name":"Logo"} | {"width":"fill_container","layout":"vertical","gap":8} |
| JQWSO / MFkNZ | text / Label | {"name":"Label","content":"Logo"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Cv2hR / MFkNZ | frame / Logo Row | {"name":"Logo Row"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| qpBb3 / Cv2hR | frame / Current | {"name":"Current"} | {"width":56,"height":56,"fill":"#0E7490","cornerRadius":12,"justifyContent":"center","alignItems":"center"} |
| ifRRd / qpBb3 | icon / I | {"name":"I"} | {"width":28,"height":28,"icon":"mail-open","library":"lucide","fill":"#FFFFFF"} |
| u6DvCG / Cv2hR | frame / Actions | {"name":"Actions"} | {"layout":"vertical","gap":4} |
| ieahR / u6DvCG | frame / Buttons | {"name":"Buttons"} | {"gap":8} |
| tsrxN / ieahR | frame / Button · Upload new | {"name":"Button · Upload new"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| pMf0o / tsrxN | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"upload","library":"lucide","fill":"$op-text"} |
| Q8AW2 / tsrxN | text / Label | {"name":"Label","content":"Upload new"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| jsXel / ieahR | frame / Button · Remove | {"name":"Button · Remove"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| rZIcX / jsXel | text / Label | {"name":"Label","content":"Remove"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| z9YshL / u6DvCG | text / Hint | {"name":"Hint","content":"SVG or PNG, square, at least 256 × 256. Shown on a rounded tile."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Uthxb / P6JH6g | frame / Field · Brand name | {"name":"Field · Brand name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| RAzs7 / Uthxb | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Eb49X / RAzs7 | text / Label | {"name":"Label","content":"Brand name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ZnJi0 / Uthxb | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| UwLRx / ZnJi0 | text / Value | {"name":"Value","content":"Paperworks Inbox"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| POZrg / Uthxb | text / Hint | {"name":"Hint","content":"Up to 24 characters. Default: Inbox"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| SSQ1W / V9PISd | frame / Preview | {"name":"Preview"} | {"width":240,"layout":"vertical","gap":8} |
| JTd1O / SSQ1W | text / Label | {"name":"Label","content":"Preview"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| QZ5iI / SSQ1W | frame / Aside top · Light | {"name":"Aside top · Light"} | {"width":"fill_container","fill":"#0F2A33","cornerRadius":8,"gap":8,"padding":12,"alignItems":"center"} |
| XpRjG / QZ5iI | frame / Logo | {"name":"Logo"} | {"width":28,"height":28,"fill":"#0E7490","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| cPD9A / XpRjG | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"mail-open","library":"lucide","fill":"#FFFFFF"} |
| i2KUw7 / QZ5iI | text / Name | {"name":"Name","content":"Paperworks Inbox"} | {"fill":"#FFFFFF","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| zX8Mm / QZ5iI | text / Mode | {"name":"Mode","content":"Light"} | {"fill":"#FFFFFF80","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| QAITk / SSQ1W | frame / Aside top · Dark | {"name":"Aside top · Dark"} | {"width":"fill_container","fill":"#071419","cornerRadius":8,"gap":8,"padding":12,"alignItems":"center"} |
| s78xl / QAITk | frame / Logo | {"name":"Logo"} | {"width":28,"height":28,"fill":"#0E7490","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| t0wp8L / s78xl | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"mail-open","library":"lucide","fill":"#FFFFFF"} |
| i1qE7 / QAITk | text / Name | {"name":"Name","content":"Paperworks Inbox"} | {"fill":"#FFFFFF","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| LJMCg / QAITk | text / Mode | {"name":"Mode","content":"Dark"} | {"fill":"#FFFFFF80","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| nRh3n / gtzZH | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| xLLny / nRh3n | text / Note | {"name":"Note","content":"Default: Inbox logo and name"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| nfjHF / nRh3n | frame / Button · Use defaults | {"name":"Button · Use defaults"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| eUoYB / nfjHF | text / Label | {"name":"Label","content":"Use defaults"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| WzwY5 / nRh3n | frame / Button · Save brand | {"name":"Button · Save brand"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16],"alignItems":"center"} |
| pBwkJ / WzwY5 | text / Label | {"name":"Label","content":"Save brand"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
