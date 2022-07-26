export const createButton = (buttonText = 'Send E-mail') => {
  const btnElem = document.createElement('button');
  btnElem.textContent = buttonText;
  document.body.append(btnElem);
} 

