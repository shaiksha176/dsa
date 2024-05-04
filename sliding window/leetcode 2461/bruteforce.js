var maximumSubarraySum = function(nums, k) {
    let maxSum = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    const seen = new Set(); // track encountered elements in the subarray
    let subarraySum = 0;

    for (let j = i; j < i + k; j++) {
      if (seen.has(nums[j])) {
        break; // duplicate element found, move to next subarray
      }
      seen.add(nums[j]);
      subarraySum += nums[j];
    }

    if (seen.size === k) { // check if subarray has k distinct elements
      maxSum = Math.max(maxSum, subarraySum);
    }
  }

  return maxSum;
};
let nums = [1,5,4,2,9,9,9];
let k = 3
console.log(maximumSubarraySum(nums,k))