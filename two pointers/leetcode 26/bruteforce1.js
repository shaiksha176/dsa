// Remove the duplicates from sorted array and return the length of unique elements
let nums = [1,1,2]
let set = new Set(nums)
let uniqueArray = [...set]
console.log(uniqueArray.length)