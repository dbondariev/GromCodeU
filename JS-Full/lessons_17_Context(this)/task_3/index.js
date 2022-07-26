// input function, ms
// output function

function defer (func, ms) {
  return function () {
    // eslint-disable-next-line prefer-rest-params
    setTimeout (() => (func.apply(this, arguments, ms)))
  }
}

// input number number
// output (sum) -> number
const sum = (a, b) => console.log(a + b);
const deferredSum = defer(sum, 1500)
deferredSum(2, 3)
deferredSum(-2, -3);
deferredSum(-2, 15);