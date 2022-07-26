const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  },
}

console.log(user.getFullName.bind(user)());
// input
// output 