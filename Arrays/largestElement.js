/**
 *  This problem can be solved in two ways
 *  1. Sorting the array. When array is sorted, you get the largest element available at the last index.
 *  2. By traversing through the array with assigning the first element as max
 *
 */

const findLargestElement = (arr) => {
  // using sorting

  //   const sortedArray = arr.sort((a, b) => a - b);
  //   return sortedArray[sortedArray.length - 1];

  // by traversing through the array
  // let max = Number(arr[0]);
  // for (i = 1; i < arr.length; ++i) {
  //   if (arr[i] > max) max = arr[i];
  // }
  // return max;

  // using infinity

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
};

console.log(findLargestElement([1, 8, 2, 8, 3, 9, 8, 4, 100, 8, 9, 36]));
