/**
 * Twice Linear Problem in https://www.codewars.com/kata/5672682212c8ecf83e000050/train/typescript
 */

const getDoubleLinear = (n: number): [number, number] => {
  return [2 * n + 1, 3 * n + 1];
};

const mergeSortedArray = (
  sortedArray1: number[],
  sortedArray2: number[]
): number[] => {
  let sortedResult: number[] = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 !== sortedArray1.length || pointer2 !== sortedArray2.length) {
    if (pointer1 === sortedArray1.length) {
      sortedResult.push(sortedArray2[pointer2++]);
    } else if (pointer2 === sortedArray2.length) {
      sortedResult.push(sortedArray1[pointer1++]);
    } else if (sortedArray1[pointer1] < sortedArray2[pointer2]) {
      const numToPush = sortedArray1[pointer1++];
      if (sortedResult[sortedResult.length - 1] !== numToPush) {
        sortedResult.push(numToPush);
      }
    } else {
      const numToPush = sortedArray2[pointer2++];
      if (sortedResult[sortedResult.length - 1] !== numToPush) {
        sortedResult.push(numToPush);
      }
    }
  }

  return sortedResult;
};

export class G964 {
  public static dblLinear(n: number) {
    const sequenceOne: number[] = [1, 3];
    const sequenceTwo: number[] = [4];
    let pointerOne = 1;
    let pointerTwo = 0;
    while (pointerOne < n) {
      let base =
        sequenceOne[pointerOne] < sequenceTwo[pointerTwo]
          ? sequenceOne[pointerOne++]
          : sequenceTwo[pointerTwo++];
      const [num1, num2] = getDoubleLinear(base);
      sequenceOne.push(num1);
      sequenceTwo.push(num2);
    }

    return mergeSortedArray(sequenceOne, sequenceTwo)[n];
  }
}
