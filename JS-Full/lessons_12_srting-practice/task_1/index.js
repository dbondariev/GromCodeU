/* eslint-disable default-case */
// калькулятор, который берет изначально строку с каким-то выражением и получаем строку с результатом вычислений + = / *

// '1 + 2' => '1 + 2 = 3'

// bad

// eslint-disable-next-line consistent-return
const calc = expression => {
  if (typeof expression !== 'string') {
    return null
  }
  const a = expression.split(' '); // теперь здесь массив
  let result;

  switch (a[1]) {
    case '+':
      result = Number(a[0]) + +a[2];
      // унарный плюс переводит из строки в цифры(=без конкатенации строк)
      break;

    case '-':
      result = a[0] - a[2];
      break;

    case '*':
      result = a[0] * a[2];
      break;

    case '/':
      result = a[0] / a[2];
      break;
  }
  return expression + ' = ' + result;
};


// good

// const calc = expression => {
//   const [a, operator, b] = expression.split(' '); // теперь здесь массив
//   let result;

//   switch (operator) {
//     case '+':
//       result = Number(a) + +b;
//       break;

//     case '-':
//       result = a - b;
//       break;

//     case '*':
//       result = a * b;
//       break;

//     case '/':
//       result = a / b;
//       break;
//   }
//   return `${expression}  =  ${result}`;
// };
console.log(calc(1 + 2));
console.log(calc('100 - 2'));
console.log(calc('2 * 2'));
console.log(calc('10 / 2'));
