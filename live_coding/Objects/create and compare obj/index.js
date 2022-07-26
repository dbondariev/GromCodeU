//Algorithm:
// 1. Create an empty object
// 2. Loop through the keysList
// 3. Assign the value of the current index to the current key
// 4. Return the object

//Do not change the code below

// const buildObject = (keysList, valuesList) =>
//     keysList.reduce((obj, item, index) => Object.assign(obj, { [item]: valuesList[index] }), {});

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

// first draft.
// const buildObject = (keysList, valuesList) => {
//     const obj = {};
//     for(let i = 0; i < keysList.length; i++) {
//         obj[keysList[i]] = valuesList[i];
//     }
//     return obj;
// }

//test data:
const keys = ['name', 'address', 'age'];//['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];// ==> { name: 'Bob', address: 'Ukraine', age: 56 }
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }


// second draft.
// function buildObject(keysList, valuesList) {
//     return keysList.reduce((obj, item, index) => Object.assign(obj, { [item]: valuesList[index] }), {});
// }

// console.log(buildObject(keys, values));

//final solution:
// 'use strict';
// /**
//  * @param {string[]} keysList
//  * @param {array} valuesList
//  * @return {object}
//  */



// function buildObject(keysList, valuesList) {
//     return keysList.reduce(
//         (obj, key, index) => ({
//             ...obj,
//             [key]: valuesList[index],
//         }),
//         {},
//     );
// }




//CompareObjects();
//input: obj obj
//output boolean

//Algorithm:
// 1. get key1 , key2
// 2. if length of key1 and key2 is not equal return false
// 3. iterate keys1
// 4. if key1[i] is not equal to key2[i] return false
// 5. if key1[i] is not equal to key2[i] return false

const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    age: 17,
};

const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
};

const obj4 = {
    name: 'Tom',
    age: 17,
};

function compareObjects(obj1, obj2) {
    const first = [].concat(...Object.entries(obj1));
    const second = [].concat(...Object.entries(obj2));
    let count = 0;
    if (first.length !== second.length) {
        return false;
    }
    if (first.length === second.length) {
        first.forEach(el => (!second.includes(el) ? (count += 1) : false));
    }
    return count === 0;
}

console.log(compareObjects(obj1, obj2));//false
console.log(compareObjects(obj1, obj3));//false
console.log(compareObjects(obj1, obj4));//true
console.log(compareObjects(obj2, obj3));//false
console.log(compareObjects(obj2, obj4));//true
console.log(compareObjects(obj3, obj4));//true
console.log(compareObjects(obj1, obj1));//true
console.log(compareObjects(obj2, obj2));//true
console.log(compareObjects(obj3, obj3));//true
console.log(compareObjects(obj4, obj4));//true
console.log(compareObjects(obj1, obj4));//false
console.log(compareObjects(obj2, obj3));//false
console.log(compareObjects(obj2, obj4));//true
console.log(compareObjects(obj3, obj4));



