//client
import type { AgentTool } from './openrouter.js';

//model-visible action schemas; authorization and execution remain in domain
// events
export const tools: AgentTool[] = [
  {
    name: 'read_app',
    description:
      'Read the app identity, installed version, available features and permitted settings routes. This action does not change data.',
    parameters: { type: 'object', properties: {}, additionalProperties: false }
  }
];
