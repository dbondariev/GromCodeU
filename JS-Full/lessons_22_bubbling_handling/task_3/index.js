const boxElement = document.querySelector('.task-status');

// bad option
// const boxStatus = () => {
//   const isChecked = boxElement.checked;
//   console.log(isChecked);
// }

// maybe better
// const boxStatus = () => {
//   console.log(boxElement.checked)
// };


// better
const boxStatus = () => console.log(boxElement.checked);

boxElement.addEventListener('change', boxStatus);