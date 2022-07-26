// input array 
// output new array


// 1. Объявить новый массив
// 2. Сортировка (содержание букв, убрать пробелы)
// 3. Элементы массива - строки с 2 знаками после ',' с $ в начале


const cleanTransactionsList = arr => {
  const newArr = arr
    .filter(element => typeof +element === 'number' && !isNaN(element))
    .map(element => '$' + (+element).toFixed(2));
  return newArr;
}


const transactionsList = ['    19 ', '16.4', '1 dollar']
console.log(transactionsList);
console.log(cleanTransactionsList(transactionsList));