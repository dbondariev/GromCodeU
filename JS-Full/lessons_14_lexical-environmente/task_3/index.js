let memoryOfNumbers = 0;

export const add = number => {
  memoryOfNumbers += number;
  return memoryOfNumbers;
};
export const decrease = number => {
  memoryOfNumbers -= number;
  return memoryOfNumbers;
};
export const reset = () => {
  memoryOfNumbers = 0;
  return memoryOfNumbers;
};
export const getMemo = () => memoryOfNumbers;
