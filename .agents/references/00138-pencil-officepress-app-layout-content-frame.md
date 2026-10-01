# OfficePress App Layout / Section · Account & app settings / Screens / Row · Account & theme / Shot · Account settings / Account settings / Main / Body / Content — frame

Owner: [Pencil design map](00075-officepress-pencil-design-map.md) — load when locating the screen, component or adjacent section.

Source: native `officepress.pen`, extracted through the design API with resolved instances. Each row retains one node ID/path, parent, name/type, text or context, and all returned non-geometry properties. Text values preserve original spelling and line breaks; object values are JSON. Sample people, messages, versions and records are examples. Graphic path geometry remains in the native resource.

Apply [accepted corrections](00078-officepress-source-decisions.md) — load when using these design records as guidance.

## Node records

| ID / parent | Type / name | Exact text, context and flags | Layout and styling properties |
|---|---|---|---|
| GFFRZ / pWcM7 | frame / Content | {"name":"Content"} | {"width":"fill_container","justifyContent":"center"} |
| f4MVi / GFFRZ | frame / Column | {"name":"Column"} | {"width":760,"layout":"vertical","gap":24} |
| qjK0z / f4MVi | frame / Section · Personal information | {"name":"Section · Personal information"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| NF55l / qjK0z | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| V3Wb3 / NF55l | text / Title | {"name":"Title","content":"Personal information"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| OrbMX / NF55l | text / Desc | {"name":"Desc","content":"Keep your profile and sign-in identifiers current."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| X1prxm / qjK0z | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| CHyu1 / X1prxm | frame / Profile Row | {"name":"Profile Row"} | {"width":"fill_container","gap":32} |
| A7Z5X / CHyu1 | frame / Photo Preview | {"name":"Photo Preview"} | {"width":160,"layout":"vertical","gap":8,"alignItems":"center"} |
| TClYF / A7Z5X | frame / Avatar | {"name":"Avatar"} | {"width":96,"height":96,"fill":"$op-accent-strong","cornerRadius":999,"justifyContent":"center","alignItems":"center"} |
| pN5TX / TClYF | text / Initials | {"name":"Initials","content":"MR"} | {"fill":"$op-on-accent","lineHeight":1,"fontFamily":"$op-font","fontSize":28,"fontWeight":"700"} |
| XMLSB / A7Z5X | text / Caption | {"name":"Caption","content":"Preview of your profile picture"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"textAlign":"center","fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| z136Y3 / CHyu1 | frame / Fields | {"name":"Fields"} | {"width":"fill_container","layout":"vertical","gap":16} |
| ZQqfA / z136Y3 | frame / Field · Name | {"name":"Field · Name"} | {"width":"fill_container","layout":"vertical","gap":4} |
| jgq98 / ZQqfA | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| b3vEqJ / jgq98 | text / Label | {"name":"Label","content":"Name"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| VGY5P / jgq98 | text / Req | {"name":"Req","content":"*"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Yf2Ql / ZQqfA | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| m4TcSe / Yf2Ql | text / Value | {"name":"Value","content":"Mila Reyes"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| P0u5mU / z136Y3 | frame / Field · Image | {"name":"Field · Image"} | {"width":"fill_container","layout":"vertical","gap":4} |
| rOJUf / P0u5mU | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| suXpw / rOJUf | text / Label | {"name":"Label","content":"Image"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| dsIAX / P0u5mU | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| gqfUC / dsIAX | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"image","library":"lucide","fill":"$op-text-2"} |
| z0uxyn / dsIAX | text / Value | {"name":"Value","content":"https://cdn.officepress.ph/u/mreyes.jpg"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| p3ZSi / P0u5mU | text / Hint | {"name":"Hint","content":"Paste an image URL. The preview updates as you type."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| LY8aM / z136Y3 | frame / Field · Username | {"name":"Field · Username"} | {"width":"fill_container","layout":"vertical","gap":4} |
| uzCfj / LY8aM | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| YjpUw / uzCfj | text / Label | {"name":"Label","content":"Username"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| fe8Zl / LY8aM | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| PYQkr / fe8Zl | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"at-sign","library":"lucide","fill":"$op-text-2"} |
| vHEH5 / fe8Zl | text / Value | {"name":"Value","content":"mreyes"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| HwiyS / z136Y3 | frame / Contact | {"name":"Contact"} | {"width":"fill_container","gap":16} |
| YIwUp / HwiyS | frame / Field · Email address | {"name":"Field · Email address"} | {"width":"fill_container","layout":"vertical","gap":4} |
| nyO3s / YIwUp | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| Dy5tF / nyO3s | text / Label | {"name":"Label","content":"Email address"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Rvj3R / YIwUp | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| OX8r0 / Rvj3R | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"mail","library":"lucide","fill":"$op-text-2"} |
| f7Rbjz / Rvj3R | text / Value | {"name":"Value","content":"mila.reyes@officepress.ph"} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| baXDs / HwiyS | frame / Field · Phone number | {"name":"Field · Phone number"} | {"width":"fill_container","layout":"vertical","gap":4} |
| b1Vma / baXDs | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| znIrI / b1Vma | text / Label | {"name":"Label","content":"Phone number"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| D4Bm8m / baXDs | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| EV9D5 / D4Bm8m | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"phone","library":"lucide","fill":"$op-text-2"} |
| VlQOm / D4Bm8m | text / Value | {"name":"Value","content":"Enter your phone number"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| TPoI7 / z136Y3 | frame / Field · Current password | {"name":"Field · Current password"} | {"width":"fill_container","layout":"vertical","gap":4} |
| nOgcO / TPoI7 | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| o6asC / nOgcO | text / Label | {"name":"Label","content":"Current password"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| ARTik / TPoI7 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| rZ2AL / ARTik | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| cgejf / ARTik | text / Value | {"name":"Value","content":"Enter your current password"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| K0jcz / ARTik | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| pyEo0 / TPoI7 | text / Hint | {"name":"Hint","content":"Required only when adding a new username, email, or phone sign-in method."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| I4EqZG / qjK0z | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| PDLBg / I4EqZG | text / Note | {"name":"Note","content":"Role is managed by your workspace admin."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| Y9z4J / I4EqZG | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| Lho9i / Y9z4J | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| OxJb2 / I4EqZG | frame / Button · Update | {"name":"Button · Update"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16],"alignItems":"center"} |
| v4Ksu0 / OxJb2 | text / Label | {"name":"Label","content":"Update"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| eC43b / f4MVi | frame / Section · Change password | {"name":"Section · Change password"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| czIbx / eC43b | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| jd9GO / czIbx | text / Title | {"name":"Title","content":"Change password"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| fZxVJ / czIbx | text / Desc | {"name":"Desc","content":"Choose a strong password you don't use elsewhere. It's shared by every sign-in method that uses one."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Z3us6 / eC43b | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| X4CBo / Z3us6 | frame / Field · Current password | {"name":"Field · Current password"} | {"width":"fill_container","layout":"vertical","gap":4} |
| a8g16 / X4CBo | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| o1Rbhk / a8g16 | text / Label | {"name":"Label","content":"Current password"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| xaWXh / a8g16 | text / Req | {"name":"Req","content":"*"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Lumh6 / X4CBo | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,12],"alignItems":"center"} |
| j8qlnn / Lumh6 | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| e3c9L / Lumh6 | text / Value | {"name":"Value","content":"Enter your current password"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| dkKTq / Lumh6 | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| uucf9 / Z3us6 | frame / Field · New password | {"name":"Field · New password"} | {"width":"fill_container","layout":"vertical","gap":4} |
| rDM79 / uucf9 | frame / Label Row | {"name":"Label Row"} | {"width":"fill_container","gap":8,"alignItems":"center"} |
| CuDKS / rDM79 | text / Label | {"name":"Label","content":"New password"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| BxEDi / rDM79 | text / Req | {"name":"Req","content":"*"} | {"fill":"$op-danger","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| jLfFC / uucf9 | frame / Input | {"name":"Input"} | {"width":"fill_container","height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-accent","strokeWidth":2,"gap":8,"padding":[0,12],"alignItems":"center"} |
| mCxuq / jLfFC | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"lock","library":"lucide","fill":"$op-text-2"} |
| sUCLt / jLfFC | text / Value | {"name":"Value","content":"Enter your new password"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| Gbujb / jLfFC | icon / Trail | {"name":"Trail"} | {"width":15,"height":15,"icon":"eye","library":"lucide","fill":"$op-text-2"} |
| arhUE / eC43b | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| Nz2pY / arhUE | text / Note | {"name":"Note"} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| qL7z2 / arhUE | frame / Button · Cancel | {"name":"Button · Cancel"} | {"height":36,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"gap":8,"padding":[0,16],"alignItems":"center"} |
| m3z5oB / qL7z2 | text / Label | {"name":"Label","content":"Cancel"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| MxSoy / arhUE | frame / Button · Update password | {"name":"Button · Update password"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16],"alignItems":"center"} |
| gTUGV / MxSoy | text / Label | {"name":"Label","content":"Update password"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| gxwCg / f4MVi | frame / Section · Two-factor authentication | {"name":"Section · Two-factor authentication"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| nMwwZ / gxwCg | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| aNW36 / nMwwZ | text / Title | {"name":"Title","content":"Two-factor authentication"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| lQOJj / nMwwZ | text / Desc | {"name":"Desc","content":"Add an authenticator-app step at sign-in. Works with Google Authenticator, 1Password, Authy and similar apps."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| rWBqt / gxwCg | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| RmokP / rWBqt | frame / Setup | {"name":"Setup"} | {"width":"fill_container","gap":28} |
| Ui6y3 / RmokP | frame / QR | {"name":"QR"} | {"width":180,"layout":"vertical","gap":8,"alignItems":"center"} |
| TyzY7 / Ui6y3 | text / Step | {"name":"Step","content":"1 · Scan with your app"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| mPL4D / Ui6y3 | frame / QR Code | {"name":"QR Code"} | {"width":180,"height":180,"fill":"#FFFFFF","cornerRadius":8,"stroke":"$op-border","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| nVOha / mPL4D | icon / I | {"name":"I"} | {"width":132,"height":132,"icon":"qr-code","library":"lucide","fill":"#15171C"} |
| SJAXG / RmokP | frame / Steps | {"name":"Steps"} | {"width":"fill_container","layout":"vertical","gap":20} |
| Rtnzl / SJAXG | frame / Secret | {"name":"Secret"} | {"width":"fill_container","layout":"vertical","gap":4} |
| FGaiM / Rtnzl | text / Label | {"name":"Label","content":"Or copy the secret key"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| z3RZK4 / Rtnzl | frame / Row | {"name":"Row"} | {"width":"fill_container","gap":8} |
| Qiw4L / z3RZK4 | frame / Key | {"name":"Key"} | {"width":"fill_container","height":40,"fill":"$op-sunken","cornerRadius":4,"stroke":"$op-border","strokeWidth":1,"padding":[0,12],"alignItems":"center"} |
| IYj0y / Qiw4L | text / V | {"name":"V","content":"GMCU INCQ JBCY AU4I"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font-mono","fontSize":13,"fontWeight":"700","letterSpacing":1} |
| U88zII / z3RZK4 | frame / Copy | {"name":"Copy"} | {"width":40,"height":40,"fill":"$op-surface","cornerRadius":4,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| F4NzI / U88zII | icon / Icon | {"name":"Icon"} | {"width":16,"height":16,"icon":"copy","library":"lucide","fill":"$op-text"} |
| jzXoS / Rtnzl | frame / Regenerate | {"name":"Regenerate"} | {"gap":4,"alignItems":"center"} |
| YxYJH / jzXoS | icon / I | {"name":"I"} | {"width":12,"height":12,"icon":"refresh-cw","library":"lucide","fill":"$op-accent-text"} |
| a8tBfi / jzXoS | text / T | {"name":"T","content":"Regenerate secret"} | {"fill":"$op-accent-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| Iphp3 / SJAXG | frame / Code | {"name":"Code"} | {"width":"fill_container","layout":"vertical","gap":4} |
| p6cXZ1 / Iphp3 | text / Label | {"name":"Label","content":"2 · Enter the code from your authenticator app"} | {"fill":"$op-text","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"700"} |
| bOZkH / Iphp3 | frame / Digits | {"name":"Digits"} | {"gap":8} |
| YnuWb / bOZkH | frame / Digit 1 | {"name":"Digit 1"} | {"width":44,"height":48,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| aedCI / YnuWb | text / D | {"name":"D","content":"3"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| T7fGd7 / bOZkH | frame / Digit 2 | {"name":"Digit 2"} | {"width":44,"height":48,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| k5M81r / T7fGd7 | text / D | {"name":"D","content":"9"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| K6DQ1n / bOZkH | frame / Digit 3 | {"name":"Digit 3"} | {"width":44,"height":48,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| SNXuW / K6DQ1n | text / D | {"name":"D","content":"1"} | {"fill":"$op-text","lineHeight":1,"fontFamily":"$op-font","fontSize":20,"fontWeight":"700"} |
| R8R3BG / bOZkH | frame / Digit 4 | {"name":"Digit 4"} | {"width":44,"height":48,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-accent","strokeWidth":2,"justifyContent":"center","alignItems":"center"} |
| waqJD / bOZkH | frame / Digit 5 | {"name":"Digit 5"} | {"width":44,"height":48,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| u8D3Aj / bOZkH | frame / Digit 6 | {"name":"Digit 6"} | {"width":44,"height":48,"fill":"$op-surface","cornerRadius":8,"stroke":"$op-border-strong","strokeWidth":1,"justifyContent":"center","alignItems":"center"} |
| GBAGY / gxwCg | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| i0JOcI / GBAGY | text / Note | {"name":"Note","content":"Two-factor turns on once the code verifies."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| iWyQk / GBAGY | frame / Button · Verify | {"name":"Button · Verify"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16],"alignItems":"center"} |
| PYCAx / iWyQk | text / Label | {"name":"Label","content":"Verify"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| SXem6 / f4MVi | frame / Section · Export your data | {"name":"Section · Export your data"} | {"width":"fill_container","fill":"$op-surface","cornerRadius":12,"stroke":"$op-border","effect":[{"type":"shadow","shadowType":"outer","color":"$op-shadow-edge","blur":1},{"type":"shadow","shadowType":"outer","color":"$op-shadow-soft","offset":{"x":0,"y":1},"blur":3}],"layout":"vertical"} |
| wUVha / SXem6 | frame / Head | {"name":"Head"} | {"width":"fill_container","stroke":"$op-border","strokeWidth":{"bottom":1},"layout":"vertical","gap":4,"padding":[20,24]} |
| yEHr6 / wUVha | text / Title | {"name":"Title","content":"Export your data"} | {"fill":"$op-text","lineHeight":1.25,"fontFamily":"$op-font","fontSize":16,"fontWeight":"700"} |
| vKjP6 / wUVha | text / Desc | {"name":"Desc","content":"Download a portable copy of your account data, including personal information and sign-in identifiers."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"normal"} |
| R4Xwyu / SXem6 | frame / Body | {"name":"Body"} | {"width":"fill_container","layout":"vertical","gap":20,"padding":24} |
| k2KeY0 / R4Xwyu | frame / Security Notice | {"name":"Security Notice"} | {"width":"fill_container","fill":"$op-warning-tint","cornerRadius":8,"gap":12,"padding":16} |
| NpoRx / k2KeY0 | icon / I | {"name":"I"} | {"width":18,"height":18,"icon":"triangle-alert","library":"lucide","fill":"$op-warning"} |
| LOukt / k2KeY0 | frame / Text | {"name":"Text"} | {"width":"fill_container","layout":"vertical","gap":4} |
| U7SDr / LOukt | text / Title | {"name":"Title","content":"Important security notice"} | {"fill":"$op-warning","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
| NrniC / LOukt | text / Line | {"name":"Line","content":"•  This file contains sensitive personal information."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| NstfX / LOukt | text / Line | {"name":"Line","content":"•  Don't share it or upload it to unsecured services."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| M1kJK / LOukt | text / Line | {"name":"Line","content":"•  Store it securely and delete it when no longer needed."} | {"fill":"$op-text","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| wGDkG / SXem6 | frame / Footer | {"name":"Footer"} | {"width":"fill_container","fill":"$op-toolbar","cornerRadius":[0,0,12,12],"stroke":"$op-border","strokeWidth":{"top":1},"gap":8,"padding":[12,24],"alignItems":"center"} |
| Owpdk / wGDkG | text / Note | {"name":"Note","content":"Downloads immediately as a single file."} | {"fill":"$op-text-2","textGrowth":"fixed-width","width":"fill_container","lineHeight":1.5,"fontFamily":"$op-font","fontSize":12,"fontWeight":"normal"} |
| AXinD / wGDkG | frame / Button · Download my data | {"name":"Button · Download my data"} | {"height":36,"fill":"$op-accent-strong","cornerRadius":4,"gap":8,"padding":[0,16,0,12],"alignItems":"center"} |
| m0tp4X / AXinD | icon / Icon | {"name":"Icon"} | {"width":15,"height":15,"icon":"download","library":"lucide","fill":"$op-on-accent"} |
| IEbsF / AXinD | text / Label | {"name":"Label","content":"Download my data"} | {"fill":"$op-on-accent","lineHeight":1.5,"fontFamily":"$op-font","fontSize":13,"fontWeight":"700"} |
