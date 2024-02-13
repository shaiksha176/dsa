let nums = [0, 2, 0, 3, 4, 0, 5];
moveZeros(nums);

function moveZeros(nums) {
  let zeroCount = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[zeroCount], nums[i]] = [nums[i], nums[zeroCount]];
      zeroCount++;
    }
  }
  console.log(nums)
}
