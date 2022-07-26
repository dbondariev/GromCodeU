/* eslint-disable no-unused-expressions */
// function countCharacters(char, string) {
//   return string.split('').reduce((acc, ch) => (ch === char ? acc + 1 : acc), 0);
// }

const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }
  return text.split(str).length - 1; 
}


const mainText = 'Today will be today';
const search = 'day';

const letSee = 'day by day';
const check = ''

console.log(countOccurrences(mainText, search));
console.log(countOccurrences(letSee, check));