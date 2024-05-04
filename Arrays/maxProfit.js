// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

let arr = [7, 1, 5, 3, 6, 4];
let num1 = 0,
  num2;
let max_profit = 0,
  second = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.log(`[${i},${j}]`);
    if (arr[j] - arr[i] > second) {
      second = max_profit;
      max_profit = arr[j] - arr[i];
    }
  }
}
console.log("Max profit ", max_profit);
console.log("second max ", second);
console.log("Num 1", num1);
