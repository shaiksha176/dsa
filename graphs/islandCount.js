function numIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        console.log(`[${i},${j}]`);
        count++;
      }
    }
  }

  return count;
}

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid1)); // Output: 3
