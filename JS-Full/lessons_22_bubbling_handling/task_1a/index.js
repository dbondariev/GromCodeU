// elem.addEventListener('click', ()=> {
//   console.log('div');
// })

// const handler = () => {
//   console.log('div1');
// };

// elem.addEventListener('click', handler);

// elem.removeEventListener('click', handler);

// const elemDiv = document.querySelector('.rect_div');
// const elemPi = document.querySelector('.rect_p');
// const elemSpan = document.querySelector('.rect_span');

// const logTarget = (text, color) => {
//   const eventsListItem = document.querySelector('.events-list');

//   eventsListItem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`; // добавляет при клике новые и новые спаны
// }

// const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
// const logGreenPi = logTarget.bind(null, 'P', 'green');
// const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

// const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// const logGreyPi = logTarget.bind(null, 'P', 'grey');
// const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// elemDiv.addEventListener('click', logGreenDiv);
// elemDiv.addEventListener('click', logGreyDiv, { capture: true });

// elemPi.addEventListener('click', logGreenPi);
// // elemPi.addEventListener('click', event => {
// //   logGreenPi();
// //   // event.stopPropagation()
// //   console.log(event);
// // });
// elemPi.addEventListener('click', logGreyPi, true);

// elemSpan.addEventListener('click', logGreenSpan);
// elemSpan.addEventListener('click', logGreySpan, true);

// ================= searchElem ===============================
const eventsListElem = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

// ================= elemCreateFunc ============================
const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style ="color:${color};margin-left:8px;">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// =================== clear BTN ===============================
const clearBtn = document.querySelector('.clear-btn');

const cleanWindow = () => {
  eventsListElem.textContent = '';
};

clearBtn.addEventListener('click', cleanWindow);
// ==================== remove btn ==============================
const btnRemove = document.querySelector('.remove-handlers-btn');
const removeFunc = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

btnRemove.addEventListener('click', removeFunc);
// ====================== attach BTN ==============================
const attachBtn = document.querySelector('.attach-handlers-btn');
const attachedFunc = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
attachBtn.addEventListener('click', attachedFunc);

attachedFunc();








