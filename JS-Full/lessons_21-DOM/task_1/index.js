const tasks = [
  { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: false },
];

const renderListItems = listItems => {
  const listElem = document.querySelector('.list');
  const listItemsElems = listItems
  .sort((a, b) => a.done - b.done)
  .map(( { text, done }) => {
    // сформировать html элементы -> create element
    const listItemElem = document.createElement('li');

    // к listItem добвить стили
    listItemElem.classList.add('list__item');
    // пункт выполнен
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    // добавить чекбокс
    const checkboxElem = document.createElement('input');

    // указать тип : checkbox
    checkboxElem.setAttribute('type', 'checkbox');
    // значение done
    // checkboxElem.setAttribute('checked', done); // возвращает строку. строка не пустая и всегда будет true. плохой вариант
    checkboxElem.checked = done;
    checkboxElem.classList.add('.list__item-checkbox');

    // 1. добавить чекбокс в li елемент
    // 2. добавить текст в listItem
    listItemElem.append(checkboxElem, text);

    return listItemElem;
  });
  
  listElem.append(...listItemsElems);
}


renderListItems(tasks);
// /**
//  * @param {object[]} tasksList
//  * @return {undefined}
//  */
// const renderTasks = tasksList => {
//   // put your code here
// };
