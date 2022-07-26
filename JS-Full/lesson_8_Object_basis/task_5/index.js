const keys = {
  name: 'James',
  age: 43,
  birthday: '10 of june',
  country: 'France',
}

const getKeys = obj => {
  
  for(let key in obj) {
    console.log(key);
  }
}

getKeys(keys)
