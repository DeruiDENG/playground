export function hamming(n: number): number {
  const results = [1];
  const indices = [0, 0, 0];
  const primes = [2, 3, 5];
  const nextMultiple = [2, 3, 5];

  for (let i = 0; i < n; ++i) {
    results.push(Math.min(...nextMultiple));
    const mostRecent = results[results.length - 1];
    for (let j = 0; j < primes.length; j++) {
      const prime = primes[j];
      if (nextMultiple[j] === mostRecent) {
        nextMultiple[j] = prime * results[++indices[j]];
      }
    }
  }

  return results[n - 1];
}
