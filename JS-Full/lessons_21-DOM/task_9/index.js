// bad option
export const finishList = () => {
  const newProductElem1 = document.createElement('li');
  newProductElem1.textContent = '1';
  const listElem1 = document.querySelector('.list');
  listElem1.prepend(newProductElem1);

  const newListElem4 = document.createElement('li');
  newListElem4.textContent = '4';
  const listElem4 = document.querySelector('.special');
  listElem4.before(newListElem4);

  const newListElem1 = document.createElement('li');
  newListElem1.textContent = '6';
  const listElem2 = document.querySelector('.special');
  listElem2.after(newListElem1);

  const newListElem = document.createElement('li');
  newListElem.textContent = '8';
  const listElem = document.querySelector('.list');
  listElem.append(newListElem);
};


