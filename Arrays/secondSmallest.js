const findSecondSmallest = (arr) => {
  let min = Infinity;
  let secondMin = Infinity;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  return secondMin;
};

console.log(findSecondSmallest([1, 0, 2, 4, 6, 7, 5]));
