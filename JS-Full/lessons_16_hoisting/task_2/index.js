/* eslint-disable */
// циклом создать массив функций
var arr = [];

// for(var i = 0; i < 10; i ++){
//   arr[i] = function() {
//     return i;
//   }
// }

// console.log(arr[3]()); // 10
// console.log(arr[5]()); // 10

for (let i = 0; i < 10; i++) {
  arr[i] = function () {
    return i;
  };
}

console.log(arr[3]());
console.log(arr[5]());
