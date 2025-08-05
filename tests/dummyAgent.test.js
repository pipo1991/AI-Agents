import assert from 'assert';
import { runDummyAgent } from '../src/dummyAgent.js';

(async () => {
  const output = await runDummyAgent();
  assert.strictEqual(output, 'Hello from dummy agent! Using context7 MCP.');
  console.log('dummy agent test passed');
})();
