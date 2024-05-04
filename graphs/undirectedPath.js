function hasPath(edges, src, dest) {
  // Create an adjacency list representation (undirected graph)
  const graph = {};
  //   for (const [u, v] of edges) {
  //     graph[u] = graph[u] || [];
  //     graph[u].push(v);
  //     graph[v] = graph[v] || []; // Add the edge in both directions for undirected graph
  //     graph[v].push(u);
  //   }

  for (const edge of edges) {
    const [u, v] = edge;
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  // Implement BFS using a queue
  const queue = [src];
  const visited = new Set([src]);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) {
      return true; // Path found!
    }

    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return false; // Path not found
}
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [2, 3],
];
const src = 0;
const dest = 3;

const hasPathToDest = hasPath(edges, src, dest);
console.log(hasPathToDest); // Output: true
