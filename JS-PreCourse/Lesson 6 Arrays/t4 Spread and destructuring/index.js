/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
 const [start, ...rest] = numbers;
 return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
 const arr = numbers.slice();
 arr.push(arr.shift());
 return arr;
}
// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
