// this program works only if the array is sorted

function findPair(arr,targetSum){
    let left = 0;
    let right = arr.length-1;
while(left < right){
    let currentSum = arr[left] + arr[right]
    if(currentSum == targetSum){
        return [left,right]
    }
    else if(targetSum > currentSum){
        right--
    }
    else {
        left++
    }
}
return -1;
}