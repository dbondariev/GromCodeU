function sortAsc(array) {
 if (!Array.isArray(array)) {
  return null;
 }
 return array.sort((a, b) => a - b);
}

function sortDesc(array) {
 if (!Array.isArray(array)) {
  return null;
 }
 return array.sort((a, b) => b - a);
}
