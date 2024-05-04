function nextGreaterElements(nums) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let nextGreater = -1;
    for (let j = 1; j < n; j++) {
      const nextIndex = (i + j) % n; // Circular index
      console.log({ nextIndex });
      if (nums[nextIndex] > nums[i]) {
        nextGreater = nums[nextIndex];
        break;
      }
    }
    result.push(nextGreater);
  }

  return result;
}

const nums1 = [1, 2, 1];
const result1 = nextGreaterElements(nums1);
console.log(result1); // Output: [2, -1, 2]

const nums2 = [1, 2, 3, 4, 3];
// const result2 = nextGreaterElements(nums2);
// console.log(result2); // Output: [2, 3, 4, -1, 4]
