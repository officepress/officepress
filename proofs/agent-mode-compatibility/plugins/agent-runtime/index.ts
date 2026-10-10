//--------------------------------------------------------------------//
// Types

export type { AgentTool, AgentCard, AgentOptions } from './openrouter.js';

//--------------------------------------------------------------------//
// Entry point

//public server runner contract; never import this runtime into the browser
export { runAgent, models } from './openrouter.js';
