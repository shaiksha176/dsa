// const maxSubArray = (nums) => {
//   if (nums.length === 1) return nums[0];
//   let maxSum = -Infinity;
//   let currentSum = 0;
//   for (let num of nums) {
//     currentSum += num;
//     maxSum = Math.max(maxSum, currentSum);
//     if (currentSum < 0) currentSum = 0;
//   }
//   return maxSum;
// };
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSubArray(nums));

const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 3;
const outerLoopLength = arr.length - k + 1;
console.log("Original Array Length : ", arr.length);
console.log("Outer loop length : ", outerLoopLength);
let maxSum = -Infinity;
for (let i = 0; i < arr.length - k + 1; i++) {
  let currentSum = 0;
  for (let j = i; j < i + k; j++) {
    // console.log("inner loop called");
    // console.log(`[${i},${j}] => [${(arr[i], arr[j])}]`);
    currentSum += arr[j];
  }
  console.log({ currentSum, i });
  maxSum = Math.max(maxSum, currentSum);
}

// console.log(maxSum);

function maxSubarrayOptimized(arr, k) {
  let currentSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - k]; // Efficiently update sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
