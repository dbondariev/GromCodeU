const elemBtn = document.querySelector('.search__btn');
const elemInput = document.querySelector('.search__input');

const logText = () => {
  console.log(elemInput.value);
}

elemBtn.addEventListener('click', logText)