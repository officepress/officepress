# OfficePress App Layout / Section · Account & app settings / Screens / Row · About / Shot · App settings · About / App settings · About / Main / Body / Content

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| V04H0 / AZ7sJ | frame / Content | {"name":"Content"} | {"width":"fill_container","justifyContent":"center"} |
| CXG6T / V04H0 | frame / Column | {"name":"Column"} | {"width":760,"layout":"vertical","gap":24} |
| ktHaV / CXG6T | frame / Section · Version | {"name":"Section · Version"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| DoSKp / ktHaV | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| s3Q8WQ / DoSKp | text / Title | {"name":"Title","content":"Version and updates"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| pqx1X / DoSKp | text / Desc | {"name":"Desc","content":"Keep Inbox current with fixes and new features. Updates install on your server and apply to everyone in this workspace."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| kEPJp / ktHaV | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| oXZrt / kEPJp | frame / Current Version | {"name":"Current Version"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| tHXFV / oXZrt | frame / App Tile | {"name":"App Tile"} | {"width":40,"height":40,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| WAcZN / tHXFV | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| O84XB5 / oXZrt | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| WIH7R / O84XB5 | text / Version | {"name":"Version","content":"Inbox 2.3.1"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| XqJzt / O84XB5 | text / Meta | {"name":"Meta","content":"Installed Aug 28, 2026 · Communicate"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Xpzk7 / oXZrt | frame / Tag · Current | {"name":"Tag · Current"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| TNVh4 / Xpzk7 | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-text-2"} |
| qw7Hl / Xpzk7 | text / T | {"name":"T","content":"Current version"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| DYbxL / kEPJp | frame / Update Available | {"name":"Update Available"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"stroke":"$op-tint-2","strokeWidth":1,"layout":"vertical"} |
| kKEK4 / DYbxL | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":12,"padding":16,"alignItems":"center"} |
| LtwS6 / kKEK4 | frame / Icon | {"name":"Icon"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| WwJLT / LtwS6 | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"circle-arrow-up","library":"lucide","fill":"$op-accent-text"} |
| Rz5P7 / kKEK4 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| hgipD / Rz5P7 | text / Title | {"name":"Title","content":"Inbox 2.4.0 is available"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ipbQi / Rz5P7 | text / Meta | {"name":"Meta","content":"Released Sep 29, 2026 · 3 new features, 2 improvements, 4 fixes. Inbox restarts during the update (about a minute)."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| INyN4 / kKEK4 | frame / Button · Update to 2.4.0 | {"name":"Button · Update to 2.4.0"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| VslBa / INyN4 | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"download","library":"lucide","fill":"$op-on-accent"} |
| vN0QY / INyN4 | text / Label | {"name":"Label","content":"Update to 2.4.0"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| U7dZWf / DYbxL | frame / Terminal Link Row | {"name":"Terminal Link Row"} | {"width":"fill_container","stroke":"$op-tint-2","strokeWidth":{"top":1},"gap":8,"padding":[12,16],"alignItems":"center"} |
| rY1Re / U7dZWf | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"square-terminal","library":"lucide","fill":"$op-accent-text"} |
| a7dJgC / U7dZWf | text / Link | {"name":"Link","content":"Update from the terminal"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| m4HQU5 / U7dZWf | icon / Arrow | {"name":"Arrow"} | {"width":14,"height":14,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| kRYOV / U7dZWf | text / Hint | {"name":"Hint","content":"Step-by-step guide for admins with shell access to the server."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| y5oETl / kEPJp | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| MjpHr / kEPJp | frame / Checkbox · Auto-check | {"name":"Checkbox · Auto-check"} | {"width":"fill_container","gap":12} |
| iPgpk / MjpHr | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Dh17U / iPgpk | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| S417Ix / MjpHr | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| lAE9a / S417Ix | text / Label | {"name":"Label","content":"Automatically check for updates"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| lgmJV / S417Ix | text / Hint | {"name":"Hint","content":"Checks once a day and notifies app admins when a new version is out. Updates are never installed without an admin."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| S5va7 / ktHaV | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| VUjYh / S5va7 | text / Note | {"name":"Note","content":"Last checked today at 09:12"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| X1KFMo / S5va7 | frame / Button · Check for updates | {"name":"Button · Check for updates"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| c6rwY / X1KFMo | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"refresh-cw","library":"lucide","fill":"$op-text"} |
| JT7wQ / X1KFMo | text / Label | {"name":"Label","content":"Check for updates"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| xZcu2 / CXG6T | frame / Section · Change log | {"name":"Section · Change log"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| QaHhJ / xZcu2 | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| i9awd / QaHhJ | text / Title | {"name":"Title","content":"Change log"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| rG2dH / QaHhJ | text / Desc | {"name":"Desc","content":"What changed in each version of Inbox, newest first."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Kof3U / xZcu2 | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","padding":[8,24]} |
| o7Wmd / Kof3U | frame / Version 2.4.0 | {"name":"Version 2.4.0"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":24,"padding":[20,0]} |
| f4xsD / o7Wmd | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| LNc11 / f4xsD | text / Version | {"name":"Version","content":"2.4.0"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| jl3Bp / f4xsD | text / Date | {"name":"Date","content":"Sep 29, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| V1uZN / f4xsD | frame / Tag · Available | {"name":"Tag · Available"} | {"height":22,"fill":"$op-accent-strong","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| kZhIw / V1uZN | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-arrow-up","library":"lucide","fill":"$op-on-accent"} |
| BMQ1p / V1uZN | text / T | {"name":"T","content":"Available"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| T6zVyH / o7Wmd | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| PAA6A / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| XLRc1 / PAA6A | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| hhvic / XLRc1 | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ZMb4q / PAA6A | text / Text | {"name":"Text","content":"Snooze a card until a date and time — it returns to its column when due."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| mK6UK / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| BTeTK / mK6UK | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| JVNJT / BTeTK | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| jzrFN / mK6UK | text / Text | {"name":"Text","content":"Select several cards and move them between columns in one go."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| h3ToD / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| wuTHB / h3ToD | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| C6xiOS / wuTHB | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| grTm7 / h3ToD | text / Text | {"name":"Text","content":"The agent can draft replies in the tone of your past messages."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Ca7ms / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| qpGiA / Ca7ms | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ocBF9 / qpGiA | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| LDdVK / Ca7ms | text / Text | {"name":"Text","content":"Search matches sender names with accents, like José and Peña."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| GLJ8I / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| PcrZW / GLJ8I | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Ymvj5 / PcrZW | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| gVQtm / GLJ8I | text / Text | {"name":"Text","content":"SLA timers can pause outside business hours."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Nr1dn / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| Vs2kR / Nr1dn | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| V8v3OQ / Vs2kR | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NkX0L / Nr1dn | text / Text | {"name":"Text","content":"Unread dots stayed on cards already read on another device."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| NPPjV / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| O2Ufn5 / NPPjV | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| m4UpEd / O2Ufn5 | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| rBoqN / NPPjV | text / Text | {"name":"Text","content":"Attachments over 20 MB failed without an error message."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| l08tUE / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| P0ObLZ / l08tUE | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| XYDm1 / P0ObLZ | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| l1luLD / l08tUE | text / Text | {"name":"Text","content":"The collapsed sidebar reopened after signing out and back in."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| U2yGm / T6zVyH | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| XHYql / U2yGm | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| umReb / XHYql | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| b7TBm / U2yGm | text / Text | {"name":"Text","content":"Low contrast on the filters menu in dark mode."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Y1K34X / Kof3U | frame / Version 2.3.1 | {"name":"Version 2.3.1"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":24,"padding":[20,0]} |
| MJeL4 / Y1K34X | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| c0qgn / MJeL4 | text / Version | {"name":"Version","content":"2.3.1"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| tqLnu / MJeL4 | text / Date | {"name":"Date","content":"Aug 28, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LabQ2 / MJeL4 | frame / Tag · Installed | {"name":"Tag · Installed"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| jxvyq / LabQ2 | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-text-2"} |
| mwIbE / LabQ2 | text / T | {"name":"T","content":"Installed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ojwTq / Y1K34X | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| MECYO / ojwTq | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| IckyX / MECYO | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| cV3hJ / IckyX | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| upCkw / MECYO | text / Text | {"name":"Text","content":"Column counts didn’t update after archiving a card."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| F5cKvp / ojwTq | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| g1RK2 / F5cKvp | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| LHdT0 / g1RK2 | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| G12n8C / F5cKvp | text / Text | {"name":"Text","content":"Times showed UTC instead of the workspace time zone."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Q1TEBQ / Kof3U | frame / Version 2.3.0 | {"name":"Version 2.3.0"} | {"width":"fill_container","gap":24,"padding":[20,0]} |
| BODzs / Q1TEBQ | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| c0poWk / BODzs | text / Version | {"name":"Version","content":"2.3.0"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| XgjDo / BODzs | text / Date | {"name":"Date","content":"Aug 12, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| z2ySa / Q1TEBQ | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| zbvDd / z2ySa | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| L8Ny0w / zbvDd | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| q269g7 / L8Ny0w | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| M31qxk / zbvDd | text / Text | {"name":"Text","content":"Pin filters to the sidebar."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| w17Vh1 / z2ySa | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| w5grYY / w17Vh1 | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| JaHqd / w5grYY | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| k4ztD / w17Vh1 | text / Text | {"name":"Text","content":"Automation rules can wait for an SLA threshold."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| R0ei4 / z2ySa | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| b1WA52 / R0ei4 | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ReVA9 / b1WA52 | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| taH14 / R0ei4 | text / Text | {"name":"Text","content":"Boards with more than 10,000 messages load faster."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| sU1AO / xZcu2 | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| A1pTT0 / sU1AO | text / Note | {"name":"Note","content":"Showing 3 of 14 versions"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| WsdET / sU1AO | frame / Button · Show older versions | {"name":"Button · Show older versions"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| k5HBQ / WsdET | text / Label | {"name":"Label","content":"Show older versions"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Mwu3K / odO7S | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| V71TK / Mwu3K | text / Label | {"name":"Label","content":"App settings · About — update available"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| m1a6QA / Mwu3K | text / Note | {"name":"Note","content":"Shown to app admins. About shows the installed version, updates and the change log. The status card switches between “Up to date” and “Update available”; the Update button and the terminal guide link only appear when a newer version exists. Auto-check runs daily and only notifies — it never installs without an admin."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
