const oneClick = document.querySelector('.single-use-btn');

const consoleClicked = () => {
  console.log('clicked');
  oneClick.removeEventListener('click', consoleClicked);
};

oneClick.addEventListener('click', consoleClicked);
