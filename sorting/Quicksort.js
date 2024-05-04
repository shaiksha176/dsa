function quicksort(arr, start, end) {
  if (start < end) {
    const pivotIndex = partition(arr, start, end);
    quicksort(arr, start, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, end);
  }
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;
  for (let j = start; j <= end; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}

let arr = [10, 80, 30, 90, 40, 550, 70];
console.log(quicksort(arr, 0, arr.length - 1)); // [10, 30, 40, 50, 70, 80, 90]

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// };
