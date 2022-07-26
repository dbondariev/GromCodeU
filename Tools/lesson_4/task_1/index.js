// самовызывающяя ф-ция IIFE
// const store = (function() {
//   let storage = {};
//   return {
//     addItem: function(key, value) {
//       Object,assighn(atorage, {[key]: value})
//     },
//     clear: function() {
//       storage = {};
//     }
//   }
// })();


// чтоб спрятать внутр переменные
// (function func() {
//   let a = 17;

//   console.log(a);
// })();

// AMD подгрузка изолированных модулей
// исп сторонних библиотех в коде

// ES модули -> нативные, в стандартном джс import 

// common js module - нельзя исп в браузере, node.js, для сборки проекта

// импортируйте все полифилы из папки polyfills
// импортируйте ф-ции sum и mult под такими же именами, а так же ф-цию calc под именем calcExpression из файла calculator/index.js
// импортируйте ф-цию fetchUser из profile/gateway.js под таким же именем
// импортируйте ф-цию printProfile из profile/index.js под таким же именем

import calcExpression, { sum, mult } from './calculator/index.js';
import { printProfile } from './profile/index.js';
import fetchUser from './profile/gateway.js';
import './polyfills/array-flat.js';
import './polyfills/array-flatMap.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'The World' });

// убедитесь, скрипт выполнился без ошибок