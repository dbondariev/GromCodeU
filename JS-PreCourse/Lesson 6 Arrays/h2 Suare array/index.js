/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
 if (!Array.isArray(arr)) {
  return null;
 }
 return arr.map(x => x * x);
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
