/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
 if (!Array.isArray(arr)) {
  return null;
 }
 let sum = 0;
 for (let i = 0; i < arr.length; i += 1) {
  sum += arr[i];
 }
 return sum;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
