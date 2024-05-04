const getArrayWithNextGreaterElement = (arr) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp[i] = arr[j];
        break;
      }
    }
  }
  return temp;
};
getArrayWithNextGreaterElement([3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]);

// const circularArray = () => {
//   let arr = [1, 2, 3, 4, 5];
//   let startingIndex = 3;
//   let left_arr = [];
//   let right_arr = [];
//   let left_right_arr = [];
//   let rotations = (arr.length + startingIndex) % arr.length;
//   left_arr = arr.slice(0, rotations);
//   right_arr = arr.slice(rotations, arr.length);
//   console.log(left_arr);
//   console.log(right_arr);
//   left_right_arr = right_arr.concat(left_arr);
//   console.log(left_right_arr);
// };

// circularArray();
