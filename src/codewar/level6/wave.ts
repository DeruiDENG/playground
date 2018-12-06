/* Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave.You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
  Rules
1.  The input string will always be lower case but maybe empty.

2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
  Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy! */

export function wave(str: string): string[] {
  const resultArray: string[] = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    if (str.charAt(i) === ' ') {
      continue;
    }

    resultArray.push(makeCharUpperCase(str, i));
  }

  return resultArray;
}

function makeCharUpperCase(str: string, index: number) {
  if (index >= str.length) {
    return str;
  }

  return `${str.substr(0, index) +
    str.substr(index, 1).toUpperCase() +
    str.substr(index + 1)}`;
}
