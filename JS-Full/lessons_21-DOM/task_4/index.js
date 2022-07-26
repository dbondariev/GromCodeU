function getTitle() {
  const text = document.querySelector('.title');
  return text.textContent;
}

function getDescription() {
  const description = document.querySelector('.about');
  return description.innerHTML;
}

function getPlans() {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
}

function getGoal() {
  const plans = document.querySelector('.goal');
  return plans.outerHTML;
}

export { getTitle, getDescription, getPlans, getGoal };
