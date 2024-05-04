function countConnectedComponents(graph) {
  const visited = new Set();
  let components = 0;

  function bfs(node) {
    const queue = [node];
    // visited.add(node);

    while (queue.length > 0) {
      const current = queue.shift();
      visited.add(current);
      for (const neighbor of graph[current] || []) {
        if (!visited.has(neighbor)) {
          //   visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      bfs(node);
      components++;
    }
  }

  return components;
}

// Example usage
// const graph = {
//   0: [1, 2],
//   1: [0, 3],
//   2: [0, 4],
//   3: [1],
//   4: [2],
//   5: [6],
//   6: [5],
// };

const adjacencyList = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A"],
  D: ["E"],
  E: ["D"],
  F: ["G"],
  G: ["F"],
};

const connectedComponents = countConnectedComponents(adjacencyList);
console.log("Number of connected components:", connectedComponents);
