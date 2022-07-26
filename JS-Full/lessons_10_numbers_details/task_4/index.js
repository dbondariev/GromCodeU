// const getTotalPrice = arr => {
//    const sum = arr.reduce((acc, num) => acc + num, 0);
//     const result = Math.floor(sum * 100) / 100;
//     return `$${result}`
// };



// console.log('$' + getTotalPrice([2.241, 2.127, 2]));
// console.log('$' + getTotalPrice([17.159, 1.12]));
// (0.1 * 34 + 0.2 * 17).toFixed(2);

// var numb = 123.23554;
// numb = (Math.floor((m + n) * 1000) / 100).toFixed(2);

// console.log(numb);

const num = [1.7573, 1.3234, 2.7889];

const getTotalPrice = numbers => {
  const sumNumbers = numbers.reduce((sum, i) => sum + i, 0);
  const floorNumber = Math.floor(sumNumbers * 100) / 100;
  return `$${floorNumber}`;
};
console.log(getTotalPrice(num));
