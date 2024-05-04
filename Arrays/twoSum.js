// Input: nums = [3,2,4], target = 6
// Output: [1,2]

let nums = [2, 6, 5, 8, 11];
let sum = 14;

// first method

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] == sum) console.log(i, j);
//   }
// }

// second method

// for (let i = 0; i < nums.length; i++) {
//   let neededNumber = sum - nums[i];
//   if (nums.indexOf(neededNumber) !== -1 && nums.indexOf(neededNumber) !== i)
//     return console.log(i, nums.indexOf(neededNumber));
// }

const twoSum = () => {
  for (let i = 0; i < nums.length; i++) {
    let remainingElement = sum - nums[i];
    if (nums.includes(remainingElement)) {
      return console.log([i, nums.indexOf(remainingElement)]);
    }
  }
  console.log("Not found");
};

twoSum();
