let arr = [3, 5, 4, 1, 9];

// finding smallest and largest element in an array

let min = arr[0],
  max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

// reverse the array

let reverse_array = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reverse_array.push(arr[i]);
}

// the above method takes the extra array to reverse

// while reversing the array, not only do we need to put the last element in the first place but also first element in the last place
// so, we are actually swapping here

for (let i = arr.length - 1, j = 0; i >= j; i--, j++) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// check if the array contains a duplicat number, if duplicate exists, return true, else false

let nums = [1, 2, 3, 1];

// one method is sort the array first and then traverse

nums = nums.sort();

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] == nums[i + 1]) console.log(true);
}
