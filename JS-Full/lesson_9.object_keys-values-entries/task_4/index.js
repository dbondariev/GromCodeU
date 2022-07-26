const user = {
  name: 'Sam',
};
// addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
}

console.log(addPropertyV1(user, '1234567'));

const addPropertyV2 = (userData, userId) => {
  Object.assign( userData, { id: userId });
  return userData;
};

console.log(addPropertyV2(user, '2345671'));

const addPropertyV3 = (userData, userId) => {
  let copyObj = {};
  Object.assign(copyObj, userData, { id: userId });
  // console.log(userData);
  return copyObj;
};

console.log(addPropertyV3(user, '3456712'));

const addPropertyV4 = (userData, userId) => {
  let copyObj = { ...userData };
  Object.assign(copyObj, { id: userId });
  //console.log(userData);
  return copyObj;
};

console.log(addPropertyV4(user, '3456712'));