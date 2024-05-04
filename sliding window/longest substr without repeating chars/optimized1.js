function lengthOfLongestSubstring(s) {
    // Handle empty string and single-character cases
    if (s.length <= 1) return s.length;
  
    let left = 0, right = 0, maxLength = 0;
    const charSet = new Set(); // Use a Set for optimized character occurrence tracking
  
    // Slide the window while expanding and contracting based on character uniqueness
    while (right < s.length) {
      const char = s[right];
  
      // If character is unique, expand the window by moving the right pointer
      if (!charSet.has(char)) {
        charSet.add(char);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
      } else {
        // If character is not unique, contract the window by moving the left pointer
        charSet.delete(s[left]);
        left++;
      }
    }
  
    return maxLength;
  }
  
  // Example usage
  const str = "abcabcbb";
  const result = lengthOfLongestSubstring(str);
  console.log(result); // Output: 3 (abc)
  