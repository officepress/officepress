# OfficePress App Layout / Section · Account & app settings / Screens / Row · About / Shot · App settings · About · Up to date / App settings · About · Up to date / Main / Body / Content

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| WkyDg / AbKWN | frame / Content | {"name":"Content"} | {"width":"fill_container","justifyContent":"center"} |
| P84vMY / WkyDg | frame / Column | {"name":"Column"} | {"width":760,"layout":"vertical","gap":24} |
| IIP9P / P84vMY | frame / Section · Version | {"name":"Section · Version"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| hOeDF / IIP9P | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| g5RnK / hOeDF | text / Title | {"name":"Title","content":"Version and updates"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| MnXgc / hOeDF | text / Desc | {"name":"Desc","content":"Keep Inbox current with fixes and new features. Updates install on your server and apply to everyone in this workspace."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| F6Kig / IIP9P | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| qvYze / F6Kig | frame / Current Version | {"name":"Current Version"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| t5ET4m / qvYze | frame / App Tile | {"name":"App Tile"} | {"width":40,"height":40,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| qleCp / t5ET4m | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| vxBSS / qvYze | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| taDLR / vxBSS | text / Version | {"name":"Version","content":"Inbox 2.4.0"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| V5DymK / vxBSS | text / Meta | {"name":"Meta","content":"Installed Sep 30, 2026 · Communicate"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| JxJYe / qvYze | frame / Tag · Current | {"name":"Tag · Current"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| m9V0CH / JxJYe | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-text-2"} |
| PkOVZ / JxJYe | text / T | {"name":"T","content":"Current version"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| MHA4E / F6Kig | frame / Up to date | {"name":"Up to date"} | {"width":"fill_container","fill":"$op-sunken","cornerRadius":8,"gap":12,"padding":16,"alignItems":"center"} |
| m6Fh9e / MHA4E | frame / Icon | {"name":"Icon"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| RF2Re / m6Fh9e | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"circle-check","library":"lucide","fill":"$op-dot"} |
| Vx8VW / MHA4E | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| OEZxR / Vx8VW | text / Title | {"name":"Title","content":"You’re up to date"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| J5UYk / Vx8VW | text / Meta | {"name":"Meta","content":"Inbox 2.4.0 is the latest version. We’ll let app admins know when a new one is out."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| qq6Br / F6Kig | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| KDJQu / F6Kig | frame / Checkbox · Auto-check | {"name":"Checkbox · Auto-check"} | {"width":"fill_container","gap":12} |
| y2NsQa / KDJQu | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| QzBa9 / y2NsQa | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| s2Q0au / KDJQu | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| lAvds / s2Q0au | text / Label | {"name":"Label","content":"Automatically check for updates"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ahfKb / s2Q0au | text / Hint | {"name":"Hint","content":"Checks once a day and notifies app admins when a new version is out. Updates are never installed without an admin."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| y3ESWG / IIP9P | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| iz64J / y3ESWG | text / Note | {"name":"Note","content":"Last checked just now"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Re8uW / y3ESWG | frame / Button · Check for updates | {"name":"Button · Check for updates"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| xvzsH / Re8uW | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"refresh-cw","library":"lucide","fill":"$op-text"} |
| XehlI / Re8uW | text / Label | {"name":"Label","content":"Check for updates"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| HZhqO / P84vMY | frame / Section · Change log | {"name":"Section · Change log"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| OaiTs / HZhqO | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| pAj0y / OaiTs | text / Title | {"name":"Title","content":"Change log"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| tZ6b3 / OaiTs | text / Desc | {"name":"Desc","content":"What changed in each version of Inbox, newest first."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| irZKD / HZhqO | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","padding":[8,24]} |
| rqkmC / irZKD | frame / Version 2.4.0 | {"name":"Version 2.4.0"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":24,"padding":[20,0]} |
| R3UrNj / rqkmC | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| xVP0d / R3UrNj | text / Version | {"name":"Version","content":"2.4.0"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| Y12m2 / R3UrNj | text / Date | {"name":"Date","content":"Sep 29, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| yVSvB / R3UrNj | frame / Tag · Installed | {"name":"Tag · Installed"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| ezyku / yVSvB | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-text-2"} |
| o2LmDP / yVSvB | text / T | {"name":"T","content":"Installed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| B10Cbe / rqkmC | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| DF1k5 / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| TxN41 / DF1k5 | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| L7XKmJ / TxN41 | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ihFLP / DF1k5 | text / Text | {"name":"Text","content":"Snooze a card until a date and time — it returns to its column when due."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| LvjhV / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| zU67q / LvjhV | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| lNQTM / zU67q | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NJyeZ / LvjhV | text / Text | {"name":"Text","content":"Select several cards and move them between columns in one go."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| hg8q3 / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| jD74q / hg8q3 | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| XUP5E / jD74q | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| bHEKd / hg8q3 | text / Text | {"name":"Text","content":"The agent can draft replies in the tone of your past messages."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| EtLyS / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| xZNvv / EtLyS | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| DLTLO / xZNvv | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| vAUZp / EtLyS | text / Text | {"name":"Text","content":"Search matches sender names with accents, like José and Peña."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| M9XzZ7 / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| k6Qwl / M9XzZ7 | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| JkJGG / k6Qwl | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| hTBoR / M9XzZ7 | text / Text | {"name":"Text","content":"SLA timers can pause outside business hours."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Ejlaf / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| EIScO / Ejlaf | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| NVsgV / EIScO | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| wO30o / Ejlaf | text / Text | {"name":"Text","content":"Unread dots stayed on cards already read on another device."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| PXOZg / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| Z348C / PXOZg | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| P9079D / Z348C | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| jwYS6 / PXOZg | text / Text | {"name":"Text","content":"Attachments over 20 MB failed without an error message."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| wLG5x / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| u4ibVi / wLG5x | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qnB0A / u4ibVi | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| kUYFP / wLG5x | text / Text | {"name":"Text","content":"The collapsed sidebar reopened after signing out and back in."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| a3QYQ8 / B10Cbe | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| ZHAK9 / a3QYQ8 | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| mpihh / ZHAK9 | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| RAXG2 / a3QYQ8 | text / Text | {"name":"Text","content":"Low contrast on the filters menu in dark mode."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Oy5TM / irZKD | frame / Version 2.3.1 | {"name":"Version 2.3.1"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":24,"padding":[20,0]} |
| tYPjm / Oy5TM | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| I98S08 / tYPjm | text / Version | {"name":"Version","content":"2.3.1"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| iY25s / tYPjm | text / Date | {"name":"Date","content":"Aug 28, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| MXZ11 / Oy5TM | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| iVTh8 / MXZ11 | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| BVqLp / iVTh8 | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| DHnaV / BVqLp | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ubGld / iVTh8 | text / Text | {"name":"Text","content":"Column counts didn’t update after archiving a card."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| WpSdH / MXZ11 | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| UkesA / WpSdH | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| ktacu / UkesA | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| MtHzD / WpSdH | text / Text | {"name":"Text","content":"Times showed UTC instead of the workspace time zone."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| P9zqG / irZKD | frame / Version 2.3.0 | {"name":"Version 2.3.0"} | {"width":"fill_container","gap":24,"padding":[20,0]} |
| eejrI / P9zqG | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| v20IU / eejrI | text / Version | {"name":"Version","content":"2.3.0"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| ekhNt / eejrI | text / Date | {"name":"Date","content":"Aug 12, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| CwenR / P9zqG | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| iqo8S / CwenR | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| M6KwG / iqo8S | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| ndGnf / M6KwG | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XDSZ8 / iqo8S | text / Text | {"name":"Text","content":"Pin filters to the sidebar."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| R9kIag / CwenR | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| y4zjm3 / R9kIag | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| iUnJi / y4zjm3 | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| GQJui / R9kIag | text / Text | {"name":"Text","content":"Automation rules can wait for an SLA threshold."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| mi6CH / CwenR | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| kDkpX / mi6CH | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| qotFQ / kDkpX | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| MOOKa / mi6CH | text / Text | {"name":"Text","content":"Boards with more than 10,000 messages load faster."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| EdwXO / HZhqO | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| qTe5I / EdwXO | text / Note | {"name":"Note","content":"Showing 3 of 14 versions"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| vvG4o / EdwXO | frame / Button · Show older versions | {"name":"Button · Show older versions"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| gKtbV / vvG4o | text / Label | {"name":"Label","content":"Show older versions"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| H5QX3t / tYgFi | frame / Caption | {"name":"Caption"} | {"width":1440,"layout":"vertical","gap":4} |
| R2mre / H5QX3t | text / Label | {"name":"Label","content":"App settings · About — up to date"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| moumx / H5QX3t | text / Note | {"name":"Note","content":"No newer version: the update card, Update button and terminal guide link are hidden, and the nav badge clears. “Check for updates” stays available; while it runs the button shows a spinner and “Checking…”."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
