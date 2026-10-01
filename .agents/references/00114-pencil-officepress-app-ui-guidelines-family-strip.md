# OfficePress App UI Guidelines / Section · Components / Family Strip

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| L4vMmm / ilcWW | frame / Family Strip | {"name":"Family Strip"} | {"width":"fill_container","gap":16} |
| j5a8WO / L4vMmm | frame / Communicate light | {"name":"Communicate light","theme":{"mode":"light","family":"communicate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| j6Votz / j5a8WO | text / Label | {"name":"Label","content":"Communicate · light"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| dI0BD / j5a8WO | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| aBT8D / dI0BD | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| Z8R2l / aBT8D | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| doxer / dI0BD | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| Xuaif / doxer | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| YC6WI / dI0BD | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| aCw62 / j5a8WO | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| jUASw / aCw62 | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| Ys21D / L4vMmm | frame / Communicate dark | {"name":"Communicate dark","theme":{"mode":"dark","family":"communicate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| O0gXI / Ys21D | text / Label | {"name":"Label","content":"Communicate · dark"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| UxDn4 / Ys21D | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| zD2sY / UxDn4 | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| t7GiQ / zD2sY | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| M4ebGn / UxDn4 | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| bkvor / M4ebGn | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| FsfiS / UxDn4 | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| fpbDD / Ys21D | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| KcZFM / fpbDD | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| ryLvc / L4vMmm | frame / Create light | {"name":"Create light","theme":{"mode":"light","family":"create"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| cFgi8 / ryLvc | text / Label | {"name":"Label","content":"Create · light"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| ZPutO / ryLvc | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| zR7Tz / ZPutO | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| lJPby / zR7Tz | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| s1Gzb / ZPutO | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| iIw92 / s1Gzb | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| J8ErIT / ZPutO | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Ej5oU / ryLvc | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| zqrQN / Ej5oU | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| R56oYZ / L4vMmm | frame / Create dark | {"name":"Create dark","theme":{"mode":"dark","family":"create"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| mNKVl / R56oYZ | text / Label | {"name":"Label","content":"Create · dark"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| hrj8m / R56oYZ | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| pYzJZ / hrj8m | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| diV5M / pYzJZ | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| jKOLB / hrj8m | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| wT1vT / jKOLB | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| V64Cb / hrj8m | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Hqowt / R56oYZ | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| G5Ih8m / Hqowt | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| vrLLz / L4vMmm | frame / Operate light | {"name":"Operate light","theme":{"mode":"light","family":"operate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| RaGFg / vrLLz | text / Label | {"name":"Label","content":"Operate · light"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| IljQe / vrLLz | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| FQnRV / IljQe | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| rLnQw / FQnRV | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| MhqZY / IljQe | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| WJIW5 / MhqZY | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| jrsHs / IljQe | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| dtooA / vrLLz | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| eCUUZ / dtooA | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| XSs4O / L4vMmm | frame / Operate dark | {"name":"Operate dark","theme":{"mode":"dark","family":"operate"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| N3DS8 / XSs4O | text / Label | {"name":"Label","content":"Operate · dark"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| ciXze / XSs4O | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| Ub5A3 / ciXze | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| s5Erf / Ub5A3 | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ydGbZ / ciXze | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| iPeHF / ydGbZ | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| xNeuN / ciXze | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Fk2dT / XSs4O | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| sCdNF / Fk2dT | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| C6fv1 / L4vMmm | frame / Commerce light | {"name":"Commerce light","theme":{"mode":"light","family":"commerce"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| r41F8 / C6fv1 | text / Label | {"name":"Label","content":"Commerce · light"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| G1yle / C6fv1 | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| QCmU7 / G1yle | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| ylqnX / QCmU7 | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| w8Qpa / G1yle | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| KVFAo / w8Qpa | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| NqcJo / G1yle | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Fos56 / C6fv1 | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| jwIRL / Fos56 | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| s1VNx / L4vMmm | frame / Commerce dark | {"name":"Commerce dark","theme":{"mode":"dark","family":"commerce"}} | {"width":"fill_container","fill":"$op-canvas","cornerRadius":12,"stroke":"$op-border","strokeWidth":1,"layout":"vertical","gap":12,"padding":16} |
| Rj8I1 / s1VNx | text / Label | {"name":"Label","content":"Commerce · dark"} | {"fill":"$op-text-2","lineHeight":1.5,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700","letterSpacing":0.5} |
| Futla / s1VNx | frame / Row | {"name":"Row"} | {"gap":8,"alignItems":"center"} |
| SlYCY / Futla | frame / Primary | {"name":"Primary"} | {"height":28,"fill":"$op-accent-strong","cornerRadius":4,"padding":[0,16],"alignItems":"center"} |
| G0lc4V / SlYCY | text / L | {"name":"L","content":"New"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| CwcMe / Futla | frame / Count | {"name":"Count"} | {"width":20,"height":20,"fill":"$op-tint","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| vAbKc / CwcMe | text / N | {"name":"N","content":"9"} | {"fill":"$op-on-tint","lineHeight":1,"fontFamily":"$op-font","fontSize":11,"fontWeight":"700"} |
| z447Zl / Futla | text / Link | {"name":"Link","content":"Open"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| sg6GQ / s1VNx | frame / Track | {"name":"Track"} | {"width":"fill_container","height":4,"fill":"$op-tint-2","cornerRadius":999,"layout":"none"} |
| tCKB6 / sg6GQ | rectangle / Fill | {"name":"Fill"} | {"cornerRadius":999,"x":0,"y":0,"fill":"$op-accent","width":90,"height":4} |
| OifYE / zTKmr | frame / Section · Rules | {"name":"Section · Rules"} | {"width":"fill_container","layout":"vertical","gap":32} |
| LhJVu / OifYE | frame / Section Header | {"name":"Section Header"} | {"width":"fill_container","stroke":"$ink","strokeWidth":{"bottom":1},"gap":40,"padding":[0,0,14,0],"justifyContent":"space_between","alignItems":"end"} |
| GhZFG / LhJVu | frame / Left | {"name":"Left"} | {"gap":12,"alignItems":"center"} |
| jNH2I / GhZFG | text / No | {"name":"No","content":"08"} | {"fill":"$muted","fontFamily":"$font-mono","fontSize":12,"fontWeight":"normal"} |
| KPIut / GhZFG | text / Title | {"name":"Title","content":"Rules"} | {"fill":"$ink","fontFamily":"$font-display","fontSize":28,"fontWeight":"700","letterSpacing":-0.5} |
| LO9DG / LhJVu | text / Desc | {"name":"Desc","content":"What changes per family, what never does."} | {"fill":"$muted","textGrowth":"fixed-width","width":640,"lineHeight":1.5,"textAlign":"right","fontFamily":"$font-display","fontSize":15,"fontWeight":"normal"} |
| vRs7V / OifYE | frame / Rules Grid | {"name":"Rules Grid"} | {"width":"fill_container","layout":"vertical","gap":16} |
| P7opW9 / vRs7V | frame / Row 1 | {"name":"Row 1"} | {"width":"fill_container","gap":16} |
| OyvyF / P7opW9 | frame / Do · Set mode and family on t | {"name":"Do · Set mode and family on t"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#0F8F6A","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| kfeQG / OyvyF | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| sHKx8 / kfeQG | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"check","library":"lucide","fill":"#0E8160"} |
| FjDgU / kfeQG | text / K | {"name":"K","content":"DO"} | {"fill":"#0E8160","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| VSJrT / OyvyF | text / Rule | {"name":"Rule","content":"Set mode and family on the app's root frame."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| a2D5Vy / OyvyF | text / Why | {"name":"Why","content":"Every screen of an app inherits both; nested frames never override family."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| z9RoHC / P7opW9 | frame / Do · Use op-* tokens for ever | {"name":"Do · Use op-* tokens for ever"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#0F8F6A","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| DgSH7 / z9RoHC | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| AHA04 / DgSH7 | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"check","library":"lucide","fill":"#0E8160"} |
| ZLPVg / DgSH7 | text / K | {"name":"K","content":"DO"} | {"fill":"#0E8160","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| LznBX / z9RoHC | text / Rule | {"name":"Rule","content":"Use op-* tokens for every colour."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| R4YBU / z9RoHC | text / Why | {"name":"Why","content":"Hard-coded hex values break dark mode and the other families."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| K8ihvd / P7opW9 | frame / Do · Keep the layer order: he | {"name":"Do · Keep the layer order: he"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#0F8F6A","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| SPlHd / K8ihvd | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| aBagN / SPlHd | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"check","library":"lucide","fill":"#0E8160"} |
| XbvQ2 / SPlHd | text / K | {"name":"K","content":"DO"} | {"fill":"#0E8160","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| iOR9q / K8ihvd | text / Rule | {"name":"Rule","content":"Keep the layer order: header → toolbar → canvas."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| BrPr6 / K8ihvd | text / Why | {"name":"Why","content":"Light: toolbar is a step darker than canvas. Dark: toolbar sits between header and canvas."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| O9NBO0 / P7opW9 | frame / Do · Use accent-text for link | {"name":"Do · Use accent-text for link"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#0F8F6A","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| N3EkE / O9NBO0 | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| aQi8Z / N3EkE | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"check","library":"lucide","fill":"#0E8160"} |
| ZQpZS / N3EkE | text / K | {"name":"K","content":"DO"} | {"fill":"#0E8160","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| dFqKt / O9NBO0 | text / Rule | {"name":"Rule","content":"Use accent-text for links and accent-strong for button fills."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| sf4rA / O9NBO0 | text / Why | {"name":"Why","content":"Raw accents like Operate orange (3.7:1) and Commerce green (4.1:1) fail as text on white."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| E79jY9 / vRs7V | frame / Row 2 | {"name":"Row 2"} | {"width":"fill_container","gap":16} |
| q9NUS / E79jY9 | frame / Don't · Don't use another family | {"name":"Don't · Don't use another family"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#E2551B","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| BG6Zn / q9NUS | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| rxEF5 / BG6Zn | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"#C74B18"} |
| D3bzck / BG6Zn | text / K | {"name":"K","content":"DON'T"} | {"fill":"#C74B18","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| WbxBw / q9NUS | text / Rule | {"name":"Rule","content":"Don't use another family's colour inside an app."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| qQ5vk / q9NUS | text / Why | {"name":"Why","content":"Accounting is orange everywhere. Blue in Accounting means nothing."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| M8ZAo / E79jY9 | frame / Don't · Don't recolour status. | {"name":"Don't · Don't recolour status."} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#E2551B","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| ob80m / M8ZAo | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| w5WfF / ob80m | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"#C74B18"} |
| xC5dD / ob80m | text / K | {"name":"K","content":"DON'T"} | {"fill":"#C74B18","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| mqxN7 / M8ZAo | text / Rule | {"name":"Rule","content":"Don't recolour status."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| YtrTR / M8ZAo | text / Why | {"name":"Why","content":"Unread is always green (op-dot); it's a status, not a brand colour. In Commerce, pair it with the dot's ring and position."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| hCagj / E79jY9 | frame / Don't · Don't put accent on larg | {"name":"Don't · Don't put accent on larg"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#E2551B","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| b4H66A / hCagj | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| zQFlD / b4H66A | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"#C74B18"} |
| W0qFM / b4H66A | text / K | {"name":"K","content":"DON'T"} | {"fill":"#C74B18","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| H4RCzT / hCagj | text / Rule | {"name":"Rule","content":"Don't put accent on large backgrounds."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| q2TCsH / hCagj | text / Why | {"name":"Why","content":"The sidebar is the darkest tinted neutral (op-nav), never the raw accent or the logo's secondary tint."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
| mAKc1 / E79jY9 | frame / Don't · Don't add sizes or spaci | {"name":"Don't · Don't add sizes or spaci"} | {"width":"fill_container","fill":"$card","cornerRadius":16,"stroke":"#E2551B","strokeWidth":{"top":3},"layout":"vertical","gap":12,"padding":24} |
| Oz9Un / mAKc1 | frame / Tag | {"name":"Tag"} | {"gap":8,"alignItems":"center"} |
| sDoxl / Oz9Un | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"x","library":"lucide","fill":"#C74B18"} |
| DiqWY / Oz9Un | text / K | {"name":"K","content":"DON'T"} | {"fill":"#C74B18","fontFamily":"$font-mono","fontSize":11,"fontWeight":"normal"} |
| RZkcb / mAKc1 | text / Rule | {"name":"Rule","content":"Don't add sizes or spacing outside the scales."} | {"fill":"$ink","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.35,"fontFamily":"$font-display","fontSize":16,"fontWeight":"700"} |
| sVl3x / mAKc1 | text / Why | {"name":"Why","content":"Five type sizes (plus Display 28 on auth), a 4-point spacing scale, five radii (4 / 8 / 12 / 16 / full)."} | {"fill":"$muted","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.55,"fontFamily":"$font-display","fontSize":13,"fontWeight":"normal"} |
