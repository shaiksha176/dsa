const prices = [7, 1, 5, 3, 6, 4, 8];

const getMaxProfit = () => {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let diff = prices[j] - prices[i];
        profit = Math.max(diff, profit);
      }
    }
  }
  console.log(profit);
};

// getMaxProfit();

const getMaxProfitWithoutNestedLoop = () => {
  // one way

  //   let min = Infinity;
  //   let maxProfitSofar = 0;
  //   for (let i = 0; i < prices.length - 1; i++) {
  //     min = Math.min(min, prices[i]);
  //     if (min < prices[i + 1]) {
  //       diff = prices[i + 1] - min;
  //       maxProfitSofar = Math.max(maxProfitSofar, diff);
  //     }
  //   }
  //   console.log(maxProfitSofar);

  // Another way

  let min = Infinity;
  let maxProfitSofar = 0;
  for (let i = 0; i < prices.length; i++) {
    // Change the loop condition
    min = Math.min(min, prices[i]);
    if (prices[i] > min) {
      // Use 'prices[i]' instead of 'prices[i + 1]'
      const diff = prices[i] - min; // Declare 'diff' using 'const'
      maxProfitSofar = Math.max(maxProfitSofar, diff);
    }
  }
  console.log(maxProfitSofar);
};
getMaxProfitWithoutNestedLoop();
