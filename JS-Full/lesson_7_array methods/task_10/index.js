const sum = arr => (!Array.isArray(arr) ? null : arr.reduce((a, b) => a + b, 0));
console.log(sum([2, 5, 6, 3, 0, 3, -1]));
console.log(sum(2, 5, 6, 3, 0, 3));
