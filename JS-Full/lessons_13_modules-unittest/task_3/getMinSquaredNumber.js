export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const findNumberArray = [];
  arr.map(number => {
    const absoluteNumber = Math.abs(number);
    return findNumberArray.push(absoluteNumber);
  });
  return Math.min(...findNumberArray) ** 2;
};

// test data
// const result = [-777, -2, 3, 6, 45, -20];
// const test = [-300, 3, 6, 45, -20];
// const moreTest = '';
// const emptyArr = [];

// console.log(getMinSquaredNumber(result));
// console.log(getMinSquaredNumber(test));
// console.log(getMinSquaredNumber(moreTest));
// console.log(getMinSquaredNumber(emptyArr));
