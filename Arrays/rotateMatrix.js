function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  // Transpose the matrix in-place
  for (let i = 0; i < n; i++) {
    for (let j = i; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// Example usage
const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotatedMatrix = rotateMatrix(inputMatrix);
console.log(rotatedMatrix);
