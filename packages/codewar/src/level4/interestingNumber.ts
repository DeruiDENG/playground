/*
"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

  Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
*/

const isFollowByAllZeros = (num: number): boolean => {
  return /^\d[0]+$/.test(num.toString());
};

const isSameNumber = (num: number): boolean => {
  const numString = num.toString();
  return numString === numString.charAt(0).repeat(numString.length);
};

const isIncrementSequential = (num: number): boolean => {
  const digits = num
    .toString()
    .split('')
    .map(digitString => parseInt(digitString));
  for (let i = 1; i < digits.length; i++) {
    const digit = digits[i];
    const prevDigit = digits[i - 1];
    if (
      prevDigit === 0 ||
      (digit - prevDigit !== 1 && digit - prevDigit !== -9)
    ) {
      return false;
    }
  }

  return true;
};

const isDecrementSequential = (num: number): boolean => {
  const digits = num
    .toString()
    .split('')
    .map(digitString => parseInt(digitString));
  for (let i = 1; i < digits.length; i++) {
    const digit = digits[i];
    const prevDigit = digits[i - 1];
    if (prevDigit === 0 || digit - prevDigit !== -1) {
      return false;
    }
  }

  return true;
};

const isPalindrome = (num: number): boolean => {
  const digits = num
    .toString()
    .split('')
    .map(digitString => parseInt(digitString));
  return digits.every(
    (digit, index) => digit === digits[digits.length - 1 - index]
  );
};

const isMatchingAwesomePhrases = (
  num: number,
  awesomePhrases: number[]
): boolean => {
  return awesomePhrases.some(phrase => phrase === num);
};

const isNumberValid = (num: number): boolean => {
  return Number.isInteger(num) && num >= 100;
};

export class Kata {
  static isInteresting(n: number, awesomePhrases: number[]): number {
    if (Kata.isExactlyInteresting(n, awesomePhrases)) {
      return 2;
    }

    if (
      [n + 1, n + 2].some(n => Kata.isExactlyInteresting(n, awesomePhrases))
    ) {
      return 1;
    }

    return 0;
  }

  static isExactlyInteresting(n: number, awesomePhrases: number[]): boolean {
    return (
      isNumberValid(n) &&
      [
        isFollowByAllZeros,
        isSameNumber,
        isIncrementSequential,
        isDecrementSequential,
        isPalindrome,
        isMatchingAwesomePhrases,
      ].some(fn => fn(n, awesomePhrases) === true)
    );
  }
}
