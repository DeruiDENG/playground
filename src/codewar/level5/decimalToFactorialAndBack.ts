/*
Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.
  In this system, the last digit is always 0 and is in base 0!.
  The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!. More generally, the nth-to-last digit in always 0, 1, 2, ..., or n and is in base n!.

  Example : decimal number 463 is coded as "341010"

because 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

So we extend 0..9 with letters A to Z. With these 36 digits we can code up to 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

We code two functions, the first one will code a decimal number and return a string with the factorial representation : "dec2FactString(nb)"

the second one will decode a string with a factorial representation and produce the decimal representation : "factString2Dec(str)".

  Given numbers will be positive.

  Note
You have tests with Big Integers in Clojure, Python, Ruby, Haskell, Ocaml but not with Java and others where the number "nb" in "dec2FactString(nb)" is at most a long.*/

export class G964 {
  public static dec2FactString = (nb: number): string => {
    const result: string[] = [];
    let level = defactorial(nb);
    while (true) {
      const divider = factorial(level);
      const multiplier = Math.floor(nb / divider);
      nb = nb % divider;
      result.push(numToString(multiplier));
      if (level === 0) {
        return result.join('');
      }

      level--;
    }
  };

  public static factString2Dec = (str: string): number => {
    return str
      .split('')
      .map(char => parseInt(char, 10))
      .reduce((acc, currentValue, currentIndex, arr) => {
        return acc + currentValue * factorial(arr.length - currentIndex - 1);
      }, 0);
  };
}

function factorial(num: number) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
}

function defactorial(num: number): number {
  let trial = 1;
  while (true) {
    if (num < factorial(trial)) {
      return trial - 1;
    }

    trial++;
  }
}

function numToString(num: number): string {
  if (num < 10) {
    return num.toString();
  }

  const charCodeA = 'A'.charCodeAt(0);
  return String.fromCharCode(charCodeA + num - 10);
}
