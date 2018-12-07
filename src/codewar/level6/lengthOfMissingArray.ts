/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length - values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

  Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]-- > 3


If the array of arrays is null / nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/

export function getLengthOfMissingArray(arrayOfArrays: Array<any[]>): number {
  const lengths = arrayOfArrays.map(array => array.length);
  if (
    lengths.length === 0 ||
    arrayOfArrays.some(array => array === null || array.length === 0)
  ) {
    return 0;
  }

  // O(n)
  lengths.sort((lengthA, lengthB) => {
    if (lengthA < lengthB) {
      return -1;
    } else if (lengthA === lengthB) {
      return 0;
    } else {
      return 1;
    }
  });

  // O(n)
  const nonconsecutiveLengthIndex = lengths.findIndex(
    (length, index) => length !== lengths[0] + index
  );
  return nonconsecutiveLengthIndex + lengths[0];
}

const arrayOfArray = [
  [0, 4, 4, 1],
  [2, 1, 1],
  [4, 0, 2, 1, 0, 4],
  [1, 1, 2, 2, 4],
  [1, 4, 1, 1, 4, 0, 0, 4],
  [3, 3, 4, 3, 2, 3, 4, 4, 0],
  [4, 0, 3, 3, 2, 3, 2, 3, 1, 1, 2],
  [0, 1, 4, 0, 2, 2, 3, 4, 2, 1],
  [4, 3, 2, 0, 2, 2, 0, 3, 4, 4, 0, 2],
];

getLengthOfMissingArray(arrayOfArray);


