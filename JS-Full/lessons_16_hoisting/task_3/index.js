// input number
// output array of functions

function createArrayOfFunctions(number = []) {
  const arr = [];
  if (isNaN(number)) {
    return null;
  }
  for (let i = 0; i < number; i += 1) {
    // input -
    // output index
    arr[i] = function () {
      return i;
    };
    // console.log(i);
  }
  return arr;
}

console.log(createArrayOfFunctions(9)[5]()); // 5
console.log(createArrayOfFunctions(15)[3]()); // 3
console.log(createArrayOfFunctions()); // null
console.log(createArrayOfFunctions('')); // пустой array 

// input number
// output array length

// function f() {
//     return function(x) {
//         return x+1;
//     }
// }
// var z = f();
// console.log(z(5));
