// nput: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

/**
 * 1st iteration - [1,0,0,2,3,0,4,5]
 * 2nd iteration - [1,0,0,2,3,0,0,4]
 */

// No insertion should be done
arr = [1, 0, 2, 3, 0, 4, 5, 0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    arr[i + 1] = 0;
    arr[i + 2] = arr[i + 1];
  }
  break;
}

console.log(arr);
