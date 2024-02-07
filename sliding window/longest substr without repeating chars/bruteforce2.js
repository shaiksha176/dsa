function lengthOfLongestSubstring(s) {
    if (s.length === 0) {
        return 0;
    }

    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentSubstring = '';
        for (let j = i; j < s.length; j++) {
            if (currentSubstring.includes(s[j])) {
                break;
            }
            currentSubstring += s[j];
            maxLength = Math.max(maxLength,currentSubstring.length);
        }
    }

    return maxLength;
}

// Example usage with the provided input
const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);
console.log(result); // Output: 3
