//Gleb's solution:

// const withdraw = (clients, balances, client, amount) => {
//remote logit from if 
//get rid of duplicated code
//dont use find

// BAD
//balances.find((balance, index) => clients[index] === client)

// GOOD
//balances[clients.indexOf(client)]


//     if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//         return -1;
//     }
//     return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

//IGor's solution:
//BAD
// const withdraw = (clients, balances, client, amount) =>{
//   return   balances[clients.indexOf(client)] >= amount
//         ? (balances[clients.indexOf(client)] -= amount)
//         : -1;

//const res = bool ? value1 : value2;
// }

//Oleksis's solution:
//Bad solution:
// const withdraw = (clients, balances, client, amount) => {
//     let clientBalance = balances[clients.indexOf(client)]
//     if (clientBalance >= amount) {
//         clientBalance -= amount;
//         balances[clients.indexOf(client)] = clientBalance;
//         return (clientBalance);
//     };

//     return -1;
// }


//Good solution:
// const withdraw = (clients, balances, client, amount) => {
//     const clientIndex = balances[clients.indexOf(client)];

//     if (balance[clientIndex] < amount) {
//         return -1
//     }
//     balances[clientIndex] -= amount;
//     return balances[clientIndex];
// };

// 'use strict';


//Serhiy's solution:
//Bad solution:
// const withdraw = (clients, balances, client, amount) => {
//     const curentClient = clients.indexOf(client);
//     const newBalance = balances[curentClient] - amount;
//     return newBalance > 0 ? newBalance : -1;
// };

//Denis's solution:
//Norm solution:
// const withdraw = function (clients, balances, client, amount) {
//     if (balances[clients.indexOf(client)] - amount < 0) {
//         return -1;
//     }
//     balances[clients.indexOf(client)] -= amount;
//     return balances[clients.indexOf(client)];
// };

// //Good solution:
// const withdraw = function (clients, balances, client, amount) {
//     const clientIndex = clients.indexOf(client);

//     if (balances[clientIndex] - amount < 0) {
//         return -1;
//     }

//     balances[clientIndex] -= amount;
//     return balances[clientIndex];
// };

//=========================================================================

//0.5 0
//Anna
// const getRandomNumbers = (length, from, to) => {
//     const arr = new Array(length);
//     if (to - from < 1) {
//         return null;
//     }
//     return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// 0.9 0
// const getRandomNumbers = (length, from, to) => {
//     if(Math.floor(to - from) < 1) {
//         return null;
//     }

//     const arr = new Array(length);
//     return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

//MY SOLUTION:

//INPUT: NUMBER(LENGHT OF NEW ARRAY) , NUMBER(START OF RANDOM INTERVAL), NUMBER(END OF RANDOM INTERVAL)
//OUTPUT: ARRAY OF RANDOM NUMBERS

//Algorithm:
//1. Convert from and to to smallest integer
//2. If to = from, return null
//3. Create new array of length(given as a parameter)
//4. Fill array with random numbers from given interval by using not Math.random() but Math.trunc(Math.random() * (to - from) + from) as asked in requirements.

//Don't forget to test your code!

const getRandomNumbers = (length, from, to) => {
    const fromCeil = Math.ceil(from);
    const toCeil = Math.ceil(to);

    if (toCeil === fromCeil) {
        return null;
    }

    const arr = new Array(length);
    return arr.map(() => Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
}

console.log(getRandomNumbers(5, 10, 10));
console.log(getRandomNumbers(10, 1, 1));
console.log(getRandomNumbers(5, -10, 10));


//input: number(integer) greater then 0
//output: number

//Algorithm:
//1. Create a funtion named maxFibonacci that takes a number as an argument
//2. Create tree variables:
//    a. Create a variable named fibonacci and set it to 1
//    b. Create a variable named fibonacciPrev and set it to 0
//    c. Create a variable named fibonacciNext and set it to 0
//3. Create a while loop that will iterate until fibonacciNext is greater than the number
//4. Run the loop and set fibonacciNext to fibonacci + fibonacciPrev
// export function maxFibonacci(num) {
//     let fibonacciPrev = 0;
//     let fibonacci = 1;
//     let fibonacciNext = 0;

//     while (fibonacciNext <= num) {
//         fibonacciNext = fibonacci + fibonacciPrev;
//         fibonacciPrev = fibonacci;
//         fibonacci = fibonacciNext;
//     }
//     return fibonacciPrev;
// }


// console.log(maxFibonacci(15));
// console.log(maxFibonacci(8));

