/**
 * k-primes count
 * https://www.codewars.com/kata/k-primes
 */

export class G964 {
  public static countKprimes = (k: number, start: number, nd: number): number[] => {
    const primes = findPrimes(Math.sqrt(nd));
    return range(start, nd).filter(num => findPrimeK(num, primes) === k);
  };
  public static puzzle = (s: number): number => {
    // you code
    return 0;
  };
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (num, index) => index + start);
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

