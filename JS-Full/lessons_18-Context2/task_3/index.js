// function func() {
//   console.log(typeof arguments); //object
//   // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// }

// func(1, 2, 3, 4)

// заимствование методовтъ
function sumOfSquares() {
  return [].reduce.call(arguments, (acc, elem) => acc + elem ** 2, 0);
}

console.log(sumOfSquares(1, 2, 3, 4));
console.log(sumOfSquares(5, 10, 100, 50, 1, 1, 10));


