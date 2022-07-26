// pinger (num, period)
// оприделенное количество раз, через конкретное время будет выводить в консоль слова ping

// в таком варианте нет остановки после 5-ти
// const pinger = (num, period) => {
//   setInterval(() => {
//     console.log('Ping');
//   }, period)
// }

// pinger(5, 1000)

//
// const pinger = (num, period) => {
//   const interval = setInterval(() => {
//     console.log('Ping');
//   }, period);
//   setTimeout(() => {
//     clearInterval(interval);
//   }, num * period);

// };

// pinger(5, 1000);

// лучше не полагаться на сет таймаут. вводим счетчик
export const pinger = (num, period) => {
  // на каждом интервале уменьшаем счетчик
  let i = num;
  console.log('Ping');
  const interval = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// pinger(5, 1000);
