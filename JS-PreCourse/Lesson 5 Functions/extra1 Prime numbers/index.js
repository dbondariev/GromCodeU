function isPrime(num) {
 if (num === 2 || num === 3) {
  return true;
 }
 if (num === 1) {
  return false;
 }

 if (num >= 4) {
  for (let i = 2; i < num; i += 1) {
   if (num % i === 0) {
    return false;
   }
  }
 }
 return true;
}

function getPrimes(endNum) {
 for (let i = 1; i <= endNum; i += 1) {
  if (isPrime(i) === true) {
   console.log(i);
  }
 }
}
