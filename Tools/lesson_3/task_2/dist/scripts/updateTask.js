import "core-js/modules/es.array.find.js";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";
export var onToggleTask = function onToggleTask(event) {
  var isCheckbox = event.target.classList.contains("list-item__checkbox");
  var isDelete = event.target.classList.contains("list-item__delete-btn");
  var taskId = event.target.dataset.id;
  var tasksList = getItem("tasksList");

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var done = event.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };

  if (isCheckbox) {
    updateTask(taskId, updatedTask).then(function () {
      return getTasksList();
    }).then(function (newTasksList) {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
  }

  if (isDelete) {
    deleteTask(taskId).then(function () {
      return getTasksList();
    }).then(function (newTasksList) {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
  }
};