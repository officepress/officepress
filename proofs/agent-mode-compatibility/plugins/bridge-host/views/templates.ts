//client
import type { AgentTool } from '../../agent-runtime/index.js';

//--------------------------------------------------------------------//
// Functions

/**
 * Render the portable SDK frame with explicit origin and window binding.
 */
export function framePage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>OfficePress • Portable SDK frame</title>
  </head>
  <body>
    <p>Agent-native 0.198.7 portable host bridge</p>
    <p id="state">Connecting…</p>
    <script type="module">
      //client
      import {
        requestAgentNativeHostContext,
        requestAgentNativeHostActions,
        runAgentNativeHostAction,
        sendAgentNativeHostCommand
      } from '/sdk.js';
      // the child binds requests to its parent window and the shared local
      // origin
      const options = {
        hostOrigin: location.origin,
        targetOrigin: location.origin,
        targetWindow: parent,
        timeoutMs: 1500
      };
      // expose thin transport adapters; domain authorization stays on the host
      window.agentHost = {
        context: () => requestAgentNativeHostContext(options),
        actions: () => requestAgentNativeHostActions(options),
        execute: (name, input, operationId) =>
          runAgentNativeHostAction(name, { input, operationId }, options),
        command: (name) => sendAgentNativeHostCommand(name, null, options)
      };
      document.querySelector('#state').textContent =
        'Ready • explicit origin and frame binding';
      window.proofReady = true;
    </script>
  </body>
</html>
`;
};

/**
 * Render the bounded host fixture that shares its action endpoint with the
 * portable SDK bridge.
 */
export function hostPage(csrf: string, tools: AgentTool[]) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>OfficePress • Agent comparison</title>
    <style>
      /* Global: bounded comparison fixture and native controls */
      body {
        color: #172B4D;
        font: 16px system-ui;
        margin: 40px;
        max-width: 900px;
      }
      button,
      input {
        font: inherit;
        margin: 6px;
        padding: 10px;
      }
      iframe {
        border: 1px solid #CED4DE;
        border-radius: 8px;
        height: 120px;
        width: 100%;
      }
      pre {
        background: #F5F7FA;
        padding: 20px;
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <!-- START: Fixture action controls -->
    <h1>Agent compatibility proof</h1>
    <p>
      Disposable Stackpress caller fixture • UI and both agent transports share
      this action endpoint.
    </p>
    <input aria-label="Item title" id="title" value="Updated by UI" />
    <button id="read">Read item</button>
    <button id="rename">Rename item</button>
    <button id="undo">Undo last rename</button>
    <pre id="output">Ready</pre>
    <!-- END: Fixture action controls -->
    <!-- START: Portable SDK frame -->
    <iframe
      id="agent"
      src="/agent-frame"
      title="Agent-native portable SDK"
    ></iframe>
    <!-- END: Portable SDK frame -->
    <script type="module">
      //client
      import {
        createAgentNativeHostBridge,
        defaultAgentNativeHostCommands
      } from '/sdk.js';
      const csrf = ${JSON.stringify(csrf)};
      const tools = ${JSON.stringify(tools)};
      const output = document.querySelector('#output');
      let latest;
      let lastOperation;
      window.proofEvents = [];
      /**
       * Send one action through the authenticated endpoint shared with the SDK.
       */
      window.execute = async (
        name,
        input = {},
        operationId = crypto.randomUUID()
      ) => {
        const response = await fetch('/api/action', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Proof-CSRF': csrf },
          body: JSON.stringify({ name, input, operationId })
        });
        // display only the server-authorized action result; propagate rejection
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        output.textContent = JSON.stringify(result, null, 2);
        return result;
      };
      // bind the bridge to this exact child frame and origin; disable
      // unrelated host commands
      window.bridge = createAgentNativeHostBridge({
        targetWindow: document.querySelector('#agent').contentWindow,
        agentOrigin: location.origin,
        session: 'proof-tab',
        getContext: async () => ({
          route: { pathname: '/' },
          resource: { type: 'item', id: 'proof-item' },
          data: { item: await window.execute('read_item') }
        }),
        actions: tools.map((tool) => ({
          ...tool,
          source: 'backend',
          availability: 'backend',
          run: ({ input, operationId }) =>
            window.execute(tool.name, input, operationId)
        })),
        commands: Object.fromEntries(
          Object.keys(defaultAgentNativeHostCommands).map((name) => [
            name,
            () => {
              throw new Error('Command disabled for bounded proof');
            }
          ])
        ),
        onEvent: (event) =>
          window.proofEvents.push({
            type: event.type,
            reason: event.reason,
            name: event.name
          })
      }).start();
      document.querySelector('#read').onclick = async () => {
        latest = await window.execute('read_item');
      };
      // read the latest version before each rename so stale state is never
      // overwritten
      document.querySelector('#rename').onclick = async () => {
        latest = await window.execute('read_item');
        lastOperation = crypto.randomUUID();
        latest = await window.execute(
          'rename_item',
          {
            title: document.querySelector('#title').value,
            expectedVersion: latest.version
          },
          lastOperation
        );
      };
      // the server permits undo only while no intervening item edit has occurred
      document.querySelector('#undo').onclick = async () => {
        latest = await window.execute('undo_item', {
          operationId: lastOperation
        });
      };
      window.proofReady = true;
    </script>
  </body>
</html>
`;
};
