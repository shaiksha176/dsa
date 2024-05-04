function maxSubarrayBruteForce(arr, k) {
    let maxSum = Number.NEGATIVE_INFINITY;
  
    for (let i = 0; i < arr.length - k + 1; i++) {
      let subarraySum = 0;
      for (let j = i; j < i + k; j++) {
        subarraySum += arr[j];
      }
      maxSum = Math.max(maxSum, subarraySum);
    }
  
    return maxSum;
  }
  
  // Example usage
  const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
  const k = 4;
  const maxSum = maxSubarrayBruteForce(arr, k);
  console.log("Maximum sum of subarray of size", k, ":", maxSum);
  