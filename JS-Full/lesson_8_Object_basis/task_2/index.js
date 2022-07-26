// const user = {
//   name: 'Tom',
// }

// user.name = 'Bob';

// console.log(user.name);

// const a = {};
// const b = {};
// console.log(a === b) //false ; это две разные ссылки

// const a = {};
// const b = a;

// console.log(a === b); // true. переменная b ссылается на объект a

// const name = 'Tom';

// const user = {
//   name,
// }

// console.log(user);

//task 2 Пройтись по всему объекту

//Цикл для массива:

// const arr = ['a', 'b']


//option 1
// for (let index = 0; index < arr.length; index++) {
//   console.log(arr);
// }

//option 2
// for(let value of arr) {
//   console.log(value);
// }

//Цикл для объекта: 
// const user = {
//   name: 'Tom',
//   key: 17
// }
// for (let key in user) {
//   console.log(user[key]);
// }

//Task 2

const user = {
  name: 'Tom',
  key: 17
}


//option 1
// const concatProps = obj => {
//   const arr = []; //let arr = []

//   for(let key in obj) {
//     arr.push(obj[key])
//     //arr = arr.concat(obj[key]) не видоизменяет изначальный массив(если он есть)
//   }
  
//   return arr
// }

//option 2

const concatProps = obj => Object.values(obj)

console.log(concatProps(user));