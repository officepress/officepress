# C · Sidebar Rail

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| Rs0LS / root | frame / C · Sidebar Rail | {"name":"C · Sidebar Rail","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":10160,"y":2493,"width":64,"height":900,"fill":"$op-nav","layout":"vertical","gap":8,"padding":[16,12],"alignItems":"center"} |
| Q1QnH / Rs0LS | frame / Logo | {"name":"Logo"} | {"width":32,"height":32,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| QGJIF / Q1QnH | icon / Logo Icon | {"name":"Logo Icon"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| r4HeYt / Rs0LS | frame / Expand | {"name":"Expand"} | {"width":40,"height":40,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| AX4yB / r4HeYt | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left-open","library":"lucide","fill":"$op-nav-text-2"} |
| kGKiP / Rs0LS | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-nav-border","width":24,"height":1} |
| yM2Se / Rs0LS | frame / Rail inbox | {"name":"Rail inbox"} | {"width":40,"height":40,"fill":"$op-nav-active","cornerRadius":4,"layout":"none"} |
| ciu9M / yM2Se | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"$op-nav-text"} |
| WmDYi / yM2Se | ellipse / Dot | {"name":"Dot"} | {"x":26,"y":8,"fill":"$op-nav-dot","width":7,"height":7} |
| pzTCm / Rs0LS | frame / Rail star | {"name":"Rail star"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| uriFe / pzTCm | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| oMLQh / pzTCm | ellipse / Dot | {"name":"Dot"} | {"x":26,"y":8,"fill":"$op-nav-dot","width":7,"height":7} |
| a7is4y / Rs0LS | frame / Rail send | {"name":"Rail send"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| dS2gS / a7is4y | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"send","library":"lucide","fill":"$op-nav-text-2"} |
| ysvFv / Rs0LS | frame / Rail file | {"name":"Rail file"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| MA4bc / ysvFv | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"file","library":"lucide","fill":"$op-nav-text-2"} |
| vNPHP / Rs0LS | frame / Rail archive | {"name":"Rail archive"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| HaNy6 / vNPHP | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| A2TbAT / Rs0LS | frame / Rail octagon-alert | {"name":"Rail octagon-alert"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| q2cfs3 / A2TbAT | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"octagon-alert","library":"lucide","fill":"$op-nav-text-2"} |
| kOqhf / Rs0LS | frame / Rail mails | {"name":"Rail mails"} | {"width":40,"height":40,"cornerRadius":4,"layout":"none"} |
| i67jj / kOqhf | icon / Icon | {"name":"Icon"} | {"x":11,"y":11,"width":18,"height":18,"icon":"mails","library":"lucide","fill":"$op-nav-text-2"} |
| jezK8 / Rs0LS | frame / Spacer | {"name":"Spacer"} | {"width":1,"height":"fill_container"} |
| FKfY0 / Rs0LS | frame / Help | {"name":"Help"} | {"width":40,"height":40,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| uYpXb / FKfY0 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"life-buoy","library":"lucide","fill":"$op-nav-text-2"} |
