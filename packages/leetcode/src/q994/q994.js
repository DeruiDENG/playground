const FRESH = 1;
const ROTTED = 2;
const NEWLY_ROTTED = 3;
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const orangesRotting = function(grid) {
  let minuteCounter = 0;
  while (true) {
    let hasNewRotted = false;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
        if (
          grid[rowIndex][columnIndex] === FRESH &&
          hasRottedNearBy(grid, rowIndex, columnIndex)
        ) {
          grid[rowIndex][columnIndex] = NEWLY_ROTTED;
          hasNewRotted = true;
        }
      }
    }

    if (!hasNewRotted) {
      break;
    }

    minuteCounter++;
    grid = grid.map(row =>
      row.map(ele => (ele === NEWLY_ROTTED ? ROTTED : ele))
    );
  }

  if (grid.some(row => row.some(ele => ele === FRESH))) {
    return -1;
  }

  return minuteCounter;
};

/**
 *
 * @param {number[][]} grid
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {boolean}
 */
function hasRottedNearBy(grid, rowIndex, columnIndex) {
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
    .some(([row, column]) => grid[row][column] === ROTTED);
}
