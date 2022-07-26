const elemOfInput = document.querySelector('.text-input');

const inputValue = event => {
  console.log(event.target.value);
}

elemOfInput.addEventListener('change', inputValue);