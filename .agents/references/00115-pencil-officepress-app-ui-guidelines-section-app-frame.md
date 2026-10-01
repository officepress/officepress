# OfficePress App UI Guidelines / Section · App frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

**Status correction:** the user confirms purge/delete are production material. Any “proposed” or “Not in production yet” wording below is superseded source history, retained for fidelity. See [the accepted production-status correction](00078-officepress-source-decisions.md) when interpreting these records.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| z6rZH / zTKmr | frame / Section · App frame | {"name":"Section · App frame"} | {"width":"fill_container","layout":"vertical","gap":32} |
| kHNw6 / z6rZH | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| Jxm2R / kHNw6 | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| FqqIe / Jxm2R | text / No | {"name":"No","content":"09"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| tieAa / Jxm2R | text / Title | {"name":"Title","content":"App frame"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| V3VnOs / kHNw6 | text / Desc | {"name":"Desc","content":"Behaviour every app shares. Full screens: see “OfficePress App Layout”."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| YOVd4 / z6rZH | frame / Frame Rules | {"name":"Frame Rules"} | {"width":"fill_container","layout":"vertical","gap":16} |
| lVYr5 / YOVd4 | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| uPeX7 / lVYr5 | frame / Left aside | {"name":"Left aside"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| k6iCE9 / uPeX7 | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| wyDxv / k6iCE9 | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"panel-left","library":"lucide","fill":"$fam-communicate"} |
| QszoH / k6iCE9 | text / T | {"name":"T","content":"Left aside"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| pf0kN / uPeX7 | text / D | {"name":"D","content":"Collapsible everywhere. Desktop: 260 px expanded ↔ 64 px icon rail, pushing the main section. Mobile (&lt; 768 px): collapsed by default, opens as a 300 px overlay with a 40% scrim."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| x9M3ZE / lVYr5 | frame / Header | {"name":"Header"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| US3WP / x9M3ZE | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| Vj9Tp / US3WP | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"layout-panel-top","library":"lucide","fill":"$fam-communicate"} |
| GE8ya / US3WP | text / T | {"name":"T","content":"Header"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| ut4PR / x9M3ZE | text / D | {"name":"D","content":"Page title and page actions on the left of a divider; then always, in order: notifications, agent, theme, user. All four are identical 36 px outlined circles. Notifications opens a 380 px account-wide activity popover (All / Mentions / Agent, grouped by day, actionable items, “Mark all read”)."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| O3TRe / lVYr5 | frame / Agent | {"name":"Agent"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| E2vsj / O3TRe | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| nAqWZ / E2vsj | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"bot","library":"lucide","fill":"$fam-communicate"} |
| DZO8n / E2vsj | text / T | {"name":"T","content":"Agent"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| CCZSf / O3TRe | text / D | {"name":"D","content":"Opens a 400 px panel docked right under the header, pushing content; full-height sheet on mobile. Shows context, a thread with visible action cards (done / running / undo) and a composer. The board reflects agent changes live."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| Y8Q8Nr / YOVd4 | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| zC2dG / Y8Q8Nr | frame / User menu | {"name":"User menu"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| sVRAE / zC2dG | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| UrLOv / sVRAE | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"circle-user","library":"lucide","fill":"$fam-communicate"} |
| p6hr9O / sVRAE | text / T | {"name":"T","content":"User menu"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| b2ZCsn / zC2dG | text / D | {"name":"D","content":"280 px popover under the avatar: identity · User Preferences, Account Settings · App Settings, Admin Dashboard (only if permitted) · Sign out."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| vTcWW / Y8Q8Nr | frame / Settings | {"name":"Settings"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| vWiZi / vTcWW | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| NdI4Z / vWiZi | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"settings","library":"lucide","fill":"$fam-communicate"} |
| lYgW9 / vWiZi | text / T | {"name":"T","content":"Settings"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| tCQ6e / vTcWW | text / D | {"name":"D","content":"Full-page, no aside: header arrow and “Back to App” return to the app. Account: personal information, change password, authenticator-app 2FA, instant data export (purge / delete proposed). App: Theme (logo, brand name, accent / sidebar / canvas, reset) plus app sections."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| rNr9z / Y8Q8Nr | frame / Authentication | {"name":"Authentication"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| WMbsO / rNr9z | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| RVaWc / WMbsO | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"log-in","library":"lucide","fill":"$fam-communicate"} |
| pv29s / WMbsO | text / T | {"name":"T","content":"Authentication"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| tW0bp / rNr9z | text / D | {"name":"D","content":"One page set for all apps, themed by family: sign in (method cards), email (password / code / magic link), username, two-factor, forgot password, check email. Display type 28/700 only here."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| EXDii / zTKmr | frame / Section · Polish &amp; motion | {"name":"Section · Polish &amp; motion"} | {"width":"fill_container","layout":"vertical","gap":32} |
| imUu0 / EXDii | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| FXkS1 / imUu0 | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| zbH0h / FXkS1 | text / No | {"name":"No","content":"10"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| PyaaH / FXkS1 | text / Title | {"name":"Title","content":"Polish &amp; motion"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| n68x7 / imUu0 | text / Desc | {"name":"Desc","content":"Small details that compound. Static rules apply in design; motion rules are the engineering spec for every app."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| JlOhb / EXDii | frame / Polish Grid | {"name":"Polish Grid"} | {"width":"fill_container","layout":"vertical","gap":16} |
| TbwH4 / JlOhb | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| UyTdr / TbwH4 | frame / Concentric radius | {"name":"Concentric radius"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| ZD7sY / UyTdr | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| tyLiY / ZD7sY | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"circle-dashed","library":"lucide","fill":"$fam-communicate"} |
| aFlrx / ZD7sY | text / T | {"name":"T","content":"Concentric radius"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| nnFZg / UyTdr | text / D | {"name":"D","content":"Outer radius = inner radius + padding. Cards (8) in columns with 8 padding → column 16. Menu items (4) in popovers with 8 padding → popover 12. Pills stay full."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| si5xg / TbwH4 | frame / Elevation | {"name":"Elevation"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| R2jwTd / si5xg | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| ru0sD / R2jwTd | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"layers","library":"lucide","fill":"$fam-communicate"} |
| dgC7B / R2jwTd | text / T | {"name":"T","content":"Elevation"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| JwPxu / si5xg | text / D | {"name":"D","content":"Raised surfaces (cards, popovers, sheets) use layered shadows, not borders: op-shadow-edge (0 0 1) + op-shadow-soft (0 1 3), or op-shadow-pop (0 12 32) for popovers. Keep borders for structure and state: inputs, dividers, docked panels, selection, focus, danger."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| Btb40 / TbwH4 | frame / Optical alignment | {"name":"Optical alignment"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| F4ZFzF / Btb40 | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| jpf6h / F4ZFzF | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"align-horizontal-justify-center","library":"lucide","fill":"$fam-communicate"} |
| f9zm7 / F4ZFzF | text / T | {"name":"T","content":"Optical alignment"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| N51RK / Btb40 | text / D | {"name":"D","content":"Text buttons pad 16 / 16. Leading-icon buttons pad 12 on the icon side, 16 on the text side; trailing icon mirrors it. Icon-only controls are square and centred."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| U3ts2e / JlOhb | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| hNRGM / U3ts2e | frame / Press &amp; transitions | {"name":"Press &amp; transitions"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| ip4kj / hNRGM | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| g30K5A / ip4kj | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"mouse-pointer-click","library":"lucide","fill":"$fam-communicate"} |
| tv0Xq / ip4kj | text / T | {"name":"T","content":"Press &amp; transitions"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| fKiCx / hNRGM | text / D | {"name":"D","content":"Pressable controls scale to 0.96 on press (never below 0.95), with a static: true opt-out for dense lists. Transitions name exact properties (never “all”), ease-out, 150 ms for colour and opacity, 200 ms for transform."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| CHQ8y / U3ts2e | frame / Icon swaps | {"name":"Icon swaps"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| C3HXDA / CHQ8y | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| N7F4Z / C3HXDA | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"sun-moon","library":"lucide","fill":"$fam-communicate"} |
| qXvnN / C3HXDA | text / T | {"name":"T","content":"Icon swaps"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| TyfSd / CHQ8y | text / D | {"name":"D","content":"Theme, copy → check and similar swaps cross-fade both icons: scale 0.25 → 1, opacity 0 → 1, blur 4 px → 0. Spring, duration 0.3, bounce 0 (or cubic-bezier(0.2, 0, 0, 1) without a motion library)."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| Q1wVmm / U3ts2e | frame / Enter &amp; exit | {"name":"Enter &amp; exit"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| JNOWf / Q1wVmm | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| yDqDM / JNOWf | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"panel-right-open","library":"lucide","fill":"$fam-communicate"} |
| k5N9B / JNOWf | text / T | {"name":"T","content":"Enter &amp; exit"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| c9yjJD / Q1wVmm | text / D | {"name":"D","content":"Popovers and panels enter with opacity + 4 px translateY, ease-out; exits are softer and shorter. Stagger only rare, staged entrances (onboarding, empty states) by ~100 ms. Skip enter animations on first page load."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| IXFH9 / JlOhb | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":16} |
| musHb / IXFH9 | frame / Icons | {"name":"Icons"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| g3nln / musHb | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| G5HXIt / g3nln | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"pen-tool","library":"lucide","fill":"$fam-communicate"} |
| V8fs6 / g3nln | text / T | {"name":"T","content":"Icons"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| tq78f / musHb | text / D | {"name":"D","content":"One library per surface (Lucide). Stroke matches text weight: 1.5 px beside regular text, 2 px beside bold. One SVG recoloured per state; outline by default, fill only to mark the active state."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| qUL51 / IXFH9 | frame / Images | {"name":"Images"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| tAY3w / qUL51 | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| UShiU / tAY3w | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"image","library":"lucide","fill":"$fam-communicate"} |
| J15EJY / tAY3w | text / T | {"name":"T","content":"Images"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| mcNPl / qUL51 | text / D | {"name":"D","content":"Photos and avatars get a 1 px inside outline in op-image-outline (black 10% in light, white 10% in dark), never a tinted neutral."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| jjPAm / IXFH9 | frame / Motion restraint | {"name":"Motion restraint"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"layout":"vertical","gap":12,"padding":24} |
| Dv2DL / jjPAm | frame / Head | {"name":"Head"} | {"gap":10,"alignItems":"center"} |
| pokTR / Dv2DL | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"timer-off","library":"lucide","fill":"$fam-communicate"} |
| ZqxfX / Dv2DL | text / T | {"name":"T","content":"Motion restraint"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| qJzHC / jjPAm | text / D | {"name":"D","content":"No custom animation on high-frequency actions (typing, hovering rows, toggling filters). Motion is never the only signal: every animated change also changes colour, icon or label."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| ocPpT / zTKmr | frame / Footer | {"name":"Footer"} | {"width":"fill_container","stroke":"$line","strokeWidth":{"top":1},"padding":[20,0,0,0],"justifyContent":"space_between"} |
| A4ZwV8 / ocPpT | text / L | {"name":"L","content":"Source of truth: variables op-* (mode × family) · components: App Shell, Header, Sidebar, Popovers, Agent Panel, Workflow Card · screens: “OfficePress App Layout”, “OfficePress Common Modules”"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| MbRoF / ocPpT | text / R | {"name":"R","content":"Reference build: Inbox Board — Light / Dark"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
