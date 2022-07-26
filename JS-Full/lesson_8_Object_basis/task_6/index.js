const pickProps = (obj, props) => {
  let newObj = {};

  for (let key in obj) {
    props.forEach(key => {
      newObj[key] = obj[key];
    });
  }
  return newObj;
};

// const pickProps = (obj, props) => {
//   const newObj = {};

//   for (const key in obj) {
//     props.forEach(key => {
//       if (newObj[key] !== obj[key]) {
//         newObj[key] = obj[key];
//       }
//     });
//   }
//   return newObj;
// };
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));
