//node
import assert from 'node:assert/strict';

//modules
import type { HttpServer } from '@stackpress/ingest';
import type Engine from '@stackpress/inquire/Engine';

//client
import type { Config } from '../../app/types.js';
import type { Caller } from '../../auth/types.js';
import type { TemplateService } from '../types.js';
import { renderDraft, sampleValues, validateDraft } from '../client.js';
import { editableDraft } from '../content.js';
import { createTemplates } from '../domain.js';

/**
 * Prove template validation, safe channel rendering, immutable published
 * versions and sender-private dispatch history.
 */
export async function contracts(
  server: HttpServer<Config>,
  callers: { admin: Caller, member: Caller, readonly: Caller, other: Caller }
): Promise<string[]> {
  //use the registered template service so publication and dispatches share
  // persistence
  const service = server.plugin<TemplateService>('templates');
  assert.ok(service);
  //custom variables belong to the draft alongside channel-approved context
  // variables
  const draft = {
    name: 'Contract notice',
    channel: 'email' as const,
    subject: 'Notice {{order.number}}',
    body: 'Hello **{{contact.name}}**\n\n{{custom_note}}',
    custom: [ 'custom_note' ]
  };
  let record = await service.save(callers.admin, undefined, 0, draft);
  //write permissions and variable/channel validation apply before
  // publication
  await assert.rejects(
    () => service.save(callers.readonly, record.id, record.revision, draft),
    /Write access/
  );
  assert.throws(
    () => validateDraft({ ...draft, body: '{{unknown.value}}' }),
    /Unknown variable/
  );
  assert.throws(
    () =>
      validateDraft({
        ...draft,
        channel: 'whatsapp',
        body: '{{recipient.email}}'
      }),
    /only available/
  );
  assert.throws(() => renderDraft(draft, sampleValues, {}), /Missing value/);
  assert.throws(
    () =>
      renderDraft({ ...draft, body: '{{{contact.name}}}' }, sampleValues, {}),
    /simple/
  );
  //hostile values must be escaped as data rather than interpreted as HTML
  const safe = renderDraft(
    draft,
    { ...sampleValues, 'contact.name': '<script>alert(1)</script>' },
    { custom_note: '<img onerror=alert(1)>' }
  );
  assert.ok(!safe.html?.includes('<script>'));
  assert.ok(safe.html?.includes('&lt;script&gt;'));
  //capture a published rendering and its failed dispatch before changing
  // the draft
  const stale = record.revision;
  record = await service.publish(callers.admin, record.id, record.revision);
  const rendered = await service.renderPublished(callers.member, {
    id: record.id,
    channel: 'email',
    context: sampleValues,
    values: { custom_note: 'Original' }
  });
  const dispatch = await service.recordDispatch(callers.member, {
    rendered,
    result: { accepted: false, error: 'Controlled adapter rejection' }
  });
  //stale saves and a mismatched send channel must fail without rewriting
  // history
  await assert.rejects(
    () => service.save(callers.admin, record.id, stale, draft),
    /changed/
  );
  await assert.rejects(
    () =>
      service.renderPublished(callers.member, {
        id: record.id,
        channel: 'sms',
        context: sampleValues,
        values: { custom_note: 'x' }
      }),
    /match this channel/
  );
  //publishing a newer body leaves the earlier dispatch tied to its original
  // version
  record = await service.save(callers.admin, record.id, record.revision, {
    ...draft,
    body: 'Revised {{custom_note}}'
  });
  record = await service.publish(callers.admin, record.id, record.revision);
  assert.equal(record.publishedNumber, 2);
  const restart = createTemplates(
    server.plugin<Engine>('database'),
    server.config('officepress').appId
  );
  const retained = (await restart.dispatches(callers.admin)).find(
    (item) => item.id === dispatch.id
  )!;
  assert.equal(retained.rendered.versionId, rendered.versionId);
  assert.ok(retained.rendered.text.includes('Original'));
  assert.notEqual(record.publishedId, retained.rendered.versionId);
  //dispatch history remains private to the authorized sender scope
  await assert.rejects(
    () => restart.list({ id: 'outsider', name: 'No access', roles: [] }),
    /denied/
  );
  assert.equal(
    (await restart.dispatches(callers.other)).some(
      (item) => item.id === dispatch.id
    ),
    callers.other.id === callers.member.id
  );

  //opening an older draft adapts its editor without mutating the saved
  // object
  const adapted = editableDraft(draft);
  assert.equal(adapted.textBody, 'Hello {{contact.name}}\n\n{{custom_note}}');
  assert.ok(adapted.body.includes('<strong>{{contact.name}}</strong>'));
  assert.equal(draft.body, 'Hello **{{contact.name}}**\n\n{{custom_note}}');
  assert.equal(editableDraft({ ...draft, channel: 'sms' }).body, draft.body);

  //each email alternative has its own content and participates in
  // validation. HTML and plain text are independent alternatives with the
  // same variable rules
  const alternatives = {
    ...adapted,
    body: '<p>HTML <strong>{{contact.name}}</strong></p><p><a href="https://example.com">Details</a></p>',
    textBody: 'Plain {{company.name}}: {{custom_note}}'
  };
  assert.throws(
    () => validateDraft({ ...alternatives, textBody: '{{unknown.value}}' }),
    /Unknown variable/
  );
  assert.throws(
    () => validateDraft({ ...alternatives, textBody: '{{{contact.name}}}' }),
    /simple/
  );
  assert.throws(
    () => validateDraft({ ...alternatives, textBody: '' }),
    /plain text/
  );
  assert.throws(
    () => renderDraft(alternatives, sampleValues, {}),
    /Missing value: custom_note/
  );
  const resolved = renderDraft(alternatives, sampleValues, {
    custom_note: 'Text only'
  });
  assert.equal(resolved.text, 'Plain OfficePress: Text only');
  assert.ok(resolved.html?.includes('<strong>Lina Cruz</strong>'));
  assert.ok(!resolved.html?.includes('Text only'));

  //HTML is sanitized after substitution so both source and values stay
  // bounded. sanitize event handlers and active tags while retaining safe
  // HTTP links
  const hostile = renderDraft(
    {
      ...alternatives,
      body: '<p onclick="alert(1)">{{contact.name}}</p><script>alert(1)</script><img src="x" onerror="alert(1)"><a href="{{custom_note}}">Unsafe</a><a href="https://example.com">Safe</a>'
    },
    { ...sampleValues, 'contact.name': '<svg onload=alert(1)>' },
    { custom_note: 'javascript:alert(1)' }
  );
  assert.ok(hostile.html?.includes('&lt;svg onload=alert(1)&gt;'));
  assert.ok(
    !/<(?:script|img|svg)|onclick=|href="javascript:/.test(hostile.html!)
  );
  assert.ok(hostile.html?.includes('href="https://example.com"'));

  //independent alternatives survive save, publication and a fresh service
  // read. reconstruction must preserve both alternatives of the published
  // version
  let dual = await service.save(callers.admin, undefined, 0, alternatives);
  dual = await service.publish(callers.admin, dual.id, dual.revision);
  const publishedDual = await restart.renderPublished(callers.member, {
    id: dual.id,
    channel: 'email',
    context: sampleValues,
    values: { custom_note: 'Text only' }
  });
  assert.equal(publishedDual.text, resolved.text);
  assert.equal(publishedDual.html, resolved.html);
  const reopened = (await restart.list(callers.admin)).find(
    (item) => item.id === dual.id
  )!;
  assert.equal(reopened.draft.textBody, alternatives.textBody);
  assert.equal(reopened.draft.body, alternatives.body);
  //editing a draft must not change the content returned by published
  // rendering
  await service.save(callers.admin, dual.id, dual.revision, {
    ...alternatives,
    textBody: 'Changed draft only'
  });
  assert.equal(
    (
      await restart.renderPublished(callers.member, {
        id: dual.id,
        channel: 'email',
        context: sampleValues,
        values: { custom_note: 'Text only' }
      })
    ).text,
    resolved.text
  );
  return [
    'templates draft/save/publication',
    'templates permission denial and private dispatch history',
    'templates unknown/missing/wrong-channel rejection',
    'templates fixed-tag rich-text escaping',
    'templates atomic stale-revision rejection',
    'templates immutable publication and dispatch snapshot after service restart',
    'templates legacy email adaptation without record mutation',
    'templates independent HTML/plain text validation and rendering',
    'templates HTML source and variable sanitization',
    'templates alternative content persistence and immutable publication'
  ];
};
