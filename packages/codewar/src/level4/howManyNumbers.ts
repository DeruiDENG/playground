/**
 * We want to generate all the numbers of three digits that:
 * https://www.codewars.com/kata/5877e7d568909e5ff90017e6
 */

/**
 *
 * @param n - the sum of digits value
 * @param k - the amount of desired digits for the numbers
 * @return - [number of possible result, smallest result, largest result]
 */
export function findAll(n: number, k: number): [number, string, string] | [] {
  const availableNumbers = findAvailableNumbers(n, k, 9);
  if (availableNumbers.length) {
    console.log(availableNumbers);
    return [
      availableNumbers.length,
      Math.min(...availableNumbers).toString(),
      Math.max(...availableNumbers).toString(),
    ];
  }

  return [];
}

export function findAvailableNumbers(
  digitSum: number,
  numDigit: number,
  allowedDigit: number
): number[] {
  if (numDigit === 1) {
    if (digitSum > 10 || digitSum > allowedDigit) {
      return [];
    } else {
      return [digitSum];
    }
  }

  const maxLastDigit = Math.min(digitSum - numDigit + 1, 9, allowedDigit);
  const lowestLastDigit = Math.ceil(digitSum / numDigit);
  const results: number[] = [];
  for (
    let lastDigit = lowestLastDigit;
    lastDigit <= maxLastDigit;
    lastDigit++
  ) {
    const subNumbers = findAvailableNumbers(
      digitSum - lastDigit,
      numDigit - 1,
      lastDigit
    );
    results.push(
      ...subNumbers.map(subNumber => mergeNumber(subNumber, lastDigit))
    );
  }

  return results;
}

function mergeNumber(num1: number, digit: number): number {
  return Number.parseInt([...num1.toString().split(''), digit].join(''), 10);
}
