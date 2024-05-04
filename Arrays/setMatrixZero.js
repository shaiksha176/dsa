let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const setMatrixZeroUsingBoolean = () => {
  const numRows = matrix[0].length;
  const numCols = matrix.length;
  // Arrays to track rows and columns containing zeros
  const zeroRows = new Array(numRows).fill(false);
  const zeroCols = new Array(numCols).fill(false);

  // Identify rows and columns with zeros
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (matrix[row][col] === 0) {
        zeroRows[row] = true;
        zeroCols[col] = true;
      }
    }
  }

  // Set elements to zero based on marked rows and columns
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (zeroRows[row] == true || zeroCols[col] == true) {
        matrix[row][col] = 0;
      }
    }
  }

  console.log(matrix);
};

// setMatrixZeroUsingBoolean();

function setMatrixZeros(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Check if the first row contains zeros
  for (let col = 0; col < numCols; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Check if the first column contains zeros
  for (let row = 0; row < numRows; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Mark rows and columns for zeros
  for (let row = 1; row < numRows; row++) {
    for (let col = 1; col < numCols; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0; // Mark the first column
        matrix[0][col] = 0; // Mark the first row
      }
    }
  }

  // Zero out marked rows and columns
  for (let row = 1; row < numRows; row++) {
    for (let col = 1; col < numCols; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // Zero out the first row and first column if necessary
  if (firstRowHasZero) {
    for (let col = 0; col < numCols; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstColHasZero) {
    for (let row = 0; row < numRows; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}

// Example usage:
const inputMatrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

const resultMatrix = setMatrixZeros(inputMatrix);
console.log(resultMatrix);
