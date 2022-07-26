// eslint-disable-next-line strict
'use strict';

// input
// output

// const obj = {
//   name: 'Tom',
//   sayHi(){
//     console.log(this.name);
//   }
// }

// // obj.sayHi()

// const func = obj.sayHi;
// func();

const event = {
  guests: [
    { name: 'John', age: 18, email: 'j@mail.com' },
    { name: 'Bob', age: 19, email: 'b@mail.com' },
    { name: 'Samantha', age: 29, email: 's@mail.com' },
    { name: 'Taddy', age: 14, email: 'a@mail.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(
        ({ name, email }) => ({
          email,
          message: `Dear ${name}! ${this.message}`,
        }),
        event,
      );
  },
};

console.log(event.getInvitations());
