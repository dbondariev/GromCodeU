const reverseString = str => {
  if (typeof str !== 'string') {
    return null
  }
  return str.split('').reverse().join('');
}

const someText = "Hello";
const test = 'Test';
const tseT  = 'tseT';

console.log(reverseString(someText));
console.log(reverseString(test));
console.log(reverseString(tseT));