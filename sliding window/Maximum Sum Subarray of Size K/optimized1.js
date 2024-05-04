function maxSubarrayOptimized(arr, k) {
    let currentSum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
  
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
    maxSum = currentSum;
  
    for (let i = k; i < arr.length; i++) {
      currentSum = currentSum + arr[i] - arr[i - k]; // Efficiently update sum
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Example usage
  const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
  const k = 4;
  const maxSum = maxSubarrayOptimized(arr, k);
  console.log("Maximum sum of subarray of size", k, ":", maxSum);
  