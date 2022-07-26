// // const data = [1, 2, 3, 4, 5];

// Array.prototype.myCustomFilter = function (fn) {
//     const filtered = []; // it will receive all values that match to condition passed in fn callback.

//     for (let i = 0; i < this.length; i++) {// loop through all values in array
//         if (fn(this[i])) {// if value matches to condition passed in fn callback
//             filtered.push(this[i]);// push value to filtered array
//         }
//     }

//     return filtered;// return filtered array
// };

// const filteredData = data.myCustomFilter(function (el) {// filter data using myCustomFilter method
//     if (el > 2) return el;// return all values that are greater than 2
// });

// console.log(filteredData);// [3, 4, 5]


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const filterArrayElements = (arr, callback) => {

    const filtered = [];

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (callback(el, i, arr)) {
            filtered.push(el);
        }
    }

    return filtered;
};

const arr = [1, 2, 11, 0, -5, 50, 40, 8, NaN];
const testCallback = (el,index,arr) => {
    return el > 10 && index > 5 && arr.length > 5;
}

console.log(filterArrayElements(arr, testCallback));

function multiply(...args) {
    return args.reduce((acc, el) => acc * el, 1);
}

// function multiply() {
//     console.log(arguments);
// }

console.log(multiply(10,2,5));


// console.log(filterArrayElements(data, callback));// [3, 4, 5]

//input: array, callback function
//output: filtered array

//callback:
//input: element, index(optinal), array (optinal)
//output: boolean

//Algorithm:
//1. Create a new array
//2. Loop through the array
//3. If the callback function returns true, push the element to the new array
//4. Return the new array

// const callback = (el, index, arr) => {
//     return el > 2;
// }

// const filterArrayElement = (arr, callback) => {
//     const filtered = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             filtered.push(arr[i]);
//         }
//     }

//     return filtered;
// }



const mapArrayElements = (arr, callback) => {
    const mapped = [];

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        mapped.push(callback(el, i, arr));
    }

    return mapped;
};
const array = [1, 2, 11, 0, -5, 50, 40, 8, NaN];
console.log(mapArrayElements(array, (el) => el * 2));// [2, 4, 22, 0, -10, 100, 80, 16, NaN]
