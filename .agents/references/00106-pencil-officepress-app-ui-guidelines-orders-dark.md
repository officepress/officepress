# OfficePress App UI Guidelines / Section · Families in the shell / Row · Commerce / Orders · dark

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| lc6bh / ucXjR | frame / Orders · dark | {"name":"Orders · dark","theme":{"mode":"dark","family":"commerce"}} | {"clip":true,"width":600,"height":360,"fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1} |
| lc6bh/AoSog / lc6bh | frame / Sidebar | {"name":"Sidebar"} | {"width":156,"height":"fill_container","fill":"$op-nav","layout":"vertical","gap":12,"padding":12} |
| lc6bh/OLUWx / lc6bh/AoSog | frame / Brand | {"name":"Brand"} | {"gap":8,"alignItems":"center"} |
| lc6bh/wY8Sb / lc6bh/OLUWx | frame / App Tile | {"name":"App Tile"} | {"width":20,"height":20,"fill":"$op-accent","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| lc6bh/Znz9K / lc6bh/wY8Sb | icon / App Icon | {"name":"App Icon"} | {"width":12,"height":12,"icon":"receipt","library":"lucide","fill":"#FFFFFF"} |
| lc6bh/qB3tt / lc6bh/OLUWx | text / App Name | {"name":"App Name","content":"Orders"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| lc6bh/o10vRP / lc6bh/AoSog | frame / Search | {"name":"Search"} | {"width":"fill_container","height":24,"fill":"$op-nav-field","cornerRadius":999,"stroke":"$op-nav-border","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| lc6bh/pkUqz / lc6bh/o10vRP | text / Placeholder | {"name":"Placeholder","content":"Search"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/WGlze / lc6bh/AoSog | frame / Nav | {"name":"Nav"} | {"width":"fill_container","layout":"vertical","gap":4} |
| lc6bh/v2nFdk / lc6bh/WGlze | frame / Nav Overview | {"name":"Nav Overview"} | {"width":"fill_container","height":26,"fill":"$op-nav-active","cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| lc6bh/aHy7c / lc6bh/v2nFdk | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"house","library":"lucide","fill":"$op-nav-text"} |
| lc6bh/yNRpS / lc6bh/v2nFdk | text / Label | {"name":"Label","content":"Overview"} | {"fill":"$op-nav-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/C0ATvZ / lc6bh/v2nFdk | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| lc6bh/E1mVWA / lc6bh/WGlze | frame / Nav Starred | {"name":"Nav Starred"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| lc6bh/n3bIxZ / lc6bh/E1mVWA | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"star","library":"lucide","fill":"$op-nav-text-2"} |
| lc6bh/krXtT / lc6bh/E1mVWA | text / Label | {"name":"Label","content":"Starred"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/U56Pju / lc6bh/E1mVWA | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-nav-dot","width":6,"height":6} |
| lc6bh/a0vuO / lc6bh/WGlze | frame / Nav Recent | {"name":"Nav Recent"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| lc6bh/CcWcW / lc6bh/a0vuO | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"history","library":"lucide","fill":"$op-nav-text-2"} |
| lc6bh/t2qUj5 / lc6bh/a0vuO | text / Label | {"name":"Label","content":"Recent"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/RTvWP / lc6bh/WGlze | frame / Nav Archive | {"name":"Nav Archive"} | {"width":"fill_container","height":26,"cornerRadius":4,"gap":8,"padding":[0,8],"alignItems":"center"} |
| lc6bh/AUFAf / lc6bh/RTvWP | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"archive","library":"lucide","fill":"$op-nav-text-2"} |
| lc6bh/R6F4aE / lc6bh/RTvWP | text / Label | {"name":"Label","content":"Archive"} | {"fill":"$op-nav-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/C5Cvk / lc6bh | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| lc6bh/YmyLj / lc6bh/C5Cvk | frame / Header | {"name":"Header"} | {"width":"fill_container","height":40,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| lc6bh/U9makw / lc6bh/YmyLj | text / Page Title | {"name":"Page Title","content":"Orders"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| lc6bh/Q7MrV / lc6bh/YmyLj | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| lc6bh/ISJHG / lc6bh/YmyLj | frame / Primary Button | {"name":"Primary Button"} | {"height":24,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| lc6bh/erWma / lc6bh/ISJHG | text / Label | {"name":"Label","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/e0WOA7 / lc6bh/YmyLj | frame / Global Actions | {"name":"Global Actions"} | {"gap":4,"alignItems":"center"} |
| lc6bh/ylPi2 / lc6bh/e0WOA7 | frame / Notifications Button | {"name":"Notifications Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| lc6bh/YN02U / lc6bh/ylPi2 | icon / Icon | {"name":"Icon"} | {"x":6.5,"y":6.5,"width":11,"height":11,"icon":"bell","library":"lucide","fill":"$op-text"} |
| lc6bh/GJQMh / lc6bh/ylPi2 | ellipse / Dot | {"name":"Dot"} | {"x":13.919999999999998,"y":4.5600000000000005,"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| lc6bh/RRm1B / lc6bh/e0WOA7 | frame / Agent Button | {"name":"Agent Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lc6bh/TkZgD / lc6bh/RRm1B | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"bot","library":"lucide","fill":"$op-text"} |
| lc6bh/XtzQN / lc6bh/e0WOA7 | frame / Theme Button | {"name":"Theme Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lc6bh/X9nwi / lc6bh/XtzQN | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| lc6bh/MKybV / lc6bh/e0WOA7 | frame / User Button | {"name":"User Button"} | {"width":24,"height":24,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| lc6bh/NYkIy / lc6bh/MKybV | icon / Icon | {"name":"Icon"} | {"width":12,"height":12,"icon":"user","library":"lucide","fill":"$op-text"} |
| lc6bh/FDaMS / lc6bh/C5Cvk | frame / Toolbar | {"name":"Toolbar"} | {"width":"fill_container","height":32,"fill":"$op-toolbar","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":8,"padding":[0,12],"alignItems":"center"} |
| lc6bh/cDnvO / lc6bh/FDaMS | frame / Search | {"name":"Search"} | {"width":140,"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| lc6bh/Jv0vp / lc6bh/cDnvO | text / Placeholder | {"name":"Placeholder","content":"Search items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/CyyPa / lc6bh/FDaMS | text / Count | {"name":"Count","content":"12 items"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/C1b64 / lc6bh/C5Cvk | frame / Board | {"name":"Board"} | {"width":"fill_container","height":"fill_container","gap":12,"padding":12} |
| lc6bh/B9GUUd / lc6bh/C1b64 | frame / Column Inbox | {"name":"Column Inbox"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| lc6bh/PMnG6 / lc6bh/B9GUUd | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| lc6bh/jD8VX / lc6bh/PMnG6 | text / Column Title | {"name":"Column Title","content":"New orders"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/iYdXq / lc6bh/PMnG6 | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| lc6bh/hqgNp / lc6bh/iYdXq | text / Count | {"name":"Count","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/tfJO3 / lc6bh/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| lc6bh/N8DlC9 / lc6bh/tfJO3 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| lc6bh/O7o3X9 / lc6bh/N8DlC9 | text / Sender | {"name":"Sender","content":"Dan Ocampo"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/yqlMz / lc6bh/N8DlC9 | text / Time | {"name":"Time","content":"11:48"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/NHFKR / lc6bh/tfJO3 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| lc6bh/LXqvY / lc6bh/NHFKR | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| lc6bh/LIMy4 / lc6bh/NHFKR | text / Title | {"name":"Title","content":"Q3 paper stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/jPi6r / lc6bh/tfJO3 | text / Preview | {"name":"Preview","content":"Count is off by fourteen reams."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/i6bn8 / lc6bh/B9GUUd | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| lc6bh/d1E8e4 / lc6bh/i6bn8 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| lc6bh/RSNXj / lc6bh/d1E8e4 | text / Sender | {"name":"Sender","content":"Rina Delgado"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/mHXP6 / lc6bh/d1E8e4 | text / Time | {"name":"Time","content":"08:05"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/r0jlk9 / lc6bh/i6bn8 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| lc6bh/B5wI3c / lc6bh/r0jlk9 | text / Title | {"name":"Title","content":"Quote for Q4 stock"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/g2NB4z / lc6bh/i6bn8 | text / Preview | {"name":"Preview","content":"Updated unit prices attached."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/l5U1Zt / lc6bh/C1b64 | frame / Column Follow up | {"name":"Column Follow up"} | {"width":"fill_container","fill":"$op-column","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":4,"padding":8} |
| lc6bh/kukVM / lc6bh/l5U1Zt | frame / Column Header | {"name":"Column Header"} | {"width":"fill_container","gap":4,"padding":4,"alignItems":"center"} |
| lc6bh/EPcp3 / lc6bh/kukVM | text / Column Title | {"name":"Column Title","content":"Ready to ship"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/J701F / lc6bh/kukVM | frame / Badge | {"name":"Badge"} | {"width":16,"height":16,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| lc6bh/jOzF1 / lc6bh/J701F | text / Count | {"name":"Count","content":"2"} | {"fill":"$op-on-tint","lineHeight":1,"textAlign":"center","fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/I7eHsX / lc6bh/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| lc6bh/Krv8Y / lc6bh/I7eHsX | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| lc6bh/cAjTL / lc6bh/Krv8Y | text / Sender | {"name":"Sender","content":"Ana Cruz"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/Hwo4K / lc6bh/Krv8Y | text / Time | {"name":"Time","content":"09:40"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/aF80K / lc6bh/I7eHsX | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| lc6bh/Ukrvq / lc6bh/aF80K | text / Title | {"name":"Title","content":"Dock schedule"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/E1t4fm / lc6bh/I7eHsX | text / Preview | {"name":"Preview","content":"Print it at A3 for the exits."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/zs6MI / lc6bh/I7eHsX | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| lc6bh/I2Yjj / lc6bh/zs6MI | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":120,"height":4} |
| lc6bh/L8Pkw7 / lc6bh/l5U1Zt | frame / Card | {"name":"Card"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical","gap":4,"padding":8} |
| lc6bh/OPMJt / lc6bh/L8Pkw7 | frame / Meta | {"name":"Meta"} | {"width":"fill_container","justifyContent":"space_between"} |
| lc6bh/cFPjJ / lc6bh/OPMJt | text / Sender | {"name":"Sender","content":"Northwind"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/aHfdE / lc6bh/OPMJt | text / Time | {"name":"Time","content":"Wed"} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/lTyOl / lc6bh/L8Pkw7 | frame / Title Row | {"name":"Title Row"} | {"width":"fill_container","gap":4,"alignItems":"center"} |
| lc6bh/dsZqp / lc6bh/lTyOl | ellipse / Dot | {"name":"Dot"} | {"fill":"$op-dot","width":6,"height":6,"stroke":"$op-surface","strokeWidth":1,"strokeAlignment":"outer"} |
| lc6bh/vQrlg / lc6bh/lTyOl | text / Title | {"name":"Title","content":"Invoice NW-4471"} | {"fill":"$op-text","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lc6bh/C8C1y / lc6bh/L8Pkw7 | text / Preview | {"name":"Preview","content":"Needs sign-off before Friday."} | {"fill":"$op-text-2","lineHeight":1.4,"fontFamily":"$op-font","fontSize":11,"fontWeight":"normal"} |
| lc6bh/JH8sP / lc6bh/L8Pkw7 | frame / SLA Track | {"name":"SLA Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| lc6bh/updcu / lc6bh/JH8sP | rectangle / SLA Fill | {"name":"SLA Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":160,"height":4} |
| aBG8j / zTKmr | frame / Section · Colour tokens | {"name":"Section · Colour tokens"} | {"width":"fill_container","layout":"vertical","gap":32} |
| UOP41 / aBG8j | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| uJ6qb / UOP41 | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| y3tFp / uJ6qb | text / No | {"name":"No","content":"03"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| fi31Y / uJ6qb | text / Title | {"name":"Title","content":"Colour tokens"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| Z8eTJ1 / UOP41 | text / Desc | {"name":"Desc","content":"Generated from each family's brand colour. Contrast-checked: text ≥ 4.6:1 on its surface, accent text ≥ 4.5:1, in all eight combinations."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
