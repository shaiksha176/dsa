// using recursion

const myPow = (base, pow) => {
  if (pow === 0) {
    return 1;
  } else {
    let result = base * myPow(base, pow - 1);
    return result;
  }
};

// console.log(myPow(2, 10));

const myPowUsingLoop = (base, pow) => {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= base;
  }
  console.log(result);
};

// myPowUsingLoop(2, 5);
const myPowUsingBS = (x, n) => {
  if (n == 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let halfPow = myPowUsingBS(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return halfPow * halfPow;
  } else {
    console.log(halfPow);
    return halfPow * halfPow * x;
  }
};

console.log(myPowUsingBS(2, 5));
