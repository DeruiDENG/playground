// @ts-check
const TBD = -1;

/**
 * @typedef Point
 * @prop {number} rIndex
 * @prop {number} cIndex
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const results = matrix.map(row => row.map(x => (x === 0 ? 0 : TBD)));
  const points = findStartPoints(results);
  while (points.length) {
    const point = points.shift();
    points.push(...markPointsNearby(point, matrix, results));
  }

  return results;
};

/**
 * @param {Point} nextPoint
 * @param {number[][]} matrix
 * @param {number[][]} results
 * @return {Point[]} - markedPoints
 */
function markPointsNearby({ rIndex, cIndex }, matrix, results) {
  const currentDistance = results[rIndex][cIndex];
  /**
   *
   * @type {Point[]}
   */
  const markedPoints = [];

  if (rIndex - 1 >= 0 && results[rIndex - 1][cIndex] === TBD) {
    results[rIndex - 1][cIndex] = currentDistance + 1;
    markedPoints.push({ rIndex: rIndex - 1, cIndex });
  }
  if (rIndex + 1 < matrix.length && results[rIndex + 1][cIndex] === TBD) {
    results[rIndex + 1][cIndex] = currentDistance + 1;
    markedPoints.push({ rIndex: rIndex + 1, cIndex });
  }
  if (cIndex - 1 >= 0 && results[rIndex][cIndex - 1] === TBD) {
    results[rIndex][cIndex - 1] = currentDistance + 1;
    markedPoints.push({ rIndex, cIndex: cIndex - 1 });
  }
  if (cIndex + 1 < matrix[0].length && results[rIndex][cIndex + 1] === TBD) {
    results[rIndex][cIndex + 1] = currentDistance + 1;
    markedPoints.push({ rIndex, cIndex: cIndex + 1 });
  }

  return markedPoints;
}

/**
 *
 * @param {number[][]} results
 * @return {Point[]}
 */
function findStartPoints(results) {
  /**
   *
   * @type {Point[]}
   */
  const startPoints = [];
  for (let rIndex = 0; rIndex < results.length; rIndex++) {
    const row = results[rIndex];
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        startPoints.push({ rIndex, cIndex: i });
      }
    }
  }

  return startPoints;
}

export { updateMatrix };
