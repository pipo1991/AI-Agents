// Dummy agent built with LangGraph.js
// This example demonstrates how to wire a simple one-node graph
// that returns a static greeting. It requires the `@langchain/langgraph`
// package, which may need to be installed separately.

import { StateGraph, END } from '@langchain/langgraph';

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
  const result = await app.invoke({ text: input.text ?? '' });
  return result.text;
}
