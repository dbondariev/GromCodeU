export const squaredNumbers = () => {
  const element = Array.from(document.querySelectorAll('.number')).map(
    li => (li.dataset.squaredNumber = li.dataset.number ** 2),
  );
};

squaredNumbers();