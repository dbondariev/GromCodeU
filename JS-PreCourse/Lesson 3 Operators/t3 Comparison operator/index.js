/* eslint-disable */

/* Результатом сравнения является булевое значение */

/* Сравнение чисел */
const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;
console.log('a > b:', a > b);
console.log('a <= b:', a <= b);
console.log('a == b:', a == b);
console.log('a != b:', a != b);

/* Сравнение строк */
'a' < 'b';
'ab' > 'a';
console.log("'a' < 'b':", 'a' < 'b');
console.log("'ab' > 'a':", 'ab' > 'a');


/* При сравнении переменных разных типов они преобразуются в числа */
'17' > 1;
console.log("'17' > 1:", '17' > 1);

/* Строгое сравнение */
17 === 1;
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0;
console.log("17 === 1:", 17 === 1);
console.log("17 === 17:", 17 === 17);
console.log("17 === '17':", 17 === '17');
console.log("17 === true:", 17 === true);
console.log("true === false:", true === false);
console.log("true === true:", true === true);
console.log("null === undefined:", null === undefined);
console.log('false === 0:', false === 0);
console.log("'0' === '':", 0 === '')


/* Нестрогое сравнение */
17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;
console.log("17 == '17':", 17 == '17');
console.log("'0' == '':", '0' == '');
console.log("0 == '':", 0 == '');
console.log("null == undefined:", null == undefined);
console.log("false == 0:", false == 0);


/* Осторожно c null и undefined */
undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;

console.log("undefined == null:", undefined == null);
console.log("undefined == 0:", undefined == 0);
console.log("null == 0:", null == 0);
console.log("undefined < 0:", undefined < 0);
console.log("undefined > 0:", undefined > 0);
