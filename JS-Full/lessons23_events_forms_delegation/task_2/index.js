// algo
// 3 сектора .sector
// inner sector строки -ряды sector__line
// каждый ряд состояит из количества сидений

// в data attribute будут хранится s - l - s
// data-sector-number
// data-line-number
// data-seat-number
// сгенерировать 3 сектора
// сгенерировать строки внутри сектора
const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      seatNumber =>
        `<div 
    class = "sector__seat" 
    data-seat-number=${seatNumber}
    ></div>`,
      // вставить сиденья в линии
    )
    .join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      lineNumber =>
        `<div 
    class = "sector__line" 
    data-line-number=${lineNumber}
    >${seatsString}</div>`,
      // вставить линии - ряды
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  
  const linesString = getSectorLines();
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber =>
        `<div 
    class = "sector" 
    data-sector-number=${sectorNumber}
    >${linesString}</div>`,
      // вставить линии - ряды
    )
    .join(''); // соединяем, потом всавляем в arena
  arenaElem.innerHTML = sectorsString; // или метод append
};

renderArena();

// отображение места сидения

const onSeatSelect = event => {
  // надо понять что пользователь кликнул на сиденье
  const isSeat = event.target.classList.contains('sector__seat')
  if(!isSeat) {
    return;
  }

  // если это все же сиденье:
  const {seatNumber} = event.target.dataset;
  const {lineNumber} = event.target.closest('.sector__line').dataset;
  const {sectorNumber} = event.target.closest('.sector').dataset;

  // получить элемент через который получаем данные

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
}
arenaElem.addEventListener('click', onSeatSelect)