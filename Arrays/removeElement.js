// var removeElement = function (nums, val) {
//   let arr2 = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) arr2.push(nums[i]);
//   }
//   return arr2;
// };

var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }

  //nums.length = j; // Chop the surplus values - not needed for LC submission
  return j;
};

console.log(removeElement([3, 2, 2, 3], 3));
