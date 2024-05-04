let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArraySum = () => {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k < j; k++) {
        sum += arr[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  console.log(maxSum);
};
// maxSubArraySum();

const maxSubArraySumWithOutNestedLoop = () => {
  let maxSum = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) maxSum = sum;
    else if (sum < 0) sum = 0;
  }
  console.log(maxSum);
};

// maxSubArraySumWithOutNestedLoop();

const printSubArrayWithMaxSum = () => {
  if (arr.length === 0) {
    return [];
  }

  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }
  console.log(arr.slice(start, end + 1));
};

printSubArrayWithMaxSum();
