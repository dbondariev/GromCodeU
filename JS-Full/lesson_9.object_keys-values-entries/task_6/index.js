// const customers = {
//   'customers-id-1': {
//     name: 'Willian',
//     age: 54,
//   },
//   'customers-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// const getCustomersList = obj => {
//   let copy = Object.entries(obj).map()
//    console.log(copy);
//   };

//   // const result = getCustomersList(customers);
//   console.log(getCustomersList(customers));


const rooms = {
  room1: [
    {name: 'Jack'},
    {name: 'Ann'},
    {name: 'Helen'},
  ],
  room2: [
    {name: 'Dan'},
    {name: 'Felix'},
  ],
  room3: [
    {name: 'Olya'},
    {name: 'Sara'},
    {name: 'Michael'},
  ] 
}

  
const getPeople = obj => 
  Object.values(obj)
  .flat()
  .map(({ name }) => name);


console.log(getPeople(rooms));





// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));//Сортировка с функцией compareNumbers: 1,5,40,200