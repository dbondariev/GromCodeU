/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
// eslint-disable-next-line consistent-return
const includes = (arr, num) => {
 if (!Array.isArray(arr)) {
  return null;
 }
 for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] === num) {
   return true;
  }
 }
 return false;
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
