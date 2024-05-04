class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let new_node = new Node(data);
    if (this.root == null) {
      this.root = new_node;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (data < currentNode.data) {
        console.log(`left subtree before entering ${data}`);
        console.log(currentNode);
        if (currentNode.left == null) {
          currentNode.left = new_node;
          return;
        }

        currentNode = currentNode.left;
      } else {
        console.log(`right subtree before entering ${data}`);
        console.log(currentNode);
        if (currentNode.right == null) {
          currentNode.right = new_node;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }
  getRootNode() {
    return this.root;
  }

  // In-order traversal
  inOrder(node) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  // Pre-order traversal
  preOrder(node) {
    if (node != null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // Post-order traversal
  postOrder(node) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  search(data) {
    let currentNode = this.root;
    // console.log(currentNode);
    console.log("printed");
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode.data;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(545);
tree.insert(56);
tree.insert(78);
tree.insert(9);

// console.log(tree.search(545));
// tree.inOrder(tree.root);
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);


console.log("Root node  => ", tree.getRootNode())

// let count = 0;

// while (true) {
//   if (count < 10) {
//     console.log("current count ", count);
//     ++count;
//   } else {
//     console.log(count);
//     break;
//   }
// }



/**
 *  DELETE A NODE IN BST
 *  
 *  1. Find a node to be deleted
 *  2. Delete that node
 * 
 *  WAYS TO DELETE A NODE IN BST
 * 
 *  1. Find a node to be deleted, in the node's (the node that should be deleted) subtree, find the largest element in its left subtree, obviously, it is the leaf node
 *     on the right side of left subtree, attach the right node
 * 
 *   https://www.youtube.com/watch?v=kouxiP_H5WE
 * 
 * 
 * 
 */