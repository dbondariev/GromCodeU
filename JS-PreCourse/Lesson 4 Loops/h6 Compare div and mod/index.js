let sum = 0;

for (let i = 1; i <= 1000; i += 1) {
 sum += i;
}

if (sum % 1234 < Math.trunc(sum / 1234)) {
 console.log(true);
} else {
 console.log(false);
}
