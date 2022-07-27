const getSubArray = (arr, numberOfElements) => {
 if (!Array.isArray(arr)) {
  return null;
 }
 const array = arr.slice();
 return array.slice(0, numberOfElements);
};
