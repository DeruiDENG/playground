import { factorial } from '../utils/integers';

type Color = 'R' | 'G' | 'B';

export function triangle(row: string): Color {
  const rowInDigits = row.split('').map(convertToDigit);
  const lengthOfRow = row.length;
  const multiplier = lengthOfRow % 2 === 0 ? -1 : 1;
  const rawResult = (multiplier * rowInDigits.reduce(
    (acc, digit, index) => acc + digit * (calculateBinomialCoefficient(lengthOfRow - 1, index) % 3),
    0)) % 3;
  if (rawResult === 0) {
    return 'R';
  } else if (rawResult === 1) {
    return 'G';
  } else {
    return 'B';
  }
}

function convertToDigit(color: Color): number {
  if (color === 'R') {
    return 0;
  } else if (color === 'G') {
    return 1;
  } else {
    return 2;
  }
}

function calculateBinomialCoefficient(n, k) {
  return factorial(n) / factorial(k) / factorial(n - k);
}
