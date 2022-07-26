export const finishForm = () => {
  const changeInputType = document.querySelector('input');
  changeInputType.setAttribute('type', 'password')
  const formElem = document.querySelector('.login-form');
  const getInput = document.createElement('input');
  getInput.setAttribute('name', 'login');
  getInput.setAttribute('type', 'text');
  formElem.prepend(getInput);
}

