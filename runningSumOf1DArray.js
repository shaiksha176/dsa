const arr = [1, 2, 3, 4];

/**
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 */

let arr2 = [];
let sum = 0;

arr.forEach((num, i) => {
  arr[i] = arr[i] + sum;
  sum = arr[i];
});

console.log(arr);
