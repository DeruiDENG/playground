/**
 * What doesn't belong to these?
 * https://www.codewars.com/kata/what-doesnt-belong-to-these/train/typescript
 */

type Element = number | string | boolean;


export function findTheNotFittingElement(series: Element[]): any {
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
  const [positiveCount, negativeCount] = [
    count(series, ele => ele > 0),
    count(series, ele => ele < 0)];

  if (positiveCount === 1) {
    return series.find(element => element > 0);
  }

  if (negativeCount === 1) {
    return series.find(element => element < 0);
  }

  const firstElementCount = count(series, ele => ele === series[0]);
  if (firstElementCount === 1) {
    return series[0];
  } else {
    return series.find(ele => ele !== series[0]);
  }
}

function findUniqFromStrings(series: string[]): string {
  const [numberCount, nonNumberCount] = [
    count(series, ele => !Number.isNaN(parseInt(ele, 10))),
    count(series, ele => Number.isNaN(parseInt(ele, 10)))
  ];

  if (numberCount === 1) {
    return series.find(ele => !Number.isNaN(parseInt(ele, 10)));
  }

  if (nonNumberCount === 1) {
    return series.find(ele => Number.isNaN(parseInt(ele, 10)));
  }

  const [dotCount, nonDotCount] = [
    count(series, ele => ele === '.'),
    count(series, ele => ele !== '.')
  ];

  if (dotCount === 1) {
    return series.find(ele => ele === '.');
  }

  if (nonDotCount === 1) {
    return series.find(ele => ele !== '.');
  }

  const [lowerCaseCount, upperCaseCount] = [
    count(series, ele => ele === ele.toLowerCase()),
    count(series, ele => ele === ele.toUpperCase())
  ];

  if (lowerCaseCount === 1) {
    return series.find(ele => ele === ele.toLowerCase());
  }

  if (upperCaseCount === 1) {
    return series.find(ele => ele === ele.toUpperCase());
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

function count<T>(series: Array<T>, fn: (element: T) => boolean): number {
  return series.reduce<number>((acc, element) => {
    if (fn(element)) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
