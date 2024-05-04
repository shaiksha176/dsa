function nextGreaterElement1(nums1, nums2) {
  const ans = [];

  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    let nextGreater = -1;

    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        nextGreater = nums2[j];
        break;
      }
    }

    ans.push(nextGreater);
  }

  return ans;
}

const nextGreaterElement2 = (nums1, nums2) => {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    let nextGreater = -1;
    let found = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        found = true;
      }
      if (found && nums2[j] > nums1[i]) {
        nextGreater = nums2[j];
        break;
      }
    }
    ans.push(nextGreater);
  }
  return ans;
};

function nextGreaterElement3(nums1, nums2) {
  const stack = []; // Initialize an empty stack to keep track of elements.
  const nextGreaterMap = new Map(); // Initialize a hashmap to store the next greater element for each element.
  const result = []; // Initialize an array to store the final result.

  for (const num of nums2) {
    // Loop through the elements in nums2.
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      // While the stack is not empty and the current element is greater than the element at the top of the stack,
      const smallerElement = stack.pop(); // Pop the smaller element from the stack.
      nextGreaterMap.set(smallerElement, num); // Map the next greater element for the smaller element.
    }
    // console.log(stack);
    stack.push(num); // Push the current element onto the stack.
  }

  for (const num of nums1) {
    // Loop through the elements in nums1.
    // Retrieve the next greater element from the hashmap (nextGreaterMap).
    // If it's not found, default to -1.
    result.push(nextGreaterMap.get(num) || -1);
  }

  console.log(nextGreaterMap);
  return result; // Return the final result.
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const result = nextGreaterElement3(nums1, nums2);
console.log(result); // Output: [-1, 3, -1]
