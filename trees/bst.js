class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    // console.log(node, value);
    // console.log("*************");
    if (node === null) {
      return null;
    } else if (value < node.value) {
      //   console.log(node.left);
      node.left = this.deleteNode(node.left, value);
      console.log(node.left);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      console.log(node.right);
    } else {
      // Case 1: No child or only one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Case 2: Two children
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.deleteNode(node.right, minNode.value);
    }

    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  //   printTree() {
  //     this.printNode(this.root);
  //   }

  //   printNode(node) {
  //     if (node !== null) {
  //       this.printNode(node.left);
  //       console.log(node.value);
  //       this.printNode(node.right);
  //     }
  //   }

  printTree() {
    this.printNode(this.root, 0);
  }

  printNode(node, indent) {
    if (node !== null) {
      this.printNode(node.right, indent + 4);
      console.log(" ".repeat(indent) + node.value);
      this.printNode(node.left, indent + 4);
    }
  }
}

const bst = new BST();

// Insert nodes
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

// console.log("Before deletion:");
// bst.printTree();

bst.delete(6);

// console.log("After deletion:");
// bst.printTree();

let count = 0;

if (count > 1) {
  console.log(">1");
  return;
} else if (count == 0) {
  count += 4;
  return;
} else {
  console.log("else block executed");
}
