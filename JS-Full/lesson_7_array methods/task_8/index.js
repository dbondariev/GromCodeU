const cloneArr = arr => (!Array.isArray(arr) ? null : arr.slice());

console.log(cloneArr([1, 2, 3]));
console.log(cloneArr(1, 2, 3));
