// создать асинхронный калькулятор
// принимает число и асинхронно работает с числом

// const asyncCalculator = num => {
//   const createPromise = new Promise((resolve, reject) => {
//     // после 500 мс передать дальше значение
//     setTimeout(() => {
//       console.log(`Initial value: ${num}`);
//       resolve(num);
//     }, 500);
//   }).then(value => {
//     // сделать еще одну задержкуЮ чтоб возвести числов квадрат и передать дальше
//     const scndPromise = new Promise((resolve, reject) => {
//       // после 500 мс передать дальше значение
//       setTimeout(() => {
//         const result = value * value;
//         console.log(`Square value: ${result}`);
//         resolve(result);
//       }, 500);
//     });
//     return scndPromise;
//   });

//   return createPromise;
// };

export const asyncCalculator = num =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  }).then(
    value =>
      new Promise((resolve) => {
        setTimeout(() => {
          const result = value * value;
          console.log(`Squared value: ${result}`);
          resolve(result);
        }, 500);
      }),
  )
  .then(value => {
    const result = value * 2;
    console.log(`Doubled value: ${result}`);
    return result;
  })


  // asyncCalculator(5)
  // .then(value => console.log(value))
