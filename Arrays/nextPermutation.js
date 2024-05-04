let arr = [1, 3, 2];

const findNextPermutation = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        console.log(i, j, k);
      }
    }
  }
};
findNextPermutation();
