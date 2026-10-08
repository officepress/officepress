import type { AgentTool } from '../agent-runtime/openrouter.js';
export function hostPage(csrf: string, tools: AgentTool[]) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>OfficePress • Agent comparison</title><style>body{font:16px system-ui;margin:40px;max-width:900px;color:#172b4d}button,input{font:inherit;padding:10px;margin:6px}iframe{width:100%;height:120px;border:1px solid #ced4de;border-radius:8px}pre{white-space:pre-wrap;background:#f5f7fa;padding:20px}</style></head><body><h1>Agent compatibility proof</h1><p>Disposable Stackpress caller fixture • UI and both agent transports share this action endpoint.</p><input id="title" aria-label="Item title" value="Updated by UI"><button id="read">Read item</button><button id="rename">Rename item</button><button id="undo">Undo last rename</button><pre id="output">Ready</pre><iframe id="agent" title="Agent-native portable SDK" src="/agent-frame"></iframe><script type="module">
import { createAgentNativeHostBridge, defaultAgentNativeHostCommands } from '/sdk.js';
const csrf=${JSON.stringify(csrf)};
const tools=${JSON.stringify(tools)};
const output=document.querySelector('#output');
let latest, lastOperation;
window.proofEvents=[];
window.execute=async(name,input={},operationId=crypto.randomUUID())=>{
 const response=await fetch('/api/action',{method:'POST',headers:{'Content-Type':'application/json','X-Proof-CSRF':csrf},body:JSON.stringify({name,input,operationId})});
 const result=await response.json(); if(!response.ok)throw new Error(result.error); output.textContent=JSON.stringify(result,null,2);return result;
};
window.bridge=createAgentNativeHostBridge({targetWindow:document.querySelector('#agent').contentWindow,agentOrigin:location.origin,session:'proof-tab',getContext:async()=>({route:{pathname:'/'},resource:{type:'item',id:'proof-item'},data:{item:await window.execute('read_item')}}),actions:tools.map(tool=>({...tool,source:'backend',availability:'backend',run:({input,operationId})=>window.execute(tool.name,input,operationId)})),commands:Object.fromEntries(Object.keys(defaultAgentNativeHostCommands).map(name=>[name,()=>{throw new Error('Command disabled for bounded proof')} ])),onEvent:event=>window.proofEvents.push({type:event.type,reason:event.reason,name:event.name})}).start();
document.querySelector('#read').onclick=async()=>{latest=await window.execute('read_item')};
document.querySelector('#rename').onclick=async()=>{latest=await window.execute('read_item');lastOperation=crypto.randomUUID();latest=await window.execute('rename_item',{title:document.querySelector('#title').value,expectedVersion:latest.version},lastOperation)};
document.querySelector('#undo').onclick=async()=>{latest=await window.execute('undo_item',{operationId:lastOperation})};
window.proofReady=true;
</script></body></html>`;
}
export function framePage() {
  return `<!doctype html><html><body><p>Agent-native 0.198.7 portable host bridge</p><p id="state">Connecting…</p><script type="module">
import { requestAgentNativeHostContext, requestAgentNativeHostActions, runAgentNativeHostAction, sendAgentNativeHostCommand } from '/sdk.js';
const options={hostOrigin:location.origin,targetOrigin:location.origin,targetWindow:parent,timeoutMs:1500};
window.agentHost={context:()=>requestAgentNativeHostContext(options),actions:()=>requestAgentNativeHostActions(options),execute:(name,input,operationId)=>runAgentNativeHostAction(name,{input,operationId},options),command:(name)=>sendAgentNativeHostCommand(name,null,options)};
document.querySelector('#state').textContent='Ready • explicit origin and frame binding';window.proofReady=true;
</script></body></html>`;
}
