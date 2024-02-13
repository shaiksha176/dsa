
let nums = [1,1,2];

function removeDuplicates(nums) {
    let uniqueIndex=1;
    for(let i = 1; i< nums.length;i++){
        if(nums[i] !== nums[uniqueIndex-1]){
            nums[uniqueIndex] = nums[i]
            ++uniqueIndex
        }
    }
    // return nums;
    return uniqueIndex;
}

console.log(removeDuplicates(nums))