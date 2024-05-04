/***
 * 1. Find the length (number of nodes) in a linked list
 */

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

  append(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    let count = 0;
    while (current) {
      console.log(current.data);
      current = current.next;
      ++count;
    }
    console.log("Total Nodes :  ", count);
  }

  reversePrintList(){

  }

}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(3);

list.printList();
