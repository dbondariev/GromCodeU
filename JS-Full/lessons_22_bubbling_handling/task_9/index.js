const handleClick = event => {
  console.log(event.currentTarget.dataset.pageNumber);
};

const itemsOfBtns = document.querySelectorAll('.pagination__page').forEach(item => {
  item.addEventListener('click', handleClick);
});
