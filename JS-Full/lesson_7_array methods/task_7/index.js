// увеличение четных - методы массивов

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return arr.map(item => {
      if (item % 2 === 0) {
        return (item += delta);
      } else {
        return item;
      }
    });
  }
};

//option 2
// const increaseEvenEl = (arr, delta) => arr.map(item => item % 2 === 0 ? item += delta : item)

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));

