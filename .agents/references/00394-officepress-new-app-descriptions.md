# Six new OfficePress app descriptions — 2026-10-13

Owner: [current product catalogue](../context/products.md). Load when planning or describing `create-context`, `create-uiux`, `create-designs`, `create-graphics`, `app-develop`, or `app-cloud`; the catalogue has concise descriptions, while this reference retains the full supplied workflow and capability details.

Provenance: the user's 2026-10-13 message, with its full supplied wording preserved below. Current GitHub names were checked on 2026-10-13. These are accepted descriptions of intended apps, not a code, runtime, vendor integration, cost-control, or deployment acceptance receipt. The same message explicitly moves Clients to Communicate and Content to Operate; the current [catalogue](../context/products.md) and [brand routing](../context/brand.md) own those decisions. The earlier 23 descriptions remain intact in [their original source record](00079-officepress-user-product-descriptions.md).

## `create-context` — idea to verified knowledge

The user describes an app that treats knowledge rather than a pile of documents and chats as the maintained object. The starting point is a raw idea entered in one box. An AI assistant researches it, follows new leads until nothing new turns up, and records every open question as a gap. Evidence can close some gaps; questions only the user can answer wait for the user; questions that reading cannot settle get a small experiment. An idea becomes **frozen** only once every question is closed, and only confirmed facts enter the knowledge base.

The resulting knowledge is stored as plain text files that people can read, compare and version like code. It can be packaged as one portable, shareable file or served live for AI tools to query. Later incoming material is archived, compared against current knowledge and flagged when conflicting; it is added only after the user decides which version wins. Each step exposes its cost. Teams can plug in specialist instruction packs to guide the AI's work. These are product capabilities, not permission to auto-accept unsupported claims or silently resolve user-owned conflicts.

Repository: [`officepress/create-context`](https://github.com/officepress/create-context).

## `app-develop` — local AI software team

The user describes a small software team of AI helpers living on the user's computer. A person describes a requested change or build in ordinary language and puts it on a to-do board. After the person says “go”, a lead AI decomposes the job and assigns pieces to AI workers. Other AIs test the result, review quality and try it as a real user would. A job is marked done when those checks pass.

The team asks plainly for a password, a decision or sign-off when needed instead of guessing. A cross-project assistant answers questions such as “how's everything going?” with a summary. The user chooses team members and their knowledge and sets spending limits to avoid surprise costs. “Everything stays on your own computer” is part of the supplied app description; it is not a verified implementation or privacy audit.

Repository: [`officepress/app-develop`](https://github.com/officepress/app-develop).

## `app-cloud` — layer-two cloud manager

The user describes a per-project manager that helps deploy apps and supplies turnkey infrastructure support. AWS, GCP and Azure are the “layer 1” providers. This app is a “layer 2” interface that sets up, configures and manages those providers through a more digestible project interface. The named support areas are CDN, logs, message sending, workers, queuing, notifications and websockets. The description does not specify provider adapters, a provisioning API, operational guarantees, or which support areas are already implemented.

Repository: [`officepress/app-cloud`](https://github.com/officepress/app-cloud).

## `create-uiux` — functional wireframes

The user describes an AI UX designer that turns plain-language app ideas into simple, black-and-white, clickable screens focused on **form and function**. The supplied example is a shopping app in which people browse, add to cart and check out. People can click controls, move page to page, inspect all screens on a pan-and-zoom canvas or step through them individually, and preview phone or tablet layouts.

People can edit labels and other screen elements directly; the AI sees those changes and uses them in the next round. Numbered sticky notes can be placed on specific elements and submitted together as feedback, including requests such as “make this bigger” or “move this up here”. The work autosaves into one shareable file containing the whole conversation and every change, yielding a mock-up others can try rather than a static picture.

Repository: [`officepress/create-uiux`](https://github.com/officepress/create-uiux).

## `create-designs` — polished visual design

The user describes an AI design studio for posters, marketing and social graphics, pitch decks/slides, logos and layouts, websites and full app screens. It emphasizes **look and feel** and professional polish. Its taste comes from a curated library of styles, colour palettes and font pairings plus self-checking of the output. Work lands on an editable canvas for direct changes or further conversational iteration.

For websites and apps, it goes beyond static visuals: users can click through a design, then hand human or AI builders an exact blueprint. An automatic checker compares the built result with that blueprint. The supplied operating model says it runs on the user's computer, uses their own AI account and works with whichever AI assistant they already use. Those integration and checking behaviors are intended product scope, not verified current features.

Repository: [`officepress/create-designs`](https://github.com/officepress/create-designs). The user's explicit distinction is that `create-uiux` concentrates on form and function while `create-designs` concentrates on look and feel; they are separate apps.

## `create-graphics` — layered PNG editor

The user describes a graphics editor where people draw shapes and type text that stay crisp and editable, paint and erase pixels with brushes, select image areas by colour or rectangle, and fill areas. Every design element has its own layer that can move, resize, rotate, hide or change style without disturbing other layers. Layer effects include drop shadow, glow, colour adjustments and blend modes, all adjustable or removable. Changes can be undone, and images can be pasted or dropped in.

The distinguishing file contract is an ordinary PNG: any app or browser can display the finished picture, but reopening it in `create-graphics` restores layers, text and effects for editing. Users can export separate flat copies as PNG, JPEG or WebP. The description does not specify the metadata encoding or compatibility rules needed to prove this file behavior.

Repository: [`officepress/create-graphics`](https://github.com/officepress/create-graphics).

## Supplied source wording

The following retains the complete user message behind these catalogue updates. The sections above make its meaning directly retrievable.

```text
In the KB please move clients to communicate, and content to operate then.

New app descriptions

----
create-context

Turns a raw idea into a verified knowledge base that agents can work from, by having an AI research it, surface every open question for you or the agent to answer, and lock in only what's been confirmed, then packaging the result as a portable file or a live knowledge server.

Most ideas die in a pile of documents, chats, and half-remembered decisions where nobody can tell what's actually true. This apps treats knowledge, not documents, as the thing you maintain. You describe an idea in one box. An AI assistant researches it, following each new lead until nothing new turns up, and writes down every open question as a gap. Some gaps the AI answers with evidence; some only you can answer, so they wait for you; and anything that can't be settled by reading gets a small experiment to prove it one way or the other. When every question is closed, the idea is "frozen" and only the confirmed facts go into the knowledge base, kept as plain text files you can read, compare, and version like code. From there you can save the whole thing as a single file to share, or run it as a live service that AI tools can query. When new material arrives later, the app archives it, checks it against what's already known, flags any conflicts, and only adds it once you decide which version wins. Every step shows what it cost, and you can plug in your own specialist instruction packs so the AI works the way your team does.

app-develop

A team of AI helpers that builds software for you: you say what you want, they do the work, and they only check in with you when they truly need you.

Think of it as hiring a small software team that lives on your computer. You write down what you want changed or built, the way you'd explain it to a person, and it goes on a to-do board. When you say "go", a lead AI splits the job into smaller pieces and hands them to AI workers. Other AIs then check the result: they test it, review it for quality, and try it out the way a real user would. If everything passes, the job is marked done. If they need a password, a decision, or your sign-off, they ask you plainly instead of guessing. One assistant keeps track of all your projects, so you can simply ask "how's everything going?" and get a quick summary. You choose who's on each team and what they know, and you set spending limits so costs never surprise you. Everything stays on your own computer.

app-cloud

A manager of cloud services that helps apps deploy and provides turn key infrastructure support per project.

The layer 1 cloud is AWS, GCP, Azure. This app is a layer 2 cloud solution that sets up, configures and manages the layer 1 cloud and provides an easy to digest interface that users can use to deploy their project and integrate cloud infrastructure support such as: CDN, logs, message sending, workers and queuing, notifications, and websockets.

 
create-uiux
 
Lets you describe an app idea in plain words and watch AI sketch it into real, clickable screens you can try out and fix up yourself.

It’s like having a UX designer on call. You type what you want — "a shopping app where people browse, add to cart, and check out" — and it draws up simple black-and-white screens that focuses on form and function: you can click the buttons and move from page to page like a real app. All the screens are laid out on one big canvas you can glide around and zoom into, or you can step through them one at a time, even previewing how they'd look on a phone or tablet. And you're not stuck just asking for changes — if a label is wrong or something shouldn't be there, you click it and fix it yourself, right on the screen. The AI sees what you changed and keeps it in mind for the next round. You can also stick numbered sticky notes on anything ("make this bigger," "move this up here") and send them all at once as your feedback. Everything saves itself into one file you can share, with the whole conversation and every change kept inside — so instead of a static picture of an idea, you end up with a working mock-up people can actually try.

create-designs

A poster, social media graphics, a pitch deck, a website, an app — and it designs it for you, with real polish and taste instead of the generic look AI usually produces.

Like having a design studio you talk to instead of hire. You describe what you need in plain words and AI designs it on a canvas, the way a professional would — marketing materials, posters, social media graphics, slides, logos and layouts, websites, or full app screens. What sets it apart is taste: it draws on a curated library of styles, color palettes, and font pairings, and checks its own work, so the results look designed, not generated. Everything lands on an editable canvas, so you can tweak things yourself or just keep talking until it's right. And when what you're designing is meant to become something — a website or an app — The app goes further than pictures: you can click through the design like the real thing to try it out, then hand builders (human or AI) an exact blueprint, with an automatic checker that makes sure what gets built matches what was designed. It runs on your own computer, with your own AI account, and works with whichever AI assistant you already use.

create-graphics

A graphics editor saves your work as a regular PNG, so the picture opens anywhere while keeping all of its editable layers for you.

An graphics editor that allows users draw shapes and type text that stay crisp and editable, paint and erase pixels with brushes, select parts of a picture by color or by dragging a box, and fill areas with a click. Each piece of your design sits on its own layer, so you can move, resize, rotate, hide, or restyle any part without disturbing the rest, and you can give any layer effects like a drop shadow, a glow, color tweaks, or a blend mode, then adjust or remove them later. What sets it apart is the file format: you save to a plain PNG, the same kind of image file used everywhere on the web. Anyone can open that file in any app or browser and see the finished picture, but when you open it back in the app, all your layers, text, and effects are still there, ready to edit. Everything can be undone, images can be pasted or dropped in from anywhere, and you can export a flat copy as PNG, JPEG, or WebP when you're done.
----

The difference between uiux and designs is uiux focuses on form and function, while designs focuses on look and feel. Let me know if there are any questions, if not please add/update KB.
```
