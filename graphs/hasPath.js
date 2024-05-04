function hasPath(graph, start, end) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === end) {
      return true;
    }

    visited.add(current);

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
}

// Example usage:
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
};

const hasPathFromAtoD = hasPath(graph, "a", "d"); // true
const hasPathFromBtoA = hasPath(graph, "b", "a"); // true
const hasPathFromAtoF = hasPath(graph, "a", "f"); // false
