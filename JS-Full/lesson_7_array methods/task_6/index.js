// перенвернуть массив

const reverseArray = arr => !Array.isArray(arr) ? null : arr.slice().reverse()

const res = [2, 6, 8];

console.log(reverseArray(res));