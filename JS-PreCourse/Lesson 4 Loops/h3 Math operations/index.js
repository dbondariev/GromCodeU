const start = 2;
const end = 6;
let result = 0;

for (let i = start; i <= end; i += 1) {
 if (i % 2 === 0 && i % 4 !== 0 && i % 5 !== 0) {
  result += i;
 } else if (i % 3 === 0 && i % 5 !== 0) {
  result -= i;
 } else if (i % 4 === 0 && i % 5 !== 0) {
  result *= i;
 } else if (i % 5 === 0) {
  console.log(i);
 }
}
