// const sumOfN_integers = (n) => {
//   if (n == 1) return 1;
//   return n + sumOfN_integers(n - 1);
// };

// console.log(sumOfN_integers(5));
let sum = 0;
const calculateTillN = (number) => {
  if (sum == 50) return sum;
  else {
    sum += 10;
   return  calculateTillN(sum);
  }
};

console.log(calculateTillN(50));
