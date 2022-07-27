function checker(arr) {
 if (!Array.isArray(arr)) {
  return null;
 }
 const minMax = Math.min(...arr) + Math.max(...arr);
 if (minMax > 1000) {
  return true;
 }
 return false;
}
