const checkText = 'If you wanna dance, dance!';


// input string, number = 10
// output array...

const splitString = (str, len = 10) => {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    if (typeof str !== 'string') {
      return null;
    }

    let chunk = str.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }

    chunk = chunk.padEnd(len, '...');
    strArr.push(chunk);
    startPosition += len;
  }

  return strArr;
};
console.log(splitString(checkText, 4));
console.log(splitString(checkText, 6));
console.log(splitString(checkText));



