class MinStack {
  constructor() {
    this.dataStack = [];
    this.minStack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.dataStack.push(element);
    if (
      this.minStack.length === 0 ||
      element <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(element);
    }
  }

  // Pop and return the top element from the stack
  pop() {
    if (this.dataStack.length === 0) {
      return "Stack is empty";
    }
    const popped = this.dataStack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.dataStack.length === 0) {
      return "Stack is empty";
    }
    return this.dataStack[this.dataStack.length - 1];
  }

  // Return the minimum element in the stack
  getMin() {
    if (this.minStack.length === 0) {
      return "Stack is empty";
    }
    return this.minStack[this.minStack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.dataStack.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.dataStack.length;
  }
}

// Example usage:
const minStack = new MinStack();

minStack.push(3);
minStack.push(0);
minStack.push(2);
minStack.push(1);

console.log("Stack elements:", minStack.dataStack);
console.log("Minimum element:", minStack.getMin()); // 1

minStack.pop();
console.log("After popping, minimum element:", minStack.getMin()); // 2
