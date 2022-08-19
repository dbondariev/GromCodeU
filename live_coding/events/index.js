// events
// 1. types of events (top-5)
// 2. add events (which event type & on which element)
// 3. handlers

// WEB FLOW
// 1. get data
// 2. render
// 3. update data, don't update DOM (!!!!)
// 4. re-render

const tasks = [
 { text: 'Buy milk', done: false },
 { text: 'Pick up Tom from airport', done: false },
 { text: 'Visit party', done: false },
 { text: 'Visit doctor', done: true },
 { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
 listElem.innerHTML = '';

 const tasksElems = tasksList
  .sort((a, b) => a.done - b.done)
  .map(({ text, done }) => {
   const listItemElem = document.createElement('li');
   listItemElem.classList.add('list__item');
   const checkbox = document.createElement('input');
   checkbox.setAttribute('type', 'checkbox');
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

renderTasks(tasks);

// ======
const onToggleTask = e => {
 const isCheckbox = e.target.classList.contains('list__item-checkbox');

 if (!isCheckbox) {
  return;
 }

 const taskData = tasks.find(task => task.id === e.target.dataset.id);
 Object.assign(taskData, { done: e.target.checked });
 renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);
