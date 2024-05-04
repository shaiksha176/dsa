class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push an element onto the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Pop and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    const poppedData = this.top.data;
    this.top = this.top.next;
    this.size--;

    return poppedData;
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.top.data;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the stack
  getSize() {
    return this.size;
  }

  // Print the stack elements
  print() {
    let current = this.top;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements);
  }
}

// Example usage:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack elements:");
stack.print(); // [3, 2, 1]
console.log("Stack size:", stack.getSize()); // 3
console.log("Top element:", stack.peek()); // 3

stack.pop();
console.log("After popping, top element:", stack.peek()); // 2
