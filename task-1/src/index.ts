export function sum(numberOne : number, numberTwo : number) : number {
  return numberOne + numberTwo;
}

export function addN(number : number) {
  const numberOne : number = number;

  const calculationFunction = (numberTwo : number) => sum(numberOne, numberTwo);
  return calculationFunction;
}