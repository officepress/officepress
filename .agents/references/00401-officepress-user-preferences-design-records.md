# OfficePress App Layout / User preferences

Owner: [OfficePress design map](00075-officepress-pencil-design-map.md). Load for every authored/resolved preference-screen property, exact label, preview and header override.

Source: `officepress.opcd` → `frames/WASH2.json` → `7Ucmo` / `euQHx`. Extracted offline on 2026-10-20; path geometry stays in the archive. Apply the [creative direction and source limits](00399-officepress-opcd-user-preferences-direction.md) before treating these records as implementation requirements.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| 7Ucmo / HLqC7 | frame / Shot · User preferences | {"name":"Shot · User preferences"} | {"layout":"vertical","gap":14} |
| euQHx / 7Ucmo | frame / User preferences | {"name":"User preferences","theme":{"mode":"light","family":"communicate"}} | {"clip":true,"width":1440,"height":960,"fill":"$op-canvas","cornerRadius":12,"stroke":"$line","strokeWidth":1,"effect":{"type":"shadow","shadowType":"outer","color":"#15171C14","offset":{"x":0,"y":8},"blur":24}} |
| 7hHn2 / euQHx | frame / Main | {"name":"Main"} | {"width":"fill_container","height":"fill_container","layout":"vertical"} |
| c2pLK / 7hHn2 | frame / Header | {"name":"Header","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","height":64,"fill":"$op-surface","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":12,"padding":[0,16],"alignItems":"center"} |
| c2pLK/NL2v5 / c2pLK | frame / Sidebar Toggle | {"name":"Sidebar Toggle"} | {"width":36,"height":36,"cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| c2pLK/v0pIr4 / c2pLK/NL2v5 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text"} |
| c2pLK/E8PtZC / c2pLK | text / Page Title | {"name":"Page Title","content":"User preferences"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| c2pLK/G3t23s / c2pLK | frame / Spacer | {"name":"Spacer"} | {"width":"fill_container","height":1} |
| c2pLK/dtuXO / c2pLK | frame / Page Actions | {"name":"Page Actions"} | {"gap":12,"alignItems":"center","enabled":false} |
| c2pLK/H5cU4B / c2pLK/dtuXO | frame / View Switch | {"name":"View Switch"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| c2pLK/I7kF1e / c2pLK/H5cU4B | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"columns-3","library":"lucide","fill":"$op-text"} |
| c2pLK/vQMp0 / c2pLK/H5cU4B | text / Label | {"name":"Label","content":"Board"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| c2pLK/qS8da / c2pLK/H5cU4B | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text"} |
| c2pLK/f6Nm4U / c2pLK | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":1,"height":24,"enabled":false} |
| c2pLK/BTxZN / c2pLK | frame / Global Actions | {"name":"Global Actions"} | {"gap":8,"alignItems":"center"} |
| c2pLK/fawPG / c2pLK/BTxZN | frame / Notifications Button | {"name":"Notifications Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"layout":"none"} |
| c2pLK/MT9A7 / c2pLK/fawPG | icon / Icon | {"name":"Icon"} | {"x":10,"y":10,"width":16,"height":16,"icon":"bell","library":"lucide","fill":"$op-text"} |
| c2pLK/SkOaY / c2pLK/fawPG | ellipse / Dot | {"name":"Dot"} | {"x":21,"y":7,"fill":"$op-dot","width":8,"height":8,"stroke":"$op-surface","strokeWidth":1.5,"strokeAlignment":"outer"} |
| c2pLK/XGyoO / c2pLK/BTxZN | frame / Agent Button | {"name":"Agent Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| c2pLK/C5tCn / c2pLK/XGyoO | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"bot","library":"lucide","fill":"$op-text"} |
| c2pLK/szMHy / c2pLK/BTxZN | frame / Theme Button | {"name":"Theme Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| c2pLK/K5uDK / c2pLK/szMHy | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"$op-mode-icon","library":"lucide","fill":"$op-text"} |
| c2pLK/I60pf / c2pLK/BTxZN | frame / User Button | {"name":"User Button"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":999,"stroke":"$op-accent","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| c2pLK/h47xa8 / c2pLK/I60pf | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"user","library":"lucide","fill":"$op-text"} |
| PLe5L / 7hHn2 | frame / Body | {"name":"Body"} | {"width":"fill_container","height":"fill_container","fill":"$op-canvas","gap":24,"padding":[24,16,40,16]} |
| tHR43 / PLe5L | frame / Settings Nav | {"name":"Settings Nav"} | {"width":240,"layout":"vertical","gap":4} |
| 6XbvC / tHR43 | frame / Tab Language | {"name":"Tab Language"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center","fill":"$op-tint"} |
| puDqi / 6XbvC | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| YFXY8 / puDqi | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"languages","library":"lucide","fill":"$op-accent-text"} |
| TJ9QB / 6XbvC | text / L | {"name":"L","content":"Language"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ZphMq / tHR43 | frame / Tab Time zone | {"name":"Tab Time zone"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center","fill":null} |
| 2trtl / ZphMq | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| qYlCJ / 2trtl | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"clock","library":"lucide","fill":"$op-text-2"} |
| wDwPq / ZphMq | text / L | {"name":"L","content":"Time zone"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| 7qRz2 / tHR43 | frame / Divider | {"name":"Divider"} | {"width":"fill_container","layout":"vertical","padding":[12,0]} |
| r1Bl3 / 7qRz2 | rectangle / Line | {"name":"Line"} | {"fill":"$op-border","width":"fill_container","height":1} |
| uXNv1 / tHR43 | frame / Back to App | {"name":"Back to App"} | {"width":"fill_container","height":36,"cornerRadius":4,"gap":12,"alignItems":"center"} |
| WbSjV / uXNv1 | frame / Icon Slot | {"name":"Icon Slot"} | {"width":36,"height":36,"justifyContent":"center","alignItems":"center"} |
| Ldl5o / WbSjV | icon / I | {"name":"I"} | {"width":16,"height":16,"icon":"arrow-left","library":"lucide","fill":"$op-text-2"} |
| OYmBP / uXNv1 | text / L | {"name":"L","content":"Back to App"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| clc49 / PLe5L | frame / Content | {"name":"Content"} | {"width":"fill_container","justifyContent":"center"} |
| L1XDJ / clc49 | frame / Column | {"name":"Column"} | {"width":760,"layout":"vertical","gap":24} |
| ZSKSl / L1XDJ | frame / Section · Language | {"name":"Section · Language"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| qG51x / ZSKSl | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| XUFAw / qG51x | text / Title | {"name":"Title","content":"Language"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| MzZG5 / qG51x | text / Desc | {"name":"Desc","content":"Choose the language OfficePress uses for menus, dates and numbers. It follows your browser until you pick one."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| 4LCdF / ZSKSl | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| GLt8N / 4LCdF | frame / Field · Language | {"name":"Field · Language"} | {"width":"fill_container","layout":"vertical","gap":4} |
| E5AxX / GLt8N | text / Label | {"name":"Label","content":"Language"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| kC0Hq / GLt8N | frame / Select | {"name":"Select"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| wcCAY / kC0Hq | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"languages","library":"lucide","fill":"$op-text-2"} |
| o0YFs / kC0Hq | text / Value | {"name":"Value","content":"English (Philippines)"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| 3umQL / kC0Hq | frame / Badge | {"name":"Badge"} | {"fill":"$op-tint","cornerRadius":999,"padding":[2,8]} |
| YFJHB / 3umQL | text / Badge Label | {"name":"Badge Label","content":"Browser default"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| 18uea / kC0Hq | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| 8XjZ1 / GLt8N | text / Help | {"name":"Help","content":"Detected from your browser as en-PH. Dates, times and numbers use this language’s formats."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| sSvuJ / 4LCdF | frame / Preview | {"name":"Preview"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"layout":"vertical","gap":12,"padding":16} |
| oaI2Y / sSvuJ | frame / Preview Head | {"name":"Preview Head"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| SkpSe / oaI2Y | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| bxzWV / oaI2Y | text / Label | {"name":"Label","content":"Preview"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| tGvkC / sSvuJ | frame / Preview Grid | {"name":"Preview Grid"} | {"width":"fill_container","gap":16} |
| uXlo6 / tGvkC | frame / Sample · Date | {"name":"Sample · Date"} | {"width":"fill_container","layout":"vertical","gap":2} |
| hreZR / uXlo6 | text / Key | {"name":"Key","content":"Date"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| 8yoNZ / uXlo6 | text / Value | {"name":"Value","content":"Tue, 20 Oct 2026"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"500","textGrowth":"fixed-width","width":"fill_container"} |
| 9kq5F / tGvkC | frame / Sample · Relative | {"name":"Sample · Relative"} | {"width":"fill_container","layout":"vertical","gap":2} |
| vJ8VF / 9kq5F | text / Key | {"name":"Key","content":"Relative"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| 7vMS6 / 9kq5F | text / Value | {"name":"Value","content":"2 minutes ago"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"500","textGrowth":"fixed-width","width":"fill_container"} |
| 4ZWTZ / tGvkC | frame / Sample · Number | {"name":"Sample · Number"} | {"width":"fill_container","layout":"vertical","gap":2} |
| 3u9Tg / 4ZWTZ | text / Key | {"name":"Key","content":"Number"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| oUuKe / 4ZWTZ | text / Value | {"name":"Value","content":"1,234,567.89"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"500","textGrowth":"fixed-width","width":"fill_container"} |
| WALNm / ZSKSl | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| qn4w6 / WALNm | text / Note | {"name":"Note","content":"Applies to your account in every OfficePress app."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| UKDg4 / WALNm | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":"fit_content","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[8,16],"alignItems":"center"} |
| J4SYV / UKDg4 | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ls1JT / WALNm | frame / Button · Save | {"name":"Button · Save"} | {"height":"fit_content","fill":"$op-accent-strong","cornerRadius":4,"padding":[8,16],"alignItems":"center"} |
| ao0au / ls1JT | text / Label | {"name":"Label","content":"Save"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| 82tP5 / L1XDJ | frame / Section · Time zone | {"name":"Section · Time zone"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| oENWw / 82tP5 | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| 89GXM / oENWw | text / Title | {"name":"Title","content":"Time zone"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| cd0NE / oENWw | text / Desc | {"name":"Desc","content":"Choose the clock OfficePress uses for times, due dates and reminders. It follows your device until you pick one."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| kBGVH / 82tP5 | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| Ob2Sk / kBGVH | frame / Field · Time zone | {"name":"Field · Time zone"} | {"width":"fill_container","layout":"vertical","gap":4} |
| Fdt7n / Ob2Sk | text / Label | {"name":"Label","content":"Time zone"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| 0nmNM / Ob2Sk | frame / Select | {"name":"Select"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| DKZsx / 0nmNM | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"clock","library":"lucide","fill":"$op-text-2"} |
| cEgis / 0nmNM | text / Value | {"name":"Value","content":"(GMT+08:00) Manila"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| kwRPh / 0nmNM | frame / Badge | {"name":"Badge"} | {"fill":"$op-tint","cornerRadius":999,"padding":[2,8]} |
| BbGGA / kwRPh | text / Badge Label | {"name":"Badge Label","content":"Device default"} | {"fill":"$op-on-tint","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| W6pQq / 0nmNM | icon / Chevron | {"name":"Chevron"} | {"width":15,"height":15,"icon":"chevron-down","library":"lucide","fill":"$op-text-2"} |
| GVLem / Ob2Sk | text / Help | {"name":"Help","content":"Detected from your device as Asia/Manila. Due times, SLA targets and notifications use this zone."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| myoEr / kBGVH | frame / Preview | {"name":"Preview"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"layout":"vertical","gap":12,"padding":16} |
| T54QP / myoEr | frame / Preview Head | {"name":"Preview Head"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Uxq4l / T54QP | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| 4qHTX / T54QP | text / Label | {"name":"Label","content":"Preview"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| dHBh8 / myoEr | frame / Preview Grid | {"name":"Preview Grid"} | {"width":"fill_container","gap":16} |
| VURjE / dHBh8 | frame / Sample · Time | {"name":"Sample · Time"} | {"width":"fill_container","layout":"vertical","gap":2} |
| 7KOjM / VURjE | text / Key | {"name":"Key","content":"Current time"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| IMBHe / VURjE | text / Value | {"name":"Value","content":"3:42 PM"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"500","textGrowth":"fixed-width","width":"fill_container"} |
| 4Qgqh / dHBh8 | frame / Sample · Offset | {"name":"Sample · Offset"} | {"width":"fill_container","layout":"vertical","gap":2} |
| Qa0QV / 4Qgqh | text / Key | {"name":"Key","content":"Offset"} | {"fill":"$op-text-2","fontFamily":"$op-font","fontSize":12,"lineHeight":1.5,"textGrowth":"fixed-width","width":"fill_container"} |
| xsniZ / 4Qgqh | text / Value | {"name":"Value","content":"UTC+08:00"} | {"fill":"$op-text","fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"500","lineHeight":1.5,"textGrowth":"fixed-width","width":"fill_container"} |
| QpTeJ / dHBh8 | frame / Sample · Due | {"name":"Sample · Due"} | {"width":"fill_container","layout":"vertical","gap":2} |
| QP9Ok / QpTeJ | text / Key | {"name":"Key","content":"Due date"} | {"fill":"$op-text-2","fontFamily":"$op-font","fontSize":12,"lineHeight":1.5,"textGrowth":"fixed-width","width":"fill_container"} |
| QjrpS / QpTeJ | text / Value | {"name":"Value","content":"Fri, 23 Oct · 5:00 PM"} | {"fill":"$op-text","fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"500","lineHeight":1.5,"textGrowth":"fixed-width","width":"fill_container"} |
| Cd7Ns / 82tP5 | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| N0yIz / Cd7Ns | text / Note | {"name":"Note","content":"Applies to your account in every OfficePress app."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal","textGrowth":"fixed-width","width":"fill_container"} |
| hFYlF / Cd7Ns | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":"fit_content","fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"padding":[8,16],"alignItems":"center"} |
| 79dG2 / hFYlF | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| omgsN / Cd7Ns | frame / Button · Save | {"name":"Button · Save"} | {"height":"fit_content","fill":"$op-accent-strong","cornerRadius":4,"padding":[8,16],"alignItems":"center"} |
| 9aV2c / omgsN | text / Label | {"name":"Label","content":"Save"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| VHS26 / 7Ucmo | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| Xu3ch / VHS26 | text / Label | {"name":"Label","content":"User preferences"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| p2mEs / VHS26 | text / Note | {"name":"Note","content":"Opened from User Preferences in the user menu. Language and time zone follow the browser’s Intl settings until the user picks something else, and apply to their account in every app."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
