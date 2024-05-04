let arr = [1, 2, 3, 4, 5];

// Insert at the end

// arr[arr.length] = 6;

// output = [1,2,3,4,5,6]

// Insertion at the beginning

// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[i + 1] = arr[i];
// }
// arr[0] = 9;

// console.log(arr);

// Insertion at any Index

// Insert 66 at index 1. output : [1,66,2,3,4,5]
for (let i = arr.length - 1; i >= 1; i--) {
  arr[i + 1] = arr[i];
}
arr[1] = 66;

console.log(arr);
