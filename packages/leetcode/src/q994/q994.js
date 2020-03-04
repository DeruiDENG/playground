// @ts-check

const FRESH = 1;
const ROTTED = 2;
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const orangesRotting = function(grid) {
  const numColumn = grid[0].length;

  const queueIndexes = []
    .concat(...grid)
    .map((val, index) => ({ val, index }))
    .filter(ele => ele.val === ROTTED)
    .map(({ index }) => index);
  /**
   *
   * @type {Map<number, number>} <index, depth>
   */
  const depthMap = new Map(queueIndexes.map(index => [index, 0]));
  let depth = 0;
  while (queueIndexes.length) {
    const index = queueIndexes.pop();
    const columnIndex = index % numColumn;
    const rowIndex = (index - columnIndex) / numColumn;
    depth = depthMap.get(index);
    const nearByFreshItemsPositions = getNearByFreshItemsPos(
      grid,
      rowIndex,
      columnIndex
    );
    for (const { row, column } of nearByFreshItemsPositions) {
      const index = row * numColumn + column;
      if (depthMap.get(index) === undefined) {
        queueIndexes.unshift(index);
        grid[row][column] = ROTTED;
        depthMap.set(index, depth + 1);
      }
    }
  }

  if (grid.some(row => row.some(ele => ele === FRESH))) {
    return -1;
  }

  return depth;
};

/**
 *
 * @param {number[][]} grid
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {{row:number, column:number}[]}
 */
function getNearByFreshItemsPos(grid, rowIndex, columnIndex) {
  return [
    [rowIndex - 1, columnIndex],
    [rowIndex + 1, columnIndex],
    [rowIndex, columnIndex - 1],
    [rowIndex, columnIndex + 1],
  ]
    .filter(
      ([row, column]) =>
        row >= 0 && row < grid.length && column >= 0 && column < grid[0].length
    )
    .filter(([row, column]) => grid[row][column] === FRESH)
    .map(([row, column]) => ({ row, column }));
}
