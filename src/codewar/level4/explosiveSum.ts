/**
 * Explosive Sum
 * https://www.codewars.com/kata/explosive-sum
 */


/**
 * p(n, m) is defined to be the number of partitions of n whose largest member is at most m
 * p(n,m) = NumOf(n=m+......) + NumOf(n=m-1+......)
 * Therefore, we have the following formula:
 * p(n, m) = p(n-m, m) + p(n, m-1)
 */

export function sum(num: number): number {
  const map = new Map<string, number>();
  function explosiveSum(num: number, limit: number): number {
    if (num < 0) {
      return 0;
    }

    if (num === 0 || limit === 1) {
      return 1;
    }

    const key = `${num},${limit}`;
    const cacheResult = map.get(key);
    if (cacheResult !== undefined) {
      return cacheResult;
    }

    const result = explosiveSum(num - limit, limit) + explosiveSum(num, limit - 1);
    map.set(key, result);
    return result;
  }
  return explosiveSum(num, num);
}


