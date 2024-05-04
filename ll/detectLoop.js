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
  getHead() {
    return this.head;
  }

  hasCycle(head) {
    if (!head || !head.next) {
      return false; // No loop with 0 or 1 node
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true; // Loop detected
      }
    }

    return false; // No loop detected
  }
}

const node = new LinkedList();
node.addNode(1);
node.addNode(2);
node.addNode(3);
node.addNode(4);
node.addNode(5);
node.addNode(2);

const head = node.getHead();
console.log(node.hasCycle(head));
