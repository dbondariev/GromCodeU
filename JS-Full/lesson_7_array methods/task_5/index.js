// возведение в квадрат элементов массива

const squareArray = num => !Array.isArray(num) ? null : num.map(item => item ** 2);

const res = [2, 6, 8];

console.log(squareArray(res));