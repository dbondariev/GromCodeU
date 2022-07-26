/* eslint-disable camelcase */
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userRepoUrl = document.querySelector('.repo-list');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

export const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
  console.log(userData);
};

export const renderRepos = repoList => {
  userRepoUrl.innerHTML = '';
  const repoListElem = repoList.map(({ name }) => {
    const userRepoUrlLits = document.createElement('li');
    userRepoUrlLits.classList.add('repo-list__item');
    userRepoUrlLits.textContent = name;

    return userRepoUrlLits;
  });
  userRepoUrl.append(...repoListElem);
};
