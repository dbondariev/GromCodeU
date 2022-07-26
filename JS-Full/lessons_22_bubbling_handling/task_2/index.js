const elemOfInput = document.querySelector('.text-input');

const valueOfInput = () => {
  console.log(elemOfInput.value);
}

elemOfInput.addEventListener('change', valueOfInput);