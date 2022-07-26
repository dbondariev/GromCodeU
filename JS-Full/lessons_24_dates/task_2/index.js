// форматирование даты и времени:
const formatter = new Intl.DateTimeFormat('en', {
  nimeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

const getGreenwichTime = date => formatter.format(date);

console.log(getGreenwichTime(new Date()));