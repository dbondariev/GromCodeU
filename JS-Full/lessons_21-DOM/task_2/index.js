// input - 
// output element (title)

export function getTitleElement() {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

getTitleElement();


// input - 
// output element (input)
export function getInputElement() {
  const inputElem = document.querySelector('input[type=text]');
  console.dir(inputElem);
  return inputElem;
}

getInputElement();
