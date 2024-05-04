// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

let s = "abcabcbb";
let substrings = [];

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    let subarr = s.substring(i, j + 1);
    substrings.push(subarr);
  }
}

const set = new Set();
for (let substr of substrings) {
  set.add(substr);
}

console.log(set);
// console.log(substrings);
