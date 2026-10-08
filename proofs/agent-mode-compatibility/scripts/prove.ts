import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseEnv } from 'node:util';
import { randomUUID,createHash } from 'node:crypto';
import { chromium } from 'playwright';
import { startProof } from './server.js';
import { runAgent,models } from '../plugins/agent-runtime/openrouter.js';
import { tools } from '../plugins/agent-domain/store.js';
import { domainContracts } from '../plugins/agent-domain/tests/contracts.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const envFile=path.resolve(root,'../../.env');
if(fs.existsSync(envFile)) { const env=parseEnv(fs.readFileSync(envFile,'utf8')); if(env.OPENROUTER_TEST_KEY)process.env.OPENROUTER_TEST_KEY=env.OPENROUTER_TEST_KEY; }
const id=new Date().toISOString().replace(/[:.]/g,'-');
const run=path.join(root,'.build',`proof-${id}`);fs.mkdirSync(run,{recursive:true});
const receipt:any={id,startedAt:new Date().toISOString(),node:process.version,scope:'P-00 portable agent-native host SDK versus Stackpress direct actions; full embedded runtime not integrated',checks:[],models:[],failures:[],sdk:JSON.parse(fs.readFileSync(path.join(root,'sdk/package-lock-info.json'),'utf8'))};
const check=(name:string,passed:boolean,detail?:unknown)=>{receipt.checks.push({name,passed,detail});if(!passed)receipt.failures.push(name);console.log(`${passed?'PASS':'FAIL'} ${name}`)};
let runtime:Awaited<ReturnType<typeof startProof>>|undefined;
let browser:Awaited<ReturnType<typeof chromium.launch>>|undefined;
try {
  for(const name of domainContracts(path.join(run,'domain.json')))check(name,true);
  runtime=await startProof({stateFile:path.join(run,'http-actions.json')});
  const live=runtime;
  const action=async(name:string,input:Record<string,unknown>={},operationId:string=randomUUID(),token=live.tokens[0])=>{
    const response=await fetch(live.origin+'/api/action',{method:'POST',headers:{'Content-Type':'application/json','Cookie':`proof_session=${token}`,'X-Proof-CSRF':live.csrf,Origin:live.origin},body:JSON.stringify({name,input,operationId})});
    const result=await response.json() as any;if(!response.ok)throw new Error(result.error);return result;
  };
  check('Stackpress 0.10.8 HTTP runtime started',(await fetch(live.origin+'/health')).ok);
  browser=await chromium.launch({channel:'chrome',headless:true});
  receipt.browser=browser.version();
  const context=await browser.newContext();
  await context.addCookies([{name:'proof_session',value:live.tokens[0],url:live.origin,httpOnly:true,sameSite:'Strict'}]);
  const page=await context.newPage();const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(live.origin);await page.waitForFunction(()=>Boolean((window as any).proofReady));
  const frame=page.frames().find(item=>item.url().endsWith('/agent-frame'))!;await frame.waitForFunction(()=>Boolean((window as any).proofReady));
  const sdkActions=await frame.evaluate(()=>(window as any).agentHost.actions());
  check('actual published SDK lists only the three allowed actions',JSON.stringify(sdkActions.map((item:any)=>item.name))===JSON.stringify(tools.map(item=>item.name)));
  const sdkContext=await frame.evaluate(()=>(window as any).agentHost.context());
  check('context is explicit route/resource/record without credentials',sdkContext.resource.id==='proof-item'&&!JSON.stringify(sdkContext).includes(live.tokens[0])&&!JSON.stringify(sdkContext).includes(process.env.OPENROUTER_TEST_KEY||'missing-credential'));
  await page.getByRole('button',{name:'Read item',exact:true}).click();
  await page.getByRole('textbox',{name:'Item title'}).fill('UI shared action');
  await page.getByRole('button',{name:'Rename item',exact:true}).click();await page.waitForFunction(()=>document.querySelector('#output')?.textContent?.includes('UI shared action'));
  check('UI reaches shared backend action',(await action('read_item')).title==='UI shared action');
  await page.getByRole('button',{name:'Undo last rename'}).click();await page.waitForFunction(()=>document.querySelector('#output')?.textContent?.includes('Planning notes'));
  check('UI Undo reaches shared backend action',(await action('read_item')).title==='Planning notes');
  const sdkExecute=async(name:string,input:Record<string,unknown>,operationId:string)=>frame.evaluate(({name,input,operationId})=>(window as any).agentHost.execute(name,input,operationId),{name,input,operationId});
  for(const [candidate,execute] of [['stackpress-native',action],['agent-native-portable-sdk',sdkExecute]] as const) {
    const before=await execute('read_item',{},randomUUID());
    try { await execute('rename_item',{title:'Stale denied',expectedVersion:0},randomUUID());check(`${candidate}: stale context rejected`,false); } catch {check(`${candidate}: stale context rejected`,true)}
    const operationId=randomUUID();
    const first=await execute('rename_item',{title:'Replay check',expectedVersion:before.version},operationId);
    const replay=await execute('rename_item',{title:'Replay check',expectedVersion:before.version},operationId);
    check(`${candidate}: lost reply/duplicate does not repeat mutation`,first.version===replay.version&&replay.replayed===true);
    const restored=await execute('undo_item',{operationId},randomUUID());check(`${candidate}: explicit Undo restores prior title`,restored.title===before.title);
    for(const model of models) {
      const start=Date.now();
      try {
        const cancellation = new AbortController();
        const exerciseCancellation = candidate === 'stackpress-native' && model === models[0];
        const modelExecute = async (name:string,input:Record<string,unknown>,operationId:string) => { const result=await execute(name,input,operationId); if(exerciseCancellation && name === 'rename_item')cancellation.abort(); return result; };
        const result=await runAgent({signal:cancellation.signal,apiKey:process.env.OPENROUTER_TEST_KEY||'',model,prompt:'Read the current item. Then rename it to "Reviewed with agent" using the current version. Do not undo the change.',context:{route:'/',resource:{type:'item',id:'proof-item'}},actions:{tools,execute:modelExecute}});
        const changed=await action('read_item');
        const mutation=result.cards.find(card=>card.name==='rename_item'&&card.state==='done');
        const passed=Boolean(mutation&&result.cards.some(card=>card.name==='read_item'&&card.state==='done')&&changed.title==='Reviewed with agent'&&result.calls.every(call=>call.model===model));
        if(exerciseCancellation)check('real agent cancellation after commit retains mutation card',result.cancelled&&Boolean(mutation)&&changed.title==='Reviewed with agent');
        receipt.models.push({candidate,model,passed,elapsedMs:Date.now()-start,...result});check(`${candidate}: real ${model} read and mutation`,passed);
        if(mutation){await execute('undo_item',{operationId:mutation.operationId},randomUUID());check(`${candidate}: Undo after ${model}`,(await action('read_item')).title===before.title)}
      } catch(error){receipt.models.push({candidate,model,passed:false,elapsedMs:Date.now()-start,error:error instanceof Error?error.message:'Model test failed'});check(`${candidate}: real ${model} read and mutation`,false)}
    }
  }
  // Real trusted frame path with the HTTP session changed to viewer: UI authority is the authority used by the SDK.
  await context.addCookies([{name:'proof_session',value:live.tokens[1],url:live.origin,httpOnly:true,sameSite:'Strict'}]);
  try{await sdkExecute('rename_item',{title:'Unauthorized',expectedVersion:(await action('read_item')).version},randomUUID());check('SDK cannot elevate viewer session',false)}catch{check('SDK cannot elevate viewer session',true)}
  try{await action('rename_item',{title:'Unauthorized',expectedVersion:1},randomUUID(),live.tokens[1]);check('native action cannot elevate viewer session',false)}catch{check('native action cannot elevate viewer session',true)}
  await context.addCookies([{name:'proof_session',value:live.tokens[0],url:live.origin,httpOnly:true,sameSite:'Strict'}]);
  const denied=await fetch(live.origin+'/api/action',{method:'POST',headers:{'Content-Type':'application/json','Cookie':`proof_session=${live.tokens[0]}`,Origin:'https://wrong.example'},body:JSON.stringify({name:'read_item'})});check('HTTP rejects wrong origin and missing CSRF',denied.status===403);
  const unauthorized=await fetch(live.origin+'/api/action',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});check('HTTP rejects missing caller session',unauthorized.status===401);
  await page.evaluate(()=>{window.dispatchEvent(new MessageEvent('message',{data:{type:'agentNative.host.runAction',name:'rename_item',args:{}},origin:'https://wrong.example',source:document.querySelector('iframe')!.contentWindow}));window.postMessage({type:'agentNative.host.runAction',name:'rename_item',args:{}},location.origin)});
  await page.waitForFunction(()=>(window as any).proofEvents.some((event:any)=>event.reason==='origin')&&(window as any).proofEvents.some((event:any)=>event.reason==='source'));
  check('SDK rejects wrong origin and wrong window source',true);
  try{await frame.evaluate(()=>(window as any).agentHost.command('hardReload'));check('SDK default host commands disabled',false)}catch{check('SDK default host commands disabled',true)}
  await page.evaluate(()=>(window as any).bridge.stop());
  try{await sdkExecute('read_item',{},randomUUID());check('SDK stop removes message listener',false)}catch{check('SDK stop removes message listener',true)}
  await page.evaluate(()=>(window as any).bridge.start());check('SDK bridge restarts',(await sdkExecute('read_item',{},randomUUID())).id==='proof-item');
  const shots=path.join(root,'output/playwright');fs.mkdirSync(shots,{recursive:true});await page.screenshot({path:path.join(shots,`p00-${id}.png`),fullPage:true});
  check('browser has no unhandled errors',errors.length===0,errors);
  await browser.close();browser=undefined;
  await runtime.close();runtime=undefined;
  check('server shutdown closes listener',await fetch(live.origin+'/health').then(()=>false,()=>true));
  const restarted=await startProof({stateFile:path.join(run,'http-actions.json')});
  const persisted=await fetch(restarted.origin+'/api/action',{method:'POST',headers:{'Content-Type':'application/json',Cookie:`proof_session=${restarted.tokens[0]}`,'X-Proof-CSRF':restarted.csrf,Origin:restarted.origin},body:JSON.stringify({name:'read_item',input:{},operationId:'restart'})}).then(response=>response.json()) as any;
  check('runtime restart preserves action state',persisted.title==='Planning notes'&&persisted.version>1);await restarted.close();
  const disabled=await startProof({stateFile:path.join(run,'disabled.json'),disabled:['agent-domain']});
  check('dependent routes absent with domain plugin disabled',(await fetch(disabled.origin+'/api/action',{method:'POST'})).status===404);check('dependent runtime absent with domain disabled',!disabled.server.plugin('agent-runtime'));await disabled.close();
} catch(error){receipt.failures.push(error instanceof Error?error.message:'Proof failed');console.error('Proof failed:',error instanceof Error?error.message:'Unknown')} finally {
  if(browser)await browser.close();if(runtime)await runtime.close();
  receipt.finishedAt=new Date().toISOString();receipt.passed=receipt.failures.length===0;
  const files=['package.json','package-lock.json','plugins/agent-runtime/openrouter.ts','plugins/agent-domain/store.ts','plugins/bridge-host/plugin.ts','plugins/bridge-host/pages.ts','scripts/prove.ts'];
  receipt.fingerprints=Object.fromEntries(files.map(file=>[file,createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')]));
  receipt.recommendation='Use the Stackpress-native shared action runner for P-01. The actual portable SDK bridge works independently when origin/source and backend authority are explicit, but adds a frame boundary without removing the need for a host-owned model runner. Full embedded framework integration remains unproved and has baseline peer/runtime differences.';
  fs.mkdirSync(path.join(root,'receipts'),{recursive:true});fs.writeFileSync(path.join(root,'receipts',`${id}.json`),JSON.stringify(receipt,null,2)+'\n');fs.writeFileSync(path.join(root,'receipts/latest.json'),JSON.stringify(receipt,null,2)+'\n');
  console.log(JSON.stringify({passed:receipt.passed,checks:receipt.checks.length,failures:receipt.failures,receipt:`receipts/${id}.json`}));if(!receipt.passed)process.exitCode=1;
}
