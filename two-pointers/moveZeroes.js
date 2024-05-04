// https://www.enjoyalgorithms.com/blog/move-all-the-zeroes-to-the-end/

let arr = [4, 8, 0, 0, 2, 0, 1, 0];

const useExtraSpace = () => {
  const new_arr = new Array(arr.length).fill(0);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      new_arr[j++] = arr[i];
    }
  }
  console.log(new_arr);
};

// useExtraSpace();

const useSwapping = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 0 && arr[j] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
};
// useSwapping();

function moveZeroesOptimized(nums) {
  let nonZeroIndex = 0;

  // Move non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  console.log(nums);

  // Fill the remaining elements with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeroesOptimized(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
