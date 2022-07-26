// const user = {
//   name: 'Tom',
//   age: 17,
// }

// console.log(Object.keys(user));//["name", "age"]
// console.log(Object.values(user));//["Tom", 17]
// console.log(Object.entries(user));//[Array(2), Array(2)] на выходе массив массивов

//console.log(Object.entries(user));

const user = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

// const getAdults = usersObj => {
//   const usersArray = Object.entries(usersObj);
//   //{'Tom': 17, 'John Doe': 19, 'Bob': 18,} => [['Tom': 17], ['John Doe': 19], ['Bob': 18]]

//   const filteredUsersArray = usersArray.filter(user => user[1] >= 18);
//   //[['Tom': 17], ['John Doe': 19], ['Bob': 18]] => ['John Doe': 19], ['Bob': 18]]

//   const usersNames = filteredUsersArray.map(user => user[0]);
//   //['John Doe': 19], ['Bob': 18]] => ['John Doe', 'Bob']
//   return usersNames;
// };

// console.log(getAdults(user));

const getAdults = usersObj => {
  return Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
};

console.log(getAdults(user));
