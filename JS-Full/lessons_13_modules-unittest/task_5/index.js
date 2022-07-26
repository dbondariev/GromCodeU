// перевернуть массив
export const reverseArray = arr => (!Array.isArray(arr) ? null : arr.slice().reverse());

// const res = [2, 6, 8];

// console.log(reverseArray(res));

// withdraw - работа с массивами

export function withdraw(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }

  // eslint-disable-next-line no-param-reassign
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

/* eslint-disable no-restricted-syntax */
// Фильтрация объекта
export const getAdults = obj => {
  const newObj = {};
  for(const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// console.log(getAdults({ Ann: 56, Andrey: 7 }))
// console.log(getAdults());
// examples
// getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
