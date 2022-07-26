// func calc 
// использовать методы, которые изменяют начальное значение
// методы объекта возвращают ссылку на сам объект

export const calc = initialValue => {
  let result = initialValue;
  const calculator = {
    add(number) {
      result += number;
      return this;
    },

    mult(number) {
      result *= number;
      return this;
    },

    subtract(number) {
      result -= number;
      return this;
    },

    div(number) {
      result /= number;
      return this;
    },

    result() {
      return result;
    },
  };
  return calculator;
}

const result = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(result);

const result2 = calc(3).mult(4).subtract(5).add(2).div(10).result();
console.log(result2);