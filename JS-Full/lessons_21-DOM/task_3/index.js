// input - 
// output elements
export function getItemsList () {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

getItemsList();


// input - 
// output array
export function getItemsArray () {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementsArray);
  return elementsArray;
}

getItemsArray();