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
    result = findUniqFromBooleans(series);
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
  const results = [
    findUniqElementBy(series, ele => ele % 2 === 1),
    findUniqElementBy(series, ele => ele > 0),
  ];

  const uniqElement = results.find(result => result !== undefined);
  if (uniqElement !== undefined) {
    return uniqElement;
  }

  const firstElementCount = count(series, ele => ele === series[0]);
  if (firstElementCount === 1) {
    return series[0];
  } else {
    return series.find(ele => ele !== series[0]);
  }
}

function findUniqFromStrings(series: string[]): string {
  const results = [
    findUniqElementBy(series, ele => Number.isNaN(parseInt(ele, 10))),
    findUniqElementBy(series, ele => ele === '.'),
    findUniqElementBy(series, ele => ele === ele.toLowerCase()),
  ];

  const uniqElement = results.find(result => result !== undefined);
  if (uniqElement !== undefined) {
    return uniqElement;
  }

  const firstElementCount = count(series, ele => ele === series[0]);
  if (firstElementCount === 1) {
    return series[0];
  } else {
    return series.find(ele => ele !== series[0]);
  }
}

function findUniqFromBooleans(series: boolean[]): boolean {
  const firstElementCount = count(series, ele => ele === series[0]);
  if (firstElementCount === 1) {
    return series[0];
  } else {
    return series.find(ele => ele !== series[0]);
  }
}


function findUniqElement(series: Element[]): Element {
  const numString = count(series, element => typeof element === 'string');
  const numBoolean = count(series, element => typeof element === 'boolean');

  if (numString === 1) {
    return series.find(element => typeof element === 'string');
  } else if (numBoolean === 1) {
    return series.find(element => typeof element === 'boolean');
  } else {
    return series.find(element => typeof element === 'number');
  }
}

function findUniqElementBy<T>(series: Array<T>, fn: (element: T) => boolean): T | undefined {
  const matchedElements = series.filter(ele => fn(ele));
  const notMatchedElements = series.filter(ele => !fn(ele));
  const uniqElements = [matchedElements, notMatchedElements].find(
    elements => elements.length === 1);
  return uniqElements ? uniqElements[0] : undefined;
}

function count<T>(series: Array<T>, fn: (element: T) => boolean): number {
  return series.reduce<number>((acc, element) => {
    if (fn(element)) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
