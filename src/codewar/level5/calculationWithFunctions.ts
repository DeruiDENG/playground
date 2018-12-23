/**
 * Calculating with Functions
 * https://www.codewars.com/kata/calculating-with-functions/train/javascript
 */

const generateBaseFunction = (base: number) => (operator) => {
  if (operator) {
    return operator(base);
  }

  return base;
};

export function zero(operator) {
  return generateBaseFunction(0)(operator);
}

export function one(operator) {
  return generateBaseFunction(1)(operator);

}

export function two(operator) {
  return generateBaseFunction(2)(operator);
}

export function three(operator) {
  return generateBaseFunction(3)(operator);
}

export function four(operator) {
  return generateBaseFunction(4)(operator);
}

export function five(operator) {
  return generateBaseFunction(5)(operator);
}

export function six(operator) {
  return generateBaseFunction(6)(operator);
}

export function seven(operator) {
  return generateBaseFunction(7)(operator);
}

export function eight(operator?) {
  return generateBaseFunction(8)(operator);
}

export function nine(operator) {
  return generateBaseFunction(9)(operator);
}

export function plus(secondOperand) {
  return firstOperand => (secondOperand + firstOperand);
}

export function minus(secondOperand) {
  return firstOperand => (firstOperand - secondOperand);
}

export function times(secondOperand) {
  return firstOperand => (firstOperand * secondOperand);
}

export function dividedBy(secondOperand) {
  return firstOperand => Math.floor(firstOperand / secondOperand);
}
