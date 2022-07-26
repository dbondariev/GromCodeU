// const users = {
//   Bob: 18,
// };
// const players = {
//   Tom: 17,
//   'John Doe': 19,
// };

// const player = Object.assign(users, players);
// соединяет все обьекты в один обьект, тот что справа обьект перебивает все свойства повторяющнеися в других обьектах выше
//изменяет первый обьект(изменяет) users
// console.log(player);

//option 1
// const copyObj = obj => Object.assign({}, obj);


//option 2 создать копию с помощью спред оператора//копирует значение свойст на первом уровне
// const user = {
//   name: 'Tom',
//   'John Doe': 19,
//   Bob: 18,
//   father: {
//     age: 44
//   }
// };

// const players = {...user}
// console.log((players));


//деструктуризация объекта
// const {name} = user;

//переназвать переменную 
// const {name : myName} = user;

//назначить дефолтное значение

// const { sureName =  'default' } = user;// если нет в объекте то вкл дефолтное значение

//можно достать одно свойство, а все остальные перекинуть в какую-то другую переменную
// const { name = 'default', ...restProps } = user

// console.log(restProps);

//можем отдавать какие-то значения

// const player = {
//   game: 'football',
//   ...restProps,
// };

// console.log(player);


//хранение функции в объекте
const user = {
  name: 'Tom',
  age: 17,
  sayHi: function () {
    console.log('Hi');
  }
};
user.sayHi();//Hi

// [1, 2].forEach

console.log('text'.toUpperCase());
