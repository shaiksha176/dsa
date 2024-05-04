const dfs = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    let node = stack.pop(); // LIFO
    console.log(node);

    for (let item of graph[node]) {
      stack.push(item);
    }
  }
};

function dfsIterative(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    visited.add(currentNode);
    console.log(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

// const dfs = (graph, source) => {
//   const stack = [{ node: source, parent: null }];
//   const visited = new Set();

//   while (stack.length > 0) {
//     let { node, parent } = stack.pop(); // LIFO

//     if (visited.has(node)) {
//       // Cycle detected
//       console.log(`Cycle detected at ${node}`);
//       return;
//     }

//     visited.add(node);
//     console.log(node);

//     for (let neighbor of graph[node]) {
//       if (neighbor !== parent) {
//         // Ignore the parent to avoid immediate cycles
//         stack.push({ node: neighbor, parent: node });
//       }
//     }
//   }
// };

// const graph = {
//   A: ["B", "C"],
//   B: ["D"],
//   C: ["E"],
//   D: ["F"],
//   E: ["A"], // Adding a cycle here: E -> A
//   F: [],
// };
// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "F"],
//   F: ["C", "E"],
// };
// dfs(graph, "A");

// const graph = {
//   A: ["B", "C"],
//   B: ["D"],
//   C: ["E"],
//   D: ["F"],
//   E: [],
//   F: [],
// };

// dfs(graph, "A"); // Output: [ 'A', 'C', 'E', 'B', 'D', 'F' ]

// Adjacency list representation
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: ["a"],
};

// Start node
const startNode = "a";

// Expected console output (DFS path):
// a c e b d
dfsIterative(graph, startNode);
