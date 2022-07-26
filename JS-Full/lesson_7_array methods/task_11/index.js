const filterNames = (arr, text) => arr.filter(item => item.includes(text) && item.length > 5);

console.log(filterNames(['Jonh', 'Olivya', 'Olaxsandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
