const reverseArray = arr => {
 if (!Array.isArray(arr)) {
  return null;
 }
 const array = arr.slice();

 return array.reverse();
};
