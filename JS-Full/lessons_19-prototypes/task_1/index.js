/* eslint-disable no-restricted-syntax */
// vehicle and ship транспортное средство

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`); // метод
//   },
//   stop() {
//     console.log(`${this.name} stopped`); // метод
//   }
// }

// vehicle.move();
// console.log(vehicle.toString);
// // свойство toString -> ƒ toString() { [native code] }
// console.log(vehicle); // {move: ƒ, stop: ƒ}

// // создать свой корабль с доп  особенностями

// const ship = {
//   name: 'Argo',
//   hasWheels: false,
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     return ship.move();
//   },
//   stopMachine() {
//     console.log(`${this.name} lifting anchor down`);
//     return ship.stop();
//   },
//   __proto__: vehicle,
// };

// // vehicle является прототипом для ship
// console.log(ship);
// ship.stopMachine();
// ship.startMachine();

// один из методов для прототипов:
// Object.setPrototypeOf(ship, vehicle);
// ship.move()

// task 2
// Функция, которая должна находить все собственные свойства объекта

const user = {
  firstName: 'John',
  lastName: 'Doe',
  // задать ему get-ер
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // задать ему set-ер
  // разобрать value на имя и фамилию
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);

// task 3
// собственные свойства объекта, те что объявлены на нем, а не объявлены по цепочке прототипов

const vehicle = {
  move() {
    console.log(`${this.name} is moving`); // метод
  },
  stop() {
    console.log(`${this.name} stopped`); // метод
  },
};

vehicle.move();
console.log(vehicle.toString);
// свойство toString -> ƒ toString() { [native code] }
console.log(vehicle); // {move: ƒ, stop: ƒ}

// создать свой корабль с доп  особенностями

const ship = {
  name: 'Argo',
  hasWheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    return ship.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    return ship.stop();
  },
  __proto__: vehicle,
};

// option 1. наследует свойства прототипа
// for( let props in ship) {
//   console.log(props);
//   // name,hasWheels,startMachine,stopMachine,
//   // унасл. от прототипа move,stop
// }

// option 2 чтоб избежать наследования:
// method

function getOwnProps(obj) {
  const arrProps = [];
  for (const keys in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(keys) && typeof obj[keys] !== 'function') {
      arrProps.push(keys);
    }
  }
  return arrProps;
}

console.log(getOwnProps(ship));

// option 3, better

// console.log(Object.keys(ship));
// ["name", "hasWheels", "startMachine", "stopMachine"]

// function Конструктор (любая ф-ция, кроме стрелочной)

function User(name, age) {
  // {} -> наполняет данными
  this.name = name;
  this.age = age;

  // методы однотипных объектов следует скидывать в прототип:
  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };

  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };

  User.prototype.setAge = function (howOld) {
    this.age = howOld;
    if (howOld >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    if (howOld > 0) {
      return howOld;
    }
    return false;
  };
  // return {...} -> по умолч заполняет объект
}

const user1 = new User('John', 20);
console.log(user1);
user1.requestNewPhoto();
console.log(user1.setAge(30));
console.log(user1.setAge(-1));
