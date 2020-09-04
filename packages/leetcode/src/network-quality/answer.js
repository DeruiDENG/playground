// @ts-check

/**
 * @param {number[][]} network
 * @return {number}
 */
function calculateNetworkQuality(network) {
  const ROW = network.length;
  const COLUMN = network[0].length;
  const flattenNetwork = network.reduce((acc, row) => [...acc, ...row], []);
  /**
   * @type {Map<number, number>} - key: point index, value: quality of the index
   */
  const resultMap = new Map();
  /**
   *
   * @type {Set<number>}
   */
  const toProcess = new Set([0]);

  while (true) {}
}

/**
 *
 * @param {number} pointQuality
 * @param {number} pointIndex
 * @param {Map<number, number>} resultMap
 */
function calculateQuality(pointQuality, nearbyPointIndex, resultMap) {}

/**
 *
 * @param {number} pointIndex
 * @param {number} row
 * @param {number} column
 */
function findNearByPointsIndex(pointIndex, row, column) {
  const rowIndex = Math.floor(pointIndex / column);
  const columnIndex = pointIndex % column;
  /**
   *
   * @type {number[]}
   */
  const result = [];
  if (rowIndex !== 0) {
    result.push(pointIndex - column);
  }

  if (rowIndex !== row - 1) {
    result.push(pointIndex + column);
  }

  if (columnIndex !== 0) {
    result.push(pointIndex - 1);
  }

  if (columnIndex !== column - 1) {
    result.push(pointIndex + 1);
  }

  return result;
}

export { calculateNetworkQuality };
