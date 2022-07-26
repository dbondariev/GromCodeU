// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     const nameSurname = fullName.split(' ');
//     const getName = nameSurname[0];
//     this.firstName = getName;
//     const getSurname = nameSurname[1];
//     this.lastName = getSurname;
//   },
// };

// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('Оригинальная строка: "' + stringToSplit + '"');
//   console.log('Разделитель: "' + separator + '"');
//   console.log(
//     'Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '),
//   );
// }

// // Строчка из «Бури» Шекспира. Перевод Михаила Донского.
// var tempestString = 'И как хорош тот новый мир, где есть такие люди!';
// var monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';

// var space = ' ';
// var comma = ',';

// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);

const user = {
  'customer-1': {
    name: 'William',
    age: 17,
    birthday: '31 of may'
  },
  'customer-2': {
    name: 'Sara',
    age: 31,
    birthday: '12 of april'
  }
}

console.log(Object.entries(user));