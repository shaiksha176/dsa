let nums = [0, 2, 0, 3, 4, 0, 5];
moveZeros(nums);

function moveZeros(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
    }
    nums[nums.length - 1] = 0;
  }
  console.log(nums)
}
