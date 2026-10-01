# App Shell Preview

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| elsdp / root | frame / App Shell Preview | {"name":"App Shell Preview","reusable":true,"theme":{"mode":"light","family":"communicate"}} | {"x":8590,"y":1624,"clip":true,"width":600,"height":360,"fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1} |
| AoSog / elsdp | frame / Sidebar | {"name":"Sidebar"} | {"width":156,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":12,"padding":12} |
| OLUWx / AoSog | frame / Brand | {"name":"Brand"} | {"gap":8,"alignItems":"center"} |
| wY8Sb / OLUWx | frame / App Tile | {"name":"App Tile"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Znz9K / wY8Sb | icon / App Icon | {"name":"App Icon"} | {"width":12,"height":12,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| qB3tt / OLUWx | text / App Name | {"name":"App Name","content":"Inbox"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| o10vRP / AoSog | frame / Search | {"name":"Search"} | {"width":"fill_container","height":24,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| pkUqz / o10vRP | text / Placeholder | {"name":"Placeholder","content":"Search"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| WGlze / AoSog | frame / Nav | {"name":"Nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| v2nFdk / WGlze | frame / Nav Overview | {"name":"Nav Overview"} | {"width":"fill_container","height":26,"fill":"$op-nav-active","cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| aHy7c / v2nFdk | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"house","library":"lucide","fill":"$op-nav-text"} |
| yNRpS / v2nFdk | text / Label | {"name":"Label","content":"Overview"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| C0ATvZ / v2nFdk | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| E1mVWA / WGlze | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| n3bIxZ / E1mVWA | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| krXtT / E1mVWA | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| U56Pju / E1mVWA | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| a0vuO / WGlze | frame / Nav Recent | {"name":"Nav Recent"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| CcWcW / a0vuO | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"history","library":"lucide","fill":"$op-nav-text-2"} |
| t2qUj5 / a0vuO | text / Label | {"name":"Label","content":"Recent"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| RTvWP / WGlze | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| AUFAf / RTvWP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| R6F4aE / RTvWP | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| C5Cvk / elsdp | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| YmyLj / C5Cvk | frame / Header | {"name":"Header"} | {"width":"fill_container","height":40,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| U9makw / YmyLj | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Q7MrV / YmyLj | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| ISJHG / YmyLj | frame / Primary Button | {"name":"Primary Button"} | {"height":24,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| erWma / ISJHG | text / Label | {"name":"Label","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| e0WOA7 / YmyLj | frame / Global Actions | {"name":"Global Actions"} | {"gap":4,"alignItems":"center"} |
| ylPi2 / e0WOA7 | frame / Notifications Button | {"name":"Notifications Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| YN02U / ylPi2 | icon / Icon | {"name":"Icon"} | {"x":6.5,"y":6.5,"width":11,"height":11,"icon":"bell","library":"lucide","fill":"$op-text"} |
| GJQMh / ylPi2 | ellipse / Dot | {"name":"Dot"} | {"x":13.919999999999998,"y":4.5600000000000005,"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| RRm1B / e0WOA7 | frame / Agent Button | {"name":"Agent Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| TkZgD / RRm1B | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"bot","library":"lucide","fill":"$op-text"} |
| XtzQN / e0WOA7 | frame / Theme Button | {"name":"Theme Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| X9nwi / XtzQN | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| MKybV / e0WOA7 | frame / User Button | {"name":"User Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| NYkIy / MKybV | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"user","library":"lucide","fill":"$op-text"} |
| FDaMS / C5Cvk | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","height":32,"fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| cDnvO / FDaMS | frame / Search | {"name":"Search"} | {"width":140,"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| Jv0vp / cDnvO | text / Placeholder | {"name":"Placeholder","content":"Search items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| CyyPa / FDaMS | text / Count | {"name":"Count","content":"12 items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| C1b64 / C5Cvk | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":12,"padding":12} |
| B9GUUd / C1b64 | frame / Column Inbox | {"name":"Column Inbox"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| PMnG6 / B9GUUd | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| jD8VX / PMnG6 | text / Column Title | {"name":"Column Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| iYdXq / PMnG6 | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| hqgNp / iYdXq | text / Count | {"name":"Count","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| tfJO3 / B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| N8DlC9 / tfJO3 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| O7o3X9 / N8DlC9 | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| yqlMz / N8DlC9 | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| NHFKR / tfJO3 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| LXqvY / NHFKR | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| LIMy4 / NHFKR | text / Title | {"name":"Title","content":"Q3 paper stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| jPi6r / tfJO3 | text / Preview | {"name":"Preview","content":"Count is off by fourteen reams."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| i6bn8 / B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| d1E8e4 / i6bn8 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| RSNXj / d1E8e4 | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| mHXP6 / d1E8e4 | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| r0jlk9 / i6bn8 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| B5wI3c / r0jlk9 | text / Title | {"name":"Title","content":"Quote for Q4 stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| g2NB4z / i6bn8 | text / Preview | {"name":"Preview","content":"Updated unit prices attached."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| l5U1Zt / C1b64 | frame / Column Follow up | {"name":"Column Follow up"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| kukVM / l5U1Zt | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| EPcp3 / kukVM | text / Column Title | {"name":"Column Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| J701F / kukVM | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| jOzF1 / J701F | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| I7eHsX / l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| Krv8Y / I7eHsX | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| cAjTL / Krv8Y | text / Sender | {"name":"Sender","content":"Ana Cruz"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| Hwo4K / Krv8Y | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| aF80K / I7eHsX | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| Ukrvq / aF80K | text / Title | {"name":"Title","content":"Dock schedule"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| E1t4fm / I7eHsX | text / Preview | {"name":"Preview","content":"Print it at A3 for the exits."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| zs6MI / I7eHsX | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| I2Yjj / zs6MI | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":120,"height":4} |
| L8Pkw7 / l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| OPMJt / L8Pkw7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| cFPjJ / OPMJt | text / Sender | {"name":"Sender","content":"Northwind"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| aHfdE / OPMJt | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lTyOl / L8Pkw7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| dsZqp / lTyOl | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| vQrlg / lTyOl | text / Title | {"name":"Title","content":"Invoice NW-4471"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| C8C1y / L8Pkw7 | text / Preview | {"name":"Preview","content":"Needs sign-off before Friday."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| JH8sP / L8Pkw7 | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| updcu / JH8sP | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":4} |
