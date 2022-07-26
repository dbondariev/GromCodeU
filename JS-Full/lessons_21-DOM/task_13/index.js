export function getSection(num) {
  const spanSection = document.querySelector(`span[data-number="${num}"]`);
  const currentSpan = spanSection.closest('.box');
  return currentSpan.getAttribute('data-section');
}
