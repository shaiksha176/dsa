// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
arr.forEach((num, i) => {
  if (num == val) {
    arr[i] = arr[i + 1] !== val ? arr[i + 1] : arr[i + 2];
  }
});
console.log(arr);
