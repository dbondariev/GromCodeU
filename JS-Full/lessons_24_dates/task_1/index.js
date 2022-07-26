// нужно узнать какой это день недели ->
// перевести числов строковый день недели ->
const weekOfDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

// этот метод будет принимаьб дату и количество дней вторым параметром, которые нужно прибавить
export const dayOfWeek = (date, days) => {
  // нужно узнать какая дата уже есть ->
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days); // установить новую дату через метод setDate

  return weekOfDays[new Date(dateInFuture).getDay()];
}

const getANewDate = dayOfWeek(new Date(2021, 9, 10), 14);

console.log(getANewDate); // 24
// console.log(new Date(getANewDate)); 
// Sun Oct 24 2021 00:00:00 GMT+0300 (GMT+03:00)