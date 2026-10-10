//--------------------------------------------------------------------//
// Types

//browser-visible run data; credentials and execution callbacks stay
// server-side
export type AgentResult = {
  signature?: string,
  text?: string,
  error?: string,
  cards?: {
    operationId: string,
    state: 'done' | 'error',
    result?: { name?: string, error?: string },
    error?: string
  }[]
};

//registered agent capability and in-flight cancellation controllers
export type AgentRuntime = {
  available: true,
  running: Map<string, AbortController>
};
