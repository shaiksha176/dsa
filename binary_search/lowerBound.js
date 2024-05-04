const findLowerBoundUsingLinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) return i;
  }
  return arr.length;
};
// console.log(findLowerBoundUsingLinearSearch(arr, 9));

const findLowerBoundUsingBinarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] > target) {
      ans = mid;
      // look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
};
let arr = [3, 5, 8, 9, 15, 19];

console.log(findLowerBoundUsingBinarySearch(arr, 9)); // Output: 2 (index of 8)
