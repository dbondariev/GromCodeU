//сортированный и не сортированный массив
//option 1
const sortDesc = numbers => {
  const copyArr = numbers.slice();
  copyArr.sort((a, b) => b - a);
  return copyArr;
};

const arr = [1, 6, 7, 9, 3, 5, 18, 10];

console.log(sortDesc(arr));


//option 2

// const sortDesc = numbers => 
// numbers.slice().sort((a, b) => b - a);

// const arr = [1, 6, 7, 9, 3, 5, 18, 10];
// console.log(sortDesc(arr));
