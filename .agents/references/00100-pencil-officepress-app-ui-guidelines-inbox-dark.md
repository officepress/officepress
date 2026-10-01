# OfficePress App UI Guidelines / Section · Families in the shell / Row · Communicate / Inbox · dark

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| P6Wll / WFoaY | frame / Inbox · dark | {"name":"Inbox · dark","theme":{"mode":"dark","family":"communicate"}} | {"clip":true,"width":600,"height":360,"fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1} |
| P6Wll/AoSog / P6Wll | frame / Sidebar | {"name":"Sidebar"} | {"width":156,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":12,"padding":12} |
| P6Wll/OLUWx / P6Wll/AoSog | frame / Brand | {"name":"Brand"} | {"gap":8,"alignItems":"center"} |
| P6Wll/wY8Sb / P6Wll/OLUWx | frame / App Tile | {"name":"App Tile"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| P6Wll/Znz9K / P6Wll/wY8Sb | icon / App Icon | {"name":"App Icon"} | {"width":12,"height":12,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| P6Wll/qB3tt / P6Wll/OLUWx | text / App Name | {"name":"App Name","content":"Inbox"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| P6Wll/o10vRP / P6Wll/AoSog | frame / Search | {"name":"Search"} | {"width":"fill_container","height":24,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| P6Wll/pkUqz / P6Wll/o10vRP | text / Placeholder | {"name":"Placeholder","content":"Search"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/WGlze / P6Wll/AoSog | frame / Nav | {"name":"Nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| P6Wll/v2nFdk / P6Wll/WGlze | frame / Nav Overview | {"name":"Nav Overview"} | {"width":"fill_container","height":26,"fill":"$op-nav-active","cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| P6Wll/aHy7c / P6Wll/v2nFdk | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"house","library":"lucide","fill":"$op-nav-text"} |
| P6Wll/yNRpS / P6Wll/v2nFdk | text / Label | {"name":"Label","content":"Overview"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/C0ATvZ / P6Wll/v2nFdk | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| P6Wll/E1mVWA / P6Wll/WGlze | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| P6Wll/n3bIxZ / P6Wll/E1mVWA | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| P6Wll/krXtT / P6Wll/E1mVWA | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/U56Pju / P6Wll/E1mVWA | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| P6Wll/a0vuO / P6Wll/WGlze | frame / Nav Recent | {"name":"Nav Recent"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| P6Wll/CcWcW / P6Wll/a0vuO | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"history","library":"lucide","fill":"$op-nav-text-2"} |
| P6Wll/t2qUj5 / P6Wll/a0vuO | text / Label | {"name":"Label","content":"Recent"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/RTvWP / P6Wll/WGlze | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| P6Wll/AUFAf / P6Wll/RTvWP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| P6Wll/R6F4aE / P6Wll/RTvWP | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/C5Cvk / P6Wll | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| P6Wll/YmyLj / P6Wll/C5Cvk | frame / Header | {"name":"Header"} | {"width":"fill_container","height":40,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| P6Wll/U9makw / P6Wll/YmyLj | text / Page Title | {"name":"Page Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| P6Wll/Q7MrV / P6Wll/YmyLj | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| P6Wll/ISJHG / P6Wll/YmyLj | frame / Primary Button | {"name":"Primary Button"} | {"height":24,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| P6Wll/erWma / P6Wll/ISJHG | text / Label | {"name":"Label","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/e0WOA7 / P6Wll/YmyLj | frame / Global Actions | {"name":"Global Actions"} | {"gap":4,"alignItems":"center"} |
| P6Wll/ylPi2 / P6Wll/e0WOA7 | frame / Notifications Button | {"name":"Notifications Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| P6Wll/YN02U / P6Wll/ylPi2 | icon / Icon | {"name":"Icon"} | {"x":6.5,"y":6.5,"width":11,"height":11,"icon":"bell","library":"lucide","fill":"$op-text"} |
| P6Wll/GJQMh / P6Wll/ylPi2 | ellipse / Dot | {"name":"Dot"} | {"x":13.919999999999998,"y":4.5600000000000005,"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| P6Wll/RRm1B / P6Wll/e0WOA7 | frame / Agent Button | {"name":"Agent Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| P6Wll/TkZgD / P6Wll/RRm1B | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"bot","library":"lucide","fill":"$op-text"} |
| P6Wll/XtzQN / P6Wll/e0WOA7 | frame / Theme Button | {"name":"Theme Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| P6Wll/X9nwi / P6Wll/XtzQN | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| P6Wll/MKybV / P6Wll/e0WOA7 | frame / User Button | {"name":"User Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| P6Wll/NYkIy / P6Wll/MKybV | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"user","library":"lucide","fill":"$op-text"} |
| P6Wll/FDaMS / P6Wll/C5Cvk | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","height":32,"fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| P6Wll/cDnvO / P6Wll/FDaMS | frame / Search | {"name":"Search"} | {"width":140,"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| P6Wll/Jv0vp / P6Wll/cDnvO | text / Placeholder | {"name":"Placeholder","content":"Search items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/CyyPa / P6Wll/FDaMS | text / Count | {"name":"Count","content":"12 items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/C1b64 / P6Wll/C5Cvk | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":12,"padding":12} |
| P6Wll/B9GUUd / P6Wll/C1b64 | frame / Column Inbox | {"name":"Column Inbox"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| P6Wll/PMnG6 / P6Wll/B9GUUd | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| P6Wll/jD8VX / P6Wll/PMnG6 | text / Column Title | {"name":"Column Title","content":"Inbox"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/iYdXq / P6Wll/PMnG6 | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| P6Wll/hqgNp / P6Wll/iYdXq | text / Count | {"name":"Count","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/tfJO3 / P6Wll/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| P6Wll/N8DlC9 / P6Wll/tfJO3 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| P6Wll/O7o3X9 / P6Wll/N8DlC9 | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/yqlMz / P6Wll/N8DlC9 | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/NHFKR / P6Wll/tfJO3 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| P6Wll/LXqvY / P6Wll/NHFKR | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| P6Wll/LIMy4 / P6Wll/NHFKR | text / Title | {"name":"Title","content":"Q3 paper stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/jPi6r / P6Wll/tfJO3 | text / Preview | {"name":"Preview","content":"Count is off by fourteen reams."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/i6bn8 / P6Wll/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| P6Wll/d1E8e4 / P6Wll/i6bn8 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| P6Wll/RSNXj / P6Wll/d1E8e4 | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/mHXP6 / P6Wll/d1E8e4 | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/r0jlk9 / P6Wll/i6bn8 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| P6Wll/B5wI3c / P6Wll/r0jlk9 | text / Title | {"name":"Title","content":"Quote for Q4 stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/g2NB4z / P6Wll/i6bn8 | text / Preview | {"name":"Preview","content":"Updated unit prices attached."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/l5U1Zt / P6Wll/C1b64 | frame / Column Follow up | {"name":"Column Follow up"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| P6Wll/kukVM / P6Wll/l5U1Zt | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| P6Wll/EPcp3 / P6Wll/kukVM | text / Column Title | {"name":"Column Title","content":"Follow up"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/J701F / P6Wll/kukVM | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| P6Wll/jOzF1 / P6Wll/J701F | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/I7eHsX / P6Wll/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| P6Wll/Krv8Y / P6Wll/I7eHsX | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| P6Wll/cAjTL / P6Wll/Krv8Y | text / Sender | {"name":"Sender","content":"Ana Cruz"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/Hwo4K / P6Wll/Krv8Y | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/aF80K / P6Wll/I7eHsX | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| P6Wll/Ukrvq / P6Wll/aF80K | text / Title | {"name":"Title","content":"Dock schedule"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/E1t4fm / P6Wll/I7eHsX | text / Preview | {"name":"Preview","content":"Print it at A3 for the exits."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/zs6MI / P6Wll/I7eHsX | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| P6Wll/I2Yjj / P6Wll/zs6MI | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":120,"height":4} |
| P6Wll/L8Pkw7 / P6Wll/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| P6Wll/OPMJt / P6Wll/L8Pkw7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| P6Wll/cFPjJ / P6Wll/OPMJt | text / Sender | {"name":"Sender","content":"Northwind"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/aHfdE / P6Wll/OPMJt | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/lTyOl / P6Wll/L8Pkw7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| P6Wll/dsZqp / P6Wll/lTyOl | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| P6Wll/vQrlg / P6Wll/lTyOl | text / Title | {"name":"Title","content":"Invoice NW-4471"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| P6Wll/C8C1y / P6Wll/L8Pkw7 | text / Preview | {"name":"Preview","content":"Needs sign-off before Friday."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| P6Wll/JH8sP / P6Wll/L8Pkw7 | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| P6Wll/updcu / P6Wll/JH8sP | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":4} |
