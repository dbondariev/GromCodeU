
/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

function getSenseOfLife() {
    return 42;
}
//----test data
console.log(getSenseOfLife());

// const getSenseOfLife = () => 42;

// console.log(getSenseOfLife());

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

function getSquared(num) {
    return num * num;
}



//----test data
console.log(getSquared(5));

// const getSquared = num => num * num;

// console.log(getSquared(5));

/* ф-ция sum должна принимать два числа и вернуть их сумму */

function sum(numOne, numTwo) {
    return numOne + numTwo;
}
//----test data
console.log(sum(5, 6));




// const sum = (num1, num2) => num1 + num2;

// console.log(sum);


/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

function printMessage(age) {
    return(`I am ${age} years old`);
}
//----test data
console.log(printMessage(34));
console.log(printMessage())
console.log(printMessage('34'));




// const sum = num => console.log(`I am ${num} years old`);

// console.log(sum);
function sumFromTo(from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result;
}
console.log(sumFromTo(1, 10));

function comareSums(firstFrom,firstTo,secondFrom,secondTo) {
    return sumFromTo(firstFrom,firstTo) > sumFromTo(secondFrom,secondTo);
}

console.log(comareSums(1, 100, 1, 100));
console.log(comareSums(1, 10, 1, 11));
console.log(comareSums(5, 20, 5, 200));
console.log(comareSums(3, 13, 3, 11));


/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

const mult = (numOne, numTwo) => numOne * numTwo;
//----test data
console.log(mult(5, 6));
console.log(mult(0, 6));
console.log(mult(-2, 6));
console.log(mult('5', 6));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

const square = num => num * num;
//----test data
console.log(square(5));
console.log(square(0));
console.log(square(-2));
console.log(square('5'));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

const getMagicNumber = () => 17;
//----test data
console.log(getMagicNumber());
console.log(getMagicNumber('17'));
console.log(getMagicNumber(17));
console.log(getMagicNumber(17, '17'));

console.log(getSquared(sum(10, 20)));
