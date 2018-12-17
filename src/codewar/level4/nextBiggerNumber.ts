/**
 * Next bigger number with the same digits
 * https://www.codewars.com/kata/next-bigger-number-with-the-same-digits
 */
import { remove } from '../utils/array';

export function nextBigger(n: number): number {
  const digits = toDigits(n);
  const decreasedDigitsIndex = digits.findIndex((
    value,
    index) => index > 0 && value < digits[index - 1]);
  if (decreasedDigitsIndex === -1) {
    return -1;
  }

  const decreaseDigit = digits[decreasedDigitsIndex];
  const unchangedDigits = digits.slice(decreasedDigitsIndex + 1);
  const digitsToChange = digits.slice(0, decreasedDigitsIndex);
  const nextHigherDigit = Math.min(...digitsToChange.filter(digit => digit > decreaseDigit));
  const remainingDigit = [decreaseDigit, ...remove(digitsToChange, nextHigherDigit)];
  const result = [...remainingDigit.sort((a, b) => b - a), nextHigherDigit, ...unchangedDigits];
  return Number(result.map(digit => digit.toString()).reverse().join(''));
}

function toDigits(n: number): number[] {
  return n.toString().split('').map(digitString => parseInt(digitString, 10)).reverse();
}
