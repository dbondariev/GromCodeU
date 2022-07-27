function removeDuplicates(array) {
 if (!Array.isArray(array)) {
  return null;
 }
 return array.filter((item, index) => array.indexOf(item) === index);
}
