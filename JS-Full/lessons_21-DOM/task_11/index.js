export const manageClasses = () => {
  const addClass = document.querySelector('.one')
  addClass.classList.add('selected');

  const delClass = document.querySelector('.two');
  delClass.classList.remove('selected');

  const togElem = document.querySelector('.three');
  togElem.classList.toggle('three_done');

  const giveClass = document.querySelector('.four')
  if(giveClass.classList.contains('some-class')) {
    giveClass.classList.add('another-class')
  }
}

