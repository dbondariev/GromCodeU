//Advanced Array Metods:

//1. .map()//map() is a method that allows you to iterate over an array and perform an operation on each element.
const numbersList = [5, 0, 8, 10, -4, 50, 220];

//map()
//input: callback function.
//output: new array.

//callback function:
//input: current value, index, array.
//output: new value.

//option 1:
// const mapRes =numbersList.map(el=>{
//     const newEl = el * 2;
//     return newEl;
// });
// console.log(mapRes);//[5,0,8,10,-4,50,220]

//option 2:
// const mapRes =numbersList.map(el=>el * 2);
// console.log(mapRes);//[5,0,8,10,-4,50,220]


//2. .forEach()//forEach() is a method that allows you to iterate over an array and perform an operation on each element.

//.forEach()
//input: callback function.
//output: undefined.

//callback function:
//input: current value, index, array.
//output: undefined.

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// numbersList.forEach(el=>{
//     if(el>0){
//         console.log(el);
//     }
// });


//3. .reduce()//reduce() is a method that allows you to iterate over an array and perform an operation on each element.

//input: callback function.
//output: new value.



/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//option 1:
// transactions.reduce((sum, el) => {
//     console.log('sum: ', sum);
//     console.log('element: ', el);
//     if (el > 100) {
//         sum += el;
// }
//     return sum;
// }
//     , 0);

//     console.log(transactions);

//option 2:
//  const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
//     console.log(reduceSum);



/* sort - отсортирует массив в заданом порядке */

//input: callback function.
//output: new array.

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];
const sortedArr1 = numbersList1.sort((a, b) => b - a);
// console.log(sortedArr1);//[43,33,20,6,8]

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// numbersList2.sort((a, b) => b - a);
// console.log(numbersList2);//[43,33,20,6,8]


function run() {
    var a = 0;

    if (a == 1) {
        return c;
    }

    for (let i = 1; i < 10; i++) {
        console.log(i);
    }

    return (d = a);
}

run();
