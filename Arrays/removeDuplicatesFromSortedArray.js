let arr = [1, 1, 2, 2, 3, 3];
// let unique_arr = [...new Set(arr)];
// console.log(unique_arr);

//using indexof && extra space

const useIndex = () => {
  const uniqueArray = [];
  // we can use indexOf() to remove duplicates because indexOf() always gives the index of first occured element though there are many similar elements. It always the index of first occured element
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.indexOf(arr[i]));
    if (uniqueArray.indexOf(arr[i]) === -1) {
      //   console.log(arr.indexOf(arr[i]));

      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

// console.log(useIndex());

// using extra space

const usingExtraSpace = () => {
  let unique_arr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      console.table({ index: i, value: arr[i] });
      unique_arr.push(arr[i]);
    }
  }
  unique_arr.push(arr[arr.length - 1]);
  return unique_arr;
};

// console.log(usingExtraSpace());

// without using extra space (using constant space)

const constantSpace = () => {
  let j = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  arr[j] = arr[arr.length - 1];
  //   return arr;
  return arr.slice(0, j + 1); // Return a slice of the array containing only unique elements
};

console.log(constantSpace());
