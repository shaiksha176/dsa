// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

let nums = [-4, -1, 0, 3, 10];
// nums.forEach((num, i) => {
//   nums[i] = Math.pow(num, 2);
// });

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] > nums[j]) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }
//   }
// }
// console.log(nums);
nums[nums.length] = 55;
console.log(nums);
