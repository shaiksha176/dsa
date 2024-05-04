const arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
const k = 2;
let maxOnes = 0;
for (let i = 0; i < arr.length; i++) {
  let flipZeroes = 0;
  let consecutiveOnes = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[j] == 0) {
      ++flipZeroes;
    }
    if (flipZeroes > k) {
      break;
    }
    ++consecutiveOnes;
    maxOnes = Math.max(maxOnes, consecutiveOnes);
  }
}

console.log(maxOnes);
