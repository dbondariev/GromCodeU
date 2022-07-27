/* eslint-disable no-sequences */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
 const array = [];
 if (!Array.isArray(arr)) {
  return null;
 }
 array.push(arr.length);
 array.push(arr[0]);
 array.push(arr[arr.length - 1]);
 return array;
}

// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
