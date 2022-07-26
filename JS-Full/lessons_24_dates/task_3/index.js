const SEC = 1000;
const MINUTE = 60 * SEC;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const getDiff = (startData, endData) => {
  const differInDates = Math.abs(startData - endData);

  const seconds = Math.floor((differInDates % MINUTE) / SEC);
  const minutes = Math.floor((differInDates % HOUR) / MINUTE);
  const hours = Math.floor((differInDates % DAY) / HOUR);
  const days = Math.floor(differInDates / DAY);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`
};

const firstData = new Date(Date.UTC(1993, 2, 31, 6, 5, 30, 30));
const scndData = new Date(Date.UTC(1993, 4, 16, 21, 0, 10, 59));

const differenceInDates = getDiff(firstData, scndData);
console.log(differenceInDates);
