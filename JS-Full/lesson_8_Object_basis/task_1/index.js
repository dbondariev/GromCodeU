const prop = 'my';

const obj = {
  name: 'Tom',
  age: 17,
  interesr: 'football',
  'my name': 'Helen',
  [prop + 'name']: 'value',
};

console.log(obj.age); //17

obj.age = 19;

console.log(obj.age); //19

console.log(obj['my name']);// второй способ обращения к ключу объекта
console.log(obj[prop + 'name']);

const transfotmToObj = arr => {
  let obj = {};
  arr.forEach(el => {
    obj[el] = el;
  })

  return obj;
}

// [1, 'text] => {'1': 1, text: 'text'}
const arr = [1, 'text']
console.log(transfotmToObj(arr));