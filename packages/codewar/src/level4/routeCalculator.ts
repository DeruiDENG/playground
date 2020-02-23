/**
 * Route calculator
 * https://www.codewars.com/kata/route-calculator/train/typescript
 */

export const calculate = (sum: string): string | number => {
  const result = calculateNumber(sum);
  if (Number.isNaN(result)) {
    return '400: Bad request';
  }

  return result;
};

const calculateNumber = (sum: string): number => {
  const separateByPlus = splitByLastOccurrence(sum, '+');
  if (typeof separateByPlus !== 'string') {
    return (
      calculateNumber(separateByPlus[0]) + calculateNumber(separateByPlus[1])
    );
  }

  const separateBySubtraction = splitByLastOccurrence(sum, '-');
  if (typeof separateBySubtraction !== 'string') {
    return (
      calculateNumber(separateBySubtraction[0]) -
      calculateNumber(separateBySubtraction[1])
    );
  }

  const separateByMultiplication = splitByLastOccurrence(sum, '*');
  if (typeof separateByMultiplication !== 'string') {
    return (
      calculateNumber(separateByMultiplication[0]) *
      calculateNumber(separateByMultiplication[1])
    );
  }

  const separateByDivision = splitByLastOccurrence(sum, '$');
  if (typeof separateByDivision !== 'string') {
    return (
      calculateNumber(separateByDivision[0]) /
      calculateNumber(separateByDivision[1])
    );
  }

  return Number(sum);
};

function splitByLastOccurrence(
  str: string,
  separator: string
): [string, string] | string {
  const trySplit = str.split(separator);
  if (trySplit.length === 1) {
    return str;
  } else {
    return [
      trySplit.slice(0, trySplit.length - 1).join(separator),
      trySplit[trySplit.length - 1],
    ];
  }
}
