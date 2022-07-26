'use strict'
// заимствование методов Math.max.apply(null, 1, 3, 90)

// wallet
// bad option
// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax(){
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin(){
//     return Math.min.apply(null, this.transactions);
//   }
// }

// better option 
const wallet = {
  transactions: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());