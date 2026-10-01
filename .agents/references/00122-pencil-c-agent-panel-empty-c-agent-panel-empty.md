# C · Agent Panel · Empty

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| n2qVX / root | frame / C · Agent Panel · Empty | {"name":"C · Agent Panel · Empty","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":9360,"y":2633,"width":400,"height":836,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"left":1},"layout":"vertical"} |
| M23iCx / n2qVX | frame / Panel Header | {"name":"Panel Header"} | {"width":"fill_container","height":56,"stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12,0,16],"alignItems":"center"} |
| Blx35 / M23iCx | frame / Agent Mark | {"name":"Agent Mark"} | {"width":28,"height":28,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| E5eI9X / Blx35 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| Uor9G / M23iCx | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical"} |
| yG3UQ / Uor9G | text / Name | {"name":"Name","content":"Inbox Agent"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| VhMqS / Uor9G | text / Status | {"name":"Status","content":"Can read and act on this board"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| IO0xC / M23iCx | frame / New chat | {"name":"New chat"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| U0MoE / IO0xC | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"square-pen","library":"lucide","fill":"$op-text-2"} |
| dODrf / M23iCx | frame / History | {"name":"History"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| g5Nu8M / dODrf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"history","library":"lucide","fill":"$op-text-2"} |
| inHNO / M23iCx | frame / Expand | {"name":"Expand"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| HU04B / inHNO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"maximize-2","library":"lucide","fill":"$op-text-2"} |
| s0xYZ / M23iCx | frame / Close | {"name":"Close"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| x3Qdpj / s0xYZ | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| cZ72Y / n2qVX | frame / Context Bar | {"name":"Context Bar"} | {"width":"fill_container","fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[12,16],"alignItems":"center"} |
| t8fH7 / cZ72Y | text / Label | {"name":"Label","content":"CONTEXT"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| jxkrm / cZ72Y | frame / Context Chip | {"name":"Context Chip"} | {"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| ykars / jxkrm | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"layout-grid","library":"lucide","fill":"$op-accent-text"} |
| ouh4v / jxkrm | text / T | {"name":"T","content":"Inbox board · 12 cards"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| C0FIP / jxkrm | icon / Remove | {"name":"Remove"} | {"width":12,"height":12,"icon":"x","library":"lucide","fill":"$op-text-2"} |
| UuwJ3 / n2qVX | frame / Thread | {"name":"Thread"} | {"clip":true,"width":"fill_container","height":"fill_container","layout":"vertical","gap":16,"padding":16,"justifyContent":"end"} |
| rA887 / UuwJ3 | frame / Hello | {"name":"Hello"} | {"width":"fill_container","layout":"vertical","gap":8} |
| fOISY / rA887 | frame / Mark | {"name":"Mark"} | {"width":40,"height":40,"fill":"$op-accent","cornerRadius":12,"justifyContent":"center","alignItems":"center"} |
| p1faX / fOISY | icon / Icon | {"name":"Icon"} | {"width":22,"height":22,"icon":"bot","library":"lucide","fill":"#FFFFFF"} |
| lU0Pj / rA887 | text / Title | {"name":"Title","content":"What should we get done?"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| xasao / rA887 | text / Sub | {"name":"Sub","content":"I can read, sort, draft and schedule anything on this board. You'll see every change I make."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| xxu19 / UuwJ3 | frame / Starters | {"name":"Starters"} | {"width":"fill_container","layout":"vertical","gap":8} |
| xAOJJ / xxu19 | frame / Starter · Triage my inbox | {"name":"Starter · Triage my inbox"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| pTfwY / xAOJJ | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| BwCn7 / pTfwY | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"list-checks","library":"lucide","fill":"$op-accent-text"} |
| jnnyW / xAOJJ | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| ZwqvY / jnnyW | text / T | {"name":"T","content":"Triage my inbox"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| lIPs7 / jnnyW | text / D | {"name":"D","content":"Sort new cards into Follow up or Done"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| HYNUQ / xxu19 | frame / Starter · What's due today? | {"name":"Starter · What's due today?"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| oi3oG / HYNUQ | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| bS2gb / oi3oG | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"timer","library":"lucide","fill":"$op-accent-text"} |
| Qk7gI / HYNUQ | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| ywgfM / Qk7gI | text / T | {"name":"T","content":"What's due today?"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| U2cXT / Qk7gI | text / D | {"name":"D","content":"Summarise SLAs under 24h"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| oui5r / xxu19 | frame / Starter · Draft replies | {"name":"Starter · Draft replies"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| mpmfv / oui5r | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| n4M4jr / mpmfv | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"pen-line","library":"lucide","fill":"$op-accent-text"} |
| Z0VDf / oui5r | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| nMS7X / Z0VDf | text / T | {"name":"T","content":"Draft replies"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| AyjjP / Z0VDf | text / D | {"name":"D","content":"For everything waiting on me"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| sGrdd / xxu19 | frame / Starter · Build a filter | {"name":"Starter · Build a filter"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":12,"padding":12,"alignItems":"center"} |
| kmXZ1 / sGrdd | frame / Icon Box | {"name":"Icon Box"} | {"width":28,"height":28,"fill":"$op-tint","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| tBDyn / kmXZ1 | icon / Icon | {"name":"Icon"} | {"width":14,"height":14,"icon":"funnel","library":"lucide","fill":"$op-accent-text"} |
| gh89H / sGrdd | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| L0CeD / gh89H | text / T | {"name":"T","content":"Build a filter"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Tac0x / gh89H | text / D | {"name":"D","content":"Like “Invoices over ₱50k”"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| StezJ / n2qVX | frame / Composer Area | {"name":"Composer Area"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":[12,16,16,16]} |
| KB4rr / StezJ | frame / Composer | {"name":"Composer"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border-strong","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#18244F0F","offset":{"x":0,"y":2},"blur":6},"layout":"vertical","gap":12,"padding":12} |
| jGDvh / KB4rr | text / Placeholder | {"name":"Placeholder","content":"Ask the agent to do anything in Inbox…"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| hHX5u / KB4rr | frame / Controls | {"name":"Controls"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| LV7xb / hHX5u | frame / Attach | {"name":"Attach"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| C0PY5g / LV7xb | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"paperclip","library":"lucide","fill":"$op-text-2"} |
| TyINw / hHX5u | frame / Mention | {"name":"Mention"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| EC24C / TyINw | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"at-sign","library":"lucide","fill":"$op-text-2"} |
| XkYsY / hHX5u | frame / Model | {"name":"Model"} | {"height":28,"fill":"$op-sunken","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| tbMdf / XkYsY | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"sparkles","library":"lucide","fill":"$op-accent-text"} |
| ygFQE / XkYsY | text / T | {"name":"T","content":"Auto"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| GcsOQ / XkYsY | icon / Chevron | {"name":"Chevron"} | {"width":12,"height":12,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| Su9Bz / hHX5u | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| p17v3 / hHX5u | frame / Voice | {"name":"Voice"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Es9Fn / p17v3 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"mic","library":"lucide","fill":"$op-text-2"} |
| lWQez / hHX5u | frame / Send | {"name":"Send"} | {"width":32,"height":32,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| B0GjJp / lWQez | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-up","library":"lucide","fill":"$op-on-accent"} |
| IHIF4 / StezJ | text / Disclaimer | {"name":"Disclaimer","content":"The agent can take actions in this app. Every action is logged and can be undone."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
