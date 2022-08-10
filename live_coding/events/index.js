// EVENTS:
// 1. types of events (top 5);
// 2.add events(witch even type & on which elemet to add event);
// 3. handlers(what to do when event is triggered);

// WEB FLOWL:
// 1.get data;
// 2.render data;
// 3.update data, don't update DOM!!!;
// 4.render updated data;

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createBtn = document.querySelector('.create-task-btn');
const checkboxElem = document.querySelector('.list__item-checkbox');

const tasks = [
 { id: Math.random().toString(), text: 'Buy milk', done: false },
 { id: Math.random().toString(), text: 'Pick up Tom from airport', done: false },
 { id: Math.random().toString(), text: 'Visit party', done: false },
 { id: Math.random().toString(), text: 'Visit doctor', done: true },
 { id: Math.random().toString(), text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
 [...listElem.children].forEach(listItem => listItem.remove());
 const tasksElems = tasksList
  .sort((a, b) => a.done - b.done)
  .map(({ id, text, done }) => {
   const listItemElem = document.createElement('li');
   listItemElem.classList.add('list__item');
   const checkbox = document.createElement('input');
   checkbox.setAttribute('type', 'checkbox');
   checkbox.dataset.id = id;
   checkbox.checked = done;
   checkbox.classList.add('list__item-checkbox');
   if (done) {
    listItemElem.classList.add('list__item_done');
   }
   listItemElem.append(checkbox, text);

   return listItemElem;
  });

 listElem.append(...tasksElems);
};

const createTask = () => {
 if (inputElem.value === '') {
  return;
 }

 tasks.push({ id: Math.random().toString(), text: inputElem.value, done: false });
 renderTasks(tasks);
 inputElem.value = '';
};

// const onToggleTask = e => {
//  const isCheckbox = e.target.classList.contains('list__item-checkbox');

//  if (!isCheckbox) {
//   return;
//  }

//  const taskData = tasks.find(task => task.id === e.target.dataset.id);
//  Object.assign(taskData, { done: e.target.checked });
//  renderTasks(tasks);
// };

// listElem.addEventListener('click', onToggleTask);

const markAsDone = event => {
 const targetElem = tasks.find(el => el.id === event.target.dataset.id);
 targetElem.done = !targetElem.done;
 renderTasks(tasks);
};

createBtn.addEventListener('click', createTask);
listElem.addEventListener('click', markAsDone);

renderTasks(tasks);
// Events:
