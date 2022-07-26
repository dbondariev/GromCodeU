const getParsedIntegers = arr => {
  return arr.map(el => Number.parseInt(el));
};
const elementsList2 = [3.2, -4.2, 5,  10];
console.log(getParsedIntegers(elementsList2));
// result [3, -4, 5, 10]



const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
console.log(getParsedIntegersV2([3, -4.2, 5, 10]));
//result [3, -4, 5, 10]



const getParsedFloat = arr => {
  return arr.map(el => Number.parseFloat(el));
};
console.log(getParsedFloat([3.1, -4.2]));
// result [3, -4.2]



const getParsedFloatV2 = arr => {
  return arr.map(el => parseFloat(el));
};
console.log(getParsedFloatV2([3.92, -4.2]));
// result [3, -4.2]


