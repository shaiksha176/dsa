function findMaxConsecutiveOnes(arr, k) {
    let maxLength = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let zeroCount = 0;
      let currentLength = 0;
  
      for (let j = i; j < arr.length; j++) {
        if (arr[j] === 0) {
          zeroCount++;
        }
  
        if (zeroCount > k) {
          break; // Too many zeros to flip
        }
  
        currentLength++;
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  
    return maxLength;
  }
  
  // Example usage
  const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
  const k = 2;
  const maxOnes = findMaxConsecutiveOnes(arr, k);
  console.log("Maximum consecutive ones:", maxOnes);
  