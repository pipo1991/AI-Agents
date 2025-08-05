// Simple stub for the Context7 MCP loader
export function loadContext7MCP() {
  return {
    name: 'context7',
    version: 'mcp-1.0',
    getContext: () => 'stub context'
  };
}
