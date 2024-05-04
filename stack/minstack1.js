class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity; // Initialize min to positive infinity
  }

  push(val) {
    if (val <= this.min) {
      // If the new value is smaller or equal to the current minimum,
      // push the current minimum onto the stack first and update the minimum.
      this.stack.push(this.min);
      this.min = val;
    }
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length === 0) {
      return null;
    }

    const popped = this.stack.pop();

    if (popped === this.min) {
      // If the popped element is the current minimum, update the minimum.
      this.min = this.stack.pop();
    }

    return popped;
  }

  top() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }
  print() {
    console.log(this.stack);
  }
  getMin() {
    return this.min;
  }
}

// Example usage
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
// console.log(minStack.getMin()); // Output: 2
// console.log(minStack.pop()); // Output: 2
// console.log(minStack.top()); // Output: 5
// console.log(minStack.getMin()); // Output: 3
minStack.print();
