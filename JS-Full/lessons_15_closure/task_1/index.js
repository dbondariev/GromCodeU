// задача создать счетчик (counter)


// с помощью этой функции создавать счетчики
export const makeCounter = () => {
  let count = 0;
  return function() {
    return count++
  }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

// задача: выводишь в консоль, результат 0. если еще раз вызвать вернет 1 и тд
// нужно чтоб каждая функция отсчитывала от отдельно своей переменной
// в момент выз ф-ции для нее созд свое лекс окружение и вызывается своя отдельная переменная

console.log(counter1());// 0
console.log(counter1());// 1
console.log(counter1());// 2

console.log(counter2());// 0
console.log(counter2());// 1
console.log(counter2());// 2