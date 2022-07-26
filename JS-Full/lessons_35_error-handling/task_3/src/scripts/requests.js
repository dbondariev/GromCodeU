export const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });

export const fetchReposData = url =>
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
