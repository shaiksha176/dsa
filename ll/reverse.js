// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   reverse() {
//     let prev = null;
//     let current = this.head;
//     let next = null;

//     while (current !== null) {
//       // Store the next node before we overwrite the current node's next pointer
//       next = current.next;

//       // Reverse the current node's next pointer
//       current.next = prev;

//       // Advance prev and current to the next nodes in the list
//       prev = current;
//       current = next;
//       console.log("Prev ", prev);
//       console.log("Current ", current);
//     }

//     // Set the head of the list to the last node we processed (which is now the first node)
//     this.head = prev;
//     console.log("Previous outside of while loop ");
//     console.log(prev);
//   }

//   printList() {
//     let current = this.head;
//     let list = [];

//     while (current !== null) {
//       list.push(current.data);
//       current = current.next;
//     }

//     console.log(list.join(" -> "));
//   }

//   append(data) {
//     const newNode = new Node(data);

//     if (this.head === null) {
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;

//     while (current.next !== null) {
//       current = current.next;
//     }

//     current.next = newNode;
//   }
// }

// const list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);

// console.log("Original list:");
// list.printList(); // 1 -> 2 -> 3 -> 4

// list.reverse();

// console.log("Reversed list:");
// list.printList(); // 4 -> 3 -> 2 -> 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
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

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current.next !== null) {
      next = current.next; // temporarily store the next nodez
      current.next = prev; // reverse the pointer
      prev = current;
      current = next;
    }

    current.next = prev; // update the last node's pointer

    this.head = current; // set the reversed list as the new head
  }

  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log("Original list:");
list.print();

console.log("Reversed list:");
list.reverse();
list.print();
