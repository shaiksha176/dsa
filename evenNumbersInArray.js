// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

let nums = [12, 345, 2, 6, 7896];
let max = 0;
nums.forEach((num) => {
  let res = num.toString().length;
  if (res % 2 == 0) ++max;
});
let num = 112;
let count = 0;
while (num != 0) {
  num = Math.floor(num / 10);
  ++count;
}
console.log(count);
console.log(max);
