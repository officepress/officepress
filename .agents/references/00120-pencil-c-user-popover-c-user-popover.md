# C · User Popover

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| FSvTv / root | frame / C · User Popover | {"name":"C · User Popover","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":8600,"y":2633,"width":280,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-pop","offset":{"x":0,"y":12},"blur":32}],"layout":"vertical","gap":4,"padding":8} |
| n2hny / FSvTv | frame / User | {"name":"User"} | {"width":"fill_container","gap":12,"padding":[8,8,12,8],"alignItems":"center"} |
| cpurE / n2hny | frame / Avatar | {"name":"Avatar"} | {"width":40,"height":40,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| U2u1NA / cpurE | text / Initials | {"name":"Initials","content":"MR"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| gwpfK / n2hny | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| gDX8n / gwpfK | text / Name | {"name":"Name","content":"Mila Reyes"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q9YyL / gwpfK | text / Email | {"name":"Email","content":"mila.reyes@officepress.ph"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| KfuiO / FSvTv | rectangle / Divider 1 | {"name":"Divider 1"} | {"fill":"$op-border","width":"fill_container","height":1} |
| g0eVT9 / FSvTv | frame / Item User Preferences | {"name":"Item User Preferences"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| KDmgW / g0eVT9 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"sliders-horizontal","library":"lucide","fill":"$op-text-2"} |
| rxZhX / g0eVT9 | text / Label | {"name":"Label","content":"User Preferences"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| RnFMf / FSvTv | frame / Item Account Settings | {"name":"Item Account Settings"} | {"width":"fill_container","height":36,"fill":"$op-sunken","cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| J4MHXA / RnFMf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user-cog","library":"lucide","fill":"$op-text-2"} |
| T3KGuz / RnFMf | text / Label | {"name":"Label","content":"Account Settings"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| FgeUO / FSvTv | rectangle / Divider 2 | {"name":"Divider 2"} | {"fill":"$op-border","width":"fill_container","height":1} |
| F3gvh / FSvTv | frame / Item App Settings | {"name":"Item App Settings"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| yUtUC / F3gvh | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| A9mQ5 / F3gvh | text / Label | {"name":"Label","content":"App Settings"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| MXyiL / F3gvh | text / Hint | {"name":"Hint","content":"Inbox"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| i5DMM / FSvTv | frame / Item Admin Dashboard | {"name":"Item Admin Dashboard"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| Y5bUUG / i5DMM | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"shield-check","library":"lucide","fill":"$op-text-2"} |
| YWJrg / i5DMM | text / Label | {"name":"Label","content":"Admin Dashboard"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| ddQhd / i5DMM | frame / Tag | {"name":"Tag"} | {"height":20,"fill":"$op-tint","cornerRadius":999,"padding":[0,8],"alignItems":"center"} |
| MxFpL / ddQhd | text / T | {"name":"T","content":"Admin"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kkiOc / FSvTv | rectangle / Divider 3 | {"name":"Divider 3"} | {"fill":"$op-border","width":"fill_container","height":1} |
| Y6Otp / FSvTv | frame / Item Sign out | {"name":"Item Sign out"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"padding":[0,8],"alignItems":"center"} |
| nyc2o / Y6Otp | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"log-out","library":"lucide","fill":"$op-text-2"} |
| pbY9C / Y6Otp | text / Label | {"name":"Label","content":"Sign out"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
