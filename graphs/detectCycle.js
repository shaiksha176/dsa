const dfsHasCycle = (graph, source) => {
  const visited = new Set();
  const stack = [{ node: source, parent: null }];

  while (stack.length > 0) {
    const { node, parent } = stack.pop();

    if (visited.has(node)) {
      if (node !== parent) {
        // Check for cycle
        return true;
      }
      continue;
    }

    visited.add(node);

    for (let neighbor of graph[node]) {
      stack.push({ node: neighbor, parent: node });
    }
  }

  return false;
};

function hasCycleBFS(graph, source) {
  const queue = [source];
  const visited = new Set();

  for (const startNode of Object.keys(graph)) {
    // Start exploration from each node
    if (!visited.has(startNode)) {
      // queue.push(startNode);

      while (queue.length > 0) {
        const currentNode = queue.shift();
        visited.add(currentNode);

        for (const neighbor of graph[currentNode]) {
          if (visited.has(neighbor)) {
            return true; // Cycle detected: encountered a visited neighbor!
          } else {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return false; // No cycle found
}

function hasCycleBFS2(graph, startNode) {
  const queue = [];
  const visited = new Set();

  queue.push({ node: startNode, parent: null }); // Store node and parent together

  while (queue.length > 0) {
    const { node: currentNode, parent } = queue.shift();
    visited.add(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push({ node: neighbor, parent: currentNode });
      } else if (parent !== neighbor) {
        // Backedge check
        return true;
      }
    }
  }

  return false;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(hasCycleBFS(graph, "A")); // Outputs: true (because there's a cycle)
