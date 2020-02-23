/**
 * What doesn't belong to these?
 * https://www.codewars.com/kata/what-doesnt-belong-to-these/train/typescript
 */
type Element = number | string | boolean;

export function findTheNotFittingElement(series: Element[]): Element {
  let result: Element;
  if (isSeriesAllNumber(series)) {
    result = findUniqFromNumbers(series);
  } else if (isSeriesAllString(series)) {
    result = findUniqFromStrings(series);
  } else if (isSeriesAllBoolean(series)) {
    result = findUniqElementBy(series, ele => ele === true);
  } else {
    result = findUniqElement(series);
  }

  return result;
}

function isSeriesAllString(series: Element[]): series is string[] {
  return series.every(item => typeof item === 'string');
}

function isSeriesAllBoolean(series: Element[]): series is boolean[] {
  return series.every(item => typeof item === 'boolean');
}

function isSeriesAllNumber(series: Element[]): series is number[] {
  return series.every(item => typeof item === 'number');
}

function findUniqFromNumbers(series: number[]): number {
  return [
    findUniqElementBy(series, ele => ele % 2 === 1),
    findUniqElementBy(series, ele => ele > 0),
    findUniqElementBy(
      series,
      ele => series.filter(el => el === ele).length === 1,
      false
    ),
  ].find(result => result !== undefined);
}

function findUniqFromStrings(series: string[]): string {
  return [
    findUniqElementBy(series, ele => Number.isNaN(parseInt(ele, 10))),
    findUniqElementBy(series, ele => ele === '.'),
    findUniqElementBy(series, ele => ele === ele.toLowerCase()),
    findUniqElementBy(
      series,
      ele => series.filter(el => el === ele).length === 1,
      false
    ),
  ].find(result => result !== undefined);
}

function findUniqElement(series: Element[]): Element {
  const results = [
    findUniqElementBy(series, ele => typeof ele === 'string'),
    findUniqElementBy(series, ele => typeof ele === 'boolean'),
  ];

  return results.find(result => result !== undefined);
}

function findUniqElementBy<T>(
  series: T[],
  fn: (element: T) => boolean,
  canRevert = true
): T | undefined {
  const matchedElements = series.filter(ele => fn(ele));
  const notMatchedElements = series.filter(ele => canRevert && !fn(ele));
  const uniqElements = [matchedElements, notMatchedElements].find(
    elements => elements.length === 1
  );
  return uniqElements ? uniqElements[0] : undefined;
}
