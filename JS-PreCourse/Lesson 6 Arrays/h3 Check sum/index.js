/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
 if (!Array.isArray(arr)) {
  return null;
 }
 const sum = arr.reduce((acc, curr) => acc + curr, 0);
 if (sum > 100) {
  return true;
 }
 return false;
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
