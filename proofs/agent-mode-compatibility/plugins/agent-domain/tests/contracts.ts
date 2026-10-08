import assert from 'node:assert/strict';
import { ActionStore, type Caller } from '../store.js';
export function domainContracts(file: string) {
  const store = new ActionStore(file);
  const editor: Caller = { id: 'a',companyId:'officepress-proof',role:'editor' };
  const viewer: Caller = { ...editor,id:'b',role:'viewer' };
  const read = () => store.execute(editor,'read_item',{},'read');
  const original = read();
  assert.throws(()=>store.execute(viewer,'rename_item',{title:'Denied',expectedVersion:1},'denied'),/permission/);
  assert.throws(()=>store.execute({...editor,companyId:'other'},'read_item',{},'wrong'),/Forbidden/);
  const first=store.execute(editor,'rename_item',{title:'Changed',expectedVersion:original.version},'commit');
  assert.equal(first.version,2);
  assert.throws(()=>store.execute(editor,'rename_item',{title:'Stale',expectedVersion:1},'stale'),/Version conflict/);
  // Simulate response loss: issue exactly the same operation after the commit.
  const retry=store.execute(editor,'rename_item',{title:'Changed',expectedVersion:1},'commit');
  assert.equal(retry.version,2);assert.equal(read().version,2);
  assert.throws(()=>store.execute(editor,'rename_item',{title:'Different',expectedVersion:2},'commit'),/Operation ID conflict/);
  // Cancellation after commit does not imply rollback. Read and explicit Undo resolve it.
  assert.equal(read().title,'Changed');
  const undone=store.execute(editor,'undo_item',{operationId:'commit'},'undo');
  assert.equal(undone.title,original.title);assert.equal(undone.version,3);
  const restart=new ActionStore(file);assert.equal(restart.execute(editor,'read_item',{},'r').version,3);
  return ['same-caller permissions','company boundary','stale version rejection','duplicate/lost-reply replay','operation reuse rejection','cancel-after-commit explicit Undo','restart retained receipts'];
}
