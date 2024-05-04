// Search Single Element in a sorted array
// Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

// Example 1:
// Input Format: arr[] = {1,1,2,2,3,3,4,5,5,6,6}
// Result: 4
// Explanation: Only the number 4 appears once in the array.

// Example 2:

// Input Format: arr[] = {1,1,3,5,5}
// Result: 3
// Explanation: Only the number 3 appears once in the array.

let arr = [1, 1, 3, 5, 5];

const findSingleNonDuplicate = () => {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      if (arr[i] !== arr[i + 1]) return arr[i];
    }
    if (i == arr.length - 1) {
      if (arr[i] !== arr[i - 1]) return arr[i];
    } else {
      if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) return arr[i];
    }
  }
};

console.log(findSingleNonDuplicate());
