class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteMiddle() {
    if (!this.head) {
      return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    if (prev) {
      prev.next = slow.next;
    } else {
      this.head = slow.next;
    }
  }

  deleteMiddleUsingBruteForce() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }

    if (length <= 1) {
      return;
    }

    const middleIndex = Math.floor(length / 2);
    current = this.head;

    if (middleIndex === 0) {
      this.head = current.next;
      return;
    }

    let prev = null;
    for (let i = 0; i < middleIndex; i++) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// Create a linked list
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

console.log("Original Linked List:");
list.print();

list.deleteMiddleUsingBruteForce();

console.log("Linked List after deleting the middle element:");
list.print();
