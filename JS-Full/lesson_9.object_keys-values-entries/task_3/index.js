// const transaction = {
//   value: 170,
//   name: 
// };

// //
// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// console.log(addPropertyV1(transaction, 'currency', 'USD1'));
// // addPropertyV1(transaction, 'currency', 'USD');
// //{ value: 170, currency: 'USD' }

// function addPropertyV2(obj, key, value) {
//   Object.assign(obj, { [key]: value });
//   return obj
// }
// console.log(addPropertyV2(transaction, 'currency', 'USD2'));

// function addPropertyV3(obj, key, value) {
  // let copyObj = {};
//   Object.assign(copyObj,  obj, { [key]: value });
//   return obj;
// }

// console.log(transaction);
// console.log(addPropertyV3(transaction, 'currency', 'USD3'));

// function addPropertyV4(obj, key, value) {
//   let copyObj = { ...obj };
//   Object.assign(copyObj, { [key]: value });
//   return copyObj;
// }

// console.log(addPropertyV4(transaction, 'currency', 'USD4'));


//вывести все ключи в консоле
const transaction = {
  value: 170,
  name: 'Danna'
};

function getKeys(obj) {
Object.keys(obj).forEach(keys =>{
     console.log(keys);
 });
};

getKeys(transaction);

