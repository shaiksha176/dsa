// let arr = [1, 2, -4, -5];
let arr = [1, 2, -4, -5, 3, 4];

const rearrangeArrayElementBySign = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < 0 && i % 2 !== 0) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  console.log(arr);
};

rearrangeArrayElementBySign();
