/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

// const makePromise = (number) => {
//   return new Promise(resolve => {
//     resolve(number)
//   })
// };

// bad
// const makePromise = number => {
//   return Promise.resolve(number);
// };

// better
const makePromise = number => Promise.resolve(number);

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});


