const numbers = new Map([
  ['zero', 0],
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['ten', 10],
  ['eleven', 11],
  ['twelve', 12],
  ['thirteen', 13],
  ['fourteen', 14],
  ['fifteen', 15],
  ['sixteen', 16],
  ['seventeen', 17],
  ['eighteen', 18],
  ['nineteen', 19],
  ['twenty', 20],
  ['thirty', 30],
  ['forty', 40],
  ['fifty', 50],
  ['sixty', 60],
  ['seventy', 70],
  ['eighty', 80],
  ['ninety', 90],
]);

/**
 * parseInt() reloaded
 * https://www.codewars.com/kata/parseint-reloaded/train/javascript
 */
export function parseInt(string: string): number {
  if (string === 'one million') {
    return 1000000;
  }

  return parseThousands(string.replace(/\sand\s/g, ' '));
}

function parseThousands(string: string): number {
  const comps = string.split('thousand');
  if (comps.length === 1) {
    return parseHundreds(string);
  }

  return parseHundreds(comps[0].trim()) * 1000 + parseHundreds(comps[1].trim());
}

function parseHundreds(string: string): number {
  const comps = string.split('hundred');
  if (comps.length === 1) {
    return parseSmallNumber(comps[0].trim());
  }

  return (
    parseSmallNumber(comps[0].trim()) * 100 + parseSmallNumber(comps[1].trim())
  );
}

/**
 * parse number smaller than 100
 * @param string
 */
function parseSmallNumber(string: string): number {
  if (string === '') {
    return 0;
  }

  const comps = string.trim().split('-');
  if (comps.length === 1) {
    return numbers.get(comps[0]);
  }

  const result = numbers.get(comps[0]) + numbers.get(comps[1]);
  if (Number.isInteger(result) === false) {
    console.log('Error:', comps[0], comps[1]);
  }

  return result;
}
