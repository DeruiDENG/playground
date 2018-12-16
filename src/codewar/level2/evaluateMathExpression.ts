/**
 * Evaluate mathematical expression
 * https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/typescript
 */

const BinaryAddRegex = /(?<=\d)+/;
const BinarySubstractionRegex = /(?<=\d)-/;
const BinaryMultiplicationRegex = /(?<=\d)*/;
const BinaryDivisionRegex = /(?<=\d)\//;

export function calc(expression: string): number {
  // evaluate `expression` and return result
}

/**
 * Calculate expression without parentheses
 * @param expression
 */
function calcPure(expression: string): number {
  expression = expression.replace(' ', '');
}
