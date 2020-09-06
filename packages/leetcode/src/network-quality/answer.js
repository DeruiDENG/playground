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
   * @type {Map<number, number>} - a map to save the points with known quality when connected with the start point
   */
  const resultMap = new Map();
  /**
   *
   * @type {Set<number>}
   */
  const toProcessPointIndexes = new Set([0]);

  while (true) {
    let maxQuality = Number.MIN_SAFE_INTEGER;
    /**
     * @type {number}
     */
    let maxIndex = null;
    toProcessPointIndexes.forEach(index => {
      const nearbyPoints = findNearByPointsIndex(index, ROW, COLUMN);
      const quality = calculateQuality(
        flattenNetwork[index],
        nearbyPoints,
        resultMap
      );
      if (quality > maxQuality) {
        maxQuality = quality;
        maxIndex = index;
      }
    });

    // Add the new point to the result list
    resultMap.set(maxIndex, maxQuality);
    toProcessPointIndexes.delete(maxIndex);

    // Add new added points' nearby points to the to-do list
    findNearByPointsIndex(maxIndex, ROW, COLUMN)
      .filter(pointIndex => !resultMap.get(pointIndex))
      .forEach(index => toProcessPointIndexes.add(index));

    if (maxIndex === flattenNetwork.length - 1) {
      return maxQuality;
    }
  }
}

/**
 *
 * @param {number} pointQuality
 * @param {number[]} nearbyPointsIndexes
 * @param {Map<number, number>} resultMap
 */
function calculateQuality(pointQuality, nearbyPointsIndexes, resultMap) {
  const nearByPointsQuality = nearbyPointsIndexes
    .map(index => resultMap.get(index))
    .filter(quality => !!quality);
  if (nearByPointsQuality.length === 0) {
    return pointQuality;
  } else {
    return Math.min(pointQuality, Math.max(...nearByPointsQuality));
  }
}

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
