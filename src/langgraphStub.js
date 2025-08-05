export class StateGraph {
  constructor() {
    this.node = null;
  }
  addNode(name, fn) {
    this.node = fn;
  }
  addEdge() {
    // no-op for stub
  }
  compile() {
    const fn = this.node;
    return {
      invoke: async (state) => fn(state)
    };
  }
}
export const END = Symbol('END');
