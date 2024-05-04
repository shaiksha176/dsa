// PROGRAM WITH TWO SUM. PROGRAM SHOULD RETURN INDICES OF ARRAY THAT GIVES THE TARGET SUM

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let needed_element = target - nums[i];
    if (map.has(needed_element)) return [map.get(needed_element), i];
    map.set(nums[i], i);
  }
};

let nums = [2, 7, 11, 15],
  target = 9;

// console.log(twoSum(nums, target));
// console.log(twoSum([3, 2, 4], 6));

/************************************************************************************************** */

// PROGRAM TO FIND THE HIGHEST REPEATING CHARACTER IN A STRING

let str = "aaabbeecyqdmew";
let chars = str.split(""); // returns arrays of characters.
let characterMap = new Map();
for (let i = 0; i < chars.length; i++) {
  if (characterMap.has(chars[i])) {
    let count = characterMap.get(chars[i]);
    characterMap.set(chars[i], ++count);
  } else {
    characterMap.set(chars[i], 1);
  }
}

let highest_frequency = 0;
let highest_frequency_character = "";




// console.log(characterMap.entries());

console.log(highest_frequency_character);
