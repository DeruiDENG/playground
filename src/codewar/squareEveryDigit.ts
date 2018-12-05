// Welcome.In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

export class Kata {
  static squareDigits(num: number): number {
    const digitsList = num
      .toString()
      .split('')
      .map(digitString => Number(digitString));
    const resultString = digitsList
      .map(digit => digit * digit)
      .map(squaredDigit => squaredDigit.toString())
      .join('');
    return Number(resultString);
  }
}
