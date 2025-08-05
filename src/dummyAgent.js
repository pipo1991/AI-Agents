// Dummy agent built with a lightweight LangGraph stub and Context7 MCP
// integration. This demonstrates wiring a simple one-node graph that
// returns a static greeting while also loading the Context7 MCP client.

import { StateGraph, END } from './langgraphStub.js';
import { loadContext7MCP } from './context7Mcp.js';

// Define a minimal graph with a single node.
const workflow = new StateGraph({
  channels: {
    text: {
      // Simple passthrough channel that accepts and outputs strings
      value: (x) => x
    }
  }
});

// Add a single node that always returns a greeting.
workflow.addNode('start', async (state) => ({ text: 'Hello from dummy agent!' }));

// Mark the end of the graph.
workflow.addEdge('start', END);

// Compile the graph into an executable app.
export const app = workflow.compile();

// Convenience helper to run the agent.
export async function runDummyAgent(input = {}) {
  const ctx = loadContext7MCP();
  const result = await app.invoke({ text: input.text ?? '' });
  return `${result.text} Using ${ctx.name} MCP.`;
}
