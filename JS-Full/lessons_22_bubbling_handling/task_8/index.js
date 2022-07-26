const elemOfBox = document.querySelector('.task-status');

const boxValue = event => {
  console.log(event.target.checked);
};

elemOfBox.addEventListener('change', boxValue);
