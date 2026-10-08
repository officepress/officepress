# OfficePress App Layout / Section · Account & app settings / Screens / Row · About / Shot · App settings · About · Terminal guide / App settings · About · Terminal guide / Dialog · Terminal guide

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| O0ajRC / Uozi6 | frame / Dialog · Terminal guide | {"name":"Dialog · Terminal guide"} | {"layoutPosition":"absolute","x":420,"y":288,"width":600,"fill":"$op-surface","cornerRadius":12,"effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-pop","offset":{"x":0,"y":12},"blur":32}],"layout":"vertical"} |
| JE5oK / O0ajRC | frame / Head | {"name":"Head"} | {"width":"fill_container","gap":16,"padding":[24,24,16,24]} |
| H42dSC / JE5oK | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| QP1Kf / H42dSC | text / Title | {"name":"Title","content":"Update Inbox from the terminal"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| JnxNB / H42dSC | text / Desc | {"name":"Desc","content":"For admins with shell access to the server that runs Inbox. Updates 2.3.1 → 2.4.0 in about five minutes."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| cm1tH / JE5oK | frame / Close | {"name":"Close"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| jzami / cm1tH | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| dTTZY / O0ajRC | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":[0,24,24,24]} |
| i9GIYz / dTTZY | frame / Notice | {"name":"Notice"} | {"width":"fill_container","fill":"$op-warning-tint","cornerRadius":8,"gap":12,"padding":16} |
| JSZxb / i9GIYz | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"triangle-alert","library":"lucide","fill":"$op-warning"} |
| auA7W / i9GIYz | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":2} |
| c9knmm / auA7W | text / Title | {"name":"Title","content":"Before you start"} | {"fill":"$op-warning","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| AfggG / auA7W | text / Line | {"name":"Line","content":"Inbox is unavailable for about a minute while it restarts. Pick a quiet time and let your team know."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| CVmWY / dTTZY | frame / Steps | {"name":"Steps"} | {"width":"fill_container","layout":"vertical","gap":16} |
| QC8sr / CVmWY | frame / Step 1 | {"name":"Step 1"} | {"width":"fill_container","gap":12} |
| uQekt / QC8sr | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| P0CdCx / uQekt | text / T | {"name":"T","content":"1"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| R3VKX / QC8sr | frame / Content | {"name":"Content"} | {"width":"fill_container","layout":"vertical","gap":8} |
| f2hJGH / R3VKX | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| wftUz / f2hJGH | text / Title | {"name":"Title","content":"Connect to the server"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| hKBTm / f2hJGH | text / Desc | {"name":"Desc","content":"Sign in to the machine that runs Inbox."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| kg4gv / R3VKX | frame / Command | {"name":"Command"} | {"width":"fill_container","height":40,"fill":"$op-nav","cornerRadius":8,"gap":8,"padding":[0,4,0,12],"alignItems":"center"} |
| tGL4t / kg4gv | text / Prompt | {"name":"Prompt","content":"$"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| YUTig / kg4gv | text / Cmd | {"name":"Cmd","content":"ssh admin@inbox.yourcompany.local"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| OmW3Y / kg4gv | frame / Copy | {"name":"Copy"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| diYw7 / OmW3Y | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-nav-text-2"} |
| PHyER / CVmWY | frame / Step 2 | {"name":"Step 2"} | {"width":"fill_container","gap":12} |
| uOlIe / PHyER | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| HWF2J / uOlIe | text / T | {"name":"T","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Bj4iT / PHyER | frame / Content | {"name":"Content"} | {"width":"fill_container","layout":"vertical","gap":8} |
| ZvniO / Bj4iT | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| Ni9e7 / ZvniO | text / Title | {"name":"Title","content":"Back up your data"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| tqOMP / ZvniO | text / Desc | {"name":"Desc","content":"Saves the database and uploaded files to the backups folder."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| hNQsY / Bj4iT | frame / Command | {"name":"Command"} | {"width":"fill_container","height":40,"fill":"$op-nav","cornerRadius":8,"gap":8,"padding":[0,4,0,12],"alignItems":"center"} |
| R5fT0K / hNQsY | text / Prompt | {"name":"Prompt","content":"$"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| qlk3V / hNQsY | text / Cmd | {"name":"Cmd","content":"officepress backup inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| Md50L / hNQsY | frame / Copy | {"name":"Copy"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Ntmdd / Md50L | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-nav-text-2"} |
| Z86v5 / CVmWY | frame / Step 3 | {"name":"Step 3"} | {"width":"fill_container","gap":12} |
| P3e4sB / Z86v5 | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| sNSO4 / P3e4sB | text / T | {"name":"T","content":"3"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| u0B5ui / Z86v5 | frame / Content | {"name":"Content"} | {"width":"fill_container","layout":"vertical","gap":8} |
| R3Hit / u0B5ui | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| jgZQO / R3Hit | text / Title | {"name":"Title","content":"Install 2.4.0"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| EwENy / R3Hit | text / Desc | {"name":"Desc","content":"Downloads the release, applies database changes and restarts Inbox."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| D63UBT / u0B5ui | frame / Command | {"name":"Command"} | {"width":"fill_container","height":40,"fill":"$op-nav","cornerRadius":8,"gap":8,"padding":[0,4,0,12],"alignItems":"center"} |
| INCJC / D63UBT | text / Prompt | {"name":"Prompt","content":"$"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| vAZRc / D63UBT | text / Cmd | {"name":"Cmd","content":"officepress update inbox --version 2.4.0"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| uNyM4 / D63UBT | frame / Copy | {"name":"Copy"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| QPJj8 / uNyM4 | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-nav-text-2"} |
| k6EY0t / CVmWY | frame / Step 4 | {"name":"Step 4"} | {"width":"fill_container","gap":12} |
| uCQI8 / k6EY0t | frame / No | {"name":"No"} | {"width":24,"height":24,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| YNF5y / uCQI8 | text / T | {"name":"T","content":"4"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| F5u2hv / k6EY0t | frame / Content | {"name":"Content"} | {"width":"fill_container","layout":"vertical","gap":8} |
| dO1ZQ / F5u2hv | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| Hde5o / dO1ZQ | text / Title | {"name":"Title","content":"Check it worked"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| rTuf2 / dO1ZQ | text / Desc | {"name":"Desc","content":"You should see “inbox 2.4.0”. Then refresh this page."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| cA5Vw / F5u2hv | frame / Command | {"name":"Command"} | {"width":"fill_container","height":40,"fill":"$op-nav","cornerRadius":8,"gap":8,"padding":[0,4,0,12],"alignItems":"center"} |
| eoeal / cA5Vw | text / Prompt | {"name":"Prompt","content":"$"} | {"fill":"$op-nav-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| k1VfV / cA5Vw | text / Cmd | {"name":"Cmd","content":"officepress version inbox"} | {"fill":"$op-nav-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"normal"} |
| dN6HS / cA5Vw | frame / Copy | {"name":"Copy"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| XRyjb / dN6HS | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"copy","library":"lucide","fill":"$op-nav-text-2"} |
| Vw89f / dTTZY | frame / Rollback | {"name":"Rollback"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,0,0,0],"alignItems":"center"} |
| V0SEgF / Vw89f | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"history","library":"lucide","fill":"$op-text-2"} |
| kwZxL / Vw89f | text / T | {"name":"T","content":"Something went wrong? Run"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| VRigN / Vw89f | frame / Code | {"name":"Code"} | {"height":20,"fill":"$op-sunken","cornerRadius":4,"padding":[0,6],"alignItems":"center"} |
| cp00U / VRigN | text / T | {"name":"T","content":"officepress rollback inbox"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font-mono","fontSize":11,"fontWeight":"normal"} |
| O5h1gE / Vw89f | text / T | {"name":"T","content":"to return to 2.3.1."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| myRbZ / O0ajRC | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| Et3Ep / myRbZ | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| TKQL8 / myRbZ | frame / Button · Copy all | {"name":"Button · Copy all"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| tm0r2 / TKQL8 | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"copy","library":"lucide","fill":"$op-text"} |
| IAvLn / TKQL8 | text / Label | {"name":"Label","content":"Copy all commands"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| AFuyF / myRbZ | frame / Button · Done | {"name":"Button · Done"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16],"alignItems":"center"} |
| wJqEc / AFuyF | text / Label | {"name":"Label","content":"Done"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| N802fr / BCtq4 | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| t6OwM / N802fr | text / Label | {"name":"Label","content":"App settings · About — terminal guide"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| GmDtz / N802fr | text / Note | {"name":"Note","content":"Opened from “Update from the terminal”. Only offered when an update is available. Steps are tailored to the target version, every command has a copy button, and the guide starts with a backup and ends with a version check and a rollback path."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| tYgFi / o7dF4 | frame / Shot · App settings · About · Up to date | {"name":"Shot · App settings · About · Up to date"} | {"layout":"vertical","gap":14} |
| ov1Cv / tYgFi | frame / App settings · About · Up to date | {"name":"App settings · About · Up to date","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":1243,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| hDKrV / ov1Cv | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| N5oCm / hDKrV | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| N5oCm/NL2v5 / N5oCm | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| N5oCm/v0pIr4 / N5oCm/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text"} |
| N5oCm/E8PtZC / N5oCm | text / Page Title | {"name":"Page Title","content":"App settings"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| N5oCm/G3t23s / N5oCm | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| N5oCm/dtuXO / N5oCm | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| N5oCm/H5cU4B / N5oCm/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| N5oCm/I7kF1e / N5oCm/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| N5oCm/vQMp0 / N5oCm/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| N5oCm/qS8da / N5oCm/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| N5oCm/f6Nm4U / N5oCm | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| N5oCm/BTxZN / N5oCm | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| N5oCm/fawPG / N5oCm/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| N5oCm/MT9A7 / N5oCm/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| N5oCm/SkOaY / N5oCm/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| N5oCm/XGyoO / N5oCm/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| N5oCm/C5tCn / N5oCm/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| N5oCm/szMHy / N5oCm/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| N5oCm/K5uDK / N5oCm/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| N5oCm/I60pf / N5oCm/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| N5oCm/h47xa8 / N5oCm/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| AbKWN / hDKrV | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":24,"padding":[24,16,40,16]} |
| zTKag / AbKWN | frame / Settings Nav | {"name":"Settings Nav"} | {"width":240,"layout":"vertical","gap":4} |
| znuvs / zTKag | frame / Tab Theme | {"name":"Tab Theme"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| fHvDH / znuvs | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| plyZu / fHvDH | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"palette","library":"lucide","fill":"$op-text-2"} |
| UqYWu / znuvs | text / L | {"name":"L","content":"Theme"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| sx5Qf / zTKag | frame / Tab About | {"name":"Tab About"} | {"width":"fill_container","height":36,"fill":"$op-tint","cornerRadius":4,"gap":12,"padding":[0,8,0,0],"alignItems":"center"} |
| Icpmg / sx5Qf | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| X7IRWA / Icpmg | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"info","library":"lucide","fill":"$op-accent-text"} |
| ntxz5 / sx5Qf | text / L | {"name":"L","content":"About"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| DKQDS / sx5Qf | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| KIKwz / zTKag | frame / Divider | {"name":"Divider"} | {"width":"fill_container","layout":"vertical","padding":[12,0]} |
| G6NF64 / KIKwz | rectangle / Line | {"name":"Line"} | {"fill":"$op-border","width":"fill_container","height":1} |
| Irrjd / zTKag | frame / Back to App | {"name":"Back to App"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| Ur2IC / Irrjd | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| rgfr7 / Ur2IC | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| uZeA9 / Irrjd | text / L | {"name":"L","content":"Back to App"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
