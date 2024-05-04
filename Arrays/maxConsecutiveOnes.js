let arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
let currentCount = 0;
let max = -Infinity;

for (const num of arr) {
  if (num === 1) {
    currentCount++;
    max = Math.max(currentCount, max);
  } else {
    currentCount = 0;
  }
}

console.log(max);
