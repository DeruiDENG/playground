/**
 * Find the unique number
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript
 */

export function findUniq(arr: number[]): number {
  for (let i = 1; i < arr.length; i++) {
    const prevElement = arr[i - 1];
    const currentElement = arr[i];
    if (prevElement !== currentElement) {
      const thirdElement = arr[i === arr.length - 1 ? i - 2 : i + 1];
      return thirdElement === prevElement ? currentElement : prevElement;
    }
  }
}
