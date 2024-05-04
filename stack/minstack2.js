class MinStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    const minValue =
      this.stack.length === 0 ? value : Math.min(value, this.getMin());
    this.stack.push({ value, minValue });
  }

  pop() {
    if (this.stack.length === 0) {
      return;
    }
    this.stack.pop();
  }

  top() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1].value;
  }

  getMin() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1].minValue;
  }
}

// Usage
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(7);
minStack.push(-1);

console.log("Minimum element: " + minStack.getMin()); // Output: 2
minStack.pop();
console.log("Top element: " + minStack.top()); // Output: 2
console.log("Minimum element: " + minStack.getMin()); // Output: 2
