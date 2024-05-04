let nums = [4, 1, 2, 1, 2];

let single = nums[0];
nums.sort();

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== nums[i + 1]) return console.log(nums[i]);
}
