import { calc } from './calculator.js';

it('should to calculate the amount of the line', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});


it('should to calculate the substraction in the line', () => {
  const result = calc('100 - 2');
  expect(result).toEqual('100 - 2 = 98');
});

it('should get the multiplication in the string', () => {
  const result = calc('2 * 2');
  expect(result).toEqual('2 * 2 = 4');
});

it('should get the division in the line', () => {
  const result = calc('10 / 2');
  expect(result).toEqual('10 / 2 = 5');
});

it('should return null if function don`t accept a string', () => {
  const result = calc(10 / 2);
  expect(result).toEqual(null);
});
