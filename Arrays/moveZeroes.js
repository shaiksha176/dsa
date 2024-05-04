// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
let arr = [0, 1, 0, 3, 12];

const useTwoLoops = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
};

// useTwoLoops();

const useCount = () => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
  console.log(arr);
};

// useCount();

const useSwap = () => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  console.log(arr);
};

// useSwap();

const useExtraSpace = () => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr2.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) arr2.push(arr[i]);
  }
  console.log(arr2);
};

useExtraSpace();
