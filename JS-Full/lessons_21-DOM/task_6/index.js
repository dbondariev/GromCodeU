export const setButton = (buttonText = 'button text') => {
  const findBody = document.querySelector('body');
  findBody.innerHTML = `<button>${buttonText}</button>`;
}
setButton();

