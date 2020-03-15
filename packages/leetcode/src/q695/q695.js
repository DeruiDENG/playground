// @ts-check

const LAND = 1;
const MARKED_LAND = 2;

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const maxAreaOfIsland = function(grid) {
  const numRow = grid.length;
  const numColumn = grid[0].length;
  let maxArea = 0;
  for (let rowIndex = 0; rowIndex < numRow; rowIndex++) {
    for (let columnIndex = 0; columnIndex < numColumn; columnIndex++) {
      const point = grid[rowIndex][columnIndex];
      if (point === LAND) {
        const area = calcAndMarkIslandArea(grid, rowIndex, columnIndex);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

/**
 * @param {number[][]} grid
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {number}
 */
function calcAndMarkIslandArea(grid, rowIndex, columnIndex) {
  const numRow = grid.length;
  const numColumn = grid[0].length;
  let count = 1;
  /**
   *
   * @type {{rowIndex: number, columnIndex: number}[]}
   */
  const queue = [{ rowIndex, columnIndex }];
  grid[rowIndex][columnIndex] = MARKED_LAND;

  while (queue.length) {
    const { columnIndex, rowIndex } = queue.pop();

    if (rowIndex - 1 >= 0 && grid[rowIndex - 1][columnIndex] === LAND) {
      queue.push({ rowIndex: rowIndex - 1, columnIndex });
      grid[rowIndex - 1][columnIndex] = MARKED_LAND;
      count++;
    }

    if (rowIndex + 1 < numRow && grid[rowIndex + 1][columnIndex] === LAND) {
      queue.push({ rowIndex: rowIndex + 1, columnIndex });
      grid[rowIndex + 1][columnIndex] = MARKED_LAND;
      count++;
    }

    if (columnIndex - 1 >= 0 && grid[rowIndex][columnIndex - 1] === LAND) {
      queue.push({ rowIndex: rowIndex, columnIndex: columnIndex - 1 });
      grid[rowIndex][columnIndex - 1] = MARKED_LAND;
      count++;
    }

    if (
      columnIndex + 1 < numColumn &&
      grid[rowIndex][columnIndex + 1] === LAND
    ) {
      queue.push({ rowIndex: rowIndex, columnIndex: columnIndex + 1 });
      grid[rowIndex][columnIndex + 1] = MARKED_LAND;
      count++;
    }
  }

  return count;
}
