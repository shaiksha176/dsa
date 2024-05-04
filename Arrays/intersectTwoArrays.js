// let arr1 = [4, 9, 5];
// let arr2 = [9, 4, 9, 8, 4];
// let arr1 = [1, 2, 2, 1];
// let arr2 = [2, 2];
// let arr1 = [1];
// let arr2 = [1];
// let arr1 = [1];
// let arr2 = [1, 1];
let arr1 = [1, 2];
let arr2 = [1, 1];
if (arr1.length == 1 || arr2.length == 1) return console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j + 1] && arr2[j] == arr1[i + 1]) {
      return console.log(arr1[i], arr1[++i]);
    } else if (arr1[i] == arr2[j] && arr1[++i] == arr2[++j]) {
      return console.log(arr1[i], arr1[++i]);
    } else if (arr1[0] == arr2[0]) {
      console.log("executing");
      return console.log(arr1[0]);
    }
  }
}
