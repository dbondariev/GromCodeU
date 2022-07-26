/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
numbersList1.pop();
console.log(numbersList1);
//pop();
//input: none
//output:last element of array 

/* push - добавит элемент в конец массива */


// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];

//input :The element(s) to add to the end of the array.
//output: The new length property of the object upon which the method was called.
numbersList2.push(6);
console.log(numbersList2);

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift
const numbersList3 = [1, 2, 3, 4, 5];
const shiftRes = numbersList3.shift();
console.log(shiftRes);
console.log(`After shift: ${numbersList3}`);
/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];

numbersList4.unshift(0);
console.log(numbersList4);

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

//filter()
//input: callback(arr[i])
//output: newArr

//callback
//input: arr[i]
//output: boolean

//option 1
const filerRes = anotherNumbersList.filter(function filterCallback(element) {
    return element > 5;
}
);
console.log(filerRes);


//option 2
const filerRes2 = anotherNumbersList.filter(el => el > 5);
console.log(filerRes2);


function sum(from,to,resolver){
    let sum = 0;
    for(let i = from; i <= to; i++){
        sum += i;
    }
    resolver(sum);
}

function printResult(number) {
    console.log(number);
}

function funcAlert(number) {
    alert(number);
}

sum(1,10,printResult);

sum(1,10,funcAlert);