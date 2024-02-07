function findLongestSubstringKDistinct(str, k) {
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
      const seen = new Set();
      let distinctCount = 0;
      for (let j = i; j < str.length; j++) {
        if (!seen.has(str[j])) {
          distinctCount++; // New distinct character encountered
          seen.add(str[j]);
        }
        if (distinctCount > k) {
          break; // Exceeded allowed distinct characters
        }
        maxLength = Math.max(maxLength, j - i + 1);
          console.log(seen.values())
  
      }
    }
    return maxLength;
  }
  
  // Example usage
  const str = "abbbbbbc";
  const k = 2;
  const maxLength = findLongestSubstringKDistinct(str, k);
  console.log("Longest substring with at most", k, "distinct characters:", maxLength);
  