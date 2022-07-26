export const createCalculator = () => {
  let memoryOfNumbers = 0;

  const add = number => {
    memoryOfNumbers += number;
    return memoryOfNumbers;
  };
  const decrease = number => {
    memoryOfNumbers -= number;
    return memoryOfNumbers;
  };
  const reset = () => {
    memoryOfNumbers = 0;
    return memoryOfNumbers;
  };
  const getMemo = () => memoryOfNumbers;
  
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}



