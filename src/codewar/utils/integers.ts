/**
 * Get array of integers that are larger than start and smaller than end
 * @param start start integer(inclusive)
 * @param end end integer(inclusive)
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (num, index) => index + start);
}

export function findPrimes(max: number): number[] {
  const sieve = [];
  const primes = [];
  let k;
  let l;
  sieve[1] = false;
  for (k = 2; k <= max; k += 1) {
    sieve[k] = true;
  }
  for (k = 2; k * k <= max; k += 1) {
    if (sieve[k] !== true) {
      continue;
    }
    for (l = k * k; l <= max; l += k) {
      sieve[l] = false;
    }
  }
  sieve.forEach(function (value, key) {
    if (value) {
      this.push(key);
    }
  }, primes);
  return primes;
}
