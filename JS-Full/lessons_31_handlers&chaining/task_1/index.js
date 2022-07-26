// симитируем обращению к серверу. обращ к серверу - всегда асинхронный код

// try better
// const requestUserData = userId => {
//   // создаем объект промиса
//   const request = new Promise((resolve, reject) => {
//     // имитация ошибки:
//     if (userId === 'broken') {
//       setTimeout(() => {
//         reject(new Error('User not found'));
//       }, 500);
//     } else {
//       setTimeout(() => {
//         resolve({
//           name: 'John',
//           age: 17,
//           email: `${userId}@example.com`,
//           userId,
//         });
//       }, 1000);
//     }
//   });

//   return request;
// };

// maybe better
const requestUserData = userId =>
  new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}@example.com`,
          userId,
        });
      }, 1000);
    }
  });

// не отловлена ошибка
// requestUserData('broken')
//   .then(data => console.log(data))

// важен порядок подписок!

// 1 option -> better!
requestUserData('userid777').then(data => console.log(data));
// .catch(error => console.log(error))
// .finally(() => console.log('finally'));

// 2 option
// каждый элемент в цепочке ниже, возвращает рез-т предыдущего (чейнинг)
// requestUserData('broken')
// .then(
//   data => console.log(data),
//   error => console.log(error),
// )
// .finally(() => console.log('finally'));

// 3 option
// чтоб прервать цепочку наследования у методов результат предыдущего, надо воспользоваться throw
requestUserData('broken')
  .catch(error => {
    console.log(error);
    throw new Error('Error') // Error: User not found //  finally
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));

requestUserData('userid999').then(data => console.log(data));
