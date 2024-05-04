let arr = [3, 4, 6, 7, 9, 12, 16, 17];

const searchUsingIteration = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (target === arr[mid]) return mid;
    else if (target > arr[mid])
      low = mid + 1; // right side of the array is sorted
    else high = mid - 1; // left side of the array is sorted
  }
  return -1;
};

// console.log(searchUsingIteration(arr, 60));

const searchUsingRecursion = (arr, target, low, high) => {
  if (low > high) return;

  let mid = parseInt((low + high) / 2);
  if (arr[mid] == target) return mid;
  else if (target > arr[mid])
    return searchUsingRecursion(arr, target, mid + 1, high);
  return searchUsingRecursion(arr, target, low, high - 1);
};

let low = 0,
  high = arr.length - 1;

console.log(searchUsingRecursion(arr, 56, low, high));
