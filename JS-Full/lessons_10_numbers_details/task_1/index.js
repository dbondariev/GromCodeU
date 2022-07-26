// // Number('34')//34
// // Number(null);//0
// // Number(NaN);//Nan
// // Number('we');//Nan
// Number.isNan('text')//false => проверяет является ли операнд NaN
// isNan('text')//true => пробует оператор произвести в number
// Nann === Nan // false , не равен самому себе
// Number.isFinite('17')// false проверяем конечное число или нет. говорит как есть, это число или нет
// isFinite('17');//trueстарый метод, старается привести к числу
// Number.isInteger(17)// true целое число или нет
// Number.isInteger(17.17);//false
// Number.isInteger(17.0)// true

// const num = '67';
// Number.isNan(num);//false

// //Методы парсинга чисел.
// // Когда надо из более сырой информации проверить число
// parseInt('12px')// 

// //проверка и выход целого числа
// Number.parseInt('17.17text')//17
// parseFloat('17.17.9text');//17.17 считывает дробное число
// Number.parseFloat('seventeen')// Nan не получается достать отсюда число

// parseFloat === Number.parseFloat// true
// isFinite == Number.isFinite; // false у этих ф-ций есть различия в работе
// isFinite;// более новая и надо пользоваться ею


// создадим функцию, которая каждый элемент масссива преобразует во float
// option 1
// const parseArray = arr => {
//   const result = arr.map(el => parseFloat(el));
//   return result
// }


// option 2
// const parseArray = arr =>
//   arr.map(el => Number.parseFloat(el));

// const elementsList = [4, 5.6, '   5.7kl', null, NaN, Infinity, undefined];
// console.log(parseArray(elementsList));

// числа хранятся в бинарном формате (как 0 и 1)
// 0.1 + 0.2 === 0.3//false
// 0.1 + 0.2 //0.30000000000000004 потеря точности
// чтоб такого избежать есть методы: Math

// Math.ceil(17.17)//округление до 18
// Math.floor(17.71);//18
// Math.round(-17.5);
// Math.trunc(-17.5);отбрасывает дробную часть(любую)

// Math.abs(-17);//17
// Math.max(5, 7, 17, 1);//17
// Math.min(5, 7, 1, -4);//-4

// Math.pow(3, 4);//81 3 в степени 4
// Math.sqrt(9);//3

// num => [] //округления числа с помощью разных методов
// const multiRound = num => [
//   Math.round(num),
//   Math.floor(num),
//   Math.ceil(num),
//   Math.trunc(num),
//   parseFloat(num.toFixed(2)),
// ];

// console.log(multiRound(-17.1));
// const multiRound = num => [
//   Math.round(num * 100) / 100,
//   Math.floor(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   num.toFixed(2),
// ];

// console.log(multiRound(Math.PI));//[3.14, 3.14, 3.15, 3.14, "3.14"]
// console.log(multiRound(-Math.PI));//[-3.14, -3.15, -3.14, -3.14, "-3.14"]

// (0.1 * 34 + 0.2 * 17 ).toFixed(2)//"6.80"


// найдем максимальное число в массиве по модулю 
// -17 по модулю = 17
// положительные числа модулю равны сами себе

// [2, -6, -78, -99] => 99


// option 1
// const getMaxAbsoluteNumber = arr => {
//   if (!Array.isArray(arr)  || arr.length === 0) {
//     return null;
//   }
//   let max = -Infinity; //всегда нужно задать что-то что меньше любого числа
//   arr.forEach(num => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// };


// option 2 
// разбиваем задачу на две части
// 1. находим все абсолютные значения
// 2. найдем максим из всех значение

// const getMaxAbsoluteNumber = arr => {
  
//   const absolutValues = arr.map(num => Math.abs(num)); //в этой переменной лежат [2, 6, 78, 99]
  
//   const max = Math.max(...absolutValues);// через спред оператор преобразовуем массив в аргументы функции
//   return max

// }

// option 3

// const getMaxAbsoluteNumber = arr => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }
//   const absolutValues = arr.map(num => Math.abs(num)); 
//   return Math.max(...absolutValues);
// }

// console.log(getMaxAbsoluteNumber([]));

// const getFiniteNumbers = arr => {
//   return arr.filter(el => Number.isFinite(el));
// };

// const elementsList2 = [3, '-4.2', '5', [-8, 2], 10];
// console.log(getFiniteNumbers(elementsList2));
// result [3, 10]

// const getFiniteNumbersV2 = arr => {
//   return arr.filter(el => isFinite(el));
// };

// console.log(getFiniteNumbersV2([3, '-4.2', '5', [-8, 2], 10]));
// //result [3, "-4.2", "5", 10]

// const getNaN = arr => {
//   return arr.filter(el => Number.isNaN(el));
// };

// console.log(getNaN([3, '-4.2', [-8, 2], undefined, NaN]));
// // result [false, false, false, false, true]

// const getNaNV2 = arr => {
//   return arr.filter(el => isNaN(el));
// };

// console.log(getNaNV2([3, '-4.2', [-8, 2], undefined, NaN]));
// // result [false, false, true, true, true]

// const getIntegers = arr => {
//   return arr.filter(el => Number.isInteger(el));
// };

// console.log(getIntegers([3, -4.2, [-8, 2], undefined, NaN]));

function multiRound(number) {
  return [
    Math.floor(number * 100) / 100,
    Math.round(number * 100) / 100,
    Math.ceil(number * 100) / 100,
    Math.trunc(number * 100) / 100,
    +number.toFixed(2),
  ];
}


console.log(multiRound(17.123));
console.log(multiRound(-17.13));
console.log(multiRound(-18.878));



