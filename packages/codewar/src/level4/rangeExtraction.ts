/**
 * Range Extraction
 * https://www.codewars.com/kata/range-extraction
 */

export function solution(list: number[]): string {
  let range: number[] = [];
  const ranges: number[][] = [];
  for (const number of list) {
    if (range.length === 0 || number - range[range.length - 1] === 1) {
      range.push(number);
    } else {
      ranges.push(range);
      range = [number];
    }
  }

  ranges.push(range);
  return serialize(ranges);
}

function serialize(ranges: number[][]) {
  const serializedRanges = ranges.map((range) => {
    if (range.length === 1) {
      return range[0].toString();
    } else if (range.length === 2) {
      return `${range[0]},${range[1]}`;
    } else {
      return `${range[0]}-${range[range.length - 1]}`;
    }
  });

  return serializedRanges.join(',');
}
