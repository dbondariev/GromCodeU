import { showSpinner, hideSpinner } from './src/scripts/spinner.js';
import { fetchUserData, fetchReposData } from './src/scripts/requests.js';
import { renderUserData, renderRepos } from './src/scripts/render.js';

const userNameFormInput = document.querySelector('.name-form__input');
const showUserBtnElem = document.querySelector('.name-form__btn');

const onSearchUser = () => {
  showSpinner();
  const userName = userNameFormInput.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchReposData(url))
    .then(reposList => {
      renderRepos(reposList);
      hideSpinner();
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
