# OfficePress App UI Guidelines / Section · Families in the shell / Row · Operate / Accounting · dark

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| N2hjw / Ry2FE | frame / Accounting · dark | {"name":"Accounting · dark","theme":{"mode":"dark","family":"operate"}} | {"clip":true,"width":600,"height":360,"fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1} |
| N2hjw/AoSog / N2hjw | frame / Sidebar | {"name":"Sidebar"} | {"width":156,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":12,"padding":12} |
| N2hjw/OLUWx / N2hjw/AoSog | frame / Brand | {"name":"Brand"} | {"gap":8,"alignItems":"center"} |
| N2hjw/wY8Sb / N2hjw/OLUWx | frame / App Tile | {"name":"App Tile"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| N2hjw/Znz9K / N2hjw/wY8Sb | icon / App Icon | {"name":"App Icon"} | {"width":12,"height":12,"icon":"calculator","library":"lucide","fill":"#FFFFFF"} |
| N2hjw/qB3tt / N2hjw/OLUWx | text / App Name | {"name":"App Name","content":"Accounting"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| N2hjw/o10vRP / N2hjw/AoSog | frame / Search | {"name":"Search"} | {"width":"fill_container","height":24,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| N2hjw/pkUqz / N2hjw/o10vRP | text / Placeholder | {"name":"Placeholder","content":"Search"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/WGlze / N2hjw/AoSog | frame / Nav | {"name":"Nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| N2hjw/v2nFdk / N2hjw/WGlze | frame / Nav Overview | {"name":"Nav Overview"} | {"width":"fill_container","height":26,"fill":"$op-nav-active","cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| N2hjw/aHy7c / N2hjw/v2nFdk | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"house","library":"lucide","fill":"$op-nav-text"} |
| N2hjw/yNRpS / N2hjw/v2nFdk | text / Label | {"name":"Label","content":"Overview"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/C0ATvZ / N2hjw/v2nFdk | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| N2hjw/E1mVWA / N2hjw/WGlze | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| N2hjw/n3bIxZ / N2hjw/E1mVWA | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| N2hjw/krXtT / N2hjw/E1mVWA | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/U56Pju / N2hjw/E1mVWA | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| N2hjw/a0vuO / N2hjw/WGlze | frame / Nav Recent | {"name":"Nav Recent"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| N2hjw/CcWcW / N2hjw/a0vuO | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"history","library":"lucide","fill":"$op-nav-text-2"} |
| N2hjw/t2qUj5 / N2hjw/a0vuO | text / Label | {"name":"Label","content":"Recent"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/RTvWP / N2hjw/WGlze | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| N2hjw/AUFAf / N2hjw/RTvWP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| N2hjw/R6F4aE / N2hjw/RTvWP | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/C5Cvk / N2hjw | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| N2hjw/YmyLj / N2hjw/C5Cvk | frame / Header | {"name":"Header"} | {"width":"fill_container","height":40,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| N2hjw/U9makw / N2hjw/YmyLj | text / Page Title | {"name":"Page Title","content":"Accounting"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| N2hjw/Q7MrV / N2hjw/YmyLj | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| N2hjw/ISJHG / N2hjw/YmyLj | frame / Primary Button | {"name":"Primary Button"} | {"height":24,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| N2hjw/erWma / N2hjw/ISJHG | text / Label | {"name":"Label","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/e0WOA7 / N2hjw/YmyLj | frame / Global Actions | {"name":"Global Actions"} | {"gap":4,"alignItems":"center"} |
| N2hjw/ylPi2 / N2hjw/e0WOA7 | frame / Notifications Button | {"name":"Notifications Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| N2hjw/YN02U / N2hjw/ylPi2 | icon / Icon | {"name":"Icon"} | {"x":6.5,"y":6.5,"width":11,"height":11,"icon":"bell","library":"lucide","fill":"$op-text"} |
| N2hjw/GJQMh / N2hjw/ylPi2 | ellipse / Dot | {"name":"Dot"} | {"x":13.919999999999998,"y":4.5600000000000005,"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| N2hjw/RRm1B / N2hjw/e0WOA7 | frame / Agent Button | {"name":"Agent Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| N2hjw/TkZgD / N2hjw/RRm1B | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"bot","library":"lucide","fill":"$op-text"} |
| N2hjw/XtzQN / N2hjw/e0WOA7 | frame / Theme Button | {"name":"Theme Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| N2hjw/X9nwi / N2hjw/XtzQN | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| N2hjw/MKybV / N2hjw/e0WOA7 | frame / User Button | {"name":"User Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| N2hjw/NYkIy / N2hjw/MKybV | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"user","library":"lucide","fill":"$op-text"} |
| N2hjw/FDaMS / N2hjw/C5Cvk | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","height":32,"fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| N2hjw/cDnvO / N2hjw/FDaMS | frame / Search | {"name":"Search"} | {"width":140,"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| N2hjw/Jv0vp / N2hjw/cDnvO | text / Placeholder | {"name":"Placeholder","content":"Search items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/CyyPa / N2hjw/FDaMS | text / Count | {"name":"Count","content":"12 items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/C1b64 / N2hjw/C5Cvk | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":12,"padding":12} |
| N2hjw/B9GUUd / N2hjw/C1b64 | frame / Column Inbox | {"name":"Column Inbox"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| N2hjw/PMnG6 / N2hjw/B9GUUd | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| N2hjw/jD8VX / N2hjw/PMnG6 | text / Column Title | {"name":"Column Title","content":"To approve"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/iYdXq / N2hjw/PMnG6 | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| N2hjw/hqgNp / N2hjw/iYdXq | text / Count | {"name":"Count","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/tfJO3 / N2hjw/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| N2hjw/N8DlC9 / N2hjw/tfJO3 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| N2hjw/O7o3X9 / N2hjw/N8DlC9 | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/yqlMz / N2hjw/N8DlC9 | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/NHFKR / N2hjw/tfJO3 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| N2hjw/LXqvY / N2hjw/NHFKR | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| N2hjw/LIMy4 / N2hjw/NHFKR | text / Title | {"name":"Title","content":"Q3 paper stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/jPi6r / N2hjw/tfJO3 | text / Preview | {"name":"Preview","content":"Count is off by fourteen reams."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/i6bn8 / N2hjw/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| N2hjw/d1E8e4 / N2hjw/i6bn8 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| N2hjw/RSNXj / N2hjw/d1E8e4 | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/mHXP6 / N2hjw/d1E8e4 | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/r0jlk9 / N2hjw/i6bn8 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| N2hjw/B5wI3c / N2hjw/r0jlk9 | text / Title | {"name":"Title","content":"Quote for Q4 stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/g2NB4z / N2hjw/i6bn8 | text / Preview | {"name":"Preview","content":"Updated unit prices attached."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/l5U1Zt / N2hjw/C1b64 | frame / Column Follow up | {"name":"Column Follow up"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| N2hjw/kukVM / N2hjw/l5U1Zt | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| N2hjw/EPcp3 / N2hjw/kukVM | text / Column Title | {"name":"Column Title","content":"Overdue"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/J701F / N2hjw/kukVM | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| N2hjw/jOzF1 / N2hjw/J701F | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/I7eHsX / N2hjw/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| N2hjw/Krv8Y / N2hjw/I7eHsX | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| N2hjw/cAjTL / N2hjw/Krv8Y | text / Sender | {"name":"Sender","content":"Ana Cruz"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/Hwo4K / N2hjw/Krv8Y | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/aF80K / N2hjw/I7eHsX | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| N2hjw/Ukrvq / N2hjw/aF80K | text / Title | {"name":"Title","content":"Dock schedule"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/E1t4fm / N2hjw/I7eHsX | text / Preview | {"name":"Preview","content":"Print it at A3 for the exits."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/zs6MI / N2hjw/I7eHsX | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| N2hjw/I2Yjj / N2hjw/zs6MI | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":120,"height":4} |
| N2hjw/L8Pkw7 / N2hjw/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| N2hjw/OPMJt / N2hjw/L8Pkw7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| N2hjw/cFPjJ / N2hjw/OPMJt | text / Sender | {"name":"Sender","content":"Northwind"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/aHfdE / N2hjw/OPMJt | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/lTyOl / N2hjw/L8Pkw7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| N2hjw/dsZqp / N2hjw/lTyOl | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| N2hjw/vQrlg / N2hjw/lTyOl | text / Title | {"name":"Title","content":"Invoice NW-4471"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| N2hjw/C8C1y / N2hjw/L8Pkw7 | text / Preview | {"name":"Preview","content":"Needs sign-off before Friday."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| N2hjw/JH8sP / N2hjw/L8Pkw7 | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| N2hjw/updcu / N2hjw/JH8sP | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":4} |
