const bfs = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    let node = queue.shift(); // Dequeue the first node (FIFO)
    console.log(node);

    // Check if the node has neighbors and enqueue them if not already in the queue
    for (let neighbor of graph[node]) {
      if (!queue.includes(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
};

function bfs2(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift(); // FIFO
    visited.add(currentNode);
    console.log(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: [],
};

console.log("BFS Traversal:");
bfs(graph, "A");
