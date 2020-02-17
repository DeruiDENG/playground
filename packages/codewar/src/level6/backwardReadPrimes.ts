/* Backwards Read Primes are primes that when read backwards in base 10(from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers(both inclusive), the second one always being greater than or equal to the first one.The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

  Example
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97]
backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] */

export class G964 {
  public static backwardsPrime = (start: number, stop: number): number[] => {
    const result: number[] = [];
    for (let number = start < 11 ? 11 : start; number <= stop; number++) {
      const reverseNumber = getReverseDigitNumber(number);
      if (
        isPrime(number) &&
        isPrime(reverseNumber) &&
        reverseNumber !== number
      ) {
        result.push(number);
      }
    }

    return result;
  };
}

function isPrime(num: number): boolean {
  if (num === 1) {
    return false;
  }

  const numSqrt = Math.sqrt(num);
  for (let divider = 2; divider <= numSqrt; divider++) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
}

function getReverseDigitNumber(num: number): number {
  return parseInt(
    num
      .toString()
      .split('')
      .reverse()
      .join(''),
    10
  );
}

const expected = [70001, 70009, 70061, 70079, 70121, 70141, 70163, 70241];
const result = G964.backwardsPrime(70000, 70245);
console.log(result);
