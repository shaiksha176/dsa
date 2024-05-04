// LEET CODE - Next greater element 1

function nextGreaterElement(nums1, nums2) {
  const ans = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    ans[i] = -1;

    for (let j = nums2.indexOf(num) + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        ans[i] = nums2[j];
        break;
      }
    }
    // ans[i] = nextGreater;
  }

  return ans;
}

// Example usage
const nums1 = [2, 4];
const nums2 = [1, 2, 3, 4];
// const result = nextGreaterElement(nums1, nums2);
// console.log(result); // Output: [-1, 3, -1]

// Leet code - next greater element 2

// brute force

const findNGTUsingBruteForce = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output[i] = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        output[i] = arr[j];
        break;
      }
    }
  }
  console.log(output);
};

// findNGTUsingBruteForce([3, 2, 8, 7, 9, 17, 12]);

const findNGTUsingStack = (arr) => {
  const n = arr.length;
  const result = new Array(n).fill(-1); // Initialize the result array with -1
  const stack = []; // Create an empty stack to store indices

  // for (let i = 0; i < n; i++) {
  //   while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
  //     // If the current element is greater than the element at the index
  //     // at the top of the stack, update the result and pop the index from the stack
  //     result[stack.pop()] = arr[i];
  //   }
  //   stack.push(i); // Push the current index onto the stack
  // }

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      
      // Pop elements from the stack as long as they are less than or equal to
      // the current element, because they cannot be the next greater element.
      stack.pop();
    }
    if (stack.length > 0) {
      // If the stack is not empty, the next greater element is at the index
      // at the top of the stack.
      result[i] = arr[stack[stack.length - 1]];
    }
    stack.push(i); // Push the current index onto the stack
  }

  console.log(result);
};

findNGTUsingStack([3, 2, 8, 7, 9, 17, 12]);
