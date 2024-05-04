// Finding Sqrt of a number using Binary Search
// Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of ‘sqrt(n)’.

// Example 1:
// Input Format: n = 36
// Result: 6
// Explanation: 6 is the square root of 36.

// Example 2:
// Input Format: n = 28
// Result: 5
// Explanation: Square root of 28 is approximately 5.292. So, the floor value will be 5.

// using linear search

const findSqrt = (n) => {
  let ans = 0;
  // linear search on the answer space
  for (let i = 1; i <= n; i++) {
    let val = i * i;
    if (val <= n) {
      ans = i;
    } else {
      break;
    }
  }
  console.log(`Sqrt of ${n} is ${ans}`);
};

// findSqrt(35);

// using built-in method

const findSqrtUsingBuitlIn = (n) => {
  let ans = Math.floor(Math.sqrt(n));
  console.log(`Sqrt of ${n} is ${ans}`);
};

// findSqrtUsingBuitlIn(35);

const findSqrtUsingBS = (n) => {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let val = mid * mid;
    if (val <= n) {
      // Eliminate the left half:
      low = mid + 1;
    } else {
      // Eliminate the right half:
      high = mid - 1;
    }
  }
  return high;
};

console.log(findSqrtUsingBS(37));
