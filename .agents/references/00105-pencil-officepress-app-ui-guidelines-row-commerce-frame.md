# OfficePress App UI Guidelines / Section · Families in the shell / Row · Commerce — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| ucXjR / sdjAb | frame / Row · Commerce | {"name":"Row · Commerce"} | {"width":"fill_container","gap":24,"alignItems":"center"} |
| ed5IF / ucXjR | frame / Label | {"name":"Label"} | {"width":"fill_container","layout":"vertical","gap":6} |
| MviwG / ed5IF | text / Family | {"name":"Family","content":"Commerce"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":22,"fontWeight":"700"} |
| koPr1 / ed5IF | text / Key | {"name":"Key","content":"family: \"commerce\""} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| olnx4 / ucXjR | frame / Orders · light | {"name":"Orders · light","theme":{"mode":"light","family":"commerce"}} | {"clip":true,"width":600,"height":360,"fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1} |
| olnx4/AoSog / olnx4 | frame / Sidebar | {"name":"Sidebar"} | {"width":156,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":12,"padding":12} |
| olnx4/OLUWx / olnx4/AoSog | frame / Brand | {"name":"Brand"} | {"gap":8,"alignItems":"center"} |
| olnx4/wY8Sb / olnx4/OLUWx | frame / App Tile | {"name":"App Tile"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| olnx4/Znz9K / olnx4/wY8Sb | icon / App Icon | {"name":"App Icon"} | {"width":12,"height":12,"icon":"receipt","library":"lucide","fill":"#FFFFFF"} |
| olnx4/qB3tt / olnx4/OLUWx | text / App Name | {"name":"App Name","content":"Orders"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| olnx4/o10vRP / olnx4/AoSog | frame / Search | {"name":"Search"} | {"width":"fill_container","height":24,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| olnx4/pkUqz / olnx4/o10vRP | text / Placeholder | {"name":"Placeholder","content":"Search"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/WGlze / olnx4/AoSog | frame / Nav | {"name":"Nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| olnx4/v2nFdk / olnx4/WGlze | frame / Nav Overview | {"name":"Nav Overview"} | {"width":"fill_container","height":26,"fill":"$op-nav-active","cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| olnx4/aHy7c / olnx4/v2nFdk | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"house","library":"lucide","fill":"$op-nav-text"} |
| olnx4/yNRpS / olnx4/v2nFdk | text / Label | {"name":"Label","content":"Overview"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/C0ATvZ / olnx4/v2nFdk | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| olnx4/E1mVWA / olnx4/WGlze | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| olnx4/n3bIxZ / olnx4/E1mVWA | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| olnx4/krXtT / olnx4/E1mVWA | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/U56Pju / olnx4/E1mVWA | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| olnx4/a0vuO / olnx4/WGlze | frame / Nav Recent | {"name":"Nav Recent"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| olnx4/CcWcW / olnx4/a0vuO | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"history","library":"lucide","fill":"$op-nav-text-2"} |
| olnx4/t2qUj5 / olnx4/a0vuO | text / Label | {"name":"Label","content":"Recent"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/RTvWP / olnx4/WGlze | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| olnx4/AUFAf / olnx4/RTvWP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| olnx4/R6F4aE / olnx4/RTvWP | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/C5Cvk / olnx4 | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| olnx4/YmyLj / olnx4/C5Cvk | frame / Header | {"name":"Header"} | {"width":"fill_container","height":40,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| olnx4/U9makw / olnx4/YmyLj | text / Page Title | {"name":"Page Title","content":"Orders"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| olnx4/Q7MrV / olnx4/YmyLj | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| olnx4/ISJHG / olnx4/YmyLj | frame / Primary Button | {"name":"Primary Button"} | {"height":24,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| olnx4/erWma / olnx4/ISJHG | text / Label | {"name":"Label","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/e0WOA7 / olnx4/YmyLj | frame / Global Actions | {"name":"Global Actions"} | {"gap":4,"alignItems":"center"} |
| olnx4/ylPi2 / olnx4/e0WOA7 | frame / Notifications Button | {"name":"Notifications Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| olnx4/YN02U / olnx4/ylPi2 | icon / Icon | {"name":"Icon"} | {"x":6.5,"y":6.5,"width":11,"height":11,"icon":"bell","library":"lucide","fill":"$op-text"} |
| olnx4/GJQMh / olnx4/ylPi2 | ellipse / Dot | {"name":"Dot"} | {"x":13.919999999999998,"y":4.5600000000000005,"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| olnx4/RRm1B / olnx4/e0WOA7 | frame / Agent Button | {"name":"Agent Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| olnx4/TkZgD / olnx4/RRm1B | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"bot","library":"lucide","fill":"$op-text"} |
| olnx4/XtzQN / olnx4/e0WOA7 | frame / Theme Button | {"name":"Theme Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| olnx4/X9nwi / olnx4/XtzQN | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| olnx4/MKybV / olnx4/e0WOA7 | frame / User Button | {"name":"User Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| olnx4/NYkIy / olnx4/MKybV | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"user","library":"lucide","fill":"$op-text"} |
| olnx4/FDaMS / olnx4/C5Cvk | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","height":32,"fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| olnx4/cDnvO / olnx4/FDaMS | frame / Search | {"name":"Search"} | {"width":140,"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| olnx4/Jv0vp / olnx4/cDnvO | text / Placeholder | {"name":"Placeholder","content":"Search items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/CyyPa / olnx4/FDaMS | text / Count | {"name":"Count","content":"12 items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/C1b64 / olnx4/C5Cvk | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":12,"padding":12} |
| olnx4/B9GUUd / olnx4/C1b64 | frame / Column Inbox | {"name":"Column Inbox"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| olnx4/PMnG6 / olnx4/B9GUUd | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| olnx4/jD8VX / olnx4/PMnG6 | text / Column Title | {"name":"Column Title","content":"New orders"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/iYdXq / olnx4/PMnG6 | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| olnx4/hqgNp / olnx4/iYdXq | text / Count | {"name":"Count","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/tfJO3 / olnx4/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| olnx4/N8DlC9 / olnx4/tfJO3 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| olnx4/O7o3X9 / olnx4/N8DlC9 | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/yqlMz / olnx4/N8DlC9 | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/NHFKR / olnx4/tfJO3 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| olnx4/LXqvY / olnx4/NHFKR | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| olnx4/LIMy4 / olnx4/NHFKR | text / Title | {"name":"Title","content":"Q3 paper stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/jPi6r / olnx4/tfJO3 | text / Preview | {"name":"Preview","content":"Count is off by fourteen reams."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/i6bn8 / olnx4/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| olnx4/d1E8e4 / olnx4/i6bn8 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| olnx4/RSNXj / olnx4/d1E8e4 | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/mHXP6 / olnx4/d1E8e4 | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/r0jlk9 / olnx4/i6bn8 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| olnx4/B5wI3c / olnx4/r0jlk9 | text / Title | {"name":"Title","content":"Quote for Q4 stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/g2NB4z / olnx4/i6bn8 | text / Preview | {"name":"Preview","content":"Updated unit prices attached."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/l5U1Zt / olnx4/C1b64 | frame / Column Follow up | {"name":"Column Follow up"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| olnx4/kukVM / olnx4/l5U1Zt | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| olnx4/EPcp3 / olnx4/kukVM | text / Column Title | {"name":"Column Title","content":"Ready to ship"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/J701F / olnx4/kukVM | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| olnx4/jOzF1 / olnx4/J701F | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/I7eHsX / olnx4/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| olnx4/Krv8Y / olnx4/I7eHsX | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| olnx4/cAjTL / olnx4/Krv8Y | text / Sender | {"name":"Sender","content":"Ana Cruz"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/Hwo4K / olnx4/Krv8Y | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/aF80K / olnx4/I7eHsX | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| olnx4/Ukrvq / olnx4/aF80K | text / Title | {"name":"Title","content":"Dock schedule"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/E1t4fm / olnx4/I7eHsX | text / Preview | {"name":"Preview","content":"Print it at A3 for the exits."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/zs6MI / olnx4/I7eHsX | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| olnx4/I2Yjj / olnx4/zs6MI | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":120,"height":4} |
| olnx4/L8Pkw7 / olnx4/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| olnx4/OPMJt / olnx4/L8Pkw7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| olnx4/cFPjJ / olnx4/OPMJt | text / Sender | {"name":"Sender","content":"Northwind"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/aHfdE / olnx4/OPMJt | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/lTyOl / olnx4/L8Pkw7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| olnx4/dsZqp / olnx4/lTyOl | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| olnx4/vQrlg / olnx4/lTyOl | text / Title | {"name":"Title","content":"Invoice NW-4471"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| olnx4/C8C1y / olnx4/L8Pkw7 | text / Preview | {"name":"Preview","content":"Needs sign-off before Friday."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| olnx4/JH8sP / olnx4/L8Pkw7 | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| olnx4/updcu / olnx4/JH8sP | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":4} |
