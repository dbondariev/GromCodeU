// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

function mergeObjectsV1(obj1, obj2) {
  const copyObj = Object.assign(obj1, obj2);
  return copyObj;
}

// console.log(mergeObjectsV1(obj1, obj2));
// ==> { name: 'Bob', age: 17, student: false }

function mergeObjectsV2(obj1, obj2) {
  const copyObj = Object.assign(obj2, obj1);
  return copyObj;
}

// console.log(mergeObjectsV2(obj1, obj2));
// ==> { name: 'Tom', age: 17, student: false }

function mergeObjectsV3(obj1, obj2) {
  const copyObj = Object.assign(obj1, { ...obj2 });
  return copyObj;
}

// console.log(mergeObjectsV3(obj1, obj2));
// ==> { name: 'Bob', age: 17, student: false }

function mergeObjectsV4(obj1, obj2) {
  const copyObj = Object.assign(obj2, { ...obj1 });
  return copyObj;
}

// console.log(mergeObjectsV4(obj1, obj2));
 // ==> { name: 'Tom', age: 17, student: false }
