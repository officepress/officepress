# OfficePress App Layout / Section · Account & app settings / Screens / Row · About / Shot · App settings · About · Terminal guide / App settings · About · Terminal guide / Main / Body / Content

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| Yr1sZ / N4u7Tn | frame / Content | {"name":"Content"} | {"width":"fill_container","justifyContent":"center"} |
| jKQWp / Yr1sZ | frame / Column | {"name":"Column"} | {"width":760,"layout":"vertical","gap":24} |
| Hvnhk / jKQWp | frame / Section · Version | {"name":"Section · Version"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| fhr2a / Hvnhk | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| XSJAT / fhr2a | text / Title | {"name":"Title","content":"Version and updates"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| iCUPf / fhr2a | text / Desc | {"name":"Desc","content":"Keep Inbox current with fixes and new features. Updates install on your server and apply to everyone in this workspace."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Jtu5O / Hvnhk | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| XoMlF / Jtu5O | frame / Current Version | {"name":"Current Version"} | {"width":"fill_container","gap":12,"alignItems":"center"} |
| yRlKx / XoMlF | frame / App Tile | {"name":"App Tile"} | {"width":40,"height":40,"fill":"$op-accent","cornerRadius":8,"justifyContent":"center","alignItems":"center"} |
| XqZYK / yRlKx | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"inbox","library":"lucide","fill":"#FFFFFF"} |
| OjvSh / XoMlF | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| nWSVX / OjvSh | text / Version | {"name":"Version","content":"Inbox 2.3.1"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| bnfdn / OjvSh | text / Meta | {"name":"Meta","content":"Installed Aug 28, 2026 · Communicate"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| NW0UA / XoMlF | frame / Tag · Current | {"name":"Tag · Current"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| p7fbj / NW0UA | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-text-2"} |
| RazjP / NW0UA | text / T | {"name":"T","content":"Current version"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| vakjJ / Jtu5O | frame / Update Available | {"name":"Update Available"} | {"width":"fill_container","fill":"$op-tint","cornerRadius":8,"stroke":"$op-tint-2","strokeWidth":1,"layout":"vertical"} |
| sjpiw / vakjJ | frame / Top | {"name":"Top"} | {"width":"fill_container","gap":12,"padding":16,"alignItems":"center"} |
| dHYg8 / sjpiw | frame / Icon | {"name":"Icon"} | {"width":36,"height":36,"fill":"$op-surface","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| Yz5Ru / dHYg8 | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"circle-arrow-up","library":"lucide","fill":"$op-accent-text"} |
| ShwX7 / sjpiw | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| wDyvs / ShwX7 | text / Title | {"name":"Title","content":"Inbox 2.4.0 is available"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| Z1sbfC / ShwX7 | text / Meta | {"name":"Meta","content":"Released Sep 29, 2026 · 3 new features, 2 improvements, 4 fixes. Inbox restarts during the update (about a minute)."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| zlgBL / sjpiw | frame / Button · Update to 2.4.0 | {"name":"Button · Update to 2.4.0"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| DQtSH / zlgBL | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"download","library":"lucide","fill":"$op-on-accent"} |
| oGBr9 / zlgBL | text / Label | {"name":"Label","content":"Update to 2.4.0"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| ehXA2 / vakjJ | frame / Terminal Link Row | {"name":"Terminal Link Row"} | {"width":"fill_container","stroke":"$op-tint-2","strokeWidth":{"top":1},"gap":8,"padding":[12,16],"alignItems":"center"} |
| LtAYj / ehXA2 | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"square-terminal","library":"lucide","fill":"$op-accent-text"} |
| t5Bljq / ehXA2 | text / Link | {"name":"Link","content":"Update from the terminal"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| W1KCD / ehXA2 | icon / Arrow | {"name":"Arrow"} | {"width":14,"height":14,"icon":"arrow-right","library":"lucide","fill":"$op-accent-text"} |
| Mg5M8 / ehXA2 | text / Hint | {"name":"Hint","content":"Step-by-step guide for admins with shell access to the server."} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| wwbDl / Jtu5O | rectangle / Divider | {"name":"Divider"} | {"fill":"$op-border","width":"fill_container","height":1} |
| cZt4Y / Jtu5O | frame / Checkbox · Auto-check | {"name":"Checkbox · Auto-check"} | {"width":"fill_container","gap":12} |
| e7BfpP / cZt4Y | frame / Box | {"name":"Box"} | {"width":18,"height":18,"fill":"$op-accent-strong","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| pXHjc / e7BfpP | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-on-accent"} |
| mnbCe / cZt4Y | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical"} |
| a0rGm / mnbCe | text / Label | {"name":"Label","content":"Automatically check for updates"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| gAvRI / mnbCe | text / Hint | {"name":"Hint","content":"Checks once a day and notifies app admins when a new version is out. Updates are never installed without an admin."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| iCQce / Hvnhk | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| v8rqZ / iCQce | text / Note | {"name":"Note","content":"Last checked today at 09:12"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| F1AzR / iCQce | frame / Button · Check for updates | {"name":"Button · Check for updates"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| PEl9y / F1AzR | icon / I | {"name":"I"} | {"width":15,"height":15,"icon":"refresh-cw","library":"lucide","fill":"$op-text"} |
| ixymC / F1AzR | text / Label | {"name":"Label","content":"Check for updates"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| qgbkr / jKQWp | frame / Section · Change log | {"name":"Section · Change log"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| BoECz / qgbkr | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| cVFJI / BoECz | text / Title | {"name":"Title","content":"Change log"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| NLesQ / BoECz | text / Desc | {"name":"Desc","content":"What changed in each version of Inbox, newest first."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| y38Ce / qgbkr | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","padding":[8,24]} |
| G9OhFa / y38Ce | frame / Version 2.4.0 | {"name":"Version 2.4.0"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":24,"padding":[20,0]} |
| EO5ZJ / G9OhFa | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| kuvwh / EO5ZJ | text / Version | {"name":"Version","content":"2.4.0"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| hA1Fe / EO5ZJ | text / Date | {"name":"Date","content":"Sep 29, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| FlCHX / EO5ZJ | frame / Tag · Available | {"name":"Tag · Available"} | {"height":22,"fill":"$op-accent-strong","cornerRadius":999,"gap":4,"padding":[0,8],"alignItems":"center"} |
| SNL46 / FlCHX | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"circle-arrow-up","library":"lucide","fill":"$op-on-accent"} |
| LKIHt / FlCHX | text / T | {"name":"T","content":"Available"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| jlg2M / G9OhFa | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| KzVIf / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| KRUI4 / KzVIf | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| P5fyYT / KRUI4 | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| JymaM / KzVIf | text / Text | {"name":"Text","content":"Snooze a card until a date and time — it returns to its column when due."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| lTAmm / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| TOWch / lTAmm | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| w8efD / TOWch | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| CGPBD / lTAmm | text / Text | {"name":"Text","content":"Select several cards and move them between columns in one go."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| v90Id / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| dYHgQ / v90Id | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| egzML / dYHgQ | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| k65he / v90Id | text / Text | {"name":"Text","content":"The agent can draft replies in the tone of your past messages."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| G12ViU / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| cKxGR / G12ViU | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| v5pDP / cKxGR | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| t5bZyL / G12ViU | text / Text | {"name":"Text","content":"Search matches sender names with accents, like José and Peña."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| uFVAX / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| I01zp / uFVAX | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| rUy9e / I01zp | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| gjeJ4 / uFVAX | text / Text | {"name":"Text","content":"SLA timers can pause outside business hours."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| H3Ad0 / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| T0XoRL / H3Ad0 | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| Fuxon / T0XoRL | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| S8XdU / H3Ad0 | text / Text | {"name":"Text","content":"Unread dots stayed on cards already read on another device."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| EgbiY / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| Z1Egz / EgbiY | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| VMwdQ / Z1Egz | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| QzYH7 / EgbiY | text / Text | {"name":"Text","content":"Attachments over 20 MB failed without an error message."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Ux1nH / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| yj9SX / Ux1nH | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| HB4uu / yj9SX | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| lEjHP / Ux1nH | text / Text | {"name":"Text","content":"The collapsed sidebar reopened after signing out and back in."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| E2yEmt / jlg2M | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| mLjxR / E2yEmt | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| qubba / mLjxR | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NXsPw / E2yEmt | text / Text | {"name":"Text","content":"Low contrast on the filters menu in dark mode."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| KQXOC / y38Ce | frame / Version 2.3.1 | {"name":"Version 2.3.1"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"gap":24,"padding":[20,0]} |
| W0PCTq / KQXOC | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| MImfX / W0PCTq | text / Version | {"name":"Version","content":"2.3.1"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| XwVPx / W0PCTq | text / Date | {"name":"Date","content":"Aug 28, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| aU5HV / W0PCTq | frame / Tag · Installed | {"name":"Tag · Installed"} | {"height":22,"fill":"$op-sunken","cornerRadius":999,"stroke":"$op-border","strokeWidth":1,"gap":4,"padding":[0,8],"alignItems":"center"} |
| k7K7c / aU5HV | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"check","library":"lucide","fill":"$op-text-2"} |
| g7raE / aU5HV | text / T | {"name":"T","content":"Installed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| XHhIE / KQXOC | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| EkZXu / XHhIE | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| ODPW5 / EkZXu | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| HRLZ4 / ODPW5 | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| ESYtM / EkZXu | text / Text | {"name":"Text","content":"Column counts didn’t update after archiving a card."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| OoL4D / XHhIE | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| eNz1R / OoL4D | frame / Kind · Fixed | {"name":"Kind · Fixed"} | {"width":72,"height":20,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| U21MwZ / eNz1R | text / T | {"name":"T","content":"Fixed"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NYjMn / OoL4D | text / Text | {"name":"Text","content":"Times showed UTC instead of the workspace time zone."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| hGmzv / y38Ce | frame / Version 2.3.0 | {"name":"Version 2.3.0"} | {"width":"fill_container","gap":24,"padding":[20,0]} |
| gNmvn / hGmzv | frame / Meta | {"name":"Meta"} | {"width":136,"layout":"vertical","gap":4} |
| B9awfe / gNmvn | text / Version | {"name":"Version","content":"2.3.0"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| xPdsL / gNmvn | text / Date | {"name":"Date","content":"Aug 12, 2026"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| qUzp5 / hGmzv | frame / Changes | {"name":"Changes"} | {"width":"fill_container","layout":"vertical","gap":10} |
| UfXJR / qUzp5 | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| Qt8jC / UfXJR | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| T7hAq / Qt8jC | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| g7hcbI / UfXJR | text / Text | {"name":"Text","content":"Pin filters to the sidebar."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| eSjdR / qUzp5 | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| NGuqR / eSjdR | frame / Kind · New | {"name":"Kind · New"} | {"width":72,"height":20,"fill":"$op-tint","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| n8PgQ / NGuqR | text / T | {"name":"T","content":"New"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| a4Vqk / eSjdR | text / Text | {"name":"Text","content":"Automation rules can wait for an SLA threshold."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| e5UxJF / qUzp5 | frame / Change | {"name":"Change"} | {"width":"fill_container","gap":12} |
| Eqfzd / e5UxJF | frame / Kind · Improved | {"name":"Kind · Improved"} | {"width":72,"height":20,"fill":"$op-sunken","cornerRadius":4,"justifyContent":"center","alignItems":"center"} |
| kEhIT / Eqfzd | text / T | {"name":"T","content":"Improved"} | {"fill":"$op-text-2","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| f8Ptr / e5UxJF | text / Text | {"name":"Text","content":"Boards with more than 10,000 messages load faster."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| AyIYM / qgbkr | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| RJIQh / AyIYM | text / Note | {"name":"Note","content":"Showing 3 of 14 versions"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| nneow / AyIYM | frame / Button · Show older versions | {"name":"Button · Show older versions"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| LDFR1 / nneow | text / Label | {"name":"Label","content":"Show older versions"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| hKqQZ / Uozi6 | rectangle / Scrim | {"name":"Scrim"} | {"layoutPosition":"absolute","x":0,"y":0,"fill":"$op-scrim","width":1440,"height":1321} |
