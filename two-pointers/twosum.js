const findPairs = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return -1;
};

// console.log(findPairs(nums, target));

const twoPointerApproach = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] == target) return [i, j];
    else if (nums[i] + nums[j] > target) j--;
    else if (nums[i] + nums[j] < target) i++;
  }

  return [];
};

let nums =  [2, 7, 11, 15],
  target = 9;

console.log(twoPointerApproach(nums, target));
