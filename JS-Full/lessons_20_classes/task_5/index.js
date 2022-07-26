/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return `${this._id}`;
  }

  get name() {
    return `${this._name}`;
  }

  get sessionId() {
    return `${this._sessionId}`;
  }
}

class UserRepository {
  constructor(users) {
    this.users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user._name);
  }

  getUserIds() {
    return this._users.map(user => user._id);
  }

  getUserNameById(id) {
    const user = this._users.find(user => user._id === id);
    return user ? user._name : [];
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
console.log(user);
// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'
user.name = 'Bob';
console.log(user.name);

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
