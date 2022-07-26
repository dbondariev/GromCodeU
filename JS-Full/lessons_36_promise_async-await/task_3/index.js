export const getUsersBlogs = async arr => {
  const mainLink = `https://api.github.com/users`;
  try {
    const usersArray = userId =>
      fetch(`${mainLink}/${userId}`)
        .then(response => response.json())
        .catch(error => {
          throw new Error(error.text);
        });

    const users = await Promise.all(arr.map(arrElem => usersArray(arrElem)));
    const getLinks = users.map(url => url.blog);
    return getLinks;
  } catch (error) {
    throw new Error(error.text);
  }
};

// console.log(getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList))); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// console.log(getUsersBlogs(['microsoft']).then(linksList => console.log(linksList))); // ==> ["https://opensource.microsoft.com"]

'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = users => {
  const mainLink = `https://api.github.com/users`;
  return Promise.all(
    users.map(userId =>
      fetch(`${mainLink}/${userId}`)
        .then(response => response.json())
        .catch(error => {
          throw new Error(error.text);
        }),
    ),
  ).then(users => users.map(url => url.blog));
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
