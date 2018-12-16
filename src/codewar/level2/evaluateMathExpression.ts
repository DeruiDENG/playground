/**
 * Evaluate mathematical expression
 * https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/typescript
 */

const LastBinaryAddRegex = /(?<=\d)\+(?!.*\d\+)/;
const LastBinaryMinusRegex = /(?<=\d)-(?!.*\d-)/;
const LastBinaryMultiplicationRegex = /(?<=\d)\*(?!.*\d\*)/;
const LastBinaryDivisionRegex = /(?<=\d)\/(?!.*\d\/)/;
const InnerMostParenthesesRegex = /\((?!.*\()(\d|\+|-|\*|\/)*\)/;

export function calc(expression: string | number): number {
  if (typeof expression === 'number') {
    return expression;
  }

  expression = expression.replace(/\s/g, '');
  while (InnerMostParenthesesRegex.test(expression)) {
    expression = expression.replace(
      InnerMostParenthesesRegex,
      substring => calcPure(removeParentheses(substring)).toString());
  }
  return calcPure(expression);
}

function removeParentheses(str: string): string {
  return str.replace('(', '').replace(')', '');
}

/**
 * Calculate expression without parentheses
 * @param expression
 */
function calcPure(expression: string): number {
  const separatedByPlus = expression.split(LastBinaryAddRegex);
  if (separatedByPlus.length === 2) {
    return calcPure(separatedByPlus[0]) + calcPure(separatedByPlus[1]);
  }

  const separatedByMinus = expression.split(LastBinaryMinusRegex);
  if (separatedByMinus.length === 2) {
    return calcPure(separatedByMinus[0]) - calcPure(separatedByMinus[1]);
  }

  const separatedByMultiplication = expression.split(LastBinaryMultiplicationRegex);
  if (separatedByMultiplication.length === 2) {
    return calcPure(separatedByMultiplication[0]) * calcPure(separatedByMultiplication[1]);
  }

  const separatedByDivision = expression.split(LastBinaryDivisionRegex);
  if (separatedByDivision.length === 2) {
    return calcPure(separatedByDivision[0]) / calcPure(separatedByDivision[1]);
  }

  return calculateUnary(expression);
}

export function calculateUnary(expression: string): number {
  const minusCount = (expression.match(/-/g) || []).length;
  const value = expression.replace(/\+/g, '').replace(/-/g, '');
  if (minusCount % 2 === 0) {
    return parseFloat(value);
  }

  return -parseFloat(value);
}
