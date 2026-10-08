import assert from 'node:assert/strict';
import { createMail } from '../domain.js';
export async function contracts(): Promise<string[]> {
 const disabled = createMail({ host: '', port: 587, email: '', user: '', pass: '' });
 assert.equal(disabled.ready(), false); assert.equal((await disabled.send({ subject: 'Example', text: 'Example' })).accepted, false);
 const configured = createMail({ host: 'mail.invalid', port: 587, email: 'test@example.test', user: 'test', pass: 'unused' });
 const forbidden = await configured.send({ subject: 'Example', text: 'Example', to: 'someone-else@example.test' });
 assert.equal(forbidden.accepted, false); assert.match(forbidden.error!, /recipient/);
 return ['mail missing settings degrades to unavailable', 'mail rejects non-designated recipients before network access'];
}
