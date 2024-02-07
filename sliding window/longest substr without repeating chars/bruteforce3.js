function findLongestSubstringBruteForce(str) {
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
      const seen = new Set();
      for (let j = i; j < str.length; j++) {
        if (seen.has(str[j])) {
          break;
        }
        seen.add(str[j]);
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
    return maxLength;
  }
  const inputString = "abcabcbb";
  const result = findLongestSubstringBruteForce(inputString);
  console.log(result); // Output: 3  