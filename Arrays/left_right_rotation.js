const leftRotate = () => {
  let arr = [1, 2, 3, 4, 5];
  let firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;
  return arr;
};
// console.log(leftRotate());
const rightRotate = () => {
  let arr = [1, 2, 3, 4, 5];
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    // Change the loop condition
    arr[i] = arr[i - 1];
  }
  arr[0] = lastElement;
  return arr;
};
console.log(rightRotate());
