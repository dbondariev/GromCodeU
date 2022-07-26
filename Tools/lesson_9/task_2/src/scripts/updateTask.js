import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList, deleteTask } from './tasksGateway';

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  const isDelete = event.target.classList.contains('list-item__delete-btn');

  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const done = event.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  if (isCheckbox) {
    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
  if (isDelete) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};
