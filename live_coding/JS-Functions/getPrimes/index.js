
//How to work on tech tasks. Step by step guide

//1.Learn requirement (WHAT?)
//2.Create step by step algorithm (& input for functions)(HOW)
//3.Write draft solution & testing
//4.Refactoring & final testing -> final solution

//Algorithm:
//1.Iterate from 2 to num
//2.check if Number is prime
//2.1.iterate from 2 to N
//2.2if N is divisible by i, then N is not prime
//3.if prime, print it.


//Draft solution:
function getPrimes2(num) {
    for (let number = 2; number <= num; number++) {
        let isPrime = true;
        for (let index = 2; index < number; index++) {
            if (number % index === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}

//Test data:
getPrimes2(10);
//[2, 3, 5, 7]
getPrimes2(15);
//[2, 3, 5, 7, 11, 13]
getPrimes(7);
//[2, 3, 5, 7]

/**
 * @param {number} num
 * @return {undefined}
 */

//Final solution:
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

function getPrimes(num) {
    for (let number = 2; number <= num; number++)
        if (isPrime(number)) {
            console.log(number);
        }
}


//Test data:
getPrimes(10);
//[2, 3, 5, 7]
getPrimes(15);
//[2, 3, 5, 7, 11, 13]
getPrimes(7);
//[2, 3, 5, 7]
