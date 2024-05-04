class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectCycle(head) {
  const nodeSet = new Set();
  let current = head;

  while (current) {
    if (nodeSet.has(current)) {
      return current; // Found the start of the loop
    }

    nodeSet.add(current);
    current = current.next;
  }

  return null; // No loop found
}

function detectCycleIndex(head) {
  const nodeSet = new Set();
  let current = head;
  let index = 0;

  while (current) {
    if (nodeSet.has(current)) {
      return { index: index, node: current }; // Found the start of the loop
    }

    nodeSet.add(current);
    current = current.next;
    index++;
  }

  return null; // No loop found
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Create a loop

// const startOfLoop = detectCycle(node1);

// if (startOfLoop) {
//   console.log("Start of the loop is at value:", startOfLoop.val);
// } else {
//   console.log("No loop found.");
// }

const result = detectCycleIndex(node1);
if (result) {
  console.log("Start of the loop is at value:", result.node.val);
  console.log("Index of the start of the loop:", result.index);
} else {
  console.log("No loop found.");
}
