// option 1
const arrAverage = arr => (!Array.isArray(arr) ? null : arr.reduce((a, b) => (a + b)) / arr.length); 


// option 2
// const arrAverage = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((acc, nextValue) => acc + nextValue) / arr.length;
// };
 

console.log(arrAverage([1, 3, 5, 10]));
console.log(arrAverage(1, 3, 5, 10));