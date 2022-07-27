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
 const arr = [];
 arr.push(numbers.shift());
 return arr;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
