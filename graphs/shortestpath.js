const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const queue = [[nodeA, 0]];
  const visited = new Set([nodeA]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
        visited.add(neighbor); // Mark the neighbor as visited
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [u, v] = edge;
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // Output should be 2
