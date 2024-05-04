// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// let arr = [1, 2, 3];
// let sum = 0;

// arr.forEach((num) => {
//   sum = sum + num;
// });

// console.log(sum);

let arr = [
  [1, 2],
  [3, 4],
];

let sum = 0;

arr.forEach((nums) => {
  let currentSum = 0;
  nums.forEach((num, i) => {
    currentSum = currentSum + num;
    if (currentSum > sum) sum = currentSum;
  });
});
console.log(sum);
