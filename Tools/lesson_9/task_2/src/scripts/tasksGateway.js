const baseUrl = 'https://6151c2184a5f22001701d3f3.mockapi.io/api/v1/users';

const mapTask = (tasks) => tasks.map(({ id, ...rest }) => ({ ...rest, id }));
export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => mapTask(tasks));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
