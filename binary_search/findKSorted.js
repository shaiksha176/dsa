let arr = [4, 5, 6, 7, 0, 1, 2, 3];

// Problem : Find out how many times the array has been rotated

// using linear search

const findKRotation = () => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  console.log(`Array is rotated ${arr.indexOf(max) + 1} times`);
};

// findKRotation();

// using binary search

const findKRotationUsingBinarySearch = () => {
  let low = 0;
  let high = arr.length - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  console.log(arr.indexOf(ans));
};

findKRotationUsingBinarySearch();
