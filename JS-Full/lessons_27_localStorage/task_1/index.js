localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));

export const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

console.log(getLocalStorageData());
