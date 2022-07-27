function getSum(start, end) {
 let sum = 0;
 // eslint-disable-next-line no-plusplus
 for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
   sum += i;
  }
 }
 return sum;
}
