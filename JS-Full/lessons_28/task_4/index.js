// const sum = (a, b) => a + b;

// суть каррирования (принимает 1 арг, потом 2-1, затем их складывает)
// с помощтю такое варианта мы можем переиспользовать код

// const sum1 = a => b => a + b;
// const add3 = sum1(3);

// const result = add3(5);
// console.log(result);

// композиция на основе каррирования:
// compose(func1, func2, ...) =>

// const add3 = value => value + 3;
// const mult = value => value * 2;
// const div4 = value => value / 4;

// const compose = (...funcs) => value => {
//   return funcs.reduce((acc, func) => func(acc), value)
// }

// const doEverything = compose(add3, mult, div4);
// console.log(doEverything(3));

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

export const compose =
  (...funcs) =>
    value =>
      funcs.reduce((acc, func) => func(acc), value);

const doEverything = compose(add2, square, half);
console.log(doEverything(2));



