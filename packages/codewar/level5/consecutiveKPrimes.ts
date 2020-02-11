/**
 * Consecutive k-Primes
 * https://www.codewars.com/kata/573182c405d14db0da00064e/train/typescript
 */
import { range } from '../utils/integers';

export class G964 {
  public static consecKprimes = (k: number, arr: number[]): number => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const kPrimes = getKprimes(k, min, max);
    let counter = 0;
    for (let i = 1; i < arr.length; i++) {
      const prevElement = arr[i - 1];
      const currentElement = arr[i];
      if (kPrimes.some(kPrime => kPrime === prevElement) && kPrimes.some(
        kPrimes => kPrimes === currentElement)) {
        counter++;
      }
    }

    return counter;
  };
}

function getKprimes(k: number, start: number, nd: number): number[] {
  const primes = findPrimes(Math.sqrt(nd));
  return range(start, nd).filter(num => findPrimeK(num, primes) === k);
}

function findPrimeK(num: number, primes: number[]): number {
  let k = 1;
  primes.filter(prime => prime <= Math.sqrt(num)).forEach(prime => {
    while (num % prime === 0 && num !== prime) {
      num /= prime;
      k++;
    }
  });

  return k;
}

function findPrimes(max: number): number[] {
  const primes = [2];
  const maxSqrt = Math.sqrt(max);
  for (let i = 3; i <= max; i += 2) {
    if (primes.filter(prime => prime <= maxSqrt && i % prime === 0).length === 0) {
      primes.push(i);
    }
  }
  return primes;
}
