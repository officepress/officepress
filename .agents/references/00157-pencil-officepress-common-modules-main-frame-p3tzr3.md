# OfficePress Common Modules / Section · Workflows / Screens / Shot · Workflow designer · Order Processing / Workflow designer · Order Processing / Main — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| P3tZr3 / DcapU | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| Su5nz / P3tZr3 | frame / Header | {"name":"Header","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| Su5nz/NL2v5 / Su5nz | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Su5nz/v0pIr4 / Su5nz/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"panel-left","library":"lucide","fill":"$op-text"} |
| Su5nz/E8PtZC / Su5nz | text / Page Title | {"name":"Page Title","content":"Edit workflow"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| Su5nz/G3t23s / Su5nz | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| Su5nz/dtuXO / Su5nz | frame / Page Actions | {"name":"Page Actions"} | {"x":863,"y":14,"enabled":false,"gap":12,"alignItems":"center"} |
| Su5nz/H5cU4B / Su5nz/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| Su5nz/I7kF1e / Su5nz/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| Su5nz/vQMp0 / Su5nz/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Su5nz/qS8da / Su5nz/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| Su5nz/f6Nm4U / Su5nz | rectangle / Divider | {"name":"Divider"} | {"x":983,"y":20,"enabled":false,"fill":"$op-border","width":1,"height":24} |
| Su5nz/BTxZN / Su5nz | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| Su5nz/fawPG / Su5nz/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| Su5nz/MT9A7 / Su5nz/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| Su5nz/SkOaY / Su5nz/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| Su5nz/XGyoO / Su5nz/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Su5nz/C5tCn / Su5nz/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| Su5nz/szMHy / Su5nz/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Su5nz/K5uDK / Su5nz/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| Su5nz/I60pf / Su5nz/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Su5nz/h47xa8 / Su5nz/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| dCyof / P3tZr3 | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical","gap":20,"padding":[24,32]} |
| L95ZV / dCyof | frame / Page Head | {"name":"Page Head"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| j97aTz / L95ZV | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical","gap":4} |
| TJ6x0 / j97aTz | text / Crumb | {"name":"Crumb","content":"Workflows  ›  Standard fulfilment"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| YaSGZ / j97aTz | text / T | {"name":"T","content":"Standard fulfilment"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| T3uQG5 / L95ZV | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| l8BpuK / T3uQG5 | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| xUOla / L95ZV | frame / Button · Save workflow | {"name":"Button · Save workflow"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| wueoE / xUOla | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"save","library":"lucide","fill":"$op-on-accent"} |
| K3MjD / xUOla | text / Label | {"name":"Label","content":"Save workflow"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| MRH72 / dCyof | frame / Section · Workflow details | {"name":"Section · Workflow details"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| lwwD9 / MRH72 | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| BdKQj / lwwD9 | text / Title | {"name":"Title","content":"Workflow details"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| ihKBt / lwwD9 | text / Desc | {"name":"Desc","content":"Name, purpose and who can see its cards."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| AMLhn / MRH72 | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| wkeWe / AMLhn | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| jzwTO / wkeWe | frame / Field · Workflow name | {"name":"Field · Workflow name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| VBBTA / jzwTO | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| I6gVkR / VBBTA | text / Label | {"name":"Label","content":"Workflow name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| MNdMc / jzwTO | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| ZZmyP / MNdMc | text / Value | {"name":"Value","content":"Standard fulfilment"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| zBtD6 / wkeWe | frame / Field · Status | {"name":"Field · Status"} | {"width":200,"layout":"vertical","gap":4} |
| ZOIEd / zBtD6 | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| jWYQY / ZOIEd | text / Label | {"name":"Label","content":"Status"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| F3bkFv / zBtD6 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| tofZw / F3bkFv | text / Value | {"name":"Value","content":"Active"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| OtPZW / F3bkFv | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| h8aP4 / wkeWe | frame / Field · Card visibility | {"name":"Field · Card visibility"} | {"width":240,"layout":"vertical","gap":4} |
| pAG0Y / h8aP4 | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| bpH22 / pAG0Y | text / Label | {"name":"Label","content":"Card visibility"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Ne6KM / h8aP4 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| DDrpr / Ne6KM | text / Value | {"name":"Value","content":"Workflow members"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| z43rkW / Ne6KM | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| cOFk3 / AMLhn | frame / Field · Description | {"name":"Field · Description"} | {"width":"fill_container","layout":"vertical","gap":4} |
| qdBFi / cOFk3 | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| od1xV / qdBFi | text / Label | {"name":"Label","content":"Description"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| w7yGb / cOFk3 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| L9kijk / w7yGb | text / Value | {"name":"Value","content":"Move paid orders from picking through packing and dispatch to delivery."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| k8xSY / dCyof | frame / Split | {"name":"Split"} | {"width":"fill_container","gap":20} |
| Gxwt5 / k8xSY | frame / Stages | {"name":"Stages"} | {"width":300,"fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":8,"padding":16} |
| SQMyS / Gxwt5 | frame / Head | {"name":"Head"} | {"width":"fill_container","padding":[0,0,4,0],"alignItems":"center"} |
| Jqrqk / SQMyS | text / T | {"name":"T","content":"Stages"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| KcCAu / SQMyS | frame / Button · Add | {"name":"Button · Add"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| gsZNj / KcCAu | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"plus","library":"lucide","fill":"$op-text"} |
| PGZ6b / KcCAu | text / Label | {"name":"Label","content":"Add"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| WYRh0 / Gxwt5 | frame / Stage · Received | {"name":"Stage · Received"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| GYGux / WYRh0 | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| hBB1A / WYRh0 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| BADO6 / hBB1A | text / N | {"name":"N","content":"Received"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ybT23 / hBB1A | text / D | {"name":"D","content":"Stage 1 · source"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| r5GXW / WYRh0 | icon / Up | {"name":"Up"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| M8dPEz / WYRh0 | icon / Down | {"name":"Down"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| y72jk / Gxwt5 | frame / Stage · Picking | {"name":"Stage · Picking"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"stroke":"$op-accent","strokeWidth":2,"gap":8,"padding":12,"alignItems":"center"} |
| ahMpx / y72jk | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| qBdLe / y72jk | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| uiElD / qBdLe | text / N | {"name":"N","content":"Picking"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| HYjzU / qBdLe | text / D | {"name":"D","content":"Stage 2"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| EXNGR / y72jk | icon / Up | {"name":"Up"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| JG8fK / y72jk | icon / Down | {"name":"Down"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| OmR10 / Gxwt5 | frame / Stage · Packed | {"name":"Stage · Packed"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| l1xx3s / OmR10 | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| y5PKvd / OmR10 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| XjqsT / y5PKvd | text / N | {"name":"N","content":"Packed"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| NXU3r / y5PKvd | text / D | {"name":"D","content":"Stage 3"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| aFgOm / OmR10 | icon / Up | {"name":"Up"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| snXdr / OmR10 | icon / Down | {"name":"Down"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| JamAy / Gxwt5 | frame / Stage · Shipped | {"name":"Stage · Shipped"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| SPC8v / JamAy | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| kbBDB / JamAy | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| J58ZpG / kbBDB | text / N | {"name":"N","content":"Shipped"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| n76MS / kbBDB | text / D | {"name":"D","content":"Stage 4"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| uo46Q / JamAy | icon / Up | {"name":"Up"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| ixghv / JamAy | icon / Down | {"name":"Down"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| WaKby / Gxwt5 | frame / Stage · Delivered | {"name":"Stage · Delivered"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":8,"padding":12,"alignItems":"center"} |
| COwGt / WaKby | icon / Drag | {"name":"Drag"} | {"width":14,"height":14,"icon":"grip-vertical","library":"lucide","fill":"$op-text-2"} |
| DQMFR / WaKby | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| z7WMPJ / DQMFR | text / N | {"name":"N","content":"Delivered"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| hcE9v / DQMFR | text / D | {"name":"D","content":"Stage 5 · final"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| w9a0T / WaKby | icon / Up | {"name":"Up"} | {"width":14,"height":14,"icon":"chevron-up","library":"lucide","fill":"$op-text-2"} |
| ixTob / WaKby | icon / Down | {"name":"Down"} | {"width":14,"height":14,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
