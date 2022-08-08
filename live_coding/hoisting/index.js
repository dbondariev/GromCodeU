// test();
// testErrowFunc();

// console.log(price);

// function test() {
//  console.log('test');
// }

// if (true) {
//  var price = 100;
// }

// test();

// const testErrowFunc = () => {
//  console.log('testErrowFunc');
// };

// testErrowFunc();

// testErrowFunction();

// var with declaration is hoisted to the top of the  scope and can be used before it is declared.
// var with expression is not hoisted to the top of the scope and throws an error when used before it is declared.

// const testErrowFunction = () => {
//  console.log('testErrowFunction');
// };

// testErrowFunction();

// functional scope can stop hoisting of var.

// ===========================================================

// example 1
// console.log(message); // undefined
// var message = 'Hello World'; // var is hoisted to the top of the scope.

// example 2
// var a = 55;
// console.log(a); // 55

// if (a) {
//  var a = 1;
//  console.log(a); // 1
// }

// console.log(a); // 55

// ===========================================================

// var a;
// a = 55;
// console.log(a);

// if (a) {
//   a = 1;

//  console.log(a);
// }

// console.log(a);

// example 3
// var a = 77;
// console.log(a); // 77

// function print() {
//  var a = 2;
//  console.log(a); // 2
// }
// print();
// console.log(a); // 77

// ===========================================================

// var a;
// a = 77;
// console.log(a); // 77

// function print() {
//  var a;
//  a = 2;
//  console.log(a); // 2
// }
// print();
// console.log(a); // 77
