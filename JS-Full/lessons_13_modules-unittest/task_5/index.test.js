import { reverseArray, withdraw, getAdults } from './index.js';

it('should reverse array', () => {
  const result = reverseArray([2, 6, 8]);
  expect(result).toEqual([8, 6, 2]);
});

it('should reverse array', () => {
  const result = reverseArray([10, 5, 2]);
  expect(result).toEqual([2, 5, 10]);
});

it('should reverse array', () => {
  const result = reverseArray([100, 3, 44, 32]);
  expect(result).toEqual([32, 44, 3, 100]);
});

it('should withdraw money from a specific client', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1, [1400, 87, -6]);
});

it('should withdraw money from a specific client', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37, [1400, 37, -6]);
});

it('should withdraw money from a specific client', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37, [1400, 37, -6]);
});

it('should to find all people who are 18 years old', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should to find all people who are 18 years old', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should to find all people who are 18 years old', () => {
  const result = getAdults({ Erick: 36, Andrey: 7, Samantha: 21 });
  expect(result).toEqual({ Erick: 36, Samantha: 21 });
});



