# C · Notifications Popover · Empty

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| Jv72T / root | frame / C · Notifications Popover · Empty | {"name":"C · Notifications Popover · Empty","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":9020,"y":3529,"clip":true,"width":380,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-pop","offset":{"x":0,"y":12},"blur":32}],"layout":"vertical"} |
| x9bRUN / Jv72T | frame / Header | {"name":"Header"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[12,12,12,16],"alignItems":"center"} |
| GrXed / x9bRUN | text / Title | {"name":"Title","content":"Notifications"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| jRPJo / x9bRUN | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| JMExX / x9bRUN | frame / Settings | {"name":"Settings"} | {"width":28,"height":28,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Q48pj / JMExX | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"settings","library":"lucide","fill":"$op-text-2"} |
| SMvb2 / Jv72T | frame / Empty | {"name":"Empty"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":[40,32],"alignItems":"center"} |
| aVjsk / SMvb2 | frame / Icon | {"name":"Icon"} | {"width":48,"height":48,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| f2eL7p / aVjsk | icon / I | {"name":"I"} | {"width":22,"height":22,"icon":"circle-check","library":"lucide","fill":"$op-accent-text"} |
| wkgDh / SMvb2 | text / Title | {"name":"Title","content":"You're all caught up"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| k9TawZ / SMvb2 | text / Desc | {"name":"Desc","content":"Mentions, approvals, agent results and security alerts will show up here."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Kyiq8 / Jv72T | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"top":1},"padding":[12,16],"justifyContent":"center"} |
| VdFgT / Kyiq8 | text / L | {"name":"L","content":"View all activity"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
