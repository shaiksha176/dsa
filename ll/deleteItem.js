class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
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
    let list = [];

    while (current !== null) {
      list.push(current.data);
      current = current.next;
    }

    console.log(list.join(" -> "));
  }

  deleteItem(inp) {
    let current = this.head;
    if (current !== null && current.data == inp) {
      this.head = current.next;
    } else {
      while (current.next !== null) {
        if (current.next.data == inp) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
      // console.log(`${inp} was not found in ll`);
    }
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.printList();
list.deleteItem(3);
list.printList();
