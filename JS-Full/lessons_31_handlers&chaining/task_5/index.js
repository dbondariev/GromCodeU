export const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log('Done'));
    }, time);
  });

delay(3000);
