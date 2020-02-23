/**
 * The observed PIN
 * https://www.codewars.com/kata/the-observed-pin/train/javascript
 */

const possibilityMap = {
  '1': ['1', '2', '4'],
  '2': ['1', '2', '3', '5'],
  '3': ['2', '3', '6'],
  '4': ['1', '4', '5', '7'],
  '5': ['2', '4', '5', '6', '8'],
  '6': ['3', '5', '6', '9'],
  '7': ['4', '7', '8'],
  '8': ['5', '7', '8', '9', '0'],
  '9': ['6', '8', '9'],
  '0': ['0', '8'],
};

export function getPINs(observed: string): string[] {
  const mappedChars: string[][] = observed
    .split('')
    .map(char => possibilityMap[char]);
  return processMappedChar('', mappedChars);
}

function processMappedChar(prefix: string, mappedChars: string[][]) {
  if (mappedChars.length === 1) {
    return mappedChars[0].map(possibleChar => `${prefix}${possibleChar}`);
  }

  if (mappedChars.length === 0) {
    return prefix;
  }

  const mappedCharToProcess = mappedChars[0];
  const remainingMappedChars = mappedChars.slice(1);
  const wrappedPossibleChars = mappedCharToProcess.map(char =>
    processMappedChar(`${prefix}${char}`, remainingMappedChars)
  );
  return wrappedPossibleChars.reduce(
    (acc, possibleChars) => [...acc, ...possibleChars],
    []
  );
}
