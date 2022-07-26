const handleClick = event => {
  console.log(event.target.textContent);
};

const itemsOfBtns = document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', handleClick);
});

// const itemsOfBtns = document.querySelectorAll('.btn').forEach(item => {
//   item.addEventListener('click', event => {
//     console.log(event.target.textContent);
//   });
// });
