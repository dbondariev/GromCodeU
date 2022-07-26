const customers = {
    'customers-id-1': {
        name: 'William',
        age: 54,
    },
    'customers-id-2': {
        name: 'Tom',
        age: 17,
    },
    'customers-id-3': {
        name: 'John',
        age: 34,
    },
    'customers-id-4': {
        name: 'Maria',
        age: 25,
    },
};

//input: customers object
//output: array of objects with id and name and age

//Algorithm:
// 1. Create a new array
// 2. Sort the object by age
// 3. Get the values
// 4. Get the keys
// 5. Create a new object with the values and keys
// 6. Push the new object to the new array
// 7. Return the new array

//Draft Algorithm:
// 1. get array keys[id, name, age]
// 2. iterate array keys on every step and create a new object with the values and keys
// 3. 

//Final Algorithm:
// 1. get array of key-values = entries [[]]]
// 2. iterate array of entries = on every step create new object with key and value
// 3. sort array of entries by age
// 4. return array of objects with id and name and age

//Dont't forget to test your code

//first solution:
// const getCustomersList = obj => {// obj is the object we want to get the keys from
//     const newArray = [];// create a new array
//     const sortedObject = Object.entries(obj).sort((a, b) => a[1].age - b[1].age);// sort the object by age
//     const values = sortedObject.map(item => item[1].name);// get the values
//     const keys = sortedObject.map(item => item[0]);// get the keys
//     const newObject = keys.map((key, index) => ({ id: key, name: values[index] }));// create a new object with the values and keys
//     newArray.push(...newObject);// push the new object to the new array
//     return newArray;// return the new array
// }

// final solution
// const getCustomersList = obj => {// obj is the object we want to get the keys from
//     const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age);// sort the object by age
//     const first = order.map(el => el[1]);// get the values    
//     const second = order.map(el => el[0]);// get the keys
//     return first.map((el, index) => ({ ...el, id: second[index] }));// print the values and keys
// };

// console.log(getCustomersList(customers));


//Andrey solution:
//Good Solution 
// const getCustomersList = obj =>
//     Object.entries(obj)
//         .map(([id, customer]) => ({ id, ...customer }))
//         .sort((a, b) => a.age - b.age);

//         console.log(getCustomersList(customers));

//Annas Solution :
//Good Solution
// 1.Use array destructuring
// const getCustomersList = obj => {
//     return Object.entries(obj)
//         .map(arr => ({ ...arr[1], id: arr[0] }))
//         .sort((a, b) => a.age - b.age);
// };


//Romans solution:
//1. use push instead of concat 
//2 . use map ionstead of concat
//3. rename data
// const getCustomersList = (customers) =>
//     Object.entries(customers)
//         .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//         .sort((a, b) => a.age - b.age);


//Alexands solution:
//Good
// const getCustomersList = obj =>
//     Object.entries(obj)
//         .map(([id, customer]) => ({ id, ...customer }))
//         .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);


//Anastasia solution:
//bad
// 1. dont use values
// 2. dont use index
// 3. bad naming
// const getCustomersList = obj => {
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);

//     return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
// };


//Oleksii solution:
//Bad
// 1. dont use values
// 2. dont use index
// 3. bad naming
// 4. remove redunt variables
// const getCustomersList = obj => {
//     const customersIdList = Object.keys(obj);

//     const resultArray = Object.values(obj)
//         .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//         .sort((a, b) => a.age - b.age);
//     return resultArray;
// };

//Alexandra solution:
//bad
// const getCustomersList = obj => {
//     if (obj === {}) {
//         return [];
//     }

//     const keys = Object.keys(obj);
//     const arr = Object.values(obj);

//     arr.map((el, index) => {
//         el.id = keys[index];
//     });
//     arr.sort((a, b) => +a.age - +b.age);

//     console.log(arr);
//     console.log(obj);

//     return arr;
// };


//vitaliys solution:
//bad
// dont use shift
// fix esling errors!!!
// bad naming
//redundant variables
// const getCustomersList = obj => {
//     const moderArr = Object.entries(obj).map(arr => {
//         let id = { id: arr.shift() };
//         return (arr[0] = { ...arr[0], ...id });
//     });

//     return moderArr.sort((a, b) => a.age - b.age);
// };

//zhennia solution :
//dont use index

// const getCustomersList = customers =>
//  Object.keys(customers).reduce((resArray, key) => {
//      resArraypush() = { id: key, ...customers[key] };
//      return resArray;
// }, [])
//     .sort((a, b) => a.age - b.age);


//==========================================================
// Final Algorithm:
// 1. get array of key-values = entries [[]]]
// 2. iterate array of entries = on every step create new object with key and value
// 3. sort array of entries by age
// 4. return array of objects with id and name and age

// Dont't forget to test your code


const getCustomersList = obj => {
    return Object.entries(obj)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((a, b) => a.age - b.age);
}
