import { showSpinner, hideSpinner } from './src/scripts/spinner.js';
import { fetchUserData, fetchReposData } from './src/scripts/requests.js';
import { renderUserData, renderRepos } from './src/scripts/render.js';

const userNameFormInput = document.querySelector('.name-form__input');
const showUserBtnElem = document.querySelector('.name-form__btn');

const onSearchUser = async () => {
  showSpinner();
  try {
    const userName = userNameFormInput.value;
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const repoList = await fetchReposData(userData.repos_url);
    renderRepos(repoList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

showUserBtnElem.addEventListener('click', onSearchUser);
