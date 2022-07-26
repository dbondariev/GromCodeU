import { onCreateTask } from "./createTask.js";
import { onToggleTask } from "./updateTask.js";
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);
  var todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);
};