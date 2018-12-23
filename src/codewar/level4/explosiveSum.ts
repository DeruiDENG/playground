/**
 * Explosive Sum
 * https://www.codewars.com/kata/explosive-sum
 */

export function sum(num: number): number {
  return explosiveSum(num, 1);
}

function explosiveSum(num: number, limit: number): number {
  if (num < limit) {
    return 0;
  }

  if (num === limit) {
    return 1;
  }

  let count = 1;
  for (let i = limit; i <= num / 2; i++) {
    count += explosiveSum(num - i, i);
  }

  return count;
}
