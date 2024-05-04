function findLargestComponent(adjList) {
  let visited = new Set(); // Set to keep track of visited nodes
  let maxSize = 0; // Size of the largest connected component

  for (let node in adjList) {
    if (!visited.has(node)) {
      let componentSize = bfs(node, adjList, visited);
      maxSize = Math.max(maxSize, componentSize);
    }
  }

  return maxSize;
}

function bfs(start, adjList, visited) {
  let queue = [start];
  // visited.add(start);
  let componentSize = 0;

  while (queue.length > 0) {
    let currentNode = queue.shift();
    visited.add(currentNode);
    componentSize++;

    for (let neighbor of adjList[currentNode]) {
      if (!visited.has(neighbor)) {
        // visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return componentSize;
}

// Example usage:
const adjacencyList = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A"],
  D: ["E"],
  E: ["D"],
  F: ["G", "H"],
  G: ["F"],
  H: ["F", "I"],
  I: ["H"],
};

console.log(findLargestComponent(adjacencyList)); // Output: 4
