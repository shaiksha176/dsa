let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

for (let i = 0; i < nums1.length; i++) {
  for (let j = 0; j < nums2.length; j++) {
    if (nums1[i] < nums2[j]) {
      let temp = nums2[j];
      nums2[i] = nums2[j];
      nums2[j] = temp;
    }
  }
}
console.log(nums1);
