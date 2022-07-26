//[1, [2, 3, 4]б 5, [6]] => [1, 2, 3, 4, 5, 6] сделать плоский массив(одномерный)


//option 1
// const flatArray = arr => {
//   const flatArray = arr;
//    .reduce((acc, item) => {
//      return acc.concat(item);
//    }, []);
//   return flatArray;
// }


//option 2
const flatArray = arr => arr.flat().sort((a, b) => a - b);

const initArray = [1, [2, 3, 4], 5, [6]];
console.log(flatArray(initArray));

// [1, 2, 3, 4].reduxe(function(acc, num) {
//   return acc + num
// }, 0); //result => 10