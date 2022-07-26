// async function func() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(17)
//     }, 1000);
//   })
//   const result = await promise // присваивает р-т промиса
//   console.log(result);
//   console.log('Hello');
//   return 1;
// }

// const result = func();
// console.log('Hello there');

const getUser = async userId => {
  // обработка ошибки: поместить в try и тд
  try {
    // получить данные с github
    // хапрос данных:
    const response = await fetch(`https://api.github.com/users/${userId}`);
    // console.log(response); // -> значение промис
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    // обработать ошибку и закинуть дальше ->
    throw new Error('Failed to fetch user')
  }
};

getUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message))
