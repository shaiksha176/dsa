function countConnectedComponents(adjList) {
  let visited = new Set(); // Set to keep track of visited nodes
  let count = 0; // Count of connected components

  for (let node in adjList) {
    if (!visited.has(node)) {
      const returnValue = bfs(node, adjList, visited);
      console.log("Return value => ", returnValue);
      count++;
    }
  }

  return count;
}

function bfs(start, adjList, visited) {
  let queue = [start];
  // visited.add(start);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    visited.add(currentNode)
    for (let neighbor of adjList[currentNode]) {
      if (!visited.has(neighbor)) {
        // visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return "super";
}

// Example usage:
const adjacencyList = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A"],
  D: ["E"],
  E: ["D"],
  F: ["G"],
  G: ["F"],
};

console.log(countConnectedComponents(adjacencyList)); // Output: 3
