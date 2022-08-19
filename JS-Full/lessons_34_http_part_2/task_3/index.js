const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const serverUrl = 'https://62d55c2c15ad24cbf2c55d15.mockapi.io/api/v1/users';

const validateFormHandler = () => {
 if (loginForm.reportValidity()) {
  submitBtn.removeAttribute('disabled');
 } else {
  submitBtn.setAttribute('disabled', true);
 }
};
loginForm.addEventListener('input', validateFormHandler);

const createUserHandler = event => {
 event.preventDefault();

 const user = Object.fromEntries(new FormData(loginForm));

 fetch(serverUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
 })
  .then(response => response.json())
  .then(body => {
   loginForm.reset();
   alert(JSON.stringify(body));
  })
  .catch(() => {
   errorText.textContent = 'Failed to create user';
  });
};
loginForm.addEventListener('submit', createUserHandler);
