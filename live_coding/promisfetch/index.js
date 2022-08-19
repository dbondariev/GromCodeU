const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const email = document.querySelector('#email');
const userName = document.querySelector('#name');
const password = document.querySelector('#password');
const error = document.querySelector('.error-text');

const baseUrl = 'https://62d55c2c15ad24cbf2c55d15.mockapi.io/api/v1/users';

const getUserData = () => fetch(baseUrl).then(response => response.json());

const saveUser = userData =>
 fetch(baseUrl, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(userData),
 });

const onSendUserData = event => {
 event.preventDefault();

 const userData = {
  email: email.value,
  name: userName.value,
  password: password.value,
 };

 saveUser(userData)
  .then(data => data.json())
  .then(data => {
   alert(JSON.stringify(data));
   loginForm.reset();
  })
  .catch(() => {
   error.textContent = 'Failed to create user';
   return error;
  });
};

const checkValidForm = () =>
 loginForm.reportValidity()
  ? submitBtn.removeAttribute('disabled', 'disabled')
  : submitBtn.setAttribute('disabled', 'disabled');

const cleanError = () => {
 error.innerHTML = '';
};

submitBtn.addEventListener('click', onSendUserData);
loginForm.addEventListener('input', checkValidForm);
loginForm.addEventListener('input', cleanError);
