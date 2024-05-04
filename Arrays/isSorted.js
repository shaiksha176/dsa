let array = [1, 2, 3, 4, 5];
const isSorted = () => {
  for (let index = 0; index < array.length-1; index++) {
    console.log(array[index+1]);
    if (array[index] > array[index + 1]) return false;
  }
  return true;
};

console.log(isSorted());
