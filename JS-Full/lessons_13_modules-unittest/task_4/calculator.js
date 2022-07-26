export const calc = expression => {
  if (typeof expression !== 'string') {
    return null;
  }
  const a = expression.split(' '); // теперь здесь массив
  let result;

  // eslint-disable-next-line default-case
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

// console.log(calc(1 + 2));
// console.log(calc('100 - 2'));
// console.log(calc('2 * 2'));
// console.log(calc('10 / 2'));
