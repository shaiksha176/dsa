const reverseArray = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end]=temp;
    start++;
    end--;
  }
  return arr;
};

console.log(reverseArray());
