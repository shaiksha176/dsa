let nums = [1, 1, 2];

const bruteForce = () => {
  const arr = [...new Set(nums)];
  console.log(arr);
};

bruteForce();
