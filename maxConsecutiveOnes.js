// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of  consecutive    1s is 3

let arr = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1];
let count = 0,
  result = 0;

arr.forEach((num, i) => {
  if (num == 0) count = 0;
  else {
    ++count;
    result = Math.max(count, result);
  }
});
console.log(result);
