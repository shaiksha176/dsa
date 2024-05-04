// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
//   appendNode(newNode) {
//     let node = this.head;
//     if (node == null) {
//       //Means it's just empty list
//       this.head = newNode;
//       return;
//     }
//     while (node.next) {
//       node = node.next;
//     }
//     node.next = newNode;
//   }
//   printList() {
//     let node = this.head;
//     process.stdout.write("HEAD->");
//     while (node) {
//       process.stdout.write(node.data + "->");
//       node = node.next;
//     }
//     console.log("NULL");
//   }
// }
// let myList = new LinkedList();
// let node = new Node(5);

// myList.appendNode(node);
// myList.appendNode(new Node(11));
// myList.appendNode(new Node(7));
// myList.printList();

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
  addAtEnd(data) {
    let node = new Node(data);
    /**
     * If data is 25, then node is { data: 25, next: null }.
     * Here head is still "null object" and this "null object" does not have a "next" property attached to it
     */

    if (this.head == null) {
      // console.log(this.head);
      this.head = node;
      // // here head is an object now. The value is changed from null to the object that contains some data
      // console.log("current head ", this.head);
      return;
    }
    let current = this.head;
    // console.log("current head after adding ", current);
    while (current.next) {
      // console.log(JSON.stringify(current, null, 2));
      current = current.next;
      // console.log(current);
    }
    // console.log("Outside of while loop started for adding data = " + data);
    // console.log("Last added node ", current);
    // console.log("Outside of while loop ended");
    // console.log("***********");
    current.next = node;
    this.size++;
  }

  addAtBegin(data) {
    let node = new Node(data);
    let current = this.head;
    this.head = node;
    node.next = current;
  }

  printList() {
    let current = this.head;
    console.log("**** printing values in linked list ****");
    while (current.next != null) {
      console.log(current.data);
      current = current.next;
      // console.log(JSON.stringify(current, null, 2));
      // if (current.data == 4) break;
    }
  }

  printListTillTheLastElement() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  removeElementAtBegin() {
    let firstNode = this.head;
    let secondNode = firstNode.next;
    this.head = secondNode;
  }
  removeElementAtEnd() {
    let lastNode = this.head;
    let iterationCount = 1;
    while (lastNode.next.next) {
      console.log(`Nodes at ${iterationCount} iteration`);
      console.log(JSON.stringify(lastNode, null, 2));
      lastNode = lastNode.next;
      ++iterationCount;
    }
    console.log("Last node outside of while loop");
    console.log(lastNode);
    lastNode.next = null;
  }

  removeElement(element) {
    let current = this.head;
    let previous = null;
    // check if element to be deleted is the head node.
    // else traverse till the element is found that needs to be deleted. Else return null
    if (current.data == element) {
      this.head = current.next;
    }
    while (current.data !== element) {
      previous = current;
      current = current.next;
    }
    if (current == null) return;
    console.log("Current element ", current);
    previous.next = current.next;
  }

  removeElementSecondMethod(node) {
    if (node == null || node.next == null) return null;
    node.data = node.next.data;
    node.next = node.next.next;
  }

  removeNthElementFromEnd(n) {
    let size = 0;
    let current = this.head;
    // if (n == 1) {
    //   this.head = null;
    //   return;
    // }
    while (current) {
      current = current.next;
      ++size;
    }
    size = size - n;
    if (size == 0) {
      let currentHead = this.head;
      let secondNode = currentHead.next;
      this.head = secondNode;
      return;
    }
    current = this.head;
    let prev = null;
    while (size > 0) {
      size--;
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }

  lengthOfLL() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  searchElement(data) {
    let currentNode = this.head;
    while (currentNode != null && currentNode.data !== data) {
      currentNode = currentNode.next;
    }
    return currentNode ? true : false;
  }
}

let myList = new LinkedList();
myList.addAtEnd(1);
myList.addAtEnd(2);
myList.addAtEnd(3);
myList.addAtEnd(4);
// console.log(`size of ll : ${myList.lengthOfLL()}`);
// console.log(myList.searchElement(26));
// myList.addAtEnd(5);
// myList.printList();
// console.log("**************");
// myList.removeElementAtBegin();
// myList.printList();
// console.log("**************");
// myList.removeElementAtEnd();

// myList.printList();

// myList.removeElementSecondMethod(2);
// console.log("***********");
// myList.removeNthElementFromEnd(3);
// myList.printList();
myList.printListTillTheLastElement()