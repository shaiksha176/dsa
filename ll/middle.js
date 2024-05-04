class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  findMiddleUsingBruteForce() {
    if (this.head == null) return null;
    let count = 0;
    let current = this.head;
    while (current) {
      ++count;
      current = current.next;
    }
    console.log(current);
    console.log(`Last item in linked list : ${current.data}`);
    console.log(`size of linked list : ${count}`);

    // Reset current pointer to the head
    current = this.head;

    // Traverse to the middle element
    for (let i = 0; i < Math.floor(count / 2); i++) {
      current = current.next;
    }
    return current;
  }

  findMiddleElementUsingTortoiseHare() {
    if (this.head == null) return null;
    let slowPointer = this.head;
    let fastPointer = this.head;
    while (fastPointer && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowPointer.data;
  }
}

const node = new LinkedList();
node.addNode(1);
node.addNode(2);
node.addNode(3);
node.addNode(4);
node.addNode(5);
node.addNode(6);

// console.log(node.findMiddleUsingBruteForce());
console.log(node.findMiddleElementUsingTortoiseHare());
