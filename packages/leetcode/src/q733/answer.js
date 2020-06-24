// @ts-check

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const R = image.length;
  const C = image[0].length;
  /**
   *
   * @type {{rIndex:number, cIndex: number}[]}
   */
  const points = [{ rIndex: sr, cIndex: sc }];
  const oldColor = image[sr][sc];
  if (oldColor === newColor) {
    return image;
  }

  while (points.length) {
    const { rIndex, cIndex } = points.pop();
    image[rIndex][cIndex] = newColor;

    if (rIndex - 1 >= 0 && image[rIndex - 1][cIndex] === oldColor) {
      points.push({ rIndex: rIndex - 1, cIndex });
    }
    if (rIndex + 1 < R && image[rIndex + 1][cIndex] === oldColor) {
      points.push({ rIndex: rIndex + 1, cIndex });
    }
    if (cIndex - 1 >= 0 && image[rIndex][cIndex - 1] === oldColor) {
      points.push({ rIndex, cIndex: cIndex - 1 });
    }
    if (cIndex + 1 < C && image[rIndex][cIndex + 1] === oldColor) {
      points.push({ rIndex, cIndex: cIndex + 1 });
    }
  }

  return image;
};

export { floodFill };
