// Classes is a function

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function() {
//   console.log(`Hi, I am ${this.name}`);
// }

// User.prototype.requestNewPhoto = function() {
//   console.log(`New photo request was sent for ${this.name}`);
// }

// User.prototype.setAge = function(value) {
//   if(value < 0) {
//     return false
//   }

//   this.age = value;
//   if(value >= 25) {
//     this.requestNewPhoto();
//   }
//   return value
// }

// with class

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }

    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }

  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User('Tom', 17);
console.log(user1);
const user2 = User.createEmpty();
console.log(user2);


