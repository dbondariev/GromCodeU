// const getRandomNumbers = (length, from, to) => {
//   let arr = new Array();
//   if (to - from < 1) {
//     return null;
//   }
//   arr.length = length;
//   let min = Math.ceil(from);
//   let max = Math.ceil(to);
//   for (let i = 0; i < arr.length; i += 1) {
//     arr.fill(Math.trunc(Math.random(i) * (max - min) + min));
//   }
//   return arr;
// };

const getRandomNumbers = (length, from, to) => {
  let arr = [];
  if (to - from < 1) {
    return null;
  }
  arr.length = length;
  let min = Math.ceil(from);
  let max = Math.ceil(to);
  for (let i = 0; i < arr.length; i += 1) {
    arr.fill(Math.trunc(Math.random(i) * (max - min) + min));
  }
  return arr;
};
// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
