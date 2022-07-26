//1 функция должна вернуть новый массив то прежний оставить неизменным...значит внутри ф-ции надо создать массив и с ним работать...
//2 может понадобится if/ если значение > 18, то верни в объект ключ и значение

const getAdults = obj => {
  let newObj = {};
  for(let key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};



console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ Ann: 56, Andrey: 7 }))
console.log(getAdults());