// у приложения есть несколько серверов и клиенты по всему миру, и мы не знаем где точно находится пользователь. Нужно получить его данные asap и сделать запросы на 3 сервера, обработав тот, который будет самым быстрым

const getRandomNumber = (from, to) => 
  from + Math.random() * (to - from)

// имитация запросов
// eslint-disable-next-line arrow-body-style
const request = url => {
  return new Promise(resolve => {
    const rendomDelay = getRandomNumber(1000, 3000)
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,

        },
        source: url,
      })
    }, rendomDelay);
  });
};

const servers = [
  'https://server.com/us/', 
  'https://server.com/eu',
  'https://server.com/au',
];

export const getUserASAP = userTd => {
  const userUrls = servers.map(serverUrl => `${serverUrl}${userTd}`);

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
}

getUserASAP('userId').then(res => console.log(res))