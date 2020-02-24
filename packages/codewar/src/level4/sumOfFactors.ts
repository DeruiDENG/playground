/**
 * Sum by Factors
 * https://www.codewars.com/kata/sum-by-factors
 */
import { findPrimes } from '../utils/integers';

export class G964 {
  public static sumOfDivided(lst: number[]): number[][] {
    const list: number[][] = [];
    const max = Math.max(...lst.map(value => Math.abs(value)));
    const primes = findPrimes(max);
    for (const prime of primes) {
      const numsWithFactor = lst.filter(val => val % prime === 0);
      if (numsWithFactor.length > 0) {
        const sum = numsWithFactor.reduce((acc, value) => acc + value, 0);
        list.push([prime, sum]);
      }
    }

    return list;
  }
}
