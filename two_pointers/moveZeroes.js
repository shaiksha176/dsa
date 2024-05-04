/**
 *   Question : https://www.enjoyalgorithms.com/blog/move-all-the-zeroes-to-the-end/
 */

// Moving zeroes to the end

// using extra space

const usingExtraSpace = (arr) => {
  let new_arr = new Array(arr.length).fill(0);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      new_arr[j] = arr[i];
      j++;
    }
  }
  console.log(new_arr);
};

//usingExtraSpace([4, 8, 0, 0, 2, 0, 1, 0]);

// using two loops

const usingTwoLoops = (arr) => {
  let j = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j++;
    }
  }
  while (j < n) {
    arr[j] = 0;
    j++;
  }
  console.log(arr);
};

// usingTwoLoops([4, 8, 0, 0, 2, 0, 1, 0]);

// using single loop

const usingSwap = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    // Swapping elements in array
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  //   console.log(arr);
};

// usingSwap([4, 8, 0, 0, 2, 0, 1, 0]);

const optimizedSwapping = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    // Swapping elements in array
    if (arr[i] !== 0) {
      if (i !== j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j++;
    }
  }

  console.log(arr);
};
optimizedSwapping([4, 8, 0, 0, 2, 0, 1, 0]);
