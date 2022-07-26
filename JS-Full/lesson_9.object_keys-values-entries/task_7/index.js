const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const getTotalRevenue = transactions => {
  let sum = 0;
  for (let index = 0; index < transactions.length; index++) {
    sum += transactions[index].amount;
  }
  return sum;
};

const result = getTotalRevenue(dayTransactions);
console.log(result);
