let arr = [3, 1, 2, 5, 7];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     console.log(i, j);
//   }
// }
console.log("************************");
/**
 * If the elements of the array to be compared, use two loops
 *
 */
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     console.log(i, j);
//   }
// }

/***
 *  Selection Sort
 *
 *  Find the index of the smallest element in the array & replace it with current index element
 *  swap a[i] with a[min]
 *
 *
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // let minIndex = i;
    // console.log(arr[minIndex]);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // swap(arr, i, j);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

selectionSort(arr);
console.log(arr);

let arr2 = [1, 5, 7, 8, 9];
for (let i = 0; i < arr2.length - 1; i++) {
  for (let j = i + 1; j < arr2.length; j++) console.log(`(${i},${j})`);
}
// console.log("Array before replace ", arr2);
// arr2[0] = 10;
// console.log("Array after replacing first element with 10 ", arr2);

/**
 * sorting involves comparing all elements. First element needs to be compared to rest of the elements to determine
 * if it is the smallest or largest element in the element in the array. The comparing must be done for every
 * element in the array. Thus, looping is used. Every element needs to be compared with the rest of the array elements.
 * To access every array element, we need to loop again. So inner loop comes into play. We are comparing the outer loop element
 * to sort it. If any other element other than ith element is found either greater or smaller than the ith element, the array elements
 * will be exchanged. We replace array elements by swapping.
 */

/***
 *      S E L E C T I O N    S O R T
 *
 *      Compare ith element with the rest of the array elements.
 *      If found, either smaller or larger, swap those array elements.
 *
 */
