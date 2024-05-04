// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let digits = [1, 2, 3];
console.log("length : ", digits.length);
let str = "";
// digits.forEach((digit) => (str += digit));
// // console.log(+str + 1);
// let x = digits.join("");
// let result = +x + 1;
// // console.log(result);
// result = result.toString().split("");

// const arrOfNum = result.map((str) => {
//   return Number(str);
// });
// console.log(arrOfNum);

digits.forEach((digit) => {
  str += digit;
});
console.log("String ", str);
let convertToNum = BigInt(+str + 1);
console.log("number ", convertToNum);
