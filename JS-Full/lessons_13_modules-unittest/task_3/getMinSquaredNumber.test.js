import  getMinSquaredNumber  from './getMinSquaredNumber.js';

it('should find a min module number and get squared', () => {
  const result = getMinSquaredNumber([-777, -2, 3, 6, 45, -20]);
  expect(result).toEqual(4);
});

it('should check if array empty or not', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should check pass string', () => {
  const result = getMinSquaredNumber('');
  expect(result).toEqual(null);
});
