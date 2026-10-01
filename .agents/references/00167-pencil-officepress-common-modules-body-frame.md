# OfficePress Common Modules / Section · Message templates / Screens / Shot · Template editor · Order Processing Dispatch update / Template editor · Order Processing Dispatch update / Main / Body — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| o6T8B8 / cgYNL | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","layout":"vertical","gap":20,"padding":[24,32]} |
| xKExQ / o6T8B8 | frame / Page Head | {"name":"Page Head"} | {"width":"fill_container","gap":12,"alignItems":"end"} |
| XQeoH / xKExQ | frame / Title | {"name":"Title"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Gl19S / XQeoH | text / Crumb | {"name":"Crumb","content":"Messages  ›  Dispatch update"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| qlR9Y / XQeoH | text / T | {"name":"T","content":"Dispatch update"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| qX4Gb / XQeoH | text / D | {"name":"D","content":"Create reusable content, enter sample values, and check the resolved message before sending."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| e6C8yP / xKExQ | frame / Button · Send test | {"name":"Button · Send test"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| bE2Yt / e6C8yP | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"send","library":"lucide","fill":"$op-text"} |
| J061g / e6C8yP | text / Label | {"name":"Label","content":"Send test"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| C3JTK1 / xKExQ | frame / Button · Save message | {"name":"Button · Save message"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| OEb6L / C3JTK1 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"save","library":"lucide","fill":"$op-on-accent"} |
| RMP9t / C3JTK1 | text / Label | {"name":"Label","content":"Save message"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| UNzAL / o6T8B8 | frame / Split | {"name":"Split"} | {"width":"fill_container","gap":20} |
| H2Rfx4 / UNzAL | frame / Editor | {"name":"Editor"} | {"width":"fill_container","layout":"vertical","gap":20} |
| lSx8v / H2Rfx4 | frame / Details | {"name":"Details"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":16,"padding":20} |
| x7H7QJ / lSx8v | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| Btcje / x7H7QJ | frame / Field · Message name | {"name":"Field · Message name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| ychJJ / Btcje | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| RhxJR / ychJJ | text / Label | {"name":"Label","content":"Message name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| n5Wbsu / Btcje | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| E3uCX / n5Wbsu | text / Value | {"name":"Value","content":"Dispatch update"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| OiHBI / x7H7QJ | frame / Field · Status | {"name":"Field · Status"} | {"width":200,"layout":"vertical","gap":4} |
| v2MFwC / OiHBI | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| p3XPS4 / v2MFwC | text / Label | {"name":"Label","content":"Status"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| uZUB5 / OiHBI | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| hd1lY / uZUB5 | text / Value | {"name":"Value","content":"Active"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| w0mRr2 / uZUB5 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| wZp53 / lSx8v | frame / Channel | {"name":"Channel"} | {"width":"fill_container","layout":"vertical","gap":4} |
| WCpPW / wZp53 | text / L | {"name":"L","content":"Channel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| NNpbx / wZp53 | frame / Channel Tabs | {"name":"Channel Tabs"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":4,"alignItems":"center"} |
| pMoNX / NNpbx | frame / Email | {"name":"Email"} | {"width":"fill_container","height":32,"cornerRadius":4,"gap":4,"justifyContent":"center","alignItems":"center"} |
| a5hPuV / pMoNX | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| z72RJc / pMoNX | text / L | {"name":"L","content":"Email"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ci3lr / NNpbx | frame / SMS | {"name":"SMS"} | {"width":"fill_container","height":32,"cornerRadius":4,"gap":4,"justifyContent":"center","alignItems":"center"} |
| mrqal / ci3lr | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"message-square-text","library":"lucide","fill":"$op-text-2"} |
| pHh4Q / ci3lr | text / L | {"name":"L","content":"SMS"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| LahMo / NNpbx | frame / WhatsApp | {"name":"WhatsApp"} | {"width":"fill_container","height":32,"fill":"$op-surface","cornerRadius":4,"effect":{"type":"shadow","shadowType":"outer","color":"#0000001A","offset":{"x":0,"y":1},"blur":2},"gap":4,"justifyContent":"center","alignItems":"center"} |
| varmR / LahMo | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"message-circle","library":"lucide","fill":"$op-accent-text"} |
| eHSUx / LahMo | text / L | {"name":"L","content":"WhatsApp"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| SaYf0 / NNpbx | frame / Messenger | {"name":"Messenger"} | {"width":"fill_container","height":32,"cornerRadius":4,"gap":4,"justifyContent":"center","alignItems":"center"} |
| p4o4Y / SaYf0 | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"messages-square","library":"lucide","fill":"$op-text-2"} |
| Gj7KY / SaYf0 | text / L | {"name":"L","content":"Messenger"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| CEd2l / NNpbx | frame / Viber | {"name":"Viber"} | {"width":"fill_container","height":32,"cornerRadius":4,"gap":4,"justifyContent":"center","alignItems":"center"} |
| Ofefu / CEd2l | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"phone","library":"lucide","fill":"$op-text-2"} |
| eVYbL / CEd2l | text / L | {"name":"L","content":"Viber"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| LxbpQ / H2Rfx4 | frame / Content | {"name":"Content"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| Y4bKC / LxbpQ | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"padding":[16,20],"alignItems":"center"} |
| SwNQd / Y4bKC | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| eTdJN / SwNQd | text / L | {"name":"L","content":"MESSAGE CONTENT"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| s2egD / SwNQd | text / T | {"name":"T","content":"WhatsApp"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| TRPuc / Y4bKC | frame / Approval | {"name":"Approval"} | {"height":24,"fill":"$op-tint","cornerRadius":999,"gap":4,"padding":[0,12],"alignItems":"center"} |
| ANY3d / TRPuc | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"badge-check","library":"lucide","fill":"$op-on-tint"} |
| a38WaH / TRPuc | text / T | {"name":"T","content":"Approved by Meta"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| b00jP / LxbpQ | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":12,"padding":20} |
| sLnSD / b00jP | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| J1qrB / sLnSD | frame / bold | {"name":"bold"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| C5sly / J1qrB | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"bold","library":"lucide","fill":"$op-text-2"} |
| JvTP6 / sLnSD | frame / italic | {"name":"italic"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| osjl5 / JvTP6 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"italic","library":"lucide","fill":"$op-text-2"} |
| NdbTG / sLnSD | frame / strikethrough | {"name":"strikethrough"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| TV8i0 / NdbTG | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"strikethrough","library":"lucide","fill":"$op-text-2"} |
| vLZJT / sLnSD | frame / smile | {"name":"smile"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| xJbZy / vLZJT | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"smile","library":"lucide","fill":"$op-text-2"} |
| a2Hs4 / sLnSD | frame / link | {"name":"link"} | {"width":32,"height":32,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| NYljZ / a2Hs4 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"link","library":"lucide","fill":"$op-text-2"} |
| qaxhq / sLnSD | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| t8gVEj / sLnSD | frame / Insert Variable | {"name":"Insert Variable"} | {"height":32,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":4,"padding":[0,12],"alignItems":"center"} |
| zclN3 / t8gVEj | icon / I | {"name":"I"} | {"width":14,"height":14,"icon":"braces","library":"lucide","fill":"$op-accent-text"} |
| k0MN7 / t8gVEj | text / L | {"name":"L","content":"Insert variable"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| b00tgC / b00jP | frame / Text Area | {"name":"Text Area"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":8,"stroke":"$op-accent","strokeWidth":2,"layout":"vertical","gap":8,"padding":16} |
| bZRUv / b00tgC | frame / Line | {"name":"Line"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| Et2lf / bZRUv | text / T | {"name":"T","content":"Hi"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| MkEdp / bZRUv | frame / Var | {"name":"Var"} | {"height":22,"fill":"$op-tint","cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| CwHW9 / MkEdp | text / V | {"name":"V","content":"{{customer.firstName}}"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| x8LGY / bZRUv | text / T | {"name":"T","content":", your order"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| nwKlZ / bZRUv | frame / Var | {"name":"Var"} | {"height":22,"fill":"$op-tint","cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| aCsOv / nwKlZ | text / V | {"name":"V","content":"{{order.number}}"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| o6Mg57 / bZRUv | text / T | {"name":"T","content":"is on its way!"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| yUm39 / b00tgC | frame / Line | {"name":"Line"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| ldMHr / yUm39 | text / T | {"name":"T","content":"🚚 Carrier:"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| orluz / yUm39 | frame / Var | {"name":"Var"} | {"height":22,"fill":"$op-tint","cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| svqje / orluz | text / V | {"name":"V","content":"{{shipment.carrier}}"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| ikehd / b00tgC | frame / Line | {"name":"Line"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| hizZB / ikehd | text / T | {"name":"T","content":"📦 Tracking:"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| EFMYN / ikehd | frame / Var | {"name":"Var"} | {"height":22,"fill":"$op-tint","cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| S4tEVH / EFMYN | text / V | {"name":"V","content":"{{shipment.trackingNumber}}"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| T74j5O / b00tgC | frame / Line | {"name":"Line"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| XMYCm / T74j5O | text / T | {"name":"T","content":"Expected delivery:"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| WmEUQ / T74j5O | frame / Var | {"name":"Var"} | {"height":22,"fill":"$op-tint","cornerRadius":4,"padding":[0,8],"alignItems":"center"} |
| XgxuM / WmEUQ | text / V | {"name":"V","content":"{{delivery_window}}"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| llcwE / b00tgC | frame / Line | {"name":"Line"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| wqLqY / llcwE | text / T | {"name":"T","content":"Reply STOP to opt out."} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| AIao2 / b00jP | frame / Counter | {"name":"Counter"} | {"width":"fill_container","justifyContent":"space_between"} |
| V1wzB / AIao2 | text / L | {"name":"L","content":"Plain text · emoji allowed · no attachments"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zVnIw / AIao2 | text / R | {"name":"R","content":"182 / 1024 characters"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P0aoN / H2Rfx4 | frame / Variables | {"name":"Variables"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical"} |
| TXBd3 / P0aoN | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"padding":[16,20],"alignItems":"center"} |
| I1sZrC / TXBd3 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| XNhpT / I1sZrC | text / L | {"name":"L","content":"MUSTACHE VARIABLES"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":1} |
| YpMNr / I1sZrC | text / T | {"name":"T","content":"Variables · 5 detected"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| V6tbzD / P0aoN | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":8,"padding":20} |
| kWQIN / V6tbzD | frame / Add | {"name":"Add"} | {"width":"fill_container","gap":8} |
| aXT9K / kWQIN | frame / Input | {"name":"Input"} | {"width":"fill_container","height":36,"cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| RFGnp / aXT9K | text / P | {"name":"P","content":"custom_variable"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"normal"} |
| nM0g5 / kWQIN | frame / Button · Add variable | {"name":"Button · Add variable"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| f3vsYj / nM0g5 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"plus","library":"lucide","fill":"$op-text"} |
| tPXyh / nM0g5 | text / Label | {"name":"Label","content":"Add variable"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| p41VDy / V6tbzD | frame / Var {{customer.firstName}} | {"name":"Var {{customer.firstName}}"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"padding":[8,12],"alignItems":"center"} |
| dCelS / p41VDy | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| IShhy / dCelS | text / V | {"name":"V","content":"{{customer.firstName}}"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| YoY4l / dCelS | text / D | {"name":"D","content":"From the customer record"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Mv1uN / p41VDy | frame / Kind | {"name":"Kind"} | {"height":22,"fill":"$op-tint","cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| na8yp / Mv1uN | text / K | {"name":"K","content":"Automatic"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| juHKZ / V6tbzD | frame / Var {{order.number}} | {"name":"Var {{order.number}}"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"padding":[8,12],"alignItems":"center"} |
| t4G6oW / juHKZ | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| wzWDH / t4G6oW | text / V | {"name":"V","content":"{{order.number}}"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| LBrVH / t4G6oW | text / D | {"name":"D","content":"From the order"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| kIEeD / juHKZ | frame / Kind | {"name":"Kind"} | {"height":22,"fill":"$op-tint","cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| k7X1Wn / kIEeD | text / K | {"name":"K","content":"Automatic"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| CzMGo / V6tbzD | frame / Var {{shipment.carrier}} | {"name":"Var {{shipment.carrier}}"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"padding":[8,12],"alignItems":"center"} |
| Xir7B / CzMGo | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| hoElg / Xir7B | text / V | {"name":"V","content":"{{shipment.carrier}}"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| BXb7a / Xir7B | text / D | {"name":"D","content":"From the shipment"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| Zq1YX / CzMGo | frame / Kind | {"name":"Kind"} | {"height":22,"fill":"$op-tint","cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| jBvpv / Zq1YX | text / K | {"name":"K","content":"Automatic"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| J2kKo9 / V6tbzD | frame / Var {{shipment.trackingNumber}} | {"name":"Var {{shipment.trackingNumber}}"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"padding":[8,12],"alignItems":"center"} |
| HaTnH / J2kKo9 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| eUPRo / HaTnH | text / V | {"name":"V","content":"{{shipment.trackingNumber}}"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| j7gGk / HaTnH | text / D | {"name":"D","content":"From the shipment"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| S4K4P / J2kKo9 | frame / Kind | {"name":"Kind"} | {"height":22,"fill":"$op-tint","cornerRadius":999,"padding":[0,12],"alignItems":"center"} |
| X83oCK / S4K4P | text / K | {"name":"K","content":"Automatic"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| JThA9 / V6tbzD | frame / Var {{delivery_window}} | {"name":"Var {{delivery_window}}"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"padding":[8,12],"alignItems":"center"} |
| DD32z / JThA9 | frame / T | {"name":"T"} | {"width":"fill_container","layout":"vertical"} |
| GjG2D / DD32z | text / V | {"name":"V","content":"{{delivery_window}}"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":12,"fontWeight":"700"} |
| s4vZ2 / DD32z | text / D | {"name":"D","content":"Asked for at send time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P1KxI / JThA9 | frame / Kind | {"name":"Kind"} | {"height":22,"cornerRadius":999,"stroke":"$op-accent","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| N9ynXr / P1KxI | text / K | {"name":"K","content":"Custom"} | {"fill":"$op-accent-text","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
