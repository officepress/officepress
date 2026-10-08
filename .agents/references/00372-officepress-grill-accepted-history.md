# Exact accepted grill history through Q-008

Owner: [active question ledger](../specs/00001-reusable-app-shell-and-component-proofs/questions.md). Load for every exact question, planned/asked default and answer from Q-001 through Q-008, including Q-006 supersession. Moved losslessly on 2026-10-05; only relative link destinations changed.

Later authority note: the user's 2026-10-06 correction [D-23](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md) supersedes the workflow-version portion of Q-008. These exact question/answer records remain unchanged as historical provenance; consult current reusable guidance before implementation.

## Q-001 — agent-provider depth

- Status: accepted-decision.
- Source: gap G-07; architecture fixture boundary; P-00/P-01.
- Question: For the agent-mode proof, should it call a real AI model, or use scripted local responses?
- Agent default (not selected; superseded by the user answer): Suggested default, not accepted unless you choose it: scripted local responses first, for repeatable action, permission and failure tests. The framework integration and persistence would still be real.
- User answer: should use real model, I can provide the provide the API key for openrouter. I want to test against Gemini 3.5 flash light and GPT 4o mini
- Evidence answer: The initial deterministic-only proposal was unaccepted and is now superseded for model integration. OpenRouter lists `google/gemini-3.5-flash-lite` and `openai/gpt-4o-mini`; catalogue evidence and naming normalization are retained in [research](../specs/00001-reusable-app-shell-and-component-proofs/research.md#r-06-grill-model-catalogue-check--2026-10-02). A catalogue listing is not a successful runtime test.
- Normalized decision: Real-model agent tests through OpenRouter against both named models. The user can provide the API key at proof setup. Scripted adapters supplement controlled failure tests; they cannot satisfy live-model acceptance. This is proof scope, not a production-provider commitment.
- Follow-up: No remaining provider-depth clarification; G-01 package choice is separate. Q-002 covers message delivery. Credentials and model calls wait for proof execution, which this grill has not started.
- Decision update: [D-07 / G-07](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); model depth resolved, other integration depth remains open.

## Q-002 — message-delivery depth

- Status: accepted-decision.
- Source: gap G-07/G-10; Message Templates and Chat View proof boundaries.
- Question: Should message-delivery proofs send to real test accounts, or keep all messages in a local test inbox?
- Agent default: None proposed or accepted.
- User answer: send to real test accounts. I can provide the SMTP information.
- Evidence answer: The initial [component proof contracts](../specs/00001-reusable-app-shell-and-component-proofs/component-proofs.md) proposed local sink/channel adapters; this answer supersedes that restriction for email delivery. [Accepted shared-app guidance](../context/shared-app-experience.md) defines channel behavior without selecting proof recipients or SMTP settings.
- Normalized decision: Send real emails to designated test accounts using SMTP information the user can provide. Real delivery is required for the email send paths; local sinks remain supplementary for controlled failures and other channel fixtures. This does not select live SMS/social channels or an incoming-mail integration.
- Follow-up: Collect SMTP configuration, sender and designated test recipients at proof setup. G-10/G-14 retry and unknown-outcome semantics remain open; Q-009 addresses them. No credentials or sending are needed during this grill.
- Decision update: [D-08 / G-07](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); email delivery depth resolved, runtime evidence and retry semantics remain pending.

## Q-003 — adoption format

- Status: accepted-decision.
- Source: gap G-08; independent consumer proof P-06.
- Question: Should other apps initially adopt these proofs by copying documented plugins, or by installing reusable packages?
- Agent default: None proposed or accepted.
- User answer: Copying documented plugins, then they can mod it after according to their case.
- Evidence answer: The earlier [consumer research](00367-officepress-chat-adoption-research.md) left distribution open. This answer selects source-copy adoption and is promoted into [reusable proof guidance](../context/reusable-proofs.md).
- Normalized decision: Apps initially copy documented plugins and may modify those copies for their own use cases. P-06 must demonstrate independent copying and an app-specific modification. Reusable package distribution is not required for this initial adoption path.
- Follow-up: Document copy inputs, dependencies, configuration, schema and verification steps; implementation details are proof-owned.
- Decision update: [D-09 / G-08](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); adoption format resolved, consumer proof remains unrun.

## Q-004 — company scope

- Status: accepted-decision.
- Source: gap G-09; identity/theme scope in P-01/P-06.
- Question: Should each proof app represent one company per installation, or multiple isolated company workspaces?
- Agent default: None proposed or accepted.
- User answer: one company. Moving forward, please provide a suggested default to each question.
- Evidence answer: [OfficePress purpose](../context/officepress.md) leaves hosting architecture unspecified. This reply explicitly selects one company per proof installation; it does not establish a tenancy policy for every OfficePress product.
- Normalized decision: Each proof app represents one company per installation. Multiple users/roles and their access boundaries still need proof coverage.
- Session instruction: Include a suggested default with each subsequent question; the operating rules above preserve this instruction for resumed sessions.
- Follow-up: Company scope is settled. G-09 retains any unresolved theme storage/key scope; do not treat one company as one user or remove account authorization checks.
- Decision update: [D-10 / G-09](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); company scope resolved, remaining storage details stay open.

## Q-005 — release source

- Status: accepted-decision.
- Source: gaps G-03/G-18; About proof P-01.
- Question: Should the About proof check a local release manifest, or a live release source?
- Agent default (accepted by the reply on 2026-10-05): Suggested default, not accepted unless you choose it: a live configured release source, with local fixtures for older/newer versions and failures. This exercises real version checking while keeping edge-case tests repeatable.
- User answer: Suggested default.
- Evidence answer: D-03 requires checks and installed-version instructions. [Release research](00364-officepress-shell-release-auth-research.md) describes adapter, compatibility and fixture cases but does not choose a feed. The prior G-03/G-18 local-only default was a proposal, not an accepted answer.
- Normalized decision: The About proof must perform a real version check against a configured live release source and supplement it with local fixtures for older/newer versions and failures. No specific service, endpoint or publisher was selected by accepting this default.
- Follow-up: [Q-005a](#q-005a--live-feed-format) selects the feed format; record its endpoint and maintainer before the live check. Q-006 was subsequently superseded by Q-005a; instruction applicability is authored in the release notes.
- Decision update: [D-11 / G-03/G-18](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); live-versus-local depth resolved, source identity/ownership and recipe details remain open.

## Q-005a — live feed format

- Status: accepted-decision.
- Source: gaps G-03/G-18; follow-up to accepted Q-005.
- Question: Should About read GitHub Releases, or a hosted JSON release manifest?
- Agent default (not selected; superseded by the answer): Suggested default, not accepted unless you choose it: a JSON release manifest hosted over HTTPS and maintained by the app owner. It can explicitly map installed and target versions to compatibility requirements and upgrade instructions, and is straightforward for adopting apps to customize.
- User answer: Github Releases. Each release should include upgrade instructions. In the app, the upgrade instructions should just reiterate whatever is in the release notes under "Upgrade Instructions".
- Evidence answer: The user selects GitHub Releases and the exact heading “Upgrade Instructions”. [Release research](00364-officepress-shell-release-auth-research.md) confirms release notes are available in the API body. A repository remote does not by itself select the proof app release repository.
- Normalized decision: Every release includes an “Upgrade Instructions” section. The app faithfully displays the content of that section from the selected release notes; it does not generate, paraphrase, supplement or execute upgrade steps. Release authors own version/installation applicability and the instruction content. The JSON manifest proposal is superseded.
- Follow-up: Configure the app release repository at proof setup. Q-006 is superseded because the app does not author installation recipes. Release selection/cache policy and extraction edge cases remain G-03/G-18 proof work.
- Decision update: [D-12 / G-03/G-18](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); source and content ownership resolved, promoted to shared app context.

## Q-006 — installation recipe (superseded before asking)

- Status: superseded.
- Source: gaps G-03/G-18; original queue.
- Question: Which installation method should the first version-specific upgrade guide cover?
- Agent default: None was asked or accepted.
- User answer: Not asked; see the exact Q-005a answer above.
- Evidence answer: D-12 assigns instruction authorship to release publishers and requires the app to display their “Upgrade Instructions” section. Selecting an app-authored installation recipe would contradict that direction.
- Follow-up: Release publishers supply applicable steps; no replacement installation-method question is needed for the display proof.
- Decision update: [D-12](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); the former generated-recipe proposal is superseded.

## Q-007 — form respondent access

- Status: accepted-decision.
- Source: gap G-15; form-builder proof P-04.
- Planned question: Should the form proof accept responses only from signed-in users, or also from people with a public share link?
- Question as asked: Should forms accept responses only from signed-in users, or also through public share links?
- Planned default (accepted in substance): support both, selected per form, with editing restricted to signed-in authorized users and public-link submission without sign-in.
- Agent default as asked (accepted): Suggested default, not accepted unless you choose it: Support both, selected per form. Keep editing restricted to authorized users; public links allow external respondents to submit without signing in.
- User answer: Suggested default.
- Evidence answer: [Form proof contract](../specs/00001-reusable-app-shell-and-component-proofs/component-proofs.md) includes Share but leaves respondent access open; [form research](00366-officepress-template-form-research.md) proposed authenticated-only initially without user acceptance. The user now accepts both modes, selectable per form; the earlier authenticated-only proposal is superseded.
- Normalized decision: Each form selects signed-in responses or public-link responses. Public-link respondents may submit without signing in; form editing remains restricted to authorized users. This does not make editing or stored responses public.
- Follow-up: [Q-007a](#q-007a--public-link-revocation) addresses stopping public access. Response visibility, rule/upload limits and other sharing details remain G-15.
- Decision update: [D-13 / G-15](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); respondent modes resolved, remaining form/share policy open.

## Q-007a — public-link revocation

- Status: accepted-decision.
- Source: gap G-15; follow-up to Q-007.
- Question: Should form owners be able to revoke a public share link while keeping the form and its existing responses?
- Agent default as asked (accepted): Suggested default, not accepted unless you choose it: Yes. Revoking the link stops new submissions through it and preserves previously collected responses.
- Recorded rationale: This lets an owner stop public access without losing data.
- User answer: Suggested default.
- Evidence answer: This reply accepts public-link revocation with data preservation. [Form research](00366-officepress-template-form-research.md) retains other sharing questions; revocation is no longer open.
- Normalized decision: Authorized form owners can revoke a public share link. It stops new submissions through that link without deleting the form or previously collected responses.
- Follow-up: Prove server-side rejection through an already-open page and persistence across restart. Link expiry/replacement and response-viewing roles remain G-15; definition history is the next original question Q-008.
- Decision update: [D-14 / G-15](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); revocation resolved, other sharing details remain open.

## Q-008 — published definition versions

- Status: accepted-decision.
- Source: gap G-11; forms, workflows and templates in P-02/P-03/P-04.
- Question: When a published form, workflow or template changes, should existing responses and runs keep the exact version they originally used?
- Planned default (accepted in substance): yes. Publishing edits creates a new version for new work; existing responses, sent messages and in-progress or completed runs remain tied to their original version. This preserves historical meaning and avoids changing a running workflow unexpectedly.
- Agent default as asked (accepted): Suggested default, not accepted unless you choose it: Yes. Publishing edits creates a new version for new work. Existing responses, sent messages and in-progress or completed runs retain their original version, preserving history and keeping running workflows stable.
- User answer: Suggested default.
- Evidence answer: [Workflow research](00365-officepress-workflow-data-research.md) proposed immutable published revisions; [form and template research](00366-officepress-template-form-research.md) explains historical fidelity. This reply accepts that publication policy; schema and runtime behavior remain to be proved.
- Normalized decision: Publishing edits creates a new immutable version for new work. Existing responses, sent messages and in-progress or completed workflow runs retain the exact versions they used; publication does not migrate them.
- Follow-up: Prove original-version preservation, new-work version selection and restart persistence across P-02/P-03/P-04. Any explicit migration of existing work requires a separate contract; no migration feature is selected here.
- Decision update: [D-15 / G-11](../specs/00001-reusable-app-shell-and-component-proofs/decisions.md); publication policy resolved, implementation evidence pending.
